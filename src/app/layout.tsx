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
        <footer className="py-4 body-text text-xs color-blue/60 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <p className="flex items-center justify-center gap-1">
              <span>Website design by</span>
              <a
                href="https://bahardoodles.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:color-red transition-colors"
              >
                Bahar Goel
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/bahardoodles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:color-red transition-colors inline-flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @bahardoodles
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}