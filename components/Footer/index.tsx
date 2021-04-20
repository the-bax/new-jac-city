import style from './Footer.module.css'
import { SiFacebook as Facebook } from 'react-icons/si'

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <span className={style.withIcon}>
        Connect with us on&nbsp;
        <a aria-label="Go to Facebook page." href="https://www.facebook.com/TheJacNZ/" rel="noreferrer" target="_blank">
          <Facebook aria-label="Facebook icon" className={style.icon} />
        </a>
      </span>
      <span>Copyright 2021 The Jac</span>
      <span>
        Site built by&nbsp;
        <a href="https://paperhat.ltd/" rel="noreferrer" target="_blank">
          Paperhat
        </a>
      </span>
    </footer>
  )
}
