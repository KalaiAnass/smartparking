import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Landmark, Coins, Users, Cpu, Leaf, Scale } from 'lucide-react'
import { marcheIndicateurs, segmentsMarche, tendances, pestel } from '../../data/dossier'
import { Section, Card, Reveal, Tabs } from '../../components/ui/primitives'
import { Proof, Sens, SrcLink, SubTitle, Note } from '../ui'

function MarketMap() {
  return (
    <Card hover={false} className="mt-10">
      <h3 className="font-display text-lg font-semibold text-white">EasyPark est fort en voirie, absent des deux marchés visés par les axes</h3>
      <p className="mt-1 text-sm text-slate-400">Les quatre marchés du stationnement en France, leurs acteurs et la place d'EasyPark.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {segmentsMarche.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <div className="font-display text-base font-semibold text-white">{s.name}</div>
              <div className="mt-2 text-sm text-slate-300">{s.metric}</div>
              <div className="my-3 h-px bg-white/[0.08]" />
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Acteurs</div>
              <ul className="mt-1.5 flex-1 space-y-1 text-sm text-slate-300">
                {s.actors.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div
                className={`mt-4 rounded-xl px-3 py-2 text-center text-xs font-semibold ${
                  s.now ? 'border-2 border-cyan-glow/70 bg-cyan-glow/10 text-white' : 'border border-dashed border-cyan-glow/60 text-cyan-glow'
                }`}
              >
                {s.status}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-4 rounded border-2 border-cyan-glow/70 bg-cyan-glow/10" /> Présence actuelle d'EasyPark
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-4 rounded border border-dashed border-cyan-glow/60" /> Cible des axes Smart Parking et Smart Sharing
        </span>
      </div>
    </Card>
  )
}

export function Marche() {
  return (
    <Section
      id="marche"
      eyebrow="1.7 · Marché français du stationnement"
      title="Quatre marchés distincts ; les deux axes visent ceux où EasyPark est absent"
      subtitle="EasyPark est solidement installé en voirie et entre dans les parkings à barrière avec express pay. Il est absent de la réservation et de la location de places, où Onepark et Yespark Group sont déjà installés."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marcheIndicateurs.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{m.label}</span>
                <Proof code={m.proof} />
              </div>
              <div className="mt-2 font-display text-3xl font-semibold text-white">{m.value}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{m.text}</p>
              <div className="mt-2">
                <SrcLink href={m.src} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <MarketMap />
      <SubTitle>Tendances à retenir</SubTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {tendances.map((t) => (
          <Card key={t.title}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-white">{t.title}</span>
              <Proof code="V" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.text}</p>
            <div className="mt-2">
              <SrcLink href={t.src} />
            </div>
          </Card>
        ))}
      </div>
      <Note code="R">Les tailles précises des marchés de la réservation et de la location de places ne sont pas publiques. Elles seront estimées à l'étape 2, à partir des volumes déclarés par les acteurs.</Note>
    </Section>
  )
}

const dimIcons = { Politique: Landmark, Économique: Coins, Social: Users, Technologique: Cpu, Environnemental: Leaf, Légal: Scale }
const dims = ['Tous', ...Object.keys(dimIcons)]

export function Pestel() {
  const [dim, setDim] = useState('Tous')
  const items = useMemo(() => (dim === 'Tous' ? pestel : pestel.filter((p) => p.dim === dim)), [dim])
  return (
    <Section
      id="pestel"
      eyebrow="1.8 · Analyse PESTEL"
      title="Un environnement favorable aux deux axes ; des contraintes surtout juridiques"
      subtitle="L'environnement pousse vers moins de voitures en voirie et plus de stationnement en ouvrage. Les contraintes les plus lourdes : données de plaques pour Smart Parking, obligations fiscales des plateformes pour Smart Sharing."
    >
      <div className="-mx-1 mb-6 overflow-x-auto px-1 pb-1">
        <Tabs tabs={dims.map((d) => ({ value: d, label: d }))} value={dim} onChange={setDim} />
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((p) => {
            const Ico = dimIcons[p.dim]
            return (
              <motion.div key={p.fact} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }}>
                <Card className="flex h-full flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                      <Ico className="h-4 w-4 text-cyan-glow" /> {p.dim}
                    </span>
                    <Sens value={p.sens} />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    <Proof code="V" className="mr-1.5 align-middle" />
                    {p.fact}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    <Proof code="E" className="mr-1.5 align-middle" />
                    {p.effect}
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="chip">{p.axe}</span>
                    <SrcLink href={p.src} />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
