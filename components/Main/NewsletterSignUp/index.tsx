import React, { useState } from 'react'
import Section from '../lib/form/Section'
import SignUpForm from './SignUpForm'
import SuccessConfirmation from '../lib/form/SuccessConfirmation'

export default function NewsletterSignUp(): JSX.Element {
  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleClick = () => {
    setIsSuccessful(false)
  }

  return (
    <Section
      ariaLabel="Newsletter sign up."
      description="Keep up to date with the band! Zero spam, and unsubscribe at any time."
      header="Join our newsletter"
      maxWidth="30rem"
    >
      {isSuccessful ? (
        <SuccessConfirmation message="You're in! Keep an eye out for a confirmation email!" onClick={handleClick}>
          Add Another Email
        </SuccessConfirmation>
      ) : (
        <SignUpForm setIsSuccessful={setIsSuccessful} />
      )}
    </Section>
  )
}
