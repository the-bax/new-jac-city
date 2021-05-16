import Button from '../../Button'
import style from './SuccessConfirmation.module.css'
import { MouseEventHandler, ReactNode } from 'react'

export type SuccessConfirmationProps = {
  children: ReactNode
  message: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function SuccessConfirmation({
  children,
  message,
  onClick: handleClick,
}: SuccessConfirmationProps): JSX.Element {
  return (
    <>
      <p className={style.p}>{message}</p>
      <Button onClick={handleClick}>{children}</Button>
    </>
  )
}
