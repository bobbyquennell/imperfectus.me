import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/global.css'
import React from 'react'
import { ColorModeProvider } from '../components/ColorModeToggle/ColorModeToggle'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ColorModeProvider><Component {...pageProps} /></ColorModeProvider>
}
