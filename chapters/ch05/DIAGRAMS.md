# Chapter 5 — Causal Diagrams

**Chapter:** Human-Systems Intelligence Interaction (Ternary Human-AI Collaboration Patterns)
**Status:** 5 diagrams authored as arc_engine graph JSONs

## Survivors (5)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch05-01-neural-interface-coupling` | 5 (1 latent) | CLD · 1 reinforcing loop | Brain, interface, and AI mutually adapt; body schema absorbs the device (Nicolelis / Noland Arbaugh). |
| 02 | `ch05-02-binary-deployment-failure` | 4 (1 latent) | DAG · no loops, 2 confounding | "Every failed AI deployment follows the same pattern" — coordination context is the missing third body (Oxley). |
| 03 | `ch05-03-attention-economy-trap` | 5 | CLD · 1 reinforcing loop | Harris on the Like button: design coordinates psychology with network amplification to crowd out authentic connection. |
| 04 | `ch05-04-virtue-ethics-moderation` | 5 | CLD · 1 balancing loop | Vallor's three-body content moderation: AI + human judgment + community context with outcome feedback. |
| 05 | `ch05-05-wikipedia-collective-intelligence` | 5 | CLD · R1 + B1 mixed | Wales / Pentland: individuals + platform + norms produce emergent quality; norms balance vandalism pressure. |

## Cuts

- **Surgeon / beating heart robot (§opener)** — same structure as neural interface coupling; redundant.
- **Brainet / two-rat network (Nicolelis)** — extends #01 into N bodies; not a distinct causal pattern at this chapter's resolution.
- **Thich Nhat Hanh interbeing / three poisons** — philosophically central but resists a clean node-and-edge representation; the attention-economy trap (#03) carries the same causal claim with measurable variables.
- **Anonymous BCI user's "tool → extension of self" arc** — subjective reframing of #01, not a new structure.
- **Forum moderator ground-level view** — same shape as Wikipedia (#05) and virtue-ethics moderation (#04); would be a third copy.
- **Pentland's Deliberatorium specifically** — generalized into #05. A standalone diagram would add a process step, not a new causal claim.

## Notes

- **#01** uses a latent `Body Schema` confounder to capture Nicolelis's observation that the brain's self-representation reshapes intent production — the variable that makes the interface→agency effect non-identifiable.
- **#02** is the only DAG in the chapter and exists specifically to justify the chapter's thesis that binary deployment analysis is biased. Its confounding arcs from `Coordination Context` are the whole point.
- **#03 and #04** are a deliberate contrast pair: the same three-body ethics frame produces a reinforcing trap under engagement design and a balancing loop under virtue-ethics coordination. Readers should compare them.
- **#05** is the chapter's only mixed-loop diagram (R1 + B1). It carries both Wales and Pentland without duplicating their structure.
- None of the diagrams are sourced purely from individual 5.0x interviews; each pulls a causal structure that the main chapter text already asserts and the interviews elaborate.

## Open questions

- Should `Coordination Context` in #02 be split into workflow vs. culture vs. environment? The source leaves it bundled; splitting would triple confounding arcs and fight the "one node per variable" rule.
- #03 could add an explicit `Platform Revenue` feedback edge to close a second reinforcing loop (Harris implies it with autoplay/ads). Held off to keep 5 nodes.
- #04's `Shared Feedback` node is borderline mediator vs. feedback. It is cast as `feedback` to honor the arc_engine category set; the balancing loop arithmetic is unaffected.
- Interview files were not copied into `interviews/` because `cp` was denied in this session. A README stub lists the canonical source paths; run the `cp` manually before publishing.
