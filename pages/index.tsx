import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { AppLayoutComponent } from '@/components/AppLayout/AppLayoutComponent'
import { createTheme } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: '#f2694c',
    },
    secondary: {
      main: '#75a42e',
    },
  },
})

export default function Home() {
  return (
    <>
      <AppLayoutComponent>Home</AppLayoutComponent>
    </>
  )
}
