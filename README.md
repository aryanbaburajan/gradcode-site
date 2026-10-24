# Gradcode website

Minimal standalone landing page for [Gradcode](https://github.com/aryanbaburajan/gradcode). Dark monospace styling with Gradcode's red brand palette.

## Deploy

- Build command: `npm run build`
- Output directory: `dist`
- No dependencies to install. Node 20+.

Vercel reads `vercel.json` to use the Other framework preset and serve `dist/` as static files. The Node server is for local development or Node hosts; it is not a Vercel Function. The configuration also sets the installer content type and release redirect.

The output is a static site suitable for Cloudflare Pages, Netlify, or any static host. `_headers` sets the extensionless `/install` file to plain text on hosts supporting that convention. On other hosts, configure `/install` to be served as plain text without an HTML fallback. Deploy at the domain root.

For a Node host, use `npm start`; it listens on `PORT` (default 4173).

## Local development

Run `npm run dev` and open http://localhost:4173.

The copy button uses the deployed site's origin for the curl command. The installer downloads the latest published Gradcode GitHub release, checks SHA-256, and installs to `~/.gradcode/bin`. The initial release supports Linux x64 with glibc and an AVX2-capable CPU. macOS, Windows, ARM, and musl builds are not available yet. Set `GRADCODE_INSTALL_DIR` to choose another directory.

The Download button and installer use GitHub’s latest-release asset URLs. The release workflow marks each published Gradcode release as latest, so both follow it automatically. The compatibility redirects in `server.mjs` and `vercel.json` also follow the latest release. Docs links to OpenCode's documentation.

## Benchmark figures

The benchmark section uses `public/benchmarks/landing-stat.json` and links the matching pinned methodology commit. Raw per-execution data is available at `public/benchmarks/results.json`. The 71.9% estimate applies only to 65 fully metered paired attempts; keep the 55.9% versus 83.8% all-run success rates and coverage footnote next to it. It is not a claim of total billed savings or equivalent quality.
