import style from './UpcomingTour.module.css'
import type { ReactNode } from 'react'

export type UpcomingTourProps = {
  content: ReactNode
  tickets: ReactNode
}

export default function UpcomingTour({ content, tickets }: UpcomingTourProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <section className={style.content}>{content}</section>
      <section className={style.tickets}>{tickets}</section>
    </div>
  )
}
