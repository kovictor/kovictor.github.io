import { useEffect, useState } from 'react'
import { SelectedWork } from './components/SelectedWork'
import { SocialLinks } from './components/SocialLinks'
import { ThemeToggle } from './components/ThemeToggle'
import { profile } from './data/profile'

type Page = 'home' | 'about'

function getPage(): Page {
  return window.location.hash === '#/about' ? 'about' : 'home'
}

function SiteHeader({ page }: { page: Page }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Victor Ko, home">
        <span className="wordmark">{profile.initials}</span>
        <span>{profile.name}</span>
      </a>
      <div className="header-actions">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className={page === 'home' ? 'active' : undefined} href="#/">Home</a>
          <a className={page === 'about' ? 'active' : undefined} href="#/about">About</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <main id="main-content" className="page-shell home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="eyebrow">Life and figuring things out</p>
        <h1 id="home-title">Notes from a life <em>still in progress.</em></h1>
        <p className="hero-intro">{profile.homeIntro}</p>
      </section>

      <section className="posts-section" aria-labelledby="posts-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">The latest</p>
            <h2 id="posts-title">Recent posts</h2>
          </div>
          <p className="section-note">Occasional notes, no publishing schedule.</p>
        </header>
        <div className="posts-placeholder">
          <span className="placeholder-mark" aria-hidden="true">✦</span>
          <div>
            <p className="eyebrow">Coming soon</p>
            <h3>I’m still writing the first one.</h3>
            <p>Stories, observations, and occasional lessons from life will live here.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main id="main-content" className="page-shell about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">A little more about me</p>
          <h1 id="about-title">Engineer by trade.<br /><em>Curious everywhere else.</em></h1>
        </div>
        <div className="about-intro">
          <p>{profile.bio}</p>
          <SocialLinks links={profile.links} />
        </div>
      </section>

      <section className="pieces" aria-labelledby="pieces-title">
        <header className="section-heading">
          <div>
            <p className="eyebrow">Pieces of me</p>
            <h2 id="pieces-title">Life lately</h2>
          </div>
          <p className="section-note">Updated {profile.updatedAt}</p>
        </header>
        <div className="pieces-grid">
          <aside className="identity-code-card" aria-label="A quick profile">
            <div className="code-card-accent" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <p className="code-card-filename">about_me.ts</p>
            <div className="code-card-rule" />
            <div className="code-card-avatar" aria-hidden="true">VK</div>
            <dl className="code-card-details">
              <div><dt>role</dt><dd>software engineer</dd></div>
              <div><dt>roots</dt><dd>Canada</dd></div>
              <div><dt>mode</dt><dd>hands-on learner</dd></div>
              <div><dt>status</dt><dd>professionally chill</dd></div>
              <div><dt>fuel</dt><dd>coffee &amp; pre-workout</dd></div>
            </dl>
            <div className="code-card-rule" />
            <p className="code-card-comment">// settled opinions</p>
            <ul className="code-card-opinions">
              {profile.quirks.map((quirk) => <li key={quirk}>{quirk}</li>)}
            </ul>
            <p className="code-card-aside">The rest? Still figuring it out.</p>
          </aside>
          <div className="now-grid">
            {profile.now.map((item) => (
              <article className="now-card" key={item.label}>
                <p className="eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SelectedWork items={profile.selectedWork} />
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader page={page} />
      {page === 'home' ? <HomePage /> : <AboutPage />}
      <footer className="site-footer">
        <p>© 2026 Victor Ko. This was vibecoded with Codex.</p>
        <nav aria-label="Footer navigation">
          <a href="#/">Home</a>
          <a href="#/about">About</a>
        </nav>
      </footer>
    </>
  )
}
