import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import EventNoteIcon from '@mui/icons-material/EventNote'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Box, Divider, Grid, List } from '@mui/material'
import React from 'react'
import { SideBarItem } from './SideBarItem'

const menu = [
  { href: '/', title: 'Dashboard', icon: <DashboardIcon /> },
  { href: '/prodotti', title: 'Prodotti', icon: <BusinessCenterIcon /> },
  {
    href: '/agenda',
    title: 'Agenda',
    icon: <EventNoteIcon />,
  },
  {
    href: '/documentazione',
    title: 'Documentazione',
    icon: <FolderOpenIcon />,
  },
]

const footerMenu = [
  {
    href: '/gestioneProfilo',
    title: 'Impostazioni',
    icon: <SettingsSuggestIcon />,
  },
]

type SideBarProp = {
  open: boolean
}

const SideBarComponent: React.FunctionComponent<SideBarProp> = ({ open }) => {
  return (
    <Grid container direction="column">
      <Box>
        <List>
          {menu.map((menuItem, index) => (
            <SideBarItem
              key={`sideBarItem${index}`}
              href={menuItem.href}
              title={menuItem.title}
              icon={menuItem.icon}
              open={open}
            />
          ))}
        </List>
      </Box>
      <Divider />
      <Box style={{ marginTop: '1rem' }}>
        <List>
          {footerMenu.map((menuItem, index) => (
            <SideBarItem
              key={`sideBarItem${index}`}
              href={menuItem.href}
              title={menuItem.title}
              icon={menuItem.icon}
              open={open}
            />
          ))}
        </List>
      </Box>
    </Grid>
  )
}

export { SideBarComponent }
