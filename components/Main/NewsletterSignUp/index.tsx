import Confirmation from '../form/Section/StepSwitch/Confirmation'
import Section from '../form/Section'
import SignUpForm from './SignUpForm'
import { useState } from 'react'

export default function NewsletterSignUp(): JSX.Element {
  const [isFilling, setIsFilling] = useState(true)

  const setIsFillingFalse = () => {
    setIsFilling(false)
  }

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
        <SignUpForm next={setIsFillingFalse} />
      ) : (
        <Confirmation message="You're in! Keep an eye out for a confirmation email!" next={setIsFillingTrue}>
          Add Another Email
        </Confirmation>
      )}
    </Section>
  )
}
