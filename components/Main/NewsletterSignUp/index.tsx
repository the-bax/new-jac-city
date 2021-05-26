import Confirmation from '../form/Section/StepController/Confirmation'
import Section from '../form/Section'
import SignUpForm from './SignUpForm'
import StepController from '../form/Section/StepController'

const renderConfirmation = (nextStep: () => void) => (
  <Confirmation message="You're in! Keep an eye out for a confirmation email!" nextStep={nextStep}>
    Add Another Email
  </Confirmation>
)

const renderForm = (nextStep: () => void) => <SignUpForm nextStep={nextStep} />

export default function NewsletterSignUp(): JSX.Element {
  return (
    <Section
      ariaLabel="Newsletter sign up."
      description="Keep up to date with the band! Zero spam, and unsubscribe at any time."
      header="Join our newsletter"
      maxWidth="30rem"
    >
      <StepController renderConfirmation={renderConfirmation} renderForm={renderForm} />
    </Section>
  )
}
