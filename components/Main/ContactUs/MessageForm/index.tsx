import Button from '../../library/Button'
import Form from '../../library/form/Form'
import InputField from '../../library/form/InputField'
import { useState } from 'react'
import TextareaField from '../../library/form/TextareaField'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

export type ContactUsFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function MessageForm({ setIsSuccessful }: ContactUsFormProps): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        id="contact-us-message-form-name"
        label="Name"
        name="name"
        required
        setValue={setName}
        type="text"
        value={name}
      />
      <InputField
        id="contact-us-message-form-email"
        label="Email"
        name="email"
        required
        setValue={setEmail}
        type="email"
        value={email}
      />
      <TextareaField
        id="contact-us-message-form-body"
        label="Message"
        maxLength={500}
        name="body"
        required
        setValue={setBody}
        value={body}
      />
      <Button>Send Message</Button>
    </Form>
  )
}
