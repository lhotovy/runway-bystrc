# AGENTS.md

## Cursor Cloud specific instructions

**Project**: Runway Bystrc — a static Next.js 15 website for a Christian community in Brno, Czech Republic.

**Architecture**: Single Next.js app (not a monorepo). Static site generation (SSG) only. No backend, no database, no API routes, no environment variables required.

**Runtime**: Node.js 20 + pnpm 9. The CI (`.github/workflows/master.yml`) uses these exact versions.

**Standard commands** (see `package.json` scripts):
- `pnpm dev` — starts the dev server on port 3000
- `pnpm build` — production SSG build
- `pnpm lint` — ESLint via `next lint`
- `pnpm start` — serves the production build

**i18n routing**: The site supports Czech (`cs`, default) and English (`en`). The root `/` redirects to `/cs` via Next.js middleware. Always use `/cs/...` or `/en/...` paths when testing.

**No secrets needed**: EmailJS uses hardcoded public keys in client code. Vercel Analytics is a no-op in local dev.

**No automated test suite**: The project has no unit/integration tests. CI only runs `pnpm lint` and `pnpm build`.
