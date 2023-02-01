import styles from '@/styles/Home.module.css'
import { AppLayoutComponent } from '@/components/AppLayout/AppLayoutComponent'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'

import { useMemo, useState } from 'react'

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

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        )
      },
    }),
    [],
  )

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <AppLayoutComponent>Home</AppLayoutComponent>
    </ThemeProvider>
  )
}
