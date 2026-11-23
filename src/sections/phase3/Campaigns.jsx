import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Timer, Bot, ArrowDown } from 'lucide-react'
import { Section, Reveal } from '../../components/ui/primitives'
import { campaigns } from '../../data/project'

function Phone({ children, label }) {
  return (
    <div>
      <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-white/15 bg-ink-950 p-2 shadow-2xl">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[1.8rem] bg-ink-800">
          <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          {children}
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-slate-500">{label}</div>
    </div>
  )
}

function StopCherche({ c }) {
  const [after, setAfter] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setAfter((a) => !a), 3200)
    return () => clearInterval(t)
  }, [])
  return (
    <Phone label={c.format}>
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center" animate={{ background: after ? 'linear-gradient(180deg,#003b2e,#0B1020)' : 'linear-gradient(180deg,#3b0b18,#0B1020)' }} transition={{ duration: 0.6 }}>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{c.name}</div>
        <Timer className={`mt-6 h-10 w-10 ${after ? 'text-mint-glow' : 'text-rose-400'}`} />
        <motion.div key={String(after)} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`mt-3 font-display text-5xl font-bold ${after ? 'text-mint-glow' : 'text-rose-400'}`}>
          {after ? '30 sec' : '15 min'}
        </motion.div>
        <div className="mt-4 font-display text-lg text-white">{after ? c.after : c.before}</div>
        {after && <div className="mt-6 rounded-full bg-mint-glow px-4 py-1.5 text-xs font-bold text-ink-900">Smart Parking</div>}
      </motion.div>
    </Phone>
  )
}

function Pilot({ c }) {
  return (
    <Phone label={c.format}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-glow/30 via-ink-900 to-ink-950 p-5 text-center">
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{c.name}</div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="relative mt-6">
          <div className="absolute inset-0 rounded-full bg-cyan-glow/40 blur-2xl" />
          <div className="relative grid h-20 w-20 place-items-center rounded-full border border-cyan-glow/50 bg-ink-900/60">
            <Bot className="h-10 w-10 text-cyan-glow" />
          </div>
        </motion.div>
        <div className="mt-6 rounded-2xl rounded-tl-sm border border-cyan-glow/30 bg-cyan-glow/10 px-4 py-3 font-display text-white">« {c.after} »</div>
        <div className="mt-4 text-xs text-slate-400">{c.concept}</div>
      </div>
    </Phone>
  )
}

function Invisible({ c }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % (c.story.length + 1)), 900)
    return () => clearInterval(t)
  }, [c.story.length])
  return (
    <Phone label={c.format}>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-ink-800 to-ink-950 p-5">
        <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">{c.name}</div>
        {c.story.map((s, k) => (
          <div key={s} className="flex flex-col items-center">
            <motion.div animate={{ opacity: k < i ? 1 : 0.2, scale: k === i - 1 ? 1.08 : 1 }} className="rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white">{s}</motion.div>
            {k < c.story.length - 1 && <ArrowDown className="my-0.5 h-3 w-3 text-slate-600" />}
          </div>
        ))}
        <div className="mt-4 text-center text-xs text-slate-400">{c.concept}</div>
      </div>
    </Phone>
  )
}

function OS({ c }) {
  return (
    <Phone label={c.format}>
      <div className="absolute inset-0 flex flex-col bg-ink-900 p-4 pt-9">
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">{c.name}</div>
        <div className="mt-3 space-y-2">
          {c.kpis.map(([v, l], k) => (
            <motion.div key={l} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.15 }} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className={`font-display text-2xl font-bold ${v.startsWith('-') ? 'text-cyan-glow' : 'text-mint-glow'}`}>{v}</div>
              <div className="text-[11px] text-slate-400">{l}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-auto rounded-xl bg-brand-gradient p-3 font-display text-sm font-semibold text-ink-900">{c.hook}</div>
      </div>
    </Phone>
  )
}

const renderers = { stop: StopCherche, pilot: Pilot, invisible: Invisible, os: OS }

export default function Campaigns() {
  return (
    <Section id="campaigns" eyebrow="4 · Campagnes + exemples" title="Quatre concepts créatifs" subtitle="Trois campagnes B2C pour l'émotion et l'adoption, une campagne B2B pour la preuve de valeur.">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {campaigns.map((c, i) => {
          const R = renderers[c.id]
          return (
            <Reveal key={c.id} delay={i * 0.08}>
              <div className="mb-4">
                <div className="font-mono text-xs text-cyan-glow">{c.id === 'os' ? 'Campagne B2B' : `Campagne n°${i + 1}`}</div>
                <div className="font-display text-lg font-semibold text-white">{c.name}</div>
                <div className="text-sm text-slate-400">{c.concept}</div>
              </div>
              <R c={c} />
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
