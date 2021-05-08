import React, { useState } from 'react'
import Section from '../form/Section'
import MessageForm from './MessageForm'

export default function ContactUs(): JSX.Element {
  const [isSuccessful, setIsSuccessful] = useState(false)

  return (
    <Section
      ariaLabel="Contact us."
      description="Any feedback? Please fill out our quick online inquiry form to send us a message."
      header="Contact Us"
    >
      {isSuccessful ? (
        <p>Your message has been sent successfully!</p>
      ) : (
        <MessageForm setIsSuccessful={setIsSuccessful}></MessageForm>
      )}
    </Section>
  )
}
