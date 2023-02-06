import React from 'react'
import { SideBarComponent } from '@/components/Sidebar'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import { Drawer, DrawerHeader } from './AppLayoutStyles'
import IconButton from '@mui/material/IconButton'
import { TopBarComponent } from '@/components/TopBar'

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <TopBarComponent open={open} drawerOpen={handleDrawerOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: theme.palette.primary.main }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardDoubleArrowRightIcon />
            ) : (
              <KeyboardDoubleArrowLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <SideBarComponent open={open} />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  )
}

export { AppLayout }
