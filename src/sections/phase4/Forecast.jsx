import { useMemo, useState } from 'react'
import { ComposedChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea, Legend } from 'recharts'
import { Section, Card, Reveal, ChartTooltip, Tabs, fmtEUR } from '../../components/ui/primitives'
import { forecast, forecastStages } from '../../data/project'

export default function Forecast() {
  const [mode, setMode] = useState('monthly')
  const data = useMemo(() => {
    let cr = 0
    let cc = 0
    return forecast.map((f) => {
      cr += f.revenue
      cc += f.cost
      return { ...f, Revenus: mode === 'monthly' ? f.revenue : cr, Coûts: mode === 'monthly' ? f.cost : cc, Marge: mode === 'monthly' ? f.revenue - f.cost : cr - cc }
    })
  }, [mode])
  const totalRev = forecast.reduce((s, f) => s + f.revenue, 0)
  const totalCost = forecast.reduce((s, f) => s + f.cost, 0)
  const firstProfitable = forecast.find((f) => f.revenue > f.cost)?.m
  const growth = Math.round(((forecast[11].revenue - forecast[0].revenue) / forecast[0].revenue) * 100)

  return (
    <Section id="forecast" eyebrow="6 · Prévisions sur 12 mois" title="Courbe de croissance" subtitle="Revenus mensuels de 10 000 € à 120 000 €, pour des coûts mensuels stables de 12 000 €.">
      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ['Revenus cumulés (12 mois)', fmtEUR(totalRev), 'text-white'],
          ['Coûts cumulés (12 mois)', fmtEUR(totalCost), 'text-rose-300'],
          ['1er mois rentable', firstProfitable, 'text-mint-glow'],
          ['Croissance M1 → M12', `×${forecast[11].revenue / forecast[0].revenue} (+${growth} %)`, 'text-cyan-glow'],
        ].map(([l, v, c]) => (
          <Reveal key={l}>
            <div className="glass p-4">
              <div className="text-xs text-slate-400">{l}</div>
              <div className={`mt-1 font-display text-xl font-semibold sm:text-2xl ${c}`}>{v}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <Card hover={false}>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {forecastStages.map((s) => (
                <span key={s.label} className="chip"><span className="h-2 w-2 rounded-full" style={{ background: s.color }} />{s.label} · {s.from}–{s.to}</span>
              ))}
            </div>
            <Tabs tabs={[{ value: 'monthly', label: 'Mensuel' }, { value: 'cumulative', label: 'Cumulé' }]} value={mode} onChange={setMode} />
          </div>
          <div className="h-[380px]">
            <ResponsiveContainer>
              <ComposedChart data={data} margin={{ top: 24, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="fr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D1FF" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#5B7FFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                {forecastStages.map((s) => (
                  <ReferenceArea key={s.label} x1={s.from} x2={s.to} fill={s.color} fillOpacity={0.05} stroke="none" label={{ value: s.label, position: 'insideTop', fill: s.color, fontSize: 11 }} />
                ))}
                <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="m" stroke="#64748b" tickLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} width={50} />
                <Tooltip content={<ChartTooltip />} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="Marge" fill="#00FFA3" fillOpacity={0.35} radius={[6, 6, 0, 0]} barSize={18} />
                <Area type="monotone" dataKey="Revenus" stroke="#00D1FF" strokeWidth={2.5} fill="url(#fr)" animationDuration={900} />
                <Line type="monotone" dataKey="Coûts" stroke="#FF4D6D" strokeWidth={2} strokeDasharray="6 4" dot={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </Reveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {forecastStages.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="glass p-4" style={{ borderColor: `${s.color}40` }}>
              <div className="font-mono text-xs" style={{ color: s.color }}>Mois {s.from.slice(1)} à {s.to.slice(1)}</div>
              <div className="mt-1 font-semibold text-white">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
