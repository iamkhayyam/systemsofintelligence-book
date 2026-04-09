# Systems of Intelligence

Companion repository for the book *Systems of Intelligence* (Knowware Institute).
Target remote: https://github.com/knowwareinstitute/systemsofintelligence

## Layout

```
repo/
├── chapters/
│   └── chNN/
│       ├── text/         # Chapter prose (markdown)
│       ├── interviews/   # Expert interviews
│       ├── diagrams/
│       │   ├── mermaid/  # .mmd source (git-friendly)
│       │   ├── png/      # rendered exports for print
│       │   └── pen/      # .pen source (Pencil)
│       └── DIAGRAMS.md   # Index of causal diagrams for this chapter
├── appendices/
├── assets/
└── _meta/                # Schemas, conventions, provenance
```

## Diagram convention

Each causal diagram has three parallel artifacts:
1. **Mermaid** (`diagrams/mermaid/NN-slug.mmd`) — canonical source, version-controlled
2. **PNG** (`diagrams/png/NN-slug.png`) — rendered for print/PDF
3. **Pencil** (`diagrams/pen/NN-slug.pen`) — high-fidelity visual editing

`DIAGRAMS.md` in each chapter is the index of intended diagrams + status.

## Status

| Chapter | Text | Interviews | Diagrams identified | Diagrams drawn |
|---------|------|-----------|---------------------|----------------|
| 01      | ✅   | ✅ (10)    | 🟡 in review        | ⬜              |
| 02–10   | ✅   | ✅         | ⬜                   | ⬜              |
