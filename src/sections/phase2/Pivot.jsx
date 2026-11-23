import { motion } from 'framer-motion'
import { Check, X, ArrowRight, Brain, CalendarCheck } from 'lucide-react'
import { Section, Card, Reveal, Quote } from '../../components/ui/primitives'
import { pivot } from '../../data/project'

export default function Pivot() {
  return (
    <Section id="pivot" eyebrow="1 · Pivot" title="De la réservation automatique à l'IA prédictive" subtitle="Ce qui a été appris lors de la V1 a redéfini l'innovation centrale.">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="mb-3 text-sm font-semibold text-white">Les retours montrent que…</div>
            <ul className="space-y-2.5">
              {pivot.learned.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-slate-400"><X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />{t}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full border-mint-glow/20">
            <div className="mb-3 text-sm font-semibold text-white">En revanche, aucun acteur ne propose :</div>
            <ul className="space-y-2.5">
              {pivot.missing.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-slate-200"><Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-glow" />{t}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>

      <Reveal>
        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="glass p-6 opacity-80">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500"><CalendarCheck className="h-4 w-4" /> V1</div>
            <div className="mt-3 font-display text-2xl font-semibold text-slate-300">{pivot.v1Label}</div>
            <p className="mt-2 text-slate-400">« {pivot.v1} »</p>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="grid h-14 w-14 rotate-90 place-items-center rounded-full bg-brand-gradient text-ink-900 shadow-glow lg:rotate-0"
            >
              <ArrowRight className="h-6 w-6" />
            </motion.div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-mint-glow/30 bg-gradient-to-br from-mint-glow/10 via-cyan-glow/5 to-indigo-glow/10 p-6 shadow-glow-mint">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mint-glow"><Brain className="h-4 w-4" /> V2</div>
            <div className="mt-3 font-display text-2xl font-semibold text-white">{pivot.v2Label}</div>
            <p className="mt-2 text-slate-200">« {pivot.v2} »</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-8">
          <div className="eyebrow mb-3">Nouvelle USP</div>
          <Quote>{pivot.usp}</Quote>
        </div>
      </Reveal>
    </Section>
  )
}
