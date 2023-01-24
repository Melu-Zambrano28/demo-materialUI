import { IoSettingsSharp } from 'react-icons/io5'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import { TfiAgenda } from 'react-icons/tfi'

import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import React, { useState } from 'react'

const menu = [
  { href: '/prodotti', title: 'Prodotti', icon: <IoSettingsSharp /> },
  {
    href: '/agenda',
    title: 'Agenda',
    icon: <TfiAgenda />,
  },
  {
    href: '/documentazione',
    title: 'Documentazione',
    icon: <AiTwotoneFolderOpen />,
  },
]

const footerMenu = [
  {
    href: '/gestioneProfilo',
    title: 'Impostazioni',
    icon: <IoSettingsSharp />,
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
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <IconContext.Provider
                      value={{ color: 'rgba(0, 0, 0, 0.87)' }}
                    >
                      {menuItem.icon}
                    </IconContext.Provider>
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
                    <IconContext.Provider
                      value={{ color: 'rgba(0, 0, 0, 0.87)' }}
                    >
                      {menuItem.icon}
                    </IconContext.Provider>
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
