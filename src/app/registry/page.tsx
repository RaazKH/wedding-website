'use client'

import { useState } from 'react'
import FundSelection from '@/components/FundSelection'
import PaymentMethods from '@/components/PaymentMethods'

type Fund = 'honeymoon' | 'newlife' | null

export default function Registry() {
  const [selectedFund, setSelectedFund] = useState<Fund>(null)

  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-light text-gray-900 mb-8">
            Gift Registry
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              We're still in the process of figuring out our future home! Since we don't know which country we'll be in, cash gifts help us start our married life anywhere love takes us.
            </p>
            {!selectedFund && (
              <p className="text-base text-gray-500 font-medium">
                Choose a fund below to see payment options
              </p>
            )}
          </div>
        </div>

        {/* Fund Selection or Payment Methods */}
        <div className="max-w-4xl mx-auto">
          <div className="h-10 mb-6" />

          {!selectedFund ? (
            <FundSelection onSelectFund={setSelectedFund} />
          ) : (
            <PaymentMethods
              fund={selectedFund}
              onBack={() => setSelectedFund(null)}
            />
          )}
        </div>
      </div>
    </main>
  )
}