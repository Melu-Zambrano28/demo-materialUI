import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/More'
import { Avatar, Box, IconButton } from '@mui/material'
import { AppBar, IconButtonMenu } from '@/components/AppLayout/AppLayoutStyles'
import purple from '@mui/material/colors/purple'

type TopBarProp = {
  open: boolean
  drawerOpen: () => void
}

const violet = purple[200]

const TopBarComponent: React.FC<TopBarProp> = ({ open, drawerOpen }) => {
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
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ bgcolor: violet }}>{`MZ`}</Avatar>
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            //aria-controls={mobileMenuId}
            aria-haspopup="true"
            //onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export { TopBarComponent }
