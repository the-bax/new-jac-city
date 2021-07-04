import renderEvents from './utilities/renderEvents'
import style from './Events.module.css'
import type { EventProps } from './Event'

export type EventsProps = {
  events: EventProps[]
}

export default function Events({ events }: EventsProps): JSX.Element {
  return <ul className={style.ul}>{renderEvents(events)}</ul>
}
