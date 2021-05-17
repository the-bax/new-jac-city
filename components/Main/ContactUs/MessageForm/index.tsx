import Button from '../../library/Button'
import Form from '../../library/form/Form'
import InputField from '../../library/form/InputField'
import TextareaField from '../../library/form/TextareaField'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

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
    <Form onSubmit={handleSubmit}>
      <InputField id={`contact-us-message-form-${NAME}`} label="Name" name={NAME} required type="text" />
      <InputField id={`contact-us-message-form-${EMAIL}`} label="Email" name={EMAIL} required type="email" />
      <TextareaField id={`contact-us-message-form-${BODY}`} label="Message" maxLength={500} name={BODY} required />
      <Button>Send Message</Button>
    </Form>
  )
}
