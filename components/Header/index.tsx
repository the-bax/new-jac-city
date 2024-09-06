import Nav from './Nav'
import styles from './Header.module.css'

export default function Header(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <h1>The Jac</h1>
      </header>
      <Nav />
      <div className={styles.title}>Nerve 10 year anniversary tour October 9th-11th</div>
    </>
  )
}
