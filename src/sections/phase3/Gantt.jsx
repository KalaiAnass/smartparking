import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section, Card, Reveal, Quote } from '../../components/ui/primitives'
import { gantt, commSynthesis } from '../../data/project'

const months = Array.from({ length: 12 }, (_, i) => i + 1)

export default function Gantt() {
  const [sel, setSel] = useState(0)
  const g = gantt[sel]
  return (
    <Section id="gantt" eyebrow="5 · GANTT" title="Feuille de route sur 12 mois" subtitle="Cliquez sur une phase pour afficher ses actions.">
      <Reveal>
        <Card hover={false} className="overflow-x-auto">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] border-b border-white/[0.06] pb-2 text-center text-xs text-slate-500">
              <div />
              {months.map((m) => <div key={m}>M{m}</div>)}
            </div>
            {gantt.map((row, i) => (
              <div key={row.phase} className="grid grid-cols-[160px_repeat(12,minmax(0,1fr))] items-center border-b border-white/[0.03] py-2.5">
                <button onClick={() => setSel(i)} className={`text-left text-sm font-medium transition ${sel === i ? 'text-white' : 'text-slate-400 hover:text-white'}`}>{row.phase}</button>
                {months.map((m) => <div key={m} className="h-full border-l border-white/[0.03]" />)}
                <motion.button
                  onClick={() => setSel(i)}
                  className="row-start-1 h-8 rounded-lg text-left text-[11px] font-semibold text-ink-900"
                  style={{ gridColumn: `${row.start + 1} / ${row.end + 2}`, background: row.color, boxShadow: sel === i ? `0 0 24px -4px ${row.color}` : 'none', opacity: sel === i ? 1 : 0.55 }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                >
                  <span className="px-3">M{row.start}{row.end !== row.start ? `–M${row.end}` : ''}</span>
                </motion.button>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={g.phase} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 glass p-5">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full" style={{ background: g.color }} />
            <span className="font-display text-lg font-semibold text-white">{g.phase}</span>
            <span className="font-mono text-xs text-slate-500">Mois {g.start} à {g.end}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {g.actions.map((a) => <span key={a} className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"><Check className="h-3.5 w-3.5 text-mint-glow" />{a}</span>)}
          </div>
        </motion.div>
      </AnimatePresence>

      <Reveal>
        <div className="mt-12">
          <div className="eyebrow mb-3">Synthèse — message unique</div>
          <Quote>{commSynthesis}</Quote>
          <p className="mt-4 max-w-3xl text-slate-400">
            Cette promesse est beaucoup plus forte que « réserver un parking », car elle transforme Smart Parking d'une application de stationnement en un copilote prédictif de mobilité.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
