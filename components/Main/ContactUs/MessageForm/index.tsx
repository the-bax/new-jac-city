import Button from '../../Button'
import Form from '../../form/Form'
import InputField from '../../form/InputField'
import TextareaField from '../../form/TextareaField'
import { useState } from 'react'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

const BODY = 'body'
const EMAIL = 'email'
const NAME = 'name'
const ID_PREFIX = 'contact-us-message-form-'

export type ContactUsFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function MessageForm({ setIsSuccessful }: ContactUsFormProps): JSX.Element {
  const [message, setMessage] = useState({
    [BODY]: '',
    [EMAIL]: '',
    [NAME]: '',
  })

  const set = (messagePropertyName: string) => (messagePropertyValue: string) => {
    setMessage({ ...message, [messagePropertyName]: messagePropertyValue })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        id={ID_PREFIX + NAME}
        label="Name"
        name={NAME}
        required
        setValue={set(NAME)}
        type="text"
        value={message[NAME]}
      />
      <InputField
        id={ID_PREFIX + EMAIL}
        label="Email"
        name={EMAIL}
        required
        setValue={set(EMAIL)}
        type="email"
        value={message[EMAIL]}
      />
      <TextareaField
        id={ID_PREFIX + BODY}
        label="Message"
        maxLength={500}
        name={BODY}
        required
        setValue={set(BODY)}
        value={message[BODY]}
      />
      <Button>Send Message</Button>
    </Form>
  )
}
