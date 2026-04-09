# Chapter 5 — Diagram Placements

**Diagram source:** `chapters/ch05/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch05/text/chapter-05.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 5.N` (book convention)

## Placements (5 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **5.1** | `ch05-01-neural-interface-coupling.png` | **114** | "...because it emerges from coordination rather than command." | Lands at the end of the Neuralink / Noland Arbaugh three-week coordination-learning passage, where the brain ↔ interface ↔ AI reinforcing loop is first fully articulated. Nicolelis's body-schema observation then elaborates the latent confounder. |
| **5.2** | `ch05-02-binary-deployment-failure.png` | **142** | "...measuring success by how much it improves a patient's ability to coordinate with their world, not just technical performance." | Closes the Oxley / Synchron passage — the source of the chapter's thesis that binary deployment analysis is biased. The DAG's confounding arcs from `Coordination Context` visualize exactly what Oxley says BCI research misses. |
| **5.3** | `ch05-03-attention-economy-trap.png` | **243** | "...designing systems that coordinate multiple values to create emergent wellbeing." | Closes the Tristan Harris passage on the Like button, autoplay, and infinite scroll. The reinforcing loop makes the "coordination trap" Harris describes legible as a structure. |
| **5.4** | `ch05-04-virtue-ethics-moderation.png` | **227** | "...coordination that develops both human and artificial intelligence toward excellence." | Closes the Shannon Vallor virtue-ethics passage. Deliberately precedes Figure 5.3 in slug order but follows it in the text — Vallor's balancing loop is the contrast pair to Harris's reinforcing trap. |
| **5.5** | `ch05-05-wikipedia-collective-intelligence.png` | **329** | "...coordination platforms that enable collective intelligence, not AI systems that replace it." | Closes the Jimmy Wales passage, carrying both Wales and Pentland. The mixed R1 + B1 loops show individual contribution amplifying quality while community norms balance vandalism pressure. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 5.1:

```markdown

---

![Figure 5.1 — Neural interface coupling: Brain, Interface, and AI System form a reinforcing loop as each adapts to the others. The latent "Body Schema" node (dashed) is Nicolelis's confounder — the brain's self-representation absorbs the device and makes the interface→agency effect non-identifiable.](../diagrams/png/ch05-01-neural-interface-coupling.png)

*Figure 5.1 — Three-body neural interface coupling. See `../diagrams/svg/ch05-01-neural-interface-coupling.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 5.1** — Neural interface coupling (Brain ↔ Interface ↔ AI) · line 114
2. **Figure 5.2** — Binary deployment failure DAG (Oxley) · line 142
3. **Figure 5.4** — Virtue-ethics content moderation balancing loop (Vallor) · line 227
4. **Figure 5.3** — Attention-economy reinforcing trap (Harris) · line 243
5. **Figure 5.5** — Wikipedia collective intelligence (Wales / Pentland) · line 329

## Notes

- **Figure numbering follows slug order, not reading order.** Figures 5.3 and 5.4 are a deliberate contrast pair (reinforcing trap vs. balancing loop on the same three-body ethics frame); the text encounters Vallor (5.4) before Harris (5.3), but the slug numbering preserves the DIAGRAMS.md pairing so readers can compare them side-by-side by number.
- **Figure 5.2** is the chapter's only DAG. It is placed at the end of the Oxley passage rather than at §5.1's opening because Oxley is the source who explicitly names the "binary vs. ternary deployment" claim the DAG encodes.
- **Figure 5.1's latent node** (`Body Schema`) captures Nicolelis's observation about brain self-representation absorbing the device. The figure is placed after the Arbaugh passage but before Nicolelis so the loop is visible while his body-schema commentary elaborates the confounder.
- **No triptych or composite** is needed for Chapter 5 — the five diagrams map cleanly onto the chapter's three sections (§5.1 neural interfaces, §5.2 ethics, §5.3 collective intelligence) with 2 / 2 / 1 coverage.
- **Relative path `../diagrams/png/`** — self-contained per-chapter, matching Ch01 convention.
