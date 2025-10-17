import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Great_Vibes, Lora, Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

// Configure fonts
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Layli & Raaz | Wedding',
  description: 'Join us for our wedding celebration',
  keywords: ['wedding', 'Raaz', 'Layli', 'celebration'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfairDisplay.variable} ${greatVibes.variable} ${lora.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-white flex flex-col">
        <ScrollToTop />
        <Navigation />
        <div className="pt-16 flex-grow">
          {children}
        </div>
        <footer className="py-4 text-right body-text text-xs color-blue/60 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <p>
              Website design by Bahar Goel • {' '}
              <a
                href="https://www.instagram.com/bahardoodles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:color-red transition-colors"
              >
                @bahardoodles
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}