import style from './EmbeddedContent.module.css'

export type EmbeddedContentProps = {
  allow?: string
  allowFullScreen?: boolean
  frameBorder?: string | number
  src: string
  title?: string
}

export default function EmbeddedContent({
  allow,
  allowFullScreen = false,
  frameBorder = '0',
  src,
  title,
}: EmbeddedContentProps) {
  const afs = allowFullScreen ? { allowFullScreen: true } : {}

  return (
    <iframe
      {...afs}
      allow={allow}
      className={style.iframe}
      frameBorder={frameBorder}
      src={src}
      style={style}
      title={title}
    />
  )
}
