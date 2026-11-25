import { ExternalLink } from 'lucide-react'

const proofStyles = {
  V: 'border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow',
  H: 'border-amber-300/40 bg-amber-300/10 text-amber-200',
  E: 'border-indigo-glow/50 bg-indigo-glow/10 text-indigo-200',
  R: 'border-mint-glow/40 bg-mint-glow/10 text-mint-glow',
}
const proofTitles = {
  V: 'Donnée vérifiée, avec source et date',
  H: 'Hypothèse de travail, à tester',
  E: "Estimation de l'équipe, avec son calcul",
  R: 'Recommandation',
}

export function Proof({ code, className = '' }) {
  return (
    <span
      title={proofTitles[code]}
      className={`inline-grid h-5 min-w-5 place-items-center rounded-md border px-1 font-mono text-[10px] font-semibold ${proofStyles[code]} ${className}`}
    >
      {code}
    </span>
  )
}

export function SrcLink({ href, children = 'source' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-slate-500 underline decoration-white/20 underline-offset-2 transition hover:text-cyan-glow">
      {children}
      <ExternalLink className="h-3 w-3" />
    </a>
  )
}

const sensStyles = {
  Opportunité: 'border-mint-glow/30 bg-mint-glow/10 text-mint-glow',
  Menace: 'border-rose-400/30 bg-rose-400/10 text-rose-300',
  Incertain: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
}

export function Sens({ value }) {
  return <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${sensStyles[value]}`}>{value}</span>
}

const stateStyles = {
  existe: { cls: 'border-mint-glow/30 bg-mint-glow/10 text-mint-glow', label: 'Existe' },
  partiel: { cls: 'border-amber-300/30 bg-amber-300/10 text-amber-200', label: 'Partiel' },
  manque: { cls: 'border-rose-400/30 bg-rose-400/10 text-rose-300', label: 'Manque' },
}

export function State({ value }) {
  const s = stateStyles[value]
  return <span className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${s.cls}`}>{s.label}</span>
}

const vrioStyles = {
  oui: { dot: 'bg-mint-glow', text: 'Oui' },
  partiel: { dot: 'bg-amber-300', text: 'Partiel' },
  non: { dot: 'bg-slate-600', text: 'Non' },
}

export function VrioDot({ value }) {
  const s = vrioStyles[value]
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {s.text}
    </span>
  )
}

export function TableWrap({ children, minWidth = 720 }) {
  return (
    <div className="glass overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm" style={{ minWidth }}>
        {children}
      </table>
    </div>
  )
}

export function Th({ children, className = '' }) {
  return <th className={`border-b border-white/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 ${className}`}>{children}</th>
}

export function Td({ children, className = '' }) {
  return <td className={`border-b border-white/[0.05] px-4 py-3 align-top text-slate-300 ${className}`}>{children}</td>
}

export function SubTitle({ children }) {
  return <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">{children}</h3>
}

export function Note({ code, children }) {
  return (
    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400">
      <Proof code={code} className="mr-2 align-middle" />
      {children}
    </p>
  )
}
