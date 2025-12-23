# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Haru Landing (하루 랜딩) - A landing page for "Haru" (하루), an AI friend and emotional-based matching service. The service positions itself as an "AI friend app" rather than a dating app, where users chat with AI friends who analyze emotional patterns and eventually suggest compatible human connections.

## Development Commands

```bash
# Start development server with hot reload
pnpm dev

# Build for production (runs TypeScript compiler then Vite build)
pnpm build

# Preview production build locally
pnpm preview
```

## Tech Stack

- **Vite 7.x** - Build tool and dev server
- **TypeScript 5.9** - Strict mode enabled with bundler module resolution
- **Tailwind CSS 4.x** - Utility-first CSS framework (via @tailwindcss/vite plugin)
- **Vanilla TypeScript** - No framework, direct DOM manipulation

## Project Structure

```
src/
  main.ts      # Entry point, renders app to #app div
  style.css    # Tailwind CSS entry point
index.html     # HTML entry point
vite.config.ts # Vite config with Tailwind plugin
```

## TypeScript Configuration

Strict TypeScript settings are enabled:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `verbatimModuleSyntax: true`
- `erasableSyntaxOnly: true`

Target: ES2022 with bundler module resolution.

## Service Context

See `.claude/docs/service-branding-guide.md` for comprehensive branding guidelines including:
- Service concept and value proposition
- Target personas
- Brand tone and visual style guidelines
- Page section structure recommendations
