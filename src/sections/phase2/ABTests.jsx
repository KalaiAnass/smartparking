import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, MousePointerClick } from 'lucide-react'
import { Section, Reveal } from '../../components/ui/primitives'
import { abTests, abKpis } from '../../data/project'

function TestCard({ t, i }) {
  const [pick, setPick] = useState(null)
  return (
    <div className="glass flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-slate-500">Test n°{i + 1}</span>
        <span className="chip">{t.name}</span>
      </div>
      <div className="mt-4 grid gap-2">
        {[
          ['A', t.a],
          ['B', t.b],
        ].map(([v, text]) => (
          <motion.button
            key={v}
            whileTap={{ scale: 0.98 }}
            onClick={() => setPick(v)}
            className={`flex items-start gap-3 rounded-xl border p-4 text-left transition ${
              pick === v ? (v === 'B' ? 'border-mint-glow/50 bg-mint-glow/[0.08]' : 'border-indigo-glow/50 bg-indigo-glow/[0.08]') : 'border-white/[0.07] bg-white/[0.02] hover:border-white/20'
            }`}
          >
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-sm font-bold ${v === 'B' ? 'bg-mint-glow/15 text-mint-glow' : 'bg-indigo-glow/15 text-indigo-glow'}`}>{v}</span>
            <span className="font-display text-base text-white">{text}</span>
          </motion.button>
        ))}
      </div>
      <div className="mt-auto pt-4">
        <div className="flex gap-2 rounded-xl bg-white/[0.03] p-3 text-sm text-slate-400">
          <Lightbulb className="h-4 w-4 shrink-0 text-amber-300" />
          <span><span className="text-slate-300">Hypothèse : </span>{t.hypothesis}</span>
        </div>
        {pick && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-xs text-slate-500">
            Votre choix : version {pick} {pick === 'B' ? '— conforme à l’hypothèse testée.' : '— contraire à l’hypothèse testée.'}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default function ABTests() {
  return (
    <Section id="ab-tests" eyebrow="5 · A/B Test" title="Tester les messages qui convertissent" subtitle="Trois hypothèses de communication à valider. Cliquez sur la version que vous préférez.">
      <div className="grid gap-4 lg:grid-cols-3">
        {abTests.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <TestCard t={t} i={i} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-2 flex items-center gap-2 text-sm font-semibold text-white"><MousePointerClick className="h-4 w-4 text-cyan-glow" /> KPI suivis</span>
          {abKpis.map((k) => <span key={k} className="chip">{k}</span>)}
        </div>
      </Reveal>
    </Section>
  )
}
