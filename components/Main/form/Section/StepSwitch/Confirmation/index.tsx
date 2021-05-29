import Button from '../../../../Button'
import style from './Confirmation.module.css'
import { ReactNode } from 'react'
import type { Next } from '../types'

export type ConfirmationProps = {
  children: ReactNode
  message: string
  next: Next
}

export default function Confirmation({ children, message, next }: ConfirmationProps): JSX.Element {
  return (
    <>
      <p className={style.p}>{message}</p>
      <Button onClick={next}>{children}</Button>
    </>
  )
}
