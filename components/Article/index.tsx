// import style from './Article.module.css'

export type ArticleProps = {
  title: string
  content: string
}

export default function Article({ title, content }: ArticleProps): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  )
}
