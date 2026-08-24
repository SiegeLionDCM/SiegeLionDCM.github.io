# SiegeLionDCM.github.io

个人主页 · Personal Homepage — 极简暗色风格，中英双语，React + Vite + Tailwind CSS。

## 修改内容

所有文案都集中在 **`src/content.ts`**，改这一个文件即可：
个人简介、技能清单、项目作品、博客链接、联系方式、社交账号。

## 本地开发

```bash
npm install
npm run dev      # 本地预览
npm run build    # 构建到 dist/
```

## 部署

### Cloudflare Pages
- 构建命令：`npm run build`
- 输出目录：`dist`

### GitHub Pages
仓库名即 `SiegeLionDCM.github.io`，可用 GitHub Actions 或 `gh-pages` 分支发布 `dist/`。
