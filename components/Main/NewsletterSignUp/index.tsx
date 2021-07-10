import Section from '../library/form/Section'
import SignUpForm from './SignUpForm'
import StepSwitch from '../library/form/Section/StepSwitch'
import SubmissionConfirmation from './SubmissionConfirmation'

export default function NewsletterSignUp(): JSX.Element {
  return (
    <Section
      ariaLabel="Newsletter sign up."
      description="Keep up to date with the band! Zero spam, and unsubscribe at any time."
      header="Join our newsletter"
      maxWidth="30rem"
    >
      <StepSwitch>{[<SignUpForm key={0} />, <SubmissionConfirmation key={1} />]}</StepSwitch>
    </Section>
  )
}
