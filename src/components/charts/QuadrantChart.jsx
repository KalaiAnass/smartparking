import { useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, ReferenceArea, ReferenceLine, ResponsiveContainer, Tooltip, LabelList } from 'recharts'

function Dot({ cx, cy, payload, hovered }) {
  const hero = payload.hero
  const active = hovered === payload.name
  return (
    <g style={{ cursor: 'pointer' }}>
      {hero && (
        <circle cx={cx} cy={cy} r={22} fill="#00FFA3" opacity={0.15}>
          <animate attributeName="r" values="14;28;14" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.35;0;0.35" dur="2.4s" repeatCount="indefinite" />
        </circle>
      )}
      <circle cx={cx} cy={cy} r={hero ? 10 : active ? 9 : 7} fill={hero ? '#00FFA3' : '#5B7FFF'} stroke="#0B1020" strokeWidth={2} />
    </g>
  )
}

function Tip({ active, payload }) {
  if (!active || !payload?.length) return null
  const p = payload[0].payload
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/95 px-3.5 py-2.5 text-sm shadow-xl">
      <div className={`font-semibold ${p.hero ? 'text-mint-glow' : 'text-white'}`}>{p.name}</div>
      <div className="mt-0.5 text-slate-400">{p.note}</div>
    </div>
  )
}

export default function QuadrantChart({ data, xLabel, yLabel, height = 420 }) {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 36, left: 10 }}>
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />
          <ReferenceArea x1={50} x2={100} y1={50} y2={100} fill="#00FFA3" fillOpacity={0.05} stroke="#00FFA3" strokeOpacity={0.2} strokeDasharray="4 4" />
          <ReferenceLine x={50} stroke="rgba(255,255,255,0.15)" />
          <ReferenceLine y={50} stroke="rgba(255,255,255,0.15)" />
          <XAxis type="number" dataKey="x" domain={[0, 100]} ticks={[0, 50, 100]} tickFormatter={(v) => (v === 0 ? 'Faible' : v === 100 ? 'Élevé' : '')} stroke="#64748b" label={{ value: xLabel, position: 'insideBottom', offset: -20, fill: '#94a3b8', fontSize: 13 }} />
          <YAxis type="number" dataKey="y" domain={[0, 100]} ticks={[0, 50, 100]} tickFormatter={(v) => (v === 0 ? 'Faible' : v === 100 ? 'Élevé' : '')} stroke="#64748b" label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 14, fill: '#94a3b8', fontSize: 13, style: { textAnchor: 'middle' } }} />
          <ZAxis range={[120, 120]} />
          <Tooltip content={<Tip />} cursor={false} />
          <Scatter data={data} shape={(p) => <Dot {...p} hovered={hovered} />} onMouseEnter={(d) => setHovered(d?.payload?.name ?? d?.name)} onMouseLeave={() => setHovered(null)} isAnimationActive animationDuration={900}>
            <LabelList dataKey="name" position="top" offset={14} style={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 600 }} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
