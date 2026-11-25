import { Quote as QuoteIcon, XCircle, CheckCircle2 } from 'lucide-react'
import {
  e2Synthese, tendances2, concurrents, fiches, benchActeurs, benchParking, parcoursConcurrents, modelesEco,
  sharingActeurs, benchSharing, sharingLecons, mappingParking, mappingSharing, differenciation, positionnement,
  e2Informations, e2AValider,
} from '../../data/dossier'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink, TableWrap, Th, Td, SubTitle, Note } from '../ui'

function Cell({ value }) {
  const tone =
    value.startsWith('Oui') ? 'text-mint-glow' : value === 'Non vu' ? 'text-slate-500' : value.startsWith('Non') ? 'text-rose-300' : 'text-amber-200'
  return <span className={tone}>{value}</span>
}

export function E2Synthese() {
  return (
    <Section id="e2-synthese" eyebrow="Étape 2 · Marché et benchmark" title="Le pivot se différencie par l'automatisation, pas par les fonctions" subtitle={e2Synthese.lead}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {e2Synthese.constats.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-glow">0{i + 1}</span>
                <Proof code={c.proof} />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Tendances() {
  return (
    <Section
      id="tendances"
      eyebrow="2.1 · Tendances du marché"
      title="Les six tendances demandées sont déjà à l'œuvre en France"
      subtitle="La réservation et l'accès sans ticket sont devenus courants ; les applications convergent vers le tout-en-un."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {tendances2.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{t.title}</span>
                <Proof code="V" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.text}</p>
              <div className="mt-2">
                <SrcLink href={t.src} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Note code="E">
        Réserver une place et entrer par la plaque ne suffiront pas à différencier EasyPark : d'autres le font déjà. Le guidage à la place existe, mais pour orienter vers une place libre, pas pour réserver une place précise à l'avance.
      </Note>
    </Section>
  )
}

export function Concurrents() {
  return (
    <Section
      id="concurrents"
      eyebrow="2.2 et 2.3 · Concurrents"
      title="Indigo Neo pour Smart Parking, Yespark-Zenpark pour Smart Sharing"
      subtitle="Aucun concurrent trouvé ne propose le niveau premium, place précise et guidage, dans une app grand public. Parkimeter n'est pas listé : il appartient au groupe Arrive."
    >
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Axe</Th>
            <Th>Concurrents directs</Th>
            <Th>Indirects et substituts</Th>
          </tr>
        </thead>
        <tbody>
          {concurrents.map((c) => (
            <tr key={c.axe}>
              <Td className="font-semibold text-white">{c.axe}</Td>
              <Td>{c.directs}</Td>
              <Td className="text-slate-400">{c.indirects}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Fiches concurrents</SubTitle>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fiches.map((f, i) => (
          <Reveal key={f.name} delay={i * 0.04}>
            <Card className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-lg font-semibold text-white">{f.name}</span>
                <SrcLink href={f.src} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.what}</p>
              <dl className="mt-3 flex-1 space-y-2 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">Modèle</dt>
                  <dd className="text-slate-300">{f.model}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-slate-500">Audience déclarée</dt>
                  <dd className="text-slate-300">{f.audience}</dd>
                </div>
              </dl>
              <div className="mt-3 grid gap-2 text-xs">
                <span className="rounded-lg border border-mint-glow/20 bg-mint-glow/[0.05] px-3 py-2 text-slate-300">+ {f.plus}</span>
                <span className="rounded-lg border border-rose-400/20 bg-rose-400/[0.05] px-3 py-2 text-slate-300">− {f.moins}</span>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">Audiences déclarées par les acteurs eux-mêmes, non comparables entre elles. Données (V) sauf mention (H) ou (E).</p>
    </Section>
  )
}

export function BenchParking() {
  return (
    <Section
      id="bench-parking"
      eyebrow="2.4 · Benchmark Smart Parking"
      title="Personne ne réserve tout seul à partir de l'heure d'arrivée"
      subtitle="Tous les acteurs étudiés demandent au conducteur de choisir un parking et un créneau. C'est le seul élément du niveau 1 qui n'a pas été trouvé ailleurs ; une recherche plus large reste à faire (H)."
    >
      <TableWrap minWidth={980}>
        <thead>
          <tr>
            <Th>Fonction</Th>
            {benchActeurs.map((a) => (
              <Th key={a} className={a.startsWith('EasyPark') ? 'text-cyan-glow' : ''}>
                {a}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benchParking.map((row) => (
            <tr key={row.f} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{row.f}</Td>
              {row.v.map((v, i) => (
                <Td key={benchActeurs[i]} className={i === 0 ? 'bg-cyan-glow/[0.03]' : ''}>
                  <Cell value={v} />
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <p className="mt-2 text-xs text-slate-500">« Non vu » : la fonction n'apparaît pas dans les pages officielles consultées.</p>

      <SubTitle>Parcours client comparé</SubTitle>
      <div className="space-y-3">
        {parcoursConcurrents.map((p) => (
          <Card key={p.name} className={`grid gap-2 md:grid-cols-[200px_1fr_auto] md:items-center ${p.proof === 'H' ? 'border-cyan-glow/30' : ''}`}>
            <span className={`font-semibold ${p.proof === 'H' ? 'text-cyan-glow' : 'text-white'}`}>{p.name}</span>
            <span className="text-sm leading-relaxed text-slate-300">{p.steps}</span>
            <span className="flex items-center gap-2">
              <Proof code={p.proof} />
              {p.src && <SrcLink href={p.src} />}
            </span>
          </Card>
        ))}
      </div>

      <SubTitle>Modèles économiques</SubTitle>
      <TableWrap minWidth={860}>
        <thead>
          <tr>
            <Th>Modèle</Th>
            <Th>Qui paie</Th>
            <Th>Exemples</Th>
            <Th>Lecture pour EasyPark (E)</Th>
          </tr>
        </thead>
        <tbody>
          {modelesEco.map((m) => (
            <tr key={m.model}>
              <Td className="font-semibold text-white">{m.model}</Td>
              <Td>{m.payer}</Td>
              <Td>{m.examples}</Td>
              <Td className="text-slate-400">{m.reading}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <Note code="R">Les tarifs se fixent parking par parking : faire un relevé de prix sur 10 parkings, un même créneau, à Paris et à Lyon, sur chaque plateforme.</Note>
    </Section>
  )
}

export function BenchSharing() {
  return (
    <Section
      id="bench-sharing"
      eyebrow="2.5 · Benchmark Smart Sharing"
      title="Gestion complète au mois, ou simple mise en relation sans commission"
      subtitle="Yespark et Zenpark gèrent tout et se rémunèrent au succès ; Parkto met en relation sans commission pour le propriétaire. Les 15 % devront se justifier par un service que la mise en relation gratuite n'offre pas (E)."
    >
      <TableWrap minWidth={1000}>
        <thead>
          <tr>
            <Th>Critère</Th>
            {sharingActeurs.map((a) => (
              <Th key={a} className={a.startsWith('EasyPark') ? 'text-cyan-glow' : ''}>
                {a}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {benchSharing.map((row) => (
            <tr key={row.f} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{row.f}</Td>
              {row.v.map((v, i) => (
                <Td key={sharingActeurs[i]} className={i === row.v.length - 1 ? 'bg-cyan-glow/[0.03] text-slate-200' : ''}>
                  {v}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {sharingLecons.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{l.title}</span>
                <Proof code="E" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{l.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function ScatterMap({ data }) {
  const X = (s) => 120 + (s * 560) / data.xMax
  const Y = (s) => 410 - (s * 300) / data.yMax
  const xt = Array.from({ length: data.xMax + 1 }, (_, i) => i)
  const yt = Array.from({ length: data.yMax + 1 }, (_, i) => i)
  const v1 = data.points.find((p) => p.kind === 'v1')
  const v2 = data.points.find((p) => p.kind === 'v2')
  let arrow = null
  if (v1 && v2) {
    const dx = X(v2.x) - X(v1.x)
    const dy = Y(v2.y) - Y(v1.y)
    const len = Math.hypot(dx, dy)
    arrow = `M${X(v1.x) + (dx / len) * 12} ${Y(v1.y) + (dy / len) * 12}L${X(v2.x) - (dx / len) * 14} ${Y(v2.y) - (dy / len) * 14}`
  }
  const markerId = `arrow-${data.xMax}-${data.yMax}`
  return (
    <svg viewBox="0 0 760 480" className="w-full" role="img" aria-label={data.title}>
      <defs>
        <marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" fill="#00D1FF" />
        </marker>
      </defs>
      {data.note && (
        <text x="120" y="80" fontSize="13" fontWeight="600" fill="#e2e8f0">
          {data.note}
        </text>
      )}
      {xt.map((s) => (
        <line key={`gx${s}`} x1={X(s)} x2={X(s)} y1={Y(data.yMax)} y2={Y(0)} stroke="rgba(255,255,255,0.07)" />
      ))}
      {yt.map((s) => (
        <line key={`gy${s}`} x1={X(0)} x2={X(data.xMax)} y1={Y(s)} y2={Y(s)} stroke="rgba(255,255,255,0.07)" />
      ))}
      <line x1={X(0)} x2={X(data.xMax)} y1={Y(0)} y2={Y(0)} stroke="rgba(255,255,255,0.25)" />
      <line x1={X(0)} x2={X(0)} y1={Y(data.yMax)} y2={Y(0)} stroke="rgba(255,255,255,0.25)" />
      {xt.map((s) => (
        <text key={`tx${s}`} x={X(s)} y={Y(0) + 24} textAnchor="middle" fontSize="12" fill="#94a3b8">
          {s}
        </text>
      ))}
      {yt.map((s) => (
        <text key={`ty${s}`} x={X(0) - 14} y={Y(s) + 4} textAnchor="end" fontSize="12" fill="#94a3b8">
          {s}
        </text>
      ))}
      <text x={X(data.xMax / 2)} y={Y(0) + 50} textAnchor="middle" fontSize="13" fill="#e2e8f0">
        {data.xLabel}
      </text>
      <text transform={`translate(52 ${Y(data.yMax / 2)}) rotate(-90)`} textAnchor="middle" fontSize="13" fill="#e2e8f0">
        {data.yLabel}
      </text>
      {arrow && <path d={arrow} stroke="#00D1FF" strokeWidth="2" strokeDasharray="6 5" fill="none" markerEnd={`url(#${markerId})`} />}
      {data.points.map((p) => {
        const ep = p.kind !== 'other'
        return (
          <g key={p.name}>
            <circle cx={X(p.x)} cy={Y(p.y)} r={ep ? 8 : 6.5} fill={ep ? '#00D1FF' : '#64748b'} fillOpacity={p.kind === 'v1' ? 0.3 : 1} stroke={ep ? '#00D1FF' : 'none'} strokeWidth="2">
              <title>{`${p.name} : ${p.x} / ${data.xMax} ; ${p.y} / ${data.yMax}`}</title>
            </circle>
            <text x={X(p.x) + p.lx} y={Y(p.y) + p.ly} textAnchor={p.anchor} fontSize="13" fontWeight={ep ? 600 : 400} fill={ep ? '#ffffff' : '#cbd5e1'}>
              {p.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

export function Mappings() {
  return (
    <Section
      id="mappings"
      eyebrow="2.6 et 2.7 · Mappings concurrentiels V1 et V2"
      title="Où se place EasyPark aujourd'hui, et après le pivot"
      subtitle="Chaque acteur est placé selon le nombre de critères qu'il remplit dans les tableaux 2.4 et 2.5. V1 = EasyPark aujourd'hui ; V2 = objectif du projet (H). Positions = jugement de l'équipe (E)."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {[mappingParking, mappingSharing].map((m) => (
          <Card key={m.title} hover={false}>
            <h3 className="font-display text-lg font-semibold text-white">{m.title}</h3>
            <div className="mt-3">
              <ScatterMap data={m} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.reading}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function Positionnement() {
  return (
    <Section
      id="positionnement"
      eyebrow="2.8 · Positionnement possible"
      title="Trois éléments sur dix peuvent fonder la différence, à condition de les prouver"
      subtitle="Les sept autres existent déjà : EasyPark peut les proposer, mais pas s'en servir comme argument de différence."
    >
      <div className="relative overflow-hidden rounded-2xl border border-cyan-glow/25 bg-gradient-to-br from-cyan-glow/[0.08] via-indigo-glow/[0.06] to-mint-glow/[0.05] p-6 sm:p-8">
        <div className="absolute -left-1 top-0 h-full w-1 bg-brand-gradient" />
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-glow">
          <QuoteIcon className="h-4 w-4" /> Positionnement proposé <Proof code="E" />
        </div>
        <p className="mt-3 font-display text-xl font-medium leading-snug text-white sm:text-2xl">{positionnement.statement}</p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300">{positionnement.appui}</p>
      </div>

      <SubTitle>Ce qui différencie vraiment</SubTitle>
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Élément</Th>
            <Th>Déjà proposé par</Th>
            <Th>Différenciant ?</Th>
          </tr>
        </thead>
        <tbody>
          {differenciation.map((d) => (
            <tr key={d.el} className={d.diff === 'oui' ? 'bg-mint-glow/[0.04]' : ''}>
              <Td className={`font-semibold ${d.diff === 'oui' ? 'text-white' : 'text-slate-300'}`}>{d.el}</Td>
              <Td>{d.who}</Td>
              <Td>
                {d.diff === 'oui' ? (
                  <span className="inline-flex items-center gap-1.5 text-mint-glow">
                    <CheckCircle2 className="h-4 w-4" /> Oui, à prouver
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-400">
                    <XCircle className="h-4 w-4" /> Non{d.note ? ` · ${d.note}` : ''}
                  </span>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Ce qu'il ne faut pas affirmer</SubTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {positionnement.nePas.map((t) => (
          <Card key={t} className="border-rose-400/15">
            <p className="text-sm leading-relaxed text-slate-300">{t}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export function E2Manques() {
  return (
    <Section id="e2-manques" eyebrow="Étape 2 · Informations à obtenir" title="Cinq vérifications avant l'étape 3" subtitle="Elles confirmeront ou corrigeront les éléments de différence.">
      <TableWrap minWidth={860}>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Information</Th>
            <Th>Pourquoi</Th>
            <Th>Comment l'obtenir</Th>
          </tr>
        </thead>
        <tbody>
          {e2Informations.map((d) => (
            <tr key={d.n}>
              <Td className="font-mono text-cyan-glow">{d.n}</Td>
              <Td className="font-semibold text-white">{d.info}</Td>
              <Td>{d.why}</Td>
              <Td className="text-slate-400">{d.how}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <SubTitle>À valider avant l'étape 3</SubTitle>
      <div className="grid gap-2 md:grid-cols-3">
        {e2AValider.map((v) => (
          <div key={v} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-slate-300">
            {v}
          </div>
        ))}
      </div>
    </Section>
  )
}
