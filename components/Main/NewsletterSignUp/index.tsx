import Section from '../form/Section'
import SignUpForm from './SignUpForm'
import SuccessConfirmation from '../form/SuccessConfirmation'
import { useState } from 'react'

export default function NewsletterSignUp(): JSX.Element {
  const [isFilling, setIsFilling] = useState(true)

  const setIsFillingTrue = () => {
    setIsFilling(true)
  }

  return (
    <Section
      ariaLabel="Newsletter sign up."
      description="Keep up to date with the band! Zero spam, and unsubscribe at any time."
      header="Join our newsletter"
      maxWidth="30rem"
    >
      {isFilling ? (
        <SignUpForm setIsFilling={setIsFilling} />
      ) : (
        <SuccessConfirmation message="You're in! Keep an eye out for a confirmation email!" onClick={setIsFillingTrue}>
          Add Another Email
        </SuccessConfirmation>
      )}
    </Section>
  )
}
