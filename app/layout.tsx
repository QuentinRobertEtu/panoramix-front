import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Panoramix.com',
  description: 'Real Druid Only',
  generator: 'FunkyFoja',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
