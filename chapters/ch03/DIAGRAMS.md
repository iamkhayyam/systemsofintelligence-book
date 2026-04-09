# Chapter 3 — Causal Diagrams

**Chapter:** Architecture of Systems Intelligence
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-iaac-learning-building` | 5 | CLD · 2 reinforcing loops | "Building Sensors ↔ AI Learning System ↔ Human Occupant Behavior" (IAAC Barcelona) |
| 02 | `02-constitutional-ai-rlaif` | 5 | CLD · 1 balancing loop | "Capability, human values, and the constitutional framework that coordinates them" (Amodei / RLAIF) |
| 03 | `03-jepa-coordination` | 5 | CLD · 1 reinforcing loop | "Past Context ↔ Future Context ↔ Prediction Task" (LeCun / JEPA) |
| 04 | `04-alphago-three-networks` | 5 | CLD · 2 reinforcing loops | "Policy Network · Value Network · Monte Carlo Tree Search" (AlphaGo / Move 37) |
| 05 | `05-alphafold-coordination` | 5 | DAG · no loops, identifiable | "Evolutionary Information · Physical Constraints · Attention Architecture" (AlphaFold) |
| 06 | `06-two-body-brittleness` | 6 (1 latent) | DAG · 2 confounding | "When Two Bodies Aren't Enough" — MYCIN, industrial robots, supervised learning, bureaucracy |

## Cut

- **Biological intelligence (Neurons ↔ Synapses ↔ Network Architecture)** — Chapter uses it as a framing analogy, not a mechanism the book actually reasons about. Would restate the three-body pattern without adding new structure distinct from IAAC or AlphaGo.
- **"Why all intelligent systems share the same pattern" triple-panel (Biological / Artificial / Hybrid)** — It's a comparison table, not a single causal system. Rendering it would produce three weak diagrams where each is just a labeled triangle.
- **The Five Principles of Coordination Architecture** — Normative design framework, not a causal structure. Each principle is illustrated with a different example (self-driving, supply chain, ed-tech, medical diagnosis, creative studio) — turning any one into a diagram would be arbitrary and none of the examples are the chapter's actual argument.
- **Individual two-body failure cases (MYCIN, industrial robots, supervised learning, bureaucracy)** — Collapsed into the single `06-two-body-brittleness` DAG. They share the same causal shape; four near-duplicates would violate the "one pattern, one diagram" rule from the Ch01/Ch02 retrospective.
- **AlphaGo vs AlphaFold as separate entries** — Kept both because they have genuinely different shapes: AlphaGo is a CLD with self-play feedback loops (meta-learning), AlphaFold is a feed-forward DAG with three independent input channels merging through attention. Only one would miss the identifiability contrast.

## Notes

- **#02 Constitutional AI** is the chapter's only balancing loop: the critique signal suppresses misaligned capability patterns (1 negative edge → B). Good contrast with the mostly-reinforcing loops elsewhere in the chapter.
- **#05 AlphaFold** is the chapter's only `identifiable` diagram, because each information channel (sequence, evolution, physics) can be ablated independently — a nice counterpoint to the loop-heavy systems where causes and effects co-evolve.
- **#06 Two-body brittleness** is the book's first explicit "missing third body" diagram. The latent node `n5` represents whatever third coordinating element is absent (context, feedback, meta-learner), and it acts as a confounder on both the rigid-rules path and the brittleness outcome.
- None of the Ch03 diagrams are drawn solely from the three interview files (3.01 Amodei, 3.02 LeCun, 3.03 Hassabis). The interview material is already consolidated into the chapter text sections on Constitutional AI, JEPA, AlphaGo and AlphaFold, so the graph JSONs track the chapter text.

## Open questions for the author

1. **AlphaGo loop count.** I modeled the self-play feedback as *two* reinforcing loops (one through the policy network, one through the value network) since they're trained jointly but updated separately. If you'd prefer a single combined loop through a shared "self-play" node, I can collapse R1 and R2.
2. **Constitutional AI critique edge.** I drew `critique → capability` as a *negative* edge (suppressing misaligned patterns) to make the balancing loop explicit. An alternative reading is `critique → capability` positive (strengthening aligned patterns), which would make the loop reinforcing. The chapter text supports both; pick one.
3. **Two-body brittleness latent node.** The "Missing Third Body" node is intentionally abstract since the chapter uses it as a *class* covering four different failures. If you'd rather anchor the diagram to one specific failure (e.g. MYCIN), I can specialize it.
4. **IAAC meta-learning loop.** I included a separate R2 "occupant adaptation" loop because the chapter explicitly says occupants' behavior changes as the building adapts. If that feels like overreach vs. the source text, R2 can be dropped to leave a cleaner 5-node / 1-loop diagram.
