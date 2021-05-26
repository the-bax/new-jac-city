import Button from '../../../../Button'
import style from './Confirmation.module.css'
import { ReactNode } from 'react'

export type ConfirmationProps = {
  children: ReactNode
  message: string
  nextStep?: () => void
}

export default function Confirmation({ children, message, nextStep }: ConfirmationProps): JSX.Element {
  return (
    <>
      <p className={style.p}>{message}</p>
      <Button onClick={nextStep}>{children}</Button>
    </>
  )
}
