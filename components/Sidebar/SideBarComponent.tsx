import Link from 'next/link'

const SideBarComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href={`/`}>home</Link>
        </li>
        <li>
          <Link href={`/dashboard`}>Dasboard</Link>
        </li>
        <li>
          <Link href={`/prodotti`}>Prodotti</Link>
        </li>
      </ul>
    </div>
  )
}

export { SideBarComponent }
