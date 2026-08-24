import CursorGlow from '@/components/CursorGlow'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import { About, Contact, Projects, Skills, Writing } from '@/components/Sections'
import { LanguageProvider } from '@/hooks/useLanguage'
import { useReveal } from '@/hooks/useReveal'

export default function Home() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <LanguageProvider>
      <div ref={ref} className="site">
        <CursorGlow />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Writing />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
