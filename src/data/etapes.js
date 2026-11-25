// Contenu essentiel des 10 étapes, pour un lecteur qui découvre le sujet.
// Repères : V = vérifié, H = hypothèse, E = estimation, R = recommandation, O = objectif.

export const etapesNav = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'minute', label: 'Le projet en 1 minute' },
  { group: 'Les 10 étapes' },
  { id: 'etape-1', label: '1. Diagnostic d’EasyPark' },
  { id: 'etape-2', label: '2. Marché et concurrents' },
  { id: 'etape-3', label: '3. Pivot et proposition de valeur' },
  { id: 'etape-4', label: '4. Personas, ZMOT, parcours' },
  { id: 'etape-5', label: '5. Solution, maquettes, POC' },
  { id: 'etape-6', label: '6. Business Model Canvas' },
  { id: 'etape-7', label: '7. Marketing digital' },
  { id: 'etape-8', label: '8. Business plan 15 mois' },
  { id: 'etape-9', label: '9. Gestion de projet' },
  { id: 'etape-10', label: '10. KPI et pilotage' },
  { group: 'Annexes' },
  { id: 'methode', label: 'Méthode et consignes' },
  { id: 'detail', label: 'Détail des étapes 1 et 2' },
  { id: 'sources', label: 'Sources' },
]

// ----- Étape 1 : diagnostic (essentiel) -----
export const e1Cartes = [
  { title: 'Qui est EasyPark', proof: 'V', lines: ['Marque du groupe suédois Arrive (90+ pays).', 'N° 2 du paiement de stationnement par mobile en France, derrière PayByPhone.', 'Plus de 350 villes françaises ; CA France 2023 ≥ 50 M€.'] },
  { title: 'Comment il gagne de l’argent', proof: 'V', lines: ['Frais de 15 % par stationnement (0,25 € à 3 €), payés par le conducteur.', 'Abonnement EasyPark Go : 2,99 €/mois.', 'Offres entreprises : 4,99 à 8,99 € par utilisateur et par mois.'] },
  { title: 'Ce que fait l’app', proof: 'V', lines: ['Payer, prolonger, arrêter à distance en voirie.', 'Entrer et sortir de certains parkings sans ticket (lecture de plaque).', 'Chercher où se garer près d’une destination ; app dans la voiture.'] },
  { title: 'Ce qui manque', proof: 'V', lines: ['Aucune réservation de place dans un parking.', 'Aucune place précise ni guidage dans le parking.', 'Aucune location de places privées. (Non trouvé : à confirmer par un test.)'] },
  { title: 'Ce qu’en pensent les utilisateurs', proof: 'V', lines: ['4,8/5 sur l’App Store (92 000 notes), 4,6/5 sur Google Play.', 'Critique principale : les frais, surtout depuis la fin de l’app Flowbird.'] },
  { title: 'Impact écologique', proof: 'V', lines: ['Groupe Arrive : 39 448 t CO2e en 2025.', '72 % viennent des achats (matériel, services informatiques).', 'App hébergée en Europe (AWS).'] },
]

export const e1Swot = {
  forces: ['Millions de conducteurs inscrits avec plaque et paiement', 'Lecture de plaque déjà reliée à des parkings', 'App très bien notée'],
  faiblesses: ['Revenu basé sur un frais contesté par les villes', 'Pas de réservation ni de location de places'],
  opportunites: ['Parkings qui passent au « sans ticket »', 'Voirie plus chère et plus contrainte', 'Places privées vides en grand nombre'],
  menaces: ['Indigo Neo, Onepark, Yespark déjà installés', 'RGPD sur les plaques', 'Critiques sur les frais'],
}

// ----- Étape 2 : marché et concurrents (essentiel) -----
export const e2Concurrents = [
  { name: 'Indigo Neo', fait: 'Voirie + réservation + entrée par la plaque', manque: 'Surtout les parkings Indigo', axe: 'Parking' },
  { name: 'Onepark', fait: 'Réservation dans 4 000 parkings', manque: 'Réservation manuelle, accès variable', axe: 'Parking' },
  { name: 'Bip&Go', fait: 'Réservation dans l’app de télépéage', manque: '7 étapes, tout est manuel', axe: 'Parking' },
  { name: 'Yespark / Zenpark', fait: 'Location de 100 000 places, surtout au mois', manque: 'Peu adapté au besoin immédiat', axe: 'Sharing' },
  { name: 'Parkto', fait: 'Location entre particuliers, 0 % de commission propriétaire', manque: 'Clés remises en main propre', axe: 'Sharing' },
]

export const e2Differences = [
  'La réservation qui se déclenche toute seule, 15 min avant l’arrivée : non trouvée chez les concurrents.',
  'Une place numérotée réservée avec guidage, dans une app grand public : non trouvée.',
  'Des places privées à l’heure dans la même app que la voirie et les parkings : non trouvé.',
]

// ----- Étape 3 : pivot et proposition de valeur -----
export const e3AvantApres = {
  avant: ['EasyPark fait payer le stationnement en voirie.', 'Il gagne un frais sur chaque session, payé par le conducteur.', 'Les villes peuvent supprimer ce frais ou ajouter un concurrent.'],
  apres: ['EasyPark réserve aussi la place, avant l’arrivée.', 'Il gagne aussi des abonnements payés par les parkings et des commissions.', 'Ses revenus dépendent moins des décisions des villes.'],
}

export const usp = [
  { v: 'V1 (aujourd’hui)', offre: 'EasyPark', text: 'Payez votre stationnement à la minute, partout, depuis votre téléphone.' },
  { v: 'V2', offre: 'Smart Parking', text: 'Votre place est réservée avant même que vous arriviez.' },
  { v: 'V2', offre: 'Premium', text: 'Votre place numérotée vous attend ; l’app vous y guide.' },
  { v: 'V2', offre: 'Smart Sharing', text: 'Louez une place privée à l’heure, en 3 clics, dans l’app que vous avez déjà.' },
]

export const vpc = [
  {
    segment: 'Conducteur',
    besoins: 'Se garer vite près de sa destination',
    douleurs: 'Tourner pour chercher ; parking complet ; ticket perdu',
    gains: 'Arriver serein, à l’heure',
    reponse: 'Réservation automatique, entrée par la plaque, paiement automatique',
  },
  {
    segment: 'Parking partenaire (centre commercial, hôtel, parking privé)',
    besoins: 'Remplir ses places, fluidifier l’entrée',
    douleurs: 'Places vides en semaine ; bouchons aux barrières',
    gains: 'Plus de clients, meilleure image',
    reponse: 'Visibilité auprès des utilisateurs EasyPark, clients qui arrivent déjà réservés',
  },
  {
    segment: 'Propriétaire d’une place',
    besoins: 'Rentabiliser une place vide',
    douleurs: 'Trouver un locataire, encaisser, gérer les litiges',
    gains: 'Revenu régulier sans effort',
    reponse: 'Annonce en 3 minutes, paiement garanti, versement automatique',
  },
]

// ----- Étape 4 : personas, ZMOT, parcours -----
export const personas = [
  { name: 'Sarah, 34 ans', offre: 'Smart Parking', situation: 'Va au centre commercial le samedi', citation: '« Je tourne 15 minutes avant de trouver une place. »' },
  { name: 'Marc, 45 ans', offre: 'Smart Parking', situation: 'Consultant, dort à l’hôtel en déplacement', citation: '« Je ne sais jamais s’il reste de la place au parking de l’hôtel. »' },
  { name: 'Karim, 29 ans', offre: 'Smart Parking', situation: 'Commercial, 4 rendez-vous par jour en ville', citation: '« Je veux arriver et me garer, c’est tout. »' },
  { name: 'Julie, 41 ans', offre: 'Premium', situation: 'Rendez-vous serrés, toujours pressée', citation: '« Je paie volontiers 1 € pour aller droit à ma place. »' },
  { name: 'Paul, 62 ans', offre: 'Sharing · propriétaire', situation: 'Sa place reste vide toute la journée', citation: '« Ma place dort 10 heures par jour. »' },
  { name: 'Léa, 26 ans', offre: 'Sharing · locataire', situation: 'Va à un concert en centre-ville', citation: '« Je veux une place sûre près de la salle, pas chère. »' },
]

export const zmot = [
  { moment: 'Déclencheur', v1: 'Sarah prévoit d’aller au centre commercial samedi.', v2: 'Même besoin.' },
  { moment: 'ZMOT (recherche en ligne)', v1: 'Elle cherche « parking centre commercial » sur Google, compare plusieurs sites, ne réserve pas.', v2: 'EasyPark lui propose : « Vous allez au centre X ? Votre place sera réservée à l’approche. »' },
  { moment: 'Premier moment de vérité', v1: 'Parking complet à l’arrivée : elle tourne 15 minutes.', v2: 'La barrière s’ouvre seule : la caméra lit sa plaque.' },
  { moment: 'Second moment de vérité', v1: 'Ticket, caisse, file d’attente à la sortie.', v2: 'Sortie automatique, facture dans l’app.' },
]

// Score d'émotion de -2 (très négatif) à +2 (très positif) : illustratif (H)
export const parcours = [
  { etape: 'Déclencheur', v1: 'Doit aller au centre samedi', v2: 'Saisit sa destination dans EasyPark', e1: 0, e2: 1 },
  { etape: 'Recherche', v1: 'Cherche un parking sur Google', v2: 'L’app trouve les parkings partenaires', e1: -1, e2: 1 },
  { etape: 'Comparaison', v1: 'Compare prix et accès sur 3 sites', v2: 'L’app choisit le plus proche avec places libres', e1: -1, e2: 1 },
  { etape: 'Décision', v1: 'Ne réserve pas, « on verra »', v2: 'Accepte la réservation automatique', e1: -1, e2: 1 },
  { etape: 'Réservation', v1: 'Aucune', v2: 'Réservée 15 min avant l’arrivée', e1: -1, e2: 2 },
  { etape: 'Accès', v1: 'Parking complet, tourne 15 min', v2: 'Barrière ouverte par la plaque', e1: -2, e2: 2 },
  { etape: 'Paiement', v1: 'Ticket, caisse, file d’attente', v2: 'Paiement automatique', e1: -1, e2: 2 },
  { etape: 'Après', v1: 'Agacée, pense au retard', v2: 'Facture claire dans l’app', e1: -1, e2: 1 },
  { etape: 'Fidélisation', v1: 'Aucune raison de revenir', v2: 'Réutilise à chaque sortie', e1: 0, e2: 2 },
]

// ----- Étape 5 : solution, maquettes, POC -----
export const mvp = [
  { offre: 'Smart Parking · standard', items: ['Saisie de la destination', 'Choix automatique du parking partenaire', 'Réservation 15 min avant l’arrivée estimée', 'Entrée et sortie par la plaque', 'Paiement et facture dans l’app'] },
  { offre: 'Smart Parking · premium', items: ['10 places équipées de capteurs par parking pilote', 'Choix d’une place numérotée', 'Guidage jusqu’à la place', 'Supplément de 1 €'] },
  { offre: 'Smart Sharing', items: ['Publier une place (photos, horaires, prix)', 'Chercher une place près de sa destination', 'Réserver à l’heure, au jour, à la semaine, au mois', 'Payer dans l’app ; propriétaire payé automatiquement'] },
]

export const erreurs = [
  { cas: 'Le conducteur est en retard', reponse: 'Place gardée 20 min de plus, puis libérée (H)' },
  { cas: 'Il change de destination', reponse: 'Réservation annulée sans frais, nouvelle recherche' },
  { cas: 'Le parking est complet', reponse: 'Le parking suivant le plus proche est proposé' },
  { cas: 'La plaque n’est pas lue', reponse: 'Ouverture par un code dans l’app, interphone en secours' },
  { cas: 'La place premium est occupée', reponse: 'Autre place équipée proposée, 1 € remboursé si aucune' },
]

export const poc = {
  perimetre: [
    '3 parkings partenaires déjà compatibles (lecture de plaque) : 1 centre commercial, 1 hôtel, 1 parking privé.',
    '10 places premium équipées dans 1 parking.',
    'Smart Sharing dans 1 quartier, objectif 50 places publiées.',
    'Durée : 3 mois (mois 4 à 6).',
  ],
  criteres: [
    { kpi: 'Réservations réussies', cible: '≥ 95 %' },
    { kpi: 'Ouvertures automatiques réussies', cible: '≥ 98 %' },
    { kpi: 'Partenaires prêts à payer l’abonnement', cible: '≥ 2 sur 3' },
    { kpi: 'Places premium utilisées chaque jour', cible: '≥ 30 %' },
    { kpi: 'Places Sharing louées au moins une fois par mois', cible: '≥ 30 %' },
    { kpi: 'Satisfaction des utilisateurs du pilote', cible: '≥ 4/5' },
  ],
}

// ----- Étape 6 : Business Model Canvas -----
export const bmc = [
  { bloc: 'Partenaires clés', avant: 'Villes, opérateurs de voirie, Apple, Google', plus: 'Centres commerciaux, hôtels, parkings privés, fournisseur de capteurs, prestataire de paiement' },
  { bloc: 'Activités clés', avant: 'Paiement du stationnement, relations avec les villes', plus: 'Réservation, intégration des parkings, modération des annonces' },
  { bloc: 'Ressources clés', avant: 'App, marque, millions d’utilisateurs, lecture de plaque', plus: 'Moteur de réservation, capteurs premium, espace propriétaire' },
  { bloc: 'Proposition de valeur', avant: 'Payer à la minute, partout', plus: 'La place est réservée avant l’arrivée ; louer une place privée à l’heure' },
  { bloc: 'Relations clients', avant: 'Self-service dans l’app', plus: 'Account managers pour les parkings ; support propriétaires' },
  { bloc: 'Canaux', avant: 'App, site, voirie (affichage)', plus: 'Notifications in-app, vente directe B2B, landing page' },
  { bloc: 'Segments clients', avant: 'Conducteurs, entreprises, villes', plus: 'Parkings partenaires, propriétaires de places, locataires' },
  { bloc: 'Structure de coûts', avant: 'Technologie, équipes, service client', plus: 'Développement, intégrations, capteurs, ventes B2B, marketing' },
  { bloc: 'Sources de revenus', avant: 'Frais de 15 % payés par le conducteur, abonnements', plus: 'Abonnements parkings (290 à 990 €/mois), 1 € premium, 15 % sur les locations' },
]

// ----- Étape 7 : marketing digital -----
export const cibles = [
  { cible: 'Parkings partenaires (B2B)', message: 'Des clients qui arrivent déjà réservés, sans bouchon à la barrière.', canal: 'Vente directe, LinkedIn, salons' },
  { cible: 'Conducteurs (B2C)', message: 'Votre place est réservée avant que vous arriviez.', canal: 'Notifications in-app, e-mail, Google, Waze' },
  { cible: 'Propriétaires', message: 'Votre place vide vous rapporte, sans effort.', canal: 'In-app, Facebook local, syndics' },
  { cible: 'Locataires', message: 'Une place sûre, à l’heure, près de votre destination.', canal: 'In-app, Google, réseaux sociaux' },
]

export const poem = [
  { type: 'Owned', quand: 'Dès le mois 1', exemples: 'App EasyPark (millions d’utilisateurs), notifications, e-mails, landing page, blog' },
  { type: 'Earned', quand: 'Dès le mois 4', exemples: 'Presse (lancement du pilote), avis clients, co-communication avec les centres commerciaux, bouche-à-oreille' },
  { type: 'Paid', quand: 'Mois 7 à 15', exemples: 'Google Ads (« parking + destination »), Meta, Waze Ads, LinkedIn pour le B2B' },
]

export const lpGeo = {
  lp: ['Titre : « Votre place est réservée avant que vous arriviez »', 'Comment ça marche en 3 étapes', 'Liste des parkings partenaires par ville', 'Espace « Devenir partenaire » pour les parkings', 'FAQ courte'],
  geo: ['FAQ en questions-réponses claires, reprises par les IA (ChatGPT, Perplexity)', 'Une page par parking partenaire et par lieu (« parking centre commercial X »)', 'Données structurées (schema.org : FAQ, lieu, prix)', 'Chiffres sourcés et à jour, que les IA peuvent citer'],
}

export const pushPull = [
  { type: 'Push', exemple: 'Notification : « Vous allez au centre X samedi ? Activez la réservation automatique. »' },
  { type: 'Push', exemple: 'E-mail aux centres commerciaux et hôtels prospectés, avec les résultats du pilote.' },
  { type: 'Pull', exemple: 'Page trouvée sur Google : « réserver parking centre commercial X ».' },
  { type: 'Pull', exemple: 'Réponse d’une IA citant EasyPark pour « où se garer à l’hôtel Y ».' },
]

export const budgetMarketing = [
  { poste: 'Landing page et contenus GEO', periode: 'Setup (M2-M3)', montant: 6000 },
  { poste: 'Owned et earned (contenus, événements, relations presse)', periode: 'M4 à M15, 1 500 €/mois', montant: 18000 },
  { poste: 'Paid (Google, Meta, Waze, LinkedIn)', periode: 'M7 à M15, 6 000 €/mois', montant: 54000 },
]

// ----- Étape 9 : gestion de projet -----
export const gantt = [
  { tache: 'Cadrage et faisabilité', debut: 1, fin: 1, phase: 'setup' },
  { tache: 'Négociation partenaires', debut: 1, fin: 3, phase: 'setup' },
  { tache: 'Conception UX/UI', debut: 1, fin: 2, phase: 'setup' },
  { tache: 'Développement', debut: 1, fin: 3, phase: 'setup' },
  { tache: 'Intégration technique', debut: 2, fin: 3, phase: 'setup' },
  { tache: 'Tests', debut: 3, fin: 3, phase: 'setup' },
  { tache: 'POC et pilote', debut: 4, fin: 6, phase: 'run' },
  { tache: 'Go / No-Go', debut: 6, fin: 6, phase: 'gate' },
  { tache: 'Déploiement', debut: 7, fin: 15, phase: 'run' },
  { tache: 'Acquisition payante', debut: 7, fin: 15, phase: 'paid' },
  { tache: 'Évaluation des résultats', debut: 12, fin: 15, phase: 'run' },
]

export const raciRoles = ['Direction', 'Chef de projet', 'Produit / UX', 'Tech', 'Ventes B2B', 'Marketing', 'Juridique / DPO']
export const raci = [
  { activite: 'Cadrage et budget', v: ['A', 'R', 'C', 'C', 'C', 'C', 'C'] },
  { activite: 'Négociation partenaires', v: ['A', 'C', 'I', 'C', 'R', 'I', 'C'] },
  { activite: 'Conception et maquettes', v: ['I', 'A', 'R', 'C', 'C', 'C', 'I'] },
  { activite: 'Développement et intégration', v: ['I', 'A', 'C', 'R', 'I', 'I', 'C'] },
  { activite: 'RGPD et contrats', v: ['I', 'C', 'C', 'C', 'C', 'I', 'R'] },
  { activite: 'Lancement et communication', v: ['I', 'A', 'C', 'I', 'C', 'R', 'I'] },
  { activite: 'Décision Go / No-Go', v: ['R', 'C', 'C', 'C', 'C', 'C', 'C'] },
]

export const risques = [
  { risque: 'Les parkings refusent de partager leurs places libres', niveau: 'Élevé', parade: 'Commencer par les parkings déjà compatibles (Saemes) ; essai gratuit pendant le pilote' },
  { risque: 'Lecture de plaque défaillante', niveau: 'Moyen', parade: 'Code d’ouverture de secours dans l’app ; seuil de 98 % exigé' },
  { risque: 'Réservation automatique mal comprise', niveau: 'Moyen', parade: 'Accord explicite à la saisie de la destination ; annulation gratuite' },
  { risque: 'RGPD (plaque + destination)', niveau: 'Élevé', parade: 'Analyse d’impact avant le pilote ; données effacées après le stationnement' },
  { risque: 'Peu de places partagées', niveau: 'Moyen', parade: 'Démarrer dans un quartier dense ; viser entreprises et hôtels' },
  { risque: 'Concurrence d’Indigo Neo', niveau: 'Moyen', parade: 'Miser sur l’automatisation et les parkings de plusieurs exploitants' },
]

export const goNoGo = [
  { decision: 'Poursuivre', regle: 'Tous les critères du POC atteints' },
  { decision: 'Ajuster', regle: '1 ou 2 critères manqués : corriger et prolonger le pilote de 2 mois' },
  { decision: 'Arrêter', regle: 'Réservations réussies < 90 % ou aucun partenaire prêt à payer' },
]

// ----- Étape 10 : KPI -----
export const kpiParking = [
  { kpi: 'Partenaires signés', formule: 'Nombre de contrats actifs', objectif: '50 à M15', freq: 'Mensuelle', resp: 'Ventes B2B' },
  { kpi: 'Places couvertes', formule: 'Somme des capacités des parkings', objectif: '15 000 à M15', freq: 'Mensuelle', resp: 'Ventes B2B' },
  { kpi: 'Taux de réservations réussies', formule: 'Réservations honorées / réservations', objectif: '≥ 95 %', freq: 'Hebdomadaire', resp: 'Produit' },
  { kpi: 'Ouvertures automatiques réussies', formule: 'Ouvertures par plaque / entrées', objectif: '≥ 98 %', freq: 'Hebdomadaire', resp: 'Tech' },
  { kpi: 'Utilisation des places premium', formule: 'Réservations premium / (places × jours)', objectif: '≥ 1,2 par place et par jour', freq: 'Hebdomadaire', resp: 'Produit' },
  { kpi: 'Revenu moyen par partenaire', formule: 'CA abonnements / partenaires', objectif: '550 €/mois', freq: 'Mensuelle', resp: 'Finance' },
  { kpi: 'Churn partenaires', formule: 'Partenaires perdus / partenaires', objectif: '≤ 2 %/mois', freq: 'Mensuelle', resp: 'Ventes B2B' },
  { kpi: 'Satisfaction conducteurs', formule: 'Note moyenne après stationnement', objectif: '≥ 4,5/5', freq: 'Mensuelle', resp: 'Marketing' },
]

export const kpiSharing = [
  { kpi: 'Places publiées', formule: 'Nombre d’annonces actives', objectif: '1 050 à M15', freq: 'Mensuelle', resp: 'Marketing' },
  { kpi: 'Taux d’activation', formule: 'Places louées au moins 1 fois / places publiées', objectif: '≥ 40 %', freq: 'Mensuelle', resp: 'Produit' },
  { kpi: 'Réservations', formule: 'Nombre de locations', objectif: '≈ 2 500/mois à M15', freq: 'Hebdomadaire', resp: 'Produit' },
  { kpi: 'Volume de transactions', formule: 'Somme payée par les locataires', objectif: '≈ 35 000 €/mois à M15', freq: 'Mensuelle', resp: 'Finance' },
  { kpi: 'Commission moyenne', formule: 'Commissions / transactions', objectif: '15 %', freq: 'Mensuelle', resp: 'Finance' },
  { kpi: 'Taux de conversion', formule: 'Réservations / recherches', objectif: '≥ 10 %', freq: 'Hebdomadaire', resp: 'Produit' },
  { kpi: 'Taux d’annulation', formule: 'Annulations / réservations', objectif: '≤ 8 %', freq: 'Hebdomadaire', resp: 'Support' },
  { kpi: 'Satisfaction et rétention', formule: 'Note moyenne ; locataires qui reviennent', objectif: '≥ 4,5/5 ; ≥ 40 %', freq: 'Mensuelle', resp: 'Marketing' },
]
