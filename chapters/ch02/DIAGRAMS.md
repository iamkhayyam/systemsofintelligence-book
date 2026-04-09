# Chapter 2 — Causal Diagrams

**Chapter:** The Dawn of Systems Intelligence
**Status:** 🟢 5 diagrams authored as arc_engine graph JSONs

## Survivors (5)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-netflix-recommendation-loop` | 4 | CLD · 2 reinforcing loops | "Viewing data influences production decisions, which creates new content…" |
| 02 | `02-pearl-ladder-causation` | 5 (1 latent) | DAG · no loops, 2 confounding | "Association works with two bodies. Intervention requires three. Counterfactuals require all three plus imagining alternatives." |
| 03 | `03-musk-first-principles` | 4 | CLD · 1 reinforcing loop | "First principles thinking reveals coordination opportunities that optimization can never see…" |
| 04 | `04-game-of-life-emergence` | 4 | CLD · 1 reinforcing loop | "Three simple rules, coordinating across the grid, create emergence…" |
| 05 | `05-hft-market-coordination` | 5 | CLD · R1 + B1 (mixed loop) | "Coordinates price discovery with liquidity provision in the context of information flow…" |

## Cut (from the initial 10-candidate spec)

- **Quantum supremacy** — too abstract, restates the three-body frame without adding structure
- **Von Neumann bottleneck** — same failure pattern as Pearl's Ladder; redundant
- **NSA anomaly detection** — same DAG shape as PayPal; the pair is one pattern
- **PayPal trust coordination** — simpler example of the NSA pattern; neither earns solo treatment
- **Catalytic cycles** — redundant with Game of Life as an "emergence from local rules" example

## Notes
- **#02 Pearl's Ladder** has a `layout_hint: "three-level-stack"` in its JSON because the natural reading is vertical (Observation → Intervention → Counterfactual). The current arc_engine viewer uses a circular layout — it still renders correctly, but a future custom renderer could honor the hint.
- **#05 HFT** is the first Ch02 diagram with a *mixed* loop set (one reinforcing + one balancing) — it's a good stress test of the viewer's loop parity logic.
- None of the Ch02 diagrams are drawn from the individual interview files (2.01–2.09); they're all from the main chapter text. The interviews elaborate but don't introduce distinct causal structures.
