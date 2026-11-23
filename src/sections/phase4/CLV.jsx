import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { User, Building2 } from 'lucide-react'
import { Section, Card, Reveal, Counter, ChartTooltip, fmtEUR } from '../../components/ui/primitives'
import { clv } from '../../data/project'

function Curve({ monthly, months, color, id }) {
  const data = Array.from({ length: months + 1 }, (_, m) => ({ m: `M${m}`, value: +(monthly * m).toFixed(2) }))
  return (
    <div className="h-40">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis dataKey="m" stroke="#64748b" tickLine={false} axisLine={false} interval={Math.floor(months / 4)} />
          <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : v)} />
          <Tooltip content={<ChartTooltip formatter={(v) => fmtEUR(v, 2)} />} />
          <Area type="monotone" dataKey="value" name="Valeur cumulée" stroke={color} strokeWidth={2} fill={`url(#${id})`} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function CLV() {
  const ratio = Math.round(clv.b2b.value / clv.b2c.value)
  return (
    <Section id="clv" eyebrow="3 · CLV" title="Customer Lifetime Value" subtitle={`Un client B2B vaut environ ${ratio} fois un abonné Premium B2C.`}>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { k: 'b2c', title: 'CLV B2C', icon: User, color: '#00D1FF', d: clv.b2c, hyp: ['Abonnement Premium : 1,99 €/mois', 'Durée moyenne : 24 mois'], calc: 'CLV = 1,99 × 24 = 47,76 €', dec: 2 },
          { k: 'b2b', title: 'CLV B2B', icon: Building2, color: '#00FFA3', d: clv.b2b, hyp: ['SaaS moyen : 500 €/mois', 'Durée de contrat : 36 mois'], calc: 'CLV = 500 × 36 = 18 000 €', dec: 0 },
        ].map((x, i) => (
          <Reveal key={x.k} delay={i * 0.1}>
            <Card hover={false}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 font-semibold text-white"><x.icon className="h-4 w-4" style={{ color: x.color }} /> {x.title}</div>
                <div className="font-display text-4xl font-semibold" style={{ color: x.color }}>
                  <Counter value={x.d.value} decimals={x.dec} suffix=" €" />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">{x.hyp.map((h) => <span key={h} className="chip">{h}</span>)}</div>
              <div className="mt-3 rounded-lg bg-black/20 px-3 py-2 font-mono text-sm text-slate-300">{x.calc}</div>
              <div className="mt-4"><Curve monthly={x.d.monthly} months={x.d.months} color={x.color} id={`clv-${x.k}`} /></div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
