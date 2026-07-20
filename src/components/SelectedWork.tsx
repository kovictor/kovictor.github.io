import type { Profile } from '../data/profile'

type SelectedWorkProps = {
  items: Profile['selectedWork']
}

export function SelectedWork({ items }: SelectedWorkProps) {
  return (
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <header className="work-heading">
        <div>
          <p className="eyebrow">A few stops along the way</p>
          <h2 id="work-title">Selected work<span aria-hidden="true">.</span></h2>
        </div>
        <p className="work-note">The short version—not the entire commit history.</p>
      </header>

      <div className="work-list">
        {items.map((item, index) => (
          <article className="work-item" key={item.title}>
            <div className="work-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="work-period">{item.period}</div>
            <div className="work-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <ul className="work-tags" aria-label={`${item.title} areas`}>
              {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
