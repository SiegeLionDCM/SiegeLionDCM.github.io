import { useEffect, useRef } from 'react'
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
  const zoneRef = useRef<HTMLDivElement>(null)
  const lensRef = useRef<HTMLDivElement>(null)

  /**
   * 月食透镜：大标题默认模糊 + 色散，一个带亮月牙弧的圆窗跟随鼠标，
   * 圆窗内文字恢复清晰。触屏设备与减弱动态偏好下自动禁用。
   * Eclipse lens: the headline stays blurred with chromatic aberration;
   * a crescent-ringed lens follows the cursor and reveals sharp text.
   */
  useEffect(() => {
    const zone = zoneRef.current
    const lens = lensRef.current
    if (!zone || !lens) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    zone.classList.add('lens-active')

    let raf = 0
    let x = 0
    let y = 0
    let tx = 0
    let ty = 0

    const place = (px: number, py: number) => {
      zone.style.setProperty('--lens-x', `${px}px`)
      zone.style.setProperty('--lens-y', `${py}px`)
      lens.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`
    }

    const init = () => {
      const rect = zone.getBoundingClientRect()
      x = tx = rect.width * 0.3
      y = ty = rect.height * 0.5
      place(x, y)
      lens.style.opacity = '1'
    }

    const onMove = (e: MouseEvent) => {
      const rect = zone.getBoundingClientRect()
      tx = e.clientX - rect.left
      ty = e.clientY - rect.top
    }

    const tick = () => {
      // 缓动跟随，透镜略滞后于鼠标，更有"悬浮"感
      x += (tx - x) * 0.14
      y += (ty - y) * 0.14
      place(x, y)
      raf = requestAnimationFrame(tick)
    }

    const rafInit = requestAnimationFrame(init)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('resize', init)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(rafInit)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', init)
    }
  }, [])

  const lines = pick(profile.headline).split('\n')

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <p className="hero__eyebrow" data-reveal>
          <Sprout />
          <span>{pick(profile.role)}</span>
        </p>

        <div
          className="hero__lens-zone"
          ref={zoneRef}
          data-reveal
          data-reveal-delay="120"
        >
          <h1 className="hero__title hero__title--blurred">
            {lines.map((line, i) => (
              <span key={i} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <h1 className="hero__title hero__title--sharp" aria-hidden="true">
            {lines.map((line, i) => (
              <span key={i} className="hero__title-line">
                {line}
              </span>
            ))}
          </h1>
          <div className="lens" ref={lensRef} aria-hidden="true">
            <div className="lens__ring" />
            <div className="lens__crescent" />
          </div>
        </div>

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
