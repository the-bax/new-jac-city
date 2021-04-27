import React, { useState } from 'react'
import style from './MessageForm.module.css'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export type ContactUsFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function MessageForm({ setIsSuccessful }: ContactUsFormProps): JSX.Element {
  const NAME = 'name'
  const EMAIL = 'email'
  const BODY = 'body'
  const MAX_BODY_LENGTH = 500

  const [message, setMesage] = useState({
    [NAME]: '',
    [EMAIL]: '',
    [BODY]: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault()
    setMesage({ ...message, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor={NAME}>Name</label>
      <input id={NAME} name={NAME} onChange={handleChange} required type="text" value={message[NAME]} />
      <label htmlFor={EMAIL}>Email</label>
      <input id={EMAIL} name={EMAIL} onChange={handleChange} required type="email" value={message[EMAIL]} />
      <label htmlFor={BODY}>Message</label>
      <textarea
        id={BODY}
        maxLength={MAX_BODY_LENGTH}
        name={BODY}
        onChange={handleChange}
        required
        value={message[BODY]}
      />
      <button>Send Message</button>
    </form>
  )
}
