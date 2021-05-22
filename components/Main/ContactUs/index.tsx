import MessageForm from './MessageForm'
import Section from '../form/Section'
import SuccessConfirmation from '../form/SuccessConfirmation'
import { useState } from 'react'

export default function ContactUs(): JSX.Element {
  const [isFilling, setIsFilling] = useState(true)

  const setIsFillingTrue = () => {
    setIsFilling(true)
  }

  return (
    <Section
      ariaLabel="Contact us."
      description="Any feedback? Please fill out our quick online inquiry form to send us a message."
      header="Contact Us"
      maxWidth="30rem"
    >
      {isFilling ? (
        <MessageForm setIsFilling={setIsFilling} />
      ) : (
        <SuccessConfirmation message="Your message has been sent successfully!" onClick={setIsFillingTrue}>
          Send Another Message
        </SuccessConfirmation>
      )}
    </Section>
  )
}
