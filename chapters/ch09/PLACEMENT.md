# Chapter 9 — Diagram Placements

**Diagram source:** `chapters/ch09/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch09/text/chapter-09.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 9.N` (book convention)

## Placements (6 figures)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **9.1** | `ch09-01-stanford-ai-deployment.png` | **45** | "The technology worked. The coordination failed." | Hero image. Lands on the chapter's opening case punchline — Stanford pneumonia AI shut down despite 95% accuracy. Latent "Integration Coordination" node is the missing layer. |
| **9.2** | `ch09-02-chollet-death-spiral.png` | **150** | "...complexity creates coordination overhead, which creates cognitive load, which in turn creates more complexity." | Closes Chollet's death-spiral statement; the diagram's reinforcing loop literally names the sentence. |
| **9.3** | `ch09-05-raworth-doughnut-overshoot.png` | **243** | "...coordination-first, regenerative, distributive." | Closes the Raworth passage in §9.2. The balancing loop (planetary pushback) + latent regenerative-distribution node mirror the doughnut's inner/outer boundaries. |
| **9.4** | `ch09-03-yang-automation-distribution.png` | **257** | "...coordinating technological capability with human needs through distribution systems that serve everyone." | Closes the Yang UBI passage. Latent UBI node re-couples capability to security — the diagram is the argument's structure. |
| **9.5** | `ch09-04-turkle-conversation-erosion.png` | **329** | "...using technology to enhance rather than replace human connection." | Closes the Turkle §9.3 passage. Reinforcing loop (mediation → fragmented attention → erosion → more mediation) is the "conversation crisis" stated causally. |
| **9.6** | `ch09-06-menegon-mutual-aid-fork.png` | **359** | "...coordinating technology with human connection to create resilience and belonging." | Closes the Menegon passage and the chapter's three-section arc. The virtuous/vicious fork with latent platform-ownership switch is the sharpest "is it the tech?" rebuttal in the chapter. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 9.1:

```markdown

---

![Figure 9.1 — Stanford AI deployment three-body failure: AI Capability undermines Radiologist Workflow and Hospital Operations when the latent Integration Coordination layer (dashed) is absent. The technology worked; the coordination failed.](../diagrams/png/ch09-01-stanford-ai-deployment.png)

*Figure 9.1 — Stanford AI deployment three-body failure. See `../diagrams/svg/ch09-01-stanford-ai-deployment.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 9.1** — Stanford AI deployment three-body failure · line 45
2. **Figure 9.2** — Chollet coordination death spiral · line 150
3. **Figure 9.3** — Raworth doughnut overshoot + regenerative distribution · line 243
4. **Figure 9.4** — Yang automation / distribution gap · line 257
5. **Figure 9.5** — Turkle conversation erosion loop · line 329
6. **Figure 9.6** — Menegon mutual aid virtuous/vicious fork · line 359

## Notes

- **Slug-to-figure mapping** is not 1:1 because slug numbers follow the DIAGRAMS.md authoring order while figure numbers follow reading order. Slug `ch09-05-raworth` becomes Figure 9.3 (Raworth is read before Yang in §9.2); slug `ch09-03-yang` becomes Figure 9.4.
- **One figure per voice.** Chapter 9 profiles nine thinkers but only six earned diagrams (see `DIAGRAMS.md` "Cut" section — Mostaque, the digital-wellbeing consultant, Eisenstein, Rosedale, and Autor were cut for redundancy or lack of a directional causal claim). Every placed figure sits at the end of its subject's passage so the diagram closes the argument rather than interrupting it.
- **Figure 9.1 is the only non-terminal placement** — it lands mid-opening on the "technology worked / coordination failed" line because that sentence *is* the chapter's thesis and the diagram is the hero image for the whole chapter.
- **Relative path `../diagrams/png/`** is clean because all diagram files live in the per-chapter folder. Chapter is self-contained.
