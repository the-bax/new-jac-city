import Button from '../Button'
import MessageForm from './MessageForm'
import React, { useState } from 'react'
import Section from '../form/Section'
import style from './ContactUs.module.css'

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
        <>
          <p className={style.p}>Your message has been sent successfully!</p>
          <Button onClick={handleClick}>Send Another Message</Button>
        </>
      ) : (
        <MessageForm setIsSuccessful={setIsSuccessful}></MessageForm>
      )}
    </Section>
  )
}
