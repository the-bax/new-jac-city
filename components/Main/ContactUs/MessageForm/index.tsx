import React, { useState } from 'react'
import style from './MessageForm.module.css'
import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

const NAME = 'name'
const EMAIL = 'email'
const BODY = 'body'
const MAX_BODY_LENGTH = 500

export type ContactUsFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function MessageForm({ setIsSuccessful }: ContactUsFormProps): JSX.Element {
  const [message, setMesage] = useState({
    [NAME]: '',
    [EMAIL]: '',
    [BODY]: '',
  })
  const [bodyLength, setBodyLength] = useState(0)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.name === BODY) {
      setMesage({
        ...message,
        [event.target.name]: event.target.value,
      })
      setBodyLength(event.target.value.length)
    } else {
      setMesage({
        ...message,
        [event.target.name]: event.target.value,
      })
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.required} htmlFor={`contact-us-message-form-${NAME}`}>
        Name
      </label>
      <input
        className={style.input}
        id={`contact-us-message-form-${NAME}`}
        name={NAME}
        onChange={handleChange}
        required
        type="text"
        value={message[NAME]}
      />
      <label className={style.required} htmlFor={`contact-us-message-form-${EMAIL}`}>
        Email
      </label>
      <input
        className={style.input}
        id={`contact-us-message-form-${EMAIL}`}
        name={EMAIL}
        onChange={handleChange}
        required
        type="email"
        value={message[EMAIL]}
      />
      <label className={style.required} htmlFor={`contact-us-message-form-${BODY}`}>
        Message
      </label>
      <textarea
        className={style.textarea}
        id={`contact-us-message-form-${BODY}`}
        maxLength={MAX_BODY_LENGTH}
        name={BODY}
        onChange={handleChange}
        required
        value={message[BODY]}
      />
      <span>{bodyLength}</span>
      <button className={style.button}>Send Message</button>
    </form>
  )
}
