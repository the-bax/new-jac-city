import style from './Main.module.css'

export type MainProps = {
  children?: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <main className={style.main}>{children}</main>
}
