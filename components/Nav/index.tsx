import style from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <a href="#a-gathering">&lsquo;A Gathering&rsquo;</a>
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
