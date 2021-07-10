import style from './UpcomingTour.module.css'
import type { ReactNode } from 'react'

export type UpcomingTourProps = {
  intro: ReactNode
  events: ReactNode
}

export default function UpcomingTour({ intro, events }: UpcomingTourProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <section className={style.intro}>{intro}</section>
      <section className={style.events}>{events}</section>
    </div>
  )
}
