import style from './Player.module.css'
import type { ReactNode } from 'react'

export type PlayerProps = {
  children: ReactNode
}

export default function Player({ children }: PlayerProps): JSX.Element {
  return <aside className={style.player}>{children}</aside>
}
