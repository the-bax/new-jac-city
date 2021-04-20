import style from './Header.module.css'

export default function Header(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1>The Jac</h1>
      </header>
    </div>
  )
}
