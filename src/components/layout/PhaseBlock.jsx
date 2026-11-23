import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function PhaseBlock({ phase, intro, children }) {
  const [open, setOpen] = useState(true)
  return (
    <div id={phase.id} data-section={phase.id} className="scroll-mt-6 pt-16">
      <motion.button
        onClick={() => setOpen((o) => !o)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-glow/25 via-ink-800 to-cyan-glow/10 p-7 text-left sm:p-10"
        aria-expanded={open}
      >
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-glow/20 blur-3xl" />
        <div className="relative flex items-start justify-between gap-6">
          <div>
            <div className="eyebrow">Phase {phase.num}</div>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{phase.title}</h2>
            {intro && <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">{intro}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              {phase.sections.map((s) => (
                <span key={s.id} className="chip">{s.label}</span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden font-display text-7xl font-bold text-white/[0.06] sm:block">0{phase.num}</span>
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 transition group-hover:border-cyan-glow/40">
              <ChevronDown className={`h-5 w-5 text-slate-300 transition-transform duration-300 ${open ? '' : '-rotate-90'}`} />
            </span>
          </div>
        </div>
      </motion.button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
