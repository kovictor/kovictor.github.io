import { Lately } from './components/Lately'
import { ProfileIntro } from './components/ProfileIntro'
import { SelectedWork } from './components/SelectedWork'
import { ThemeToggle } from './components/ThemeToggle'
import { profile } from './data/profile'

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to the top">
          <span className="wordmark">{profile.initials}</span>
          <span>victor.ko</span>
        </a>
        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#lately">Now</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="page-shell">
        <ProfileIntro profile={profile} />
        <SelectedWork items={profile.selectedWork} />
        <Lately items={profile.lately} updatedAt={profile.updatedAt} />
      </main>

      <footer className="site-footer">
        <p>Built with curiosity, React, and a little AI assistance.</p>
        <a href="#top">Return to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}
