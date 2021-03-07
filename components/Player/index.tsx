import style from './Player.module.css'

export type PlayerProps = {
  children: React.ReactNode
}

export default function Player({ children }: PlayerProps): JSX.Element {
  return <aside className={style.player}>{children}</aside>
}
