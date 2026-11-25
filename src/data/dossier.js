// EasyPark — Smart Parking et Smart Sharing : dossier stratégique.
// Étape 1 : diagnostic d'EasyPark et audit de son application en France.
// Source unique de toutes les données affichées sur le site.
// Repères : V = donnée vérifiée (source et date), H = hypothèse à tester, E = estimation de l'équipe, R = recommandation.

export const asOf = '25 novembre 2026'

export const S = {
  adlc: 'https://www.autoritedelaconcurrence.fr/sites/default/files/integral_texts/2025-01/23-329%20-%20Publique%20-%20d%C3%A9cision%2024DCC247%20clean.pdf',
  arriveUnify: 'https://arrive.com/en/newsroom/news/easypark-group-unifies-under-arrive-to-build-the-world-s-leading-global-mobility-platform',
  arriveAbout: 'https://arrive.com/en/about/about-us',
  review2024: 'https://arrive.com/en/newsroom/news/easypark-group-s-year-in-review-2024',
  parkopedia: 'https://arrive.com/en/newsroom/news/easypark-group-acquires-parkopedia-to-streamline-the-driver-experience',
  csr2025: 'https://a.storyblok.com/f/333594/x/29ae507d3e/arrive-annual-sustainability-statement-2025_final.pdf',
  epHome: 'https://www.easypark.com/fr-fr',
  epCcm: 'https://www.easypark.com/fr-fr/comment-ca-marche',
  epExpress: 'https://www.easypark.com/fr-fr/comment-ca-marche/automatic-camerapark',
  epIntegrees: 'https://www.easypark.com/fr-fr/comment-ca-marche/solutions-de-stationnement-integrees',
  epRecharge: 'https://www.easypark.com/fr-fr/comment-ca-marche/recharge',
  epApp: 'https://www.easypark.com/fr-fr/pourquoi-choisir-easypark/application-de-stationnement',
  epFind: 'https://www.easypark.com/fr-fr/pourquoi-choisir-easypark/find',
  epOu: 'https://www.easypark.com/fr-fr/ou-se-garer',
  epPrix: 'https://www.easypark.com/fr-fr/combien-ca-coute',
  epBusiness: 'https://www.easypark.com/fr-fr/entreprises/produits-et-prix',
  epVilles: 'https://www.easypark.com/fr-fr/villes-et-operateurs',
  epHeritage: 'https://www.easypark.com/en-fr/easypark-leadership-and-heritage',
  epDroits: 'https://www.easypark.com/en-fr/help/other/droits-et-abonnements-rights-et-subscriptions--18423031786652',
  epFlowbird: 'https://www.easypark.com/fr-fr/nouveautes/actualites/easypark-group-finalise-l-acquisition-de-flowbird-group',
  appStore: 'https://apps.apple.com/fr/app/easypark-stationnement-facile/id449594317',
  play: 'https://play.google.com/store/apps/details?id=net.easypark.android&hl=fr&gl=FR',
  cnil: 'https://www.cnil.fr/fr/stationnement-payant-les-recommandations-de-la-cnil',
  dac7: 'https://www.impots.gouv.fr/transfert-dinformations-en-application-des-dispositifs-dpi-dac7-plateformes-deconomie-collaborative',
  dac7lu: 'https://impotsdirects.public.lu/fr/echanges_electroniques/dac7.html',
  sdesParc: 'https://www.statistiques.developpement-durable.gouv.fr/40-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2026',
  sdesGes: 'https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat/fr/10-panorama-francais-des-gaz-a',
  insee: 'https://www.data.gouv.fr/datasets/69b987f0c23eb0dd77b7ef87',
  lyon: 'https://www.lyon.fr/node/913697',
  larochelle: 'https://www.larochelle.fr/fileadmin/mediatheque/1_Actualites/Espace_presse/Communique_de_presse_260402_-_VILLE_DE_LA_ROCHELLE_Stationnement_-_L_application_de_paiement_du_stationnement_en_voirie_Flowbird_devient_Easy_Park.pdf',
  paris: 'https://www.paris.fr/pages/tarifs-suv-modalites-de-controle-ce-qui-change-avec-la-reforme-du-stationnement-2024-27224',
  zfe: 'https://www.banquedesterritoires.fr/loi-de-simplification-les-zfe-remises-en-piste-apres-la-decision-du-conseil-constitutionnel',
  saemes: 'https://saemes.fr/sites/default/files/DEF%20Alerte%20presse%20SAEMES%20EASYPARK.pdf',
  xerfi: 'https://www.xerfi.com/presentationetude/La-gestion-de-parcs-de-stationnement_23SCO11',
  europe1: 'https://www.europe1.fr/societe/paris-nice-dans-quelles-villes-les-amendes-de-stationnement-rapportent-elles-le-plus-868682',
  onepark: 'https://www.maddyness.com/2025/10/28/face-a-yespark-onepark-leve-40-millions-deuros-et-fait-entrer-totalenergies-a-son-capital/',
  yespark: 'https://www.yespark.fr/blog/un-an-yesparkgroup',
  yps: 'https://www.yourparkingspace.co.uk/',
  clubic: 'https://clubic.com/actualite-597406-rachat-de-flowbird-pourquoi-le-stationnement-va-couter-plus-cher-dans-ces-grandes-villes-de-france-en-2026.html',
}

export const nav = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'methode', label: 'Méthode et consignes' },
  { group: 'Étape 1 · Diagnostic' },
  { id: 'synthese', label: "Synthèse de l'étape 1" },
  { id: 'entreprise', label: '1.1 Entreprise et positionnement' },
  { id: 'modele', label: '1.2 Modèle économique' },
  { id: 'partenaires', label: '1.6 Écosystème de partenaires' },
  { id: 'audit', label: '1.3 Fonctionnalités en France' },
  { id: 'ux', label: '1.4 Expérience utilisateur' },
  { id: 'technique', label: '1.5 Diagnostic technique' },
  { id: 'marche', label: '1.7 Marché français' },
  { id: 'pestel', label: '1.8 PESTEL' },
  { id: 'swot', label: '1.9 Diagnostic interne et SWOT' },
  { id: 'ecologie', label: '1.10 Impact écologique' },
  { id: 'ecarts', label: '1.11 Existe, manque, à améliorer' },
  { id: 'manques', label: 'Informations à obtenir' },
  { group: 'Étape 2 · Marché et benchmark' },
  { id: 'e2-synthese', label: "Synthèse de l'étape 2" },
  { id: 'tendances', label: '2.1 Tendances du marché' },
  { id: 'concurrents', label: '2.2 et 2.3 Concurrents' },
  { id: 'bench-parking', label: '2.4 Benchmark Smart Parking' },
  { id: 'bench-sharing', label: '2.5 Benchmark Smart Sharing' },
  { id: 'mappings', label: '2.6 et 2.7 Mappings V1 et V2' },
  { id: 'positionnement', label: '2.8 Positionnement' },
  { id: 'e2-manques', label: 'Informations à obtenir' },
  { group: 'Références' },
  { id: 'sources', label: 'Sources' },
]

export const offres = [
  {
    id: 'n1',
    name: 'Smart Parking',
    level: 'Niveau 1 · standard',
    icon: 'ParkingCircle',
    text: "Réservation automatique dans un parking partenaire, environ 15 min avant l'arrivée estimée, liée à la plaque. Le conducteur choisit librement une place libre.",
    model: 'Abonnement payé par le partenaire (H)',
  },
  {
    id: 'n2',
    name: 'Smart Parking',
    level: 'Niveau 2 · premium',
    icon: 'Navigation',
    text: 'Place précise réservée à l’avance et guidage intérieur. 10 places équipées de capteurs par parking pilote.',
    model: '1 € de plus par réservation, payé par le conducteur (H)',
  },
  {
    id: 'sharing',
    name: 'Smart Sharing',
    level: 'Place de marché',
    icon: 'Share2',
    text: "Location de places inutilisées entre propriétaires et automobilistes, à l'heure, au jour, à la semaine ou au mois.",
    model: 'Commission de 15 % par transaction (H)',
  },
]

export const heroKpis = [
  { value: '350+', label: 'Villes françaises couvertes par EasyPark', src: S.epOu },
  { value: '4,8 / 5', label: "Note de l'app sur l'App Store français, 92 000 notes", src: S.appStore },
  { value: '30–40 %', label: 'Des transactions mobiles en voirie pour EasyPark et Flowbird en 2023', src: S.adlc },
  { value: '10 M+', label: "Téléchargements de l'app sur Google Play", src: S.play },
]

export const synthese = {
  lead: "EasyPark possède déjà la moitié du parcours Smart Parking standard : identification par la plaque, entrée et sortie sans ticket dans les parkings équipés, paiement enregistré. Il lui manque le cœur du service : les places libres des parkings, la sélection automatique et la réservation. Le service premium et Smart Sharing sont à construire, mais le groupe possède des briques proches.",
  quadrants: [
    { q: 'Ce qui existe', a: 'Paiement en voirie dans plus de 350 villes ; express pay par lecture de plaque ; recherche par destination ; app dans la voiture ; offres entreprises.', proof: 'V' },
    { q: 'Ce qui fonctionne', a: "App notée 4,8 sur l'App Store français et 4,6 sur Google Play ; n° 2 du paiement mobile en France.", proof: 'V' },
    { q: 'Ce qui manque', a: 'Réservation, disponibilités des parkings, place précise et guidage, location de places entre particuliers.', proof: 'V', note: 'non trouvé, à confirmer par test' },
    { q: 'Ce qui peut être amélioré', a: 'Clarté des frais et des offres ; accompagnement des utilisateurs Flowbird.', proof: 'R' },
  ],
  constats: [
    { title: 'Le revenu actuel est fragile', text: 'Il repose sur un frais payé par l’usager, passé de 0,15-2 € en 2024 à 0,25-3 € aujourd’hui, que des villes comme Lyon et La Rochelle neutralisent par l’offre Basic.', proof: 'V' },
    { title: "La base d'utilisateurs grandit", text: "Depuis octobre 2025, l'app Flowbird bascule vers EasyPark ville par ville ; PayByPhone en profite parfois pour entrer.", proof: 'V' },
    { title: 'Les forces correspondent à Smart Parking', text: 'Lecture de plaques, compte de paiement et techniciens Flowbird couvrent une grande partie des besoins.', proof: 'E' },
    { title: 'Smart Sharing part de plus loin', text: "Yespark Group loue déjà 100 000 places ; EasyPark n'a en France ni espace propriétaire ni reversement. Your Parking Space, au Royaume-Uni, est la brique à étudier.", proof: 'V' },
    { title: 'Les contraintes clés sont juridiques', text: 'RGPD sur les plaques, déclaration fiscale des revenus des propriétaires, accès aux systèmes des exploitants.', proof: 'V' },
  ],
}

export const proofLegend = [
  { code: 'V', label: 'Vérifié', text: 'Donnée tirée d’une source ouverte, citée et datée.' },
  { code: 'H', label: 'Hypothèse', text: 'Hypothèse de travail, à tester.' },
  { code: 'E', label: 'Estimation', text: "Estimation ou jugement de l'équipe, avec son calcul." },
  { code: 'R', label: 'Recommandation', text: "Action proposée par l'équipe." },
]

export const parties = [
  { n: 1, label: "Diagnostic d'EasyPark et audit de l'app en France", status: 'Livrée' },
  { n: 2, label: 'Étude de marché et benchmark', status: 'Livrée' },
  { n: 3, label: 'Pivot et proposition de valeur', status: 'Livrée' },
  { n: 4, label: 'Personas, ZMOT et Customer Journey', status: 'Livrée' },
  { n: 5, label: 'Conception de la solution et POC', status: 'Livrée' },
  { n: 6, label: 'Business Model Canvas', status: 'Livrée' },
  { n: 7, label: 'Stratégie commerciale et marketing (POEM)', status: 'Livrée' },
  { n: 8, label: 'Business plan 12 mois et projection 3 mois', status: 'Livrée' },
  { n: 9, label: 'Gestion de projet et déploiement', status: 'Livrée' },
  { n: 10, label: 'KPI et pilotage', status: 'Livrée' },
]

export const identite = [
  { label: 'Groupe', value: 'Arrive', text: 'Nom adopté le 12 juin 2025 ; marques EasyPark, Flowbird, ParkMobile, RingGo, Parkopedia, Yellowbrick, Your Parking Space.', src: S.arriveUnify },
  { label: 'Actionnaires', value: 'Fonds européens', text: 'Verdane, Vitruvian et Searchlight Capital, majoritaires.', src: S.epHeritage },
  { label: 'Taille du groupe', value: '90+ pays', text: 'Plus de 20 000 villes et plus de 3 000 salariés.', src: S.csr2025 },
  { label: 'Rachats récents', value: 'Flowbird, Parkopedia', text: 'Flowbird finalisé le 15 janvier 2025 ; Parkopedia en février 2025.', src: S.epFlowbird },
  { label: 'En France', value: 'Neuilly · Besançon', text: 'Siège à Neuilly-sur-Seine, 6 agences, usine Flowbird de Besançon (800+ salariés).', src: S.epHeritage },
  { label: "Chiffre d'affaires 2023", value: '≥ 50 M€', text: 'Pour EasyPark France, et autant pour Flowbird France ; montants exacts confidentiels.', src: S.adlc },
]

export const partsMarche = [
  { name: 'PayByPhone (Corpay)', low: 60, high: 70, value: '70 à 80 % en valeur', tone: 'muted' },
  { name: 'EasyPark', low: 10, high: 20, value: 'non publiée séparément', tone: 'accent' },
  { name: 'Flowbird', low: 10, high: 20, value: 'non publiée séparément', tone: 'indigo' },
  { name: 'EasyPark + Flowbird', low: 30, high: 40, value: '10 à 20 % en valeur', tone: 'mint' },
  { name: 'IndigoNeo, PrestoPark, Macaron', low: 0, high: 5, value: 'moins de 5 %', tone: 'muted' },
]

export const migrationFlowbird = [
  { date: 'Janv. 2025', text: 'EasyPark Group finalise le rachat de Flowbird.', src: S.epFlowbird },
  { date: 'Oct. 2025', text: "Début de la bascule de l'app Flowbird vers EasyPark dans les villes françaises.", src: S.larochelle },
  { date: '1er déc. 2025', text: 'Lyon : EasyPark remplace Flowbird.', src: S.lyon },
  { date: '19 janv. 2026', text: 'Lyon : PayByPhone arrive en parallèle.', src: S.lyon },
  { date: '31 mars 2026', text: 'La Rochelle : bascule effective ; offre Basic sans frais négociée pour les habitants.', src: S.larochelle },
]

export const segments = [
  { who: 'Automobilistes (B2C)', detail: 'Particuliers en voirie et en parking', buys: 'Paiement à la minute, prolongation et arrêt à distance' },
  { who: 'Entreprises (B2B)', detail: 'Indépendants, PME, grands comptes', buys: 'EasyPark Business : facture unique, gestion des utilisateurs' },
  { who: 'Villes et opérateurs', detail: 'Collectivités, délégataires', buys: 'Autorisation de l’app, droits résidents, données (EasyPark Insights)' },
  { who: 'Exploitants de parkings', detail: 'Parkings couverts ou à barrière', buys: 'Entrée et sortie sans ticket par lecture de plaque (express pay)' },
  { who: 'Constructeurs', detail: 'Polestar, Volvo, Renault', buys: "Intégration de l'app au tableau de bord (Android Automotive)" },
]

export const revenus = [
  { source: 'Frais de service « Small » et « Standard »', tarif: '15 % du stationnement, min. 0,25 €, max. 3,00 € par session', src: S.epPrix },
  { source: 'Offre « Basic »', tarif: 'Sans frais, limitée à une seule ville, si la ville l’a obtenue', src: S.epPrix },
  { source: 'Abonnement EasyPark Go', tarif: '2,99 € par mois, sans frais par session', src: S.epPrix },
  { source: 'EasyPark Business Essential', tarif: '4,99 € par utilisateur et par mois + 0,49 € par transaction, HT', src: S.epBusiness },
  { source: 'EasyPark Business Plus / Enterprise', tarif: '6,99 € / 8,99 € par utilisateur et par mois, HT', src: S.epBusiness },
  { source: 'Frais d’inscription Business', tarif: '5,99 € par utilisateur ; SMS de rappel à 0,15 €', src: S.epBusiness },
  { source: 'Services aux villes et horodateurs Flowbird', tarif: 'Contrats publics ; montants non publiés', src: S.adlc },
]

export const revelations = [
  { title: 'Le frais usager a augmenté', text: 'En 2024 : 15 %, minimum 0,15 €, maximum 2 €. Aujourd’hui : 0,25 à 3,00 €.', proof: 'V', src: S.adlc },
  { title: 'Les villes négocient des exceptions', text: 'Lyon et La Rochelle ont obtenu l’offre Basic sans frais pour leurs habitants. À La Rochelle, l’app Flowbird portait 55 % des paiements en voirie en 2025.', proof: 'V', src: S.larochelle },
  { title: 'Le marché B2B reste petit', text: "L'offre aux entreprises pèse environ 3 M€ en France, tous acteurs confondus.", proof: 'V', src: S.adlc },
]

export const fonctionnalites = [
  { name: 'Paiement en voirie', what: 'Zone choisie sur la carte, dans une liste ou par code ; durée réglée avec une roue ; paiement à la minute', fr: 'Oui', proof: 'V', src: S.epCcm },
  { name: 'Arrêt et prolongation à distance', what: "Arrêt anticipé ou prolongation depuis l'écran de session", fr: 'Oui', proof: 'V', src: S.epCcm },
  { name: 'Rappel avant expiration', what: 'Notification avant la fin du stationnement', fr: 'Oui', proof: 'V', src: S.epApp },
  { name: 'Contrôle automatique', what: 'La plaque est transmise au système de la ville dès le début de la session', fr: 'Oui', proof: 'V', src: S.epCcm },
  { name: 'Recherche autour d’une destination', what: 'Trouver où se garer près de sa position ou de sa destination avant de partir', fr: 'Oui', proof: 'V', src: S.appStore },
  { name: 'Parkings sur la carte', what: 'Parkings couverts et en surface, tarifs et règles affichés', fr: 'Oui', proof: 'V', src: S.epApp },
  { name: 'Express pay (CameraPark)', what: 'Entrée et sortie sans ticket : une caméra lit la plaque, la session démarre et s’arrête seule', fr: 'Oui, parkings équipés (dont Saemes Porte de Versailles)', proof: 'V', src: S.epExpress },
  { name: 'Plusieurs véhicules', what: 'Ajout de véhicules, y compris temporaires (location)', fr: 'Oui', proof: 'V', src: S.epExpress },
  { name: 'Droits et abonnements résidents', what: 'Demande et achat de droits résidents, sur le site puis dans l’app', fr: 'Oui, selon les villes', proof: 'V', src: S.epDroits },
  { name: 'Usage pro et perso séparés', what: 'Répartition des frais ; factures mensuelles en compte pro', fr: 'Oui', proof: 'V', src: S.appStore },
  { name: 'Moyens de paiement', what: 'Visa, Mastercard, Apple Pay ; factures mensuelles pour les comptes pro', fr: 'Oui', proof: 'V', src: S.appStore },
  { name: 'Voiture connectée', what: 'CarPlay, Android Auto ; Android Automotive (Polestar, Volvo, Renault) avec arrêt automatique', fr: 'Oui', proof: 'V', src: S.epIntegrees },
  { name: 'FIND', what: 'Colore les rues selon la probabilité de trouver une place', fr: 'Villes françaises non listées', proof: 'H', src: S.epFind },
  { name: 'Recharge électrique', what: 'Bornes affichées sur la carte', fr: 'Paiement réservé à 5 pays nordiques et à la Slovénie', proof: 'V', src: S.epPrix },
]

export const nonTrouve = [
  "Réservation d'une place dans un parking, à l'avance ou automatique.",
  'Choix d’une place précise et guidage dans le parking.',
  'Location de places privées entre particuliers ou par des entreprises.',
  'Sélection automatique d’un parking selon la destination et les places libres.',
]

export const parcoursVoirie = [
  "Télécharger l'app et s'inscrire : téléphone, plaque, moyen de paiement.",
  'Choisir la zone de stationnement sur la carte, dans la liste ou par son code.',
  'Régler la durée avec la roue ; le prix total, frais compris, s’affiche avant validation.',
  'Valider et payer ; la ville est prévenue automatiquement.',
  'Recevoir un rappel avant la fin, prolonger ou arrêter à distance.',
  "Retrouver le reçu dans l'app.",
]

export const parcoursExpress = [
  { title: 'Activer express pay', text: 'Une fois, pour chaque véhicule enregistré.' },
  { title: 'Entrer', text: 'La caméra lit la plaque ; la session démarre et une notification arrive.' },
  { title: 'Sortir', text: 'La session s’arrête seule et le montant est prélevé.' },
]

export const notes = [
  { label: 'App Store France', value: '4,8 / 5', sub: '92 000 notes · n° 7 Voyages', src: S.appStore },
  { label: 'Google Play', value: '4,6 / 5', sub: '≈ 706 000 avis (mondial) · 10 M+ téléchargements', src: S.play },
  { label: 'Dernière version iOS', value: '26.46.0', sub: '17 novembre 2026', src: S.appStore },
  { label: 'Satisfaction annoncée', value: '88 %', sub: 'Déclaratif d’EasyPark, méthode non publiée', src: S.epHome },
]

export const frictions = [
  { title: 'Frais perçus comme cachés', text: 'Un avis français reproche une inscription jugée payante sans que ce soit clair, et des villes Flowbird absentes d’EasyPark.', note: 'Un avis App Store ; opinion individuelle', src: S.appStore },
  { title: 'Choix d’offre complexe', text: "Pour éviter les frais, l'habitant doit choisir « Basic » et sa ville favorite ; un avis de 2024 décrit un blocage pour payer dans une autre ville.", note: 'Villes de La Rochelle et Lyon ; avis Google Play', src: S.larochelle },
  { title: 'Frais sur une période gratuite', text: 'Un utilisateur dit avoir payé 0,26 € pour une demi-heure affichée gratuite (2023), remboursé ensuite.', note: 'Avis Google Play ; cas isolé', src: S.play },
  { title: 'Image dans la presse', text: '« Pourquoi le stationnement va coûter plus cher » après le rachat de Flowbird.', note: 'Clubic, 27 janvier 2026', src: S.clubic },
]

export const briques = [
  { name: 'Plateformes', fact: 'iPhone, iPad, Android ; 21 langues ; 194 Mo sur iOS', src: S.appStore },
  { name: 'Rythme de publication', fact: 'Version 26.46.0 le 17 novembre 2026 ; le numéro suit l’année et la semaine (E)', src: S.appStore },
  { name: 'Hébergement', fact: 'Amazon Web Services, données stockées et traitées en Europe, chiffrées', src: S.epHeritage },
  { name: 'Données collectées', fact: 'Position précise, coordonnées, paiement, historique d’achats, identifiants, usage', src: S.appStore },
  { name: 'Lien avec les villes', fact: 'Plaque transmise au contrôle ; gestion des droits et agrégation des paiements', src: S.epCcm },
  { name: 'Lecture de plaques en parking', fact: 'Les caméras du parking transmettent l’entrée et la sortie à EasyPark', src: S.epExpress },
  { name: 'Voiture connectée', fact: 'CarPlay, Android Auto, Android Automotive ; données et paiement embarqués via Parkopedia', src: S.epIntegrees },
]

export const besoins = [
  { need: 'Lire les places libres d’un parking en temps réel', exists: 'Non trouvé', constraint: 'Interface avec le système d’accès de chaque exploitant ; modèles variés' },
  { need: 'Réserver et retirer une place du compteur', exists: 'Non trouvé', constraint: "L'exploitant doit accepter qu'EasyPark modifie son compteur ; règle en cas de no-show" },
  { need: "Estimer l'heure d'arrivée", exists: 'Recherche par destination : oui ; itinéraire : non vérifié', constraint: 'Calcul de trajet en continu (téléphone, CarPlay, Android Auto)' },
  { need: 'Ouvrir la barrière par la plaque', exists: 'Oui, parkings express pay', constraint: 'Seuls les parkings équipés et reliés à EasyPark' },
  { need: 'Capteurs par place et guidage (premium)', exists: 'Non trouvé', constraint: 'Matériel neuf, plan numérique, positionnement sans GPS en sous-sol' },
  { need: 'Reverser de l’argent aux propriétaires (Sharing)', exists: 'Non trouvé', constraint: 'Prestataire de paiement pour places de marché, vérification d’identité' },
]

export const categoriesParkings = [
  { cat: 'A', name: 'Compatible', text: 'Caméras de lecture de plaques déjà reliées à EasyPark.', example: 'Saemes, parking Porte de Versailles', proof: 'V' },
  { cat: 'B', name: 'Intégration logicielle', text: 'Barrières et système de gestion présents, sans liaison avec EasyPark.', example: 'À recenser chez les exploitants', proof: 'H' },
  { cat: 'C', name: 'Investissement matériel', text: 'Pas de caméra de lecture de plaques, ou pas de barrière pilotée.', example: 'À recenser', proof: 'H' },
]

export const partenaires = [
  { family: 'Villes et opérateurs de voirie', examples: 'Lyon, La Rochelle, plus de 350 villes ; Saemes', role: "Autorisent l'app, fixent les tarifs, négocient les frais", src: S.epOu },
  { family: 'Exploitants de parkings', examples: 'Saemes (65 parkings, 29 200 places en Île-de-France) ; Q-Park en Allemagne', role: 'Express pay ; tous les parkings publics Saemes visés en 2026', src: S.saemes },
  { family: 'Constructeurs et plateformes', examples: 'Apple, Google ; Polestar, Volvo, Renault', role: "App dans le tableau de bord", src: S.epIntegrees },
  { family: 'Recharge électrique', examples: 'Hubject : 600 000 bornes en Europe', role: 'Recherche et paiement de la recharge, hors France pour le paiement', src: S.review2024 },
  { family: 'Prestataires techniques', examples: 'Amazon Web Services ; chambres de compensation', role: 'Hébergement, encaissement', src: S.epHeritage },
  { family: 'Marques sœurs du groupe', examples: 'Flowbird, Parkimeter, Your Parking Space, Parkopedia', role: 'Briques mobilisables pour les deux axes', src: S.arriveAbout },
]

export const marcheIndicateurs = [
  { label: 'Voitures en circulation', value: '40,0 M', text: 'Au 1er janvier 2026, +0,4 % sur un an.', src: S.sdesParc, proof: 'V' },
  { label: 'Collectivités à stationnement payant', value: '≈ 800', text: 'Dont plus de 500 acceptent le paiement mobile.', src: S.adlc, proof: 'V' },
  { label: 'Recettes du stationnement en voirie', value: '≈ 1 Md€', text: '2024 : 570 M€ de paiements et 430 M€ de forfaits post-stationnement (chiffre de presse).', src: S.europe1, proof: 'V' },
  { label: 'Gestion privée de parkings', value: '≈ 1,9 Md€', text: "Chiffre d'affaires 2024 ; plus de 40 % des parkings restent en gestion publique (estimation Xerfi).", src: S.xerfi, proof: 'V' },
  { label: 'Réservation de parkings', value: '3 500', text: "Parkings chez Onepark ; 2,7 M d'utilisateurs ; 30 M€ de CA en 2024.", src: S.onepark, proof: 'V' },
  { label: 'Location de places', value: '100 000', text: 'Places chez Yespark Group (avec Zenpark), 900 villes en France, Italie, Belgique.', src: S.yespark, proof: 'V' },
]

export const segmentsMarche = [
  { name: 'Voirie payante', metric: '1 Md€ de recettes en voirie, 2024', actors: ['PayByPhone', 'EasyPark', 'Flowbird → EasyPark', 'IndigoNeo, PrestoPark'], status: 'EasyPark : n° 2', now: true },
  { name: 'Parkings à barrière', metric: '1,9 Md€ de CA, gestion privée, 2024', actors: ['Saemes', 'Autres exploitants'], status: 'EasyPark : express pay', now: true },
  { name: 'Réservation de parkings', metric: 'Onepark : 3 500 parkings, 30 M€ de CA', actors: ['Onepark', 'Zenpark (Yespark)', 'Parkimeter (groupe)'], status: 'Cible : Smart Parking', now: false },
  { name: 'Location de places privées', metric: 'Yespark Group : 100 000 places', actors: ['Yespark', 'Your Parking Space (groupe, R.-U.)'], status: 'Cible : Smart Sharing', now: false },
]

export const tendances = [
  { title: 'Plus d’apps par ville', text: 'Entre 2020 et 2024, +183 % de communes à deux applications, +270 % à trois.', src: S.adlc },
  { title: 'Frais facturés à l’usager', text: 'La fin de Flowbird généralise le frais de 15 % là où l’app était gratuite pour l’usager.', src: S.clubic },
  { title: 'Sans ticket', text: 'Saemes équipe tous ses parkings publics en lecture de plaques avec EasyPark en 2026.', src: S.saemes },
  { title: 'Consolidation et capitaux', text: 'Yespark a racheté Zenpark en 2025 ; Onepark a levé 40 M€ auprès de TotalEnergies.', src: S.onepark },
]

export const pestel = [
  { dim: 'Politique', fact: 'Depuis 2018, chaque commune fixe ses tarifs et choisit ses applications de paiement.', effect: 'En voirie, EasyPark dépend des villes ; les parkings privés sont des clients qui n’en dépendent pas.', axe: 'Parking', sens: 'Opportunité', src: S.adlc },
  { dim: 'Politique', fact: 'Le Conseil constitutionnel a censuré le 21 mai 2026 la suppression des zones à faibles émissions.', effect: 'Les restrictions d’accès aux centres demeurent ; leur avenir reste débattu.', axe: 'Parking', sens: 'Incertain', src: S.zfe },
  { dim: 'Économique', fact: 'Le stationnement payant en voirie rapporte environ 1 Md€ par an, dont 430 M€ de forfaits post-stationnement en 2024.', effect: 'Le coût d’un oubli pousse vers des solutions sûres et prépayées.', axe: 'Les deux', sens: 'Opportunité', src: S.europe1 },
  { dim: 'Économique', fact: 'Onepark a levé 40 M€ en octobre 2025 ; Yespark a racheté Zenpark.', effect: 'Concurrents bien financés sur les deux segments visés.', axe: 'Les deux', sens: 'Menace', src: S.onepark },
  { dim: 'Social', fact: '68,9 % des actifs vont travailler principalement en voiture en 2023.', effect: 'Le besoin de se garer ne disparaît pas.', axe: 'Les deux', sens: 'Opportunité', src: S.insee },
  { dim: 'Social', fact: 'Villes et presse contestent les nouveaux frais d’app après la fin de Flowbird.', effect: 'Tout nouveau supplément, comme le premium à 1 €, sera scruté.', axe: 'Premium', sens: 'Menace', src: S.clubic },
  { dim: 'Technologique', fact: 'Les parkings passent à l’accès par lecture de plaque ; Saemes vise tous ses parkings publics en 2026.', effect: "La brique de l'arrivée sans ticket existe déjà.", axe: 'Parking', sens: 'Opportunité', src: S.saemes },
  { dim: 'Technologique', fact: "L'app tourne déjà dans CarPlay, Android Auto et Android Automotive.", effect: 'Le tableau de bord peut déclencher la réservation à l’approche de la destination.', axe: 'Parking', sens: 'Opportunité', src: S.epIntegrees },
  { dim: 'Environnemental', fact: 'Les transports sont le 1er secteur émetteur : 34 % des émissions françaises en 2025.', effect: 'Réduire la recherche de place et réutiliser des places existantes va dans le sens public.', axe: 'Les deux', sens: 'Opportunité', src: S.sdesGes },
  { dim: 'Environnemental', fact: 'Paris module depuis le 1er octobre 2024 le tarif de stationnement selon le poids du véhicule.', effect: 'La voirie se renchérit ; une place louable devient plus attractive.', axe: 'Sharing', sens: 'Opportunité', src: S.paris },
  { dim: 'Légal', fact: 'La CNIL encadre les données du paiement du stationnement : usage limité à la tarification, conservation limitée.', effect: 'Plaque, destination et heure d’arrivée devront être traitées avec une finalité stricte.', axe: 'Parking', sens: 'Menace', src: S.cnil },
  { dim: 'Légal', fact: 'Les plateformes déclarent au fisc les revenus de location immobilière de leurs utilisateurs ; la directive inclut les places de stationnement.', effect: 'Smart Sharing devra collecter et déclarer les revenus des propriétaires.', axe: 'Sharing', sens: 'Menace', src: S.dac7 },
]

export const vrio = [
  { res: 'Base d’automobilistes avec plaque et paiement enregistrés', fact: '10 M+ téléchargements Android ; 92 000 notes en France ; migration Flowbird', v: 'oui', r: 'oui', i: 'partiel', o: 'oui', axes: 'Les deux axes', src: S.play },
  { res: 'Lecture de plaques reliée aux parkings (express pay)', fact: 'Déployée chez Saemes, généralisation prévue en 2026', v: 'oui', r: 'oui', i: 'partiel', o: 'oui', axes: 'Parking niveau 1', src: S.saemes },
  { res: 'Réseau de techniciens Flowbird', fact: '6 agences, intervention en moins de 3 heures en France', v: 'oui', r: 'oui', i: 'oui', o: 'non', axes: 'Parking niveau 2', src: S.epHeritage },
  { res: 'Intégration à la voiture', fact: 'CarPlay, Android Auto, Android Automotive ; Parkopedia', v: 'oui', r: 'oui', i: 'partiel', o: 'oui', axes: 'Parking niveau 1', src: S.epIntegrees },
  { res: 'Parkimeter (réservation)', fact: 'Partenaire de Saemes pour la réservation prépayée', v: 'oui', r: 'non', i: 'non', o: 'non', axes: 'Parking niveau 1', src: S.saemes },
  { res: 'Your Parking Space (location de places)', fact: 'Plateforme britannique du groupe', v: 'oui', r: 'oui', i: 'partiel', o: 'non', axes: 'Sharing', src: S.yps },
  { res: 'Facturation entreprises', fact: 'Offres Business de 4,99 à 8,99 € par utilisateur et par mois', v: 'oui', r: 'non', i: 'non', o: 'oui', axes: 'Les deux axes', src: S.epBusiness },
]

export const swot = {
  forces: [
    'N° 2 du paiement mobile en voirie ; base élargie par la migration Flowbird.',
    'Lecture de plaques déjà reliée à des parkings à barrière.',
    'App très bien notée : 4,8 sur iOS, 4,6 sur Android.',
    'Briques du groupe : Parkimeter, Your Parking Space, Parkopedia, techniciens Flowbird.',
  ],
  faiblesses: [
    'Revenu fondé sur un frais usager que les villes neutralisent (offre Basic).',
    "Ni réservation ni location de places dans l'app en France (à confirmer par test).",
    'Offre tarifaire complexe : Basic, Small, Standard, Go, Business.',
    'Aucune relation publique connue avec centres commerciaux et hôtels (H).',
  ],
  opportunites: [
    'Parkings qui passent au sans-ticket (Saemes en 2026).',
    'Voirie plus chère et plus contrainte : tarifs au poids à Paris, ZFE maintenues.',
    'Places privées inutilisées disponibles en volume : le succès de Yespark le montre.',
    'Tableau de bord de la voiture comme nouveau point de contact.',
  ],
  menaces: [
    'Onepark (3 500 parkings) et Yespark Group (100 000 places) déjà installés.',
    'PayByPhone entre dans des villes à la sortie de Flowbird (Lyon).',
    'Exploitants maîtres de leurs disponibilités et de leurs données.',
    'RGPD sur les plaques ; déclarations fiscales des plateformes ; critiques sur les frais.',
  ],
}

export const ges = [
  { poste: 'Achats de biens et services', scope: 'Scope 3', t: 28306 },
  { poste: 'Déplacements professionnels', scope: 'Scope 3', t: 3485 },
  { poste: 'Électricité et chauffage', scope: 'Scope 2', t: 2440 },
  { poste: 'Trajets domicile-travail', scope: 'Scope 3', t: 1927 },
  { poste: 'Biens d’équipement', scope: 'Scope 3', t: 1837 },
  { poste: 'Flotte de véhicules', scope: 'Scope 1', t: 1453 },
]

export const gesNonCouvert = [
  { title: 'Usage des produits vendus', text: "L'énergie des horodateurs installés, le transport et les déchets ne sont pas encore comptés ; intégration prévue d'ici le bilan 2027.", proof: 'V' },
  { title: 'Effet sur la circulation', text: 'EasyPark présente FIND comme un moyen de réduire les kilomètres de recherche de place ; aucun chiffre public ne mesure ce gain.', proof: 'V' },
]

export const impactAxes = [
  { axe: 'Smart Parking, niveau 1', effet: 'Logiciel seulement ; moins de kilomètres de recherche si la réservation évite de tourner.', poste: 'Services informatiques ; effet évité à mesurer' },
  { axe: 'Smart Parking, niveau 2', effet: 'Ajoute du matériel : 10 capteurs par parking pilote ; installation et fin de vie à gérer.', poste: 'Achats de biens, déplacements, déchets électroniques' },
  { axe: 'Smart Sharing', effet: 'Réutilise des places existantes au lieu d’en construire ; peu de matériel.', poste: 'Services informatiques' },
]

// États : existe, partiel, manque
export const ecarts = [
  {
    title: 'Smart Parking, niveau 1 : réservation automatique',
    rows: [
      { step: '1. Saisir sa destination', state: 'partiel', today: "Recherche d'une place autour d'une destination", add: "Calcul de l'heure d'arrivée pendant le trajet" },
      { step: '2. Voir les parkings partenaires proches', state: 'existe', today: 'Parkings sur la carte, avec tarifs', add: 'Filtre « partenaires Smart Parking »' },
      { step: '3. Connaître les places libres', state: 'manque', today: 'Non trouvé', add: 'Liaison avec le comptage de chaque exploitant' },
      { step: '4. Sélection automatique du parking', state: 'manque', today: 'Non trouvé', add: 'Règle : le plus proche avec places libres' },
      { step: '5. Réservation 15 min avant l’arrivée', state: 'manque', today: 'Non trouvé dans l’app ; Parkimeter réserve pour Saemes', add: 'Moteur de réservation, retrait de la place du compteur' },
      { step: '6. Réservation liée à la plaque', state: 'existe', today: 'Plaque enregistrée ; plusieurs véhicules', add: 'Rien d’important' },
      { step: '7. Entrée sans ticket', state: 'partiel', today: 'Express pay dans les parkings équipés et reliés', add: 'Étendre aux parkings B et C' },
      { step: '8. Sortie automatique', state: 'existe', today: 'Avec express pay, la session s’arrête à la sortie', add: 'Rien d’important dans les parkings compatibles' },
      { step: '9-10. Paiement et facture détaillée', state: 'partiel', today: 'Carte, Apple Pay ; reçus ; factures pro mensuelles', add: 'Facture détaillée par réservation' },
      { step: 'Retards, changements, annulations', state: 'manque', today: 'Non trouvé', add: 'Délai de grâce, report, libération de la place' },
    ],
  },
  {
    title: 'Smart Parking, niveau 2 : premium avec place précise',
    rows: [
      { step: 'Capteurs sur 10 places par parking pilote', state: 'manque', today: 'Techniciens Flowbird présents dans toute la France', add: 'Matériel, installation, maintenance' },
      { step: "Réservation d'une place numérotée", state: 'manque', today: 'Non trouvé', add: 'Plan du parking, état de chaque place équipée' },
      { step: 'Guidage intérieur jusqu’à la place', state: 'manque', today: 'Non trouvé', add: 'Guidage sans GPS : écran à l’entrée ou balises' },
      { step: 'Supplément de 1 €', state: 'partiel', today: 'Frais de service déjà facturés par session', add: 'Ligne tarifaire premium affichée avant validation' },
    ],
  },
  {
    title: 'Smart Sharing : location de places',
    rows: [
      { step: 'Espace propriétaire : publier, photos, disponibilités, tarif', state: 'manque', today: 'Non trouvé en France ; Your Parking Space au R.-U.', add: 'Créer l’espace ou adapter Your Parking Space' },
      { step: 'Recherche selon la destination', state: 'partiel', today: 'Recherche par destination pour voirie et parkings', add: 'Intégrer les places privées aux résultats' },
      { step: "Paiement par l'automobiliste", state: 'partiel', today: 'Compte et moyen de paiement enregistrés', add: 'Location à l’heure, au jour, à la semaine, au mois' },
      { step: 'Reversement et commission', state: 'manque', today: 'Non trouvé', add: 'Prestataire de paiement, déclaration fiscale' },
      { step: 'Accès, litiges, assurance', state: 'manque', today: 'Non trouvé', add: 'Instructions d’accès, annulation, dommages' },
    ],
  },
]

export const ameliorations = [
  'Afficher partout le prix total, frais compris, avant validation, et simplifier le choix entre Basic, Standard et Go.',
  'Accompagner la migration des utilisateurs Flowbird ville par ville, pour ne pas les perdre au profit de PayByPhone.',
  'Recenser dès maintenant les parkings compatibles avec express pay : c’est la base du futur pilote Smart Parking.',
]

export const informations = [
  { n: 1, info: "Test complet de l'app en France, sur iOS et Android", why: 'Confirmer les fonctions « non trouvées »', how: '3 scénarios filmés : voirie, express pay, destination', who: 'Équipe projet' },
  { n: 2, info: "Utilisateurs actifs avant et après la migration Flowbird", why: "Taille de l'audience des deux axes", how: "Extraction de l'outil d'analyse interne", who: 'Data EasyPark France' },
  { n: 3, info: 'Liste des parkings express pay et de leurs systèmes d’accès', why: 'Classer les parkings en catégories A, B, C', how: 'Inventaire des contrats exploitants', who: 'Partenariats' },
  { n: 4, info: 'Activité de Parkimeter en France', why: 'Base de départ de la réservation', how: 'Note de Parkimeter à la direction', who: 'Parkimeter' },
  { n: 5, info: 'Indicateurs de Your Parking Space', why: 'Repères réels pour Smart Sharing', how: 'Partage d’indicateurs dans le groupe', who: 'Your Parking Space' },
  { n: 6, info: 'Avis français récents en volume', why: 'Chiffrer les frictions', how: 'Analyse d’au moins 300 avis par thème', who: 'Marketing' },
  { n: 7, info: "Part d'EasyPark France dans l'empreinte carbone du groupe", why: 'Diagnostic écologique à l’échelle française', how: "Demande à l'équipe durabilité d'Arrive", who: 'RSE Arrive' },
  { n: 8, info: 'Accès aux données de disponibilité chez Saemes', why: 'Faisabilité du pilote avec un partenaire compatible', how: 'Entretien technique', who: 'Saemes' },
]

export const aValider = [
  'Les repères de preuve (V, H, E, R) et le niveau de détail conviennent.',
  'Le classement des parkings en trois catégories (A, B, C) servira de base au POC.',
  'La migration Flowbird vers EasyPark fait partie du récit du pivot.',
  "Le benchmark de l'étape 2 couvre Indigo Neo, Zenpark, Onepark, Parclick et Yespark, plus PayByPhone pour la voirie.",
]

export const sources = [
  { group: 'EasyPark et Arrive', items: [
    ['EasyPark France, accueil', S.epHome], ['Comment ça marche', S.epCcm], ['Express pay', S.epExpress], ['Solutions intégrées', S.epIntegrees],
    ['Recharge', S.epRecharge], ['Pourquoi EasyPark', S.epApp], ['FIND', S.epFind], ['Où se garer', S.epOu], ['Combien ça coûte', S.epPrix],
    ['Offres entreprises', S.epBusiness], ['Villes et opérateurs', S.epVilles], ['Direction et héritage', S.epHeritage], ['Aide : droits et abonnements', S.epDroits],
    ['Rachat de Flowbird, 15 janvier 2025', S.epFlowbird], ['Arrive, naissance de la marque, 12 juin 2025', S.arriveUnify], ['Arrive, à propos', S.arriveAbout],
    ['Arrive, bilan 2024', S.review2024], ['Arrive, rachat de Parkopedia', S.parkopedia], ['Arrive, rapport de durabilité 2025', S.csr2025],
  ] },
  { group: "Boutiques d'applications", items: [['App Store France', S.appStore], ['Google Play', S.play]] },
  { group: 'Autorités et institutions', items: [
    ['Autorité de la concurrence, décision 24-DCC-247', S.adlc], ['CNIL, stationnement payant, 5 juin 2025', S.cnil], ['impots.gouv, DPI-DAC7', S.dac7],
    ['Luxembourg, DAC7', S.dac7lu], ['SDES, parc automobile 2026', S.sdesParc], ['SDES, émissions par secteur', S.sdesGes], ['Insee via data.gouv', S.insee],
    ['Ville de Lyon, 16 janvier 2026', S.lyon], ['Ville de La Rochelle, 2 avril 2026', S.larochelle], ['Paris.fr, réforme 2024', S.paris], ['Banque des Territoires, ZFE', S.zfe],
  ] },
  { group: 'Marché et presse', items: [
    ['Saemes, 20 novembre 2025', S.saemes], ['Xerfi, gestion de parcs', S.xerfi], ['Europe 1, 24 octobre 2025', S.europe1], ['Maddyness, Onepark', S.onepark],
    ['Yespark Group', S.yespark], ['YourParkingSpace', S.yps], ['Clubic, 27 janvier 2026', S.clubic],
  ] },
]

// ---------------------------------------------------------------------------
// Consignes du cours et règles du prévisionnel (notes de séance)
// ---------------------------------------------------------------------------

export const consignes = [
  { bloc: '1. Diagnostic (audit V1)', livrables: "Diagnostic technique et impact écologique d'un site mobile ou d'une app", ou: 'Étape 1, sections 1.5 et 1.10', etat: 'partiel', note: "Fait pour l'app ; audit du site mobile à ajouter" },
  { bloc: '1. Diagnostic (audit V1)', livrables: 'Benchmark, mapping concurrentiel V1', ou: 'Étape 2', etat: 'fait' },
  { bloc: '1. Diagnostic (audit V1)', livrables: 'Customer Journey Canvas V1, ZMOT V1, USP V1', ou: 'Étapes 3 et 4', etat: 'fait' },
  { bloc: '2. Pitch et pivot (innovation V2)', livrables: 'Customer Journey Canvas V2, ZMOT V2, USP V2', ou: 'Étapes 3 et 4', etat: 'fait' },
  { bloc: '2. Pitch et pivot (innovation V2)', livrables: 'Mapping concurrentiel V2, benchmark', ou: 'Étape 2', etat: 'fait' },
  { bloc: '2. Pitch et pivot (innovation V2)', livrables: 'POC, Value Proposition Canvas, maquettes', ou: 'Étapes 3 et 5', etat: 'fait' },
  { bloc: '2. Pitch et pivot (innovation V2)', livrables: 'Business model, Canvas refait avec la nouveauté', ou: 'Étape 6', etat: 'fait' },
  { bloc: '3. Communication digitale (acquisition)', livrables: 'Landing page et GEO ; canaux owned, puis earned, puis paid ; push et pull ; Gantt', ou: 'Étapes 7 et 9', etat: 'fait' },
  { bloc: '4. ROI et prévisions (15 mois)', livrables: 'Budgets, ROI et ROAS, CLV, seuil de rentabilité et point mort, 12 + 3 mois, coût du projet, marge', ou: 'Étape 8', etat: 'fait' },
]

export const reglesPrevisionnel = [
  { regle: 'Prévisionnel sur 15 mois : setup les mois 1 à 3, run à partir du mois 4', application: "Tableau mensuel M1 à M15, avec chiffre d'affaires et marge brute cumulée" },
  { regle: "Acquisition organique au départ, paid des mois 7 à 15", application: "Le budget paid n'apparaît qu'à partir de M7" },
  { regle: 'Frais de setup : développement, coûts fixes, coûts variables proportionnels à l’exploitation', application: 'Trois lignes de coûts distinctes' },
  { regle: 'Run : charges internes, externes et paid', application: 'Trois lignes de charges distinctes' },
  { regle: 'Amortir sur 3 à 5 ans ; aligner cette durée sur celle du prêt, s’il y en a un', application: "Durée d'amortissement choisie et justifiée" },
  { regle: "On n'amortit pas une charge d'exploitation", application: 'Seuls le développement et le matériel (capteurs du premium) sont amortis' },
  { regle: 'Seuil de rentabilité : la marge brute cumulée dépasse la somme des investissements', application: 'Mois de franchissement calculé dans chaque scénario' },
]

// ---------------------------------------------------------------------------
// Étape 2 — Étude de marché et benchmark concurrentiel
// ---------------------------------------------------------------------------

export const S2 = {
  indigo: 'https://www.group-indigo.com/en/solution/the-indigo-neo-solution/',
  indigoApp: 'https://apps.apple.com/fr/app/id1109398417',
  oneparkCcm: 'https://www.onepark.co/be-fr/support/266-onepark-comment-ca-marche',
  oneparkFrais: 'https://www.onepark.co/be-fr/support/469-tout-savoir-sur-les-frais-de-service/466-pourquoi-onepark-applique-des-frais-de-service',
  oneparkApp: 'https://apps.apple.com/fr/app/id1528537709',
  zenparkApp: 'https://zenpark.com/application-mobile',
  zenparkStore: 'https://apps.apple.com/fr/app/id757934388',
  zenparkPartner: 'https://zenpark.com/partner',
  yesparkHome: 'https://www.yespark.fr/',
  yesparkPart: 'https://www.yespark.fr/partner/particuliers',
  parclick: 'https://parclick.fr/',
  bipandgo: 'https://www.bipandgo.com/actualites/comment-reserver-parking-app-bipandgo',
  parkto: 'https://parkto.fr/pourquoi-parkto',
  lpa: 'https://www.lpa.fr/wp-content/uploads/2021/05/C-PRESSE-27-05-202w.pdf',
}

export const e2Synthese = {
  lead: "Réserver un parking, entrer par la plaque et louer une place privée existent déjà en France. Le pivot ne peut pas se vendre sur ces fonctions. Son vrai élément de différence, à prouver, est l'automatisation complète : la réservation se déclenche seule avant l'arrivée, dans l'app que des millions de conducteurs utilisent déjà en voirie.",
  constats: [
    { title: 'Indigo Neo, le concurrent de référence', text: 'Voirie, réservation et entrée par la plaque réunies ; 3 millions d’utilisateurs, 600 parkings. Il faut le battre sur l’automatisation et la couverture de plusieurs exploitants.', proof: 'V' },
    { title: 'Personne ne réserve tout seul', text: "Aucun acteur étudié ne déclenche la réservation à partir de l'heure d'arrivée. Premier argument de différence, à confirmer par une recherche de brevets et chez les constructeurs.", proof: 'H' },
    { title: 'Le premium se vend sur « ma place m’attend »', text: 'Le guidage à la place existe chez des exploitants (LPA, Lyon) ; la réservation d’une place numérotée dans une app grand public n’a pas été trouvée.', proof: 'E' },
    { title: 'Sharing : viser la location courte', text: 'Yespark-Zenpark dominent le mois ; Parkto ne prend aucune commission aux propriétaires. Les 15 % devront se justifier par un service.', proof: 'E' },
    { title: 'Pas de prix de référence pour le niveau 1', text: 'Aucun concurrent ne publie un abonnement payé par le parking : le tarif partenaire est à construire et à tester.', proof: 'H' },
  ],
}

export const tendances2 = [
  { title: 'Réservation de parkings', text: 'Onepark annonce 4 000 parkings en Europe ; Parclick plus de 3 000 dans 9 pays ; Bip&Go, l’app de télépéage, propose la réservation.', src: S2.oneparkApp },
  { title: 'Lecture de plaques', text: 'Indigo Neo permet d’entrer et sortir sans ticket, facturé au temps réel ; Bip&Go demande la plaque pour toute réservation ; EasyPark a express pay.', src: S2.indigoApp },
  { title: 'Accès automatisés', text: 'Le téléphone sert de télécommande chez Zenpark (boîtier Zenpass sinon) ; Bip&Go ouvre par un bouton dans l’app ou par code.', src: S2.zenparkApp },
  { title: 'Stationnement intelligent', text: 'Guidage à la place par capteurs et voyants : LPA à Lyon a testé 10 places pendant 6 mois en 2020, puis déployé en 2021.', src: S2.lpa },
  { title: 'Places de marché de places privées', text: 'Yespark et Zenpark gèrent la location pour les particuliers, payés au succès ; Parkto annonce 0 % de commission pour les propriétaires.', src: S2.yesparkPart },
  { title: 'Digitalisation tout-en-un', text: 'Indigo Neo : 3 millions d’utilisateurs, 600 parkings connectés, 220 villes ; réservation, abonnement, voirie et pass journée dans la même app.', src: S2.indigo },
]

export const concurrents = [
  { axe: 'Smart Parking, niveau 1', directs: 'Indigo Neo, Onepark, Zenpark (court terme), Parclick, Bip&Go', indirects: 'Sites et apps des exploitants ; PayByPhone en voirie ; se garer sans réserver' },
  { axe: 'Smart Parking, niveau 2', directs: 'Aucun trouvé dans une app grand public', indirects: 'Guidage à la place installé par les exploitants (LPA à Lyon) ; panneaux de places libres' },
  { axe: 'Smart Sharing', directs: 'Yespark et Zenpark (même groupe), Parkto', indirects: 'Petites annonces, agences immobilières, stationnement résidentiel en voirie' },
]

export const fiches = [
  { name: 'Indigo Neo', what: 'Voirie, réservation à tarif avantageux, abonnements, pass journée, entrée et sortie sans ticket par la plaque', model: "App d'un exploitant : recettes de ses parkings", audience: '3 M d’utilisateurs, 600 parkings, 220 villes ; 4,4/5 (18 000 notes)', plus: 'Offre la plus complète', moins: 'Centrée sur le réseau Indigo (H)', src: S2.indigo },
  { name: 'Onepark', what: "Réservation à l'heure, au jour, au mois ou à l'année dans des parkings partenaires ; n'exploite aucun parking", model: "Frais de service payés par l'usager, inclus dans le prix affiché", audience: '4 000 parkings, 5 M d’automobilistes ; 4,7/5 (8 200 notes) ; 30 M€ de CA en 2024', plus: 'Catalogue large, actionnaires industriels', moins: 'Accès variable selon le parking ; réservation manuelle', src: S2.oneparkCcm },
  { name: 'Zenpark', what: "Réservation à l'heure, au jour, au mois ; le téléphone ouvre les portes ; disponibilité en temps réel", model: 'Places confiées par des propriétaires, payés au succès', audience: '1 M+ d’utilisateurs ; 4,7/5 (20 000 notes)', plus: 'Accès par smartphone sans équipement de l’exploitant', moins: "L'ouverture dépend du réseau mobile en sous-sol (E)", src: S2.zenparkApp },
  { name: 'Yespark', what: 'Location au mois surtout (dès 40 €/mois), à l’heure (2 €) ; réservation jusqu’à 6 mois à l’avance', model: 'Gestion locative complète, rémunérée au succès ; taux non publié', audience: 'Groupe : 100 000 places, 900 villes ; 13 M d’usagers revendiqués', plus: 'Offre en volume de bailleurs et d’entreprises', moins: 'Peu adapté au besoin ponctuel à l’arrivée (E)', src: S2.yesparkHome },
  { name: 'Parclick', what: 'Réservation de parkings, aéroports, ports et gares', model: 'Prix du parking plus frais ; montant non vérifié', audience: '3 000 parkings, 9 pays, 500 villes ; 3 M d’utilisateurs revendiqués', plus: 'Présence européenne', moins: 'Présence française non chiffrée', src: S2.parclick },
  { name: 'Bip&Go', what: "Dans l'app de télépéage : réservation autour de la destination, plaque obligatoire, ouverture par l'app ou par code", model: 'Abonnements télépéage ; tarif du service parking non vérifié', audience: 'Non publiée', plus: 'Conducteurs déjà équipés, comme EasyPark', moins: 'Parcours en 7 étapes, manuel', src: S2.bipandgo },
  { name: 'Parkto', what: 'Location entre particuliers à la journée ou au mois ; paiement sécurisé, contrat automatique, messagerie', model: '0 % de commission pour les propriétaires (annoncé)', audience: 'Non publiée', plus: 'Prix attractif pour les propriétaires', moins: 'Accès remis par le propriétaire lui-même', src: S2.parkto },
]

export const benchActeurs = ['EasyPark aujourd’hui', 'Indigo Neo', 'Onepark', 'Zenpark', 'Parclick', 'Bip&Go']

export const benchParking = [
  { f: 'Recherche autour d’une destination', v: ['Oui', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'] },
  { f: 'Réservation à l’avance', v: ['Non vu', 'Oui', 'Oui', 'Oui', 'Oui', 'Oui'] },
  { f: "Réservation déclenchée par l'heure d'arrivée", v: ['Non vu', 'Non vu', 'Non vu', 'Non vu', 'Non vu', 'Non vu'] },
  { f: 'Disponibilité en temps réel affichée', v: ['Non vu', 'Non vu', 'Non vu', 'Oui', 'Non vu', 'Pour le créneau choisi'] },
  { f: 'Entrée par lecture de plaque', v: ['Oui (express pay)', 'Oui', 'Non vu', 'Non vu', 'Non vu', 'Plaque obligatoire'] },
  { f: 'Ouverture par le téléphone', v: ['Non vu', 'Non vu', 'Non vu', 'Oui', 'Non vu', 'Oui'] },
  { f: 'Voirie dans la même app', v: ['Oui', 'Oui', 'Non vu', 'Non vu', 'Non vu', 'Non vu'] },
  { f: 'Place précise et guidage intérieur', v: ['Non vu', 'Non vu', 'Non vu', 'Non vu', 'Non vu', 'Non vu'] },
]

export const parcoursConcurrents = [
  { name: 'Bip&Go', steps: '7 étapes : connexion, rubrique Parking, calendrier, créneau, choix sur la carte, plaque, validation ; puis ouverture par l’app ou par code', proof: 'V', src: S2.bipandgo },
  { name: 'Onepark', steps: 'Recherche, choix du parking et du créneau, paiement, puis accès selon les consignes du parking', proof: 'V', src: S2.oneparkCcm },
  { name: 'Zenpark', steps: 'Heure de début et durée, réservation, ouverture des portes avec le téléphone', proof: 'V', src: S2.zenparkStore },
  { name: 'Indigo Neo', steps: 'Réservation à l’avance ; avec le service plaque activé, entrée et sortie sans ticket', proof: 'V', src: S2.indigoApp },
  { name: 'EasyPark niveau 1 (cible)', steps: 'Saisir sa destination et accepter la réservation automatique ; le reste se fait sans geste dans les parkings compatibles', proof: 'H', src: null },
]

export const modelesEco = [
  { model: 'Exploitant intégré', payer: 'L’automobiliste paie le stationnement à l’exploitant', examples: 'Indigo Neo', reading: "EasyPark n'exploite pas de parkings : il ne peut pas copier ce modèle" },
  { model: 'Frais de service usager', payer: 'L’automobiliste paie des frais en plus', examples: 'Onepark, Parclick', reading: 'Proche du modèle actuel d’EasyPark, mais contesté en voirie' },
  { model: 'Abonnement payé par le partenaire', payer: 'Le parking paie pour être intégré', examples: 'Aucun concurrent ne le publie', reading: 'Modèle visé par le niveau 1, à tester (H)' },
  { model: 'Supplément premium', payer: 'L’automobiliste paie un service en plus', examples: 'Niveau 2 à 1 €', reading: 'Aucun équivalent : pas de prix de référence (H)' },
]

export const sharingActeurs = ['Yespark', 'Zenpark', 'Parkto', 'Petites annonces', 'EasyPark (cible)']

export const benchSharing = [
  { f: 'Durées', v: ['Mois surtout ; heure (2 €)', 'Heure, jour, mois', 'Jour, mois', 'Mois en général (H)', 'Heure, jour, semaine, mois (H)'] },
  { f: 'Qui propose des places', v: ['Bailleurs, entreprises, particuliers', 'Propriétaires, parkings partenaires', 'Particuliers', 'Particuliers', 'Particuliers, entreprises, hôtels, gestionnaires (H)'] },
  { f: 'Service au propriétaire', v: ['Annonce, prix conseillé, envoi des accès, encaissement, relocation', 'Identique (même groupe)', 'Paiement sécurisé, contrat, messagerie', 'Aucun', 'À définir (étape 5)'] },
  { f: 'Accès à la place', v: ['Accès envoyés par courrier, garantis', 'Téléphone, Zenpass, badge ou code', 'Remis par le propriétaire', 'Remis par le propriétaire', 'À définir : le point dur (E)'] },
  { f: 'Rémunération', v: ['Au succès, taux non publié', 'Au succès, taux non publié', '0 % pour le propriétaire (annoncé)', 'Aucune', '15 % par transaction (H)'] },
  { f: 'Délai pour louer', v: ['10 jours en moyenne (annoncé)', '10 jours en moyenne (annoncé)', 'Non publié', 'Non publié', 'À mesurer'] },
]

export const sharingLecons = [
  { title: 'Le mois est pris, l’heure l’est moins', text: 'Les leaders vendent surtout de l’abonnement mensuel. La location courte, au moment où le conducteur cherche, est le terrain naturel d’une app de paiement à la minute.' },
  { title: 'L’accès est le vrai problème', text: 'Une place privée exige une clé, un badge ou un code. Yespark l’envoie par courrier : cela convient au mois, pas à l’heure.' },
  { title: 'La commission de 15 % est exposée', text: 'Elle est au-dessus du 0 % de Parkto ; les taux de Yespark et Zenpark ne sont pas publics.' },
]

// Mappings : scores = nombre de critères remplis, d'après les tableaux 2.4 et 2.5.
export const mappingParking = {
  title: "Smart Parking : le pivot place EasyPark devant Indigo Neo sur l'automatisation",
  xLabel: 'Situations couvertes (0 à 4)',
  yLabel: 'Automatisation du parcours (0 à 3)',
  xMax: 4,
  yMax: 3,
  points: [
    { name: 'Indigo Neo', x: 4, y: 2, kind: 'other', lx: -12, ly: 4, anchor: 'end' },
    { name: 'Onepark', x: 2, y: 0, kind: 'other', lx: 12, ly: -10, anchor: 'start' },
    { name: 'Zenpark', x: 2, y: 1, kind: 'other', lx: 12, ly: 4, anchor: 'start' },
    { name: 'Parclick', x: 1, y: 0, kind: 'other', lx: 12, ly: -10, anchor: 'start' },
    { name: 'PayByPhone (voirie)', x: 1, y: 0, kind: 'other', lx: 12, ly: 16, anchor: 'start' },
    { name: 'Bip&Go', x: 1, y: 1, kind: 'other', lx: 12, ly: 4, anchor: 'start' },
    { name: 'EasyPark aujourd’hui (V1)', x: 2, y: 2, kind: 'v1', lx: 12, ly: 22, anchor: 'start' },
    { name: 'EasyPark après le pivot (V2)', x: 3, y: 3, kind: 'v2', lx: -12, ly: -10, anchor: 'end' },
  ],
  reading: "Situations : voirie, parking payé à la durée, réservation, abonnement. Automatisation : accès sans ticket ni code, sortie et paiement sans geste, réservation sans choix manuel. Indigo Neo couvre plus de situations ; le pivot place EasyPark devant sur l'automatisation.",
}

export const mappingSharing = {
  title: 'Smart Sharing : plus de durées que Yespark, moins de services',
  xLabel: 'Durées proposées (0 à 4)',
  yLabel: 'Services au propriétaire (0 à 4)',
  xMax: 4,
  yMax: 4,
  note: "EasyPark aujourd'hui (V1) : absent de ce marché, donc aucun point",
  points: [
    { name: 'Yespark', x: 3, y: 4, kind: 'other', lx: -12, ly: -8, anchor: 'end' },
    { name: 'Zenpark (même groupe)', x: 3, y: 4, kind: 'other', lx: -12, ly: 16, anchor: 'end' },
    { name: 'Parkto', x: 2, y: 2, kind: 'other', lx: 12, ly: 4, anchor: 'start' },
    { name: 'Petites annonces', x: 1, y: 1, kind: 'other', lx: 12, ly: 4, anchor: 'start' },
    { name: 'EasyPark après le pivot (V2)', x: 4, y: 2, kind: 'v2', lx: -12, ly: -12, anchor: 'end' },
  ],
  reading: "Durées : heure, jour, semaine, mois. Services : annonce et prix conseillé, encaissement et reversement, gestion des accès, relocation et relances. Si EasyPark gère aussi les accès, le point V2 monte d'un cran.",
}

export const differenciation = [
  { el: 'Réservation à l’avance dans un parking', who: 'Indigo Neo, Onepark, Zenpark, Parclick, Bip&Go', diff: 'non' },
  { el: 'Entrée et sortie par lecture de plaque', who: 'Indigo Neo ; EasyPark (express pay)', diff: 'non', note: 'Sauf couverture de plusieurs exploitants (H)' },
  { el: 'Voirie et parkings dans une même app', who: 'Indigo Neo', diff: 'non' },
  { el: 'Ouverture par téléphone', who: 'Zenpark, Bip&Go', diff: 'non' },
  { el: 'Guidage vers une place libre par capteurs', who: 'Exploitants (LPA à Lyon)', diff: 'non' },
  { el: 'Location de places entre particuliers', who: 'Yespark, Zenpark, Parkto', diff: 'non' },
  { el: 'Location au mois', who: 'Yespark, Zenpark, Parkto', diff: 'non' },
  { el: 'Réservation déclenchée seule à 15 min de l’arrivée', who: 'Non trouvé', diff: 'oui' },
  { el: "Place numérotée réservée avec guidage, dans une app grand public", who: 'Non trouvé', diff: 'oui' },
  { el: 'Places privées à l’heure dans la même recherche que voirie et parkings', who: 'Non trouvé dans une même app', diff: 'oui' },
]

export const positionnement = {
  statement: "EasyPark s'occupe du stationnement avant même que le conducteur arrive. Il indique sa destination ; l'app trouve et réserve la place, ouvre la barrière et paie, que ce soit dans la rue, dans un parking partenaire ou sur une place privée.",
  appui: "Ce positionnement s'appuie sur ce qu'EasyPark a déjà et que les spécialistes de la réservation n'ont pas : des millions de conducteurs inscrits avec leur plaque et leur moyen de paiement, et une présence en voirie dans plus de 350 villes.",
  nePas: [
    'Qu’EasyPark est « le seul » à réserver automatiquement : la recherche a porté sur les acteurs français grand public, pas sur les constructeurs ni les brevets.',
    'Que la lecture de plaque est une innovation : Indigo Neo l’offre déjà.',
    'Que le guidage à la place est nouveau : il existe dans des parkings français depuis au moins 2021.',
  ],
}

export const e2Informations = [
  { n: 1, info: 'Commissions de Onepark, Parclick, Yespark et Zenpark', why: "Situer l'abonnement partenaire et les 15 %", how: 'Entretiens avec 5 exploitants et 10 propriétaires ; conditions partenaires' },
  { n: 2, info: "Ouverture d'Indigo Neo aux parkings d'autres exploitants", why: 'Savoir si son réseau est fermé', how: "Test de l'app et pages partenaires d'Indigo" },
  { n: 3, info: "Réservation déclenchée par l'heure d'arrivée ailleurs", why: 'Confirmer le premier élément différenciant', how: 'Recherche de brevets (INPI, Espacenet) et navigation des constructeurs' },
  { n: 4, info: 'Relevé de prix comparable', why: 'Comparer les prix réels', how: '10 parkings, même créneau, Paris et Lyon, sur chaque plateforme' },
  { n: 5, info: 'Test des parcours concurrents', why: 'Mesurer gestes et temps', how: 'Réserver une fois chez Indigo Neo, Onepark, Zenpark et Bip&Go' },
]

export const e2AValider = [
  "Le positionnement « EasyPark s'occupe du stationnement avant même que le conducteur arrive ».",
  'Indigo Neo comme concurrent de référence pour Smart Parking, Yespark-Zenpark pour Smart Sharing.',
  'Smart Sharing centré d’abord sur la location courte (heure, jour) plutôt que sur le mois.',
]

export const sourcesEtape2 = {
  group: 'Étape 2 : concurrents',
  items: [
    ['Groupe Indigo, Indigo Neo', S2.indigo], ['Indigo Neo, App Store', S2.indigoApp], ['Onepark, comment ça marche', S2.oneparkCcm],
    ['Onepark, frais de service', S2.oneparkFrais], ['Onepark, App Store', S2.oneparkApp], ['Zenpark, application', S2.zenparkApp],
    ['Zenpark, App Store', S2.zenparkStore], ['Zenpark, propriétaires', S2.zenparkPartner], ['Yespark, accueil', S2.yesparkHome],
    ['Yespark, particuliers', S2.yesparkPart], ['Parclick', S2.parclick], ['Bip&Go, 16 novembre 2026', S2.bipandgo], ['Parkto', S2.parkto],
    ['LPA, guidage à la place, 27 mai 2021', S2.lpa],
  ],
}
