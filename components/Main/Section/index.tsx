import style from './Section.module.css'
import type { ReactNode } from 'react'

export type SectionProps = {
  children: ReactNode
}

export default function Section({ children }: SectionProps): JSX.Element {
  return <section className={style.section}>{children}</section>
}
