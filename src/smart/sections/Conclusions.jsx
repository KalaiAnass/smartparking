import { ExternalLink, Square } from 'lucide-react'
import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { vrio, swot, ges, gesNonCouvert, impactAxes, ecarts, ameliorations, informations, aValider, sources, asOf, S } from '../../data/dossier'
import { Section, Card, Reveal, ChartTooltip, fmtNum } from '../../components/ui/primitives'
import { Proof, SrcLink, TableWrap, Th, Td, VrioDot, State, SubTitle, Note } from '../ui'

const quadrants = [
  { key: 'forces', title: 'Forces', tone: 'border-mint-glow/25', dot: 'bg-mint-glow', side: 'Interne' },
  { key: 'faiblesses', title: 'Faiblesses', tone: 'border-rose-400/25', dot: 'bg-rose-300', side: 'Interne' },
  { key: 'opportunites', title: 'Opportunités', tone: 'border-cyan-glow/25', dot: 'bg-cyan-glow', side: 'Externe' },
  { key: 'menaces', title: 'Menaces', tone: 'border-amber-300/25', dot: 'bg-amber-300', side: 'Externe' },
]

export function Swot() {
  return (
    <Section
      id="swot"
      eyebrow="1.9 · Diagnostic interne et SWOT"
      title="Un assemblage difficile à copier, une faiblesse commerciale"
      subtitle="L'avantage d'EasyPark tient à des millions d'automobilistes identifiés par leur plaque, avec un paiement enregistré, et à des parkings déjà équipés pour les reconnaître. Sa faiblesse : un frais usager contesté et aucun lien connu avec centres commerciaux et hôtels."
    >
      <TableWrap minWidth={980}>
        <thead>
          <tr>
            <Th>Ressource</Th>
            <Th>Fait de référence</Th>
            <Th>V</Th>
            <Th>R</Th>
            <Th>I</Th>
            <Th>O</Th>
            <Th>Utile pour</Th>
          </tr>
        </thead>
        <tbody>
          {vrio.map((r) => (
            <tr key={r.res} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{r.res}</Td>
              <Td>
                <span className="text-slate-400">{r.fact}</span>
                <div className="mt-1">
                  <SrcLink href={r.src} />
                </div>
              </Td>
              <Td><VrioDot value={r.v} /></Td>
              <Td><VrioDot value={r.r} /></Td>
              <Td><VrioDot value={r.i} /></Td>
              <Td><VrioDot value={r.o} /></Td>
              <Td className="text-slate-400">{r.axes}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <p className="mt-2 text-xs text-slate-500">V = crée de la valeur · R = rare · I = difficile à imiter · O = l'organisation sait l'exploiter. Jugements de l'équipe (E).</p>

      <SubTitle>SWOT</SubTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {quadrants.map((q, qi) => (
          <Reveal key={q.key} delay={qi * 0.06}>
            <div className={`glass h-full border ${q.tone} p-5 sm:p-6`}>
              <div className="flex items-center justify-between">
                <h4 className="font-display text-lg font-semibold text-white">{q.title}</h4>
                <span className="text-[11px] uppercase tracking-wider text-slate-500">{q.side}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {swot[q.key].map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${q.dot}`} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Note code="E">
        Les forces d'EasyPark (identification par plaque, express pay, techniciens) correspondent à ce que demande Smart Parking. Pour Smart Sharing, l'avantage est plus mince : il repose surtout sur l'audience de l'app face à un leader déjà installé.
      </Note>
    </Section>
  )
}

export function Ecologie() {
  const total = ges.reduce((s, r) => s + r.t, 0)
  const pct = (v) => fmtNum((v / total) * 100, 1)
  return (
    <Section
      id="ecologie"
      eyebrow="1.10 · Impact écologique"
      title="72 % des émissions du groupe viennent de ses achats"
      subtitle={`Arrive, maison mère d'EasyPark, a émis ${fmtNum(total)} tonnes de CO2 équivalent en 2025 (méthode location-based). C'est son premier bilan consolidé ; il ne distingue pas EasyPark France.`}
    >
      <Card hover={false}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">Émissions 2025 du groupe Arrive par poste</h3>
            <p className="mt-1 text-sm text-slate-400">En tonnes de CO2 équivalent.</p>
          </div>
          <Proof code="V" />
        </div>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ges} layout="vertical" margin={{ top: 4, right: 120, bottom: 4, left: 8 }}>
              <XAxis type="number" hide domain={[0, 'dataMax']} />
              <YAxis type="category" dataKey="poste" width={200} tick={{ fill: '#cbd5e1', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip formatter={(v) => `${fmtNum(v)} t CO2e`} />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="t" name="Émissions" radius={[0, 4, 4, 0]} isAnimationActive={false}>
                {ges.map((r, i) => (
                  <Cell key={r.poste} fill={i === 0 ? '#00D1FF' : '#475569'} />
                ))}
                <LabelList
                  dataKey="t"
                  content={({ x, y, width, height, value }) => (
                    <text x={x + width + 8} y={y + height / 2} dy={4} fill="#e2e8f0" fontSize={12}>
                      {`${fmtNum(value)} t · ${pct(value)} %`}
                    </text>
                  )}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-slate-500">Total : {fmtNum(total)} t CO2e · catégories 4, 5, 9 et 11 du scope 3 non encore publiées</span>
          <SrcLink href={S.csr2025}>Arrive, rapport de durabilité 2025, tableau 4</SrcLink>
        </div>
      </Card>

      <SubTitle>Ce que le bilan ne couvre pas encore</SubTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {gesNonCouvert.map((g) => (
          <Card key={g.title}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-white">{g.title}</span>
              <Proof code={g.proof} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{g.text}</p>
          </Card>
        ))}
      </div>

      <SubTitle>Impact attendu des deux axes (E)</SubTitle>
      <TableWrap minWidth={720}>
        <thead>
          <tr>
            <Th>Axe</Th>
            <Th>Effet probable</Th>
            <Th>Poste concerné</Th>
          </tr>
        </thead>
        <tbody>
          {impactAxes.map((a) => (
            <tr key={a.axe}>
              <Td className="font-semibold text-white">{a.axe}</Td>
              <Td>{a.effet}</Td>
              <Td className="text-slate-400">{a.poste}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <Note code="R">Mesurer dès le pilote les kilomètres de recherche évités, en comparant le trajet réel au trajet sans réservation. Sans mesure, l'argument écologique ne pourra pas être utilisé en communication.</Note>
    </Section>
  )
}

function counts(rows) {
  return ['existe', 'partiel', 'manque'].map((s) => ({ s, n: rows.filter((r) => r.state === s).length }))
}

export function Ecarts() {
  return (
    <Section
      id="ecarts"
      eyebrow="1.11 · Existe, manque, à améliorer"
      title="Le cœur de Smart Parking manque ; le premium et Smart Sharing sont à construire"
      subtitle="Sur les dix étapes du service Smart Parking standard, trois existent déjà, quatre existent en partie et trois manquent : les disponibilités, la sélection automatique et la réservation."
    >
      <div className="space-y-10">
        {ecarts.map((block) => (
          <div key={block.title}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-white">{block.title}</h3>
              <div className="flex gap-2">
                {counts(block.rows).map((c) => (
                  <span key={c.s} className="inline-flex items-center gap-1.5">
                    <State value={c.s} />
                    <span className="font-mono text-xs text-slate-400">× {c.n}</span>
                  </span>
                ))}
              </div>
            </div>
            <TableWrap minWidth={860}>
              <thead>
                <tr>
                  <Th>Étape ou brique</Th>
                  <Th>État</Th>
                  <Th>Ce qui existe aujourd'hui (V)</Th>
                  <Th>Ce qu'il faut ajouter (E)</Th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r) => (
                  <tr key={r.step} className="transition hover:bg-white/[0.02]">
                    <Td className="font-semibold text-white">{r.step}</Td>
                    <Td><State value={r.state} /></Td>
                    <Td>{r.today}</Td>
                    <Td className="text-slate-400">{r.add}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrap>
          </div>
        ))}
      </div>

      <SubTitle>Améliorations utiles dès maintenant (R)</SubTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {ameliorations.map((a, i) => (
          <Reveal key={a} delay={i * 0.06}>
            <Card className="h-full">
              <span className="font-mono text-sm text-mint-glow">0{i + 1}</span>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{a}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Manques() {
  return (
    <Section
      id="manques"
      eyebrow="Informations à obtenir"
      title="Huit informations pour fiabiliser le diagnostic"
      subtitle="Les plus urgentes : le test de l'app et la liste des parkings compatibles express pay. Elles conditionnent l'étape 5 (POC)."
    >
      <TableWrap minWidth={900}>
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Information</Th>
            <Th>Pourquoi elle compte</Th>
            <Th>Comment l'obtenir</Th>
            <Th>Détenteur</Th>
          </tr>
        </thead>
        <tbody>
          {informations.map((d) => (
            <tr key={d.n} className="transition hover:bg-white/[0.02]">
              <Td className="font-mono text-cyan-glow">{d.n}</Td>
              <Td className="font-semibold text-white">{d.info}</Td>
              <Td>{d.why}</Td>
              <Td>{d.how}</Td>
              <Td className="text-slate-400">{d.who}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>À valider avant l'étape 2</SubTitle>
      <div className="grid gap-2 md:grid-cols-2">
        {aValider.map((v) => (
          <div key={v} className="flex gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed text-slate-300">
            <Square className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
            {v}
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Sources() {
  return (
    <Section id="sources" eyebrow="Sources" title="Pages consultées" subtitle={`Toutes les sources ont été ouvertes et vérifiées entre le 23 et le ${asOf}.`}>
      <div className="grid gap-8 lg:grid-cols-2">
        {sources.map((g) => (
          <div key={g.group}>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{g.group}</div>
            <ul className="space-y-2">
              {g.items.map(([label, url]) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noreferrer" className="group flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-glow/30 hover:text-white">
                    <span className="flex-1">{label}</span>
                    <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500 group-hover:text-cyan-glow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
