import style from './UpcomingTour.module.css'
import type { ReactNode } from 'react'

export type UpcomingTourProps = {
  content: ReactNode
  sidebar: ReactNode
}

export default function UpcomingTour({ content, sidebar }: UpcomingTourProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <section className={style.content}>{content}</section>
      <section className={style.sidebar}>{sidebar}</section>
    </div>
  )
}
