# Smart Parking AI — Investor Pitch App

React 18 + Vite 5 + TailwindCSS 3 + Framer Motion + Recharts + Lucide.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/ (publié par Netlify)
```

## Architecture

```
src/
├── data/project.js          # TOUTES les données du plan stratégique (source unique)
├── components/
│   ├── layout/              # Sidebar (nav sticky + progression), PhaseBlock (phases repliables)
│   ├── ui/                  # Card, Section, Reveal, Counter animé, Tabs, ChartTooltip, Icon
│   └── charts/              # QuadrantChart (mapping concurrentiel)
└── sections/
    ├── Hero.jsx · Vision.jsx
    ├── phase1/  Diagnostic, Benchmark, MappingV1, USP, ZMOT, ConclusionV1, JourneyV1
    ├── phase2/  Pivot, Engine, JourneyV2, MappingV2, MVP, ABTests, PitchDeck
    ├── phase3/  Channels, PushPull, SEO, Campaigns, Gantt
    └── phase4/  Budget, Monetization, CLV, ROI, BreakEven, Forecast
```

Pour modifier un chiffre ou un texte, éditez uniquement `src/data/project.js`.
