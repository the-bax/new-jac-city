import style from './Button.module.css'
import type { MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, onClick: handleClick }: ButtonProps): JSX.Element {
  return (
    <button className={style.button} onClick={handleClick}>
      {children}
    </button>
  )
}
