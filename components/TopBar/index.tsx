import { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/More'
import { Avatar, Box, IconButton } from '@mui/material'
import { AppBar, IconButtonMenu } from '@/components/AppLayout/AppLayoutStyles'
import { purple } from '@mui/material/colors'
import { MenuMobileTopBar } from './Menu'
import LogoutIcon from '@mui/icons-material/Logout'
import { ContainerMenuMobile } from './TopBarStyles'

type TopBarProp = {
  open: boolean
  drawerOpen: () => void
}

const violet = purple[200]

const TopBarComponent: React.FC<TopBarProp> = ({ open, drawerOpen }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  return (
    <AppBar open={open}>
      <Toolbar>
        <IconButtonMenu
          color="inherit"
          aria-label="open drawer"
          onClick={drawerOpen}
          edge="start"
          open={open}
        >
          <MenuIcon />
        </IconButtonMenu>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={`tob-bar-menu`}
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar sx={{ bgcolor: violet }}>{`MZ`}</Avatar>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="logout"
            aria-controls={`tob-bar-menu`}
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
        </Box>
        <ContainerMenuMobile>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={`tob-bar-menu-mobile`}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>

          <MenuMobileTopBar
            idMenu={`tob-bar-menu-mobile`}
            anchorEl={mobileMoreAnchorEl}
            isMenuOpen={isMobileMenuOpen}
            handleMenuClose={handleMobileMenuClose}
          />
        </ContainerMenuMobile>
      </Toolbar>
    </AppBar>
  )
}

export { TopBarComponent }
