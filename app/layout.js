web application/stitch/projects/12538483303495146642/screens/db2a6f63c9e54313b594f612b488f132
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apex AI BOT | Industrial Intelligence',
  description: 'Precision Automation & Security Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
