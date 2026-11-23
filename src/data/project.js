// Toutes les données proviennent du document « Smart Parking — Plan stratégique ».

/* ───────────────────────── NAVIGATION ───────────────────────── */
export const phases = [
  {
    id: 'phase-1',
    num: 1,
    title: 'V1 — Comprendre',
    short: 'Comprendre',
    sections: [
      { id: 'diagnostic', label: 'Diagnostic' },
      { id: 'benchmark', label: 'Benchmark' },
      { id: 'mapping-v1', label: 'Mapping V1' },
      { id: 'usp', label: 'USP' },
      { id: 'zmot', label: 'ZMOT' },
      { id: 'journey-v1', label: 'Customer Journey V1' },
    ],
  },
  {
    id: 'phase-2',
    num: 2,
    title: 'Pitch V2 — Itérer',
    short: 'Itérer',
    sections: [
      { id: 'pivot', label: 'Pivot' },
      { id: 'engine', label: 'Smart Allocation Engine™' },
      { id: 'journey-v2', label: 'Customer Journey V2' },
      { id: 'mapping-v2', label: 'Mapping V2' },
      { id: 'mvp', label: 'POC / MVP' },
      { id: 'ab-tests', label: 'A/B Tests' },
      { id: 'pitch-deck', label: 'Pitch Deck' },
    ],
  },
  {
    id: 'phase-3',
    num: 3,
    title: "Comm' digitale — Activer",
    short: 'Activer',
    sections: [
      { id: 'channels', label: 'Canaux' },
      { id: 'push-pull', label: 'Push / Pull' },
      { id: 'seo', label: 'Ads + SEO' },
      { id: 'campaigns', label: 'Campagnes' },
      { id: 'gantt', label: 'GANTT' },
    ],
  },
  {
    id: 'phase-4',
    num: 4,
    title: 'ROI / Prévi — Chiffrer',
    short: 'Chiffrer',
    sections: [
      { id: 'budget', label: 'Budgets' },
      { id: 'monetization', label: 'Monétisation' },
      { id: 'clv', label: 'CLV' },
      { id: 'roi', label: 'ROI & ROAS' },
      { id: 'break-even', label: 'Point mort' },
      { id: 'forecast', label: 'Prévisions 12 mois' },
    ],
  },
]

/* ───────────────────────── HERO ───────────────────────── */
export const hero = {
  title: 'Smart Parking AI',
  subtitle: 'The Operating System for Parking',
  tagline:
    "Vous ne cherchez plus une place. L'IA la prédit, la réserve, l'attribue et la gère avant même votre arrivée.",
  kpis: [
    { value: 0, suffix: ' sec', label: "Temps d'attente en entrée", prefix: '' },
    { value: 1, suffix: ' min', label: "Recherche d'une place", prefix: '<' },
    { value: 30, suffix: ' %', label: "Taux d'occupation", prefix: '+' },
    { value: 25, suffix: ' %', label: 'Revenus par place', prefix: '+' },
  ],
}

/* ───────────────────────── PHASE 1 ───────────────────────── */
export const marketContext = [
  'Les automobilistes perdent du temps à chercher une place disponible.',
  'Les parkings disposent souvent de places libres mais mal exploitées.',
  'Les systèmes de réservation existants nécessitent une action manuelle.',
  'Les utilisateurs jonglent entre plusieurs applications (navigation, réservation, paiement).',
  "Les gestionnaires manquent de visibilité en temps réel sur l'occupation réelle.",
]

export const b2cProblems = [
  {
    moment: "Avant l'arrivée",
    items: ['Incertitude sur la disponibilité des places.', 'Stress lié au risque de retard.', 'Réservation manuelle souvent oubliée.'],
  },
  {
    moment: "À l'arrivée",
    items: ['Attente aux barrières.', 'Recherche de la place réservée.', "Difficulté à s'orienter dans les grands parkings."],
  },
  {
    moment: 'Pendant le stationnement',
    items: ['Oubli de prolongation.', 'Gestion manuelle des paiements.', "Risque d'amende en voirie."],
  },
]

export const b2bProblems = [
  'Places vacantes malgré une forte demande.',
  "Taux d'occupation non optimisé.",
  "Files d'attente aux entrées.",
  "Coûts d'exploitation élevés.",
  'Mauvaise expérience client.',
  'Absence de données prédictives.',
]

export const opportunity = [
  'Navigation temps réel',
  'Réservation automatique',
  'Vérification physique de disponibilité',
  "Guidage jusqu'à la place",
  'Paiement automatique',
]

export const benchmarkFeatures = [
  'Réservation',
  'Détection temps réel',
  'Guidage à la place',
  'Paiement auto',
  'Réservation auto (ETA)',
]

// true = oui, false = non, 'partial' = partiel
export const benchmark = [
  { name: 'EasyPark', values: [false, false, false, true, false] },
  { name: 'Indigo Neo', values: [true, 'partial', false, true, false] },
  { name: 'Zenpark', values: [true, false, false, true, false] },
  { name: 'Parclick', values: [true, false, false, true, false] },
  { name: 'OnePark', values: [true, false, false, true, false] },
  { name: 'Q-Park App', values: [true, false, false, true, false] },
  { name: 'Google Maps', values: [false, 'partial', false, false, false] },
  { name: 'Waze', values: [false, false, false, false, false] },
  { name: 'Smart Parking', values: [true, true, true, true, true], highlight: true },
]

export const competitorAnalysis = [
  {
    name: 'EasyPark',
    strengths: ['Leader européen du paiement de stationnement.', 'Très forte adoption.'],
    weaknesses: ['Ne garantit pas une place.', 'Pas de réservation.', 'Pas de guidage.'],
  },
  {
    name: 'Zenpark',
    strengths: ['Réservation de places privées.', 'Bonne couverture urbaine.'],
    weaknesses: ['Réservation manuelle.', 'Pas de détection temps réel.', 'Pas de guidage.'],
  },
  {
    name: 'OnePark',
    strengths: ['Aéroports et gares.', 'Réservation anticipée.'],
    weaknesses: ['Parcours partiellement automatisé.', 'Pas de réservation dynamique.'],
  },
  {
    name: 'Indigo Neo',
    strengths: ['Intégration avec les parkings Indigo.', 'Accès via lecture de plaque.'],
    weaknesses: ['Pas de réservation intelligente selon le trajet réel.', "Pas de guidage jusqu'à la place."],
  },
]

// Position sur la carte (0-100). x = automatisation du parcours, y = garantie de disponibilité réelle.
export const mappingV1 = [
  { name: 'EasyPark', x: 38, y: 18, note: 'Optimise le paiement' },
  { name: 'Zenpark', x: 30, y: 46, note: 'Optimise la réservation' },
  { name: 'OnePark', x: 34, y: 40, note: 'Réservation anticipée gares / aéroports' },
  { name: 'Indigo', x: 52, y: 38, note: "Optimise l'accès (lecture de plaque)" },
  { name: 'Smart Parking', x: 90, y: 90, note: "Automatise l'ensemble du parcours", hero: true },
]

export const mappingV1Reading = [
  'EasyPark optimise le paiement.',
  'Zenpark optimise la réservation.',
  "Indigo optimise l'accès.",
  "Smart Parking automatise l'ensemble du parcours.",
]

export const uspV1 =
  "La première solution qui réserve automatiquement une place réellement disponible avant votre arrivée et vous y conduit sans aucune action manuelle."

export const uspPillars = [
  {
    title: 'Réservation prédictive',
    text: "La réservation n'est pas déclenchée par l'utilisateur, mais automatiquement selon la destination, la position GPS et le temps estimé d'arrivée.",
    icon: 'Radar',
  },
  {
    title: 'Place garantie',
    text: "Disponibilité vérifiée physiquement via des capteurs : pas d'estimation, pas de surbooking, pas de mauvaise surprise.",
    icon: 'ShieldCheck',
  },
  {
    title: 'Parking sans friction',
    text: 'Lecture automatique de plaque, ouverture automatique des barrières et paiement automatique.',
    icon: 'Zap',
  },
  {
    title: "Guidage jusqu'à la place",
    text: "L'utilisateur ne cherche pas sa place : le parking devient un GPS intérieur.",
    icon: 'Navigation',
  },
  {
    title: 'Continuité privé + voirie',
    text: 'Une seule application pour les parkings fermés, les rues, les zones bleues et le stationnement payant.',
    icon: 'Layers',
  },
]

export const zmotPersonas = [
  {
    name: 'Automobiliste urbain',
    type: 'B2C',
    icon: 'Car',
    queries: [
      'parking gare lyon réservation',
      'parking aéroport charles de gaulle',
      'application parking automatique',
      'où se garer paris',
      'parking proche destination',
      'trouver place parking rapidement',
      'parking avec lecture plaque',
    ],
    question: "Comment être certain d'avoir une place sans perdre de temps ?",
  },
  {
    name: 'Voyageur',
    type: 'B2C',
    icon: 'Plane',
    queries: ['parking aéroport pas cher', 'réserver parking orly', 'parking sécurisé gare', 'meilleur parking longue durée'],
    question: 'Comment arriver à mon train ou mon avion sans stress ?',
  },
  {
    name: 'Gestionnaire de parking',
    type: 'B2B',
    icon: 'Building2',
    queries: [
      'augmenter taux occupation parking',
      'logiciel gestion parking',
      'smart parking solution',
      'parking occupancy management',
      'lecture plaque parking',
      'parking revenue optimization',
    ],
    question: "Comment gagner plus d'argent avec les places existantes ?",
  },
  {
    name: 'Ville / collectivité',
    type: 'B2G',
    icon: 'Landmark',
    queries: ['smart city parking', 'réduire trafic urbain', 'stationnement intelligent', 'gestion stationnement ville', 'parking data analytics'],
    question: 'Comment réduire la circulation liée à la recherche de stationnement ?',
  },
]

export const conclusionV1 = {
  separated: ['la navigation', 'la réservation', "l'accès", 'le paiement', 'la gestion du stationnement'],
  positioning:
    "Le premier système de stationnement autonome qui anticipe votre arrivée, réserve votre place, ouvre l'accès, vous guide jusqu'à votre emplacement et gère automatiquement votre stationnement.",
  note: "Smart Parking n'est pas un simple concurrent d'EasyPark ou Zenpark, mais une plateforme d'automatisation complète du stationnement — l'équivalent du « Tesla Autopilot » appliqué au parking.",
}

export const personaThomas = {
  name: 'Thomas, 38 ans',
  role: 'Cadre urbain',
  traits: [
    'Utilise sa voiture plusieurs fois par semaine.',
    'Se rend dans des centres-villes, gares, aéroports et centres commerciaux.',
    'Utilise déjà Google Maps ou Waze.',
    'Recherche avant tout un gain de temps et une expérience sans stress.',
  ],
}

// emotionScore : traduction numérique de l'émotion déclarée dans le canvas (0-100)
export const journeyV1 = [
  { step: 'Préparation du trajet', goal: 'Se rendre à destination', action: 'Saisit sa destination dans Waze ou Smart Parking', emotion: 'Neutre', score: 50, pain: 'Incertitude sur le stationnement', solution: 'Aucun effort supplémentaire' },
  { step: 'Pendant le trajet', goal: 'Conduire sereinement', action: 'Suit la navigation', emotion: 'Confiance', score: 68, pain: 'Peur de ne pas trouver de place', solution: 'Réservation automatique déclenchée 10 min avant l’arrivée' },
  { step: 'Approche', goal: "Être certain d'avoir une place", action: 'Continue sa route', emotion: 'Soulagement', score: 76, pain: 'Recherche stressante de parking', solution: 'Place garantie et attribuée' },
  { step: 'Arrivée au parking', goal: 'Entrer rapidement', action: 'Aucune action requise', emotion: 'Satisfaction', score: 84, pain: "Ticket, QR Code, badge, file d'attente", solution: 'Lecture automatique de plaque et ouverture automatique' },
  { step: 'Recherche de place', goal: 'Trouver sa place', action: "Suit l'indication de l'application", emotion: 'Confiance', score: 82, pain: 'Temps perdu à tourner dans le parking', solution: 'Guidage direct vers la place attribuée' },
  { step: 'Stationnement', goal: 'Se garer facilement', action: 'Se gare', emotion: 'Sérénité', score: 90, pain: 'Doute sur la validité du stationnement', solution: 'Place réservée et validée' },
  { step: 'Fin de visite', goal: 'Quitter le site', action: 'Reprend son véhicule', emotion: 'Positif', score: 88, pain: 'Paiement manuel ou file à la caisse', solution: 'Paiement automatique' },
  { step: 'Sortie', goal: 'Quitter rapidement', action: 'Conduit vers la sortie', emotion: 'Satisfaction', score: 92, pain: 'Embouteillages aux bornes', solution: 'Barrière ouverte automatiquement' },
  { step: 'Après usage', goal: 'Garder une trace', action: "Consulte l'application", emotion: 'Confiance', score: 94, pain: 'Justificatifs dispersés', solution: 'Historique complet et factures' },
]

export const idealScenario = [
  { when: 'Avant le départ', text: 'Thomas doit prendre son train à 14h. Il ouvre simplement Waze et indique « Gare de Lyon ». Smart Parking détecte sa destination, le temps de trajet et les parkings partenaires à proximité. Aucune réservation demandée.' },
  { when: "10 min avant l'arrivée", text: "L'algorithme calcule l'heure d'arrivée estimée, le taux d'occupation et la disponibilité réelle. Une place est bloquée automatiquement.", highlight: '✅ Votre place B-124 a été réservée.' },
  { when: "À l'entrée", text: 'La caméra reconnaît la plaque. La barrière s’ouvre automatiquement.', highlight: 'Temps perdu : 0 seconde' },
  { when: 'Dans le parking', text: '« Tournez à droite dans 30 m. » puis « Votre place est devant vous. »', highlight: 'Temps de recherche : < 30 secondes' },
  { when: 'Pendant le stationnement', text: "Le stationnement est démarré automatiquement. Aucune action de l'utilisateur." },
  { when: 'Au départ', text: 'Le montant est calculé automatiquement, payé avec la carte enregistrée. Facture disponible instantanément.' },
]

export const personaSophie = {
  name: 'Sophie',
  role: "Directrice d'exploitation d'un parking de 1 500 places",
  goals: ["Augmenter le taux d'occupation", "Réduire les files d'attente", "Améliorer l'expérience client", 'Générer davantage de revenus'],
}

export const journeyB2B = [
  { step: 'Découverte', goal: 'Trouver une solution innovante', action: 'Recherche solution parking intelligent', pain: "Trop d'offres similaires", value: "Positionnement unique sur l'automatisation complète" },
  { step: 'Analyse', goal: 'Comprendre le ROI', action: 'Démonstration', pain: 'Difficulté à mesurer les gains', value: 'Dashboard ROI et simulation financière' },
  { step: 'Déploiement', goal: 'Installer la solution', action: 'Installation capteurs et LPR', pain: 'Complexité technique', value: 'Déploiement clé en main' },
  { step: 'Exploitation', goal: 'Gérer le parking', action: 'Consultation tableau de bord', pain: 'Manque de visibilité', value: 'Occupation temps réel' },
  { step: 'Optimisation', goal: 'Améliorer les revenus', action: 'Analyse statistique', pain: 'Tarification statique', value: 'Tarification dynamique' },
  { step: 'Croissance', goal: "Développer l'activité", action: 'Création services premium', pain: 'Revenus limités', value: 'Réservation prioritaire et zones VIP' },
]

export const momentsOfTruth = [
  { quote: "Je n'ai pas besoin de réserver.", text: "L'utilisateur découvre que le système anticipe son besoin.", effects: ['surprise', 'simplicité', 'adoption'] },
  { quote: 'La place est réellement libre.', text: "Le capteur valide physiquement l'occupation.", effects: ['confiance', 'crédibilité'] },
  { quote: "Je n'ai même pas eu besoin d'ouvrir l'application.", text: 'Plaque reconnue. Barrière ouverte.', effects: ['expérience premium'] },
  { quote: "Je n'ai pas cherché ma place.", text: 'Guidage direct.', effects: ['gain de temps visible'] },
  { quote: "Je n'ai pas pensé au paiement.", text: 'Paiement automatisé.', effects: ['disparition totale de la friction'] },
]

export const journeyKpis = {
  user: [
    ["Temps de recherche d'une place", '< 1 minute'],
    ["Temps d'attente en entrée", '0 seconde'],
    ['Nombre d’actions nécessaires', '0 à 2'],
    ['Taux de satisfaction', '> 90 %'],
    ['Taux de réutilisation', '> 70 %'],
  ],
  operator: [
    ["Taux d'occupation", '+15 à +30 %'],
    ["Temps moyen d'accès", '-80 %'],
    ['Réclamations clients', '-50 %'],
    ['Revenus par place', '+10 à +25 %'],
    ['Réservations automatiques', 'KPI principal'],
  ],
}

export const classicPath = ['Destination', 'Recherche parking', 'Recherche place', 'Ticket', 'Paiement', 'Sortie']
export const smartPath = ['Destination', 'Réservation automatique', 'Accès automatique', 'Guidage', 'Paiement automatique', 'Sortie automatique']
export const finalPromiseV1 =
  "L'utilisateur ne gère plus son stationnement. Smart Parking le fait pour lui de manière invisible, prédictive et entièrement automatisée."

/* ───────────────────────── PHASE 2 ───────────────────────── */
export const pivot = {
  learned: [
    'Le paiement automatique existe déjà chez certains acteurs.',
    'La lecture de plaque existe déjà chez certains exploitants.',
    'La réservation existe déjà chez plusieurs concurrents.',
  ],
  missing: [
    "L'anticipation du besoin de stationnement",
    'La prédiction de disponibilité future',
    "L'attribution intelligente des places",
    "L'optimisation globale du parking en temps réel",
  ],
  v1: 'Réserver automatiquement une place de parking.',
  v1Label: 'Automatic Reservation Platform',
  v2: "Prédire, optimiser et automatiser le stationnement grâce à l'IA.",
  v2Label: 'Predictive Parking AI Platform',
  usp: "La première IA de stationnement capable d'anticiper les besoins des automobilistes et d'attribuer automatiquement les places avant même leur arrivée.",
}

export const engine = {
  inputs: ['GPS', 'Waze', 'Google Maps', "Données d'occupation", 'Historique', 'Événements', 'Météo'],
  predicts: ['Arrivées', 'Départs', 'Congestion', 'Disponibilité à +10 min', 'Allocation'],
  capabilities: [
    'Prévoir les arrivées',
    'Prévoir les départs',
    'Estimer les places libres dans 10 min',
    "Optimiser l'occupation globale du parking",
    'Attribuer automatiquement la meilleure place',
    'Réduire les congestions',
  ],
  outputs: ['Allocation de place', 'Réservation automatique', 'Optimisation globale'],
}

export const journeyV2 = [
  { step: 'Déplacement', text: "L'utilisateur saisit sa destination ou utilise Waze / Google Maps.", icon: 'MapPin' },
  { step: 'Analyse prédictive', text: "L'IA analyse destination, ETA, historique des trajets, occupation actuelle et prévisions d'occupation.", icon: 'Brain' },
  { step: 'Pré-réservation intelligente', text: '10 min avant l’arrivée : une place est identifiée, sa disponibilité future prédite, puis pré-attribuée. « Votre place sera disponible à votre arrivée. »', icon: 'Radar' },
  { step: 'Arrivée', text: 'Lecture automatique de la plaque. Barrière ouverte automatiquement.', icon: 'ScanLine' },
  { step: 'Allocation dynamique', text: "Si une meilleure place se libère, l'algorithme réattribue automatiquement la place et redirige l'utilisateur.", icon: 'Shuffle' },
  { step: 'Guidage', text: "L'application guide l'utilisateur jusqu'à sa place.", icon: 'Navigation' },
  { step: 'Stationnement', text: 'Le stationnement démarre automatiquement.', icon: 'ParkingCircle' },
  { step: 'Paiement', text: 'Paiement automatique. Facture générée.', icon: 'CreditCard' },
  { step: 'Apprentissage', text: "L'IA apprend habitudes horaires, destinations récurrentes et durées moyennes. Chaque utilisation améliore les prédictions.", icon: 'RefreshCw' },
]

// x = intelligence prédictive, y = automatisation du parcours
export const mappingV2 = [
  { name: 'Zenpark', x: 12, y: 15, note: 'Réservation manuelle · faible intelligence' },
  { name: 'EasyPark', x: 15, y: 25, note: 'Gestion du paiement · faible prédiction' },
  { name: 'Indigo Neo', x: 20, y: 45, note: 'Accès automatisé · faible anticipation' },
  { name: 'Smart Parking AI', x: 88, y: 90, note: 'Anticipe · attribue · optimise · automatise', hero: true },
]

export const mvps = [
  {
    name: 'MVP 1',
    theme: 'Réservation prédictive',
    features: ['Création du compte', "Plaque d'immatriculation", 'Moyen de paiement', 'Destination', 'Calcul ETA', 'Réservation automatique', 'Dashboard simple'],
    tests: ["L'arrivée des utilisateurs", 'La disponibilité future des places', 'Les périodes de saturation'],
  },
  {
    name: 'MVP 2',
    theme: 'Allocation intelligente',
    features: ["IA d'allocation automatique", 'Attribution optimisée des places', 'Priorisation VIP / PMR', 'Pilotage de plusieurs zones'],
  },
  {
    name: 'MVP 3',
    theme: 'Écosystème autonome',
    features: ['Lecture de plaque', 'Guidage temps réel', 'Tarification dynamique', 'Prévisions de charge du parking'],
  },
  {
    name: 'Déploiement massif',
    theme: 'Scale',
    features: ['Multi-villes', 'Gares & aéroports', 'Smart City'],
  },
]

export const mvpKpis = {
  Utilisateur: ["Temps moyen de recherche d'une place", 'Satisfaction client', "Taux d'acceptation de la réservation automatique"],
  Gestionnaire: ["Taux d'occupation", 'Revenu par place', 'Réduction des bouchons', 'Réduction des places vacantes'],
}
export const aiTargets = [
  { label: 'Précision des prédictions', value: 85 },
  { label: "Taux d'attribution correcte", value: 90 },
  { label: 'Réduction du temps de recherche', value: 70 },
]

export const abTests = [
  { name: 'Message principal', a: 'Réservez automatiquement votre place.', b: 'Votre place vous attend avant même votre arrivée.', hypothesis: "La notion d'anticipation est plus attractive que celle de réservation." },
  { name: 'Proposition de valeur', a: 'Gagnez du temps.', b: 'Ne cherchez plus jamais de place.', hypothesis: 'La suppression du problème est plus forte que la promesse de gain de temps.' },
  { name: 'IA', a: 'Parking intelligent.', b: 'IA prédictive de stationnement.', hypothesis: "L'IA renforce la perception d'innovation et de différenciation." },
]
export const abKpis = ['Taux de clic', 'Téléchargement', 'Demande de démonstration', 'Mémorisation du concept', "Intention d'utilisation"]

export const pitchSlides = [
  { n: 1, title: 'Vision', headline: 'Le stationnement doit devenir invisible.', visual: '📍 → 🤖 → 🅿️' },
  { n: 2, title: 'Le problème', headline: 'Temps perdu · Stress · Congestion · Places mal utilisées', visual: 'Conducteur cherchant une place dans un centre-ville.' },
  { n: 3, title: 'Opportunité', headline: "Jusqu'à 30 % du trafic urbain est lié à la recherche de stationnement.", visual: 'Ville congestionnée vs ville optimisée.' },
  { n: 4, title: 'Solution', headline: 'Smart Parking AI', visual: 'Architecture simplifiée du moteur prédictif.' },
  { n: 5, title: 'Comment ça marche', headline: 'Destination → Prédiction IA → Pré-attribution → Lecture plaque → Guidage → Paiement', visual: 'Flux en 6 étapes.' },
  { n: 6, title: 'Innovation', headline: 'Smart Allocation Engine™', visual: 'Moteur central IA connecté aux capteurs, aux caméras et à l’application.' },
  { n: 7, title: 'Mapping concurrentiel', headline: 'Seul dans le quadrant IA prédictive × Automatisation.', visual: 'Quadrant IA prédictive / Automatisation.' },
  { n: 8, title: 'MVP & Roadmap', headline: 'MVP 1 → MVP 2 → MVP 3 → Déploiement massif', visual: 'Roadmap en 4 jalons.' },
  { n: 9, title: 'Business Model', headline: 'B2C · B2B · Smart City', visual: 'Abonnement premium, commission, SaaS, licence, API IA, données de mobilité.' },
  { n: 10, title: 'Vision 2030', headline: 'Un compte. Une plaque. Un paiement. Tous les parkings.', visual: 'Slogan final.' },
]

/* ───────────────────────── PHASE 3 ───────────────────────── */
export const channels = {
  b2c: [
    { name: 'Google Search', icon: 'Search', moment: "J'ai besoin d'une place maintenant.", detail: ['parking gare lyon', 'réserver parking aéroport', 'parking proche destination', 'application parking', 'trouver une place rapidement'], goals: ['Acquisition immédiate', "Téléchargement de l'application"] },
    { name: 'Google Maps', icon: 'Map', moment: 'Je suis déjà en déplacement.', detail: ['Présence sur les fiches parkings partenaires', 'Visibilité au moment du trajet'], goals: ['Capture du besoin en temps réel'] },
    { name: 'App Store / Play (ASO)', icon: 'Smartphone', moment: "Je cherche l'appli qui résout mon problème.", detail: ['parking', 'stationnement', 'smart parking', 'réservation parking', 'parking aéroport', 'parking gare'], goals: ['Téléchargements organiques'] },
    { name: 'TikTok', icon: 'Music2', moment: "Montrer l'effet « magique » du produit.", detail: ['Moi avant : 15 min à chercher une place', 'Moi après : barrière qui s’ouvre seule → place réservée → paiement automatique'], goals: ['Viralisation', 'Notoriété'] },
    { name: 'Instagram', icon: 'Camera', moment: 'Inspiration & preuve sociale.', detail: ['Reels', 'Stories', 'Démonstrations produit'], goals: ['Marque', 'Adoption'] },
    { name: 'YouTube', icon: 'PlayCircle', moment: 'Je veux comprendre avant d’adopter.', detail: ['Démo produit', "Cas d'usage", 'Comparatif EasyPark vs Smart Parking'], goals: ['Éducation', 'Crédibilité'] },
  ],
  b2b: [
    { name: 'LinkedIn', icon: 'Briefcase', moment: 'Canal principal B2B.', detail: ['Directeurs parking', 'Smart Cities', 'Aéroports', 'Centres commerciaux'], goals: ['Lead generation'] },
    { name: 'Emailing ABM', icon: 'Mail', moment: 'Account Based Marketing grands comptes.', detail: ['Indigo', 'APCOA', 'Q-Park', 'Effia', 'Vinci Park'], goals: ['Démonstrations', 'POC'] },
    { name: 'Salons Smart City', icon: 'Landmark', moment: 'Rencontre des décideurs publics.', detail: ['Salon des Maires', 'Smart City Expo'], goals: ['Signature de partenariats'] },
    { name: 'Salons Tech & Mobilité', icon: 'Mic', moment: 'Visibilité écosystème.', detail: ['VivaTech', 'Intertraffic Amsterdam'], goals: ['Signature de partenariats'] },
  ],
}

export const pushPull = {
  pull: { desc: 'Le client recherche une solution.', levers: ['SEO', 'Google Search', 'ASO', 'YouTube', 'Blog'], example: 'Comment ne plus jamais chercher une place de parking ?' },
  push: { desc: 'La marque vient chercher le client.', b2c: ['TikTok Ads', 'Instagram Ads', 'Meta Ads'], b2b: ['LinkedIn Ads', 'Emailing', 'Webinaires'] },
  ratio: [
    { phase: 'Lancement', Pull: 40, Push: 60 },
    { phase: 'Croissance', Pull: 70, Push: 30 },
  ],
}

export const seo = {
  pillars: [
    { name: 'Parking', pages: ['Parking gare', 'Parking aéroport', 'Parking centre-ville'] },
    { name: 'Innovation', pages: ['IA de stationnement', 'Smart Parking', 'Parking intelligent'] },
    { name: 'Comparatifs', pages: ['Smart Parking vs EasyPark', 'Smart Parking vs Zenpark', 'Smart Parking vs Indigo'] },
  ],
  funnel: [
    { level: 'TOFU', label: 'Top of Funnel', type: 'Articles', items: ['Pourquoi est-il si difficile de trouver une place ?', 'Le coût caché de la recherche de stationnement'] },
    { level: 'MOFU', label: 'Middle of Funnel', type: 'Articles', items: ['Comment réserver une place automatiquement ?', 'Les avantages du parking intelligent'] },
    { level: 'BOFU', label: 'Bottom of Funnel', type: 'Pages', items: ['Télécharger Smart Parking', 'Demander une démo'] },
  ],
  googleAds: {
    keywords: ['réserver parking', 'application parking', 'parking gare'],
    title: 'Votre place vous attend déjà',
    description: "L'IA Smart Parking réserve automatiquement votre place avant votre arrivée.",
  },
  linkedinAds: {
    audience: ['Smart City Manager', 'Directeur exploitation', 'Facility Manager', 'Directeur innovation'],
    message: 'Et si votre parking savait prédire les arrivées avant vos clients ?',
  },
}

export const campaigns = [
  { id: 'stop', name: 'STOP CHERCHE', concept: 'Montrer le problème actuel.', visual: 'Conducteur stressé · chronomètre 15 min → Smart Parking · chronomètre 30 sec', before: '15 min pour trouver une place.', after: 'Votre place vous attend.', format: 'Story / Reel' },
  { id: 'pilot', name: 'PARKING PILOT', concept: "L'IA devient copilote.", visual: 'Voiture moderne · assistant IA holographique', after: 'Je me suis occupé de votre place.', format: 'Display / Vidéo' },
  { id: 'invisible', name: "L'INVISIBLE", concept: 'Le meilleur parking est celui auquel on ne pense plus.', story: ['📍 Destination', '🤖 IA', '🅿️ Place', '💳 Paiement', '✅ Terminé'], format: 'Social / TikTok' },
  { id: 'os', name: 'THE OPERATING SYSTEM FOR PARKING', concept: 'Campagne B2B — tableau de bord.', kpis: [['+22 %', 'occupation'], ['-63 %', "temps d'attente"], ['+18 %', 'revenus']], hook: "L'IA qui optimise chaque place de votre parking.", format: 'LinkedIn Ads' },
]

export const gantt = [
  { phase: 'Préparation', start: 1, end: 2, color: '#5B7FFF', actions: ['Landing page', 'Branding', 'Réseaux sociaux', 'SEO technique', 'MVP finalisé'] },
  { phase: 'Acquisition B2C', start: 3, end: 4, color: '#00D1FF', actions: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Création du blog', 'Vidéos démonstration'] },
  { phase: 'Acquisition B2B', start: 5, end: 6, color: '#7C5CFF', actions: ['LinkedIn Ads', 'Emailing', 'Prospection grands comptes', 'Premier POC parking'] },
  { phase: 'Optimisation', start: 7, end: 8, color: '#F5B946', actions: ['A/B testing', 'Optimisation SEO', 'Analyse des parcours', 'Amélioration du moteur IA'] },
  { phase: 'Scale', start: 9, end: 12, color: '#00FFA3', actions: ['Déploiement multi-villes', 'Partenariats gares', 'Partenariats aéroports', 'Smart City', 'Levée de fonds'] },
]

export const commSynthesis =
  "Vous ne cherchez plus une place. L'IA la trouve et l'organise pour vous avant même votre arrivée."

/* ───────────────────────── PHASE 4 ───────────────────────── */
export const budget = [
  { name: 'Développement MVP + IA', value: 60000, group: 'Produit' },
  { name: 'Hébergement Cloud (Azure/AWS)', value: 12000, group: 'Produit' },
  { name: 'Google Ads', value: 12000, group: 'Acquisition' },
  { name: 'Meta / TikTok Ads', value: 18000, group: 'Acquisition' },
  { name: 'SEO & rédaction', value: 12000, group: 'Acquisition' },
  { name: 'Création de contenus', value: 8000, group: 'Marque' },
  { name: 'LinkedIn Ads B2B', value: 10000, group: 'B2B' },
  { name: 'Salons & événements', value: 15000, group: 'B2B' },
]
export const budgetTotal = 147000

export const monetization = {
  b2cFree: ['Réservation automatique', 'Guidage', 'Gestion du stationnement'],
  b2cPremium: { price: 1.99, features: ['Réservation prioritaire', 'Places premium', 'Historique détaillé', 'Multi-véhicules'] },
  saas: [
    { size: '< 200 places', price: 299 },
    { size: '200 – 1 000 places', price: 499 },
    { size: '> 1 000 places', price: 999 },
  ],
  api: ['Abonnement annuel', 'Licence logicielle', 'Intégration spécifique'],
  commission: { booking: 10, rate: 10, revenue: 1 },
  smartCity: ['Collectivités', 'Données de mobilité', 'Optimisation urbaine'],
}

export const clv = {
  b2c: { monthly: 1.99, months: 24, value: 47.76 },
  b2b: { monthly: 500, months: 36, value: 18000 },
}

export const roi = {
  b2cUsers: 5000,
  b2cArpu: 24,
  b2cRevenue: 120000,
  b2bParkings: 15,
  b2bArpu: 6000,
  b2bRevenue: 90000,
  revenue: 210000,
  costs: 147000,
  profit: 63000,
  roi: 42.9,
  adSpend: 52000,
  roas: 4.04,
}

export const breakEven = {
  cost: 147000,
  b2bRevenue: 6000,
  parkingsNeeded: 24.5,
  parkingsRounded: 25,
  mixed: { parkings: 10, premiumUsers: 4000 },
}

export const forecast = [
  { m: 'M1', revenue: 10000, cost: 12000 },
  { m: 'M2', revenue: 20000, cost: 12000 },
  { m: 'M3', revenue: 30000, cost: 12000 },
  { m: 'M4', revenue: 40000, cost: 12000 },
  { m: 'M5', revenue: 50000, cost: 12000 },
  { m: 'M6', revenue: 60000, cost: 12000 },
  { m: 'M7', revenue: 70000, cost: 12000 },
  { m: 'M8', revenue: 80000, cost: 12000 },
  { m: 'M9', revenue: 90000, cost: 12000 },
  { m: 'M10', revenue: 100000, cost: 12000 },
  { m: 'M11', revenue: 110000, cost: 12000 },
  { m: 'M12', revenue: 120000, cost: 12000 },
]
export const forecastStages = [
  { label: 'Validation MVP', from: 'M1', to: 'M3', color: '#5B7FFF' },
  { label: 'Premiers parkings', from: 'M4', to: 'M6', color: '#00D1FF' },
  { label: 'Scale régional', from: 'M7', to: 'M9', color: '#7C5CFF' },
  { label: 'Expansion nationale', from: 'M10', to: 'M12', color: '#00FFA3' },
]

/* ───────────────────────── VISION ───────────────────────── */
export const vision = {
  slogan: ['Un compte.', 'Une plaque.', 'Un paiement.', 'Tous les parkings.'],
  sub: "Smart Parking AI devient le système d'exploitation du stationnement grâce à l'intelligence artificielle prédictive.",
  conclusion:
    "Smart Parking ne cherche plus simplement à trouver des places de parking. Il cherche à devenir le système d'exploitation du stationnement.",
  businessModel: {
    B2C: ['Abonnement premium', 'Commission réservation', 'Services mobilité'],
    B2B: ['SaaS', 'Licence logicielle', 'API IA de prédiction'],
    'Smart City': ['Collectivités', 'Données de mobilité', 'Optimisation urbaine'],
  },
}
