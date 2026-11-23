import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

export const fmtEUR = (n, digits = 0) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n)
export const fmtNum = (n, digits = 0) =>
  new Intl.NumberFormat('fr-FR', { maximumFractionDigits: digits, minimumFractionDigits: digits }).format(n)

export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div className={`glass p-5 sm:p-6 ${hover ? 'glass-hover' : ''} ${className}`} {...rest}>
      {children}
    </div>
  )
}

export function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} data-section={id} className="scroll-mt-24 py-14 sm:py-20">
      <Reveal>
        <div className="mb-8 sm:mb-10 max-w-3xl">
          {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h2>
          {subtitle && <p className="mt-3 text-base sm:text-lg text-slate-400 leading-relaxed">{subtitle}</p>}
        </div>
      </Reveal>
      {children}
    </section>
  )
}

export function Quote({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/[0.08] via-indigo-glow/[0.06] to-mint-glow/[0.05] p-6 sm:p-8 ${className}`}>
      <div className="absolute -left-1 top-0 h-full w-1 bg-brand-gradient" />
      <p className="font-display text-lg sm:text-2xl font-medium leading-snug text-white">« {children} »</p>
    </div>
  )
}

export function Counter({ value, decimals = 0, prefix = '', suffix = '', duration = 1.6, format }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)
  const current = useRef(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(current.current, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        current.current = v
        setDisplay(v)
      },
    })
    return () => controls.stop()
  }, [inView, value, duration])
  const text = format ? format(display) : fmtNum(display, decimals)
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {text}
      {suffix}
    </span>
  )
}

export function Stat({ label, children, accent = 'cyan', sub }) {
  const colors = { cyan: 'text-cyan-glow', mint: 'text-mint-glow', indigo: 'text-indigo-glow', white: 'text-white' }
  return (
    <Card className="flex flex-col justify-between">
      <div className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</div>
      <div className={`mt-3 font-display text-3xl sm:text-4xl font-semibold ${colors[accent]}`}>{children}</div>
      {sub && <div className="mt-2 text-sm text-slate-400">{sub}</div>}
    </Card>
  )
}

export function Bullets({ items, color = 'bg-cyan-glow' }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
          <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function ChartTooltip({ active, payload, label, labelFormatter, formatter = (v) => fmtEUR(v) }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/95 px-3.5 py-2.5 text-sm shadow-xl backdrop-blur">
      {label !== undefined && <div className="mb-1 font-medium text-white">{labelFormatter ? labelFormatter(label) : label}</div>}
      {payload.map((p) => (
        <div key={p.dataKey ?? p.name} className="flex items-center gap-2 text-slate-300">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color || p.payload?.fill }} />
          <span>{p.name}</span>
          <span className="ml-auto pl-4 font-mono text-white">{formatter(p.value, p)}</span>
        </div>
      ))}
    </div>
  )
}

export function Tabs({ tabs, value, onChange }) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] p-1">
      {tabs.map((t) => (
        <button
          key={t.value}
          onClick={() => onChange(t.value)}
          className={`relative rounded-full px-4 py-1.5 text-sm transition ${value === t.value ? 'text-ink-900' : 'text-slate-400 hover:text-white'}`}
        >
          {value === t.value && (
            <motion.span layoutId={`tab-${tabs.map((x) => x.value).join('')}`} className="absolute inset-0 rounded-full bg-brand-gradient" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
          )}
          <span className="relative font-medium">{t.label}</span>
        </button>
      ))}
    </div>
  )
}
