import React, { useState } from 'react'
import style from './SignUpForm.module.css'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export type SignUpFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function SignUpForm({ setIsSuccessful }: SignUpFormProps): JSX.Element {
  const [email, setEmail] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.input}
        name="email"
        onChange={handleChange}
        placeholder="Enter Email"
        required
        type="email"
        value={email}
      />
      <button className={style.button} type="submit">
        Join
      </button>
    </form>
  )
}
