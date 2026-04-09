# Chapter 4 — Causal Diagrams

**Chapter:** Systems Intelligence in Action — Ternary Coordination Case Studies
**Status:** 🟢 6 diagrams authored as arc_engine graph JSONs

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `01-bogota-urban-coordination`        | 4          | CLD · 1 reinforcing loop         | "Political Vision ←→ Citizen Behavior ←→ Infrastructure Systems… emergent city intelligence" |
| 02 | `02-copenhagen-wheel-coordination`    | 5          | CLD · 1 balancing loop           | "Rider effort ←→ Terrain data ←→ Motor assistance… coordination creates an experience that feels like the bike understands you" |
| 03 | `03-medical-ai-three-body`            | 6 (1 latent) | DAG+CLD · no loops, 2 confounding | "AI coordinating with doctors coordinating with patients to create care that's both more effective and more human" |
| 04 | `04-23andme-genomic-coordination`     | 4          | CLD · 1 reinforcing loop         | "Coordinating individual curiosity with scientific discovery with medical advancement" |
| 05 | `05-adaptive-markets-2008-collapse`   | 5          | CLD · 1 reinforcing loop         | "Rational models coordinating with behavioral herding coordinating with market structure to create systemic catastrophe" |
| 06 | `06-pni-healing-coordination`         | 5          | CLD · 1 balancing loop           | "Physical treatment, emotional healing, and spiritual transformation must coordinate or the illness returns" |

## Cut

- **Failed smart cities (Songdo/Masdar)** — redundant with Copenhagen Wheel as the positive form of the same claim; a "two-body failure" diagram would just be the Copenhagen Wheel with nodes deleted.
- **Raschke trading three-body (pattern/emotion/context)** — same shape as the Lo 2008 diagram at a smaller scale; the 2008 case carries more narrative weight and earns the slot.
- **Bogotá "other cities fail" contrast** — same argument as Bogotá #01 inverted; doesn't add causal structure.
- **Section "What Makes Coordination Work in Practice" (bidirectional influence, continuous adaptation, context, coordination health, emergence)** — prescriptive principles, not a system with variables; would force a template rather than earn a diagram.
- **"The Pattern Across Domains"** — meta-summary of the chapter; no causal structure of its own.

## Notes

- The chapter is unusually uniform: every major section is explicitly pitched as a three-body coordination system, so one diagram per case study is the natural carve. Six case studies → six diagrams, right at the ceiling of the "max 7" rule.
- **#03 Medical AI** is the only diagram in Ch04 using the latent-confounder pattern (like Ch01's Facebook three-body). It uses `fmt: "both"` so the `is_confounding` edges from the latent "Coordination Wisdom" node actually render.
- **#02 Copenhagen Wheel** is the only diagram whose loop is balancing — the assistance→effort arc is genuinely equilibrium-seeking, which distinguishes it from the otherwise reinforcing-heavy chapter.
- **#05 2008** intentionally collapses Raschke's trader-level three-body into the Lo market-level three-body to avoid redundancy.
- None of the Ch04 interviews (4.01–4.09) introduce distinct causal structures beyond what the main chapter text already makes explicit; they deepen the case studies rather than add new systems.
