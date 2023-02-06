import Link from 'next/link'
import { useRouter } from 'next/router'
import { ListElement, ListElementButton } from './SideBarElementStyles'

type SideBarElementProp = {
  href: string
  open: boolean
}

const SideBarElement: React.FunctionComponent<
  React.PropsWithChildren<SideBarElementProp>
> = ({ href, open, children }) => {
  const router = useRouter()
  const isTheSamePage = router.pathname === href

  return (
    <ListElement disablePadding>
      <ListElementButton selected={isTheSamePage} open={open}>
        {children}
      </ListElementButton>
    </ListElement>
  )
}

const SideBarLinkElement: React.FunctionComponent<
  React.PropsWithChildren<SideBarElementProp>
> = ({ href, open, children }) => {
  const router = useRouter()
  const isTheSamePage = router.pathname === href

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <ListElement disablePadding>
        <ListElementButton selected={isTheSamePage} open={open}>
          {children}
        </ListElementButton>
      </ListElement>
    </Link>
  )
}

export { SideBarElement, SideBarLinkElement }
