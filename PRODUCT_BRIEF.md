# Personal Writing Site

## Working concept

A small personal website with two clear destinations:

1. Home is a place for recent writing about life, hobbies, lessons, and small
   experiments.
2. About gathers the pieces that explain who Victor is: background, current
   interests, personality, and selected professional accomplishments.

The site should feel personal rather than performative. It borrows the strong
editorial hierarchy of a modern independent blog—compact navigation, a clear
opening idea, generous spacing, and visual post cards—while keeping Victor's
own warm palette and understated voice.

## Product principles

- Personal, not promotional
- Life-focused, with no topic taxonomy for artificial intelligence
- Recent and curated, without a publishing cadence or public archive promise
- Easy to update in one typed data file
- Public-safe when describing professional work
- Useful without accounts, analytics, comments, or a newsletter

## Page structure

### Home

- A concise statement describing the site
- A Coming Soon placeholder until the first post is ready
- Eventually, a recent-post grid with a title, short introduction, topic, date,
  reading time, and distinctive artwork for each post
- No email subscriber panel

### About

- Personal introduction and links
- Current interests and activities
- A few personality details
- A curated set of technical accomplishments

### Shared shell

- Victor Ko identity mark
- Home and About navigation
- Persistent light/dark theme preference
- Minimal footer

## Technology direction

- React
- TypeScript
- Vite
- Vanilla CSS
- GitHub Actions and GitHub Pages

The site uses hash navigation so static hosting can load both destinations
without server rewrites. Content remains centralized in `src/data/profile.ts`.

## Explicitly out of scope

- Email subscriptions or lead capture
- Artificial-intelligence commentary or navigation categories
- Comments, likes, ratings, or social feeds
- Authentication, a database, or a content management system
- Full resume or employment timeline
- A required publishing schedule
