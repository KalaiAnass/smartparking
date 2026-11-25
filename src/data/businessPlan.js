// Business plan sur 15 mois (12 + 3), selon les règles du cours :
// setup M1-M3, run à partir de M4, acquisition payante de M7 à M15,
// investissements amortis (logiciel 3 ans, matériel 5 ans), charges d'exploitation non amorties,
// seuil de rentabilité = mois où la marge brute cumulée dépasse la somme des investissements.
// Toutes les valeurs sont des hypothèses (H) ou des estimations (E), sauf mention (V).

export const MONTHS = 15

export const hyp = {
  tjm: 550, // €/jour, prix de marché d'un profil tech en France (fourchette 500-650 €) (H)
  dev: { fte: 4, jours: 60 }, // 4 personnes pendant 3 mois (H) ; réutilise paiement, plaque, express pay
  integration: { parkings: 3, cout: 8000 }, // liaison API avec 3 parkings pilotes (H)
  capteurs: { parPlace: 300, passerelle: 1500, guidage: 2000, places: 10 }, // matériel premium par parking (H)
  juridique: 15000, // CGU, RGPD (analyse d'impact), déclaration fiscale des plateformes (H)
  landing: 6000, // landing page et contenus GEO (H)
  run: { equipe: 16500, ventes: 11000, outils: 1200, organique: 1500 }, // €/mois à partir de M4 (H)
  paid: { prudent: 4000, central: 6000, ambitieux: 8000 }, // €/mois de M7 à M15 (H)
  abonnementMoyen: 550, // €/mois par parking partenaire (mix des 3 paliers) (H)
  premium: { prix: 1, placesParParking: 10 },
  sharing: { activation: 0.4, reservationsParPlace: 6, panier: 14, commission: 0.15 },
  variable: {
    paiementTaux: 0.015, paiementFixe: 0.25, // tarif public Stripe, cartes UE (V)
    supportSharing: 0.3, garantieSharing: 0.2, // € par réservation (H)
    premiumParResa: 0.15, // € par réservation premium (H)
    apiParPartenaire: 25, // € par mois (H)
    capteursParParking: 150, // maintenance, € par mois (H)
  },
}

export const paliers = [
  { name: 'Essentiel', cible: 'Hôtels, petits parkings privés', capacite: 'moins de 150 places', prix: 290 },
  { name: 'Standard', cible: 'Parkings privés, centres moyens', capacite: '150 à 500 places', prix: 590 },
  { name: 'Grand compte', cible: 'Centres commerciaux, gestionnaires', capacite: 'plus de 500 places', prix: 990 },
]

const base = {
  partenaires: [0, 0, 0, 3, 5, 8, 12, 16, 21, 26, 31, 36, 41, 46, 50],
  parkingsPremium: [0, 0, 0, 0, 2, 2, 2, 2, 5, 5, 5, 10, 10, 10, 10],
  placesSharing: [0, 0, 0, 50, 100, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050],
}

export const scenarios = {
  prudent: { label: 'Prudent', volume: 0.6, resaPremiumJour: 0.8, paid: hyp.paid.prudent },
  central: { label: 'Central', volume: 1, resaPremiumJour: 1.2, paid: hyp.paid.central },
  ambitieux: { label: 'Ambitieux', volume: 1.4, resaPremiumJour: 1.6, paid: hyp.paid.ambitieux },
}

export function compute(key, overrides = {}) {
  const sc = scenarios[key]
  const v = hyp.variable
  const abonnementMoyen = overrides.abonnementMoyen ?? hyp.abonnementMoyen
  const devTotal = hyp.dev.fte * hyp.dev.jours * hyp.tjm
  const capteursParking = hyp.capteurs.parPlace * hyp.capteurs.places + hyp.capteurs.passerelle + hyp.capteurs.guidage
  const rows = []
  let cumMarge = 0
  let cumInvest = 0
  let cumCash = 0
  let cumCA = 0
  let cumCouts = 0
  let capexLogiciel = 0
  const capteursInstalles = []
  for (let m = 1; m <= MONTHS; m++) {
    const i = m - 1
    const partenaires = Math.round(base.partenaires[i] * sc.volume)
    const parkingsPremium = base.parkingsPremium[i]
    const places = Math.round(base.placesSharing[i] * sc.volume)
    // Revenus
    const caAbonnements = partenaires * abonnementMoyen
    const resaPremium = Math.round(parkingsPremium * hyp.premium.placesParParking * sc.resaPremiumJour * 30)
    const caPremium = resaPremium * hyp.premium.prix
    const resaSharing = Math.round(places * hyp.sharing.activation * hyp.sharing.reservationsParPlace)
    const volumeSharing = resaSharing * hyp.sharing.panier
    const caSharing = volumeSharing * hyp.sharing.commission
    const ca = caAbonnements + caPremium + caSharing
    // Coûts variables
    const coutsVariables =
      resaSharing * (hyp.sharing.panier * v.paiementTaux + v.paiementFixe + v.supportSharing + v.garantieSharing) +
      resaPremium * v.premiumParResa +
      partenaires * v.apiParPartenaire +
      parkingsPremium * v.capteursParParking
    const margeBrute = ca - coutsVariables
    // Investissements (setup M1-M3 + capteurs à l'installation)
    let invLogiciel = 0
    let chargesSetup = 0
    if (m <= 3) {
      invLogiciel += devTotal / 3
      chargesSetup += hyp.juridique / 3
    }
    if (m >= 2 && m <= 3) {
      invLogiciel += (hyp.integration.parkings * hyp.integration.cout) / 2
      chargesSetup += hyp.landing / 2
    }
    const nouveauxPremium = parkingsPremium - (i > 0 ? base.parkingsPremium[i - 1] : 0)
    const invCapteurs = Math.max(0, nouveauxPremium) * capteursParking
    if (invCapteurs) capteursInstalles.push({ m, montant: invCapteurs })
    capexLogiciel += invLogiciel
    const investissement = invLogiciel + invCapteurs + chargesSetup
    // Charges fixes de run (à partir de M4) et paid (M7-M15)
    const run = m >= 4 ? hyp.run.equipe + hyp.run.ventes + hyp.run.outils + hyp.run.organique : 0
    const paid = m >= 7 ? sc.paid : 0
    const ebitda = margeBrute - run - paid - chargesSetup
    // Amortissements : logiciel sur 36 mois à partir de M4, capteurs sur 60 mois dès l'installation
    const amortLogiciel = m >= 4 ? capexLogiciel / 36 : 0
    const amortCapteurs = capteursInstalles.filter((c) => c.m <= m).reduce((s, c) => s + c.montant / 60, 0)
    const resultat = ebitda - amortLogiciel - amortCapteurs
    const cash = ebitda - invLogiciel - invCapteurs
    cumMarge += margeBrute
    cumInvest += investissement
    cumCash += cash
    cumCA += ca
    cumCouts += coutsVariables + run + paid + investissement
    rows.push({
      m, partenaires, parkingsPremium, places, resaSharing, resaPremium,
      caAbonnements, caPremium, caSharing, volumeSharing, ca,
      coutsVariables, margeBrute, run, paid, chargesSetup, invLogiciel, invCapteurs, investissement,
      ebitda, amort: amortLogiciel + amortCapteurs, resultat, cash,
      cumMarge, cumInvest, cumCash, cumCA,
    })
  }
  const last = rows.at(-1)
  // Seuil de rentabilité (règle du cours) : marge brute cumulée > investissements cumulés.
  let seuil = rows.find((r) => r.cumMarge >= r.cumInvest)?.m ?? null
  let projection = null
  if (!seuil) {
    // Projection au-delà de M15 : marge brute mensuelle de M15, sans croissance (prudent).
    const manque = last.cumInvest - last.cumMarge
    projection = MONTHS + Math.ceil(manque / last.margeBrute)
  }
  const paidTotal = rows.reduce((s, r) => s + r.paid, 0)
  const caB2cDepuisM7 = rows.filter((r) => r.m >= 7).reduce((s, r) => s + r.caSharing + r.caPremium, 0)
  const volumeB2cDepuisM7 = rows.filter((r) => r.m >= 7).reduce((s, r) => s + r.volumeSharing + r.caPremium, 0)
  const coutTotal = cumCouts
  return {
    rows,
    total: {
      ca: cumCA,
      margeBrute: last.cumMarge,
      investissements: last.cumInvest,
      tauxMarge: last.cumMarge / cumCA,
      coutTotal,
      roi: (cumCA - coutTotal) / coutTotal,
      cashCumule: last.cumCash,
      seuil,
      projection,
      paidTotal,
      // ROAS : la moitié des ventes B2C de M7 à M15 est attribuée au paid (H)
      roasRevenu: (0.5 * caB2cDepuisM7) / paidTotal,
      roasVolume: (0.5 * volumeB2cDepuisM7) / paidTotal,
      chargesFixesMensuelles: hyp.run.equipe + hyp.run.ventes + hyp.run.outils + hyp.run.organique + scenarios[key].paid,
      tauxMargeM15: last.margeBrute / last.ca,
    },
  }
}

// CAC et CLV (scénario central) — hypothèses (H)
export const unitEconomics = {
  partenaire: {
    cac: (hyp.run.ventes * 12 + 2000 * 9) / 50, // ventes M4-M15 + LinkedIn 2 000 €/mois M7-M15, pour 50 partenaires
    margeMensuelle: hyp.abonnementMoyen - hyp.variable.apiParPartenaire,
    churnMensuel: 0.02,
  },
  locataire: {
    cac: (4000 * 9) / 2000, // paid B2C 4 000 €/mois sur 9 mois, 2 000 nouveaux locataires (H)
    reservationsParMois: 2,
    margeParResa:
      hyp.sharing.panier * hyp.sharing.commission -
      (hyp.sharing.panier * hyp.variable.paiementTaux + hyp.variable.paiementFixe + hyp.variable.supportSharing + hyp.variable.garantieSharing),
    dureeMois: 12,
  },
}
