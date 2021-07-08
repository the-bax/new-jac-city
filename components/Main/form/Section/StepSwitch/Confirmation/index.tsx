import Button from '../../../../Button'
import style from './Confirmation.module.css'
import { NextContext } from '../'
import { useContext } from 'react'
import type { Next } from '../types'
import type { ReactNode } from 'react'

export type ConfirmationProps = {
  children: ReactNode
  message: string
}

export default function Confirmation({ children, message }: ConfirmationProps): JSX.Element {
  const next = useContext<Next>(NextContext)

  return (
    <>
      <p className={style.p}>{message}</p>
      <Button handleClick={next}>{children}</Button>
    </>
  )
}
