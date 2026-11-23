import { motion } from 'framer-motion'
import { ArrowRight, Presentation } from 'lucide-react'
import { hero } from '../data/project'
import { Counter } from '../components/ui/primitives'

function CityBackdrop() {
  // Grille de places : certaines s'allument (réservées par l'IA) en séquence.
  const cells = Array.from({ length: 48 }, (_, i) => i)
  const lit = new Set([3, 9, 14, 22, 27, 31, 38, 44])
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-glow/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-glow/15 blur-[100px]" />
      <div className="absolute bottom-[-15%] left-[-5%] h-[380px] w-[380px] rounded-full bg-mint-glow/10 blur-[100px]" />
      <div className="absolute bottom-10 right-6 hidden grid-cols-8 gap-2 opacity-70 md:grid [transform:perspective(900px)_rotateX(55deg)_rotateZ(-18deg)]">
        {cells.map((i) => (
          <motion.div
            key={i}
            className="h-9 w-6 rounded-[4px] border border-white/10"
            initial={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
            animate={
              lit.has(i)
                ? { backgroundColor: ['rgba(255,255,255,0.03)', 'rgba(0,255,163,0.55)', 'rgba(255,255,255,0.03)'], boxShadow: ['0 0 0 rgba(0,255,163,0)', '0 0 18px rgba(0,255,163,0.6)', '0 0 0 rgba(0,255,163,0)'] }
                : { backgroundColor: i % 3 ? 'rgba(91,127,255,0.18)' : 'rgba(255,255,255,0.03)' }
            }
            transition={lit.has(i) ? { duration: 3, repeat: Infinity, delay: (i % 8) * 0.45 } : { duration: 0 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" data-section="hero" className="relative -mx-4 flex min-h-[100svh] items-center overflow-hidden px-4 pt-20 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:pt-0">
      <CityBackdrop />
      <div className="relative z-10 w-full max-w-5xl py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="chip mb-6 border-cyan-glow/30 text-cyan-glow">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-glow" /> Plan stratégique · Pitch investisseur
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          {hero.title.split(' ').slice(0, 2).join(' ')} <span className="text-gradient">AI</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 font-display text-2xl font-medium text-slate-200 sm:text-3xl">
          {hero.subtitle}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
          {hero.tagline}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-9 flex flex-wrap gap-3">
          <a href="#phase-1" className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-ink-900 shadow-glow transition hover:brightness-110">
            Explorer le projet <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#pitch-deck" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-glow/40 hover:bg-white/10">
            <Presentation className="h-4 w-4" /> Investor Pitch
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {hero.kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              className="glass p-4 sm:p-5"
            >
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <Counter value={k.value} prefix={k.prefix} suffix={k.suffix} />
              </div>
              <div className="mt-1.5 text-xs text-slate-400 sm:text-sm">{k.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
