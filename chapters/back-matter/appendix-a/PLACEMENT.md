# Appendix A — Diagram Placements

**Diagram source:** `chapters/back-matter/appendix-a/diagrams/png/` (self-contained per appendix)
**Appendix text:** `chapters/back-matter/appendix-a/text/appendix-a.md`
**Relative path from appendix text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure A.N` (book convention)

## Placements (4 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **A.1** | `appA-00-coordination-function-C.png` | **28** | "∃ E ∈ E such that E = C(A, B, Θ) and E ∉ {f(A) ∪ f(B)} for any functions f." | Hero image for §A.1.1. Lands immediately after the root equation's formal statement — the operator every other diagram in the corpus specializes. |
| **A.2** | `appA-01-pi-phi-balance-point.png` | **181** | "**lim (t→∞) S(t)/E(t) = π/φ**" | §A.2. Lands on the dynamic π/φ limit — the stability/exploration feedback loop converging to the setpoint. |
| **A.3** | `appA-02-golden-ratio-three-body.png` | **197** | "**\|A\|:\|B\|:\|C\| ≈ φ:1:φ⁻¹**" | §A.2 "Ternary Ratios in Conscious Systems". Lands on the static three-body golden-ratio allocation claim. |
| **A.4** | `appA-03-attractor-basin-fork.png` | **498** | "**B(A*) = {(A₀, B₀, C₀) : lim(t→∞) (A(t), B(t), C(t)) = A*}**" | §A.7 "Ternary Coordination Attractors". Lands immediately after the formal coordination-basin definition — the DAG showing why π/φ is a privileged attractor (Rigidity / Chaos / Sustained fork). |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure A.1:

```markdown

---

![Figure A.1 — The coordination function C: A × B × Θ → E. The root operator of the entire diagram corpus. Three reinforcing loops (A, B, Θ) feed the emergent outcome E; every chapter-level three-body diagram is an instance of this meta-diagram.](../diagrams/png/appA-00-coordination-function-C.png)

*Figure A.1 — Coordination function C(A, B, Θ) → E. See `../diagrams/svg/appA-00-coordination-function-C.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure A.1** — Coordination Function C (root operator) · line 28 · §A.1.1
2. **Figure A.2** — π/φ Balance Point (dynamic specialization) · line 181 · §A.2
3. **Figure A.3** — φ:1:φ⁻¹ Golden Ratio Three-Body (static specialization) · line 197 · §A.2
4. **Figure A.4** — Attractor Basin Fork (why π/φ is privileged) · line 498 · §A.7

## Notes

- **Figure A.1 is the hero** and also the root of the 60-diagram tree. It belongs at the start of §A.1 where `C: A × B × Θ → E` is formally defined. Every other diagram in the book — Facebook, Netflix, AlphaFold, HW/SW/Knowware, the π/φ trio below — is a binding of this operator to specific (A, B, Θ) observables.
- **Figures A.2 and A.3 both live in §A.2** because that's where both π/φ claims are stated. A.2 anchors the dynamic limit (`lim S/E = π/φ`); A.3 anchors the static ratio (`φ:1:φ⁻¹`). Keeping them in reading order preserves the slug-to-figure mapping.
- **Figure A.4 is deferred to §A.7** rather than placed adjacent to A.2/A.3, because the coordination basin and bifurcation language it depicts is only formally introduced in the Dynamical Systems section. Landing the DAG there lets the figure sit on its own vocabulary instead of previewing it 300 lines early.
- **Slug-to-figure mapping is 1:1 here** (appA-00 → A.1, appA-01 → A.2, appA-02 → A.3, appA-03 → A.4) because the slug numbering already follows conceptual reading order: the root operator first, then its three specializations.
- **Relative path `../diagrams/png/`** matches the self-contained appendix folder convention used for chapters.
