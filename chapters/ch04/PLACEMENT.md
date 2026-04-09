# Chapter 4 — Diagram Placements

**Diagram source:** `chapters/ch04/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch04/text/chapter-04.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 4.N` (book convention)

## Placements (6 figures — one per case study)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **4.1** | `ch04-01-bogota-urban-coordination.png` | **45** | "...a three-body system where vision, infrastructure, and human behavior danced in harmony." | Closes the Bogotá case study. Lands on the explicit three-body summation of Peñalosa's transformation. |
| **4.2** | `ch04-02-copenhagen-wheel-coordination.png` | **82** | "...allowing technology to augment, rather than dictate, urban life." | Closes the smart-cities section after the Songdo/Masdar contrast. The Copenhagen Wheel is the positive exemplar the diagram crystallizes. |
| **4.3** | `ch04-03-medical-ai-three-body.png` | **128** | "...the intelligent dance between algorithm, expert, and patient context." | Closes the Medical AI section. This is the only Ch04 diagram using the latent-confounder pattern; the caption arrives immediately after the text names all three bodies. |
| **4.4** | `ch04-04-23andme-genomic-coordination.png` | **167** | "...a coordinated effort between individuals and researchers could yield results far faster than traditional methods." | Closes the 23andMe case. Lands on the reinforcing-loop claim the diagram models. |
| **4.5** | `ch04-05-adaptive-markets-2008-collapse.png` | **219** | "...ensuring that decisions are made from a place of holistic intelligence, not just isolated analysis." | Closes the Adaptive Markets / 2008 section. Diagram collapses the Raschke trader-level and Lo market-level three-body into one, so it lands after both passages. |
| **4.6** | `ch04-06-pni-healing-coordination.png` | **264** | "...not just the absence of disease, but a state of vibrant health and wholeness." | Closes the healing section. Diagram's balancing loop maps directly onto the PNI feedback the text just described. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 4.1:

```markdown

---

![Figure 4.1 — Bogotá's three-body urban coordination: Political Vision, Citizen Behavior, and Infrastructure Systems form a reinforcing loop whose emergent property is city intelligence.](../diagrams/png/ch04-01-bogota-urban-coordination.png)

*Figure 4.1 — Bogotá urban coordination. See `../diagrams/svg/ch04-01-bogota-urban-coordination.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 4.1** — Bogotá urban coordination (Political Vision ↔ Citizen Behavior ↔ Infrastructure) · line 45
2. **Figure 4.2** — Copenhagen Wheel coordination (Rider Effort ↔ Terrain Data ↔ Motor Assistance, balancing loop) · line 82
3. **Figure 4.3** — Medical AI three-body (Patient Data, Clinical Expertise, AI Pattern Recognition + latent Coordination Wisdom) · line 128
4. **Figure 4.4** — 23andMe genomic coordination (Individual Genetic Knowledge ↔ Medical Research ↔ Patient Participation) · line 167
5. **Figure 4.5** — Adaptive Markets / 2008 collapse (Rational Analysis ↔ Behavioral Dynamics ↔ Market Structure, reinforcing into catastrophe) · line 219
6. **Figure 4.6** — PNI healing coordination (Physical Treatment ↔ Emotional Healing ↔ Spiritual Transformation, balancing loop) · line 264

## Notes

- **Chapter 4 is unusually uniform:** every major section is explicitly pitched as a three-body coordination system, so the carve is one diagram per case study. Figures follow reading order, which matches slug order 01–06.
- **Figure 4.3 (Medical AI)** is the only Ch04 diagram with a latent-confounder node, mirroring Ch01's Facebook three-body. Its anchor line deliberately sits after the text has named all three bodies *and* described the "intelligent dance" so the latent "Coordination Wisdom" node reads as a claim the text has already earned.
- **Figure 4.5 (2008)** intentionally collapses Raschke's trader-level three-body into Lo's market-level three-body. The placement at line 219 — after the Raschke walkthrough — ensures the diagram is read as the synthesis of both passages, not just the Lo framework.
- **Figure 4.6 (PNI)** and **Figure 4.2 (Copenhagen Wheel)** are the chapter's only balancing-loop diagrams; the rest are reinforcing loops. No special callout in the captions — the loop polarity is visible in the diagrams themselves.
- **Relative path `../diagrams/png/`** is clean because every chapter is self-contained under `chapters/chNN/diagrams/png/`.
