'use client'

import { useState } from 'react'

type Fund = 'honeymoon' | 'newlife'

interface PaymentMethodsProps {
  fund: Fund
  onBack: () => void
}

interface PaymentMethod {
  name: string
  icon: string
  type: 'text' | 'link'
  value: string
  displayValue: string
}

const paymentMethods: PaymentMethod[] = [
  {
    name: 'PayPal',
    icon: '💳',
    type: 'link',
    value: 'https://paypal.me/raazlayli',
    displayValue: 'paypal.me/raazlayli'
  },
  {
    name: 'Venmo',
    icon: '📱',
    type: 'link',
    value: 'https://venmo.com/u/Raaz-Khoshnood',
    displayValue: '@Raaz-Khoshnood'
  },
  {
    name: 'Revolut',
    icon: '🔵',
    type: 'link',
    value: 'https://revolut.me/raaz_k',
    displayValue: '@raaz_k'
  },
  {
    name: 'Zelle',
    icon: '⚡',
    type: 'text',
    value: 'raazkhoshnood@icloud.com',
    displayValue: 'raazkhoshnood@icloud.com'
  }
]

const fundDetails = {
  honeymoon: {
    title: 'Honeymoon Fund',
    icon: '🌴',
  },
  newlife: {
    title: 'New Life Fund',
    icon: '🏠',
  }
}

export default function PaymentMethods({ fund, onBack }: PaymentMethodsProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const details = fundDetails[fund]

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemName)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button - positioned to use reserved space */}
      <div className="text-center -mt-16 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 hover:border-accent/30 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Funds
        </button>
      </div>

      {/* Fund Header */}
      <div className="text-center mb-4">
        <div className="text-4xl mb-1">{details.icon}</div>
        <h2 className="font-serif text-2xl md:text-3xl font-light color-red">
          {details.title}
        </h2>
      </div>

      {/* Instructions */}
      <div className="text-center mb-6">
        <p className="body-text color-blue">
          Choose whatever payment method works best for you!
        </p>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="rounded-xl p-6 shadow-md border-2 border-red/20 transition-all duration-200 bg-white cursor-pointer hover:shadow-lg hover:bg-red/5 hover:border-red/30 active:scale-[0.98]"
            onClick={() => {
              if (method.type === 'link') {
                window.open(method.value, '_blank')
              } else {
                copyToClipboard(method.value, method.name)
              }
            }}
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:space-x-4">
                <div className="text-3xl">{method.icon}</div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-800 text-lg">{method.name}</div>
                  <div className="body-text color-blue mt-1 text-sm sm:text-base">
                    {method.displayValue}
                  </div>
                </div>
              </div>

              <button
                className={`
                  w-full sm:w-auto px-6 py-2.5 rounded-full font-medium transition-all duration-200 active:scale-95 whitespace-nowrap text-sm sm:text-base
                  ${copiedItem === method.name
                    ? 'bg-red text-white'
                    : 'color-red border-2 border-red/20 bg-white hover:bg-red hover:text-white'
                  }
                `}
              >
                {method.type === 'link'
                  ? `Visit ${method.name}`
                  : copiedItem === method.name
                    ? '✓ Copied!'
                    : 'Copy'
                }
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      <div className="text-center mt-8 p-6 bg-white/50 rounded-xl">
        <p className="body-text color-blue italic">
          Thank you for helping us start our new life together! ❤️
        </p>
      </div>
    </div>
  )
}