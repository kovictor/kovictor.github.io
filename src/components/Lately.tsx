import type { Profile } from '../data/profile'
import { LatelyItem } from './LatelyItem'

type LatelyProps = {
  items: Profile['lately']
  updatedAt: string
}

export function Lately({ items, updatedAt }: LatelyProps) {
  return (
    <section id="lately" className="lately" aria-labelledby="lately-title">
      <header className="section-heading">
        <div>
          <p className="eyebrow">The changelog</p>
          <h2 id="lately-title">What’s on my mind<span aria-hidden="true">.</span></h2>
        </div>
        <p className="updated"><span aria-hidden="true" /> Updated {updatedAt}</p>
      </header>

      <div className="lately-list">
        {items.map((item, index) => (
          <LatelyItem key={`${item.label}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
