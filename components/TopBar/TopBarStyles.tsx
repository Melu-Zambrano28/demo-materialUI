import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const ContainerMenuMobile = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))
