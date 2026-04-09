# Chapter 7 — Diagram Placements

**Diagram source:** `chapters/ch07/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch07/text/chapter-07.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 7.N` (book convention)

## Placements (5 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **7.1** | `ch07-01-generative-design-three-body.png` | **221** | "...The solution emerged from coordinating human judgment with AI exploration with manufacturing reality." | Hero image for §7.1. Lands on the GM seat bracket payoff sentence where the three bodies converge on the emergent design. |
| **7.2** | `ch07-02-oxman-silk-pavilion.png` | **368** | "...coordinating with nature to create emergence that serves both." | Closes the Oxman Silk Pavilion passage, where the biological → computational → fabrication ordering is explicit. |
| **7.3** | `ch07-03-vqe-hybrid-loop.png` | **499** | "...classical stability coordinating with quantum advantage coordinating with hybrid strategy to create capabilities neither has alone." | Anchors §7.2 at the VQE case study payoff. Decoherence enters as a NISQ-era constraint on the quantum node. |
| **7.4** | `ch07-04-covariant-sim-to-real.png` | **593** | "...The future of AI robotics isn't perfect models deployed once, but adaptive systems that continuously improve through coordination." | Closes the Abbeel / Covariant passage. The chapter's only balancing loop — closes the sim-to-real error gap toward 99%+. |
| **7.5** | `ch07-05-mlops-production-gap.png` | **603** | "...The future of production ML, she concludes, is about better coordination between models, systems, and business reality..." | Closes Chip Huyen's 70% failure passage. The chapter's contrarian diagram: a latent coordination layer confounds model, system, and business drivers. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 7.1:

```markdown

---

![Figure 7.1 — Generative design three-body system: Engineer Goals, AI Generation, and Manufacturing Reality form a reinforcing loop that converges on the GM seat bracket (40% lighter, 8 parts → 1).](../diagrams/png/ch07-01-generative-design-three-body.png)

*Figure 7.1 — Generative design three-body loop. See `../diagrams/svg/ch07-01-generative-design-three-body.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 7.1** — Generative design three-body (GM seat bracket) · line 221
2. **Figure 7.2** — Oxman Silk Pavilion bio↔comp↔fab coordination · line 368
3. **Figure 7.3** — VQE hybrid quantum-classical loop · line 499
4. **Figure 7.4** — Covariant sim-to-real balancing loop · line 593
5. **Figure 7.5** — MLOps production gap (latent coordination confounder) · line 603

## Notes

- **Figure 7.3 (VQE)** is the only diagram in the chapter with a driver-mediator-feedback mix; decoherence enters as a negative-polarity constraint on the quantum node rather than as a loop participant, matching Preskill's NISQ framing.
- **Figure 7.4 (sim-to-real)** is the only balancing loop in the chapter — fitting, since it's the only case study where the coordination work is explicitly *closing an error gap* rather than *generating emergence*.
- **Figure 7.5 (MLOps)** is the only `fmt: "both"` diagram — the latent coordination layer is a Pearl-style confounder, so the DAG rendering matters for the "not identifiable" claim. It's also the chapter's contrarian diagram: emergence *fails* without explicit coordination infrastructure.
- **Slug-to-figure mapping is 1:1** in Ch07 because the authoring order (01 → 05) already follows reading order (§7.1 design → §7.2 quantum → §7.3 MLOps).
- **Relative path `../diagrams/png/`** is clean because all Ch07 diagram files live in `chapters/ch07/diagrams/png/`. The chapter is self-contained.
