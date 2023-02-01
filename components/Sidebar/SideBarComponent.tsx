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
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SideBarItem } from './SideBarItem'

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
