# Chapter 8 — Diagram Placements

**Diagram source:** `chapters/ch08/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch08/text/chapter-08.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 8.N` (book convention)

## Placements (6 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **8.1** | `ch08-01-intelligence-explosion.png` | **200** | "...coordinating capability with values with coordination itself to create aligned superintelligence." | Hero image for §8.1. Lands on the chapter's first full statement of the B1/R1 recursion pattern, immediately before the Tegmark/Hassabis/Bostrom voices unpack it. |
| **8.2** | `ch08-03-hassabis-agi.png` | **267** | "...AGI coordinating with humans to create capabilities transcending both." | Closes the Hassabis section. Mirrors the diagram's R1 loop of specialized capabilities + meta-learning + goals routed through a coordination system. |
| **8.3** | `ch08-02-bostrom-control.png` | **302** | "...coordinating human values with superintelligent capability with recursive improvement to create aligned superintelligence. The future of consciousness depends on solving it." | Closes the Bostrom section. Mirrors the DAG's latent "true human values" confounder that makes containment alone fail — only value learning + corrigibility close the loop. |
| **8.4** | `ch08-04-seti-coordination-signatures.png` | **471** | "...better coordination between human insight about possible coordination patterns, AI detection of actual patterns in data, and physical observations of the universe. This is SETI as coordination science: searching for intelligence by searching for coordination." | Closes the Tarter section. Anchors the chapter's pivot from "detect signals" to "detect coordination signatures" — human hypothesis + AI detection + physics, with the latent alien-intent confounder. Folds in Seager's biosignature structure (same causal shape). |
| **8.5** | `ch08-05-dark-forest.png` | **543** | "...whether intelligence can coordinate across the cosmic three-body problem." | Closes the Liu Cixin section. Mirrors the R1 trap: delay + unknowability → perceived threat → preemption → silence, with the latent-by-absence coordination architecture node that would break the loop. |
| **8.6** | `ch08-06-consciousness-coordination.png` | **695** | "...understanding coordination that creates both." | Closes the Nagel section and the full §8.3 consciousness arc (Chalmers → Bach → Nagel). Mirrors the DAG with physical processing + subjective experience coordinated via an attention schema, and the latent qualia/irreducibility confounder. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 8.1:

```markdown

---

![Figure 8.1 — The intelligence-explosion three-body: Human Design, AI Self-Improvement, and Recursive Enhancement as a mixed loop set. A B1 corrigibility brake and an R1 aligned-acceleration flywheel run on the same nodes with opposite sign paths; coordination — not capability — is what's recursively improved.](../diagrams/png/ch08-01-intelligence-explosion.png)

*Figure 8.1 — Intelligence explosion as three-body recursion. See `../diagrams/svg/ch08-01-intelligence-explosion.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 8.1** — Intelligence explosion three-body recursion (hero for §8.1) · line 200
2. **Figure 8.2** — Hassabis AGI as coordination of specialized capabilities · line 267
3. **Figure 8.3** — Bostrom control problem / orthogonality DAG · line 302
4. **Figure 8.4** — SETI coordination signatures (Tarter + Seager) · line 471
5. **Figure 8.5** — Dark Forest self-reinforcing silence trap · line 543
6. **Figure 8.6** — Consciousness as meta-coordination (Chalmers / Bach / Nagel) · line 695

## Notes

- **Slug-to-figure mapping is not 1:1.** Slugs follow authoring order (Tegmark explosion → Bostrom → Hassabis → SETI → Dark Forest → Consciousness); figure numbers follow reading order in the chapter, which places Hassabis before Bostrom. So slug `ch08-03-hassabis-agi` becomes Figure 8.2 and slug `ch08-02-bostrom-control` becomes Figure 8.3.
- **No hero triptych.** Unlike Ch01's failure triptych, Ch08's three domains (AGI / SETI / Consciousness) are structurally distinct enough that a composite would flatten them. Each section gets its own closing diagram instead.
- **Figure 8.1 as §8.1 hero** sits at the section break between the prose build-up ("three-body intelligence recursion") and the three expert voices. It is the only diagram that leads its section; the other five all close their respective expert subsections, anchoring the causal claim at the moment the reader has just absorbed the argument in prose.
- **Figures 8.4 and 8.6 are the chapter's two "hard problem" diagrams** — both DAGs with latent confounders (alien intent; subjective experience/qualia) that make the causal question unanswerable from observation alone. Their placements reinforce that the impossibility is the point, not an authoring omission.
- **Figure 8.5 (Dark Forest)** is the only diagram in the chapter whose coordination architecture node is latent-by-absence — placed at the close of Liu Cixin's section, right where the prose pivots from "coordination fails" to "coordination architecture that *might* work."
- **Relative path `../diagrams/png/`** resolves cleanly because all Ch08 diagram assets live under `chapters/ch08/diagrams/`. The chapter is self-contained.
