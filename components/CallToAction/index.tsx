import style from './CallToAction.module.css'

export default function CallToAction() {
  return (
    <section className={style.section}>
      <p>
        In June 2020, The Jac marked a decade of making music together with the
        release of <strong>A Gathering</strong>, their new double album.
      </p>
      <p>
        <a
          href="https://thejac1.bandcamp.com/album/a-gathering"
          className={style.buynow}
        >
          Get your copy
        </a>
      </p>
    </section>
  )
}
