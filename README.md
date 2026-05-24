# Platform-Engineering-to-AI-Engineering

## Roadmap Tracker

The tracker is set up for Cloudflare Pages with D1-backed progress persistence.

The frontend continues to call `/api/state`. In production, Cloudflare Pages Functions handle that route and store the progress JSON in D1.

### First Cloudflare Setup

Create the D1 database:

```bash
npm run d1:create
```

Copy the returned `database_id` into `wrangler.toml`, replacing `REPLACE_WITH_D1_DATABASE_ID`.

Apply the schema locally and remotely:

```bash
npm run d1:migrate:local
npm run d1:migrate:remote
```

Run locally:

```bash
npm run dev
```

Deploy the app:

```bash
npm run deploy
```

For the Pages project, use `roadmap-tracker` as the static output directory. No build command is required unless you later add a build step.
