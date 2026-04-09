# Preface — Diagram Placements

**Chapter text:** `chapters/front-matter/preface/text/preface.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure P.N` (P for Preface)

The Preface has exactly **one** figure — a pedagogical reading-legend that introduces the entire visual vocabulary the reader will encounter 62 more times. It must appear before the reader meets any real causal diagram.

## Placements (1 figure)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **P.1** | `preface-00-reading-legend.png` | **141** (section heading "## How to Read This Book") | "## How to Read This Book" | Lands immediately under the section heading so the reader sees the legend *before* the Reading Paths subsection at line 169. This is the only figure in the book that isn't a real causal system — its job is to teach the visual vocabulary. |

## Insertion syntax

```markdown

---

![Figure P.1 — Reading Legend: every visual convention used in the 62 figures across this book, shown once. Five node categories (driver, mediator, outcome, feedback, latent), two edge polarities (+ green, − red), delay marks (double ticks), confounding arcs (dashed gray from latent nodes), and both loop types (R1 reinforcing, B1 balancing).](../diagrams/png/preface-00-reading-legend.png)

*Figure P.1 — Reading Legend. See `../diagrams/svg/preface-00-reading-legend.svg` for the vector source. Read this legend once; every other figure in the book uses the same conventions.*

---

```

## Why this figure matters

The book uses causal diagrams as its primary instrument of argument — 62 figures across 11 chapters plus this Preface. But the visual vocabulary (node categories, edge polarities, loop parity, latent confounders, delay ticks, confounding arcs) is never formally introduced anywhere in the narrative. A reader encountering Figure 1.1 in Chapter 1 sees a dashed ellipse, three colored circles, a curved arrow with a little `+` in a box, and has to intuit what any of it means.

This figure solves that. It is **pedagogical, not causal** — the only diagram in the book whose job is to teach the viewer how to parse every other diagram. It ships with the full `arc_engine` graph schema so it can be inspected in the viewer like any other figure, but its semantics are meta.

## Open questions

1. **Should the legend appear even earlier?** Right now it lands under §"How to Read This Book" (line 141). That's ~800 words into the Preface. An alternative is to put it directly under §"What You're Actually Reading: The Three Ware Problem" (line 27) so the reader sees the legend before even finishing the Preface's first big section.
2. **Does `Figure P.1` or `Figure 0.1` read better in the final book?** The book convention is Figure N.M where N is the chapter number. The Preface has no chapter number — `P.1` is unambiguous but unusual; `0.1` looks numeric but may confuse.
3. **Should the legend be duplicated in Appendix A** as a mathematical-notation key, adjacent to the formal definitions? The legend currently lives only in the Preface.
