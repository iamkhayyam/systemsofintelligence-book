# Systems of Intelligence

> **Binary thinking produces optimization. Ternary coordination produces emergence.**
> The future belongs to those who can see and design for three-body coordination.

Companion repository for the book **Systems of Intelligence** by Khayyam Wakil — a book about why every coordination failure of our era (Facebook's contagion experiment, the Uber AV, the 2008 crash, Boeing's MCAS) shares the same architecture, and what the fix looks like.

Website: **[systemsofintelligence.com](https://systemsofintelligence.com)** · Contact: someone@systemsofintelligence.com

---

## The thesis in one equation

```
Hardware  ↔  Software  ↔  Knowware
```

Three bodies coordinating. Drop any one and intelligence collapses back into mechanism. Add the third and new capability emerges that none of the components could produce alone.

## What's in the book

| | |
|---|---|
| **Chapters** | 9 interview chapters + 1 capstone (ChX) |
| **Expert voices** | 81 synthesized perspectives (9 per chapter) |
| **Chapter prose** | ~60,000 words |
| **Interview dialogue** | ~500,000 words across 81 full transcripts |
| **Appendices** | 3 — Mathematical Foundations, Technical Implementation, Resources |
| **Diagrams** | ~60 causal loop diagrams across chapters + appendix A |

The 81 voices span cybernetics (Wiener, Pangaro), information theory (Shannon, Turing), systems thinking (Meadows, Capra, Senge), AI research (LeCun, Amodei, Hassabis, Hinton's legacy), consciousness studies (Penrose, Damasio, Chalmers, Nagel, Anil Seth), indigenous wisdom (Hunbatz Men, Lakota Elder Phillip Deere), engineering (Jeff Dean, Lisa Su, Wendell Weeks, Neri Oxman), and anonymous operators inside intelligence communities (MK-Ultra, In-Q-Tel, DARPA).

## Repo layout

```
systems-intelligence/
├── chapters/
│   ├── front-matter/            # preface, prologue, acknowledgments, book-index
│   ├── chNN/                    # ch01 through ch09
│   │   ├── text/
│   │   │   ├── chapter-NN.md              # prose only (git-friendly)
│   │   │   └── chapter-NN-with-figures.md # prose + figure refs (reader-facing)
│   │   ├── interviews/          # 9 full-dialogue interviews per chapter
│   │   ├── diagrams/
│   │   │   ├── mermaid/         # .mmd source (canonical, version-controlled)
│   │   │   ├── png/             # rendered exports for print/PDF
│   │   │   ├── svg/             # rendered exports for web
│   │   │   ├── pen/             # .pen Pencil sources (high-fidelity editing)
│   │   │   ├── graph/           # arc_engine JSON (causal graphs)
│   │   │   └── _cut/            # archived diagram drafts
│   │   ├── DIAGRAMS.md          # index of causal diagrams
│   │   └── PLACEMENT.md         # figure placement map in prose
│   ├── chX/                     # The Grand Coordination — capstone
│   │   ├── text/                # ChX prose (author's voice, synthesizes all 81 voices)
│   │   ├── manifesto/           # standalone Knowware Manifesto
│   │   └── diagrams/            # 6 capstone figures
│   └── back-matter/             # about-author, appendix-a/b/c
├── _meta/
│   ├── annotations.json         # reader annotations (synced from preview.html)
│   ├── causal-diagram-research/ # arc_engine source + notes
│   ├── viewer/                  # published viewer for GitHub Pages
│   └── proof/                   # push.py — sync chapters into proofeditor.ai
├── .github/workflows/           # annotate.yml (repository_dispatch → annotations.json)
├── preview.html                 # local book reader (open in browser)
└── PLACEMENTS.md                # master figure placement index
```

## Local preview

```bash
# Serve the book reader locally
python3 -m http.server 8765

# Open in browser
open http://localhost:8765/preview.html
```

The preview renders every chapter with its diagrams, supports text highlighting + annotations (SVG warning markers in the right gutter aligned with page numbers), and syncs annotation state through the `annotate.yml` GitHub workflow.

## Diagram convention

Each causal diagram has parallel artifacts:

1. **Mermaid** (`diagrams/mermaid/NN-slug.mmd`) — canonical source, git-friendly
2. **Pencil** (`diagrams/pen/NN-slug.pen`) — high-fidelity visual editing
3. **PNG/SVG** (`diagrams/png/`, `diagrams/svg/`) — rendered exports for print + web
4. **Graph JSON** (`diagrams/graph/NN-slug.json`) — arc_engine causal graph source

`DIAGRAMS.md` in each chapter indexes intended diagrams + status. `PLACEMENT.md` anchors figures to specific prose line numbers for reliable reflow.

## Interview format

Every one of the 81 interviews is a complete, timecoded dialogue — minimum 42 minutes of runtime, 5,000-8,500 words. Structure:

- **Cold Open** (0:00-0:45) — narrator V.O. setup
- **Act I** — foundation
- **Act II** — substance
- **Act III** — synthesis + what the subject would say about AI
- **Key Insights**, **Cross-References** to other interviews, closing paragraph

Synthesized from each subject's published work, talks, and documented thinking. For deceased voices (Wiener, Shannon, Turing, Feynman, Meadows, Ramanujan, McKenna, Phillip Deere, Thich Nhat Hanh Foundation), a `NOTE ON SYNTHESIS METHOD` block explains sourcing.

## Status

| Layer | State |
|---|---|
| Chapter prose (1-9 + ChX) | ✅ Complete — 81 voices integrated, all cut voices removed |
| Interviews (81) | ✅ Complete — full dialogue, 42+ min each |
| Front matter | ✅ Aligned with 9 + ChX structure |
| Back matter | ✅ Aligned; appendices A/B/C stable |
| Diagrams | 🟡 ~60 identified, most rendered; Fig 1.8 + 7.4 pending replacement after voice cuts |
| Preview reader | ✅ Working — annotations, figure alignment, mobile |

## Writing system

The prose and interviews are maintained in parallel:

- **`chapter-NN.md`** — pure prose, no figure markdown. Git-friendly diffs.
- **`chapter-NN-with-figures.md`** — same prose with `![Figure]()` blocks at anchor points defined in `PLACEMENT.md`. This is what the preview and publishing pipeline read.

The two must stay in sync. Every prose edit touches both.

## Publishing pipeline

- **Local preview**: `preview.html` (this repo) — fast feedback during writing
- **Proof editor**: `_meta/proof/push.py` — sync chapters into [proofeditor.ai](https://proofeditor.ai) for collaborative review
- **Print/PDF**: chapter-NN-with-figures.md + diagrams/png/ → layout pipeline (LaTeX/InDesign)
- **Web**: GitHub Pages serves `_meta/viewer/` for public reading

## License & contact

Book content © Khayyam Wakil. All rights reserved.

Repo tooling (scripts, schemas, viewer) provided as-is for reference.

For collaboration, speaking, or coordination revolution correspondence: **someone@systemsofintelligence.com**

---

*Not human OR AI. Not biological OR artificial. Not individual OR collective. But human coordinating with AI coordinating with context. The species that survives the next century will be the one that learned to think in threes.*
