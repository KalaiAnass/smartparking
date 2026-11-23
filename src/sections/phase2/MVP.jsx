import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, FlaskConical, Rocket } from 'lucide-react'
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { mvps, mvpKpis, aiTargets } from '../../data/project'

function Gauge({ value, label }) {
  return (
    <div className="glass p-4 text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[128px]">
        <ResponsiveContainer>
          <RadialBarChart innerRadius="78%" outerRadius="100%" data={[{ value }]} startAngle={90} endAngle={-270}>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={20} fill="#00FFA3" background={{ fill: 'rgba(255,255,255,0.06)' }} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-base font-semibold text-white sm:text-2xl">&gt;{value}%</span>
        </div>
      </div>
      <div className="mt-2 text-sm text-slate-300">{label}</div>
    </div>
  )
}

export default function MVP() {
  const [sel, setSel] = useState(0)
  return (
    <Section id="mvp" eyebrow="4 · POC / MVP" title="Roadmap produit" subtitle="Objectif : valider l'intérêt et l'efficacité de l'algorithme prédictif.">
      <Reveal>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-white/[0.06] md:block" />
          <motion.div className="absolute left-0 top-6 hidden h-0.5 bg-brand-gradient md:block" animate={{ width: `${(sel / (mvps.length - 1)) * 100}%` }} transition={{ duration: 0.5 }} />
          <div className="grid gap-4 md:grid-cols-4">
            {mvps.map((m, i) => (
              <button key={m.name} onClick={() => setSel(i)} className="group relative text-left">
                <div className={`relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-full border-2 transition ${i <= sel ? 'border-mint-glow bg-ink-900 text-mint-glow' : 'border-white/15 bg-ink-900 text-slate-500'}`}>
                  {i === mvps.length - 1 ? <Rocket className="h-5 w-5" /> : <span className="font-display font-bold">{i + 1}</span>}
                </div>
                <div className={`glass p-5 transition ${sel === i ? 'border-mint-glow/40 bg-mint-glow/[0.05]' : 'group-hover:border-white/20'}`}>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{m.theme}</div>
                  <div className="mt-1 font-display text-xl font-semibold text-white">{m.name}</div>
                  <ul className="mt-3 space-y-1.5">
                    {m.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-slate-300"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-glow" />{f}</li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <Card hover={false} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
          <FlaskConical className="h-5 w-5 shrink-0 text-cyan-glow" />
          <div>
            <div className="text-sm font-semibold text-white">Ce qui est testé dans le MVP 1</div>
            <p className="mt-1 text-sm text-slate-400">L'algorithme est-il capable de prédire : {mvps[0].tests.join(' · ').toLowerCase()} ?</p>
          </div>
        </Card>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr_1.5fr]">
        {Object.entries(mvpKpis).map(([k, list]) => (
          <Reveal key={k}>
            <Card hover={false} className="h-full">
              <div className="mb-3 text-sm font-semibold text-white">KPI {k}</div>
              <ul className="space-y-2 text-sm text-slate-300">
                {list.map((l) => <li key={l} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-glow" />{l}</li>)}
              </ul>
            </Card>
          </Reveal>
        ))}
        <Reveal>
          <div>
            <div className="mb-3 text-sm font-semibold text-white">Objectifs IA</div>
            <div className="grid grid-cols-3 gap-3">
              {aiTargets.map((t) => <Gauge key={t.label} {...t} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
