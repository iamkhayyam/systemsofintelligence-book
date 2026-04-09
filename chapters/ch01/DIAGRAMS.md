# Chapter 1 — Causal Diagrams

**Chapter:** The Coordination Intelligence Revolution
**Status:** 🟢 7 diagrams authored as arc_engine graph JSONs (cut from initial 12)

## Survivors (7)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-facebook-three-body` | 4 (1 latent) | CLD · 1 reinforcing loop + 2 confounding arcs | "Human behavior ↔ Algorithm optimization ↔ Social system dynamics" — the chapter's opening case |
| 04 | `04-mars-orbiter-coordination-gap` | 5 (1 latent) | DAG · no loops, 1 confounding arc | Mars Climate Orbiter — competent components, missing coordination interface |
| 05 | `05-2008-systemic-correlation` | 6 (1 latent) | CLD · B1 + 1 confounding arc | 2008 crisis — uniform risk models produced hidden systemic correlation |
| 06 | `06-737max-mcas-human-machine` | 6 (1 latent) | DAG · no loops, 1 confounding arc | 737 MAX — MCAS software, operational stress, pilot override, missing awareness |
| 07 | `07-hardware-software-knowware` | 4 | CLD · 1 reinforcing loop | The canonical book schema — the **foundational three-body pattern** every other diagram specializes |
| 09 | `09-burning-man-three-elements` | 4 | CLD · 2 reinforcing loops | Burning Man — Self Expression / Communal Effort / Temporary Infrastructure → Playa Magic |
| 10 | `10-universal-coordination-pattern` | 4 | CLD · 1 reinforcing loop | The operational template: Identify → Design → Enable → Adapt, cycling back |

**Triptych (composite figure):** `ch01-failure-triptych.png` — Mars + 2008 + 737 MAX side-by-side, introduced at the top of §"The Pattern Across Every Domain" before each case is examined individually. Not a new graph JSON; rendered from the three underlying PNGs (normalized to 600px height with labels).

## Cut from the original 12

During the first-pass review, we authored 12 diagrams for Ch01. Revisiting with fresh eyes, five didn't earn their place:

| # | Cut diagram | Why |
|---|---|---|
| 02 | `pask-conversation-loop` | Theoretically beautiful but Pask/Pangaro gets only one paragraph in the chapter. Moved to `_cut/` for possible revival in Ch02 or as a standalone reference. |
| 03 | `binary-vs-ternary` | A conceptual contrast, not a causal system. Forcing it into arc_engine lost the point. Better handled as an inline side-by-side graphic outside the arc_engine pipeline. |
| 08 | `heros-journey-three-act` | Campbell reference is brief — one sentence. A full CLD was more than the claim needed. |
| 11 | `three-body-vs-two-body-physics` | The abstract version of every other diagram in the chapter — redundant with #07, #09, and the entire rest of the book. |
| 12 | `ternary-applications-grid` | Only AI integration would have belonged — the other four were a quick list, not central to the chapter's argument. |

Cut JSONs are archived in `chapters/ch01/diagrams/_cut/` for possible future revival.

## Why the re-cut mattered

The first pass produced 12 diagrams, most of them fitting the same 5-node template (3 drivers + 1 mediator + 1 outcome). It looked comprehensive but flattened the variety of the underlying systems. The re-cut revealed that each diagram wants its **natural shape**:

- Some systems are genuine **4-node three-body loops** (Facebook with latent, HW/SW/Knowware, Burning Man, Universal pattern)
- Some are **5–6 node failure decompositions** (Mars with Thrust Calculation + latent Unit Translation, 2008 Crisis with all the cascade stages)
- Some of the original 12 weren't causal diagrams at all — they were comparison tables, conceptual frames, or process flows trying to fit a CLD template

The ruthless cut + natural-size rewrite produced a tighter set where **every diagram earns its place and every shape matches its claim**. The lesson propagated to Ch02–ChX + Appendix A: each later chapter was ruthlessly cut from the start.

## Notes

- **#07 `hardware-software-knowware`** is the canonical book schema. It appears as the book's root three-body diagram in Ch01 and is specialized by every subsequent chapter's case-study diagrams. It shares the same causal shape as **Appendix A's Figure A.1** (the formal `C(A, B, Θ) → E` operator) — in fact #07 is the concrete naming of A.1's abstract triple.
- **The "missing third element" pattern** recurs across #01, #04, #05, #06 — all four have a latent node representing the coordination wisdom / translation layer / monitoring / pilot awareness that *would have* prevented the failure. This visual echo is intentional: the chapter's core claim is that two-body thinking always leaves a latent third body unaccounted for.
- **The "success case" pattern** in #07, #09, #10 uses the same circular three-body shape *without* the latent confounder — demonstrating what the coordination layer looks like when it's present and working.
- **Placements for all 8 figures** (including the triptych) are in `PLACEMENT.md`. Figure numbering runs 1.1 through 1.8, matching reading order rather than slug order.

## Open questions

1. Should `02-pask-conversation-loop` be revived as an inline sidebar in the one paragraph where Pangaro is introduced? It's a beautiful recursive loop and the graph JSON still exists in `_cut/`.
2. Should the chapter's "ternary applications" list (meetings, product, productivity, problem-solving, AI) get a single consolidated diagram that shows the pattern in five domains at once?
3. The triptych (Figure 1.2) is currently a 2584×730 composite PNG. For print layouts, a tighter three-panel side-by-side at smaller sizes may be better. Worth re-rendering at a smaller height (400px?) and comparing.
