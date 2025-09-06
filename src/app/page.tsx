'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Prevent body scrolling on homepage
    document.body.style.overflow = 'hidden'
    
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <div className="h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="h-full flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="text-center relative z-10 px-4">
          <div className="mb-8">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light text-gray-900 mb-2 drop-shadow-lg">
              Raaz & Layli
            </h1>
            <div className="w-24 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light drop-shadow-sm">
              are getting married
            </p>
          </div>
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-2 font-medium drop-shadow-sm">
              June 15, 2024
            </p>
            <p className="text-base md:text-lg text-gray-500 drop-shadow-sm">
              Napa Valley, California
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/rsvp"
              className="btn-primary text-center min-w-[160px]"
            >
              RSVP Now
            </Link>
            <Link
              href="/story"
              className="btn-secondary text-center min-w-[160px]"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
