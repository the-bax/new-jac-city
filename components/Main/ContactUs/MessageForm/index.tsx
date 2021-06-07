import Button from '../../Button'
import Form from '../../form/Section/StepSwitch/Form'
import InputField from '../../form/Section/StepSwitch/Form/InputField'
import MessagePrompter from '../../form/Section/StepSwitch/Form/MessagePrompter'
import TextareaField from '../../form/Section/StepSwitch/Form/TextareaField'
import { BODY, EMAIL, NAME, ID_PREFIX } from './constants'
import { NextContext } from '../../form/Section/StepSwitch'
import { useContext, useState } from 'react'
import type { FormEvent } from 'react'
import type { Next } from '../../form/Section/StepSwitch/types'

const bodyLengthLimit = 5

export default function MessageForm(): JSX.Element {
  const next = useContext<Next>(NextContext)
  const [errorMessage, setErrorMessage] = useState<string[]>([])
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
    if (message[BODY].length <= bodyLengthLimit) {
      setErrorMessage([])
      next()
    } else {
      setErrorMessage(['Exceeds the maximum length allowed.'])
    }
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
        lengthLimit={bodyLengthLimit}
        name={BODY}
        required
        setValue={set(BODY)}
        value={message[BODY]}
      />
      <MessagePrompter>{errorMessage}</MessagePrompter>
      <Button>Send Message</Button>
    </Form>
  )
}
