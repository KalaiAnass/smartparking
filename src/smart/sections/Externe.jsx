import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Landmark, Coins, Users, Cpu, Leaf, Scale } from 'lucide-react'
import { CartesianGrid, LabelList, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { pestel, covoiturage, marches, porter, attractivite, S } from '../../data/smart'
import { Section, Card, ChartTooltip, Tabs, fmtNum } from '../../components/ui/primitives'
import { Proof, Sens, SrcLink } from '../ui'

const dimIcons = { Politique: Landmark, Économique: Coins, Social: Users, Technologique: Cpu, Environnemental: Leaf, Légal: Scale }
const dims = ['Tous', ...Object.keys(dimIcons)]

const millions = (v) => `${fmtNum(v / 1e6, 1)} M`
const pct = (a, b) => Math.round((a / b - 1) * 100)
const signed = (n) => (n > 0 ? `+${n} %` : `−${Math.abs(n)} %`)

function CovoiturageChart() {
  const last = covoiturage.at(-1)
  const prev = covoiturage.at(-2)
  const total = (r) => r.horsIdf + r.idf
  const stats = [
    { label: 'Hors Île-de-France', value: signed(pct(last.horsIdf, prev.horsIdf)), tone: 'text-cyan-glow' },
    { label: 'Île-de-France', value: signed(pct(last.idf, prev.idf)), tone: 'text-slate-200' },
    { label: 'France métropolitaine', value: signed(pct(total(last), total(prev))), tone: 'text-white' },
  ]
  return (
    <Card hover={false} className="mt-12">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="max-w-2xl">
          <h3 className="font-display text-xl font-semibold text-white">Le covoiturage par plateforme recule de 10 % en 2025</h3>
          <p className="mt-1 text-sm text-slate-400">Trajets par an enregistrés au registre de preuve de covoiturage, France métropolitaine. Le recul vient entièrement des régions hors Île-de-France.</p>
        </div>
        <Proof code="F" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-4">
        <div className="h-72 lg:col-span-3">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={covoiturage} margin={{ top: 28, right: 24, bottom: 4, left: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="year" type="number" domain={[2022, 2025]} ticks={[2022, 2023, 2024, 2025]} tickFormatter={String} stroke="#64748b" tickLine={false} axisLine={{ stroke: 'rgba(255,255,255,0.15)' }} padding={{ left: 24, right: 24 }} />
              <YAxis tickFormatter={(v) => `${v / 1e6} M`} stroke="#64748b" tickLine={false} axisLine={false} width={44} domain={[0, 9e6]} ticks={[0, 3e6, 6e6, 9e6]} />
              <Tooltip content={<ChartTooltip formatter={(v) => `${fmtNum(v)} trajets`} />} />
              <ReferenceLine x={2024.5} stroke="#94a3b8" strokeDasharray="4 4" label={{ value: 'Fin de la prime de 100 €', position: 'insideTopLeft', fill: '#94a3b8', fontSize: 11, dy: -22, dx: 4 }} />
              <Line type="monotone" dataKey="horsIdf" name="Hors Île-de-France" stroke="#00D1FF" strokeWidth={3} dot={{ r: 4, fill: '#00D1FF' }} isAnimationActive={false}>
                <LabelList dataKey="horsIdf" position="top" offset={10} formatter={millions} fill="#e2e8f0" fontSize={11} />
              </Line>
              <Line type="monotone" dataKey="idf" name="Île-de-France" stroke="#94a3b8" strokeWidth={2} dot={{ r: 3.5, fill: '#94a3b8' }} isAnimationActive={false}>
                <LabelList dataKey="idf" position="bottom" offset={10} formatter={millions} fill="#94a3b8" fontSize={11} />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <div className="text-xs text-slate-500">{s.label}, 2025 vs 2024</div>
              <div className={`mt-1 font-display text-2xl font-semibold ${s.tone}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        <Proof code="H" className="mr-2 align-middle" />
        Que la fin de la prime au 1er janvier 2025 en soit la cause reste une hypothèse, à tester à l'étape 2. Pour Smart Mobility, il faudrait viser d'abord les territoires où la demande tient sans prime.
      </p>
      <div className="mt-2">
        <SrcLink href={S.covoitData}>data.gouv.fr, fichier national mis à jour le 4 novembre 2026 · Île-de-France = métropole moins hors Île-de-France</SrcLink>
      </div>
    </Card>
  )
}

export function Pestel() {
  const [dim, setDim] = useState('Tous')
  const items = useMemo(() => (dim === 'Tous' ? pestel : pestel.filter((p) => p.dim === dim)), [dim])
  return (
    <Section
      id="pestel"
      eyebrow="Diagnostic externe · 1"
      title="Un environnement porteur pour réserver et partager, incertain pour covoiturer"
      subtitle="La voiture reste le mode dominant : 68,9 % des actifs l'utilisent pour aller travailler. Mais le covoiturage du quotidien a reculé en 2025, l'année où la prime nationale a disparu."
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
                    <Proof code="F" className="mr-1.5 align-middle" />
                    {p.fact}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    <Proof code="H" className="mr-1.5 align-middle" />
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
      <CovoiturageChart />
    </Section>
  )
}

const levelColor = { 1: 'bg-mint-glow', 2: 'bg-amber-300', 3: 'bg-rose-400', 4: 'bg-rose-500' }

function Intensity({ level }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={`h-1.5 w-3 rounded-full ${i <= level ? levelColor[level] : 'bg-white/10'}`} />
      ))}
    </span>
  )
}

const attrStyle = {
  1: 'border-rose-400/30 bg-rose-400/10 text-rose-200',
  2: 'border-amber-300/30 bg-amber-300/10 text-amber-100',
  3: 'border-mint-glow/30 bg-mint-glow/10 text-mint-glow',
}

export function Porter() {
  return (
    <Section
      id="porter"
      eyebrow="Diagnostic externe · 2"
      title="La réservation en parking est le marché le plus accessible"
      subtitle="Les quatre marchés n'ont pas la même attractivité. La location de places est attractive mais dominée par Yespark Group. Le covoiturage domicile-travail est le moins attractif pour un nouvel entrant."
    >
      <div className="glass overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm" style={{ minWidth: 1000 }}>
          <thead>
            <tr>
              <th className="border-b border-white/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Force</th>
              {marches.map((m) => (
                <th key={m.id} className={`border-b border-white/10 px-4 py-3 ${m.id === 'parking' ? 'bg-cyan-glow/[0.05]' : ''}`}>
                  <div className="text-sm font-semibold text-white">{m.label}</div>
                  <div className="text-[11px] font-normal text-slate-500">{m.sub}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {porter.map((row) => (
              <tr key={row.force}>
                <td className="border-b border-white/[0.05] px-4 py-4 align-top font-semibold text-white">{row.force}</td>
                {marches.map((m) => {
                  const c = row.cells[m.id]
                  return (
                    <td key={m.id} className={`border-b border-white/[0.05] px-4 py-4 align-top ${m.id === 'parking' ? 'bg-cyan-glow/[0.03]' : ''}`}>
                      <div className="flex items-center gap-2">
                        <Intensity level={c.level} />
                        <span className="text-xs font-semibold text-slate-200">{c.label}</span>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{c.text}</p>
                    </td>
                  )
                })}
              </tr>
            ))}
            <tr>
              <td className="px-4 py-4 align-top font-semibold text-white">
                Attractivité pour EasyPark <Proof code="H" className="ml-1 align-middle" />
              </td>
              {marches.map((m) => {
                const a = attractivite[m.id]
                return (
                  <td key={m.id} className={`px-4 py-4 align-top ${m.id === 'parking' ? 'bg-cyan-glow/[0.05]' : ''}`}>
                    <div className={`rounded-xl border px-3 py-2 text-[13px] leading-relaxed ${attrStyle[a.score]}`}>{a.text}</div>
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="text-xs text-slate-500">Intensité de la force : plus la barre est longue et rouge, plus la pression est forte.</span>
        <SrcLink href={S.adlc}>Autorité de la concurrence</SrcLink>
        <SrcLink href={S.onepark}>Onepark</SrcLink>
        <SrcLink href={S.yespark}>Yespark Group</SrcLink>
        <SrcLink href={S.techcrunch}>Klaxit</SrcLink>
        <SrcLink href={S.blablacar}>BlaBlaCar</SrcLink>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300">
        La force la plus déterminante est le pouvoir des fournisseurs de places. Pour Smart Parking comme pour Smart Sharing, EasyPark ne vend que l'inventaire qu'exploitants et propriétaires acceptent de lui confier. Le premier chantier commercial sera donc côté offre, pas côté automobilistes.
      </p>
    </Section>
  )
}
