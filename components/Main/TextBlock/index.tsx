import style from './TextBlock.module.css'
import type { ReactNode } from 'react'

export type TextBlockProps = {
  children: ReactNode
}

export default function TextBlock({ children }: TextBlockProps): JSX.Element {
  return <div className={style.textblock}>{children}</div>
}
