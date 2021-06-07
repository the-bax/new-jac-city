import style from './Message.module.css'

export function renderMessage(message: string, key: number): JSX.Element {
  return (
    <p className={style.p} key={key}>
      {message}
    </p>
  )
}
