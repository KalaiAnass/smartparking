import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calculator } from 'lucide-react'
import { swot, enjeux, lectureAxes, implications, simulateur, donneesManquantes, sources, asOf } from '../../data/smart'
import { Section, Card, Reveal, fmtEUR, fmtNum } from '../../components/ui/primitives'
import { Proof, TableWrap, Th, Td } from '../ui'

const quadrants = [
  { key: 'forces', title: 'Forces', tone: 'border-mint-glow/25', badge: 'text-mint-glow' },
  { key: 'faiblesses', title: 'Faiblesses', tone: 'border-rose-400/25', badge: 'text-rose-300' },
  { key: 'opportunites', title: 'Opportunités', tone: 'border-cyan-glow/25', badge: 'text-cyan-glow' },
  { key: 'menaces', title: 'Menaces', tone: 'border-amber-300/25', badge: 'text-amber-200' },
]

export function Swot() {
  return (
    <Section
      id="swot"
      eyebrow="Conclusions · SWOT"
      title="Des forces solides, un revenu fondé sur un modèle que la plupart des villes n'ont pas choisi"
      subtitle="Chaque élément renvoie aux faits sourcés des sections précédentes. Les enjeux croisent le SWOT (méthode TOWS)."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((q, qi) => (
          <Reveal key={q.key} delay={qi * 0.06}>
            <div className={`glass h-full border ${q.tone} p-5 sm:p-6`}>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">{q.title}</h3>
                <span className="text-[11px] uppercase tracking-wider text-slate-500">{qi < 2 ? 'Interne' : 'Externe'}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {swot[q.key].map(([code, text]) => (
                  <li key={code} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className={`w-8 shrink-0 font-mono text-xs font-semibold ${q.badge}`}>{code}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">
        Les cinq enjeux pour la direction <Proof code="H" className="ml-1 align-middle" />
      </h3>
      <div className="space-y-3">
        {enjeux.map((e, i) => (
          <Reveal key={e.n} delay={i * 0.05} y={14}>
            <Card className="grid gap-3 md:grid-cols-[auto_1fr_auto] md:items-center">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display font-bold text-ink-900">{e.n}</span>
              <div>
                <div className="font-semibold text-white">{e.title}</div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  {e.cross.map((c) => (
                    <span key={c} className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[11px] text-slate-300">
                      {c}
                    </span>
                  ))}
                  <span className="ml-1 text-xs text-slate-500">· Axe : {e.axe}</span>
                </div>
              </div>
              <div className="text-sm text-slate-400 md:max-w-[240px] md:text-right">
                <span className="text-xs uppercase tracking-wider text-slate-500">À décider</span>
                <div className="text-slate-300">{e.decide}</div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Simulator() {
  const [share, setShare] = useState(10)
  const [clients, setClients] = useState(50)
  const trips = (simulateur.trips2025 * share) / 100
  const tripRevenue = trips * simulateur.perTrip
  const subRevenue = clients * simulateur.monthlySub * 12
  const total = tripRevenue + subRevenue
  const subShare = total ? (subRevenue / total) * 100 : 0
  return (
    <Card hover={false} className="mt-10">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <Calculator className="h-5 w-5 text-cyan-glow" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Que rapportent les hypothèses de Smart Mobility ?</h3>
            <p className="text-sm text-slate-400">Simulation sur le marché 2025 : revenu brut annuel, sans coûts ni croissance.</p>
          </div>
        </div>
        <Proof code="H" />
      </div>
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <label className="block">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Part des trajets de covoiturage par plateforme captée</span>
              <span className="font-mono text-white">{share} %</span>
            </div>
            <input type="range" min={0} max={30} step={1} value={share} onChange={(e) => setShare(Number(e.target.value))} className="mt-2 w-full accent-cyan-400" />
            <div className="mt-1 text-xs text-slate-500">
              {fmtNum(trips)} trajets sur {fmtNum(simulateur.trips2025)} en 2025, à {fmtEUR(simulateur.perTrip, 2)} par trajet
            </div>
          </label>
          <label className="block">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Entreprises abonnées</span>
              <span className="font-mono text-white">{clients}</span>
            </div>
            <input type="range" min={0} max={500} step={10} value={clients} onChange={(e) => setClients(Number(e.target.value))} className="mt-2 w-full accent-cyan-400" />
            <div className="mt-1 text-xs text-slate-500">À {fmtEUR(simulateur.monthlySub)} par mois, soit {fmtEUR(simulateur.monthlySub * 12)} par an et par client</div>
          </label>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="text-xs text-slate-500">Commission par trajet</div>
              <div className="mt-1 font-display text-xl font-semibold tabular-nums text-slate-200">{fmtEUR(tripRevenue)}</div>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="text-xs text-slate-500">Abonnements pro</div>
              <div className="mt-1 font-display text-xl font-semibold tabular-nums text-cyan-glow">{fmtEUR(subRevenue)}</div>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-cyan-glow/20 bg-cyan-glow/[0.05] p-4">
            <div className="text-xs text-slate-400">Revenu brut annuel</div>
            <div className="mt-1 font-display text-3xl font-semibold tabular-nums text-white">{fmtEUR(total)}</div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div className="h-full bg-cyan-glow" animate={{ width: `${subShare}%` }} transition={{ duration: 0.4 }} />
            </div>
            <div className="mt-1.5 text-xs text-slate-500">Part des abonnements dans le revenu : {fmtNum(subShare)} %</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function Axes() {
  return (
    <Section
      id="axes"
      eyebrow="Conclusions · les trois axes"
      title="Smart Parking d'abord, Smart Sharing ensuite, Smart Mobility en test ciblé"
      subtitle="Un classement provisoire, à confirmer par l'analyse d'opportunités (étape 3) et le prévisionnel (étape 10)."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {lectureAxes.map((a, i) => (
          <Reveal key={a.axe} delay={i * 0.08}>
            <Card className={`relative h-full ${a.priority === 1 ? 'border-cyan-glow/30' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-semibold text-white">{a.axe}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${a.priority === 1 ? 'bg-brand-gradient text-ink-900' : 'bg-white/10 text-slate-200'}`}>Priorité {a.priority}</span>
              </div>
              <div className="mt-2 text-sm font-medium text-cyan-glow">{a.verdict}</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">Ce que dit le diagnostic</dt>
                  <dd className="mt-0.5 leading-relaxed text-slate-300">{a.diag}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">Atout interne</dt>
                  <dd className="mt-0.5 leading-relaxed text-slate-300">{a.atout}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">Risque principal</dt>
                  <dd className="mt-0.5 leading-relaxed text-slate-300">{a.risque}</dd>
                </div>
              </dl>
            </Card>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Ce que les hypothèses de départ impliquent</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {implications.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{m.title}</span>
                <Proof code="H" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Simulator />
    </Section>
  )
}

export function Donnees() {
  return (
    <Section
      id="donnees"
      eyebrow="Données manquantes"
      title="Dix données pour passer des hypothèses aux chiffres"
      subtitle="Les six premières existent déjà dans le groupe : il suffit de les demander. Elles serviront aux étapes indiquées."
    >
      <TableWrap minWidth={940}>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Donnée manquante</Th>
            <Th>Pourquoi elle compte</Th>
            <Th>Comment l'obtenir</Th>
            <Th>Qui la détient</Th>
            <Th>Étape</Th>
          </tr>
        </thead>
        <tbody>
          {donneesManquantes.map((d) => (
            <tr key={d.n} className="transition hover:bg-white/[0.02]">
              <Td className="font-mono text-cyan-glow">{d.n}</Td>
              <Td className="font-semibold text-white">{d.data}</Td>
              <Td>{d.why}</Td>
              <Td>{d.how}</Td>
              <Td className="text-slate-400">{d.who}</Td>
              <Td className="font-mono text-slate-400">{d.step}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </Section>
  )
}

export function Sources() {
  return (
    <Section id="sources" eyebrow="Sources" title="Pages consultées" subtitle={`Toutes les sources ont été ouvertes et vérifiées le ${asOf}.`}>
      <ol className="grid gap-2 md:grid-cols-2">
        {sources.map((s, i) => (
          <li key={s.url + s.label}>
            <a href={s.url} target="_blank" rel="noreferrer" className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-glow/30 hover:text-white">
              <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex-1">{s.label}</span>
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500 group-hover:text-cyan-glow" />
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
