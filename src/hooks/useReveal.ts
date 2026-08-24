import { useEffect, useRef } from 'react'

/**
 * 滚动渐显：给元素加上 data-reveal 属性（可选 data-reveal-delay="毫秒"），
 * 进入视口时自动添加 .is-revealed 触发过渡动画。
 * Scroll reveal: add data-reveal to any element; .is-revealed is
 * toggled by an IntersectionObserver when it enters the viewport.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!targets.length) return

    targets.forEach((el) => {
      const delay = el.dataset.revealDelay
      if (delay) el.style.transitionDelay = `${delay}ms`
    })

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
