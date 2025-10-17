'use client'

import { useState } from 'react'
import RsvpForm from '@/components/RsvpForm'

export default function RSVP() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="cursive color-orange text-5xl md:text-6xl font-bold text-center mb-16">
          Wedding Details
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center">
            <h2 className="font-serif uppercase color-dark-red text-2xl font-light mb-8">The Celebration</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Ceremony & Reception</h3>
                  <p className="text-gray-600 mb-2">Saturday, January 24, 2026</p>
                  <p className="text-gray-600 mb-2">Time: TBA</p>
                  <p className="text-gray-600 mb-4">Quinta Condes de Valadares</p>
                  <p className="text-gray-500 text-sm">
                    Rua do Chafariz, Nº5, A Dos Calvos, 2670-012<br />
                    Loures, Portugal
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Dress Code</h3>
                  <p className="text-gray-600 mb-2">Formal / Black-Tie Optional</p>
                  <p className="text-gray-500 text-sm mb-4">Details TBA</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-center font-serif uppercase color-dark-red text-2xl font-light mb-8">Travel & Accommodations</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Getting There</h3>
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="font-medium">By Air</p>
                      <p className="text-sm text-gray-500">Nearest airport: LIS - Humberto Delgado Airport (Lisbon)</p>
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

                <div>
                  <h3 className="font-serif text-xl mb-4 text-gray-700">Where to Stay</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Suggested hotels near Loures</p>
                      <p className="text-sm text-gray-500 mb-1">Recommendations TBA</p>
                      <p className="text-sm text-gray-500 mb-2">Group rate: TBA</p>
                      <p className="text-xs text-gray-400">We'll share group codes if available</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Alternative stays</p>
                      <p className="text-sm text-gray-500 mb-1">Lisbon city center (~30 min drive)</p>
                      <p className="text-sm text-gray-500 mb-2">Group rate: TBA</p>
                      <p className="text-xs text-gray-400">Details coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-serif uppercase color-dark-red text-2xl font-light mb-8">Please Respond by October 31st</h2>
            <p className="text-lg text-gray-600 mb-4">
              We're so excited to celebrate with you!
            </p>
            <p className="text-base text-gray-500 mb-8">
              Please respond by <strong>December 1, 2025</strong> so we can finalize our preparations.
            </p>

            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="bg-red text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-red/90 focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 transition-colors shadow-sm"
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
        </div>
      </div>
    </main>
  )
}