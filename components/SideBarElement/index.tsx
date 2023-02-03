import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ListElement,
  ListElementButton,
  ListElementIcon,
  ListElementText,
} from './SideBarElementStyles'

type SideBarElementProp = {
  href: string
  title: string
  icon?: JSX.Element
  open: boolean
}

const SideBarElement: React.FunctionComponent<SideBarElementProp> = ({
  href,
  title,
  icon,
  open,
}) => {
  const router = useRouter()
  const isTheSamePage = router.pathname === href

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <ListElement disablePadding>
        <ListElementButton selected={isTheSamePage} open={open}>
          <ListElementIcon open={open}>{icon}</ListElementIcon>
          <ListElementText primary={title} open={open} />
        </ListElementButton>
      </ListElement>
    </Link>
  )
}

export { SideBarElement }
