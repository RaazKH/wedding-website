import Link from 'next/link'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="text-center relative z-10 px-4">
          <div className="mb-8">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light text-gray-900 mb-2">
              Raaz & Layli
            </h1>
            <div className="w-24 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
              are getting married
            </p>
          </div>
          
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-2 font-medium">
              June 15, 2024
            </p>
            <p className="text-base md:text-lg text-gray-500">
              Napa Valley, California
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/wedding" 
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
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Join Us for Our Special Day
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We're excited to celebrate our love with family and friends. 
              Mark your calendars and get ready for an unforgettable weekend 
              in the heart of wine country.
            </p>
            <Link 
              href="/wedding" 
              className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors"
            >
              View Wedding Details
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}