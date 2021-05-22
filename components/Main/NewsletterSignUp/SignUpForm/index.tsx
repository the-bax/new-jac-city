import Button from '../../Button'
import Form from '../../form/Form'
import InputField from '../../form/InputField'
import { useState } from 'react'
import type { Dispatch, FormEvent, SetStateAction } from 'react'

export type SignUpFormProps = {
  setIsFilling: Dispatch<SetStateAction<boolean>>
}

export default function SignUpForm({ setIsFilling }: SignUpFormProps): JSX.Element {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsFilling(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputField name="email" placeholder="Enter Email" required setValue={setEmail} type="email" value={email} />
      <Button>Join</Button>
    </Form>
  )
}
