# Diagram Placements — Book-wide Index

**Total: 65 figures across 13 chapter-like sections** (62 unique diagrams + 1 triptych + 2 cross-referenced reuses)

Each chapter has a `PLACEMENT.md` file with exact insertion points for every figure — the line number in the chapter text, the anchor passage, the caption, and the rationale. This index links to each per-chapter placement doc and gives a top-level tally.

## Per-chapter placement docs

| Chapter | Figures | Placement doc |
|---|---|---|
| **Preface** (front matter) | **1** (Reading Legend — pedagogical) | [`chapters/front-matter/preface/PLACEMENT.md`](chapters/front-matter/preface/PLACEMENT.md) |
| **Prologue** (front matter) | **2** (both reused from Appendix A) | [`chapters/front-matter/prologue/PLACEMENT.md`](chapters/front-matter/prologue/PLACEMENT.md) |
| Chapter 1 — Coordination Intelligence Revolution | **8** (1 hero + 3 failures + 1 triptych + 3 pattern) | [`chapters/ch01/PLACEMENT.md`](chapters/ch01/PLACEMENT.md) |
| Chapter 2 — Dawn of Systems Intelligence | 5 | [`chapters/ch02/PLACEMENT.md`](chapters/ch02/PLACEMENT.md) |
| Chapter 3 — Architecture of Systems Intelligence | 6 | [`chapters/ch03/PLACEMENT.md`](chapters/ch03/PLACEMENT.md) |
| Chapter 4 — Systems Intelligence in Action | 6 | [`chapters/ch04/PLACEMENT.md`](chapters/ch04/PLACEMENT.md) |
| Chapter 5 — Human-Systems Intelligence Interaction | 5 | [`chapters/ch05/PLACEMENT.md`](chapters/ch05/PLACEMENT.md) |
| Chapter 6 — Consciousness as Pattern Recognition | 5 | [`chapters/ch06/PLACEMENT.md`](chapters/ch06/PLACEMENT.md) |
| Chapter 7 — Engineering Reality | 5 | [`chapters/ch07/PLACEMENT.md`](chapters/ch07/PLACEMENT.md) |
| Chapter 8 — Beyond Human Intelligence | 6 | [`chapters/ch08/PLACEMENT.md`](chapters/ch08/PLACEMENT.md) |
| Chapter 9 — No Way Know-How | 6 | [`chapters/ch09/PLACEMENT.md`](chapters/ch09/PLACEMENT.md) |
| Chapter X — The Grand Coordination | 6 | [`chapters/chX/PLACEMENT.md`](chapters/chX/PLACEMENT.md) |
| Appendix A — Mathematical Foundations | 4 | [`chapters/back-matter/appendix-a/PLACEMENT.md`](chapters/back-matter/appendix-a/PLACEMENT.md) |
| **Total** | **65** | (63 unique + 1 triptych + 2 Prologue reuses of Appendix A figures already counted) |

## File layout convention (adopted book-wide)

```
chapters/
├── chNN/
│   ├── text/
│   │   └── chapter-NN.md          ← insertion target
│   ├── diagrams/
│   │   ├── graph/                 ← arc_engine source JSONs (source of truth)
│   │   ├── png/                   ← rendered PNGs (used by figures)
│   │   └── svg/                   ← vector source
│   ├── DIAGRAMS.md                ← diagram inventory + design rationale
│   └── PLACEMENT.md               ← this chapter's figure placements
├── back-matter/appendix-a/        ← same layout
└── front-matter/                  ← same layout (no diagrams yet)
```

## Insertion syntax (uniform across all chapters)

Every figure inserts as a markdown image with a caption. The template is:

```markdown

---

![Figure N.M — {long accessible description}.](../diagrams/png/{slug}.png)

*Figure N.M — {short caption}. See `../diagrams/svg/{slug}.svg` for the vector source.*

---

```

- `N` = chapter number (1–9, X, or A for Appendix A)
- `M` = figure number within the chapter (reading order, not slug order)
- Relative path `../diagrams/png/` because text files live at `chapters/chNN/text/`
- Horizontal rules above/below give the image breathing room in the flowing prose

## Global statistics

| Metric | Count |
|---|---|
| Unique diagrams authored | **62** (61 chapter diagrams + 1 Preface reading legend) |
| Composite figures (triptychs etc.) | 1 (Ch01 failure triptych) |
| Cross-referenced reuses | 2 (Prologue reuses 2 Appendix A diagrams) |
| **Total figure slots in final book** | **65** |
| Sections with placements | 13 (Preface + Prologue + 10 chapters + Appendix A) |
| Average figures per section | 5.0 |
| Minimum (Preface) | 1 |
| Maximum (Ch01) | 8 |
| Appendix A count | 4 |

## Next step

The placements are a **plan, not an edit**. None of the chapter text files have been modified — `chapter-NN.md` files are untouched. To actually insert the figures, run an insertion pass that reads each PLACEMENT.md and performs the edits. Recommended approach: one agent per chapter for verification + edit, or a single script that parses the placement tables and applies the edits in one batch.

## Open questions raised by the agents

Each per-chapter PLACEMENT.md has its own "Notes" or "Open questions" section. Top-level concerns to review before insertion:

- **Preface**: The Reading Legend (Fig P.1) is the only pedagogical (non-causal) diagram in the book. It lands at line 141 under §"How to Read This Book". Alternative placement: move it earlier to line 27 under §"What You're Actually Reading" so the reader sees the legend before even encountering the three-ware naming.
- **Prologue**: Both figures are **reused** from Appendix A. The Prologue copies (`prologue/diagrams/graph/*.json`) are byte-for-byte copies of the Appendix A source. If the source ever changes, the copies must be re-synced. Consider symlinking instead of copying, or adding a `reuses: appA-NN` field to the graph schema.
- **Ch01**: Should the Facebook hero image (Fig 1.1) move *earlier* to act as a cold-open image before the narrative even begins?
- **Ch05**: Figure 5.4 (Virtue Ethics) follows Figure 5.3 (Attention Trap) in slug order but precedes it in text order — make sure the captions reflect the contrast pair framing.
- **Ch08**: Diagrams 8.2 and 8.3 were re-ordered (Hassabis AGI before Bostrom Control) based on the chapter's actual narrative sequence — verify this matches authorial intent.
- **Ch09**: Figure 9.3 (Raworth Doughnut) and Figure 9.4 (Yang UBI) are in different order than the slug numbers — verify the reading flow reads correctly.
- **Appendix A**: Figure A.4 lives in §A.7, not §A.2 where the other π/φ diagrams anchor — the attractor-basin formalism is introduced later, so the diagram placement is correct even though it separates from its π/φ siblings.  
