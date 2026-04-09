# Chapter 1 — Diagram Placements

**Diagram source:** `chapters/ch01/diagrams/png/` (self-contained per chapter)
**Chapter text:** `chapters/ch01/text/chapter-01.md`
**Relative path from chapter text to diagrams:** `../diagrams/png/`
**Caption convention:** `Figure 1.N` (book convention)

## Placements (8 figures — 7 individual + 1 triptych)

| Figure | Diagram file | After line | Anchor text | Strategy |
|---|---|---|---|---|
| **1.1** | `01-facebook-three-body.png` | **33** | "...The third element—the coordination space—is where emergence happens. Where the real intelligence lives." | Hero image. Lands on the chapter's first explicit three-body statement. |
| **1.2** | `ch01-failure-triptych.png` | **85** | Section heading "## The Pattern Across Every Domain" | Triptych introducing the three failure cases side-by-side *before* each is examined individually. Sets up the pattern; the three individual figures (1.3–1.5) then go deeper. |
| **1.3** | `04-mars-orbiter-coordination-gap.png` | **95** | "...When coordination fails, the system becomes literally mindless..." | End of the Mars Orbiter subsection paragraph. |
| **1.4** | `05-2008-systemic-correlation.png` | **103** | "...The missing third element was a robust understanding and monitoring of how risks *coordinated*..." | End of the 2008 Crisis subsection. Mirrors the diagram's latent "Systemic Monitoring" node. |
| **1.5** | `06-737max-mcas-human-machine.png` | **111** | "...The missing third element was the *operational coordination*..." | End of the 737 MAX subsection. Mirrors the diagram's latent "Pilot Awareness" node. |
| **1.6** | `07-hardware-software-knowware.png` | **163** | "**Knowware:** Adaptive intelligence..." | Anchors the book's canonical schema immediately after the three-layer definition list. |
| **1.7** | `10-universal-coordination-pattern.png` | **198** | End of the numbered 4-step list (Identify → Design → Enable → Adapt) | Placed before Burning Man so the universal pattern is stated, then exemplified. |
| **1.8** | `09-burning-man-three-elements.png` | **202** | "...something emerges that none could create alone." | Closes the Larry Harvey passage. |

## Insertion syntax

Each figure inserts as a markdown image with a caption line. Example for Figure 1.1:

```markdown

---

![Figure 1.1 — Facebook's three-body system: Human Behavior, Algorithmic Curation, and Emergent Contagion form a reinforcing loop. The latent "Coordination Wisdom" node (dashed) is the missing norm-set Facebook never built.](../diagrams/png/01-facebook-three-body.png)

*Figure 1.1 — Facebook's three-body system. See `../diagrams/svg/01-facebook-three-body.svg` for the vector source.*

---

```

## Complete figure list (reading order)

1. **Figure 1.1** — Facebook three-body system (hero) · line 33
2. **Figure 1.2** — Failure triptych (Mars / 2008 / 737) · line 85 (new section header)
3. **Figure 1.3** — Mars Climate Orbiter coordination gap · line 95
4. **Figure 1.4** — 2008 Crisis systemic correlation · line 103
5. **Figure 1.5** — 737 MAX MCAS three-body failure · line 111
6. **Figure 1.6** — Hardware ↔ Software ↔ Knowware · line 163
7. **Figure 1.7** — Universal coordination pattern · line 198
8. **Figure 1.8** — Burning Man three-element coordination · line 202

## Notes

- **Figure 1.2 (triptych)** is a new composite: 3 chapter diagrams resized to 600px height, labeled, and combined into a single 2584×730 PNG. Source: `chapters/ch01/diagrams/png/ch01-failure-triptych.png`. The triptych is *additional to* — not a replacement for — Figures 1.3–1.5, which show each case in full detail.
- **Slug-to-figure mapping** is not 1:1 because the slug numbers follow authoring order; figure numbers follow reading order. For example, slug `10-universal-coordination-pattern` becomes Figure 1.7 because it's read before the Burning Man exemplar (slug `09`).
- **Relative path `../diagrams/png/`** is clean because we distributed all diagram files into per-chapter folders. Every chapter is now self-contained.
