import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bridge Ranks',
  description: 'Classement FFB indexé sur l\'année',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <Script src="https://kit.fontawesome.com/cdbad67a63.js" crossorigin="anonymous"></Script>
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
