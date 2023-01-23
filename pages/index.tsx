import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { AppLayoutComponent } from '@/components/AppLayout/AppLayoutComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AppLayoutComponent>Home</AppLayoutComponent>
    </>
  )
}
