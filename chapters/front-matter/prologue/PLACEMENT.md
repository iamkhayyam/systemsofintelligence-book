# Prologue — Diagram Placements

**Chapter text:** `chapters/front-matter/prologue/text/prologue.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure Pro.N` (Pro for Prologue)

The Prologue explicitly names two mathematical concepts — the three-body coordination framework and the π-φ constant — but doesn't currently *show* them. These two figures make the prologue's claims visible at the point they're invoked.

Both figures are **reused** from Appendix A. The prologue uses them as *preview/intuition*; the appendix uses them as *formal definition*. The same graph JSON (and same rendered PNG) is referenced from both places.

## Placements (2 figures — both reused from Appendix A)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **Pro.1** | `appA-00-coordination-function-C.png` | **54** (end of "The three bodies of reality" bullet list) | "- **Matter** (the first body) ... - **Energy** (the second body) ... - **Consciousness** (the coordination that observes both)" | Lands on the prologue's first formal three-body statement. The root operator `C(A, B, Θ) → E` visualizes the pattern the bullet list just named. This is the reader's first encounter with the book's fundamental equation — *before* Chapter 1 starts specializing it. |
| **Pro.2** | `appA-01-pi-phi-balance-point.png` | **93** (end of §"The π-φ Coordination Constant" section) | "...π/φ ≈ 1.942 — the optimal coordination ratio between stability and exploration in any conscious system." | Closes §"The π-φ Coordination Constant". The prologue names the constant but doesn't show the dynamic loop structure that makes it meaningful; this diagram does. Appendix A §A.2 contains the formal derivation. |

## Insertion syntax

Both figures use the same insertion template. Example for Figure Pro.1:

```markdown

---

![Figure Pro.1 — The fundamental operator C(A, B, Θ) → E: two elements coordinate in a context to produce emergence that neither could produce alone. Every causal diagram in this book is an instance of this single operator with different (A, B, Θ) bindings. Formal definition in Appendix A §A.1.](../diagrams/png/appA-00-coordination-function-C.png)

*Figure Pro.1 — Coordination Function C(A, B, Θ) → E. See `../diagrams/svg/appA-00-coordination-function-C.svg` for the vector source. Full definition in Appendix A §A.1.*

---

```

## Cross-reference pattern (reused figures)

Since Pro.1 and Pro.2 are the same rendered PNGs used in Appendix A, the captions explicitly cite Appendix A. This establishes the pattern for any future reused figures:

> "See Appendix A §A.1 for the formal definition."

The reader who wants intuition reads the Prologue caption. The reader who wants rigor follows the pointer to Appendix A. The diagram is the same.

## Open questions

1. **Should the π-φ attractor basin diagram (appA-03) also appear in the Prologue?** The prologue discusses how consciousness "emerges at the π-φ balance point" — the attractor fork shows *why* that's a stable equilibrium vs the rigidity/dissolution failure modes. It would strengthen the prologue's claim at the cost of adding a third figure to a 306-line section.
2. **Figure numbering for reused diagrams.** `Pro.1` and `Pro.2` are numbered fresh for their placement in the Prologue, but their slug IDs still reflect their origin in Appendix A (`appA-00`, `appA-01`). Is this the right convention for the book's final figure list, or should the slug be aliased?
3. **Pro vs 0.** Same question as the Preface: `Figure Pro.1` vs `Figure 0.1`. Pro is clearer semantically; 0.1 reads as the book's numeric counting system.
