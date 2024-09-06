import { SiFacebook as Facebook } from 'react-icons/si'
import style from './Footer.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer} id="social">
      <span>
        Connect with us on{' '}
        <a href="https://www.facebook.com/TheJacNZ/" className={style.icon}>
          <Facebook />
        </a>
      </span>{' '}
      <span className={style.separator}>|</span>
      <span>Copyright 2021-24 The Jac</span> <span className={style.separator}>|</span>{' '}
      <span>
        Site built by <a href="https://paperhat.ltd/">Paperhat</a>
      </span>
    </footer>
  )
}
