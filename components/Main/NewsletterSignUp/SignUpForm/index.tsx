import Button from '../../Button'
import Form from '../../form/Section/StepSwitch/Form'
import InputField from '../../form/Section/StepSwitch/Form/InputField'
import { useState } from 'react'
import type { FormEvent } from 'react'

export type SignUpFormProps = {
  next: () => void
}

export default function SignUpForm({ next }: SignUpFormProps): JSX.Element {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    next()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField name="email" placeholder="Enter Email" required setValue={setEmail} type="email" value={email} />
      <Button>Join</Button>
    </Form>
  )
}
