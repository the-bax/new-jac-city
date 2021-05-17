import A from '../../library/A'

export default function SecondaryNav(): JSX.Element {
  return (
    <nav aria-label="Secondary">
      <ul className="capitalize">
        <li>
          <A href="#section-one">Section 1</A>
        </li>
        <li>
          <A href="#section-two">Section 2</A>
        </li>
        <li>
          <A href="#section-three">Section 3</A>
        </li>
        <li>
          <A href="#section-four">Section 4</A>
        </li>
      </ul>
    </nav>
  )
}
