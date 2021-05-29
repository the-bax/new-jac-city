import SignUpConfirmation from './SignUpConfirmation'
import Section from '../form/Section'
import SignUpForm from './SignUpForm'
import StepSwitch from '../form/Section/StepSwitch'

export default function NewsletterSignUp(): JSX.Element {
  return (
    <Section
      ariaLabel="Newsletter sign up."
      description="Keep up to date with the band! Zero spam, and unsubscribe at any time."
      header="Join our newsletter"
      maxWidth="30rem"
    >
      <StepSwitch>{[<SignUpForm key={0} />, <SignUpConfirmation key={1} />]}</StepSwitch>
    </Section>
  )
}
