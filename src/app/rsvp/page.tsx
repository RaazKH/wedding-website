'use client'

import { useState } from 'react'
import RsvpForm from '@/components/RsvpForm'

export default function RSVP() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="cursive color-orange text-5xl md:text-6xl text-center mb-16">
          Wedding Details
        </h1>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="text-center">
            <h2 className="font-serif uppercase color-dark-red text-2xl font-light mb-8">The Celebration</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 color-blue">Ceremony & Reception</h3>
                  <p className="color-blue mb-2">Saturday, January 24, 2026</p>
                  <p className="color-blue mb-2">Time: TBA</p>
                  <p className="color-blue mb-4">Quinta Condes de Valadares</p>
                  <p className="color-blue text-sm">
                    Rua do Chafariz, Nº5, A Dos Calvos, 2670-012<br />
                    Loures, Portugal
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-center font-serif uppercase color-dark-red text-2xl font-light mb-8">Travel & Accommodations</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl mb-4 color-blue">Getting There</h3>
                  <div className="space-y-3 color-blue">
                    <div>
                      <p className="font-medium">By Air</p>
                      <p className="text-sm color-blue">Nearest airport: LIS - Humberto Delgado Airport (Lisbon)</p>
                    </div>
                    <div>
                      <p className="font-medium">By Car or Taxi</p>
                      <p className="text-sm color-blue">Venue is a 20 minute drive from the airport.<br/> Uber and Bolt charge around 15 euros.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl mb-4 color-blue">Where to Stay</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium color-blue">Suggested hotel (where we will be staying)</p>
                      <p className="text-sm color-blue mb-1">Jupiter Lisboa Hotel</p>
                      <p className="text-sm color-blue mb-1">Group rate code: <span className="font-medium">RaazLayli</span></p>
                      <a
                        href="https://www.jupiterhotelgroup.com/en/page/lisboa/jupiter-lisboa-hotel-rooftop-spa.6634.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs underline color-blue"
                      >
                        View hotel website
                      </a>
                    </div>
                    <div>
                      <p className="font-medium color-blue">Alternative stays</p>
                      <p className="text-sm color-blue mb-1">There are many competitively priced hotels in the surrounding area and across Lisbon.</p>
                      <p className="text-xs color-blue">Guests are welcome to choose accommodations that best suit their preferences and budget.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="font-serif uppercase color-dark-red text-2xl font-light mb-8">Please Respond</h2>
            <p className="text-lg color-blue mb-4">
              We're so excited to celebrate with you!
            </p>
            <p className="text-base color-blue mb-8">
              Please respond by <strong>20 December 2025</strong> so we can finalize our preparations.
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
                    className="color-blue hover:color-red transition-colors text-sm"
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
