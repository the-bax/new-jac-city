import style from './Event.module.css'

export type EventProps = {
  address: string
  city: string
  href: string
}

export default function Event({ address, city, href }: EventProps): JSX.Element {
  return (
    <div className={style.wrapper}>
      <div className={style.location}>
        <span className={style.city}>{city}:&nbsp;</span>
        {address}
      </div>
      <a className={style.tickets} href={href} rel="noreferrer" target="_blank">
        TICKETS
      </a>
    </div>
  )
}
