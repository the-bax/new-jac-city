import style from './Nav.module.css'

export default function Nav(): JSX.Element {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#tour-dates">Tour dates</a>
        </li>
        <li>
          <a href="#albums">Albums</a>
        </li>
        <li>
          <a href="#about-the-jac">About The Jac</a>
        </li>
        <li>
          <a href="#social">Social</a>
        </li>
      </ul>
    </nav>
  )
}
