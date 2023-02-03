import { styled } from '@mui/material/styles'
import { ListItem, ListItemButton } from '@mui/material'

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
