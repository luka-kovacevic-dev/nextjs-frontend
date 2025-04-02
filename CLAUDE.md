# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run lint` - Run ESLint with automatic fixes
- `npm run pages:build` - Build for Cloudflare Pages deployment
- `npm run preview` - Preview locally on Cloudflare Pages
- `npm run deploy` - Build and deploy to Cloudflare Pages

## Code Style Guidelines

- **TypeScript:** Use strict typing with explicit interfaces for props
- **Components:** Follow UI/Section/Layout organization pattern
- **Imports Order:** React/Next.js → Third-party → Local modules with newlines between groups
- **Naming:** PascalCase for components/files, camelCase for functions/variables
- **Styling:** Use Tailwind CSS with `cn()` utility for combining classes
- **Client/Server:** Server components by default, Client components with `'use client'` directive
- **Edge Runtime:** Root layout and API routes should use `export const runtime = 'edge'`
- **File Structure:** App Router-based organization in src/app directory
- **Error Handling:** Descriptive error messages with appropriate fallbacks
- **Formatting:** 2-space indentation, 80-char line limit, single quotes
- **Component Props:** Use TypeScript interfaces with React.HTMLAttributes extensions