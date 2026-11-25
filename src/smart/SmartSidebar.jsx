import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Archive } from 'lucide-react'
import { nav, asOf } from '../data/dossier'

const links = nav.filter((n) => n.id)

function useActiveSection() {
  const [active, setActive] = useState(links[0].id)
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.3
        let current = links[0].id
        document.querySelectorAll('[data-section]').forEach((el) => {
          if (el.getBoundingClientRect().top <= line) current = el.dataset.section
        })
        setActive(current)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return active
}

function NavContent({ active, onNavigate }) {
  return (
    <nav className="space-y-0.5">
      {nav.map((item) =>
        item.group ? (
          <div key={item.group} className="px-3 pb-1 pt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {item.group}
          </div>
        ) : (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={onNavigate}
            className={`relative flex items-center rounded-lg px-3 py-1.5 text-sm transition ${active === item.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            {active === item.id && <motion.span layoutId="smart-nav-active" className="absolute inset-0 rounded-lg bg-white/[0.06] ring-1 ring-cyan-glow/30" />}
            <span className="relative">{item.label}</span>
          </a>
        ),
      )}
    </nav>
  )
}

function ArchiveLink() {
  return (
    <a href="?version=pitch-v1" className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-glow">
      <Archive className="h-3.5 w-3.5" /> Archive : pitch Smart Parking AI (V1)
    </a>
  )
}

export default function SmartSidebar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const idx = Math.max(0, links.findIndex((s) => s.id === active))
  const progress = ((idx + 1) / links.length) * 100

  const Brand = (
    <a href="#accueil" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-ink-900 shadow-glow">E</span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-semibold text-white">EasyPark · Pivot</span>
        <span className="block text-[11px] text-slate-500">Dossier stratégique · {asOf}</span>
      </span>
    </a>
  )

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/[0.06] bg-ink-950/70 backdrop-blur-xl lg:flex">
        <div className="p-5">{Brand}</div>
        <div className="mx-5 h-0.5 overflow-hidden rounded-full bg-white/5">
          <motion.div className="h-full bg-brand-gradient" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <NavContent active={active} />
        </div>
        <div className="border-t border-white/[0.06] p-4">
          <ArchiveLink />
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-ink-950/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        {Brand}
        <button onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10" aria-label="Ouvrir le menu">
          <Menu className="h-5 w-5" />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5">
          <div className="h-full bg-brand-gradient transition-all" style={{ width: `${progress}%` }} />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-white/10 bg-ink-950 p-5 lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mb-2 flex items-center justify-between">
                {Brand}
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10" aria-label="Fermer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <NavContent active={active} onNavigate={() => setOpen(false)} />
              <div className="mt-6 border-t border-white/10 pt-4">
                <ArchiveLink />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
