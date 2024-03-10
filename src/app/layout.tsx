import type { Metadata } from 'next'
import { Inria_Sans } from 'next/font/google'
import './globals.css'

const inria = Inria_Sans({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Desvendando - Jogo de adivinhação de palavras',
  description: 'Jogo para adivinhar palavras',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inria} lang="pt">
      <body className="bg-[#24222B]">{children}</body>
    </html>
  )
}
