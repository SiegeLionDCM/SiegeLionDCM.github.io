/* ============================================================
 *  网站内容配置文件 —— 你只需要改这一个文件！
 *  All site content lives here. Edit this file to update the site.
 *
 *  每个字段都有 zh（中文）和 en（英文）两个版本。
 *  修改后执行 `npm run build` 即可看到效果。
 * ============================================================ */

export type Lang = 'zh' | 'en'

export interface LocalText {
  zh: string
  en: string
}

const t = (zh: string, en: string): LocalText => ({ zh, en })

/* ---------------- 基本信息 ---------------- */
export const profile = {
  // 显示在导航栏和页首的名字
  name: 'SiegeLion',
  githubUser: 'SiegeLionDCM',
  // 页首大标题下方的身份描述
  role: t('开发者 / 持续学习者', 'Developer / Lifelong Learner'),
  // 页首大标题（支持换行用 \n）
  headline: t('Hi，我是小小攻城狮', "Hi, I'm SiegeLion"),
  // 页首副标题
  tagline: t(
    '你好，我是 SiegeLion。这里是我的个人主页，记录我的项目、思考与成长。',
    "Hi, I'm SiegeLion. This is my personal corner of the web — projects, thoughts, and growth."
  ),
  // 联系邮箱（页首按钮和联系模块都会用到）
  email: 'hello@example.com',
  // 所在城市（显示在联系模块，可留空）
  location: t('中国', 'China'),
}

/* ---------------- 导航与模块标题 ---------------- */
export const ui = {
  nav: {
    about: t('关于', 'About'),
    skills: t('技能', 'Skills'),
    projects: t('项目', 'Projects'),
    writing: t('文章', 'Writing'),
    contact: t('联系', 'Contact'),
  },
  sections: {
    about: t('关于我', 'About Me'),
    skills: t('技能清单', 'Skills'),
    projects: t('项目作品', 'Selected Projects'),
    writing: t('博客 / 文章', 'Writing'),
    contact: t('联系方式', 'Get in Touch'),
  },
  heroCtaPrimary: t('联系我', 'Get in Touch'),
  heroCtaSecondary: t('看看项目', 'View Projects'),
  scrollHint: t('继续滚动', 'Keep scrolling'),
  emailButton: t('写邮件', 'Say Hello'),
  footerNote: t('用心构建，持续生长。', 'Built with care, growing every day.'),
  copyright: t('保留所有权利。', 'All rights reserved.'),
}

/* ---------------- 01 关于我 ---------------- */
// 每个字符串是一个段落，可以随意增删
export const about: LocalText[] = [
  t(
    '我是一名热爱技术的开发者，日常工作围绕软件开发展开——从需求分析、架构设计到编码实现与持续优化。我相信好的工具和好的代码一样，都是在解决真实的问题。',
    "I'm a developer who loves technology. My daily work spans the full cycle of software development — from understanding requirements and designing architecture to writing code and refining it over time. I believe good tools, like good code, exist to solve real problems."
  ),
  t(
    '工作之外，我喜欢探索新技术、写点东西、整理自己的知识体系。这个站点就是我的数字花园：不求完美，但求持续生长。',
    'Outside of work, I enjoy exploring new technologies, writing, and organizing what I learn. This site is my digital garden — not perfect, but always growing.'
  ),
]

// 关于模块右侧的小事实列表（标签 + 内容）
export const facts: { label: LocalText; value: LocalText }[] = [
  { label: t('当前状态', 'Currently'), value: t('工作 & 学习中', 'Working & learning') },
  { label: t('关注领域', 'Interests'), value: t('Web / 工具 / 自动化', 'Web / Tools / Automation') },
  { label: t('常驻', 'Based in'), value: t('中国 · 远程友好', 'China · Remote friendly') },
]

/* ---------------- 02 技能清单 ---------------- */
// 分组展示，每组随意增删条目
export const skillGroups: { title: LocalText; items: string[] }[] = [
  {
    title: t('编程语言', 'Languages'),
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML / CSS'],
  },
  {
    title: t('框架与库', 'Frameworks'),
    items: ['React', 'Vite', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: t('工具链', 'Toolchain'),
    items: ['Git / GitHub', 'VS Code', 'Docker', 'Linux'],
  },
  {
    title: t('正在学习', 'Learning'),
    items: ['Rust', 'AI 应用开发', '云原生'],
  },
]

/* ---------------- 03 项目作品 ---------------- */
export interface Project {
  name: string
  desc: LocalText
  tags: string[]
  link: string // GitHub 或演示地址，没有可填 '#'
  year: string
}

export const projects: Project[] = [
  {
    name: 'SiegeLionDCM.github.io',
    desc: t(
      '这个个人主页本身：React + Vite 构建的极简双语站点，暗色画布上的一抹新绿。',
      'This very homepage: a minimal bilingual site built with React + Vite — a touch of green on a dark canvas.'
    ),
    tags: ['React', 'Vite', 'Tailwind'],
    link: 'https://github.com/SiegeLionDCM/SiegeLionDCM.github.io',
    year: '2026',
  },
  {
    name: '项目二（示例）',
    desc: t(
      '在 content.ts 里替换为你的真实项目：一两句话说明它解决什么问题、用了什么技术。',
      'Replace this in content.ts with a real project: one or two sentences on the problem it solves and the tech behind it.'
    ),
    tags: ['示例', 'Example'],
    link: '#',
    year: '2025',
  },
  {
    name: '项目三（示例）',
    desc: t(
      '再写一个。建议只放 2–4 个最有代表性的项目，保持页面的克制感。',
      'One more. Keep only 2–4 representative projects to preserve the page\u2019s restraint.'
    ),
    tags: ['示例', 'Example'],
    link: '#',
    year: '2024',
  },
]

/* ---------------- 04 博客 / 文章 ---------------- */
export interface Post {
  title: LocalText
  link: string
  date: string // 显示用，格式随意，如 2026-08
}

export const posts: Post[] = [
  {
    title: t('我的第一篇文章（示例）', 'My first post (example)'),
    link: '#',
    date: '2026-08',
  },
  {
    title: t('把博客搭起来之后，把链接替换到这里', 'Once your blog is up, drop the links here'),
    link: '#',
    date: '2026-08',
  },
]

/* ---------------- 05 联系方式 ---------------- */
export const socials: { label: string; link: string }[] = [
  { label: 'GitHub', link: 'https://github.com/SiegeLionDCM' },
  // 按需增删，例如：
  // { label: 'X / Twitter', link: 'https://x.com/yourname' },
  // { label: 'LinkedIn', link: 'https://linkedin.com/in/yourname' },
  // { label: '知乎', link: 'https://www.zhihu.com/people/yourname' },
]

/* ---------------- 页脚跑马灯 ---------------- */
export const marquee: LocalText = t(
  '保持好奇 · 持续生长 · STAY CURIOUS · KEEP GROWING · ',
  'STAY CURIOUS · KEEP GROWING · 保持好奇 · 持续生长 · '
)
