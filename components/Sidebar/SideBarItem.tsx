import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SideBarItemProp = {
  href: string
  title: string
  icon?: JSX.Element
  open: boolean
}

const SideBarItem: React.FunctionComponent<SideBarItemProp> = ({
  href,
  title,
  icon,
  open,
}) => {
  const router = useRouter()
  const isTheSamePage = router.pathname === href

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          selected={isTheSamePage}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={title}
            sx={{ opacity: open ? 1 : 0 }}
            style={{ color: 'rgba(0, 0, 0, 0.87)' }}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export { SideBarItem }
