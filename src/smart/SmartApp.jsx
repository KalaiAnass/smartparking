import { useEffect } from 'react'
import SmartSidebar from './SmartSidebar'
import { Hero, Synthese, Methode } from './sections/Overview'
import { Entreprise, Modele, Partenaires } from './sections/Entreprise'
import { Audit, UX, Technique } from './sections/Application'
import { Marche, Pestel } from './sections/Externe'
import { Swot, Ecologie, Ecarts, Manques, Sources } from './sections/Conclusions'
import { E2Synthese, Tendances, Concurrents, BenchParking, BenchSharing, Mappings, Positionnement, E2Manques } from './sections/Benchmark'
import { Minute, Etape1, Etape2, Etape3, Etape4, Etape5, Etape6, Etape7, Etape8, Etape9, Etape10 } from './sections/Etapes'
import { asOf } from '../data/dossier'

function Detail() {
  return (
    <section id="detail" data-section="detail" className="scroll-mt-24 py-10">
      <details className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
        <summary className="cursor-pointer font-display text-xl font-semibold text-white">
          Annexe : détail complet des étapes 1 et 2 <span className="text-sm font-normal text-slate-400">(cliquer pour ouvrir)</span>
        </summary>
        <div className="mt-4">
          <Synthese />
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
          <E2Synthese />
          <Tendances />
          <Concurrents />
          <BenchParking />
          <BenchSharing />
          <Mappings />
          <Positionnement />
          <E2Manques />
        </div>
      </details>
    </section>
  )
}

export default function SmartApp() {
  // Un lien vers une section (ex. #etape-8) fait défiler jusqu'à elle une fois la page affichée.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView(), 300)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="min-h-screen">
      <SmartSidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl overflow-x-clip px-4 sm:px-8 lg:px-12">
          <Hero />
          <Minute />
          <Etape1 />
          <Etape2 />
          <Etape3 />
          <Etape4 />
          <Etape5 />
          <Etape6 />
          <Etape7 />
          <Etape8 />
          <Etape9 />
          <Etape10 />
          <Methode />
          <Detail />
          <Sources />
          <footer className="space-y-2 border-t border-white/[0.06] py-8 text-center text-sm text-slate-500">
            <p>EasyPark — Smart Parking et Smart Sharing · Dossier stratégique en 10 étapes · Mise à jour le {asOf}</p>
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
