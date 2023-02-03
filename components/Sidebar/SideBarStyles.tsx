import { ListItemIcon, ListItemText, styled } from '@mui/material'

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
