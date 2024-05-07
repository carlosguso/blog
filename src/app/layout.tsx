import type { Metadata } from 'next'
import { Merriweather_Sans } from 'next/font/google'
import './globals.css'

const merriweatherSans = Merriweather_Sans({ subsets: ['latin'], weight: ['300', '600'] })

export const metadata: Metadata = {
  title: 'Carlos Gutierrez',
  description: "Carlos' personal page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${merriweatherSans.className} bg-main-dark`}>{children}</body>
    </html>
  )
}
