# About Me

A one-page personal website built with React, TypeScript, Vite, and vanilla
CSS. It combines a concise introduction, selected technical work, and an ad-hoc
snapshot of what life looks like lately.

The visual direction is a playful "personal operating system": strong
typography, technical details, tactile cards, and a persistent light/dark theme.

## Page sections

- **About** — a short personal introduction and links
- **Selected Work** — a curated set of technical contributions spanning GPU
  display and power work, Apple screen-capture frameworks, Dynamic Island,
  Control Center, and AI-assisted building
- **Now** — replaceable cards describing current interests and activities

## Local development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

## Production preview

Build the optimized site and preview it locally:

```bash
npm run build
npm run preview
```

## Updating the page

Edit `src/data/profile.ts` to update the About, Selected Work, and Now content.
Change the `updatedAt` value whenever the current snapshot changes.

Selected Work should remain concise and public-safe. Describe personal scope
and shipped capabilities without including confidential implementation details,
internal project names, or private metrics. Use specific, matter-of-fact verbs
such as `built`, `designed`, `brought up`, and `refined`. Avoid vague phrases
such as `worked on` and promotional language that overstates the contribution.

## Deployment

Pushing the `main` branch to GitHub triggers the Pages deployment workflow in
`.github/workflows/deploy-pages.yml`. In the repository settings, set the Pages
source to **GitHub Actions** before the first deployment.
