# Gradcode website

Minimal standalone landing page for [Gradcode](https://github.com/aryanbaburajan/gradcode). Dark monospace styling with Gradcode's red brand palette.

## Deploy

- Build command: `npm run build`
- Output directory: `dist`
- No dependencies to install. Node 20+.

The output is a static site suitable for Cloudflare Pages, Netlify, or any static host. `_headers` sets the extensionless `/install` file to plain text on hosts supporting that convention. On other hosts, configure `/install` to be served as plain text without an HTML fallback. Deploy at the domain root.

For a Node host, use `npm start`; it listens on `PORT` (default 4173).

## Local development

Run `npm run dev` and open http://localhost:4173.

The copy button uses the deployed site's origin for the curl command. The installer downloads v0.1.0 from the Gradcode GitHub release, checks SHA-256, and installs to `~/.gradcode/bin`. The initial release supports Linux x64 with glibc and an AVX2-capable CPU. macOS, Windows, ARM, and musl builds are not available yet. Set `GRADCODE_INSTALL_DIR` to choose another directory.

The Download button links directly to the `gradcode-v0.1.0` release tag, keeping Gradcode releases separate from inherited OpenCode tags. When publishing a new release, update the version in `public/install`, the Download URL and version note in `public/index.html`, and the compatibility redirect in `server.mjs`. Docs links to OpenCode's documentation.
