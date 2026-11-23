import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import Icon from '../../components/ui/Icon'
import { journeyV2 } from '../../data/project'

function LearningLoop({ active }) {
  const n = journeyV2.length
  const R = 150
  return (
    <svg viewBox="-200 -200 400 400" className="mx-auto w-full max-w-[420px]">
      <defs>
        <linearGradient id="loopg" x1="0" x2="1">
          <stop offset="0%" stopColor="#00D1FF" />
          <stop offset="100%" stopColor="#00FFA3" />
        </linearGradient>
      </defs>
      <circle r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="18" />
      <motion.circle
        r={R}
        fill="none"
        stroke="url(#loopg)"
        strokeWidth="3"
        strokeLinecap="round"
        transform="rotate(-90)"
        animate={{ pathLength: (active + 1) / n }}
        transition={{ duration: 0.6 }}
      />
      {journeyV2.map((s, i) => {
        const a = (i / n) * Math.PI * 2 - Math.PI / 2
        const x = Math.cos(a) * R
        const y = Math.sin(a) * R
        const on = i <= active
        return (
          <g key={s.step}>
            <circle cx={x} cy={y} r={i === active ? 17 : 13} fill={on ? '#0B1020' : '#111831'} stroke={on ? '#00FFA3' : 'rgba(255,255,255,0.15)'} strokeWidth="2" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? '#00FFA3' : '#64748b'}>{i + 1}</text>
          </g>
        )
      })}
      <text y="-8" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Space Grotesk">Boucle</text>
      <text y="16" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700" fontFamily="Space Grotesk">d'apprentissage</text>
      <text y="40" textAnchor="middle" fill="#94a3b8" fontSize="11">Chaque trajet améliore la prédiction</text>
    </svg>
  )
}

export default function JourneyV2() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setActive((a) => (a + 1) % journeyV2.length), 2600)
    return () => clearInterval(t)
  }, [playing])
  const s = journeyV2[active]
  return (
    <Section id="journey-v2" eyebrow="2 · Customer Journey Canvas V2" title="Un parcours piloté par l'IA" subtitle="Avant : l'utilisateur trouve une place. Après : le système prépare l'arrivée de l'utilisateur.">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <Reveal>
          <LearningLoop active={active} />
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false}>
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500">Étape {active + 1} / {journeyV2.length}</span>
              <button onClick={() => setPlaying((p) => !p)} className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:text-white">
                {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />} {playing ? 'Pause' : 'Lecture'}
              </button>
            </div>
            <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-ink-900"><Icon name={s.icon} className="h-6 w-6" /></span>
                <h3 className="font-display text-2xl font-semibold text-white">{s.step}</h3>
              </div>
              <p className="mt-4 min-h-[72px] leading-relaxed text-slate-300">{s.text}</p>
            </motion.div>
            <div className="mt-5 grid grid-cols-3 gap-1.5 sm:grid-cols-9">
              {journeyV2.map((j, i) => (
                <button
                  key={j.step}
                  onClick={() => { setActive(i); setPlaying(false) }}
                  title={j.step}
                  className={`flex h-10 items-center justify-center rounded-lg border transition ${i === active ? 'border-mint-glow/50 bg-mint-glow/10 text-mint-glow' : 'border-white/[0.06] text-slate-500 hover:text-white'}`}
                >
                  <Icon name={j.icon} className="h-4 w-4" />
                </button>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Reveal>
          <div className="glass p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Avant</div>
            <div className="mt-1 font-display text-xl text-slate-300">L'utilisateur trouve une place.</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-mint-glow/30 bg-mint-glow/[0.06] p-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-mint-glow">Après</div>
            <div className="mt-1 font-display text-xl text-white">Le système prépare l'arrivée de l'utilisateur.</div>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
