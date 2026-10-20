# links

Amemiya Riya のリンク集・ポートフォリオサイトです。

アーケード風 UI でプロフィール、外部リンク、作品一覧を表示します。
コンテンツはリポジトリ内の TypeScript モジュールとして管理しており、外部 CMS には依存しません。

**Live:** https://riya-amemiya-links.tokidux.com

## Stack

- [TanStack Start](https://tanstack.com/start) + React 19 (all pages prerendered at build time)
- [Bun](https://bun.sh/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Cloudflare Workers](https://workers.cloudflare.com/) via [`@cloudflare/vite-plugin`](https://developers.cloudflare.com/workers/vite-plugin/)
- [Storybook](https://storybook.js.org/) + [Vitest](https://vitest.dev/)

## Getting started

```bash
# Install
bun install

# Dev server → http://localhost:3000
bun run dev
```

Production-ish local checks:

```bash
bun run lint
bun run test
bun run build
```

Cloudflare preview / deploy:

```bash
bun run preview
bun run deploy
```

## Editing content

All site content lives under `src/content/`.

| File | What it holds |
| --- | --- |
| `src/content/profile.ts` | Name, bio, skills, social / account links, profile icon |
| `src/content/works.ts` | Portfolio / project entries |

Images referenced by content go in `public/content/` (for example `profile-icon.png`).

Icon keys on links must match entries in `src/config/iconData.ts`.
To add an icon, import it from `@radix-ui/react-icons` and register it there.

After editing content, commit and deploy as usual — no CMS dashboard or API key is required.

## Environment

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_URL` | Production | Canonical site URL (used in metadata / sitemap / QR) |

Copy `.env` locally if needed. MicroCMS variables are no longer used.

## Project layout

```text
src/
  routes/        # TanStack Router file routes (boot → home → works)
  components/
    arcade/      # Arcade-themed UI
    ui/          # Shared primitives (shadcn-style)
  config/        # Metadata, site URL, icon map
  content/       # Static typed content (source of truth)
  lib/           # getContent, slug helpers, utilities
  types/         # Profile / link / work types
  stories/       # Storybook
  styles/        # Global CSS / theme tokens
public/
  content/       # Content images checked into git
```

Pages read content through `src/lib/getContent.ts` (thin typed accessors over the modules above).

## Scripts

| Script | Purpose |
| --- | --- |
| `bun run dev` | Vite dev server |
| `bun run build` | Production build with static prerendering |
| `bun run start` | Serve production build on port 8080 |
| `bun run lint` | oxlint + oxfmt |
| `bun run lint:fix` | Auto-fix lint |
| `bun run test` | Vitest / Storybook component tests |
| `bun run test:e2e` | Playwright e2e (boot / home / works). Requires `bun run build` first |
| `bun run test:e2e:screenshots` | Capture full-page PNGs under `e2e/output/` for PR comments |
| `bun run storybook` | Storybook on port 6006 |
| `bun run preview` | Build and preview on the Cloudflare Workers runtime |
| `bun run deploy` | Deploy to Cloudflare Workers |
| `bun run cf-typegen` | Generate Cloudflare binding types |

## License

See [LICENSE](./LICENSE).
