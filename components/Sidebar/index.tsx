import React, { useState } from 'react'
import { Avatar, Box, Collapse, Divider, Grid, List } from '@mui/material'
import { SideBarElement, SideBarLinkElement } from '@/components/SideBarElement'
import { ListElementIcon, ListElementText } from './SideBarStyles'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import EventNoteIcon from '@mui/icons-material/EventNote'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import LockResetIcon from '@mui/icons-material/LockReset'

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
    subItems: [
      {
        href: '/cambioPassword',
        title: 'Cambio Password',
        icon: <LockResetIcon />,
      },
    ],
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
            <SideBarLinkElement
              key={`sideBarItem${index}`}
              href={menuItem.href}
              open={open}
            >
              <ListElementIcon
                open={open}
                title={`${!open ? menuItem.title : ''}`}
              >
                {menuItem.icon}
              </ListElementIcon>
              <ListElementText primary={menuItem.title} open={open} />
            </SideBarLinkElement>
          ))}
        </List>
      </Box>
      <Divider />
      <Box style={{ marginTop: '1rem' }}>
        <List>
          {footerMenu.map((menuItem, index) => (
            <Box key={`footerMenuBox${index}`}>
              <SideBarElement
                key={`sideBarItem${index}`}
                href={menuItem.href}
                open={open}
              >
                <ListElementIcon
                  open={open}
                  title={`${!open ? menuItem.title : ''}`}
                >
                  {menuItem.icon}
                </ListElementIcon>
                <ListElementText primary={menuItem.title} open={open} />
                {openConfigMenu ? (
                  <ExpandLess onClick={() => setOpenConfigMenu(false)} />
                ) : (
                  <ExpandMore onClick={() => setOpenConfigMenu(true)} />
                )}
              </SideBarElement>
              {menuItem.subItems.map((subitem, indexSubItem) => (
                <Collapse
                  key={`collapseSubItems${indexSubItem}`}
                  in={open ? openConfigMenu : true}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <SideBarLinkElement
                      key={`sideBarSubItem${indexSubItem}`}
                      href={subitem.href}
                      open={open}
                    >
                      <ListElementIcon
                        open={open}
                        title={`${!open ? subitem.title : ''}`}
                      >
                        {subitem.icon}
                      </ListElementIcon>
                      <ListElementText primary={subitem.title} open={open} />
                    </SideBarLinkElement>
                  </List>
                </Collapse>
              ))}
            </Box>
          ))}
        </List>
      </Box>
    </Grid>
  )
}

export { SideBarComponent }
