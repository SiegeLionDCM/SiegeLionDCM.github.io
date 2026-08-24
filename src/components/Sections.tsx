import type { ReactNode } from 'react'
import {
  about,
  facts,
  posts,
  profile,
  projects,
  skillGroups,
  socials,
  ui,
} from '@/content'
import { useLang } from '@/hooks/useLanguage'

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-head__index">{index}</span>
      <span className="section-head__slash" aria-hidden="true">/</span>
      <h2 className="section-head__title">{title}</h2>
    </div>
  )
}

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="section" id={id}>
      <SectionHead index={index} title={title} />
      {children}
    </section>
  )
}

/* ---------------- 01 关于我 ---------------- */
export function About() {
  const { pick } = useLang()
  return (
    <Section id="about" index="01" title={pick(ui.sections.about)}>
      <div className="about">
        <div className="about__bio">
          {about.map((p, i) => (
            <p key={i} data-reveal data-reveal-delay={String(i * 90)}>
              {pick(p)}
            </p>
          ))}
        </div>
        <dl className="about__facts">
          {facts.map((f, i) => (
            <div
              className="fact"
              key={i}
              data-reveal
              data-reveal-delay={String(i * 90)}
            >
              <dt>{pick(f.label)}</dt>
              <dd>{pick(f.value)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}

/* ---------------- 02 技能清单 ---------------- */
export function Skills() {
  const { pick } = useLang()
  return (
    <Section id="skills" index="02" title={pick(ui.sections.skills)}>
      <div className="skills">
        {skillGroups.map((g, gi) => (
          <div
            className="skill-group"
            key={gi}
            data-reveal
            data-reveal-delay={String(gi * 80)}
          >
            <h3 className="skill-group__title">{pick(g.title)}</h3>
            <ul className="skill-group__list">
              {g.items.map((item, ii) => (
                <li className="chip" key={ii}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- 03 项目作品 ---------------- */
export function Projects() {
  const { pick } = useLang()
  return (
    <Section id="projects" index="03" title={pick(ui.sections.projects)}>
      <ul className="projects">
        {projects.map((p, i) => (
          <li key={i} data-reveal data-reveal-delay={String(i * 80)}>
            <a
              className="project"
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className="project__year">{p.year}</span>
              <span className="project__body">
                <span className="project__name">
                  {p.name}
                  <span className="project__arrow" aria-hidden="true">↗</span>
                </span>
                <span className="project__desc">{pick(p.desc)}</span>
                <span className="project__tags">
                  {p.tags.map((tg, ti) => (
                    <span className="project__tag" key={ti}>{tg}</span>
                  ))}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

/* ---------------- 04 博客 / 文章 ---------------- */
export function Writing() {
  const { pick } = useLang()
  return (
    <Section id="writing" index="04" title={pick(ui.sections.writing)}>
      <ul className="posts">
        {posts.map((p, i) => (
          <li key={i} data-reveal data-reveal-delay={String(i * 80)}>
            <a
              className="post"
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className="post__title">{pick(p.title)}</span>
              <span className="post__meta">
                <time>{p.date}</time>
                <span className="post__arrow" aria-hidden="true">→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

/* ---------------- 05 联系方式 ---------------- */
export function Contact() {
  const { pick } = useLang()
  return (
    <Section id="contact" index="05" title={pick(ui.sections.contact)}>
      <div className="contact">
        <a
          className="contact__email"
          href={`mailto:${profile.email}`}
          data-reveal
        >
          {profile.email}
        </a>
        <ul className="contact__socials" data-reveal data-reveal-delay="120">
          {socials.map((s, i) => (
            <li key={i}>
              <a href={s.link} target="_blank" rel="noreferrer">
                {s.label}
                <span aria-hidden="true"> ↗</span>
              </a>
            </li>
          ))}
        </ul>
        {profile.location.zh && (
          <p className="contact__location" data-reveal data-reveal-delay="200">
            {pick(profile.location)}
          </p>
        )}
      </div>
    </Section>
  )
}
