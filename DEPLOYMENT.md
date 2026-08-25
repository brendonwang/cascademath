# Deployment

The site builds as prerendered static HTML and deploys to Cloudflare Workers with static assets.

## First-time setup

1. Copy `.env.production.example` to `.env.production`.
2. Set `VITE_SITE_URL` to the final HTTPS origin. Use one hostname consistently and omit the trailing slash.
3. Sign in to Cloudflare with `pnpm exec wrangler login` if needed.
4. In Cloudflare, attach the final custom domain to the `cascademath` Worker. Redirect any alternate hostname, such as the `www` version, to the canonical hostname.

### Mailing-list resources

Create the production D1 database once, then add the returned UUID as `database_id` on the existing `DB` entry in `wrangler.jsonc`:

```sh
pnpm wrangler d1 create cascademath-subscribers
```

Create a Managed Turnstile widget for the production hostname. Put its public sitekey in the `VITE_TURNSTILE_SITE_KEY` GitHub Actions variable and in `.env.production` when building locally.

Set the Worker secrets directly in Cloudflare. Do not put either value in a `VITE_*` variable or repository file:

```sh
pnpm wrangler secret put TURNSTILE_SECRET --config wrangler.jsonc
pnpm wrangler secret put UNSUBSCRIBE_SECRET --config wrangler.jsonc
```

`UNSUBSCRIBE_SECRET` should be a long random value used to sign `/unsubscribe?id=...&sig=...` links. The site only collects subscribers; it does not send newsletters or expose an admin endpoint.

Do not commit `.env.production`. The value is public, but keeping it local prevents preview builds from accidentally claiming the production canonical URL.

## Validate and deploy

```sh
pnpm test
pnpm deploy:dry-run
pnpm wrangler d1 migrations apply DB --remote --config wrangler.jsonc
pnpm deploy
```

`deploy:dry-run` requires the final `VITE_SITE_URL`. It verifies the prerendered routes, route-specific titles and descriptions, canonical URLs, structured data, `sitemap.xml`, `robots.txt`, the 404 page, and the Cloudflare asset configuration before packaging the Worker.

## After deployment

Check the following URLs on the public hostname:

- `/`, `/about`, `/cmf`, and `/sponsors` return `200`.
- An unknown path returns `404` and shows the site’s not-found page.
- `/robots.txt` links to `/sitemap.xml`.
- `/sitemap.xml` contains the four public routes on the canonical hostname.
- Page source contains the visible page content, a self-referencing canonical URL, and JSON-LD.

Then add the canonical property to Google Search Console, submit `/sitemap.xml`, and test the home page with Google’s Rich Results Test. Add Event structured data only after the venue and full street address are confirmed.

## Local Worker development

Copy `.dev.vars.example` to `.dev.vars` and fill in local values. Use Cloudflare’s official Turnstile test sitekey and matching test secret for local testing; never use those test credentials in production. Set the public test sitekey as `VITE_TURNSTILE_SITE_KEY` in `.env.local`.

```sh
pnpm install
pnpm wrangler d1 migrations apply DB --local --config wrangler.jsonc
pnpm build
pnpm wrangler dev --config wrangler.jsonc
```

The Worker handles `POST /api/subscribe` and `/unsubscribe`; all other requests continue through the existing `dist` static-assets configuration. Local D1 state is stored by Wrangler under `.wrangler/` and is ignored by Git.

## GitHub Actions deployment

The checked-in workflow builds the site, applies `pnpm wrangler d1 migrations apply DB --remote`, and only then deploys the Worker. Configure these GitHub values:

- Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- Actions variables: `VITE_SITE_URL`, `VITE_TURNSTILE_SITE_KEY`.

`TURNSTILE_SECRET` and `UNSUBSCRIBE_SECRET` remain Cloudflare Worker secrets and are not copied into GitHub Actions.
