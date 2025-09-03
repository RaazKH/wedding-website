import './globals.css'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Raaz & Layli | Wedding',
  description: 'Join us for our wedding celebration',
  keywords: ['wedding', 'Raaz', 'Layli', 'celebration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white">
        <ScrollToTop />
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}