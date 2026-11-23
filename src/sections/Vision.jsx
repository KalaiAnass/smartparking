import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { vision } from '../data/project'

function Ecosystem() {
  // Réseau urbain animé : des véhicules (points) convergent vers des parkings (nœuds) via l'IA centrale.
  const nodes = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const a = (i / 22) * Math.PI * 2
        const r = 32 + ((i * 37) % 13)
        return { x: 50 + Math.cos(a) * r, y: 50 + Math.sin(a) * r * 0.62, d: (i % 5) * 0.6 }
      }),
    [],
  )
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-70">
      <defs>
        <radialGradient id="vg">
          <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="22" fill="url(#vg)" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="50" y1="50" x2={n.x} y2={n.y} stroke="#5B7FFF" strokeOpacity="0.12" strokeWidth="0.15" />
          <circle cx={n.x} cy={n.y} r="0.7" fill={i % 3 === 0 ? '#00FFA3' : '#5B7FFF'}>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin={`${n.d}s`} repeatCount="indefinite" />
          </circle>
          <circle r="0.35" fill="#00D1FF">
            <animateMotion dur={`${3 + (i % 4)}s`} begin={`${n.d}s`} repeatCount="indefinite" path={`M${n.x},${n.y} L50,50`} />
          </circle>
        </g>
      ))}
    </svg>
  )
}

export default function Vision() {
  return (
    <section id="vision" data-section="vision" className="relative -mx-4 mt-16 flex min-h-[100svh] items-center justify-center overflow-hidden px-4 sm:-mx-8 lg:-mx-12">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950 to-ink-950" />
      <Ecosystem />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070B17_75%)]" />
      <div className="relative z-10 max-w-4xl py-24 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-6">Vision 2030</motion.div>
        <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {vision.slogan.map((l, i) => (
            <motion.span
              key={l}
              className={`block ${i === vision.slogan.length - 1 ? 'text-gradient' : 'text-white'}`}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {l}
            </motion.span>
          ))}
        </h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.7 }} className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
          {vision.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.4 }} className="mt-10 grid gap-3 text-left sm:grid-cols-3">
          {Object.entries(vision.businessModel).map(([k, items]) => (
            <div key={k} className="glass p-4">
              <div className="text-sm font-semibold text-cyan-glow">{k}</div>
              <div className="mt-1 text-sm text-slate-400">{items.join(' · ')}</div>
            </div>
          ))}
        </motion.div>
        <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} href="#hero" className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white backdrop-blur hover:border-cyan-glow/40">
          <ArrowUp className="h-4 w-4" /> Revenir au début
        </motion.a>
      </div>
    </section>
  )
}
