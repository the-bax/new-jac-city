import Event from './Event'
import style from './Events.module.css'

export default function Events(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <Event address="Manawatu Jazz and Blues Festival, Globe theatre. 8:00pm, June 3rd" city="PALMERSTON NORTH" />
      <Event address="Manawatu Jazz and Blues Festival, Globe theatre. 8:00pm, June 3rd" city="PALMERSTON NORTH" />
    </div>
  )
}
