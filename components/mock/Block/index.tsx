import style from './Block.module.css'
import type { ReactNode } from 'react'

export type BlockProps = {
  children?: ReactNode
  height?: 'tall' | 'short'
  id?: string
}

export default function Block({ children, height = 'tall', id }: BlockProps): JSX.Element {
  return (
    <div className={[style.mockBlock, style[height]].join(' ')} id={id}>
      {children}
    </div>
  )
}
