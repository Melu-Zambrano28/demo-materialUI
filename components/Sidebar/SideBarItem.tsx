import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
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
  const isTheSamePage = href === router.pathname

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link href={href} style={{ textDecoration: 'none' }}>
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
      </Link>
    </ListItem>
  )
}

export { SideBarItem }
