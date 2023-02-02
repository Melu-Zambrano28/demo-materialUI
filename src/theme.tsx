import { Roboto } from '@next/font/google'
import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

// Create a theme instance.
export const theme = createTheme({
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
      light: '#AF52BF',
      dark: '#6D1B7B',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#D32F2F',
      light: '#EF5350',
      dark: '#C62828',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#ED6C02',
      light: '#FF9800',
      dark: '#E65100',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: 'rgba(0,0,0,0.89)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: '',
    },
  },
})

export const dark_mode_theme = createTheme({
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
})

export const light_mode_theme = createTheme({
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
})

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? light_mode_theme : dark_mode_theme),
  },
})
