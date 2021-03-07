import style from './Clouds.module.css'

export default function Clouds() {
  return (
    <>
      <div className={style.moon}>
        <img src="/bgnd/moon.png" alt="" />
      </div>
      <div className={style.cloudsleft}>
        <img src="/bgnd/clouds-left.png" alt="" />
      </div>
      <div className={style.cloudsright}>
        <img src="/bgnd/clouds-right.png" alt="" />
      </div>
    </>
  )
}
