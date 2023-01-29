import {
  BusinessCenter,
  EventNote,
  FolderOpen,
  SettingsSuggest,
} from '@mui/icons-material'
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'

type ExtraProps = {
  isOpen: boolean
}

const ListIcon = styled(ListItemIcon)<ExtraProps>(({ isOpen, theme }) => ({
  /*color: theme.palette.error.main,*/
  minWidth: 0,
  marginRight: isOpen ? '24px' : 'auto',
  justifyContent: 'center',
}))

const menu = [
  { href: '/prodotti', title: 'Prodotti', icon: <BusinessCenter /> },
  {
    href: '/agenda',
    title: 'Agenda',
    icon: <EventNote />,
  },
  {
    href: '/documentazione',
    title: 'Documentazione',
    icon: <FolderOpen />,
  },
]

const footerMenu = [
  {
    href: '/gestioneProfilo',
    title: 'Impostazioni',
    icon: <SettingsSuggest />,
  },
]

type sideBarProp = {
  open: boolean
}

const SideBarComponent: React.FunctionComponent<sideBarProp> = ({ open }) => {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [menuIndex, setMenuIndex] = useState(1)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index)
    setMenuIndex(index)
  }

  return (
    <Grid container direction="column">
      <Box>
        <List>
          {menu.map((menuItem, index) => (
            <ListItem
              key={`sideBarItem${index}`}
              disablePadding
              sx={{ display: 'block' }}
            >
              <Link href={menuItem.href} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListIcon isOpen={open}>{menuItem.icon}</ListIcon>
                  <ListItemText
                    primary={menuItem.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider />
      <Box style={{ marginTop: '1rem' }}>
        <List>
          {footerMenu.map((menuItem, index) => (
            <ListItem
              key={`sideBarItem${index}`}
              disablePadding
              sx={{ display: 'block' }}
            >
              <Link href={menuItem.href} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  selected={selectedIndex === menuIndex}
                  onClick={(event) => handleListItemClick(event, menuIndex)}
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
                    {menuItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={menuItem.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    style={{ color: 'rgba(0, 0, 0, 0.87)' }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  )
}

export { SideBarComponent }
