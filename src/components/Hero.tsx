import { profile, ui } from '@/content'
import { useLang } from '@/hooks/useLanguage'

/** 萌发的新芽 —— 页首的生命符号 / A sprouting seedling, the sign of life */
function Sprout() {
  return (
    <svg
      className="hero__sprout"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="sprout-stem"
        d="M32 58 C32 44 32 36 32 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        className="sprout-leaf sprout-leaf--l"
        d="M32 30 C24 28 14 22 12 10 C24 12 30 20 32 30 Z"
        fill="currentColor"
      />
      <path
        className="sprout-leaf sprout-leaf--r"
        d="M32 26 C40 24 50 18 52 6 C40 8 34 16 32 26 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Hero() {
  const { pick } = useLang()

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow" data-reveal>
          <Sprout />
          <span>{pick(profile.role)}</span>
        </p>

        <h1 className="hero__title" data-reveal data-reveal-delay="120">
          {pick(profile.headline).split('\n').map((line, i) => (
            <span key={i} className="hero__title-line">
              {line}
            </span>
          ))}
        </h1>

        <p className="hero__tagline" data-reveal data-reveal-delay="240">
          {pick(profile.tagline)}
        </p>

        <div className="hero__cta" data-reveal data-reveal-delay="360">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {pick(ui.heroCtaPrimary)}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </a>
          <a className="btn btn--ghost" href="#projects">
            {pick(ui.heroCtaSecondary)}
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>{pick(ui.scrollHint)}</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
