# Preface — Causal Diagrams

**Status:** 🟢 1 diagram authored

## Survivors (1)

| # | Slug | Nodes | Type | Role |
|---|---|---|---|---|
| 00 | `preface-00-reading-legend` | 5 (1 latent) | Pedagogical | The only non-causal diagram in the book — it shows every visual convention used in the 62 real figures, once, in a single annotated key. |

## Rationale

The book uses causal diagrams as its primary instrument of argument. Without a reading legend, a reader encountering Figure 1.1 has no way to know what a dashed ellipse means, why some arrows have a `+` in a box, or what it means when a loop badge says `R1` vs `B1`. Every other figure is silent on its own conventions.

This diagram is **load-bearing for accessibility**: the reader must be able to parse the instrument before being asked to use it 62 times.

## What it demonstrates

- **All 5 node categories**: Driver (dark blue), Mediator (purple), Outcome (orange), Feedback (dark green), Latent (dashed gray).
- **Both edge polarities**: Positive (+, solid green), Negative (−, solid red).
- **Delay marks**: The double-tick perpendicular ticks on an arrow path (on the `n3 → n4` edge).
- **Confounding arcs**: Dashed gray bidirected edges from the latent node (visible only in DAG or Both mode).
- **Both loop types**: R1 reinforcing (0 negative edges in the cycle = even) and B1 balancing (1 negative edge = odd).
- **Identifiability handling**: The outcome node would normally show a ✓ or ✗ badge for identifiability; in the legend it's ✓ because the legend itself is "identifiable" as a demonstration.

## Notes

- This is the first and only diagram in the book authored purely as a teaching aid. The `summary` field in the JSON is explicit about this: it says "this is a pedagogical legend, not a real causal system."
- The legend uses `fmt: "both"` so toggling the viewer's Format dropdown demonstrates the CLD-vs-DAG distinction: in CLD mode the latent node and its confounding arcs disappear; in DAG or Both mode they appear.
- The title of the diagram in the viewer picker is `Preface · 00 — Reading Legend — how to parse every diagram in this book [5, 1 latent]`.
