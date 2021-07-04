import style from './Form.module.css'
import type { FormEventHandler, ReactNode } from 'react'

export type FormProps = {
  children: ReactNode
  onSubmit: FormEventHandler
}

export default function Form({ children, onSubmit }: FormProps): JSX.Element {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
