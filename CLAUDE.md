# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server on port 3000
- `bun run build` - Build for production
- `bun run start` - Start production server on port 8080
- `bun run lint` - Run ESLint and Biome checks
- `bun run lint:fix` - Fix ESLint and Biome issues automatically
- `bun run test` - Run Vitest tests
- `bun run storybook` - Start Storybook development server on port 6006

## Architecture Overview

This is a Next.js 15 link aggregation site that displays personal links and works, powered by MicroCMS as a headless CMS.

### Key Architecture Points

- **CMS Integration**: Uses MicroCMS JavaScript SDK for content management with three main content types:
  - `profile` - User profile with name, biography, icon, and associated links
  - `links` - Individual link entries with name, URL, and icon selection
  - `works` - Portfolio items linking to existing links with descriptions and images

- **Icon System**: Centralized icon management through `src/config/iconData.ts` using Radix UI icons
  - Icons are referenced by string keys in CMS content
  - Add new icons by importing and adding to the `iconData` object

- **Environment Variables Required**:
  - `MICROCMS_SERVICEDOMAIN` - MicroCMS service domain
  - `MICROCMS_API_KEY` - MicroCMS API key
  - `NEXT_PUBLIC_URL` - Public site URL

### Project Structure

- `src/lib/getMicrocms.ts` - Data fetching utilities for CMS content
- `src/lib/microcmsClient.ts` - MicroCMS client configuration
- `src/components/home/` - Homepage components for displaying links
- `src/components/works/` - Components for works/portfolio section
- `src/types/` - TypeScript type definitions for CMS content structures

### Testing & Development

- Uses Vitest with Storybook integration for component testing
- Storybook setup with browser testing via Playwright
- Biome for code formatting and linting alongside ESLint
