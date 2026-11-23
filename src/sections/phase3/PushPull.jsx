import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, LabelList, CartesianGrid, Legend } from 'recharts'
import { Magnet, Megaphone } from 'lucide-react'
import { Section, Card, Reveal, ChartTooltip } from '../../components/ui/primitives'
import { pushPull } from '../../data/project'

export default function PushPull() {
  return (
    <Section id="push-pull" eyebrow="2 · Push / Pull" title="Un double moteur marketing" subtitle="L'objectif est que le SEO et la notoriété prennent progressivement le relais.">
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal>
          <Card className="h-full border-cyan-glow/20">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-white"><Magnet className="h-5 w-5 text-cyan-glow" /> Pull marketing</div>
            <p className="mt-1 text-sm text-slate-400">{pushPull.pull.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{pushPull.pull.levers.map((l) => <span key={l} className="chip border-cyan-glow/20">{l}</span>)}</div>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Exemple : article</div>
            <div className="mt-2 rounded-xl bg-white/[0.03] p-3 font-display text-white">« {pushPull.pull.example} »</div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card className="h-full border-indigo-glow/20">
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-white"><Megaphone className="h-5 w-5 text-indigo-glow" /> Push marketing</div>
            <p className="mt-1 text-sm text-slate-400">{pushPull.push.desc}</p>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Leviers B2C</div>
            <div className="mt-2 flex flex-wrap gap-1.5">{pushPull.push.b2c.map((l) => <span key={l} className="chip">{l}</span>)}</div>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Leviers B2B</div>
            <div className="mt-2 flex flex-wrap gap-1.5">{pushPull.push.b2b.map((l) => <span key={l} className="chip">{l}</span>)}</div>
          </Card>
        </Reveal>
        <Reveal delay={0.16}>
          <Card hover={false} className="h-full">
            <div className="text-sm font-semibold text-white">Répartition recommandée</div>
            <div className="mt-2 h-56">
              <ResponsiveContainer>
                <BarChart data={pushPull.ratio} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }} barSize={34}>
                  <CartesianGrid stroke="rgba(255,255,255,0.05)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} hide />
                  <YAxis type="category" dataKey="phase" stroke="#94a3b8" tickLine={false} axisLine={false} width={84} />
                  <Tooltip content={<ChartTooltip formatter={(v) => `${v} %`} />} />
                  <Legend wrapperStyle={{ fontSize: 12, color: '#94a3b8' }} />
                  <Bar dataKey="Pull" stackId="a" fill="#00D1FF" radius={[8, 0, 0, 8]}>
                    <LabelList dataKey="Pull" position="center" formatter={(v) => `${v}%`} style={{ fill: '#0B1020', fontWeight: 700, fontSize: 12 }} />
                  </Bar>
                  <Bar dataKey="Push" stackId="a" fill="#5B7FFF" radius={[0, 8, 8, 0]}>
                    <LabelList dataKey="Push" position="center" formatter={(v) => `${v}%`} style={{ fill: '#fff', fontWeight: 700, fontSize: 12 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
