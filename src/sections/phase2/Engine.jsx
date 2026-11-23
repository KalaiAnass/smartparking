import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Satellite, Navigation, Map, Gauge, History, CalendarDays, CloudSun, ArrowDownRight, Check } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { engine } from '../../data/project'

const inputIcons = [Satellite, Navigation, Map, Gauge, History, CalendarDays, CloudSun]

function Flow({ reverse = false }) {
  return (
    <div className="relative hidden h-full w-16 items-center lg:flex">
      <div className="h-px w-full bg-gradient-to-r from-cyan-glow/10 via-cyan-glow/50 to-cyan-glow/10" />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-[0_0_10px_#00D1FF]"
          initial={{ left: reverse ? '100%' : '0%' }}
          animate={{ left: reverse ? '0%' : '100%' }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

export default function Engine() {
  const [hover, setHover] = useState(null)
  return (
    <Section id="engine" eyebrow="Nouvelle innovation" title="Smart Allocation Engine™" subtitle="Le moteur d'IA au cœur du système : il prévoit, attribue et optimise chaque place en temps réel.">
      <Reveal>
        <Card hover={false} className="overflow-hidden p-5 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
            {/* Inputs */}
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Données d'entrée</div>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {engine.inputs.map((inp, i) => {
                  const I = inputIcons[i]
                  return (
                    <motion.div
                      key={inp}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(null)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-sm transition ${hover === i ? 'border-cyan-glow/40 bg-cyan-glow/10 text-white' : 'border-white/[0.06] bg-white/[0.02] text-slate-300'}`}
                    >
                      <I className="h-4 w-4 text-cyan-glow" /> {inp}
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <Flow />
            {/* Core */}
            <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-cyan-glow/20"
                  animate={{ rotate: i % 2 ? -360 : 360 }}
                  transition={{ duration: 18 + i * 8, repeat: Infinity, ease: 'linear' }}
                  style={{ inset: `${i * 14}%`, borderStyle: i === 1 ? 'dashed' : 'solid' }}
                >
                  <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-mint-glow shadow-[0_0_12px_#00FFA3]" />
                </motion.div>
              ))}
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-cyan-glow/30 via-indigo-glow/30 to-mint-glow/20 blur-2xl" />
              <div className="relative grid h-[44%] w-[44%] place-items-center rounded-full border border-white/15 bg-ink-900/90 text-center shadow-glow">
                <div>
                  <Cpu className="mx-auto h-7 w-7 text-cyan-glow" />
                  <div className="mt-1 font-display text-xs font-semibold text-white sm:text-sm">Allocation</div>
                  <div className="font-display text-xs font-semibold text-white sm:text-sm">Engine™</div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-1.5">
                {engine.predicts.map((p) => (
                  <span key={p} className="rounded-full border border-white/10 bg-ink-800 px-2 py-0.5 text-[10px] text-slate-300">{p}</span>
                ))}
              </div>
            </div>
            <Flow />
            {/* Outputs */}
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sorties</div>
              <div className="space-y-2">
                {engine.outputs.map((o, i) => (
                  <motion.div
                    key={o}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2.5 rounded-xl border border-mint-glow/25 bg-mint-glow/[0.06] px-3.5 py-3 text-sm font-medium text-white"
                  >
                    <ArrowDownRight className="h-4 w-4 text-mint-glow" /> {o}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {engine.capabilities.map((c, i) => (
          <Reveal key={c} delay={i * 0.05}>
            <div className="glass glass-hover flex items-center gap-3 px-4 py-3.5 text-sm text-slate-200">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-mint-glow/10"><Check className="h-4 w-4 text-mint-glow" /></span>
              {c}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
