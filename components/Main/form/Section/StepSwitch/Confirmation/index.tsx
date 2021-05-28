import Button from '../../../../Button'
import style from './Confirmation.module.css'
import { ReactNode } from 'react'

export type ConfirmationProps = {
  children: ReactNode
  message: string
  next?: () => void
}

export default function Confirmation({ children, message, next }: ConfirmationProps): JSX.Element {
  return (
    <>
      <p className={style.p}>{message}</p>
      <Button onClick={next}>{children}</Button>
    </>
  )
}
