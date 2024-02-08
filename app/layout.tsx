

import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import type { Metadata } from 'next'
import { Inter, DM_Sans, Syne } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({subsets: ['latin'], variable: '--font-dmSans'})
const syne = Syne({subsets: ['latin'], variable: '--font-syne'})

export const metadata: Metadata = {
  title: 'Perfekt motion',
  description: 'Printing, Design',
  icons: [
    {
      url: "/logo.png",
      href: "logo.png"
    }
  ]
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} ${syne.variable}`}>
        <main className='max-w-[1440px] mx-auto'>
          <Navbar />
              {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
