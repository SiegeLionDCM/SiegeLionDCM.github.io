import { marquee, profile, ui } from '@/content'
import { useLang } from '@/hooks/useLanguage'

/** 页脚：无限横向跑马灯 + 版权信息 / Footer with an infinite marquee */
export default function Footer() {
  const { pick } = useLang()
  const text = pick(marquee)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span className="marquee__text" key={i}>
              {text}
            </span>
          ))}
        </div>
      </div>
      <div className="footer__bar">
        <span>© {year} {profile.name}. {pick(ui.copyright)}</span>
        <span className="footer__note">{pick(ui.footerNote)}</span>
      </div>
    </footer>
  )
}
