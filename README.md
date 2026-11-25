# EasyPark — Smart Parking et Smart Sharing

Site du dossier stratégique EasyPark : Smart Parking (réservation automatique et premium) et Smart Sharing (location de places).
Version actuelle : étapes 1 et 2 sur 10 (diagnostic et audit de l'application ; marché, benchmark et mappings V1/V2), avec la correspondance aux consignes du cours et les règles du prévisionnel.

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
├── App.jsx                  # aiguillage : dossier stratégique, ou archive avec ?version=pitch-v1
├── data/
│   ├── dossier.js           # TOUTES les données du dossier stratégique (source unique)
│   └── project.js           # données de l'archive « Smart Parking AI » (V1)
├── smart/                   # site actuel
│   ├── SmartApp.jsx · SmartSidebar.jsx · ui.jsx
│   └── sections/  Overview (accueil, synthèse, méthode), Entreprise (1.1, 1.2, 1.6),
│                  Application (1.3 à 1.5), Externe (1.7, 1.8), Conclusions (1.9 à 1.11, sources)
├── ArchiveApp.jsx           # ancien pitch, conservé en archive
├── components/              # composants partagés (layout, ui, charts)
└── sections/                # sections de l'archive V1
```

Pour modifier un chiffre ou un texte du dossier, éditez uniquement `src/data/dossier.js`.
