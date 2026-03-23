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
- `bun run storybook` - Start Storybook development server on port 6006
- `bun run build-storybook` - Build Storybook for static hosting
- `bun run preview` - OpenNextJS Cloudflare preview
- `bun run deploy` - Deploy to Cloudflare Workers
- `bun run cf-typegen` - Generate Cloudflare types

## Architecture Overview

This is a Next.js (v16) link aggregation site that displays personal links and portfolio works, powered by MicroCMS as a headless CMS. Deployed to Cloudflare Workers via OpenNextJS.

### Key Architecture Points

- **Framework**: Next.js with App Router, React 19, standalone output mode
- **Runtime**: Bun package manager, Node 24 (configured via devbox.json)
- **Deployment**: Cloudflare Workers via OpenNextJS (`riya-amemiya-links.tokidux.com`)
- **Styling**: Tailwind CSS v4 with CSS variables (OkLCH color space), class-variance-authority for component variants
- **UI Components**: Shadcn/UI (New York style) built on Radix UI primitives
- **CMS Integration**: MicroCMS JavaScript SDK for content management with three main content types:
  - `profile` - User profile with name, biography, icon, and associated links
  - `links` - Individual link entries with name, URL, and icon selection
  - `works` - Portfolio items linking to existing links with descriptions and images

- **Icon System**: Centralized icon management through `src/config/iconData.ts` using Radix UI icons
  - Icons are referenced by string keys in CMS content (`icon: [keyof typeof iconData]`)
  - Add new icons by importing from `@radix-ui/react-icons` and adding to the `iconData` object

- **Environment Variables Required**:
  - `MICROCMS_SERVICEDOMAIN` - MicroCMS service domain (secret)
  - `MICROCMS_API_KEY` - MicroCMS API key (secret)
  - `NEXT_PUBLIC_URL` - Public site URL

### Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page (profile + links)
│   ├── not-found.tsx           # 404 page
│   ├── manifest.ts             # PWA manifest
│   ├── robots.ts               # Robots.txt
│   ├── sitemap.ts              # Sitemap
│   └── works/                  # Works/portfolio section
│       ├── page.tsx
│       └── layout.tsx
├── components/
│   ├── ui/                     # Shadcn/UI components (auto-generated, do not lint)
│   │   ├── button.tsx, card.tsx, avatar.tsx, drawer.tsx, icon.tsx, label.tsx
│   ├── home/
│   │   └── links.tsx           # Home page links display
│   └── works/
│       └── links.tsx           # Works/portfolio grid with QR code modals
├── config/
│   ├── iconData.ts             # Icon string-key to component mapping
│   ├── defaultUrl.ts           # Site URL configuration
│   └── defaultMetadata.ts      # SEO metadata defaults
├── lib/
│   ├── getMicrocms.ts          # Type-safe CMS data fetching (function overloads)
│   ├── microcmsClient.ts       # MicroCMS client initialization
│   └── utilities.ts            # cn() utility (clsx + tailwind-merge)
├── types/
│   ├── profileType.ts          # Profile interface
│   ├── linksType.ts            # Link interface (references iconData keys)
│   ├── worksType.ts            # Works/portfolio interface
│   └── imgType.ts              # Image metadata interface
├── stories/                    # Storybook stories (Button, Icon, Avatar)
└── styles/
    └── globals.css             # Tailwind directives, CSS variables, theme
```

### Key Patterns

- **Server Components by default**: Pages use async data fetching directly. Client components (`"use client"`) only for interactive UI (drawers, avatars).
- **Type-safe CMS fetching**: `getMicrocms.ts` uses function overloads to return typed responses per endpoint.
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

- **GitHub Actions** (`.github/workflows/build-test.yml`): lint → test → build pipeline on PRs and pushes to main
- Runs on Ubuntu 24.04 ARM with Bun, managed via devbox
- **Dependabot**: weekly updates for Bun dependencies and GitHub Actions
- **OSV Scanner**: vulnerability scanning workflow
