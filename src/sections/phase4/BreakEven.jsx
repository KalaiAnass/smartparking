import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceDot, Area, ComposedChart } from 'recharts'
import { Flag, Plus } from 'lucide-react'
import { Section, Card, Reveal, ChartTooltip, fmtEUR } from '../../components/ui/primitives'
import { breakEven, clv } from '../../data/project'

export default function BreakEven() {
  const data = Array.from({ length: 41 }, (_, n) => ({ n, Revenus: n * breakEven.b2bRevenue, Coûts: breakEven.cost }))
  const mixedB2B = breakEven.mixed.parkings * breakEven.b2bRevenue
  const mixedB2C = breakEven.mixed.premiumUsers * clv.b2c.monthly * 12
  const mixedTotal = mixedB2B + mixedB2C
  return (
    <Section id="break-even" eyebrow="5 · Seuil de rentabilité / Point mort" title="25 parkings pour couvrir les coûts" subtitle="Coût total 147 000 € ÷ revenu moyen B2B 6 000 €/an = 24,5 parkings.">
      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <Card hover={false}>
            <div className="h-80">
              <ResponsiveContainer>
                <ComposedChart data={data} margin={{ top: 20, right: 20, left: 10, bottom: 10 }}>
                  <defs>
                    <linearGradient id="be" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00FFA3" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#00FFA3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="n" stroke="#64748b" tickLine={false} ticks={[0, 10, 20, 25, 30, 40]} label={{ value: 'Parkings clients', position: 'insideBottom', offset: -6, fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k €`} width={60} />
                  <Tooltip content={<ChartTooltip />} labelFormatter={(l) => `${l} parkings`} />
                  <Area type="monotone" dataKey="Revenus" stroke="#00FFA3" strokeWidth={2.5} fill="url(#be)" />
                  <Line type="monotone" dataKey="Coûts" stroke="#FF4D6D" strokeWidth={2} strokeDasharray="6 4" dot={false} />
                  <ReferenceLine x={breakEven.parkingsRounded} stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3" label={{ value: 'Point mort', position: 'top', fill: '#fff', fontSize: 12 }} />
                  <ReferenceDot x={breakEven.parkingsRounded} y={breakEven.parkingsRounded * breakEven.b2bRevenue} r={7} fill="#00FFA3" stroke="#0B1020" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Reveal>
        <div className="grid gap-4">
          <Reveal>
            <div className="rounded-2xl border border-mint-glow/30 bg-mint-glow/[0.06] p-6">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-mint-glow"><Flag className="h-3.5 w-3.5" /> Point mort B2B</div>
              <div className="mt-2 font-display text-5xl font-bold text-white">{breakEven.parkingsRounded}</div>
              <div className="text-slate-300">parkings clients</div>
              <div className="mt-3 font-mono text-sm text-slate-400">147 000 / 6 000 = 24,5</div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card hover={false}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-glow">Ou point mort mixte</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1 rounded-xl bg-white/[0.03] p-3 text-center">
                  <div className="font-display text-2xl font-semibold text-white">{breakEven.mixed.parkings}</div>
                  <div className="text-[11px] text-slate-500">parkings</div>
                </div>
                <Plus className="h-4 w-4 text-slate-500" />
                <div className="flex-1 rounded-xl bg-white/[0.03] p-3 text-center">
                  <div className="font-display text-2xl font-semibold text-white">{breakEven.mixed.premiumUsers.toLocaleString('fr-FR')}</div>
                  <div className="text-[11px] text-slate-500">utilisateurs Premium</div>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="flex h-full">
                  <div className="bg-mint-glow" style={{ width: `${(mixedB2B / mixedTotal) * 100}%` }} />
                  <div className="bg-cyan-glow" style={{ width: `${(mixedB2C / mixedTotal) * 100}%` }} />
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-400">
                {fmtEUR(mixedB2B)} B2B + {fmtEUR(mixedB2C)} Premium (1,99 € × 12 mois) = <span className="text-white">{fmtEUR(mixedTotal)}</span> ≥ {fmtEUR(breakEven.cost)}
              </div>
              <p className="mt-3 text-sm text-slate-300">Le seuil de rentabilité est alors atteint avant la fin de l'année 1.</p>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
