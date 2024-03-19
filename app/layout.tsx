import './globals.css'
import type { Metadata } from 'next'
import { Abril_Fatface } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'

const font = Abril_Fatface({ 
  subsets: ['latin'],
  weight: '400' 
})

export const metadata: Metadata = {
  title: 'Frisson',
  description: 'Your music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
        <Player/>
      </body>
    </html>
  )
}
