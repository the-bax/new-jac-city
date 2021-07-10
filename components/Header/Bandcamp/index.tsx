import style from './Bandcamp.module.css'

export default function Bandcamp(): JSX.Element {
  return (
    <iframe
      aria-label="A Bandcamp player with a track selector and a buy now button."
      className={style.iframe}
      role="application"
      sandbox="allow-same-origin allow-scripts allow-popups"
      src="https://bandcamp.com/EmbeddedPlayer/album=4093709409/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
      title="A Gathering by The Jac"
    />
  )
}
