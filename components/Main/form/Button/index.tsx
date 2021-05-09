import style from './Button.module.css'

export type ButtonProps = {
  children: React.ReactNode
}

export default function Button({ children }: ButtonProps): JSX.Element {
  return <button className={style.button}>{children}</button>
}
