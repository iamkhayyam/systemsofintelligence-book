# Chapter 8 — Causal Diagrams

**Chapter:** Beyond Human Intelligence — Cosmic Three-Body Dynamics
**Status:** 6 diagrams authored as arc_engine graph JSONs

## Survivors (6)

| # | Slug | Nodes | Type | Source claim |
|---|---|---|---|---|
| 01 | `ch08-01-intelligence-explosion` | 5 | CLD · B1 + R1 | "Intelligence explosion is not one body; capability, intent, and the coordination layer must recurse together." (8.1 + Tegmark) |
| 02 | `ch08-02-bostrom-control` | 6 (1 latent) | DAG · B1, 2 confounding | "Orthogonality + instrumental convergence make containment fail; only value learning and corrigibility close the loop." (8.1 Bostrom) |
| 03 | `ch08-03-hassabis-agi` | 5 | CLD · R1 | "AGI is a coordination system routing specialized capabilities, meta-learning, and goals." (8.1 Hassabis) |
| 04 | `ch08-04-seti-coordination-signatures` | 6 (1 latent) | DAG · R1, 2 confounding | "SETI should search for coordination signatures, not messages — human hypothesis + AI detection + physics." (8.2 Tarter, Seager) |
| 05 | `ch08-05-dark-forest` | 6 (1 latent) | CLD · R1 | "Delay + unknowability -> perceived threat -> preemption -> silence, a self-reinforcing coordination trap." (8.2 Liu Cixin) |
| 06 | `ch08-06-consciousness-coordination` | 5 (2 latent) | DAG · R1, 2 confounding | "Consciousness is meta-coordination between physical processing and subjective experience via an attention schema." (8.3 Chalmers, Bach, Nagel) |

## Cuts (from the long-list)

- **Apollo three-body opener** — vivid as prose but structurally identical to Ch01's facebook-three-body; no new shape.
- **Pattern Scales ladder (Planetary / Cosmic / Universal)** — a rhetorical restatement of the book's core frame, not a causal claim.
- **Tegmark-specific diagram** — already fully captured by `ch08-01-intelligence-explosion`; a separate Tegmark CLD would duplicate nodes.
- **Sara Seager biosignature sub-diagram** — folded into `ch08-04-seti-coordination-signatures`; the causal structure (hypothesis -> AI -> signature -> detection) is the same as Tarter's.
- **Bach attention schema as its own CLD** — the attention loop is the core of `ch08-06-consciousness-coordination`; a separate diagram would only relabel nodes.
- **Nagel "what is it like to be a bat" DAG** — his claim (subjective experience is irreducible) is a *latent* in the consciousness diagram, not a distinct structure.
- **"Fractal coordination / Ray of Creation" closing diagram** — metaphor, not a causal graph; nothing to intervene on.

## Notes
- **#01** has a mixed loop set (B1 corrigibility brake + R1 aligned-acceleration flywheel) using the same three nodes with different sign paths; a good stress test of parity logic and one of the chapter's cleanest analytical payoffs.
- **#02 Bostrom** is authored as a DAG because the orthogonality thesis is explicitly a claim about identifiability: without access to true human values (latent n6), an apparently aligned goal structure is not distinguishable from a deceptively aligned one.
- **#04 SETI** and **#06 Consciousness** are the chapter's two "hard problem" diagrams — both have latent confounders that make the causal question unanswerable from observation alone. That is deliberately the point of each chapter section.
- **#05 Dark Forest** is the only diagram in the chapter whose *coordination architecture* node is latent-by-absence: the thing that would break the loop has never been instantiated.

## Open questions
- Should `ch08-01` split the B1 and R1 loops into two diagrams? They share nodes but tell opposite stories; rendering both loop badges on one canvas may be visually crowded.
- Is there a distinct "Apollo as ground truth" diagram worth authoring as a historical counter-example to the dark-forest trap? Currently cut for redundancy with Ch01, but it could anchor the chapter's opener visually.
- The consciousness diagram treats `Subjective Experience` as latent. An alternative is to treat it as observed-but-private, which would change the DAG to "not-identifiable due to measurement" rather than "not-identifiable due to latency." Worth a second pass with the philosophy interviews.
