# Deployment

The site builds as prerendered static HTML and deploys to Cloudflare Workers with static assets.

## First-time setup

1. Copy `.env.production.example` to `.env.production`.
2. Set `VITE_SITE_URL` to the final HTTPS origin. Use one hostname consistently and omit the trailing slash.
3. Sign in to Cloudflare with `pnpm exec wrangler login` if needed.
4. In Cloudflare, attach the final custom domain to the `cascademath` Worker. Redirect any alternate hostname, such as the `www` version, to the canonical hostname.

Do not commit `.env.production`. The value is public, but keeping it local prevents preview builds from accidentally claiming the production canonical URL.

## Validate and deploy

```sh
pnpm test
pnpm deploy:dry-run
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
