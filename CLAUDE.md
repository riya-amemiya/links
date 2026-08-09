# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server on port 3000
- `bun run build` - Build for production (standalone output for Cloudflare)
- `bun run build:turbo` - Build with Turbo caching
- `bun run start` - Start production server on port 8080
- `bun run lint` - Run ESLint and Biome checks
- `bun run lint:fix` - Fix ESLint and Biome issues automatically
- `bun run test` - Run Vitest tests (requires Playwright browsers)
- `bun run test:e2e` - Playwright e2e against production server (run `bun run build` first)
- `bun run test:e2e:screenshots` - Capture boot/home/works PNGs into `e2e/output/`
- `bun run storybook` - Start Storybook development server on port 6006
- `bun run build-storybook` - Build Storybook for static hosting
- `bun run preview` - OpenNextJS Cloudflare preview
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run cf-typegen` - Generate Cloudflare types

## Architecture Overview

This is a Next.js (v16) link aggregation and portfolio site with an arcade-style UI.
Content is fully static: TypeScript modules under `src/content/` plus images under `public/content/`.
There is no headless CMS. Deployed to Cloudflare Workers via OpenNextJS.

### Key Architecture Points

- **Framework**: Next.js with App Router, React 19, standalone output mode
- **Runtime**: Bun package manager, Node 24 (configured via devbox.json)
- **Deployment**: Cloudflare Workers via OpenNextJS (`riya-amemiya-links.tokidux.com`)
- **Styling**: Tailwind CSS v4 with CSS variables (OkLCH color space), class-variance-authority for component variants
- **UI Components**: Shadcn/UI (New York style) built on Radix UI primitives
- **Content**: In-repo TypeScript modules (no runtime CMS fetch)
  - `src/content/profile.ts` - name, biography, icon, links, level, role, skills
  - `src/content/works.ts` - portfolio items (link, description, image, blurb, meta, stack, type, year)
  - Images for content live in `public/content/`
  - Pages read via `src/lib/getContent.ts` (typed overloads for `"profile"` / `"works"`)

- **Icon System**: Centralized icon management through `src/config/iconData.ts` using Radix UI icons
  - Icons are referenced by string keys in content (`icon: [keyof typeof iconData]`)
  - Add new icons by importing from `@radix-ui/react-icons` and adding to the `iconData` object

- **Environment Variables Required**:
  - `NEXT_PUBLIC_URL` - Public site URL (production canonical URL)

### Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Boot screen
│   ├── not-found.tsx           # 404 page
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # Robots.txt
│   ├── sitemap.ts              # Sitemap
│   ├── home/                   # Character select (profile + links)
│   └── works/                  # Works/portfolio section
│       ├── page.tsx
│       ├── layout.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── ui/                     # Shadcn/UI components (auto-generated, do not lint)
│   └── arcade/                 # Arcade-themed UI (boot, select, briefing, …)
├── config/
│   ├── iconData.ts             # Icon string-key to component mapping
│   ├── defaultUrl.ts           # Site URL configuration
│   └── defaultMetadata.ts      # SEO metadata defaults
├── content/
│   ├── profile.ts              # Static profile + links content
│   └── works.ts                # Static works content
├── lib/
│   ├── getContent.ts           # Typed content accessors
│   ├── getWorkSlug.ts          # Work URL slug helper
│   └── utilities.ts            # cn() utility (clsx + tailwind-merge)
├── types/
│   ├── profileType.ts          # Profile interface
│   ├── linksType.ts            # Link interface (references iconData keys)
│   ├── worksType.ts            # Works/portfolio interface
│   └── imgType.ts              # Image metadata interface
├── stories/                    # Storybook stories (Button, Icon, Avatar)
└── styles/
    └── globals.css             # Tailwind directives, CSS variables, theme
public/
└── content/                    # Content images (git-tracked)
```

### Key Patterns

- **Server Components by default**: Pages import static content directly. Client components (`"use client"`) only for interactive UI (drawers, avatars).
- **Static content**: Edit `src/content/*` and commit; no API keys or CMS dashboard for content changes.
- **Component variants**: CVA (class-variance-authority) for button/component variants, `cn()` for class merging.
- **Module aliases**: `@/` → `src/`, `$/` → `src/stories/`, `%/` → `src/app/`

### Code Style & Linting

- **Biome**: Formatter (80-char width, 2-space indent) and linter with recommended rules
- **ESLint**: Flat config (v10+) with these enforced rules:
  - `react/jsx-sort-props: error` — JSX props must be sorted alphabetically
  - `import/order` — imports sorted alphabetically by group
  - `unicorn/filename-case` — kebab-case filenames (exceptions for Next.js special files)
- **Generated UI components** (`src/components/ui/`) are excluded from linting
- **TypeScript strict mode** with `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`, `noUncheckedIndexedAccess`

### Testing & Development

- Uses Vitest with Storybook integration for component testing
- Browser testing via Playwright (chromium, headless)
- Stories located in `src/stories/` using CSF format with play functions
- Storybook setup file: `.storybook/vitest.setup.ts`

### CI/CD

- **GitHub Actions** (`.github/workflows/build-test.yml`): lint → test → e2e → build on PRs and pushes to main
- **PR screenshots** (`.github/workflows/pr-screenshots.yml`): on pull_request, capture boot/home/works and comment images on the PR
- Runs on Ubuntu 24.04 ARM with Bun, managed via devbox
- **Dependabot**: weekly updates for Bun dependencies and GitHub Actions
- **OSV Scanner**: vulnerability scanning workflow
