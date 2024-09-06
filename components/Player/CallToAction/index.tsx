import style from './CallToAction.module.css'

export default function CallToAction(): JSX.Element {
  return (
    <section className={style.section}>
      <p>
        2024 marks a decade since the release of The Jac’s debut album <strong>Nerve</strong> on Rattle Records. You can
        find it, along with <strong>The Green Hour</strong> (2015), <strong>A Gathering</strong> (2020), and{' '}
        <strong>Walking Spirits</strong> (2021) on Bandcamp.
      </p>
      <p>
        <a href="https://thejac1.bandcamp.com/album/nerve" className={style.buynow}>
          Get your copy
        </a>
      </p>
    </section>
  )
}
