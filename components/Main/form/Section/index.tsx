import style from './Section.module.css'
import type { ReactNode } from 'react'

export type SectionProps = {
  ariaLabel: string
  children: ReactNode
  description?: string
  header: string
  maxWidth?: string
}

export default function Section({ ariaLabel, children, description, header, maxWidth }: SectionProps): JSX.Element {
  return (
    <section aria-label={ariaLabel} className={style.section} style={{ maxWidth }}>
      <h2>{header}</h2>
      {description ? <p className={style.description}>{description}</p> : null}
      <div className={style.wrapper}>{children}</div>
    </section>
  )
}
