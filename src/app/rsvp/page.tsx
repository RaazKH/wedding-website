'use client'

import { useState } from 'react'
import RsvpForm from '@/components/RsvpForm'

export default function RSVP() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-6xl font-light text-center mb-16">
          Wedding Details
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center">
            <h2 className="font-serif text-3xl font-light mb-8 text-gray-800">The Celebration</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Ceremony & Reception</h3>
                  <p className="text-gray-600 mb-2">Saturday, [DATE]</p>
                  <p className="text-gray-600 mb-2">[TIME]</p>
                  <p className="text-gray-600 mb-4">[VENUE NAME]</p>
                  <p className="text-gray-500 text-sm">
                    [VENUE ADDRESS]<br />
                    [CITY, STATE ZIP]
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Dress Code</h3>
                  <p className="text-gray-600 mb-2">[DRESS CODE]</p>
                  <p className="text-gray-500 text-sm mb-4">
                    [Any specific dress code details or color preferences]
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-serif text-3xl font-light mb-6 text-gray-800">Please Respond</h2>
            <p className="text-lg text-gray-600 mb-4">
              We're so excited to celebrate with you!
            </p>
            <p className="text-base text-gray-500 mb-8">
              Please respond by <strong>[RSVP DATE]</strong> so we can finalize our preparations.
            </p>

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors shadow-sm"
              >
                RSVP Now
              </button>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                  >
                    X Close RSVP form
                  </button>
                </div>
                <RsvpForm />
              </div>
            )}
          </section>

          <section>
            <h2 className="font-serif text-3xl font-light text-center mb-8 text-gray-800">Travel & Accommodations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="font-serif text-xl mb-4 text-gray-700">Getting There</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <p className="font-medium">By Air</p>
                    <p className="text-sm text-gray-500">Nearest airport: [AIRPORT CODE] - [AIRPORT NAME]</p>
                  </div>
                  <div>
                    <p className="font-medium">By Car</p>
                    <p className="text-sm text-gray-500">Parking available at venue</p>
                  </div>
                  <div>
                    <p className="font-medium">Transportation</p>
                    <p className="text-sm text-gray-500">[Transportation details if providing shuttle service]</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="font-serif text-xl mb-4 text-gray-700">Where to Stay</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-700">[HOTEL NAME 1]</p>
                    <p className="text-sm text-gray-500 mb-1">[HOTEL ADDRESS]</p>
                    <p className="text-sm text-gray-500 mb-2">Group rate: $[RATE]/night</p>
                    <p className="text-xs text-gray-400">Book by [DATE] - Group code: [CODE]</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">[HOTEL NAME 2]</p>
                    <p className="text-sm text-gray-500 mb-1">[HOTEL ADDRESS]</p>
                    <p className="text-sm text-gray-500 mb-2">Group rate: $[RATE]/night</p>
                    <p className="text-xs text-gray-400">Book by [DATE] - Group code: [CODE]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}