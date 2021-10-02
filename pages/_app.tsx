import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/global.css'
import React from 'react'
import { ColorModeProvider } from '../components/ColorModeToggle/ColorModeToggle'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-FD21L2DY4Y"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-FD21L2DY4Y');`}
      </Script>
      <ColorModeProvider><Component {...pageProps} /></ColorModeProvider>
    </>
  )
  
}
