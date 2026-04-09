// Inlined diagram data — no fetch needed (works under file://).
// Each entry: { label, data }. Mirror of chapters/chNN/diagrams/graph/*.json
window.__DIAGRAMS__ = [
  {
    label: "Ch01 · 01 — Facebook three-body",
    data: {
      "id": "01-facebook-three-body",
      "title": "Facebook three-body system",
      "summary": "Algorithmic curation, human emotion, and social network dynamics coordinate to produce emergent collective behavior; optimizing any two while ignoring the third creates a coordination crisis.",
      "fmt": "both",
      "source": "Ch01 — \"Human behavior ↔ Algorithm optimization ↔ Social system dynamics\"",
      "nodes": [
        { "id": "n1", "label": "Human Emotion",         "description": "User emotional state shaped by feed content",            "category": "driver",   "is_latent": false },
        { "id": "n2", "label": "Engagement Signal",     "description": "Likes, dwell time, shares fed back to ranker",          "category": "mediator", "is_latent": false },
        { "id": "n3", "label": "Algorithmic Curation",  "description": "News Feed ranker selects content to show",              "category": "feedback", "is_latent": false },
        { "id": "n4", "label": "Network Contagion",     "description": "Emotional state propagates through social graph",      "category": "outcome",  "is_latent": false },
        { "id": "n5", "label": "Coordination Wisdom",   "description": "Missing third element: shared norms / protocol",       "category": "latent",   "is_latent": true  }
      ],
      "edges": [
        { "from": "n1", "to": "n2", "polarity": "positive", "description": "Emotional content drives more engagement",                 "has_delay": false, "is_confounding": false },
        { "from": "n2", "to": "n3", "polarity": "positive", "description": "Engagement signals train the ranker",                       "has_delay": false, "is_confounding": false },
        { "from": "n3", "to": "n1", "polarity": "positive", "description": "Curated feed amplifies user emotion",                       "has_delay": false, "is_confounding": false },
        { "from": "n1", "to": "n4", "polarity": "positive", "description": "Individual emotion seeds contagion",                        "has_delay": true,  "is_confounding": false },
        { "from": "n4", "to": "n1", "polarity": "positive", "description": "Network mood reshapes individual emotion",                  "has_delay": true,  "is_confounding": false },
        { "from": "n5", "to": "n3", "polarity": "negative", "description": "Coordination wisdom would dampen pure-engagement",          "has_delay": false, "is_confounding": true  },
        { "from": "n5", "to": "n4", "polarity": "negative", "description": "Coordination wisdom would dampen runaway contagion",        "has_delay": false, "is_confounding": true  }
      ],
      "loops": [
        { "type": "reinforcing", "label": "R1 — Emotional engagement spiral", "nodes": ["n1","n2","n3"], "minus_count": 0 },
        { "type": "reinforcing", "label": "R2 — Network contagion",           "nodes": ["n1","n4"],       "minus_count": 0 }
      ],
      "identifiability": "not_identifiable",
      "identifiability_note": "Coordination wisdom (n5) is a latent confounder on both algorithm and contagion pathways; the causal effect of curation on emotion is not estimable from observational feed data alone."
    }
  }
];
