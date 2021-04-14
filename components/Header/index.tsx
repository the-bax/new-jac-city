import style from './Header.module.css'
import utilityStyle from '../../styles/utilities.module.css'

export default function Header(): JSX.Element {
  return (
    <div className={style.wrapper}>
      <header className={[style.header, utilityStyle.bgFiord, utilityStyle.colorLight].join(' ')}>
        <h1>The Jac</h1>
      </header>
    </div>
  )
}
