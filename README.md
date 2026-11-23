# Projet SMART — Étude stratégique EasyPark

Site de l'étude stratégique du projet SMART (Smart Parking, Smart Sharing, Smart Mobility).
Version actuelle : étape 1 sur 12, le diagnostic stratégique interne et externe.

Projet académique, non officiel : il n'engage ni EasyPark ni Arrive et n'utilise aucune donnée interne.

React 18 + Vite 5 + TailwindCSS 3 + Framer Motion + Recharts + Lucide.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/ (publié par Netlify)
```

## Architecture

```
src/
├── App.jsx                  # aiguillage : étude SMART, ou archive avec ?version=pitch-v1
├── data/
│   ├── smart.js             # TOUTES les données de l'étude SMART (source unique)
│   └── project.js           # données de l'archive « Smart Parking AI » (V1)
├── smart/                   # site actuel
│   ├── SmartApp.jsx · SmartSidebar.jsx · ui.jsx
│   └── sections/  Overview (accueil, synthèse, cadre), Interne (profil, VRIO),
│                  Externe (PESTEL, Porter), Conclusions (SWOT, axes, données, sources)
├── ArchiveApp.jsx           # ancien pitch, conservé en archive
├── components/              # composants partagés (layout, ui, charts)
└── sections/                # sections de l'archive V1
```

Pour modifier un chiffre ou un texte de l'étude, éditez uniquement `src/data/smart.js`.
