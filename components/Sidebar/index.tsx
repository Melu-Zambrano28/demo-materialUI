import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import EventNoteIcon from '@mui/icons-material/EventNote'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Box, Collapse, Divider, Grid, List } from '@mui/material'
import React, { useState } from 'react'
import { SideBarElement } from '@/components/SideBarElement'
import { ListElementIcon, ListElementText } from './SideBarStyles'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import {
  ListElement,
  ListElementButton,
} from '../SideBarElement/SideBarElementStyles'

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
  const [openConfigMenu, setOpenConfigMenu] = useState(false)

  return (
    <Grid container direction="column">
      <Box>
        <List>
          {menu.map((menuItem, index) => (
            <SideBarElement
              key={`sideBarItem${index}`}
              href={menuItem.href}
              open={open}
            >
              <ListElementIcon open={open}>{menuItem.icon}</ListElementIcon>
              <ListElementText primary={menuItem.title} open={open} />
            </SideBarElement>
          ))}
        </List>
      </Box>
      <Divider />
      <Box style={{ marginTop: '1rem' }}>
        <List>
          {footerMenu.map((menuItem, index) => (
            <ListElement disablePadding>
              <ListElementButton open={open}>
                <ListElementIcon open={open}>{menuItem.icon}</ListElementIcon>
                <ListElementText primary={menuItem.title} open={open} />
                {openConfigMenu ? (
                  <ExpandLess onClick={() => setOpenConfigMenu(false)} />
                ) : (
                  <ExpandMore onClick={() => setOpenConfigMenu(true)} />
                )}
              </ListElementButton>
            </ListElement>
          ))}
          <Collapse in={openConfigMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {footerMenu.map((menuItem, index) => (
                <SideBarElement
                  key={`sideBarItem${index}`}
                  href={menuItem.href}
                  open={open}
                >
                  <ListElementIcon open={open}>{menuItem.icon}</ListElementIcon>
                  <ListElementText primary={menuItem.title} open={open} />
                </SideBarElement>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </Grid>
  )
}

export { SideBarComponent }
