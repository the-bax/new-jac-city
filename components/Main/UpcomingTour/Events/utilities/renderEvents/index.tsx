import Event from '../../Event'
import type { EventProps } from '../../Event'

export default function renderEvents(events: EventProps[]): JSX.Element[] {
  return events.map((event: EventProps) => (
    <li key={event.href}>
      <Event address={event.address} city={event.city} href={event.href} />
    </li>
  ))
}
