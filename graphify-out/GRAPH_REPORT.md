# Graph Report - .graphify_corpus  (2026-04-08)

## Corpus Check
- 17 files · ~80,876 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 131 nodes · 220 edges · 10 communities detected
- Extraction: 59% EXTRACTED · 41% INFERRED · 0% AMBIGUOUS · INFERRED: 90 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `Chapter 2 Dawn Systems Intelligence` - 31 edges
2. `Chapter 1 Coordination Intelligence` - 30 edges
3. `Acknowledgments` - 23 edges
4. `Preface Letter To Reader` - 11 edges
5. `Chapter 4 AI Ethics` - 11 edges
6. `Chapter 3 Architecture` - 10 edges
7. `Chapter 6 Consciousness` - 10 edges
8. `Chapter X Grand Coordination` - 10 edges
9. `Chapter 7 Engineering Coordination` - 8 edges
10. `Coordination Intelligence` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Doughnut Economics` --conceptually_related_to--> `Coordination Intelligence`  [INFERRED]
  ch09-chapter-09.md → ch01-chapter-01.md
- `Chapter X Grand Coordination` --closes_loop_on--> `Acknowledgments`  [INFERRED]
  chX-chapter-X.md → 00-acknowledgments.md
- `Chapter 2 Dawn Systems Intelligence` --cites--> `Chapter 1 Coordination Intelligence`  [INFERRED]
  ch02-chapter-02.md → ch01-chapter-01.md
- `Chapter 3 Architecture` --cites--> `Chapter 1 Coordination Intelligence`  [INFERRED]
  ch03-chapter-03.md → ch01-chapter-01.md
- `Chapter 9 Barriers` --cites--> `Chapter 1 Coordination Intelligence`  [INFERRED]
  ch09-chapter-09.md → ch01-chapter-01.md

## Hyperedges (group relationships)
- **Coordination Failure Case Studies** — facebook-emotion-experiment, mars-climate-orbiter, financial-crisis-2008, boeing-737-max [EXTRACTED 1.00]
- **Cybernetics Lineage Thinkers** — norbert-wiener, gregory-bateson, heinz-von-foerster, gordon-pask, ross-ashby, paul-pangaro [EXTRACTED 1.00]
- **Musk Three Body Ventures** — tesla, spacex, neuralink, elon-musk, first-principles [EXTRACTED 1.00]
- **Consciousness Coordination Frameworks** — hard-problem-consciousness, iit, meta-recognition, conversation-theory, pi-phi-constant [INFERRED 0.80]
- **Three Body Coordination Wins** — netflix, spacex, paypal, anduril, oculus-vr, iaac-building [EXTRACTED 1.00]

## Communities

### Community 0 - "Musk Ventures & First Principles"
Cohesion: 0.13
Nodes (23): Anduril Lattice, Appendix A Mathematics, Causal Inference, Chapter 2 Dawn Systems Intelligence, Coordination Function C, Elon Musk, First Principles Thinking, Game Of Life (+15 more)

### Community 1 - "Opening Failures & Cybernetics Roots"
Cohesion: 0.13
Nodes (23): About The Author, Appendix C Resources, Boeing 737 MAX, Burning Man, Chapter 1 Coordination Intelligence, Conversation Theory, Distributed Cognition, Facebook Emotion Experiment (+15 more)

### Community 2 - "Consciousness & Ternary Capstone"
Cohesion: 0.16
Nodes (19): Chapter 6 Consciousness, Chapter X Grand Coordination, David Chalmers, Emergence, Giulio Tononi, Hard Problem Of Consciousness, Hardware Software Knowware, Hybrid Intelligence (+11 more)

### Community 3 - "Cybernetics Canon"
Cohesion: 0.11
Nodes (19): Acknowledgments, Alan Turing, Daniel Dennett, Donella Meadows, Francisco Varela, Fritjof Capra, Geoffrey Hinton, Gregory Bateson (+11 more)

### Community 4 - "AI Ethics & DeepMind"
Cohesion: 0.24
Nodes (11): AlphaFold, AlphaGo, Chapter 4 AI Ethics, DeepMind, Demis Hassabis, Emad Mostaque, François Chollet, Kate Crawford (+3 more)

### Community 5 - "Architecture & Alignment"
Cohesion: 0.31
Nodes (9): Anthropic, Appendix B Implementation, Chapter 3 Architecture, Constitutional AI, Coordination Intelligence, Cybernetics, Dario Amodei, HFT Market Making (+1 more)

### Community 6 - "Distribution & Causal Theory"
Cohesion: 0.25
Nodes (8): Andrew Yang, Binary Thinking, Chapter 9 Barriers, Charles Eisenstein, Doughnut Economics, Judea Pearl, Kate Raworth, Ladder Of Causation

### Community 7 - "Urban & Embodied Coordination"
Cohesion: 0.32
Nodes (8): Alex Pentland, Bogota Urban Coordination, Carlo Ratti, Chapter 7 Engineering Coordination, Copenhagen Wheel, Eric Topol, Jimmy Wales, Wikipedia

### Community 8 - "Cosmic Coordination"
Cohesion: 0.4
Nodes (6): Chapter 8 Cosmic Coordination, Dark Forest Hypothesis, Liu Cixin, Max Tegmark, Nick Bostrom, Three Body Problem

### Community 9 - "BCI & Singularity"
Cohesion: 0.6
Nodes (5): Brain Computer Interface, Chapter 5 Hybrid Intelligence, Miguel Nicolelis, Ray Kurzweil, Thomas Oxley

## Knowledge Gaps
- **45 isolated node(s):** `About The Author`, `Sam Harris`, `Shannon Vallor`, `Alex Pentland`, `Ray Kurzweil` (+40 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Chapter 1 Coordination Intelligence` connect `Opening Failures & Cybernetics Roots` to `Musk Ventures & First Principles`, `Consciousness & Ternary Capstone`, `Architecture & Alignment`, `Distribution & Causal Theory`, `Cosmic Coordination`?**
  _High betweenness centrality (0.334) - this node is a cross-community bridge._
- **Why does `Chapter 2 Dawn Systems Intelligence` connect `Musk Ventures & First Principles` to `Opening Failures & Cybernetics Roots`, `Cybernetics Canon`, `Architecture & Alignment`, `Distribution & Causal Theory`?**
  _High betweenness centrality (0.315) - this node is a cross-community bridge._
- **Why does `Acknowledgments` connect `Cybernetics Canon` to `Opening Failures & Cybernetics Roots`, `Consciousness & Ternary Capstone`, `AI Ethics & DeepMind`, `Architecture & Alignment`, `Distribution & Causal Theory`?**
  _High betweenness centrality (0.307) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Chapter 2 Dawn Systems Intelligence` (e.g. with `Appendix A Mathematics` and `Chapter 1 Coordination Intelligence`) actually correct?**
  _`Chapter 2 Dawn Systems Intelligence` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 5 inferred relationships involving `Chapter 1 Coordination Intelligence` (e.g. with `Appendix C Resources` and `Chapter 2 Dawn Systems Intelligence`) actually correct?**
  _`Chapter 1 Coordination Intelligence` has 5 INFERRED edges - model-reasoned connections that need verification._
- **Are the 11 inferred relationships involving `Chapter 4 AI Ethics` (e.g. with `Shannon Vallor` and `Timnit Gebru`) actually correct?**
  _`Chapter 4 AI Ethics` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `About The Author`, `Sam Harris`, `Shannon Vallor` to the rest of the system?**
  _45 weakly-connected nodes found - possible documentation gaps or missing edges._