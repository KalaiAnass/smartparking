import SmartSidebar from './SmartSidebar'
import { Hero, Synthese, Methode } from './sections/Overview'
import { Entreprise, Modele, Partenaires } from './sections/Entreprise'
import { Audit, UX, Technique } from './sections/Application'
import { Marche, Pestel } from './sections/Externe'
import { Swot, Ecologie, Ecarts, Manques, Sources } from './sections/Conclusions'
import { E2Synthese, Tendances, Concurrents, BenchParking, BenchSharing, Mappings, Positionnement, E2Manques } from './sections/Benchmark'
import { asOf } from '../data/dossier'

function StepBanner({ n, title }) {
  return (
    <div className="mt-16 flex items-center gap-4 border-t border-white/[0.08] pt-10">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-ink-900 shadow-glow">{n}</span>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-glow/80">Étape {n}</div>
        <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</div>
      </div>
    </div>
  )
}

export default function SmartApp() {
  return (
    <div className="min-h-screen">
      <SmartSidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl overflow-x-clip px-4 sm:px-8 lg:px-12">
          <Hero />
          <Methode />

          <StepBanner n={1} title="Diagnostic d'EasyPark et audit de son application" />
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

          <StepBanner n={2} title="Étude de marché et benchmark concurrentiel" />
          <E2Synthese />
          <Tendances />
          <Concurrents />
          <BenchParking />
          <BenchSharing />
          <Mappings />
          <Positionnement />
          <E2Manques />

          <Sources />
          <footer className="space-y-2 border-t border-white/[0.06] py-8 text-center text-sm text-slate-500">
            <p>EasyPark — Smart Parking et Smart Sharing · Dossier stratégique · Étapes 1 et 2 · Mise à jour le {asOf}</p>
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
