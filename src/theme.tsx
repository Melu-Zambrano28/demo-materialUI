import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { PaletteMode } from '@mui/material'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

const dark_mode_theme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#6043b1',
      contrastText: '#eae7e7',
      dark: '#180c2b',
      light: '#dfd9f7',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
}

const light_mode_theme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#6043b1',
      contrastText: '#eae7e7',
      dark: '#180c2b',
      light: '#dfd9f7',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? light_mode_theme : dark_mode_theme),
  },
})

export default theme
