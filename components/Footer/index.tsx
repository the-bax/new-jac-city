import style from './Footer.module.css'
import { SiFacebook as Facebook } from 'react-icons/si'

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <span className={style.span}>
        Connect with us on&nbsp;
        <a
          aria-label="Go to Facebook page."
          className={style.a}
          color="light"
          href="https://www.facebook.com/TheJacNZ/"
          rel="noreferrer"
          target="_blank"
        >
          <Facebook aria-label="Facebook icon" className={style.icon} />
        </a>
      </span>
      <span className={style.span}>Copyright 2021 The Jac</span>
      <span className={style.span}>
        Site built by&nbsp;
        <a className={style.a} color="light" href="https://paperhat.ltd/" rel="noreferrer" target="_blank">
          Paperhat
        </a>
      </span>
    </footer>
  )
}
