# Victor Ko — Personal Notes

A small two-page personal website built with React, TypeScript, Vite, and
vanilla CSS. The Home page is an editorial index of recent writing about life;
the About page collects Victor's background, current interests, and selected
technical work.

## Pages

- **Home** — an introduction and a placeholder for future life-focused posts
- **About** — introduction, social links, current interests, quirks, and a
  public-safe selection of technical accomplishments

Hash navigation (`#/` and `#/about`) keeps both pages compatible with static
GitHub Pages hosting without server-side route configuration.

## Local development

```bash
npm install
npm run dev
```

## Production preview

```bash
npm run build
npm run preview
```

## Updating content

Edit `src/data/profile.ts` to update About copy, the current-life snapshot,
links, or selected work. The Home page currently shows a Coming Soon state
until the first post is ready.

Selected Work should remain concise and public-safe. Describe personal scope
and shipped capabilities without confidential implementation details, internal
project names, or private metrics. Prefer specific, matter-of-fact verbs such
as `built`, `designed`, `brought up`, and `refined`.

## Deployment

Pushing the `main` branch to GitHub triggers the Pages deployment workflow in
`.github/workflows/deploy-pages.yml`. In the repository settings, set the Pages
source to **GitHub Actions** before the first deployment.
