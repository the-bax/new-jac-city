import style from './Button.module.css'

export type ButtonProps = {
  caption: string
}

export default function Button({ caption }: ButtonProps): JSX.Element {
  return <button className={style.button}>{caption}</button>
}
