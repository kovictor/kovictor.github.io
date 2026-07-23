# Victor Ko — Personal Notes

This project is Victor Ko's personal writing site: a home for occasional posts
about life, hobbies, lessons learned, and small experiments. It also provides a
concise About page with Victor's background, current interests, personality,
and selected technical work.

The site is intentionally personal rather than promotional. It is built with
React, TypeScript, Vite, and vanilla CSS, and is designed to stay small, easy to
maintain, and compatible with static GitHub Pages hosting.

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

When publishing or revising a post, add an entry to the **Post update log**
below in the same change. Use one line per update:

```text
- YYYY-MM-DD — Published|Updated: "Post title" — Brief description of the change.
```

Keep entries in reverse chronological order, with the newest update first. The
log is for changes to published writing; routine code, styling, and dependency
updates do not need to be recorded here.

Selected Work should remain concise and public-safe. Describe personal scope
and shipped capabilities without confidential implementation details, internal
project names, or private metrics. Prefer specific, matter-of-fact verbs such
as `built`, `designed`, `brought up`, and `refined`.

## Post update log

No posts have been published yet.

## Deployment

Pushing the `main` branch to GitHub triggers the Pages deployment workflow in
`.github/workflows/deploy-pages.yml`. In the repository settings, set the Pages
source to **GitHub Actions** before the first deployment.
