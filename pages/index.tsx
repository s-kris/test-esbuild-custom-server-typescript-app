import Link from 'next/link'
import './../styles/test.css'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/a" as="/a">
          <a>a</a>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          <a>b</a>
        </Link>
      </li>
    </ul>
  )
}
