import style from './MockMain.module.css'

export default function MockMain(): JSX.Element {
  return (
    <main className={style.main}>
      <section id="section-one">Section 1</section>
      <section id="section-two">Section 2</section>
      <section id="section-three">Section 3</section>
      <section id="section-four">Section 4</section>
    </main>
  )
}
