import style from './Event.module.css'

export type EventProps = {
  address: string
  city: string
}

export default function Event({ address, city }: EventProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.location}>
        <span className={style.city}>{city}:&nbsp;</span>
        {address}
      </div>
      <a className={style.tickets} href=".">
        TICKETS
      </a>
    </div>
  )
}
