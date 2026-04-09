# Prologue — Causal Diagrams

**Status:** 🟢 2 diagrams placed (both reused from Appendix A)

## Survivors (2)

| # | Slug | Nodes | Origin | Role |
|---|---|---|---|---|
| Pro.1 | `appA-00-coordination-function-C` | 5 | Reused from Appendix A §A.1 | The book's root equation, shown in the reader's first encounter with the three-body framework. Preview; the formal definition lives in Appendix A. |
| Pro.2 | `appA-01-pi-phi-balance-point` | 4 | Reused from Appendix A §A.2 | The dynamic π/φ balance point loop, making the constant visible at the point the prologue names it. |

## Rationale

The Prologue has two passages that beg for visual anchoring:

1. **§"Mathematical Reality as Fundamental Truth"** (line 30+) explicitly lists "the three bodies of reality" — Matter, Energy, Consciousness — and calls them "the coordination that observes both." That's the root of the book's argument, but it arrives as prose-only. The reader has no visual grip on what "three-body coordination" *looks* like until deep into Chapter 1.

2. **§"The π-φ Coordination Constant"** (line 58+) names π/φ ≈ 1.942 as "the optimal coordination ratio between stability and exploration in any conscious system" — a bold mathematical claim that currently arrives without its dynamical-systems structure.

Both passages deserve to preview the visuals that Appendix A formalizes. No new diagrams needed — we reuse `appA-00` and `appA-01`, cite Appendix A, and let the reader follow the pointer if they want rigor.

## Why reuse rather than author new

- **Honesty:** The prologue is making the same claims as Appendix A, earlier and less formally. The diagrams are literally the same causal structures.
- **Cross-reference discipline:** Pointing from the Prologue to Appendix A establishes the pattern for the rest of the book — any reader who wants the math can find it in the back matter.
- **Build efficiency:** No new graph JSONs to maintain, no drift between "prologue version" and "appendix version" of the same diagram.

## Notes

- The graph JSONs in `prologue/diagrams/graph/` are **copies** of the appendix JSONs (not symlinks), so the viewer's `build-data.sh` picks them up naturally. If the source appendix diagram changes, the prologue copy needs to be updated to match. A future improvement: symlink these instead of copying, or add a `reuses: appA-00` field to the JSON schema.
- The viewer lists these as `Prologue · 00 — C(A, B, Θ) → E — the fundamental operator [5]` and `Prologue · 01 — π/φ balance point — stability vs exploration [4]` — so both appear in the Prologue's chapter dropdown.
- Appendix A's diagrams remain unchanged and still appear under the "Appendix A" chapter in the viewer — they are shown in *both* places.
