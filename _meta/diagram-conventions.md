# Diagram conventions

We follow the **arc_engine** spec we developed during research (see `_meta/causal-diagram-research/arc_engine.jsx`). All causal diagrams in this book are **data-first**: each diagram is a JSON graph object that gets rendered by `arc_engine`'s `DiagramSVG` component. Mermaid + .pen + PNG are all *outputs* of that single source of truth.

## Source of truth: the graph object

Each diagram is a `.json` file under `chapters/chNN/diagrams/graph/NN-slug.json` shaped like:

```jsonc
{
  "id": "01-facebook-three-body",
  "title": "Facebook three-body system",
  "summary": "Algorithmic curation, human emotion, and social network dynamics coordinate to produce emergent collective behavior.",
  "fmt": "cld",                          // "cld" | "dag" | "both"
  "nodes": [
    {
      "id": "n1",
      "label": "Human Behavior",         // 2–4 words, Title Case
      "description": "Emotion, attention, posting",
      "category": "driver",              // driver | outcome | mediator | feedback | latent
      "is_latent": false
    }
  ],
  "edges": [
    {
      "from": "n1",
      "to": "n2",
      "polarity": "positive",            // positive | negative
      "description": "More emotion → more engagement signal",
      "has_delay": false,
      "is_confounding": false
    }
  ],
  "loops": [
    {
      "type": "reinforcing",             // reinforcing (R) | balancing (B)
      "label": "R1 — Engagement spiral",
      "nodes": ["n1","n2","n3"],
      "minus_count": 0                   // even = R, odd = B
    }
  ],
  "identifiability": "not_identifiable",
  "identifiability_note": "Confounded by social network dynamics (latent)."
}
```

## Visual rules (from arc_engine)

| Element | Rule |
|---|---|
| **Node shape** | Circle, radius 33px, dashed outer ring |
| **Latent node** | Dashed gray ellipse (rx=40, ry=22), uppercase + "latent" tag below |
| **Node colors (by category)** | driver `#0c3a6a` · outcome `#e8722a` · mediator `#3a1a6a` · feedback `#1a5a32` · latent `#9a9a9a` |
| **Label font** | `Barlow Condensed`, 10px, 700 weight, UPPERCASE, letterSpacing 0.05em |
| **Label wrap** | ~10 chars per line, centered |
| **Edge curve** | Quadratic Bézier, control point offset 18px perpendicular (40px for confounding) |
| **Positive edge** | Solid green `#1a5a32`, filled green arrow |
| **Negative edge** | Solid red `#7a1a1a`, filled red arrow |
| **Confounding edge** | Gray dashed `(4,3)`, 50% opacity, bidirected — only rendered in `dag`/`both` |
| **Polarity badge** | Square box on curve midpoint, monospace 11px bold, `+` or `−` |
| **Delay marks** | Two short perpendicular ticks `||` on the arrow midpath when `has_delay: true` |
| **Loop badge** | Dashed ellipse around centroid + R/B label. R = green `#1a5a32`, B = orange `#b85a1a` |
| **Layout** | Auto-circular: visible nodes on `r = min(w,h)*0.27`; latent on `r = min(w,h)*0.42`, offset π/5 |
| **Canvas** | Default 800 × 600 |

## Semantic rules

- **Each variable is one node**, not one node per value. Labels are nouns, not verbs ("Police Per Capita" ✓, "More Police" ✗).
- **One arrow per causal pair**. Reverse causality → use a bidirected confounding arc instead, never two opposite arrows.
- **Loops require a closed path** of ≥2 nodes. Compute polarity by counting negative edges:
  - Even negatives → **Reinforcing (R)** — vicious/virtuous cycle
  - Odd negatives → **Balancing (B)** — equilibrium-seeking
- **`has_delay`** only when an effect doesn't manifest immediately.
- **Identifiability** is required for `fmt: "dag"` or `"both"` (Pearl-style causal inference).

## File layout per diagram

```
chapters/chNN/diagrams/
├── graph/   NN-slug.json    ← source of truth (arc_engine data shape)
├── mermaid/ NN-slug.mmd     ← lossy markdown render
├── pen/     chNN-diagrams.pen   ← Pencil-rendered (one file per chapter)
└── png/     NN-slug.png     ← exported from .pen for print
```

## Pipeline

```
graph/*.json  ──┬──►  mermaid/*.mmd   (text fallback, GitHub-renderable)
                ├──►  pen/*.pen       (high-fidelity visual)
                └──►  arc_engine + React  (interactive web rendering)
                              │
                              └──►  png/*.png   (print export)
```

## Reference files
- `_meta/causal-diagram-research/arc_engine.jsx` — canonical renderer
- `_meta/causal-diagram-research/causation-diagram-serif.jsx` — alt serif style
- `_meta/causal-diagram-research/Causal graph - Wikipedia.md`
- `_meta/causal-diagram-research/Chapter 6 - Causal Diagrams  The Effect.md`
- `_meta/causal-diagram-research/DAGitty - drawing and analyzing causal diagrams (DAGs).md`
