import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts'
import { AlertTriangle, CheckCircle2, Target, Hand, Smile, ArrowRight, Building2 } from 'lucide-react'
import { Section, Card, Reveal, Quote } from '../../components/ui/primitives'
import {
  personaThomas, journeyV1, idealScenario, personaSophie, journeyB2B, momentsOfTruth, journeyKpis, classicPath, smartPath, finalPromiseV1,
} from '../../data/project'

function EmotionTip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/95 px-3.5 py-2.5 text-sm shadow-xl">
      <div className="font-semibold text-white">{d.idx}. {d.step}</div>
      <div className="text-mint-glow">{d.emotion}</div>
    </div>
  )
}

function Timeline() {
  const [sel, setSel] = useState(3)
  const s = journeyV1[sel]
  const data = journeyV1.map((j, i) => ({ ...j, idx: i + 1 }))
  return (
    <>
      <Card hover={false} className="p-4 sm:p-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-semibold text-white">Courbe émotionnelle du parcours</div>
          <div className="text-xs text-slate-500">Cliquez sur une étape</div>
        </div>
        <div className="h-48">
          <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 16, right: 16, left: -18, bottom: 0 }} onClick={(e) => e?.activeTooltipIndex !== undefined && setSel(e.activeTooltipIndex)}>
              <defs>
                <linearGradient id="emo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00FFA3" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#00FFA3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="idx" stroke="#64748b" tickLine={false} axisLine={false} />
              <YAxis domain={[30, 100]} stroke="#64748b" tickLine={false} axisLine={false} ticks={[50, 75, 100]} />
              <Tooltip content={<EmotionTip />} cursor={{ stroke: 'rgba(255,255,255,0.15)' }} />
              <Area type="monotone" dataKey="score" stroke="#00FFA3" strokeWidth={2.5} fill="url(#emo)" dot={{ r: 4, fill: '#0B1020', stroke: '#00FFA3', strokeWidth: 2 }} activeDot={{ r: 6 }} style={{ cursor: 'pointer' }} />
              <ReferenceDot x={sel + 1} y={journeyV1[sel].score} r={9} fill="#00FFA3" stroke="#0B1020" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
          {journeyV1.map((j, i) => (
            <button
              key={j.step}
              onClick={() => setSel(i)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs transition ${sel === i ? 'border-mint-glow/50 bg-mint-glow/10 text-white' : 'border-white/10 text-slate-400 hover:text-white'}`}
            >
              {i + 1}. {j.step}
            </button>
          ))}
        </div>
      </Card>

      <AnimatePresence mode="wait">
        <motion.div key={sel} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="mt-4 grid gap-3 md:grid-cols-4">
          {[
            { icon: Target, label: 'Objectif du client', v: s.goal, c: 'text-cyan-glow' },
            { icon: Hand, label: 'Action', v: s.action, c: 'text-indigo-glow' },
            { icon: AlertTriangle, label: 'Pain point actuel', v: s.pain, c: 'text-rose-400' },
            { icon: CheckCircle2, label: 'Apport Smart Parking', v: s.solution, c: 'text-mint-glow' },
          ].map(({ icon: I, label, v, c }) => (
            <div key={label} className="glass p-4">
              <div className={`mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${c}`}>
                <I className="h-3.5 w-3.5" /> {label}
              </div>
              <div className="text-sm text-slate-200">{v}</div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
        <Smile className="h-4 w-4 text-mint-glow" /> Émotion à cette étape : <span className="font-semibold text-white">{s.emotion}</span>
      </div>
    </>
  )
}

export default function JourneyV1() {
  return (
    <Section id="journey-v1" eyebrow="Customer Journey Canvas V1" title="Le parcours client, qui s'appuie sur tout ce qui précède" subtitle="De l'intention de trajet jusqu'à l'après-stationnement : diagnostic, benchmark, USP et ZMOT appliqués à l'expérience vécue.">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-ink-900">T</div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Persona principal</div>
                <div className="font-semibold text-white">{personaThomas.name}</div>
                <div className="text-sm text-slate-400">{personaThomas.role}</div>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm text-slate-300">
              {personaThomas.traits.map((t) => (
                <li key={t} className="flex gap-2.5"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />{t}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Timeline />
        </Reveal>
      </div>

      {/* Scénario idéal */}
      <Reveal>
        <div className="mb-4 mt-12 text-sm font-semibold text-white">Expérience cible : scénario idéal</div>
      </Reveal>
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {idealScenario.map((s, i) => (
          <Reveal key={s.when} delay={i * 0.06}>
            <Card className="h-full">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-glow">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-semibold text-white">{s.when}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{s.text}</p>
              {s.highlight && <div className="mt-3 inline-block rounded-lg bg-mint-glow/10 px-3 py-1.5 text-sm font-semibold text-mint-glow">{s.highlight}</div>}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* B2B */}
      <Reveal>
        <div className="mb-4 mt-12 flex items-center gap-2 text-sm font-semibold text-white">
          <Building2 className="h-4 w-4 text-indigo-glow" /> Parcours client B2B — {personaSophie.name}, {personaSophie.role}
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {personaSophie.goals.map((g) => <span key={g} className="chip">{g}</span>)}
        </div>
      </Reveal>
      <Reveal>
        <div className="glass overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-left text-xs uppercase tracking-wider text-slate-400">
                {['Étape', 'Objectif', 'Actions', 'Pain points', 'Valeur Smart Parking'].map((h) => <th key={h} className="px-5 py-3.5 font-medium">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {journeyB2B.map((r, i) => (
                <tr key={r.step} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="px-5 py-3.5 font-medium text-white"><span className="mr-2 font-mono text-xs text-indigo-glow">{i + 1}</span>{r.step}</td>
                  <td className="px-5 py-3.5 text-slate-300">{r.goal}</td>
                  <td className="px-5 py-3.5 text-slate-400">{r.action}</td>
                  <td className="px-5 py-3.5 text-rose-300/90">{r.pain}</td>
                  <td className="px-5 py-3.5 font-medium text-mint-glow">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Moments de vérité */}
      <Reveal>
        <div className="mb-4 mt-12 text-sm font-semibold text-white">Moments de vérité du parcours</div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {momentsOfTruth.map((m, i) => (
          <Reveal key={m.quote} delay={i * 0.07}>
            <Card className="h-full">
              <div className="font-mono text-xs text-slate-500">Moment n°{i + 1}</div>
              <div className="mt-2 font-display text-base font-medium leading-snug text-white">« {m.quote} »</div>
              <p className="mt-2 text-sm text-slate-400">{m.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.effects.map((e) => <span key={e} className="rounded-full bg-cyan-glow/10 px-2.5 py-0.5 text-[11px] text-cyan-glow">{e}</span>)}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* KPI */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {[
          ['Côté utilisateur', journeyKpis.user, 'text-cyan-glow'],
          ['Côté exploitant', journeyKpis.operator, 'text-mint-glow'],
        ].map(([title, rows, c]) => (
          <Reveal key={title}>
            <Card hover={false}>
              <div className="mb-3 text-sm font-semibold text-white">KPI — {title}</div>
              <div className="divide-y divide-white/[0.05]">
                {rows.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-slate-400">{k}</span>
                    <span className={`font-mono font-semibold ${c}`}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Synthèse */}
      <Reveal>
        <Card hover={false} className="mt-12">
          <div className="mb-4 text-sm font-semibold text-white">Synthèse du Canvas</div>
          {[
            ['Parcours classique aujourd’hui', classicPath, 'border-rose-400/20 text-slate-400'],
            ['Parcours Smart Parking', smartPath, 'border-mint-glow/30 text-white bg-mint-glow/[0.05]'],
          ].map(([label, path, cls]) => (
            <div key={label} className="mb-4">
              <div className="mb-2 text-xs uppercase tracking-wider text-slate-500">{label}</div>
              <div className="flex flex-wrap items-center gap-2">
                {path.map((p, i) => (
                  <span key={p} className="flex items-center gap-2">
                    <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`rounded-lg border px-3 py-1.5 text-sm ${cls}`}>
                      {p}
                    </motion.span>
                    {i < path.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-slate-600" />}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <Quote className="mt-6">{finalPromiseV1}</Quote>
        </Card>
      </Reveal>
    </Section>
  )
}
