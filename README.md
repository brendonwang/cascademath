# Cascade Math

Website for **Cascade Math**, a student-run organization bringing together middle school students in the Seattle area through math competitions, puzzles, and other events.

The site contains information about Cascade Math and the **Cascade Math Fest**, including event details, schedules, registration information, sponsors, and our team.

## Development

### Prerequisites

* [Node.js](https://nodejs.org/) 20.19+ or 22.12+
* [pnpm](https://pnpm.io/)

### Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/brendonwang/cascademath.git
cd cascademath
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Vite will start a local development server, typically at `http://localhost:5173`.

## Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **React Router**
* **Cloudflare Workers**
* **Cloudflare D1**
* **Cloudflare Turnstile**
* **Vitest**

The site is prerendered at build time to provide static HTML for its public routes while retaining the React application on the client.

## Project Structure

```text
.
├── public/              # Static assets
├── migrations/          # Cloudflare D1 migrations
├── scripts/             # Build and deployment scripts
├── src/
│   ├── components/      # Shared UI components
│   ├── content/         # Site content, team data, and SEO metadata
│   ├── images/          # Source images
│   ├── lib/             # Shared utilities
│   ├── pages/           # Page components
│   ├── test/            # Tests
│   ├── App.tsx          # Application routes
│   └── main.tsx         # Client entry point
├── DEPLOYMENT.md        # Deployment documentation
└── wrangler.jsonc       # Cloudflare Workers configuration
```

Most site copy and event information lives in `src/content/`, making content changes separate from the page components themselves.

## Commands

```bash
pnpm dev                 # Start the Vite development server
pnpm test                # Run tests
pnpm build               # Build and prerender the site
pnpm preview             # Preview the production build
pnpm build:production    # Validate and create a production build
pnpm deploy:dry-run      # Validate a Cloudflare deployment
pnpm deploy              # Deploy to Cloudflare
```

## Deployment

The site is deployed on **Cloudflare Workers** with prerendered static assets. The mailing-list signup endpoint uses **Cloudflare D1** and **Turnstile**.

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for production setup, environment variables, D1 migrations, Cloudflare configuration, and deployment instructions.

## Contributing

When making changes:

1. Create a new branch.

2. Make and test your changes locally.

3. Run:

   ```bash
   pnpm test
   pnpm build
   ```

4. Open a pull request with a short description of what changed.

For content changes, check `src/content/` before modifying page components directly.

## Cascade Math

Learn more at **[cascademath.org](https://cascademath.org/)**.

For questions, contact **[cascademathcm@gmail.com](mailto:cascademathcm@gmail.com)**.
