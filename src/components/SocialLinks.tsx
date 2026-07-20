import type { SocialLink } from '../data/profile'

type SocialLinksProps = {
  links: SocialLink[]
}

export function SocialLinks({ links }: SocialLinksProps) {
  if (links.length === 0) {
    return null
  }

  return (
    <nav className="social-links" aria-label="Find Victor elsewhere">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
          <span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </nav>
  )
}
