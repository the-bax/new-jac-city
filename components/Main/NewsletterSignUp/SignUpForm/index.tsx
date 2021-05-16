import Button from '../../Button'
import Form from '../../form/Form'
import InputField from '../../form/InputField'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

export type SignUpFormProps = {
  setIsSuccessful: Dispatch<SetStateAction<boolean>>
}

export default function SignUpForm({ setIsSuccessful }: SignUpFormProps): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSuccessful(true)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField name="email" placeholder="Enter Email" required type="email" />
      <Button>Join</Button>
    </Form>
  )
}
