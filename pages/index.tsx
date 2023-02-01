import styles from '@/styles/Home.module.css'
import { AppLayoutComponent } from '@/components/AppLayout/AppLayoutComponent'
import { createTheme, ThemeProvider } from '@mui/material'

import { useState } from 'react'

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

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  return (
    <ThemeProvider
      theme={
        isDarkTheme
          ? createTheme(dark_mode_theme)
          : createTheme(light_mode_theme)
      }
    >
      <AppLayoutComponent>Home</AppLayoutComponent>
    </ThemeProvider>
  )
}
