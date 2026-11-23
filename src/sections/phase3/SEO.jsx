import { motion } from 'framer-motion'
import { FileText, Search, Briefcase } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { seo } from '../../data/project'

export default function SEO() {
  return (
    <Section id="seo" eyebrow="3 · Stratégie Ads + SEO" title="Être trouvé au moment du besoin" subtitle="Trois piliers SEO, un funnel de contenus et deux campagnes payantes ciblées.">
      <div className="grid gap-4 md:grid-cols-3">
        {seo.pillars.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <Card className="h-full">
              <div className="font-mono text-xs text-cyan-glow">Pilier n°{i + 1}</div>
              <div className="mt-1 font-display text-xl font-semibold text-white">{p.name}</div>
              <ul className="mt-4 space-y-2">
                {p.pages.map((pg) => (
                  <li key={pg} className="flex items-center gap-2 text-sm text-slate-300"><FileText className="h-4 w-4 text-slate-500" />{pg}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mb-4 mt-10 text-sm font-semibold text-white">Structure SEO — funnel</div>
      </Reveal>
      <div className="space-y-3">
        {seo.funnel.map((f, i) => (
          <Reveal key={f.level} delay={i * 0.1}>
            <motion.div
              className="mx-auto overflow-hidden rounded-2xl border border-white/10"
              style={{ width: `${100 - i * 14}%`, background: `linear-gradient(90deg, rgba(${i === 0 ? '91,127,255' : i === 1 ? '0,209,255' : '0,255,163'},0.16), rgba(255,255,255,0.02))` }}
            >
              <div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                <div className="shrink-0 sm:w-44">
                  <div className="font-display text-2xl font-bold text-white">{f.level}</div>
                  <div className="text-xs text-slate-400">{f.label} · {f.type}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {f.items.map((it) => <span key={it} className="rounded-lg bg-black/20 px-3 py-1.5 text-sm text-slate-200">{it}</span>)}
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"><Search className="h-4 w-4 text-cyan-glow" /> Google Ads — Campagne 1</div>
            <div className="rounded-xl bg-white p-4 text-left shadow-xl">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-900">Sponsorisé</span> · smartparking.ai
              </div>
              <div className="mt-1 text-lg font-medium text-[#1a0dab]">{seo.googleAds.title} | Smart Parking AI</div>
              <div className="mt-1 text-sm text-slate-700">{seo.googleAds.description}</div>
            </div>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Mots-clés</div>
            <div className="mt-2 flex flex-wrap gap-1.5">{seo.googleAds.keywords.map((k) => <span key={k} className="chip font-mono">{k}</span>)}</div>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white"><Briefcase className="h-4 w-4 text-mint-glow" /> LinkedIn Ads</div>
            <div className="rounded-xl border border-white/10 bg-ink-800 p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-gradient font-display font-bold text-ink-900">P</span>
                <div>
                  <div className="text-sm font-semibold text-white">Smart Parking AI</div>
                  <div className="text-[11px] text-slate-500">Sponsorisé</div>
                </div>
              </div>
              <div className="mt-3 font-display text-lg text-white">{seo.linkedinAds.message}</div>
              <div className="mt-3 rounded-lg bg-white/5 px-3 py-2 text-center text-sm font-semibold text-cyan-glow">Demander une démo</div>
            </div>
            <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Audience</div>
            <div className="mt-2 flex flex-wrap gap-1.5">{seo.linkedinAds.audience.map((k) => <span key={k} className="chip">{k}</span>)}</div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
