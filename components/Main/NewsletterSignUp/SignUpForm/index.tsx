import Form from '../../library/form/Section/StepSwitch/Form'
import Button from '../../library/Button'
import InputField from '../../library/form/Section/StepSwitch/Form/InputField'
import { NextContext } from '../../library/form/Section/StepSwitch'
import { useContext, useState } from 'react'
import type { FormEvent } from 'react'
import type { Next } from '../../library/form/Section/StepSwitch/types'

export default function SignUpForm(): JSX.Element {
  const next = useContext<Next>(NextContext)
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
