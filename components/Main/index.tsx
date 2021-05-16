import style from './Main.module.css'
import type { ReactNode } from 'react'

export type MainProps = {
  children?: ReactNode
}

export default function Main({ children }: MainProps): JSX.Element {
  return <main className={style.main}>{children}</main>
}
