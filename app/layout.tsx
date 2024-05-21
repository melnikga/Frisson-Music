import './globals.css'
import type { Metadata } from 'next'
import { Abril_Fatface } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'

const font = Abril_Fatface({ 
  subsets: ['latin'],
  weight: '400' 
})

export const metadata: Metadata = {
  title: 'Frisson',
  description: 'Your music',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
          </UserProvider>
        </SupabaseProvider>
        <Player/>
      </body>
    </html>
  )
}
