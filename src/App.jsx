import Sidebar from './components/layout/Sidebar'
import PhaseBlock from './components/layout/PhaseBlock'
import { phases } from './data/project'

import Hero from './sections/Hero'
import Vision from './sections/Vision'

import Diagnostic from './sections/phase1/Diagnostic'
import Benchmark from './sections/phase1/Benchmark'
import MappingV1 from './sections/phase1/MappingV1'
import USP from './sections/phase1/USP'
import ZMOT from './sections/phase1/ZMOT'
import ConclusionV1 from './sections/phase1/ConclusionV1'
import JourneyV1 from './sections/phase1/JourneyV1'

import Pivot from './sections/phase2/Pivot'
import Engine from './sections/phase2/Engine'
import JourneyV2 from './sections/phase2/JourneyV2'
import MappingV2 from './sections/phase2/MappingV2'
import MVP from './sections/phase2/MVP'
import ABTests from './sections/phase2/ABTests'
import PitchDeck from './sections/phase2/PitchDeck'

import Channels from './sections/phase3/Channels'
import PushPull from './sections/phase3/PushPull'
import SEO from './sections/phase3/SEO'
import Campaigns from './sections/phase3/Campaigns'
import Gantt from './sections/phase3/Gantt'

import Budget from './sections/phase4/Budget'
import Monetization from './sections/phase4/Monetization'
import CLV from './sections/phase4/CLV'
import ROI from './sections/phase4/ROI'
import BreakEven from './sections/phase4/BreakEven'
import Forecast from './sections/phase4/Forecast'

export default function App() {
  const [p1, p2, p3, p4] = phases
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl overflow-x-clip px-4 sm:px-8 lg:px-12">
          <Hero />

          <PhaseBlock phase={p1} intro="Diagnostic du marché, benchmark, positionnement, recherche en ligne de la cible et parcours client.">
            <Diagnostic />
            <Benchmark />
            <MappingV1 />
            <USP />
            <ZMOT />
            <ConclusionV1 />
            <JourneyV1 />
          </PhaseBlock>

          <PhaseBlock phase={p2} intro="Le pivot vers l'IA prédictive : Smart Allocation Engine™, nouveau parcours, MVP, tests et pitch investisseur.">
            <Pivot />
            <Engine />
            <JourneyV2 />
            <MappingV2 />
            <MVP />
            <ABTests />
            <PitchDeck />
          </PhaseBlock>

          <PhaseBlock phase={p3} intro="Transformer l'intérêt généré par le pitch V2 en utilisateurs, partenaires et clients B2B.">
            <Channels />
            <PushPull />
            <SEO />
            <Campaigns />
            <Gantt />
          </PhaseBlock>

          <PhaseBlock phase={p4} intro="Scénario d'amorçage sur 12 mois : budget, modèle de revenus, CLV, ROI, point mort et prévisions.">
            <Budget />
            <Monetization />
            <CLV />
            <ROI />
            <BreakEven />
            <Forecast />
          </PhaseBlock>

          <Vision />

          <footer className="border-t border-white/[0.06] py-8 text-center text-sm text-slate-500">
            Smart Parking AI — The Operating System for Parking · Plan stratégique : diagnostic, pitch, communication digitale et prévisions financières.
          </footer>
        </div>
      </main>
    </div>
  )
}
