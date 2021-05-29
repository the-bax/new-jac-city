import Button from '../../Button'
import Form from '../../form/Section/StepSwitch/Form'
import InputField from '../../form/Section/StepSwitch/Form/InputField'
import TextareaField from '../../form/Section/StepSwitch/Form/TextareaField'
import { BODY, EMAIL, NAME, ID_PREFIX } from './constants'
import { NextContext } from '../../form/Section/StepSwitch'
import { useContext, useState } from 'react'
import type { FormEvent } from 'react'
import type { Next } from '../../form/Section/StepSwitch/types'

export default function MessageForm(): JSX.Element {
  const next = useContext<Next>(NextContext)
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
    next()
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
