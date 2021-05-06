import style from './Section.module.css'

export type SectionProps = {
  ariaLabel: string
  children: React.ReactNode
  description?: string
  header: string
}

export default function Section({ ariaLabel, children, description, header }: SectionProps): JSX.Element {
  return (
    <section aria-label={ariaLabel} className={style.section}>
      <h2>{header}</h2>
      <p className={style.description}>{description}</p>
      <div className={style.wrapper}>{children}</div>
    </section>
  )
}
