# Chapter 6 — Diagram Placements

**Diagram source:** `chapters/ch06/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch06/text/chapter-06.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 6.N` (book convention)

## Placements (5 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **6.1** | `ch06-01-uber-classification-failure.png` | **42** | "...no emergent awareness of the *meaning* of the coordinated data streams..." | Lands at the end of the NTSB timeline analysis, where the awareness-gap diagnosis is made explicit. The latent `Contextual Awareness` node mirrors the prose's "missing third body." |
| **6.2** | `ch06-02-russell-alignment-loop.png` | **83** | "...we risk creating powerful Midas-like machines that give us exactly what we ask for, with devastating consequences for what we truly want." | Closes the Russell/Midas section. The B1 IRL correction loop and latent `Human Intent` node visualize the alignment architecture just argued for. |
| **6.3** | `ch06-03-gebru-injustice-amplification.png` | **128** | "...its external coordination with the world it operates within." | End of the Gebru section, after the Robert Williams / Nijeer Parks cases. The R1 fairness-washing spiral with confounding `Systemic Inequality` arcs makes the amplification mechanism visible. |
| **6.4** | `ch06-04-crawford-material-stack.png` | **177** | "...must coordinate technical progress with environmental sustainability and social justice across its entire material lifecycle." | Closes Crawford's three-body material stack section. The R1 extraction flywheel is the only fully identifiable diagram in the chapter — matching Crawford's supply-chain auditability thesis. |
| **6.5** | `ch06-05-consciousness-coordination.png` | **198** | "Consciousness isn't a feature you add. It's an emergent property of coordination architecture." | Synthesis figure. Lands on the chapter's thesis sentence. The 4-node R1 loop is the schematic that Figures 6.1–6.4 are failure/success instances of. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 6.1:

```markdown

---

![Figure 6.1 — Uber's classification failure: Sensor Perception and Object Classification cycled without a closing feedback arc to Contextual Awareness (latent, dashed). Two confounding arcs from system design explain why the loop never closed.](../diagrams/png/ch06-01-uber-classification-failure.png)

*Figure 6.1 — Uber classification failure. See `../diagrams/svg/ch06-01-uber-classification-failure.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 6.1** — Uber classification failure · line 42
2. **Figure 6.2** — Russell alignment loop (B1, IRL correction) · line 83
3. **Figure 6.3** — Gebru injustice amplification (R1, fairness-washing) · line 128
4. **Figure 6.4** — Crawford material stack (R1, extraction flywheel) · line 177
5. **Figure 6.5** — Consciousness coordination (R1, synthesis) · line 198

## Notes

- **Figure 6.1 (Uber)** is intentionally loop-free. The failure is a *missing* feedback arc — awareness never closes back on perception. Placing it after the NTSB timeline (not after the opening three-body callout) lets the reader see the mechanism before the diagram names it.
- **Figure 6.2 (Russell)** is the chapter's only balancing loop. It lands after the extended Midas/IRL discussion rather than after the short callout, because the B1 structure only makes sense once IRL has been introduced in prose.
- **Figure 6.3 (Gebru)** lands after the wrongful-arrest cases, not after the opening three-body callout, so the reinforcing spiral reads as an explanation of the harm pattern the reader just encountered, not an abstract claim.
- **Figure 6.4 (Crawford)** is the only fully identifiable diagram — no latent nodes. It closes the material-stack section where the supply-chain auditability argument has been fully established.
- **Figure 6.5 (Consciousness)** is schematic/normative, not empirical. It's the chapter's synthesis and lands on the thesis sentence. The other four diagrams are instances of the pattern this one names.
- **Slug-to-figure mapping is 1:1** for Chapter 6 because slug numbers were assigned in reading order.
