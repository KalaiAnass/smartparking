import { useState } from 'react'
import { ArrowRight, CheckCircle2, Smartphone, Server, ParkingCircle, Wallet, Camera, Radar, Home } from 'lucide-react'
import {
  Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { Section, Card, Reveal, ChartTooltip, Tabs, fmtEUR, fmtNum } from '../../components/ui/primitives'
import { Proof, TableWrap, Th, Td, SubTitle } from '../ui'
import { ScatterMap } from './Benchmark'
import { mappingParking, mappingSharing } from '../../data/dossier'
import { compute, hyp, paliers, scenarios, unitEconomics } from '../../data/businessPlan'
import {
  e1Cartes, e1Swot, e2Concurrents, e2Differences, e3AvantApres, usp, vpc, personas, zmot, parcours, mvp, erreurs, poc, bmc,
  cibles, poem, lpGeo, pushPull, budgetMarketing, gantt, raciRoles, raci, risques, goNoGo, kpiParking, kpiSharing,
} from '../../data/etapes'

const central = compute('central')
const allScenarios = Object.fromEntries(Object.keys(scenarios).map((k) => [k, compute(k)]))
const k = (v) => `${fmtNum(v / 1000, 0)} k€`
const seuilTexte = (t) => (t.seuil ? `mois ${t.seuil}` : `mois ${t.projection} (projection)`)

function StepHeader({ n, title, essentiel }) {
  return (
    <div className="mb-8 max-w-4xl">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-display text-xl font-bold text-ink-900 shadow-glow">{n}</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>
      <p className="mt-4 rounded-2xl border border-cyan-glow/20 bg-cyan-glow/[0.05] px-5 py-4 text-base leading-relaxed text-slate-200">
        <span className="mr-2 font-semibold text-cyan-glow">L’essentiel :</span>
        {essentiel}
      </p>
    </div>
  )
}

function Step({ id, n, title, essentiel, children }) {
  return (
    <section id={id} data-section={id} className="scroll-mt-24 border-t border-white/[0.06] py-14 sm:py-20">
      <StepHeader n={n} title={title} essentiel={essentiel} />
      {children}
    </section>
  )
}

function List({ items, dot = 'bg-cyan-glow' }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-300">
          <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

// ---------------------------------------------------------------------------
export function Minute() {
  const t = central.total
  const qa = [
    ['Où en est EasyPark ?', 'N° 2 du paiement de stationnement par mobile en France (350+ villes, app notée 4,8/5). Son revenu vient surtout d’un frais payé par le conducteur, que des villes contestent.'],
    ['Quel problème ?', 'À l’arrivée, le conducteur perd du temps à chercher une place. EasyPark ne sait ni réserver une place ni louer des places privées, alors que des concurrents le font.'],
    ['Quel pivot ?', 'Deux nouveaux services dans l’app existante : Smart Parking (réservation automatique, standard et premium) et Smart Sharing (location de places privées).'],
    ['Comment ça marche ?', 'Le conducteur saisit sa destination. 15 min avant l’arrivée, l’app réserve une place dans un parking partenaire. La caméra lit la plaque, la barrière s’ouvre, le paiement est automatique.'],
    ['Quelle valeur ?', 'Conducteur : plus de recherche de place. Parking : plus de clients, entrée fluide. Propriétaire : un revenu avec une place vide.'],
    ['Comment EasyPark gagne de l’argent ?', 'Abonnement payé par les parkings (290 à 990 €/mois), 1 € par réservation premium, 15 % de commission sur les locations de places.'],
    ['Combien ça coûte ?', `${k(t.investissements)} d’investissement de départ (développement, intégrations, capteurs, juridique), puis environ ${k(hyp.run.equipe + hyp.run.ventes + hyp.run.outils + hyp.run.organique)} par mois de fonctionnement.`],
    ['Quel retour ?', `Scénario central : ${k(t.ca)} de chiffre d’affaires sur 15 mois. Le seuil de rentabilité (marge brute cumulée > investissements) est atteint au ${seuilTexte(t)}.`],
    ['Comment le déployer ?', '3 mois de construction, 3 mois de pilote avec 3 parkings et 1 quartier, décision Go / No-Go au mois 6, puis déploiement.'],
    ['Comment mesurer le succès ?', 'Des KPI suivis chaque mois : partenaires signés, réservations réussies, ouvertures automatiques, places louées, satisfaction.'],
  ]
  return (
    <Section id="minute" eyebrow="Le projet en 1 minute" title="Dix questions, dix réponses" subtitle="Tout le projet résumé pour quelqu’un qui découvre le sujet.">
      <div className="grid gap-3 md:grid-cols-2">
        {qa.map(([q, a], i) => (
          <Reveal key={q} delay={i * 0.03}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 font-mono text-xs font-semibold text-cyan-glow">{i + 1}</span>
                <span className="font-semibold text-white">{q}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// ---------------------------------------------------------------------------
export function Etape1() {
  return (
    <Step id="etape-1" n={1} title="Diagnostic d’EasyPark" essentiel="EasyPark sait très bien faire payer le stationnement, mais il ne sait ni réserver une place, ni louer des places privées. Son revenu repose sur un frais que les villes contestent.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {e1Cartes.map((c) => (
          <Card key={c.title}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-white">{c.title}</span>
              <Proof code={c.proof} />
            </div>
            <div className="mt-3">
              <List items={c.lines} />
            </div>
          </Card>
        ))}
      </div>
      <SubTitle>SWOT en un coup d’œil</SubTitle>
      <div className="grid gap-3 md:grid-cols-2">
        {[
          ['Forces', e1Swot.forces, 'border-mint-glow/25', 'bg-mint-glow'],
          ['Faiblesses', e1Swot.faiblesses, 'border-rose-400/25', 'bg-rose-300'],
          ['Opportunités', e1Swot.opportunites, 'border-cyan-glow/25', 'bg-cyan-glow'],
          ['Menaces', e1Swot.menaces, 'border-amber-300/25', 'bg-amber-300'],
        ].map(([t, items, tone, dot]) => (
          <div key={t} className={`glass border ${tone} p-5`}>
            <div className="mb-3 font-display text-lg font-semibold text-white">{t}</div>
            <List items={items} dot={dot} />
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-500">
        Diagnostic technique du site mobile easypark.com : mesure de performance et d’impact écologique à compléter. Le détail complet de l’étape 1 est en annexe.
      </p>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape2() {
  return (
    <Step id="etape-2" n={2} title="Marché et concurrents" essentiel="Réserver un parking, entrer par la plaque ou louer une place privée existent déjà ailleurs. Ce qui n’existe nulle part : une réservation qui se déclenche toute seule avant l’arrivée.">
      <TableWrap minWidth={720}>
        <thead>
          <tr>
            <Th>Concurrent</Th>
            <Th>Ce qu’il fait</Th>
            <Th>Ce qui lui manque</Th>
            <Th>Axe</Th>
          </tr>
        </thead>
        <tbody>
          {e2Concurrents.map((c) => (
            <tr key={c.name}>
              <Td className="font-semibold text-white">{c.name}</Td>
              <Td>{c.fait}</Td>
              <Td className="text-slate-400">{c.manque}</Td>
              <Td>
                <span className="chip">{c.axe}</span>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <SubTitle>Mapping concurrentiel V1 (aujourd’hui) et V2 (après le pivot)</SubTitle>
      <div className="grid gap-6 xl:grid-cols-2">
        {[mappingParking, mappingSharing].map((m) => (
          <Card key={m.title} hover={false}>
            <h3 className="font-display text-base font-semibold text-white">{m.title}</h3>
            <div className="mt-2">
              <ScatterMap data={m} />
            </div>
          </Card>
        ))}
      </div>
      <SubTitle>Ce qui différencie vraiment EasyPark</SubTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {e2Differences.map((d) => (
          <Card key={d} className="border-mint-glow/20">
            <CheckCircle2 className="h-5 w-5 text-mint-glow" />
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{d}</p>
          </Card>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">« Non trouvé » chez les acteurs français étudiés ; à confirmer par une recherche de brevets (H).</p>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape3() {
  return (
    <Step id="etape-3" n={3} title="Pivot et proposition de valeur" essentiel="EasyPark passe de « payer sa place » à « avoir sa place ». Il ajoute deux services dans la même app et deux nouvelles sources de revenus payées par les parkings et les locations.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card hover={false}>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Avant (V1)</div>
          <div className="mt-3">
            <List items={e3AvantApres.avant} dot="bg-slate-500" />
          </div>
        </Card>
        <Card hover={false} className="border-cyan-glow/30">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-glow">Après le pivot (V2)</div>
          <div className="mt-3">
            <List items={e3AvantApres.apres} />
          </div>
        </Card>
      </div>

      <SubTitle>USP V1 et V2</SubTitle>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {usp.map((u) => (
          <div key={u.offre} className={`rounded-2xl border p-5 ${u.v.startsWith('V1') ? 'border-white/10 bg-white/[0.02]' : 'border-cyan-glow/25 bg-cyan-glow/[0.05]'}`}>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              {u.v} · {u.offre}
            </div>
            <p className="mt-2 font-display text-lg font-medium leading-snug text-white">« {u.text} »</p>
          </div>
        ))}
      </div>

      <SubTitle>Value Proposition Canvas</SubTitle>
      <TableWrap minWidth={900}>
        <thead>
          <tr>
            <Th>Pour qui</Th>
            <Th>Ce qu’il veut</Th>
            <Th>Ce qui l’énerve</Th>
            <Th>Ce qu’il espère</Th>
            <Th>Notre réponse</Th>
          </tr>
        </thead>
        <tbody>
          {vpc.map((v) => (
            <tr key={v.segment}>
              <Td className="font-semibold text-white">{v.segment}</Td>
              <Td>{v.besoins}</Td>
              <Td className="text-rose-200/90">{v.douleurs}</Td>
              <Td>{v.gains}</Td>
              <Td className="text-mint-glow">{v.reponse}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape4() {
  return (
    <Step id="etape-4" n={4} title="Personas, ZMOT et parcours client" essentiel="Aujourd’hui, Sarah tourne 15 minutes pour trouver une place au centre commercial. Avec le pivot, sa place est réservée avant qu’elle arrive et la barrière s’ouvre toute seule.">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {personas.map((p) => (
          <Card key={p.name}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-white">{p.name}</span>
              <span className="chip">{p.offre}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{p.situation}</p>
            <p className="mt-2 text-sm italic text-slate-200">{p.citation}</p>
          </Card>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">Personas illustratifs, à valider par des entretiens (H).</p>

      <SubTitle>ZMOT : avant et après</SubTitle>
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Moment</Th>
            <Th>V1 : aujourd’hui</Th>
            <Th>V2 : avec le pivot</Th>
          </tr>
        </thead>
        <tbody>
          {zmot.map((z) => (
            <tr key={z.moment}>
              <Td className="font-semibold text-white">{z.moment}</Td>
              <Td className="text-slate-400">{z.v1}</Td>
              <Td className="text-mint-glow">{z.v2}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Customer Journey Canvas : le parcours de Sarah, V1 et V2</SubTitle>
      <Card hover={false}>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={parcours} margin={{ top: 10, right: 20, bottom: 0, left: -20 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="etape" stroke="#64748b" tickLine={false} fontSize={11} interval={0} angle={-20} textAnchor="end" height={50} />
              <YAxis domain={[-2, 2]} ticks={[-2, -1, 0, 1, 2]} stroke="#64748b" tickLine={false} axisLine={false} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.2)" />
              <Tooltip content={<ChartTooltip formatter={(v) => `${v > 0 ? '+' : ''}${v}`} />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="e1" name="Émotion V1" stroke="#94a3b8" strokeWidth={2} isAnimationActive={false} />
              <Line type="monotone" dataKey="e2" name="Émotion V2" stroke="#00D1FF" strokeWidth={3} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-1 text-xs text-slate-500">Émotion de −2 (très négative) à +2 (très positive) : illustratif (H).</p>
      </Card>
      <div className="mt-4">
        <TableWrap minWidth={760}>
          <thead>
            <tr>
              <Th>Étape</Th>
              <Th>V1 : ce qui se passe</Th>
              <Th>V2 : ce qui change</Th>
            </tr>
          </thead>
          <tbody>
            {parcours.map((p) => (
              <tr key={p.etape}>
                <Td className="font-semibold text-white">{p.etape}</Td>
                <Td className="text-slate-400">{p.v1}</Td>
                <Td>{p.v2}</Td>
              </tr>
            ))}
          </tbody>
        </TableWrap>
      </div>
    </Step>
  )
}

// ---------------------------------------------------------------------------
function Phone({ title, children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[200px] rounded-[28px] border border-white/15 bg-ink-950 p-2 shadow-xl">
        <div className="h-[360px] overflow-hidden rounded-[22px] bg-gradient-to-b from-ink-800 to-ink-900">
          <div className="flex items-center justify-between bg-white/[0.04] px-3 py-2 text-[10px] text-slate-400">
            <span className="font-semibold text-cyan-glow">EasyPark</span>
            <span>9:41</span>
          </div>
          <div className="space-y-2 p-3 text-[11px] text-slate-200">{children}</div>
        </div>
      </div>
      <div className="mt-2 text-center text-xs font-medium text-slate-300">{title}</div>
    </div>
  )
}

const Box = ({ children, accent }) => (
  <div className={`rounded-lg border px-2.5 py-2 ${accent ? 'border-cyan-glow/50 bg-cyan-glow/10' : 'border-white/10 bg-white/[0.04]'}`}>{children}</div>
)
const Btn = ({ children }) => <div className="rounded-lg bg-brand-gradient px-2 py-2 text-center text-[11px] font-semibold text-ink-900">{children}</div>
const Muted = ({ children }) => <div className="text-[10px] text-slate-500">{children}</div>

function Maquettes() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      <Phone title="1. Destination">
        <Box>🔍 Centre commercial (exemple)</Box>
        <Muted>Arrivée estimée : 15:20</Muted>
        <Box accent>
          <div className="font-semibold">Réservation automatique</div>
          <Muted>Nous réservons 15 min avant votre arrivée</Muted>
        </Box>
        <Btn>Activer</Btn>
      </Phone>
      <Phone title="2. Parking choisi">
        <div className="h-20 rounded-lg bg-[radial-gradient(circle_at_60%_40%,rgba(0,209,255,0.35),transparent_40%),linear-gradient(135deg,#1A2342,#111831)]" />
        <Box accent>
          <div className="font-semibold">Parking du centre · niveau −1</div>
          <Muted>250 m de l’entrée · 132 places libres</Muted>
        </Box>
        <Muted>Choisi : le plus proche avec places libres</Muted>
      </Phone>
      <Phone title="3. Confirmation">
        <div className="pt-2 text-center text-2xl">✅</div>
        <div className="text-center font-semibold">Place réservée</div>
        <Box>Plaque : AB-123-CD</Box>
        <Box>Valable jusqu’à 15:40</Box>
        <Muted>La barrière s’ouvrira à votre arrivée</Muted>
      </Phone>
      <Phone title="4. Premium">
        <div className="font-semibold">Choisir ma place (+1 €)</div>
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className={`rounded py-1 text-center text-[9px] ${i === 3 ? 'bg-cyan-glow text-ink-900' : i % 3 === 0 ? 'bg-rose-400/30' : 'bg-mint-glow/25'}`}>
              {`P${i + 1}`}
            </div>
          ))}
        </div>
        <Muted>Vert : libre · Rouge : occupée</Muted>
        <Btn>Réserver P4 · +1 €</Btn>
      </Phone>
      <Phone title="5. Guidage intérieur">
        <div className="font-semibold">Vers la place P4</div>
        <Box accent>⬆ Tout droit 40 m</Box>
        <Box>➡ À droite, allée B</Box>
        <Box>📍 P4 sur votre gauche</Box>
        <Muted>Écran à l’entrée et flèches au sol</Muted>
      </Phone>
      <Phone title="6. Paiement et facture">
        <div className="font-semibold">Stationnement terminé</div>
        <Box>Durée : 2 h 10</Box>
        <Box>Parking : 6,50 €</Box>
        <Box>Premium : 1,00 €</Box>
        <Box accent>
          <span className="font-semibold">Total : 7,50 €</span>
        </Box>
        <Btn>Télécharger la facture</Btn>
      </Phone>
      <Phone title="7. Publier ma place">
        <div className="font-semibold">Louer ma place</div>
        <Box>📍 12 rue des Lilas, Paris 15</Box>
        <Box>📷 3 photos</Box>
        <Box>🗓 Lun-ven, 8 h - 19 h</Box>
        <Box>💶 2 €/heure</Box>
        <Btn>Publier</Btn>
      </Phone>
      <Phone title="8. Réserver une place partagée">
        <Box>🔍 Près de : salle de concert</Box>
        <Box accent>
          <div className="font-semibold">Place privée · 180 m</div>
          <Muted>2 €/h · noté 4,8</Muted>
        </Box>
        <Box>
          <div className="font-semibold">Garage · 350 m</div>
          <Muted>1,50 €/h</Muted>
        </Box>
        <Btn>Réserver 3 h · 6 €</Btn>
      </Phone>
    </div>
  )
}

function Architecture() {
  const node = (Icon, title, sub, accent) => (
    <div className={`flex items-start gap-3 rounded-xl border p-3 ${accent ? 'border-cyan-glow/40 bg-cyan-glow/[0.06]' : 'border-white/10 bg-white/[0.03]'}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${accent ? 'text-cyan-glow' : 'text-slate-400'}`} />
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs leading-relaxed text-slate-400">{sub}</div>
      </div>
    </div>
  )
  const arrow = <ArrowRight className="mx-auto hidden h-5 w-5 text-cyan-glow/70 lg:block" />
  return (
    <div className="space-y-3">
      <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        {node(Smartphone, 'App EasyPark', 'Destination, heure d’arrivée (GPS), accord du conducteur')}
        {arrow}
        {node(Server, 'Plateforme EasyPark', 'Choix du parking, réservation 15 min avant, paiement, facture', true)}
        {arrow}
        {node(ParkingCircle, 'Système du parking', 'Compteur de places libres, caméra de plaque, barrière')}
      </div>
      <div className="grid items-center gap-3 lg:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
        {node(Radar, 'Capteurs premium', '10 places équipées : libre ou occupée')}
        {arrow}
        {node(Camera, 'Guidage intérieur', 'Écran à l’entrée, flèches jusqu’à la place')}
        {arrow}
        {node(Home, 'Propriétaire (Sharing)', 'Publie sa place, ses horaires, son prix')}
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="lg:col-start-2">{node(Wallet, 'Prestataire de paiement', 'Encaisse, reverse au propriétaire, garde 15 %, déclare au fisc')}</div>
      </div>
    </div>
  )
}

export function Etape5() {
  return (
    <Step id="etape-5" n={5} title="Solution, maquettes et POC" essentiel="Un MVP en 3 briques, testé pendant 3 mois avec 3 parkings déjà équipés de caméras, 10 places premium et 50 places partagées. Six critères chiffrés décident de la suite.">
      <div className="grid gap-4 md:grid-cols-3">
        {mvp.map((m) => (
          <Card key={m.offre}>
            <div className="font-semibold text-white">{m.offre}</div>
            <div className="mt-3">
              <List items={m.items} />
            </div>
          </Card>
        ))}
      </div>
      <SubTitle>Architecture fonctionnelle</SubTitle>
      <Architecture />
      <SubTitle>Maquettes des écrans principaux</SubTitle>
      <Maquettes />
      <SubTitle>Si quelque chose se passe mal</SubTitle>
      <TableWrap minWidth={640}>
        <thead>
          <tr>
            <Th>Cas</Th>
            <Th>Solution de secours</Th>
          </tr>
        </thead>
        <tbody>
          {erreurs.map((e) => (
            <tr key={e.cas}>
              <Td className="font-semibold text-white">{e.cas}</Td>
              <Td>{e.reponse}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <SubTitle>POC : périmètre et critères de validation</SubTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card hover={false}>
          <div className="font-semibold text-white">Périmètre</div>
          <div className="mt-3">
            <List items={poc.perimetre} />
          </div>
        </Card>
        <Card hover={false}>
          <div className="font-semibold text-white">Critères de validation (O)</div>
          <div className="mt-3 divide-y divide-white/[0.06]">
            {poc.criteres.map((c) => (
              <div key={c.kpi} className="flex items-center justify-between gap-3 py-2 text-sm">
                <span className="text-slate-300">{c.kpi}</span>
                <span className="font-mono text-mint-glow">{c.cible}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape6() {
  return (
    <Step id="etape-6" n={6} title="Business Model Canvas" essentiel="Le canevas garde tout ce qui existe et ajoute trois nouveaux clients (parkings, propriétaires, locataires) et trois nouveaux revenus (abonnements, premium, commissions).">
      <div className="grid gap-3 md:grid-cols-3">
        {bmc.map((b) => (
          <div key={b.bloc} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-glow/90">{b.bloc}</div>
            <p className="mt-2 text-sm text-slate-400">{b.avant}</p>
            <p className="mt-2 rounded-lg border border-mint-glow/25 bg-mint-glow/[0.06] px-3 py-2 text-sm text-slate-100">
              <span className="font-semibold text-mint-glow">+ </span>
              {b.plus}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">Gris : modèle actuel · Vert : ce qu’ajoutent Smart Parking et Smart Sharing.</p>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape7() {
  const totalBudget = budgetMarketing.reduce((s, b) => s + b.montant, 0)
  return (
    <Step id="etape-7" n={7} title="Stratégie commerciale et marketing digital" essentiel={`D’abord les canaux gratuits que possède EasyPark (son app, ses utilisateurs), puis la presse et le bouche-à-oreille, et seulement à partir du mois 7 la publicité payante. Budget : ${k(totalBudget)} sur 15 mois.`}>
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Cible</Th>
            <Th>Message</Th>
            <Th>Canaux</Th>
          </tr>
        </thead>
        <tbody>
          {cibles.map((c) => (
            <tr key={c.cible}>
              <Td className="font-semibold text-white">{c.cible}</Td>
              <Td>« {c.message} »</Td>
              <Td className="text-slate-400">{c.canal}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <SubTitle>POEM : owned, puis earned, puis paid</SubTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {poem.map((p, i) => (
          <Card key={p.type}>
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-semibold text-white">
                {i + 1}. {p.type}
              </span>
              <span className="chip">{p.quand}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.exemples}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card hover={false}>
          <div className="font-semibold text-white">Landing page</div>
          <div className="mt-3">
            <List items={lpGeo.lp} />
          </div>
        </Card>
        <Card hover={false}>
          <div className="font-semibold text-white">GEO : être cité par les IA</div>
          <div className="mt-3">
            <List items={lpGeo.geo} />
          </div>
        </Card>
      </div>
      <SubTitle>Push et pull : exemples</SubTitle>
      <div className="grid gap-3 md:grid-cols-2">
        {pushPull.map((p) => (
          <div key={p.exemple} className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm text-slate-300">
            <span className={`h-fit rounded-md px-2 py-0.5 text-xs font-semibold ${p.type === 'Push' ? 'bg-cyan-glow/15 text-cyan-glow' : 'bg-mint-glow/15 text-mint-glow'}`}>{p.type}</span>
            {p.exemple}
          </div>
        ))}
      </div>
      <SubTitle>Budget marketing (H)</SubTitle>
      <TableWrap minWidth={560}>
        <thead>
          <tr>
            <Th>Poste</Th>
            <Th>Période</Th>
            <Th>Montant</Th>
          </tr>
        </thead>
        <tbody>
          {budgetMarketing.map((b) => (
            <tr key={b.poste}>
              <Td className="font-semibold text-white">{b.poste}</Td>
              <Td>{b.periode}</Td>
              <Td className="font-mono">{fmtEUR(b.montant)}</Td>
            </tr>
          ))}
          <tr>
            <Td className="font-semibold text-white">Total</Td>
            <Td />
            <Td className="font-mono font-semibold text-cyan-glow">{fmtEUR(totalBudget)}</Td>
          </tr>
        </tbody>
      </TableWrap>
    </Step>
  )
}

// ---------------------------------------------------------------------------
export function Etape8() {
  const [sc, setSc] = useState('central')
  const r = allScenarios[sc]
  const t = r.total
  const chartCA = r.rows.map((x) => ({
    mois: `M${x.m}`,
    Abonnements: Math.round(x.caAbonnements),
    Premium: Math.round(x.caPremium),
    Sharing: Math.round(x.caSharing),
    Charges: Math.round(x.coutsVariables + x.run + x.paid + x.chargesSetup),
  }))
  const chartSeuil = central.rows.map((x, i) => ({
    mois: `M${x.m}`,
    Investissements: Math.round(x.cumInvest),
    Prudent: Math.round(allScenarios.prudent.rows[i].cumMarge),
    Central: Math.round(x.cumMarge),
    Ambitieux: Math.round(allScenarios.ambitieux.rows[i].cumMarge),
  }))
  const devTotal = hyp.dev.fte * hyp.dev.jours * hyp.tjm
  const integration = hyp.integration.parkings * hyp.integration.cout
  const capteurs = (hyp.capteurs.parPlace * hyp.capteurs.places + hyp.capteurs.passerelle + hyp.capteurs.guidage) * 10
  const invest = [
    ['Développement (4 personnes × 3 mois × 550 €/jour)', devTotal, 'Amorti sur 3 ans'],
    ['Intégration de 3 parkings pilotes (8 000 € chacun)', integration, 'Amorti sur 3 ans'],
    ['Capteurs premium : 10 parkings × 6 500 €', capteurs, 'Amorti sur 5 ans'],
    ['Juridique : CGU, RGPD, déclaration fiscale', hyp.juridique, 'Charge, non amortie'],
    ['Landing page et contenus GEO', hyp.landing, 'Charge, non amortie'],
  ]
  const ue = unitEconomics
  const clvP = ue.partenaire.margeMensuelle / ue.partenaire.churnMensuel
  const clvL = ue.locataire.reservationsParMois * ue.locataire.margeParResa * ue.locataire.dureeMois
  const sr = t.chargesFixesMensuelles / t.tauxMargeM15
  return (
    <Step
      id="etape-8"
      n={8}
      title="Business plan sur 15 mois"
      essentiel={`Investissement de ${k(central.total.investissements)}. Scénario central : ${k(central.total.ca)} de chiffre d’affaires sur 15 mois et seuil de rentabilité au ${seuilTexte(central.total)}, donc juste après l’horizon de 15 mois. Scénario ambitieux : seuil au ${seuilTexte(allScenarios.ambitieux.total)} ; prudent : au ${seuilTexte(allScenarios.prudent.total)}.`}
    >
      <div className="mb-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300">
        Règles du cours appliquées : setup les mois 1 à 3, run à partir du mois 4, publicité payante des mois 7 à 15 ; seuls les investissements sont amortis ; seuil de
        rentabilité = mois où la marge brute cumulée dépasse la somme des investissements. Tous les montants sont des hypothèses (H), sauf les frais de paiement (tarif
        public Stripe, V).
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card hover={false}>
          <div className="font-semibold text-white">Investissements de départ</div>
          <div className="mt-3 divide-y divide-white/[0.06]">
            {invest.map(([label, v, note]) => (
              <div key={label} className="flex items-start justify-between gap-3 py-2 text-sm">
                <span className="text-slate-300">
                  {label}
                  <span className="block text-xs text-slate-500">{note}</span>
                </span>
                <span className="font-mono text-white">{fmtEUR(v)}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 text-sm font-semibold">
              <span className="text-white">Total</span>
              <span className="font-mono text-cyan-glow">{fmtEUR(central.total.investissements)}</span>
            </div>
          </div>
        </Card>
        <Card hover={false}>
          <div className="font-semibold text-white">Revenus : trois sources</div>
          <div className="mt-3 space-y-2 text-sm">
            {paliers.map((p) => (
              <div key={p.name} className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                <span className="text-slate-300">
                  Abonnement {p.name} <span className="text-xs text-slate-500">· {p.capacite}</span>
                </span>
                <span className="font-mono text-white">{p.prix} €/mois</span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
              <span className="text-slate-300">Premium (10 places/parking, 1,2 réservation/place/jour)</span>
              <span className="font-mono text-white">1 €</span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
              <span className="text-slate-300">Sharing (panier 14 €, 40 % des places louées, 6 fois/mois)</span>
              <span className="font-mono text-white">15 %</span>
            </div>
            <p className="pt-1 text-xs text-slate-500">
              Abonnement moyen retenu : {hyp.abonnementMoyen} €/mois. Charges de run : {fmtEUR(hyp.run.equipe + hyp.run.ventes + hyp.run.outils + hyp.run.organique)} par mois (équipe, ventes, outils,
              marketing gratuit), plus la publicité à partir de M7.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-white">Chiffre d’affaires et charges par mois</h3>
        <Tabs tabs={Object.entries(scenarios).map(([key, s]) => ({ value: key, label: s.label }))} value={sc} onChange={setSc} />
      </div>
      <Card hover={false} className="mt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={chartCA} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="mois" stroke="#64748b" tickLine={false} fontSize={11} />
              <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} width={40} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <ReferenceLine x="M3" stroke="rgba(255,255,255,0.25)" strokeDasharray="4 4" label={{ value: 'fin du setup', fill: '#94a3b8', fontSize: 11, position: 'insideTopRight' }} />
              <ReferenceLine x="M7" stroke="rgba(255,255,255,0.25)" strokeDasharray="4 4" label={{ value: 'début du paid', fill: '#94a3b8', fontSize: 11, position: 'insideTopRight' }} />
              <Bar dataKey="Abonnements" stackId="ca" fill="#00D1FF" isAnimationActive={false} />
              <Bar dataKey="Premium" stackId="ca" fill="#5B7FFF" isAnimationActive={false} />
              <Bar dataKey="Sharing" stackId="ca" fill="#00FFA3" radius={[4, 4, 0, 0]} isAnimationActive={false} />
              <Line dataKey="Charges" stroke="#fb7185" strokeWidth={2} dot={false} isAnimationActive={false} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <SubTitle>Seuil de rentabilité : quand la marge brute cumulée dépasse les investissements</SubTitle>
      <Card hover={false}>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartSeuil} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="mois" stroke="#64748b" tickLine={false} fontSize={11} />
              <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} width={44} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area dataKey="Investissements" stroke="#fb7185" fill="rgba(251,113,133,0.08)" strokeWidth={2} isAnimationActive={false} />
              <Line dataKey="Prudent" stroke="#64748b" strokeWidth={2} dot={false} isAnimationActive={false} />
              <Line dataKey="Central" stroke="#00D1FF" strokeWidth={3} dot={false} isAnimationActive={false} />
              <Line dataKey="Ambitieux" stroke="#00FFA3" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <SubTitle>Les trois scénarios</SubTitle>
      <TableWrap minWidth={900}>
        <thead>
          <tr>
            <Th>Indicateur</Th>
            {Object.entries(scenarios).map(([key, s]) => (
              <Th key={key} className={key === 'central' ? 'text-cyan-glow' : ''}>
                {s.label}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            ['Chiffre d’affaires sur 15 mois', (x) => fmtEUR(x.total.ca)],
            ['Marge brute cumulée', (x) => fmtEUR(x.total.margeBrute)],
            ['Taux de marge brute', (x) => `${fmtNum(x.total.tauxMarge * 100)} %`],
            ['Investissements', (x) => fmtEUR(x.total.investissements)],
            ['Seuil de rentabilité (règle du cours)', (x) => seuilTexte(x.total)],
            ['Résultat d’exploitation au mois 15', (x) => fmtEUR(x.rows.at(-1).ebitda)],
            ['Trésorerie cumulée à M15', (x) => fmtEUR(x.total.cashCumule)],
            ['ROI sur 15 mois', (x) => `${fmtNum(x.total.roi * 100)} %`],
            ['ROAS (revenu EasyPark)', (x) => fmtNum(x.total.roasRevenu, 2)],
            ['ROAS (volume de transactions)', (x) => fmtNum(x.total.roasVolume, 2)],
          ].map(([label, fn]) => (
            <tr key={label}>
              <Td className="font-semibold text-white">{label}</Td>
              {Object.keys(scenarios).map((key) => (
                <Td key={key} className={`font-mono ${key === 'central' ? 'bg-cyan-glow/[0.04] text-white' : ''}`}>
                  {fn(allScenarios[key])}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <p className="mt-2 text-xs text-slate-500">
        Prudent : volumes × 0,6, paid 4 000 €/mois. Ambitieux : volumes × 1,4, paid 8 000 €/mois. ROI = (CA − coût total) / coût total. ROAS : la moitié des ventes B2C de M7 à M15 attribuée à la publicité (H).
        Projection : marge brute de M15 prolongée sans croissance.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <div className="text-[11px] uppercase tracking-wider text-slate-500">Seuil de rentabilité (SR)</div>
          <div className="mt-2 font-display text-2xl font-semibold text-white">{k(sr)} / mois</div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">CA mensuel qui couvre les charges fixes ({k(t.chargesFixesMensuelles)}) avec une marge brute de {fmtNum(t.tauxMargeM15 * 100)} %.</p>
        </Card>
        <Card>
          <div className="text-[11px] uppercase tracking-wider text-slate-500">Point mort (PM)</div>
          <div className="mt-2 font-display text-2xl font-semibold text-white">{seuilTexte(t)}</div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">Mois où la marge brute cumulée dépasse les investissements (scénario {scenarios[sc].label.toLowerCase()}).</p>
        </Card>
        <Card>
          <div className="text-[11px] uppercase tracking-wider text-slate-500">Parking partenaire : CLV / CAC</div>
          <div className="mt-2 font-display text-2xl font-semibold text-white">
            {fmtEUR(clvP)} / {fmtEUR(ue.partenaire.cac)}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">Marge de 525 €/mois, départ de 2 % des partenaires par mois ; coût des ventes divisé par 50 partenaires (H).</p>
        </Card>
        <Card>
          <div className="text-[11px] uppercase tracking-wider text-slate-500">Locataire Sharing : CLV / CAC</div>
          <div className="mt-2 font-display text-2xl font-semibold text-white">
            {fmtEUR(clvL)} / {fmtEUR(ue.locataire.cac)}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">2 locations/mois, 1,14 € de marge par location, 12 mois ; 36 000 € de paid pour 2 000 locataires (H).</p>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Card hover={false}>
          <div className="font-semibold text-white">À retenir</div>
          <div className="mt-3">
            <List
              items={[
                'Les abonnements des parkings font l’essentiel du chiffre d’affaires : c’est la vente B2B qui décide du succès.',
                `Si l’abonnement moyen baisse de 20 % (440 €), le seuil recule au mois 19 ; s’il monte de 20 % (660 €), il avance au mois 16.`,
                'La publicité B2C rapporte moins qu’elle ne coûte en revenu EasyPark (ROAS < 1) : il faut d’abord utiliser l’app (canal gratuit).',
              ]}
            />
          </div>
        </Card>
        <Card hover={false}>
          <div className="font-semibold text-white">Encaissements, revenus, trésorerie</div>
          <div className="mt-3">
            <List
              items={[
                'Abonnement annuel : encaissé en une fois, comptabilisé mois par mois.',
                'Sharing : EasyPark encaisse le prix de la location mais ne garde que 15 % en revenu ; 85 % sont reversés au propriétaire.',
                'Trésorerie : les investissements sont payés les mois 1 à 3 (et à l’installation des capteurs), alors qu’ils ne sont amortis que sur 3 à 5 ans.',
              ]}
            />
          </div>
        </Card>
      </div>

      <details className="group mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
        <summary className="cursor-pointer text-sm font-semibold text-white">Voir le tableau mois par mois (scénario {scenarios[sc].label.toLowerCase()})</summary>
        <div className="mt-4">
          <TableWrap minWidth={1000}>
            <thead>
              <tr>
                {['Mois', 'Partenaires', 'Places Sharing', 'CA', 'Coûts variables', 'Marge brute', 'Marge brute cumulée', 'Run + paid', 'Investissements', 'Trésorerie cumulée'].map((h) => (
                  <Th key={h}>{h}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {r.rows.map((x) => (
                <tr key={x.m}>
                  <Td className="font-mono text-white">M{x.m}</Td>
                  <Td className="font-mono">{x.partenaires}</Td>
                  <Td className="font-mono">{x.places}</Td>
                  <Td className="font-mono">{fmtEUR(x.ca)}</Td>
                  <Td className="font-mono">{fmtEUR(x.coutsVariables)}</Td>
                  <Td className="font-mono">{fmtEUR(x.margeBrute)}</Td>
                  <Td className="font-mono text-cyan-glow">{fmtEUR(x.cumMarge)}</Td>
                  <Td className="font-mono">{fmtEUR(x.run + x.paid + x.chargesSetup)}</Td>
                  <Td className="font-mono">{fmtEUR(x.invLogiciel + x.invCapteurs)}</Td>
                  <Td className="font-mono">{fmtEUR(x.cumCash)}</Td>
                </tr>
              ))}
            </tbody>
          </TableWrap>
        </div>
      </details>
    </Step>
  )
}

// ---------------------------------------------------------------------------
const phaseColor = { setup: 'bg-indigo-glow', run: 'bg-cyan-glow', paid: 'bg-mint-glow', gate: 'bg-amber-300' }

export function Etape9() {
  const months = Array.from({ length: 15 }, (_, i) => i + 1)
  return (
    <Step id="etape-9" n={9} title="Gestion de projet et déploiement" essentiel="3 mois pour construire, 3 mois de pilote, une décision Go / No-Go au mois 6, puis 9 mois de déploiement. Les deux risques majeurs : les parkings qui refusent de partager leurs données, et le RGPD.">
      <Card hover={false}>
        <div className="overflow-x-auto">
          <div style={{ minWidth: 760 }}>
            <div className="grid grid-cols-[200px_repeat(15,1fr)] gap-1 text-[11px] text-slate-500">
              <div />
              {months.map((m) => (
                <div key={m} className="text-center font-mono">
                  M{m}
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-1.5">
              {gantt.map((g) => (
                <div key={g.tache} className="grid grid-cols-[200px_repeat(15,1fr)] items-center gap-1">
                  <div className="truncate pr-2 text-sm text-slate-300">{g.tache}</div>
                  {months.map((m) => (
                    <div key={m} className={`h-5 rounded ${m >= g.debut && m <= g.fin ? phaseColor[g.phase] : 'bg-white/[0.03]'}`} />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-indigo-glow" /> Setup (M1-M3)</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-cyan-glow" /> Run</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-mint-glow" /> Paid (M7-M15)</span>
              <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded bg-amber-300" /> Décision</span>
            </div>
          </div>
        </div>
      </Card>

      <SubTitle>RACI</SubTitle>
      <TableWrap minWidth={860}>
        <thead>
          <tr>
            <Th>Activité</Th>
            {raciRoles.map((r) => (
              <Th key={r}>{r}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {raci.map((row) => (
            <tr key={row.activite}>
              <Td className="font-semibold text-white">{row.activite}</Td>
              {row.v.map((v, i) => (
                <Td key={raciRoles[i]} className="text-center">
                  <span className={`inline-grid h-6 w-6 place-items-center rounded-md text-xs font-semibold ${v === 'R' ? 'bg-cyan-glow text-ink-900' : v === 'A' ? 'bg-indigo-glow text-white' : v === 'C' ? 'bg-white/10 text-slate-200' : 'text-slate-500'}`}>
                    {v}
                  </span>
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <p className="mt-2 text-xs text-slate-500">R : réalise · A : décide et rend compte · C : consulté · I : informé.</p>

      <SubTitle>Risques et parades</SubTitle>
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Risque</Th>
            <Th>Niveau</Th>
            <Th>Parade</Th>
          </tr>
        </thead>
        <tbody>
          {risques.map((r) => (
            <tr key={r.risque}>
              <Td className="font-semibold text-white">{r.risque}</Td>
              <Td>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] ${r.niveau === 'Élevé' ? 'border-rose-400/30 bg-rose-400/10 text-rose-300' : 'border-amber-300/30 bg-amber-300/10 text-amber-200'}`}>{r.niveau}</span>
              </Td>
              <Td>{r.parade}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Go / No-Go au mois 6</SubTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {goNoGo.map((g, i) => (
          <div key={g.decision} className={`rounded-2xl border p-5 ${i === 0 ? 'border-mint-glow/30 bg-mint-glow/[0.05]' : i === 1 ? 'border-amber-300/30 bg-amber-300/[0.05]' : 'border-rose-400/30 bg-rose-400/[0.05]'}`}>
            <div className="font-display text-lg font-semibold text-white">{g.decision}</div>
            <p className="mt-1 text-sm text-slate-300">{g.regle}</p>
          </div>
        ))}
      </div>
    </Step>
  )
}

// ---------------------------------------------------------------------------
function KpiTable({ rows }) {
  return (
    <TableWrap minWidth={860}>
      <thead>
        <tr>
          <Th>KPI</Th>
          <Th>Formule</Th>
          <Th>Objectif (O)</Th>
          <Th>Fréquence</Th>
          <Th>Responsable</Th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.kpi}>
            <Td className="font-semibold text-white">{r.kpi}</Td>
            <Td className="text-slate-400">{r.formule}</Td>
            <Td className="font-mono text-mint-glow">{r.objectif}</Td>
            <Td>{r.freq}</Td>
            <Td className="text-slate-400">{r.resp}</Td>
          </tr>
        ))}
      </tbody>
    </TableWrap>
  )
}

export function Etape10() {
  return (
    <Step id="etape-10" n={10} title="KPI et pilotage de la performance" essentiel="Seize indicateurs, revus chaque semaine ou chaque mois. Les objectifs à 15 mois sont tirés du scénario central du business plan.">
      <h3 className="mb-4 font-display text-xl font-semibold text-white">Smart Parking</h3>
      <KpiTable rows={kpiParking} />
      <h3 className="mb-4 mt-10 font-display text-xl font-semibold text-white">Smart Sharing</h3>
      <KpiTable rows={kpiSharing} />
    </Step>
  )
}
