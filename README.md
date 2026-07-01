# Encryvia Labs

Modern marketing website and starter platform for Encryvia Labs, built with Next.js App Router, Tailwind CSS, TypeScript, and a Node.js Express API.

## Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Express, TypeScript, Zod, Helmet, CORS
- Tooling: pnpm workspaces, ESLint, Prettier, Vitest

## Scripts

- `pnpm dev` - start web and API in parallel
- `pnpm build` - build web and API
- `pnpm start` - start production web and API
- `pnpm lint` - run lint across the workspace
- `pnpm test` - run tests across the workspace
- `pnpm format` - format the workspace

## Local setup

1. Install dependencies with `pnpm install`.
2. Copy `.env.example` to `.env.local` or set the variables in your deployment platform.
3. Run `pnpm dev`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_API_BASE_URL`
- `API_PORT`
- `CORS_ORIGIN`
- `CONTACT_TO_EMAIL`

## Deployment notes

- Frontend is ready for Vercel or Netlify.
- API is designed to run on Render, Railway, DigitalOcean, AWS, or similar Node hosts.
- For production, set `NEXT_PUBLIC_API_BASE_URL` to the deployed API URL.

## Domain and SSL

- Point `encryvialabs.online` and `www.encryvialabs.online` at the frontend host as instructed by the platform.
- Confirm DNS propagation before switching the live link.
- Verify HTTPS/SSL is provisioned after the custom domain is attached.
- Use a `www` redirect strategy if your DNS provider or host recommends it.

## Content updates

- Replace representative projects with real case studies when available.
- Swap placeholder team and careers copy for live hiring information later.
