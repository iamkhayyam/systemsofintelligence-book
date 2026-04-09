# Chapter 6 — Causal Diagrams

**Chapter:** Consciousness as Pattern Recognition
**Status:** 5 diagrams authored as arc_engine graph JSONs

## Survivors (5)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch06-01-uber-classification-failure` | 5 (1 latent) | CLD · no loop, 2 confounding | "It could detect her presence... but it lacked the awareness to interpret these patterns as a human being in danger." |
| 02 | `ch06-02-russell-alignment-loop` | 5 (1 latent) | CLD · B1 (Midas correction via IRL) | "AI that learns to coordinate its capabilities with human values by understanding context." |
| 03 | `ch06-03-gebru-injustice-amplification` | 5 (1 latent) | CLD · R1 (fairness-washing spiral), 2 confounding | "How does this AI coordinate with existing power structures, and what does that coordination create for the people it affects?" |
| 04 | `ch06-04-crawford-material-stack` | 5 | CLD · R1 (extraction flywheel) | "Every query... coordinates your question with server farms... with rare earth mines... with underpaid content moderators." |
| 05 | `ch06-05-consciousness-coordination` | 4 | CLD · R1 (consciousness loop) | "Consciousness isn't a feature you add. It's an emergent property of coordination architecture." |

## Cut

- **"Three-body consciousness" opening frame** (perception / processing / awareness) — redundant with #01 Uber, which is the same triad rendered as a real failure. Abstract restatement earned no seat.
- **Paperclip maximizer / genie** — same shape as #02 Russell alignment; would duplicate the Midas structure.
- **Gender Shades benchmark DAG** (training data → accuracy disparity) — subsumed by #03 Gebru, which already captures the fairness→deployment→harm→data loop. A benchmark-only DAG would be narrower and weaker.
- **Hot-stove neural coordination example** — pedagogical analogy for #05, not a distinct causal structure.
- **"Unconscious vs conscious AI" contrast table** — prose comparison, not causal.

## Notes

- **#01 Uber** is intentionally loop-free. The failure is a *missing* feedback arc: awareness never closes back on perception. The latent `Contextual Awareness` node with dashed confounding arcs makes the absence visible.
- **#02 Russell** is the only balancing loop in the chapter. Inverse reinforcement learning is the corrective arc; `Human Intent` stays latent because IRL only partially identifies it.
- **#03 Gebru** is the darkest loop — a reinforcing spiral where "fairness" certification launders biased deployment back into training data. Two confounding arcs from `Systemic Inequality` make the non-identifiability explicit.
- **#04 Crawford** is the only fully identifiable diagram: supply-chain auditability is the whole point of her argument.
- **#05 Consciousness coordination** is the chapter's synthesis. Kept to 4 nodes deliberately — it's the schematic that the other four diagrams are failure/success instances of.
- None of the interview files (6.01–6.03) introduce causal structures distinct from what the main chapter already articulates; they elaborate case evidence (Gender Shades numbers, cobalt supply chain, IRL formalism) but reuse the same three-body frames.

## Open questions

- **#01 Uber**: should the human safety driver (Vasquez) appear as a second latent awareness node, or does that dilute the AI-system focus? Current call: omit — the NTSB framing is about AI awareness failure; the driver is a separate layer.
- **#02 Russell**: Is `Stated Objective` really a mediator or a driver? Modeled as mediator because capability acts *through* it. Revisit if Ch07 reuses the frame.
- **#03 Gebru**: the R1 loop is only reinforcing *given* the confounding inequality arcs. Without them, `Disparate Harm → Training Data → Technical Fairness` is observationally consistent with a balancing interpretation ("harm triggers audits"). The identifiability note captures this but the loop label is an editorial choice.
- **#04 Crawford**: worth a DAG variant (`fmt: "both"`) for a print appendix that quantifies the extraction→output coefficients? Left as pure CLD for now.
- **#05 Consciousness**: this is schematic, not empirical. Flag in caption that it's normative/architectural rather than a claim about any real system.
