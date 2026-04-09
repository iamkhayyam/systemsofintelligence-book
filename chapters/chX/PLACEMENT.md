# Chapter X — Diagram Placements

**Diagram source:** `chapters/chX/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/chX/text/chapter-X.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure X.N` (literal "X" — capstone convention, not "10")

## Placements (6 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **X.1** | `chX-01-three-ware-resolution.png` | **59** | "...When Hardware ←→ Software ←→ Knowware coordinate consciously, intelligence transcends its components." | Hero / thesis image. Lands on the book's one-sentence thesis, the first explicit Three-Ware resolution statement. This is the only diagram in the book where the coordination node is itself a labeled mediator. |
| **X.2** | `chX-02-kurzweil-singularity-merger.png` | **320** | "...This is the future Kurzweil is living for: not replacing humanity, but evolving it through coordination with technology." | Closes the Kurzweil singularity-merger passage. The optimistic reinforcing-spiral view of biology + AI + neural interface. |
| **X.3** | `chX-03-blueprint-optimization-loop.png` | **397** | "...coordinating what we are with what technology enables to become what we could be." | Closes the Bryan Johnson / Blueprint Protocol passage. Renders the biology → biomarkers → AI → intervention → biology loop with biological age as outcome. |
| **X.4** | `chX-04-commons-governance-triad.png` | **780** | "...coordinating individual participation with collective benefit and sustainable governance to create abundance for all." | Closes the commons builder / Ostrom passage. The only mixed R+B diagram in the chapter — removing n3 (governance) collapses the stewardship loop into Hardin's tragedy. |
| **X.5** | `chX-05-acceleration-gap.png` | **971** | "...coordinating technological progress with human evolution to create the future faster." | Closes the Verdon / e/acc passage. The balancing-loop counterpart to Figure X.2: same merger phenomenon viewed as a closing gap between tech capability and human adaptation. |
| **X.6** | `chX-06-agi-alignment-scenarios.png` | **1085** | "...preparing for the most important coordination challenge in human history." | Closes the AGI prepper passage. The only `fmt: "both"` diagram in ChX, with a latent Coordination Wisdom node — deliberately the same latent used in Ch01's Facebook three-body, so the book ends where it began. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure X.1:

```markdown

---

![Figure X.1 — The Three Ware resolution: Hardware ←→ Software ←→ Knowware coordinating through an explicit Coordination Layer. Two reinforcing loops show how substrate and patterns co-produce emergent intelligence when a mediator is present.](../diagrams/png/chX-01-three-ware-resolution.png)

*Figure X.1 — Three Ware resolution (thesis diagram). See `../diagrams/svg/chX-01-three-ware-resolution.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure X.1** — Three Ware resolution (hero / thesis) · line 59
2. **Figure X.2** — Kurzweil singularity merger · line 320
3. **Figure X.3** — Blueprint optimization loop · line 397
4. **Figure X.4** — Commons governance triad · line 780
5. **Figure X.5** — Acceleration gap · line 971
6. **Figure X.6** — AGI alignment scenarios · line 1085

## Notes

- **Caption convention uses literal "X"** (not "10") because this is the capstone chapter, branded as "Chapter X — The Grand Coordination" throughout the book. Figure numbers follow the chapter letter: X.1 through X.6.
- **Figure X.1 is the thesis diagram.** It's placed early, on the first explicit Hardware ←→ Software ←→ Knowware statement, so the reader has the canonical schema in mind before the interview synthesis begins. Unlike latent third-body diagrams elsewhere in the book, the Coordination Layer here is a fully labeled mediator — the capstone earns that explicitness.
- **Figures X.2 and X.5 are a complementary pair.** X.2 is the reinforcing-spiral (optimistic, e/acc-adjacent) view of human–AI merger; X.5 is the balancing-loop (gap-closure) view of the same phenomenon. Together they cover the acceleration-vs-safety framing without a separate values diagram.
- **Figure X.4 is the chapter's only mixed R+B diagram** and the cleanest counterfactual in ChX: the same edge set produces Hardin's tragedy loop if n3 (governance) is removed.
- **Figure X.6 closes the book's arc.** Its latent Coordination Wisdom node is deliberately the same conceptual node that appeared as the missing dashed element in Ch01's Facebook three-body diagram. The book ends by naming what Chapter 1 left unnamed.
- **Slug numbers and figure numbers are 1:1 in ChX** because the authoring order matches the reading order in this chapter (unlike Ch01, where the triptych and reading sequence broke the mapping).
- **Six diagrams exceeds the 3–5 ceiling** held in earlier chapters. This is deliberate for the capstone — see `DIAGRAMS.md` for the cut list (Siegel, Fei-Fei Li, Delangue, Bach, Manifesto, daily practice, nine-chapter fractal) and the rationale for each survivor.
