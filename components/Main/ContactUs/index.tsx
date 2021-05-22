import MessageForm from './MessageForm'
import Section from '../library/form/Section'
import SuccessConfirmation from '../library/form/SuccessConfirmation'
import { useState } from 'react'

export default function ContactUs(): JSX.Element {
  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleClick = () => {
    setIsSuccessful(false)
  }

  return (
    <Section
      ariaLabel="Contact us."
      description="Any feedback? Please fill out our quick online inquiry form to send us a message."
      header="Contact Us"
      maxWidth="30rem"
    >
      {isSuccessful ? (
        <SuccessConfirmation message="Your message has been sent successfully!" onClick={handleClick}>
          Send Another Message
        </SuccessConfirmation>
      ) : (
        <MessageForm setIsSuccessful={setIsSuccessful} />
      )}
    </Section>
  )
}
