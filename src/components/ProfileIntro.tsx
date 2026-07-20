import type { Profile } from '../data/profile'
import { SocialLinks } from './SocialLinks'

type ProfileIntroProps = {
  profile: Profile
}

export function ProfileIntro({ profile }: ProfileIntroProps) {
  return (
    <section id="about" className="profile" aria-labelledby="profile-name">
      <div className="hero-copy">
        <p className="status-line"><span aria-hidden="true" /> Available for a good conversation</p>
        <p className="eyebrow">Hello from the Bay Area — I’m</p>
        <h1 id="profile-name">{profile.name}<span aria-hidden="true">.</span></h1>
        <p className="headline">{profile.headline}</p>
        <p className="bio">{profile.bio}</p>
        <SocialLinks links={profile.links} />
      </div>

      <aside className="identity-card" aria-label="A quick read on Victor">
        <div className="identity-topline">
          <span>about_me.ts</span>
          <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
        </div>
        <div className="avatar" aria-hidden="true">
          <span>{profile.initials}</span>
        </div>
        <div className="identity-meta">
          <p><span>role</span> senior engineer</p>
          <p><span>mode</span> hands-on learner</p>
          <p><span>status</span> figuring it out</p>
        </div>

        {profile.quirks && profile.quirks.length > 0 && (
          <div className="quirks" aria-label="Firmly held opinions">
            <p className="quirks-label">// settled opinions</p>
            <ul>
              {profile.quirks.map((quirk) => (
                <li key={quirk}>{quirk}</li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </section>
  )
}
