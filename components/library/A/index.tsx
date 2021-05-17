import style from './A.module.css'
import type { ReactNode } from 'react'

export type AProps = {
  ariaLabel?: string
  children: ReactNode
  color?: 'dark' | 'light'
  href: string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

export default function A({ ariaLabel, children, color = 'dark', href, target = '_self' }: AProps): JSX.Element {
  return (
    <a
      aria-label={ariaLabel}
      className={[style.a, style[color]].join(' ')}
      href={href}
      rel={target === '_self' ? undefined : 'noreferrer'}
      target={target}
    >
      {children}
    </a>
  )
}
