# Chapter 9 — Causal Diagrams

**Chapter:** No Way? Know-How — Three-Body Integration: Challenges, Barriers, and Conscious Participation
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch09-01-stanford-ai-deployment` | 5 (1 latent) | DAG · 2 confounding | Opening case — "The technology worked. The coordination failed." AI capability undermines workflow and operations when integration coordination is absent. |
| 02 | `ch09-02-chollet-death-spiral` | 5 (1 latent) | CLD · 1 reinforcing loop | Chollet §9.1 — "complexity creates coordination overhead, which creates cognitive load, which in turn creates more complexity." |
| 03 | `ch09-03-yang-automation-distribution` | 5 (1 latent) | DAG · 2 confounding | Yang §9.2 — wage-coupled distribution breaks under automation; UBI is the latent channel that re-couples capability to security. |
| 04 | `ch09-04-turkle-conversation-erosion` | 4 | CLD · 1 reinforcing loop | Turkle §9.3 — mediated communication fragments attention, erodes conversation skill, which drives more mediation. |
| 05 | `ch09-05-raworth-doughnut-overshoot` | 6 (1 latent) | DAG+CLD · 1 balancing loop, 2 confounding | Raworth §9.2 — extractive growth causes overshoot and shortfall; planetary pushback balances only after damage; regenerative distribution is the missing coordination layer. |
| 06 | `ch09-06-menegon-mutual-aid-fork` | 6 (1 latent) | CLD · 2 reinforcing loops (virtuous + vicious) | Menegon §9.3 — same coordination tech either enables community or extracts from it; platform ownership is the latent switch. |

## Cut

- **Mostaque open-source coordination** — structurally a near-duplicate of Chollet's "abstractions enable coordination" frame. The death-spiral version earns it because it has a closed reinforcing loop; Mostaque's version is a taxonomy more than a causal claim.
- **Digital Wellbeing coach** — the engagement→dopamine→life-cost loop is real but is a smaller restatement of Turkle's erosion loop. One representative suffices.
- **Eisenstein sacred economics** — the "material / relational / sacred" frame is normative and doesn't yield a distinct causal structure beyond what Raworth already carries.
- **Rosedale virtual presence** — descriptive ("virtual is a different kind of real"), no directional causal claim strong enough to anchor a diagram.
- **David Autor (9.10)** — the interview is present in sources but not woven into the chapter prose; cutting avoids a diagram that over-reads the text.
- **"Three-Body Integration Reality" summary triangle** (Human Core / AI Enhancement / Systemic Context) — this is the chapter's conceptual scaffold, not a causal diagram. Keeping it out of the graph set preserves diagrams for claims with polarity.

## Notes

- **#01 Stanford** and **#03 Yang** are pure DAGs: both turn on a latent coordination layer (integration protocol, UBI) whose absence explains the failure. They're structurally similar but the domains (technical deployment vs economic distribution) earn both entries.
- **#02 Chollet** and **#04 Turkle** are both pure reinforcing spirals — one technical, one interpersonal. They're the cleanest examples in the chapter of "coordination failure as feedback loop" and both pass the closed-path test.
- **#05 Raworth** is the only diagram with a genuine balancing loop (planetary pushback) sitting alongside unbalanced harm pathways — it's the stress test for the viewer's mixed-loop rendering, analogous to Ch02 HFT.
- **#06 Menegon** is the chapter's sharpest *fork*: two reinforcing loops sharing nodes, switched by a latent governance variable. It's the most Pearl-flavored diagram in the chapter and the strongest argument for why "is it the tech?" is the wrong question.

## Open questions

- **Stanford sources.** The chapter asserts the 2016 Stanford pneumonia deployment but offers no citation. The diagram encodes the failure mechanism as narrated, not as independently verified. Flag for fact-check pass.
- **Yang UBI direction.** Modeled UBI (n5) as affecting Economic Security positively via two confounding arcs. If later chapters treat UBI as an endogenous intervention rather than a latent alternative, this should be promoted to a visible mediator node.
- **Menegon loop polarity.** R2 (extraction cycle) counts two negative edges (commodification→trust negative; trust→tech positive) for even parity. If the "trust→tech" arc is reframed as "low trust → low adoption → less extraction," the polarity flips. Current choice matches Menegon's framing that extractive platforms persist *because* early trust seeds adoption that is then hollowed out.
- **Autor (9.10) integration.** The David Autor interview file is in sources but not cited in the chapter text. If a later edit weaves him in, a seventh diagram around skill-biased automation + labor market polarization may earn a slot — probably displacing #03 Yang, which would then become the DAG branch of an Autor-Yang pair.
- **Chollet latent node.** "Coordination Abstractions" is modeled as latent because the chapter treats it as the missing-but-prescribed layer. If the accompanying interview elevates it to an observed design choice, recategorize as mediator.
