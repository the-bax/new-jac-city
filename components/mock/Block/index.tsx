import style from './Block.module.css'
import type { ReactNode } from 'react'

export type MockBlockProps = {
  children?: ReactNode
  id?: string
}

export default function MockBlock({ children, id }: MockBlockProps): JSX.Element {
  return (
    <div className={style.mockBlock} id={id}>
      {children}
    </div>
  )
}
