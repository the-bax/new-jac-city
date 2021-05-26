import Button from '../../Button'
import Form from '../../form/Section/StepController/Form'
import InputField from '../../form/Section/StepController/Form/InputField'
import { useState } from 'react'
import type { FormEvent } from 'react'

export type SignUpFormProps = {
  nextStep: () => void
}

export default function SignUpForm({ nextStep }: SignUpFormProps): JSX.Element {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    nextStep()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField name="email" placeholder="Enter Email" required setValue={setEmail} type="email" value={email} />
      <Button>Join</Button>
    </Form>
  )
}
