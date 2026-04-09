# Chapter 3 — Diagram Placements

**Diagram source:** `chapters/ch03/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch03/text/chapter-03.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 3.N` (book convention)

## Placements (6 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **3.1** | `ch03-01-iaac-learning-building.png` | **36** | "...you can't build intelligence by optimizing components. You build it by designing coordination architectures that enable emergence." | Closes the IAAC Barcelona opener. Lands after the chapter's first explicit three-body claim (Sensors ↔ AI ↔ Occupants) has been fully narrated. |
| **3.2** | `ch03-02-constitutional-ai-rlaif.png` | **128** | "...moving beyond simple censorship or filtering to true ethical reasoning within the AI itself." | End of the Constitutional AI / RLAIF walk-through. Anchors the diagram's balancing loop (critique suppresses misaligned capability) right after the self-correction mechanism is explained. |
| **3.3** | `ch03-03-jepa-coordination.png` | **179** | "...the underlying physics, semantics, and causal relationships that define how elements in the world interact and coordinate." | End of the JEPA examples section. Lands after Past ↔ Future ↔ Prediction has been concretized through the cat-jump, image-completion, and cross-modal examples. |
| **3.4** | `ch03-04-alphago-three-networks.png` | **215** | "...a declaration that intelligence, when architected for coordination, could discover truths beyond the reach of even the most brilliant human minds." | Closes the Move 37 narrative. Policy / Value / MCTS have all been named and their coordination role explained; the diagram crystallizes the two reinforcing self-play loops. |
| **3.5** | `ch03-05-alphafold-coordination.png` | **235** | "...Amino acids don't fold independently—they coordinate with each other through complex interactions. Model that coordination, and you solve the problem." | Lands on Hassabis' framing quote, immediately after Evolutionary Info / Physical Constraints / Attention have been enumerated as the three channels. Placed before the deep-dive on Levinthal's paradox so the DAG is in hand as the reader goes deeper. |
| **3.6** | `ch03-06-two-body-brittleness.png` | **313** | "...The third body is what allows for dynamic adjustment, meta-learning, and the integration of context, transforming brittle interactions into robust, intelligent coordination." | Closes the "When Two Bodies Aren't Enough" section. The latent "Missing Third Body" node is precisely the claim this paragraph lands — diagram acts as the visual summary of all four failure cases (MYCIN, robots, supervised learning, bureaucracy). |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 3.1:

```markdown

---

![Figure 3.1 — The IAAC learning building as a three-body system: Building Sensors, AI Learning System, and Human Occupant Behavior form two reinforcing loops that produce adaptive architectural intelligence.](../diagrams/png/ch03-01-iaac-learning-building.png)

*Figure 3.1 — IAAC Barcelona learning-building three-body system. See `../diagrams/svg/ch03-01-iaac-learning-building.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 3.1** — IAAC learning building (Sensors ↔ AI ↔ Occupants) · line 36
2. **Figure 3.2** — Constitutional AI / RLAIF balancing loop · line 128
3. **Figure 3.3** — JEPA coordination (Past ↔ Future ↔ Prediction) · line 179
4. **Figure 3.4** — AlphaGo three networks (Policy · Value · MCTS) · line 215
5. **Figure 3.5** — AlphaFold coordination DAG (Evolution · Physics · Attention) · line 235
6. **Figure 3.6** — Two-body brittleness with latent "Missing Third Body" · line 313

## Notes

- **Figure 3.2** is the chapter's only balancing-loop diagram; it lands at the end of the RLAIF walk-through where the critique→capability suppression edge is explicitly described, so the negative edge in the diagram matches the text verbatim.
- **Figure 3.5** is intentionally placed at line 235 (on the Hassabis framing quote) rather than at the end of the AlphaFold section (line 275). The diagram describes the *architecture* (three input channels merging through attention), and the reader benefits from seeing that DAG before the long drug-discovery / Levinthal's paradox expansion. The end-of-section material is impact, not mechanism.
- **Figure 3.6** is the book's first explicit "missing third body" diagram. Placing it at line 313 lets all four failure cases (MYCIN, industrial robots, supervised learning, bureaucracy) be read first, so the single DAG is understood as the shared shape across all four rather than as a fifth separate case.
- **Slug-to-figure mapping is 1:1 this chapter** because the slug numbering already follows reading order. (Contrast Ch01, where slug 10 became Figure 1.7.)
- **No diagram for "The Five Principles of Coordination Architecture"** — it's a normative framework with five different illustrative examples, not a single causal structure. See `DIAGRAMS.md` Cut list for rationale.
- **No standalone biological-intelligence diagram** — the Neurons ↔ Synapses ↔ Network Architecture passage is used as framing analogy; its structural shape is already carried by Figure 3.1 (IAAC) and Figure 3.4 (AlphaGo). See `DIAGRAMS.md` Cut list.
