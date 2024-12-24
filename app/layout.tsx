import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fiach Rayane | Développeur Full-Stack Java',
  description: 'Portfolio de Fiach Rayane, Développeur Full-Stack Java basé à Casablanca',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} cursor-none`}>{children}</body>
    </html>
  )
}

