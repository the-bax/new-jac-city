import A from '../lib/A'
import style from './Footer.module.css'
import { SiFacebook as Facebook } from 'react-icons/si'

export default function Footer(): JSX.Element {
  return (
    <footer className={style.footer}>
      <span className={style.span}>
        Connect with us on&nbsp;
        <A aria-label="Go to Facebook page." color="light" href="https://www.facebook.com/TheJacNZ/" target="_blank">
          <Facebook aria-label="Facebook icon" className={style.icon} />
        </A>
      </span>
      <span className={style.span}>Copyright 2021 The Jac</span>
      <span className={style.span}>
        Site built by&nbsp;
        <A color="light" href="https://paperhat.ltd/" target="_blank">
          Paperhat
        </A>
      </span>
    </footer>
  )
}
