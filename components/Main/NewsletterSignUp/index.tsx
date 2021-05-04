import SignUpForm from './SignUpForm'
import style from './NewsletterSignUp.module.css'

export default function NewsletterSignUp(): JSX.Element {
  return (
    <section aria-label="Newsletter sign up." className={style.section}>
      <h2>Join our newsletter</h2>
      <p className={style.disclosure}>Keep up to date with the band! Zero spam, and unsubscribe at any time.</p>
      <div className={style.wrapper}>
        <SignUpForm />
      </div>
    </section>
  )
}
