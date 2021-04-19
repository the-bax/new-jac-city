export default function SecondaryNav(): JSX.Element {
  return (
    <nav aria-label="Secondary">
      <ul className="capitalize">
        <li>
          <a href="#section-one" target="_self">
            Section 1
          </a>
        </li>
        <li>
          <a href="#section-two" target="_self">
            Section 2
          </a>
        </li>
        <li>
          <a href="#section-three" target="_self">
            Section 3
          </a>
        </li>
        <li>
          <a href="#section-four" target="_self">
            Section 4
          </a>
        </li>
      </ul>
    </nav>
  )
}
