import style from './MessageForm.module.css'
import type { Dispatch, FormEvent, SetStateAction } from 'react'
import Button from '../../form/Button'
import InputField from '../../form/InputField'
import TextareaField from '../../form/TextareaField'

const NAME = 'name'
const EMAIL = 'email'
const BODY = 'body'

export type ContactUsFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function MessageForm({ setIsSuccessful }: ContactUsFormProps): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <InputField id={`contact-us-message-form-${NAME}`} label="Name" name={NAME} required={true} type="text" />
      <InputField id={`contact-us-message-form-${EMAIL}`} label="Email" name={EMAIL} required={true} type="email" />
      <TextareaField
        id={`contact-us-message-form-${BODY}`}
        label="Message"
        maxLength={500}
        name={BODY}
        required={true}
      />
      <Button>Send Message</Button>
    </form>
  )
}
