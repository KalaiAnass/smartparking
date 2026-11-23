import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import { Section, Reveal } from '../../components/ui/primitives'
import { pitchSlides, vision } from '../../data/project'

function SlideBody({ s, big = false }) {
  const h = big ? 'text-3xl sm:text-5xl' : 'text-base'
  if (s.n === 9) {
    return (
      <div className={`grid gap-3 ${big ? 'sm:grid-cols-3' : 'grid-cols-3'}`}>
        {Object.entries(vision.businessModel).map(([k, items]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className={`font-semibold text-cyan-glow ${big ? 'text-lg' : 'text-[10px]'}`}>{k}</div>
            {big && <ul className="mt-2 space-y-1 text-sm text-slate-300">{items.map((i) => <li key={i}>{i}</li>)}</ul>}
          </div>
        ))}
      </div>
    )
  }
  if (s.n === 10) {
    return (
      <div className={`font-display font-semibold leading-tight text-white ${h}`}>
        {vision.slogan.map((l, i) => (
          <div key={l} className={i === 3 ? 'text-gradient' : ''}>{l}</div>
        ))}
      </div>
    )
  }
  return <div className={`font-display font-semibold leading-tight text-white ${h}`}>{s.headline}</div>
}

function SlideFrame({ s, big }) {
  return (
    <div className={`relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 ${big ? 'p-8 sm:p-14' : 'p-4'}`}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-glow/20 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <span className={`font-semibold uppercase tracking-[0.2em] text-cyan-glow ${big ? 'text-sm' : 'text-[9px]'}`}>{s.title}</span>
        <span className={`font-mono text-slate-500 ${big ? 'text-sm' : 'text-[9px]'}`}>{String(s.n).padStart(2, '0')} / 10</span>
      </div>
      <div className="relative">
        <SlideBody s={s} big={big} />
      </div>
      <div className={`relative text-slate-500 ${big ? 'text-sm' : 'line-clamp-1 text-[9px]'}`}>Visuel : {s.visual}</div>
    </div>
  )
}

export default function PitchDeck() {
  const [open, setOpen] = useState(null)
  const close = () => setOpen(null)
  const go = useCallback((d) => setOpen((o) => (o === null ? o : (o + d + pitchSlides.length) % pitchSlides.length)), [])
  useEffect(() => {
    if (open === null) return
    const h = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [open, go])

  return (
    <Section id="pitch-deck" eyebrow="6 · Support du pitch" title="Investor Pitch Deck" subtitle="Les 10 slides du pitch. Cliquez sur une slide pour la présenter en plein écran (← → pour naviguer).">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {pitchSlides.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.04}>
            <button onClick={() => setOpen(i)} className="group relative block w-full text-left transition hover:-translate-y-1">
              <SlideFrame s={s} />
              <span className="absolute right-2 top-2 hidden h-7 w-7 place-items-center rounded-lg bg-black/50 group-hover:grid"><Maximize2 className="h-3.5 w-3.5" /></span>
            </button>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-6 max-w-3xl text-slate-400">
          <span className="text-white">Conclusion. </span>Smart Parking ne cherche plus simplement à trouver des places de parking. Il cherche à devenir le système d'exploitation du stationnement grâce à l'intelligence artificielle prédictive.
        </p>
      </Reveal>

      <AnimatePresence>
        {open !== null && (
          <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <motion.div key={open} className="w-full max-w-5xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <SlideFrame s={pitchSlides[open]} big />
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => go(-1)} className="flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5"><ChevronLeft className="h-4 w-4" /> Précédente</button>
                <div className="flex gap-1.5">
                  {pitchSlides.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === open ? 'w-6 bg-cyan-glow' : 'w-1.5 bg-white/20'}`} />)}
                </div>
                <button onClick={() => go(1)} className="flex items-center gap-1 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Suivante <ChevronRight className="h-4 w-4" /></button>
              </div>
            </motion.div>
            <button onClick={close} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/40" aria-label="Fermer"><X className="h-5 w-5" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
