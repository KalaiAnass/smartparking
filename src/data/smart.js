// Projet SMART — Étude stratégique EasyPark (étape 1 : diagnostic).
// Source unique de toutes les données affichées sur le site.
// Repères de preuve : F = fait vérifié et sourcé, H = hypothèse ou estimation de l'équipe, O = objectif.

export const asOf = '23 novembre 2026'

export const S = {
  adlc: 'https://www.autoritedelaconcurrence.fr/sites/default/files/integral_texts/2025-01/23-329%20-%20Publique%20-%20d%C3%A9cision%2024DCC247%20clean.pdf',
  arriveUnify: 'https://arrive.com/en/newsroom/news/easypark-group-unifies-under-arrive-to-build-the-world-s-leading-global-mobility-platform',
  arriveAbout: 'https://arrive.com/en/about/about-us',
  review2024: 'https://arrive.com/en/newsroom/news/easypark-group-s-year-in-review-2024',
  parkopedia: 'https://arrive.com/en/newsroom/news/easypark-group-acquires-parkopedia-to-streamline-the-driver-experience',
  epHeritage: 'https://www.easypark.com/en-fr/easypark-leadership-and-heritage',
  epHome: 'https://www.easypark.com/fr-fr',
  epPricing: 'https://www.easypark.com/en-fr/pricing',
  saemes: 'https://saemes.fr/sites/default/files/DEF%20Alerte%20presse%20SAEMES%20EASYPARK.pdf',
  yps: 'https://www.yourparkingspace.co.uk/',
  covoitData: 'https://www.data.gouv.fr/datasets/69b9892671a02fb27d4bd716',
  modesData: 'https://www.data.gouv.fr/datasets/69b987f0c23eb0dd77b7ef87',
  ministere: 'https://www.ecologie.gouv.fr/politiques-publiques/covoiturage-france-ses-avantages-reglementation-vigueur',
  reporterre: 'https://reporterre.net/Chez-Blablacar-la-degringolade-apres-l-arret-des-primes-covoiturage',
  blablacar: 'https://newsroom.blablacar.com/?p=6150',
  techcrunch: 'https://techcrunch.com/2023/03/15/blablacar-to-acquire-klaxit-a-ride-sharing-service-for-daily-commutes',
  onepark: 'https://www.maddyness.com/2025/10/28/face-a-yespark-onepark-leve-40-millions-deuros-et-fait-entrer-totalenergies-a-son-capital/',
  yespark: 'https://www.yespark.fr/blog/un-an-yesparkgroup',
  zfe: 'https://www.banquedesterritoires.fr/loi-de-simplification-les-zfe-remises-en-piste-apres-la-decision-du-conseil-constitutionnel',
  sdesParc: 'https://www.statistiques.developpement-durable.gouv.fr/40-millions-de-voitures-en-circulation-en-france-au-1er-janvier-2026',
  sdesGes: 'https://www.statistiques.developpement-durable.gouv.fr/edition-numerique/chiffres-cles-du-climat/fr/10-panorama-francais-des-gaz-a',
  fmd: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F19846?quest0=1',
  paris: 'https://www.paris.fr/pages/tarifs-suv-modalites-de-controle-ce-qui-change-avec-la-reforme-du-stationnement-2024-27224',
}

export const nav = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'synthese', label: 'Synthèse pour la direction' },
  { id: 'cadre', label: "Cadre de l'étude" },
  { group: 'Diagnostic interne' },
  { id: 'profil', label: 'Qui est EasyPark' },
  { id: 'ressources', label: 'Ressources et VRIO' },
  { group: 'Diagnostic externe' },
  { id: 'pestel', label: 'PESTEL France' },
  { id: 'porter', label: 'Cinq forces de Porter' },
  { group: 'Conclusions' },
  { id: 'swot', label: 'SWOT et enjeux' },
  { id: 'axes', label: 'Lecture des 3 axes' },
  { id: 'donnees', label: 'Données manquantes' },
  { id: 'sources', label: 'Sources' },
]

export const axes = [
  {
    id: 'parking',
    name: 'Smart Parking',
    icon: 'ParkingCircle',
    pitch: "Réserver une place dans un parking partenaire, directement dans l'app EasyPark.",
    scope: "L'app réserve automatiquement 15 min avant l'arrivée ; les places libres du parking se mettent à jour aussitôt.",
  },
  {
    id: 'sharing',
    name: 'Smart Sharing',
    icon: 'Share2',
    pitch: 'Mettre en relation les propriétaires de places inutilisées et les automobilistes.',
    scope: "À l'heure, au jour, à la semaine ou au mois. Hypothèse : 15 % de commission.",
  },
  {
    id: 'mobility',
    name: 'Smart Mobility',
    icon: 'Route',
    pitch: 'Covoiturage domicile-travail, intermodalité et parkings relais.',
    scope: 'Hypothèses : 0,50 € par trajet et abonnement pro à 300 € par mois.',
  },
]

export const heroKpis = [
  { value: 50, prefix: '≥ ', suffix: ' M€', label: "Chiffre d'affaires d'EasyPark en France en 2023", src: S.adlc },
  { text: '30–40 %', label: 'Des transactions mobiles en voirie pour EasyPark et Flowbird réunis', src: S.adlc },
  { value: 19.3, decimals: 1, suffix: ' M', label: 'Actifs qui vont travailler principalement en voiture (2023)', src: S.modesData },
  { value: 10.3, decimals: 1, suffix: ' M', label: 'Trajets de covoiturage par plateforme en 2025, soit −10 %', src: S.covoitData },
]

export const synthese = {
  lead: "EasyPark peut lancer SMART en s'appuyant sur des briques que le groupe possède déjà. L'ordre proposé est Smart Parking, puis Smart Sharing, puis un test ciblé de Smart Mobility.",
  constats: [
    {
      title: "Le cœur d'activité est sous pression",
      text: "EasyPark est n° 2 en voirie derrière PayByPhone (60 à 70 % des transactions). Son frais payé par l'usager n'est le modèle que de 10 à 20 % des opérateurs. Diversifier les revenus est une nécessité.",
      proof: 'F',
    },
    {
      title: 'Le groupe a déjà les briques',
      text: "Parkimeter pour la réservation, Your Parking Space pour le partage, CameraPark pour l'accès sans ticket, Flowbird pour la billettique. Elles ne sont pas réunies dans l'app EasyPark en France.",
      proof: 'F',
    },
    {
      title: 'Les fournisseurs de places décident',
      text: "Exploitants et propriétaires contrôlent l'inventaire ; Onepark (3 500 parkings) et Yespark Group (100 000 places) l'ont déjà en partie. La bataille commerciale commence côté offre.",
      proof: 'F',
    },
    {
      title: 'Le covoiturage est fragile',
      text: "Les trajets par plateforme ont reculé de 10 % en 2025, l'année où la prime de 100 € a disparu. À 0,50 € par trajet, même 10 % du marché rapporterait environ 520 000 € par an.",
      proof: 'F',
    },
    {
      title: 'Les moyens imposent un pilote local',
      text: '10 000 € de marketing et 1 000 contacts suffisent pour une ville ou un quartier, pas pour un lancement national.',
      proof: 'H',
    },
  ],
  decisions: [
    "Confirmer que les données de travail sont les moyens du projet SMART, et non ceux d'EasyPark France.",
    "Désigner un sponsor au niveau du groupe Arrive pour l'accès à Parkimeter et à Your Parking Space.",
    'Choisir le modèle de revenu de Smart Parking : frais usager, commission exploitant, ou les deux.',
  ],
}

export const proofLegend = [
  { code: 'F', label: 'Fait vérifié', text: 'Chiffre ou événement tiré d’une source publique ouverte et citée.' },
  { code: 'H', label: 'Hypothèse', text: "Estimation ou jugement de l'équipe, avec son raisonnement." },
  { code: 'O', label: 'Objectif', text: "Cible fixée par l'équipe, à piloter." },
]

export const donneesTravail = [
  { label: 'Marché cible', value: 'France', note: 'Périmètre de toute l’étude' },
  { label: 'CRM', value: 'Excel / Sheets', note: "Outil de l'équipe projet, pas le CRM du groupe (H)" },
  { label: 'Contacts CRM', value: '1 000', note: 'Base de prospection du projet' },
  { label: 'Abonnés réseaux sociaux', value: '10 000', note: 'Audience mobilisable directement' },
  { label: 'Budget marketing', value: '10 000 €', note: 'Budget de lancement du projet (H)' },
]

export const hypothesesDepart = [
  { axe: 'Smart Parking', text: "Réservation en fonction du nombre de places libres du parking partenaire. L'app réserve automatiquement 15 min avant l'arrivée du client ; le nombre de places libres diminue aussitôt dans le système du parking.", status: 'Principe de fonctionnement' },
  { axe: 'Smart Sharing', text: 'Commission de 15 % sur les locations.', status: 'H, testée à l’étape 10' },
  { axe: 'Smart Mobility', text: '0,50 € par trajet réalisé ; abonnement professionnel de 300 € par mois.', status: 'H, testées à l’étape 10' },
]

// Smart Parking : principe de la réservation, tel que défini par l'équipe projet.
export const reservationFlow = [
  { n: 1, title: 'Le client se rend à sa destination', text: "Il utilise l'application EasyPark pendant son trajet." },
  { n: 2, title: 'Réservation automatique 15 min avant l’arrivée', text: "L'app réserve une place dans un parking partenaire qui a des places libres." },
  { n: 3, title: 'Mise à jour immédiate du parking', text: 'Le nombre de places libres diminue automatiquement dans le système du parking.' },
]

export const etapes = [
  { n: 1, label: 'Diagnostic stratégique interne et externe', status: 'Livrée' },
  { n: 2, label: 'Marché et benchmark concurrentiel', status: 'À venir' },
  { n: 3, label: 'Opportunités de développement', status: 'À venir' },
  { n: 4, label: 'Segmentation et besoins clients', status: 'À venir' },
  { n: 5, label: 'Personas, ZMOT et Customer Journey', status: 'À venir' },
  { n: 6, label: 'Proposition de valeur et USP par axe', status: 'À venir' },
  { n: 7, label: 'Fonctionnalités et MVP', status: 'À venir' },
  { n: 8, label: 'Business Model Canvas', status: 'À venir' },
  { n: 9, label: 'Stratégie commerciale et marketing POEM', status: 'À venir' },
  { n: 10, label: 'Prévisionnel financier sur trois ans', status: 'À venir' },
  { n: 11, label: 'KPI et pilotage de la performance', status: 'À venir' },
  { n: 12, label: 'Roadmap, Gantt, RACI et risques', status: 'À venir' },
]

export const identite = [
  { label: 'Groupe', value: 'Arrive', text: 'Nom adopté le 12 juin 2025 ; remplace EasyPark Group et Flowbird Group.', src: S.arriveUnify },
  { label: 'Siège', value: 'Suède', text: 'Groupe européen détenu majoritairement par les fonds Verdane, Vitruvian et Searchlight Capital.', src: S.epHeritage },
  { label: 'Couverture', value: '90+ pays', text: 'Plus de 20 000 villes pour le groupe ; EasyPark seul : 20+ pays et 4 000+ villes fin 2024.', src: S.arriveAbout },
  { label: 'France', value: 'Neuilly · Besançon', text: 'Siège à Neuilly-sur-Seine, 6 agences, usine de Besançon (800+ salariés).', src: S.epHeritage },
  { label: "Chiffre d'affaires 2023", value: '≥ 50 M€', text: 'Pour EasyPark France, et autant pour Flowbird France. Montants exacts confidentiels.', src: S.adlc },
  { label: "Image de l'app", value: '4,7 / 5', text: "Sur l'App Store, plus de 450 000 avis 5 étoiles (chiffres déclarés par EasyPark).", src: S.epHome },
]

export const marques = ['EasyPark', 'Flowbird', 'ParkMobile', 'RingGo', 'Parkopedia', 'Yellowbrick', 'Your Parking Space', 'Parkimeter']

export const dates = [
  { date: 'Nov. 2025', text: 'Saemes ouvre ses parkings parisiens à CameraPark et vise tous ses parkings publics en 2026.', src: S.saemes },
  { date: 'Juin 2025', text: 'EasyPark Group devient Arrive.', src: S.arriveUnify },
  { date: 'Fév. 2025', text: 'Rachat de Parkopedia : données de stationnement et paiement intégrés aux véhicules.', src: S.parkopedia },
  { date: '2025', text: "Rachat de Flowbird, autorisé par l'Autorité de la concurrence le 20 novembre 2024.", src: S.adlc },
  { date: '2024', text: 'Plus de 400 villes ajoutées en Europe et en Amérique du Nord.', src: S.review2024 },
  { date: '2021', text: 'Rachat de Park Now Group (RingGo, ParkMobile) et de Parkimeter.', src: S.arriveAbout },
  { date: '2011', text: "Lancement de l'application EasyPark.", src: S.arriveAbout },
]

export const offre = [
  { name: 'App EasyPark, voirie', what: 'Paiement à la minute, arrêt et prolongation à distance, alertes', client: 'Automobiliste', revenue: 'Frais de 15 % (min. 0,25 €, max. 3 €) ou EasyPark Go à 2,99 € par mois' },
  { name: 'CameraPark', what: 'Entrée et sortie de parking sans ticket, paiement à la durée réelle', client: 'Automobiliste, exploitant', revenue: 'Non publié' },
  { name: 'EasyPark Business', what: 'Frais de stationnement des salariés pris en charge, facture unique', client: 'Entreprise', revenue: 'Marché français d’environ 3 M€, tous acteurs' },
  { name: 'Services aux villes', what: 'Droits résidents, concentrateur de tickets, inventaire et analyse', client: 'Collectivité, opérateur', revenue: 'Contrats de service' },
  { name: 'Flowbird', what: 'Horodateurs, app Flowbird, billettique de transport public', client: 'Collectivité, autorité de transport', revenue: 'Équipements ; commission payée surtout par la ville' },
  { name: 'Parkimeter', what: 'Réservation prépayée de places en parking, sur site web', client: 'Automobiliste, exploitant (dont Saemes)', revenue: 'Non publié' },
]

// Parts du marché français de la fourniture d'applications de paiement aux villes, 2023 (fourchettes publiées).
export const partsMarche = [
  { name: 'PayByPhone (Corpay)', low: 60, high: 70, value: '70 à 80 % en valeur', tone: 'muted' },
  { name: 'EasyPark', low: 10, high: 20, value: 'non publiée séparément', tone: 'accent' },
  { name: 'Flowbird', low: 10, high: 20, value: 'non publiée séparément', tone: 'indigo' },
  { name: 'EasyPark + Flowbird', low: 30, high: 40, value: '10 à 20 % en valeur', tone: 'mint' },
  { name: 'IndigoNeo, PrestoPark, Macaron', low: 0, high: 5, value: 'moins de 5 % au total', tone: 'muted' },
]

export const faitsMarche = [
  { title: 'Un modèle de revenu minoritaire', text: "EasyPark fait payer l'usager dans 90 à 100 % de ses villes. Or 80 à 90 % des opérateurs ont choisi en 2024 que la commission soit payée par la ville. PayByPhone ne facture pas l'usager dans 96 % de ses communes." },
  { title: 'Des positions locales fragiles', text: 'Les contrats durent de 1 à 6 ans et environ 80 % ne sont pas exclusifs. Entre 2020 et 2024, le nombre de communes utilisant deux applications a augmenté de 183 %.' },
  { title: 'Un terrain de jeu limité', text: 'Sur environ 800 communes à stationnement payant, un peu plus de 500 acceptent le paiement mobile. La croissance par conquête de villes a un plafond en France.' },
]

export const vrio = [
  { res: 'Relations avec les villes et les opérateurs', fact: '30 à 40 % des transactions mobiles avec Flowbird ; Flowbird en France depuis 1968', v: 'oui', r: 'oui', i: 'oui', o: 'partiel', avantage: 'Durable si unifié', axes: 'Parking, Mobility', src: S.arriveAbout },
  { res: 'Base d’automobilistes avec paiement enregistré', fact: '2e marque la plus utilisée après PayByPhone ; volume France non public', v: 'oui', r: 'partiel', i: 'non', o: 'oui', avantage: 'Temporaire', axes: 'Les trois', src: S.adlc },
  { res: 'CameraPark : accès sans ticket par lecture de plaque', fact: 'Déployé chez Saemes, 65 parkings en Île-de-France', v: 'oui', r: 'oui', i: 'partiel', o: 'oui', avantage: 'Durable à court terme', axes: 'Parking', src: S.saemes },
  { res: 'Parkimeter : moteur de réservation', fact: 'Partenaire de Saemes pour les réservations prépayées', v: 'oui', r: 'non', i: 'non', o: 'non', avantage: 'Parité', axes: 'Parking', src: S.saemes },
  { res: 'Your Parking Space : partage de places', fact: 'Plateforme britannique de location de places, rachetée en 2023', v: 'oui', r: 'oui', i: 'partiel', o: 'non', avantage: 'Potentiel inexploité', axes: 'Sharing', src: S.yps },
  { res: 'Parkopedia : données et paiement embarqué', fact: 'Rachetée en février 2025', v: 'oui', r: 'oui', i: 'oui', o: 'partiel', avantage: 'Durable si intégré', axes: 'Parking, Mobility', src: S.parkopedia },
  { res: 'Billettique de transport Flowbird', fact: 'Terminaux et plateformes de paiement pour les transports publics', v: 'oui', r: 'oui', i: 'oui', o: 'non', avantage: 'Potentiel inexploité', axes: 'Mobility', src: S.adlc },
  { res: 'Offre entreprises (EasyPark Business)', fact: "Marché français d'environ 3 M€, encore limité", v: 'oui', r: 'non', i: 'non', o: 'oui', avantage: 'Parité', axes: 'Mobility, Sharing', src: S.adlc },
  { res: 'Données de stationnement', fact: "Service d'inventaire et d'analyse vendu aux villes", v: 'oui', r: 'partiel', i: 'partiel', o: 'partiel', avantage: 'Temporaire', axes: 'Sharing, Mobility', src: S.adlc },
]

export const faiblesses = [
  { title: 'Revenu concentré sur un modèle contesté', text: "Le frais de 15 % payé par l'usager n'est retenu que par 10 à 20 % des opérateurs. Le groupe veut pourtant l'étendre à Flowbird." },
  { title: 'Offre dispersée', text: "L'automobiliste peut croiser EasyPark, Flowbird et Parkimeter, trois marques du même groupe : risque de confusion et de cannibalisation (H)." },
  { title: 'Compétences absentes ou sous-traitées', text: "Gestion des forfaits post-stationnement sous-traitée ; agrégation de paiements dans 10 villes sur 520 ; aucune activité de covoiturage connue en France (H)." },
  { title: 'App Flowbird moins appréciée', text: "Les répondants au test de marché la jugent « moins performante et moins complète » qu'EasyPark." },
  { title: 'Moyens du projet très réduits', text: 'CRM sur tableur, 1 000 contacts, 10 000 € de marketing : assez pour un pilote local, pas pour un lancement national (H).' },
]

export const pestel = [
  { dim: 'Politique', fact: 'Depuis le 1er janvier 2018, chaque commune fixe ses tarifs et choisit les applications de paiement.', effect: 'Les villes restent les prescripteurs : chaque axe doit leur apporter quelque chose.', axe: 'Les trois', sens: 'Menace', src: S.adlc },
  { dim: 'Politique', fact: 'Plan national covoiturage du quotidien lancé le 13 décembre 2022 : tripler les trajets d’ici 2027.', effect: 'Les collectivités financent encore des incitations via le Fonds vert : ce sont des clients potentiels.', axe: 'Mobility', sens: 'Opportunité', src: S.ministere },
  { dim: 'Politique', fact: 'Le Conseil constitutionnel a censuré le 21 mai 2026 la suppression des ZFE ; une proposition de loi vise à les supprimer.', effect: 'Argument pour le parking relais, mais avenir incertain.', axe: 'Mobility, Parking', sens: 'Incertain', src: S.zfe },
  { dim: 'Économique', fact: 'Prime de 100 € au covoiturage courte distance supprimée au 1er janvier 2025. BlaBlaCar en avait tiré 90 M€ en 2023.', effect: 'Le covoiturage vit en partie de subventions ; 0,50 € par trajet devra tenir sans elles.', axe: 'Mobility', sens: 'Menace', src: S.reporterre },
  { dim: 'Économique', fact: 'Yespark a racheté Zenpark en 2025 ; Onepark a levé 40 M€ auprès de TotalEnergies (CA 2024 : 30 M€).', effect: 'La réservation et le partage de places se consolident autour d’acteurs financés.', axe: 'Parking, Sharing', sens: 'Menace', src: S.onepark },
  { dim: 'Social', fact: '68,9 % des actifs vont travailler principalement en voiture en 2023 (19,3 millions) ; 15,6 % en transports en commun.', effect: 'Un très grand marché de trajets domicile-travail, encore peu partagé.', axe: 'Mobility, Parking', sens: 'Opportunité', src: S.modesData },
  { dim: 'Social', fact: "Le covoiturage du quotidien pèse environ 3 % des trajets ; celui qui passe par une plateforme n'en représente que 4 %.", effect: '96 % du covoiturage se fait sans plateforme : il est difficile à monétiser.', axe: 'Mobility', sens: 'Menace', src: S.covoitData },
  { dim: 'Technologique', fact: 'La lecture de plaque permet d’entrer et sortir d’un parking sans ticket (CameraPark chez Saemes).', effect: 'L’arrivée dans un parking réservé devient fluide, sans ticket.', axe: 'Parking', sens: 'Opportunité', src: S.saemes },
  { dim: 'Technologique', fact: 'Paiement et données de stationnement s’intègrent aux véhicules ; le groupe a racheté Parkopedia.', effect: 'Le tableau de bord de la voiture devient un canal de vente à côté de l’app.', axe: 'Parking', sens: 'Opportunité', src: S.parkopedia },
  { dim: 'Environnemental', fact: 'Les transports sont le 1er secteur émetteur : 123 Mt CO2 éq en 2025, 34 % des émissions.', effect: 'La pression sur la voiture individuelle va durer ; partage et covoiturage vont dans le sens public.', axe: 'Sharing, Mobility', sens: 'Opportunité', src: S.sdesGes },
  { dim: 'Environnemental', fact: 'Paris module depuis le 1er octobre 2024 le tarif de stationnement selon le poids du véhicule.', effect: 'La voirie se renchérit : une place réservée en parking devient plus attractive.', axe: 'Parking, Sharing', sens: 'Opportunité', src: S.paris },
  { dim: 'Légal', fact: 'Forfait mobilités durables : jusqu’à 600 € par an et par salarié en 2026, ouvert au covoiturage sur justificatif.', effect: 'Levier de vente aux entreprises, à condition de fournir des preuves de trajet.', axe: 'Mobility', sens: 'Opportunité', src: S.fmd },
  { dim: 'Légal', fact: 'Plaques et géolocalisation sont des données personnelles (RGPD) ; EasyPark héberge ses données en Europe.', effect: 'Coût de conformité pour la lecture de plaques et le croisement de données.', axe: 'Les trois', sens: 'Menace', src: S.epHeritage },
  { dim: 'Légal', fact: "Contrats avec les villes à 80-90 % de gré à gré ; appel d'offres obligatoire au-delà de 100 000 €.", effect: 'Un pilote avec une ville peut se signer vite.', axe: 'Les trois', sens: 'Opportunité', src: S.adlc },
]

// Trajets annuels de covoiturage par plateforme (registre de preuve de covoiturage), France métropolitaine.
// Île-de-France = métropole moins hors Île-de-France.
export const covoiturage = [
  { year: 2022, horsIdf: 2887647, idf: 2074966 },
  { year: 2023, horsIdf: 6358148, idf: 2365600 },
  { year: 2024, horsIdf: 8370653, idf: 3153043 },
  { year: 2025, horsIdf: 6623337, idf: 3714367 },
]

export const marches = [
  { id: 'voirie', label: 'Voirie', sub: 'activité actuelle' },
  { id: 'parking', label: 'Réservation en parking', sub: 'Smart Parking' },
  { id: 'sharing', label: 'Location de places', sub: 'Smart Sharing' },
  { id: 'mobility', label: 'Covoiturage domicile-travail', sub: 'Smart Mobility' },
]

// level : 1 faible, 2 moyen, 3 fort, 4 très fort
export const porter = [
  {
    force: 'Rivalité',
    cells: {
      voirie: { level: 3, label: 'Forte', text: 'PayByPhone : 60 à 70 % des transactions ; deux acteurs tiennent 90 à 100 % du marché.' },
      parking: { level: 3, label: 'Forte', text: "Onepark : 3 500 parkings, 2,7 M d'utilisateurs, 30 M€ de CA 2024 ; Zenpark ; sites des exploitants." },
      sharing: { level: 3, label: 'Moyenne à forte', text: 'Yespark Group : 100 000 places, 6 000 parkings, 900 villes (France, Italie, Belgique).' },
      mobility: { level: 3, label: 'Forte, concentrée', text: 'En 2022, Klaxit (2,6 M de trajets) et BlaBlaCar Daily (1,5 M) faisaient ~80 % des trajets ; rachat en 2023.' },
    },
  },
  {
    force: 'Pouvoir des clients',
    cells: {
      voirie: { level: 3, label: 'Fort', text: 'Les villes signent pour 1 à 6 ans, à 80 % sans exclusivité, et ajoutent volontiers une 2e app.' },
      parking: { level: 2, label: 'Moyen', text: 'Comparer est facile, mais le besoin est souvent urgent et ponctuel (H).' },
      sharing: { level: 2, label: 'Moyen', text: 'Le locataire compare avec le tarif résident en voirie (H).' },
      mobility: { level: 3, label: 'Fort', text: 'Employeurs et collectivités paient ; le passager voyage souvent gratuitement dans les territoires subventionnés.' },
    },
  },
  {
    force: 'Pouvoir des fournisseurs',
    cells: {
      voirie: { level: 1, label: 'Faible', text: "Flowbird, fabricant d'horodateurs, fait désormais partie du groupe." },
      parking: { level: 3, label: 'Fort', text: 'Les exploitants possèdent places et disponibilités ; Saemes vend par Parkimeter et par EasyPark.' },
      sharing: { level: 2, label: 'Moyen', text: 'Bailleurs sociaux et foncières négocient ; les particuliers pèsent peu un par un.' },
      mobility: { level: 3, label: 'Fort', text: 'Les conducteurs sont la ressource rare et il faut les rémunérer.' },
    },
  },
  {
    force: 'Nouveaux entrants',
    cells: {
      voirie: { level: 3, label: 'Forte menace', text: '55 entrées de fournisseurs dans des villes en 2023 ; Macaron dans 5 communes 6 mois après son lancement.' },
      parking: { level: 2, label: 'Moyenne', text: 'Il faut un catalogue de parkings et du capital (Onepark : 40 M€ levés en 2025).' },
      sharing: { level: 2, label: 'Moyenne', text: 'Il faut une densité de places par quartier pour intéresser les locataires (H).' },
      mobility: { level: 1, label: 'Faible à moyenne', text: 'Sans assez de conducteurs et passagers au même endroit, le service ne marche pas (H).' },
    },
  },
  {
    force: 'Substituts',
    cells: {
      voirie: { level: 2, label: 'Moyens', text: 'Les horodateurs restent obligatoires à distance raisonnable.' },
      parking: { level: 3, label: 'Forts', text: 'Voirie, transports en commun, venir sans réserver.' },
      sharing: { level: 3, label: 'Forts', text: 'Stationnement résidentiel en voirie, garage privé.' },
      mobility: { level: 4, label: 'Très forts', text: 'Voiture seule (68,9 % des actifs) ; 96 % du covoiturage se fait sans plateforme.' },
    },
  },
]

export const attractivite = {
  voirie: { score: 1, text: 'Faible croissance : marché à défendre' },
  parking: { score: 3, text: 'Moyenne à bonne : clients déjà en voiture, CameraPark, Parkimeter' },
  sharing: { score: 2, text: 'Moyenne : demande réelle, mais leader installé' },
  mobility: { score: 1, text: "Faible en offre autonome ; meilleure comme brique d'un trajet voiture + parking + transport" },
}

export const swot = {
  forces: [
    ['F1', 'N° 2 du paiement mobile en voirie, 2e marque la plus utilisée en France.'],
    ['F2', 'Automobilistes déjà inscrits avec un moyen de paiement enregistré.'],
    ['F3', 'Relations avec villes et exploitants, renforcées par Flowbird (30 à 40 % des transactions à deux).'],
    ['F4', 'Briques du groupe : CameraPark, Parkimeter, Your Parking Space, Parkopedia, billettique Flowbird.'],
    ['F5', 'Présence industrielle et de service en France : Besançon, 6 agences.'],
  ],
  faiblesses: [
    ['Fa1', "Frais payé par l'usager : modèle retenu par 10 à 20 % des opérateurs seulement."],
    ['Fa2', 'Offre dispersée entre plusieurs marques et apps du même groupe.'],
    ['Fa3', "Ni réservation ni partage dans l'app EasyPark en France (H) ; pas de covoiturage."],
    ['Fa4', 'Moyens du projet limités : 10 000 €, 1 000 contacts, CRM sur tableur.'],
  ],
  opportunites: [
    ['O1', 'La voirie se renchérit et se contraint : tarifs selon le poids à Paris, ZFE maintenues.'],
    ['O2', "19,3 M d'actifs vont travailler en voiture ; forfait mobilités durables jusqu'à 600 €/an."],
    ['O3', 'Les parkings passent au sans-ticket : Saemes vise tous ses parkings publics en 2026.'],
    ['O4', 'Les collectivités financent encore le covoiturage via le Fonds vert.'],
    ['O5', 'Des places vacantes en masse chez bailleurs et foncières : Yespark Group en loue 100 000.'],
  ],
  menaces: [
    ['M1', 'PayByPhone domine la voirie (60 à 70 %) ; les villes ajoutent facilement une app.'],
    ['M2', 'Concurrents spécialisés financés : Onepark (40 M€ levés), Yespark Group.'],
    ['M3', 'Covoiturage subventionné, dominé par BlaBlaCar ; −10 % de trajets en 2025.'],
    ['M4', "Les exploitants contrôlent l'inventaire et vendent en direct."],
    ['M5', 'Règles instables (ZFE, CEE) et RGPD sur plaques et géolocalisation.'],
  ],
}

export const enjeux = [
  { n: 1, title: 'Vendre de la réservation en parking aux clients actuels, là où la voirie se renchérit', cross: ['F2', 'F4', 'O1', 'O3'], axe: 'Parking', decide: 'Les villes et exploitants du pilote' },
  { n: 2, title: "Ajouter des revenus payés par les exploitants et les propriétaires, pas seulement par l'usager", cross: ['Fa1', 'O3', 'O5'], axe: 'Parking, Sharing', decide: 'La commission acceptable pour un exploitant' },
  { n: 3, title: "Se distinguer de Onepark et Yespark par l'intégration (voirie, parking, place louée dans une seule app)", cross: ['F1', 'F4', 'M2'], axe: 'Parking, Sharing', decide: 'Bâtir, s’appuyer sur Your Parking Space, ou s’associer' },
  { n: 4, title: 'Pas de covoiturage autonome face à BlaBlaCar : tester une brique domicile-travail avec parking relais, financée', cross: ['Fa3', 'M3', 'O2', 'O4'], axe: 'Mobility', decide: 'Le partenaire payeur du test' },
  { n: 5, title: "Obtenir du groupe l'intégration des briques existantes dans l'app EasyPark France", cross: ['F4', 'Fa2'], axe: 'Les trois', decide: "Le sponsor chez Arrive et le calendrier" },
]

export const lectureAxes = [
  { axe: 'Smart Parking', priority: 1, verdict: 'Lancer en premier', diag: 'Clients déjà en voiture, voirie qui se renchérit ; la réservation s’appuie sur le nombre de places libres que gère déjà chaque parking.', atout: 'Parkimeter, CameraPark, relations exploitants', risque: 'Systèmes de places libres non connectés, ou exploitants qui préfèrent Onepark' },
  { axe: 'Smart Sharing', priority: 2, verdict: 'Commencer par les entreprises, hôtels et gestionnaires', diag: 'Demande réelle (Yespark Group loue 100 000 places), mais un leader installé.', atout: 'Your Parking Space, savoir-faire au Royaume-Uni', risque: 'Trop peu de places par quartier pour intéresser les locataires' },
  { axe: 'Smart Mobility', priority: 3, verdict: 'Test ciblé avec un employeur ou une collectivité', diag: 'Grand besoin domicile-travail, mais marché subventionné, concentré et en recul en 2025.', atout: 'Billettique Flowbird, offre entreprises, lien avec les parkings relais', risque: 'Revenu par trajet trop faible sans financeur' },
]

export const implications = [
  { title: '0,50 € par trajet, c’est peu', text: 'Même avec 10 % des 10,3 M de trajets par plateforme de 2025, le revenu serait d’environ 520 000 € par an. Smart Mobility ne tient que par l’abonnement professionnel.' },
  { title: '300 € par mois = 3 600 € par an et par client', text: 'Pour 1 M€ de revenu annuel, il faudrait environ 280 entreprises clientes. Le forfait mobilités durables est un argument, pas une garantie de paiement.' },
  { title: '15 % sur le partage = le niveau du frais EasyPark actuel', text: 'Les taux de Yespark et Onepark ne sont pas publics : à relever à l’étape 2.' },
  { title: 'Smart Parking n’a pas d’hypothèse de revenu', text: 'Frais automobiliste, commission exploitant, ou les deux : décision à prendre avant l’étape 8.' },
]

export const simulateur = {
  trips2025: 10337704,
  perTrip: 0.5,
  monthlySub: 300,
}

export const donneesManquantes = [
  { n: 1, data: "Utilisateurs actifs mensuels d'EasyPark en France, par ville", why: 'Taille de la base à qui vendre les trois axes', how: "Extraction de l'outil d'analyse interne", who: 'Data / BI EasyPark France', step: '4, 10' },
  { n: 2, data: 'Sessions par utilisateur, durée et montant moyens', why: 'Fréquence d’achat et panier', how: 'Même extraction, 12 derniers mois', who: 'Data / BI', step: '10' },
  { n: 3, data: "Part des sessions en voirie à moins de 300 m d'un parking", why: 'Potentiel de report vers la réservation', how: 'Croiser les transactions avec Parkopedia', who: 'Data, Parkopedia', step: '3, 10' },
  { n: 4, data: 'Contrats villes EasyPark et Flowbird : échéances, qui paie', why: 'Villes où lancer un pilote sans risque', how: 'Revue du portefeuille de contrats', who: 'Commercial villes, juridique', step: '9, 12' },
  { n: 5, data: 'Parkimeter en France : parkings, commission, volumes', why: 'Base de départ de Smart Parking', how: 'Note de Parkimeter à la direction', who: 'Parkimeter', step: '7, 8' },
  { n: 6, data: 'Your Parking Space : commission, délai de remplissage, coût d’acquisition', why: 'Repères pour Smart Sharing', how: 'Partage d’indicateurs dans le groupe', who: 'Your Parking Space (UK)', step: '8, 10' },
  { n: 7, data: 'API de places libres des exploitants (lecture et mise à jour)', why: 'Faisabilité de la réservation automatique et de la mise à jour des places libres', how: '10 entretiens exploitants, questionnaire technique', who: 'Exploitants partenaires', step: '7' },
  { n: 8, data: 'Intérêt des automobilistes pour réserver, louer, covoiturer', why: 'Taille du besoin et ordre des axes', how: 'Enquête dans l’app, 400 répondants minimum (±5 points)', who: 'Marketing', step: '4, 5' },
  { n: 9, data: 'Disposition des entreprises à payer 300 € par mois', why: "Validité de l'abonnement Smart Mobility", how: '20 entretiens parmi les 1 000 contacts du CRM', who: 'Commercial B2B', step: '4, 10' },
  { n: 10, data: 'Commissions de Onepark, Yespark et Zenpark', why: 'Prix de marché pour les 15 %', how: 'Entretiens propriétaires, conditions générales', who: 'Équipe projet', step: '2, 10' },
]

export const sources = [
  { label: 'Autorité de la concurrence, décision 24-DCC-247 du 20 novembre 2024 (EasyPark / Flowbird)', url: S.adlc },
  { label: 'Arrive, « EasyPark Group unifies under Arrive », 12 juin 2025', url: S.arriveUnify },
  { label: 'Arrive, page « About us » et historique', url: S.arriveAbout },
  { label: "Arrive, bilan 2024 d'EasyPark Group", url: S.review2024 },
  { label: 'Arrive, rachat de Parkopedia, 12 février 2025', url: S.parkopedia },
  { label: 'EasyPark France, gouvernance et implantation', url: S.epHeritage },
  { label: "EasyPark France, page d'accueil", url: S.epHome },
  { label: 'EasyPark France, tarifs', url: S.epPricing },
  { label: 'Saemes, alerte presse du 20 novembre 2025', url: S.saemes },
  { label: "YourParkingSpace, page d'accueil", url: S.yps },
  { label: 'data.gouv.fr, trajets en covoiturage intermédié', url: S.covoitData },
  { label: 'data.gouv.fr, mode de transport domicile-travail (Insee)', url: S.modesData },
  { label: 'Ministère de la Transition écologique, covoiturage en France', url: S.ministere },
  { label: 'Reporterre, BlaBlaCar et la fin des primes, 12 février 2025', url: S.reporterre },
  { label: 'BlaBlaCar, clôture du rachat de Klaxit, 11 avril 2023', url: S.blablacar },
  { label: 'TechCrunch, BlaBlaCar et Klaxit, 15 mars 2023', url: S.techcrunch },
  { label: 'Maddyness, levée de Onepark, 28 octobre 2025', url: S.onepark },
  { label: 'Yespark, un an de Yespark Group', url: S.yespark },
  { label: 'Banque des Territoires, ZFE et Conseil constitutionnel, 22 mai 2026', url: S.zfe },
  { label: 'SDES, 40 millions de voitures au 1er janvier 2026', url: S.sdesParc },
  { label: 'SDES, panorama français des gaz à effet de serre', url: S.sdesGes },
  { label: 'Service-Public, frais de transport domicile-travail', url: S.fmd },
  { label: 'Paris.fr, réforme du stationnement 2024', url: S.paris },
]
