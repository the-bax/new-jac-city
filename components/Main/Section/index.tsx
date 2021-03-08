import style from './Section.module.css'

export type SectionProps = {
  children: React.ReactNode
}

export default function Section({ children }: SectionProps): JSX.Element {
  return <section className={style.section}>{children}</section>
}
