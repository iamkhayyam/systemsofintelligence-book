#!/usr/bin/env python3
"""
proof-push.py — Push a chapter from the local repo into Proof (proofeditor.ai).

Usage:
    python3 _meta/proof/push.py <section>              # e.g. ch01, ch05, preface, appendix-a
    python3 _meta/proof/push.py --all                  # push every section

What it does:
    1. Reads chapters/<section>/text/*-with-figures.md
    2. Rewrites every `../diagrams/png/foo.png` → full Pages URL
       (https://iamkhayyam.github.io/systemsofintelligence-book/chapters/<section>/diagrams/png/foo.png)
    3. If the section has no Proof doc yet → POST /share/markdown (creates a new doc)
       Otherwise → updates the existing doc via /edit/v2 using rewrite.apply-style replacement
    4. Writes the result to _meta/proof/docs.json so subsequent pushes update in place

Preserves: existing comments and suggestion threads (when updating in place).
Authorship: every write carries `by: "ai:soi-book-sync"`.
"""
from __future__ import annotations
import json, re, sys, os, urllib.request, urllib.error, uuid, time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DOCS_JSON = ROOT / "_meta" / "proof" / "docs.json"
PAGES_BASE = "https://iamkhayyam.github.io/systemsofintelligence-book"
PROOF_API = "https://www.proofeditor.ai"
AGENT = "ai:soi-book-sync"

# Map of section key → (chapter path, source markdown file, display title)
SECTIONS = {
    "preface":    ("chapters/front-matter/preface",    "text/preface-with-figures.md",      "Preface — A Letter to the Reader"),
    "prologue":   ("chapters/front-matter/prologue",   "text/prologue-with-figures.md",     "Prologue — The Circle of All Possibility"),
    "ch01":       ("chapters/ch01",                    "text/chapter-01-with-figures.md",   "Chapter 1 — The Coordination Intelligence Revolution"),
    "ch02":       ("chapters/ch02",                    "text/chapter-02-with-figures.md",   "Chapter 2 — The Dawn of Systems Intelligence"),
    "ch03":       ("chapters/ch03",                    "text/chapter-03-with-figures.md",   "Chapter 3 — Architecture of Systems Intelligence"),
    "ch04":       ("chapters/ch04",                    "text/chapter-04-with-figures.md",   "Chapter 4 — Systems Intelligence in Action"),
    "ch05":       ("chapters/ch05",                    "text/chapter-05-with-figures.md",   "Chapter 5 — Human-Systems Intelligence Interaction"),
    "ch06":       ("chapters/ch06",                    "text/chapter-06-with-figures.md",   "Chapter 6 — Consciousness as Pattern Recognition"),
    "ch07":       ("chapters/ch07",                    "text/chapter-07-with-figures.md",   "Chapter 7 — Engineering Reality"),
    "ch08":       ("chapters/ch08",                    "text/chapter-08-with-figures.md",   "Chapter 8 — Beyond Human Intelligence"),
    "ch09":       ("chapters/ch09",                    "text/chapter-09-with-figures.md",   "Chapter 9 — No Way Know-How"),
    "chX":        ("chapters/chX",                     "text/chapter-X-with-figures.md",    "Chapter X — The Grand Coordination"),
    "appendix-a": ("chapters/back-matter/appendix-a",  "text/appendix-a-with-figures.md",   "Appendix A — Mathematical Foundations of Knowware"),
}

def rewrite_images(md: str, section_path: str) -> str:
    """Rewrite relative image paths to absolute Pages URLs AND convert markdown
    images to HTML <img> tags with explicit width constraints. Proof renders
    images at native resolution without width hints, so we embed them in the
    markdown itself.

    Widths:
      - triptych (extreme aspect ratio): 920px
      - all other diagrams: 680px
    """
    prefix = f"{PAGES_BASE}/{section_path}/diagrams"
    # Step 1: rewrite the SVG reference in captions (stays as plain text)
    md = re.sub(r"\.\./diagrams/svg/", f"{prefix}/svg/", md)

    # Step 2: convert markdown image syntax to HTML <img>, resolving paths + adding width
    def img_sub(m: re.Match) -> str:
        alt = m.group(1).replace('"', '&quot;')
        src_rel = m.group(2)
        # Resolve the relative path
        if src_rel.startswith("../diagrams/"):
            src = src_rel.replace("../diagrams/", f"{prefix}/")
        elif src_rel.startswith(("http://", "https://")):
            src = src_rel
        else:
            src = src_rel  # leave as-is
        # Width heuristic: triptychs / composites get wider
        fname = src_rel.rsplit("/", 1)[-1].lower()
        width = 920 if ("triptych" in fname or "composite" in fname or "plate" in fname) else 680
        return (
            f'<p align="center">'
            f'<img src="{src}" alt="{alt}" width="{width}" />'
            f'</p>'
        )

    md = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", img_sub, md)
    return md

def load_docs() -> dict:
    if DOCS_JSON.exists():
        return json.loads(DOCS_JSON.read_text())
    return {}

def save_docs(docs: dict) -> None:
    DOCS_JSON.parent.mkdir(parents=True, exist_ok=True)
    DOCS_JSON.write_text(json.dumps(docs, indent=2) + "\n")

def http(method: str, url: str, body: dict | None = None, headers: dict | None = None) -> dict:
    data = json.dumps(body).encode("utf-8") if body is not None else None
    headers = {**(headers or {}), "Content-Type": "application/json", "User-Agent": "soi-book-sync/1.0"}
    req = urllib.request.Request(url, data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode("utf-8")
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        body_text = e.read().decode("utf-8", errors="replace")
        # Friendly error for common cases
        try:
            parsed = json.loads(body_text)
            if parsed.get("code") == "LIVE_CLIENTS_PRESENT":
                raise RuntimeError(
                    "LIVE_CLIENTS_PRESENT — a reviewer has the Proof doc open in their browser.\n"
                    "  Fix: close the browser tab (or wait 60s), then re-run the push.\n"
                    "  The doc will update in place once no live clients are connected."
                ) from e
        except (ValueError, KeyError):
            pass
        raise RuntimeError(f"HTTP {e.code} {method} {url}\n{body_text}") from e

def create_doc(title: str, markdown: str) -> dict:
    return http("POST", f"{PROOF_API}/share/markdown", {
        "title": title,
        "markdown": markdown,
    })

def update_doc(slug: str, token: str, markdown: str) -> dict:
    """Update an existing doc in place using rewrite.apply — preserves comment threads."""
    # Read state to get baseToken
    state = http("GET", f"{PROOF_API}/api/agent/{slug}/state", headers={
        "Authorization": f"Bearer {token}",
        "X-Agent-Id": AGENT,
    })
    base = (state.get("mutationBase") or {}).get("token") or state.get("baseToken")
    if not base:
        raise RuntimeError(f"Could not get baseToken from /state: {json.dumps(state)[:400]}")
    return http("POST", f"{PROOF_API}/api/agent/{slug}/ops", {
        "type": "rewrite.apply",
        "by": AGENT,
        "baseToken": base,
        "content": markdown,
    }, headers={"Authorization": f"Bearer {token}"})

def push_section(key: str, docs: dict) -> dict:
    if key not in SECTIONS:
        raise SystemExit(f"Unknown section '{key}'. Valid: {', '.join(SECTIONS)}")
    section_dir, md_rel, title = SECTIONS[key]
    md_path = ROOT / section_dir / md_rel
    if not md_path.exists():
        raise SystemExit(f"File not found: {md_path}")
    print(f"[{key}] reading {md_path.relative_to(ROOT)}", flush=True)
    md = md_path.read_text()
    # Count figures in the SOURCE markdown before rewriting (we're converting to <img>)
    figs = len(re.findall(r"^!\[Figure", md, re.M))
    md_rewritten = rewrite_images(md, section_dir)
    print(f"[{key}] {len(md_rewritten)} chars · {figs} figures · images → {PAGES_BASE}/{section_dir}/diagrams/…", flush=True)

    existing = docs.get(key)
    if existing and existing.get("slug") and existing.get("accessToken"):
        print(f"[{key}] updating in place — slug={existing['slug']}", flush=True)
        result = update_doc(existing["slug"], existing["accessToken"], md_rewritten)
        entry = {**existing, "lastPushedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()), "figures": figs, "title": title}
    else:
        print(f"[{key}] creating new Proof doc…", flush=True)
        result = create_doc(title, md_rewritten)
        # Store the essentials
        entry = {
            "slug": result.get("slug"),
            "accessToken": result.get("accessToken"),
            "shareUrl": result.get("shareUrl"),
            "tokenUrl": result.get("tokenUrl"),
            "title": title,
            "sectionPath": section_dir,
            "figures": figs,
            "createdAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "lastPushedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        }
    docs[key] = entry
    return entry

def main() -> None:
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        raise SystemExit(2)
    docs = load_docs()
    targets = list(SECTIONS.keys()) if args[0] == "--all" else [args[0]]
    for key in targets:
        try:
            entry = push_section(key, docs)
            save_docs(docs)
            url = entry.get("tokenUrl") or entry.get("shareUrl") or f"{PROOF_API}/d/{entry.get('slug')}"
            print(f"[{key}] ✓ {url}\n", flush=True)
        except Exception as e:
            print(f"[{key}] ✗ FAILED: {e}\n", file=sys.stderr, flush=True)

if __name__ == "__main__":
    main()
