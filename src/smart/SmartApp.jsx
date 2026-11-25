import SmartSidebar from './SmartSidebar'
import { Hero, Synthese, Methode } from './sections/Overview'
import { Entreprise, Modele, Partenaires } from './sections/Entreprise'
import { Audit, UX, Technique } from './sections/Application'
import { Marche, Pestel } from './sections/Externe'
import { Swot, Ecologie, Ecarts, Manques, Sources } from './sections/Conclusions'
import { asOf } from '../data/dossier'

export default function SmartApp() {
  return (
    <div className="min-h-screen">
      <SmartSidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl overflow-x-clip px-4 sm:px-8 lg:px-12">
          <Hero />
          <Synthese />
          <Methode />
          <Entreprise />
          <Modele />
          <Partenaires />
          <Audit />
          <UX />
          <Technique />
          <Marche />
          <Pestel />
          <Swot />
          <Ecologie />
          <Ecarts />
          <Manques />
          <Sources />
          <footer className="space-y-2 border-t border-white/[0.06] py-8 text-center text-sm text-slate-500">
            <p>EasyPark — Smart Parking et Smart Sharing · Dossier stratégique · Étape 1 : diagnostic · Mise à jour le {asOf}</p>
            <p className="text-xs">
              Projet académique, non officiel : il n'engage ni EasyPark ni Arrive et n'utilise aucune donnée interne. ·{' '}
              <a href="?version=pitch-v1" className="underline decoration-white/20 underline-offset-2 hover:text-cyan-glow">
                Voir l'archive du pitch Smart Parking AI (V1)
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
