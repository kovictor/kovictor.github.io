import type { LatelyItem as LatelyItemData } from '../data/profile'

type LatelyItemProps = {
  item: LatelyItemData
  index: number
}

export function LatelyItem({ item, index }: LatelyItemProps) {
  const content = (
    <>
      <div className="item-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="item-content">
        <p className="item-label">{item.label}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      {item.href && (
        <span className="item-arrow" aria-hidden="true">
          ↗
        </span>
      )}
    </>
  )

  if (item.href) {
    return (
      <a className={`lately-item item-${index + 1}`} href={item.href}>
        {content}
      </a>
    )
  }

  return <article className={`lately-item item-${index + 1}`}>{content}</article>
}
