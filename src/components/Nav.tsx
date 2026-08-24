import { useEffect, useState } from 'react'
import { profile, ui } from '@/content'
import { useLang } from '@/hooks/useLanguage'

export default function Nav() {
  const { lang, toggle, pick } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: pick(ui.nav.about) },
    { href: '#skills', label: pick(ui.nav.skills) },
    { href: '#projects', label: pick(ui.nav.projects) },
    { href: '#writing', label: pick(ui.nav.writing) },
    { href: '#contact', label: pick(ui.nav.contact) },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a className="nav__brand" href="#top">
        <span className="nav__dot" aria-hidden="true" />
        {profile.name}
      </a>

      <nav className="nav__links" aria-label="Primary">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      <button
        className="lang-toggle"
        onClick={toggle}
        aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
      >
        <span className={lang === 'zh' ? 'is-active' : ''}>中</span>
        <span className="lang-toggle__divider" aria-hidden="true" />
        <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
      </button>
    </header>
  )
}
