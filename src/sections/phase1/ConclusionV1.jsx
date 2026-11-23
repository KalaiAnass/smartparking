import { motion } from 'framer-motion'
import { Card, Reveal, Quote } from '../../components/ui/primitives'
import { conclusionV1 } from '../../data/project'

export default function ConclusionV1() {
  return (
    <div className="pb-6">
      <Reveal>
        <div className="eyebrow mb-3">Conclusion V1 & positionnement</div>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="text-sm font-semibold text-white">Problème identifié</div>
            <p className="mt-1 text-sm text-slate-400">Le marché traite séparément :</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {conclusionV1.separated.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, x: (i - 2) * 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: 'spring' }}
                  className="rounded-lg border border-dashed border-white/15 px-3 py-1.5 text-sm text-slate-300"
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-mint-glow/20 bg-mint-glow/[0.05] p-4">
              <div className="text-sm font-semibold text-mint-glow">Opportunité</div>
              <p className="mt-1 text-sm text-slate-300">Smart Parking les fusionne dans un seul parcours automatisé.</p>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-4">
            <Quote>{conclusionV1.positioning}</Quote>
            <p className="text-sm leading-relaxed text-slate-400">{conclusionV1.note}</p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
