# Personal Landing Page

## Working concept

A small personal website that answers three questions:

1. Who am I?
2. What technical work am I proud of?
3. What does life look like lately?

It is a living profile rather than a full resume, portfolio archive, blog, or
social feed. The introduction and selected work change rarely. The current
snapshot changes ad hoc, whenever it no longer represents the person or a
meaningful milestone has happened.

> A small page about who I am, what I have helped build, and what has my
> attention lately.

## Product principles

- Personal, not performative
- Curated, not chronological
- Specific, not exhaustive
- Easy to understand in one visit
- Easy to update without creating a publishing obligation
- Visually expressive without distracting from the person
- Publicly readable without an account

## Page structure

### About me

- Name
- Photo, avatar, or simple personal mark
- Short headline
- A concise introduction of roughly 50–80 words
- Optional location
- A small set of useful contact or profile links

The introduction should establish personality and interests. It should not
expand into a chronology of jobs or education.

### Selected Work

A concise collection of meaningful technical contributions rather than a full
employment timeline. Each entry should communicate:

- The product, framework, or technical area
- Victor's personal scope or ownership
- What capability reached users or developers
- A few useful technology or domain tags

Initial subjects include GPU display and power features, ScreenCaptureKit API
design, screen-capture frameworks across Apple platforms, WWDC developer
support, Dynamic Island screen-recording bring-up, Control Center capture and
camera/microphone modes, and AI-assisted personal projects.

Descriptions must remain public-safe and avoid confidential implementation
details, internal project names, and private metrics.

### Lately

A replaceable snapshot containing three to five things that currently matter.
The subjects may change with every update and can include:

- Something being built or worked on
- Something being learned or explored
- A hobby or activity
- Something being read, watched, or enjoyed
- A meaningful life change

The section displays an honest last-updated date. Previous versions are not
kept as a public archive.

### Footer

- A minimal contact link, if useful
- An optional link to the source code

## Initial implementation

1. Build one polished, responsive page with About, Selected Work, and Now.
2. Store the profile and current content in one typed data file.
3. Render the page with small React components.
4. Add one purposeful interaction: a persistent light/dark theme preference.
5. Support keyboard navigation and reduced-motion preferences.
6. Test both the development version and the production build locally.
7. Deploy the static build through GitHub Pages.

## Technology direction

- React
- TypeScript
- Vite
- Vanilla CSS
- Git and GitHub
- GitHub Actions
- GitHub Pages

React is an explicit learning goal. The project should demonstrate components,
props, typed data, list rendering, conditional rendering, state, effects, and
browser storage without adding features solely to make the application appear
more complex.

## Explicitly out of scope

- Full resume or employment timeline
- Portfolio archive
- Blog or newsletter
- Archived Lately entries
- Monthly publishing schedule
- Comments, likes, ratings, or feeds
- Authentication or accounts
- Database or content management system
- Analytics beyond basic hosting information
- Contact forms or lead capture
- Complex animation

## Content constraint

The complete page should fit within one comfortable visit. On a typical desktop
screen, the core identity should be visible immediately, with Selected Work and
Now forming a clear reading path below it.

## Update workflow

When the current snapshot no longer feels accurate:

1. Edit the Lately entries in the data file.
2. Change the last-updated date.
3. Preview the page locally.
4. Build and preview the production version locally.
5. Commit and push the changes.
6. Let GitHub Pages publish the new version.

There is no expected update cadence.

## First milestone

Build a locally testable React page using realistic draft content. It should
clearly answer:

1. Who is this person?
2. What technical work have they contributed to?
3. What has their attention lately?
4. Where can someone learn more or get in touch?
