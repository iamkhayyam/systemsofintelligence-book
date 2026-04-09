# Chapter 2 — Diagram Placements

**Diagram source:** `chapters/ch02/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch02/text/chapter-02.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 2.N` (book convention)

## Placements (5 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **2.1** | `ch02-01-netflix-recommendation-loop.png` | **29** | "...The emergence (E) isn't the sum of components. It's what happens when three elements coordinate consciously, creating a self-reinforcing ecosystem..." | Hero image for the chapter's opening case. Lands at the end of the Netflix section where the coordination function C(A, B, context) → E is first stated, so the reinforcing-loop CLD visualizes the equation just introduced. |
| **2.2** | `ch02-02-pearl-ladder-causation.png` | **162** | "...We've been trying to build intelligence with two-body tools in a three-body universe. AI's inability to climb Pearl's Ladder stems from its fundamental reliance on statistical patterns..." | Closes the Pearl's Ladder section after the smoking-and-cancer walkthrough of all three rungs. The DAG's latent "Imagination" node mirrors the paragraph's argument that counterfactual reasoning is the missing rung. |
| **2.3** | `ch02-03-musk-first-principles.png` | **182** | "...First principles thinking, applied correctly, reveals coordination opportunities that optimization thinking can never see..." | End of the Musk/SpaceX/Tesla/Neuralink section, immediately after the thesis sentence the diagram visualizes. Lands before the NSA section so the reinforcing loop caps the first-principles argument. |
| **2.4** | `ch02-04-game-of-life-emergence.png` | **234** | "...The future of AI, therefore, lies not just in scaling up existing architectures, but in fundamentally redesigning them to embrace and leverage the power of ternary coordination." | End of Melanie Mitchell's "Mathematics of Why Three Creates Emergence" section. Conway's Game of Life is the canonical three-neighbor-rule emergence example Mitchell's quote points to; the diagram concretizes the two-vs-three phase transition. |
| **2.5** | `ch02-05-hft-market-coordination.png` | **305** | "...The edge isn't speed. It's coordination. When you coordinate information flow with liquidity provision with price discovery faster than the market can arbitrage the gaps, you print money..." | Closes the HFT section with the mixed R1 + B1 loop diagram. Lands on the savant's closing quote so the reader sees the loop structure (reinforcing price discovery, balancing risk) at the exact moment the claim is made. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 2.1:

```markdown

---

![Figure 2.1 — Netflix's recommendation loop: viewing data, content production, and user preferences form two nested reinforcing loops. The coordination context (algorithmic curation) is what turns a feedback loop into a self-optimizing ecosystem.](../diagrams/png/ch02-01-netflix-recommendation-loop.png)

*Figure 2.1 — Netflix recommendation loop. See `../diagrams/svg/ch02-01-netflix-recommendation-loop.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 2.1** — Netflix recommendation loop · line 29
2. **Figure 2.2** — Pearl's Ladder of Causation · line 162
3. **Figure 2.3** — Musk first-principles coordination · line 182
4. **Figure 2.4** — Game of Life emergence · line 234
5. **Figure 2.5** — HFT market coordination (R1 + B1) · line 305

## Notes

- **Slug-to-figure mapping is 1:1** for Chapter 2: the authoring order of the 5 surviving diagrams already matches reading order, so `ch02-0N-…` maps cleanly to `Figure 2.N`. This is different from Chapter 1, where reading order diverged from slug order.
- **Figure 2.4 (Game of Life)** is placed in the Melanie Mitchell section even though Conway's Life is not named explicitly in the chapter text — Mitchell's quote about "two-neighbor rules create static patterns... three-neighbor rules create rich complexity and emergence" is the direct source claim, and Game of Life is the canonical visual for that claim. If the author prefers to keep diagrams strictly named-in-text, this figure is the one to flag.
- **Figure 2.2 (Pearl's Ladder)** has a `layout_hint: "three-level-stack"` in its JSON (see `DIAGRAMS.md`). The current arc_engine viewer renders it circularly; a future custom renderer honoring the hint would make the vertical Observation → Intervention → Counterfactual reading cleaner.
- **Figure 2.5 (HFT)** is the first mixed-loop diagram in the book (one reinforcing + one balancing). Worth noting in the caption if the author wants to foreshadow balancing loops before they become common in later chapters.
- **Relative path `../diagrams/png/`** matches the Ch01 convention — every chapter is self-contained under `chapters/chNN/diagrams/`.
