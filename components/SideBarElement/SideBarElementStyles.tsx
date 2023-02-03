import { styled } from '@mui/material/styles'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

export const ListElement = styled(ListItem)(({ theme }) => ({
  color: theme.palette.primary.main,
  display: 'block',
}))

export const ListElementButton = styled(ListItemButton)<{ open: boolean }>(
  ({ theme, open }) => ({
    minHeight: 48,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
      '& .MuiListItemText-root': {
        color: 'white',
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  }),
)

export const ListElementIcon = styled(ListItemIcon)<{ open: boolean }>(
  ({ theme, open }) => ({
    minWidth: 0,
    marginRight: open ? '24px' : 'auto',
    justifyContent: 'center',
    color: theme.palette.primary.main,
  }),
)

export const ListElementText = styled(ListItemText)<{ open: boolean }>(
  ({ theme, open }) => ({
    opacity: open ? 1 : 0,
    color: theme.palette.text.primary,
  }),
)
