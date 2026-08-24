import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Lang, LocalText } from '@/content'

interface LangCtx {
  lang: Lang
  toggle: () => void
  /** 取当前语言文本 */
  pick: (x: LocalText) => string
}

const Ctx = createContext<LangCtx>({
  lang: 'zh',
  toggle: () => {},
  pick: (x) => x.zh,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('site-lang')
      if (saved === 'zh' || saved === 'en') return saved
    } catch {
      /* ignore */
    }
    return 'zh'
  })

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === 'zh' ? 'en' : 'zh'
      try {
        localStorage.setItem('site-lang', next)
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const pick = (x: LocalText) => x[lang]

  return <Ctx.Provider value={{ lang, toggle, pick }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}
