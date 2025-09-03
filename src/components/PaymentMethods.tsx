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
  type: 'qr' | 'text' | 'address' | 'link'
  value: string
  displayValue?: string
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
    name: 'Zelle',
    icon: '⚡',
    type: 'text',
    value: 'raazlayli@email.com',
    displayValue: 'raazlayli@email.com'
  },
  {
    name: 'Apple Cash',
    icon: '🍎',
    type: 'address',
    value: 'Message Raaz for setup',
    displayValue: 'Message Raaz for setup'
  },
  {
    name: 'Cash/Check',
    icon: '💰',
    type: 'address',
    value: 'Give at wedding or mail',
    displayValue: 'Give at wedding or mail'
  }
]

const fundDetails = {
  honeymoon: {
    title: 'Honeymoon Fund',
    icon: '🌴',
    color: 'rose'
  },
  newlife: {
    title: 'New Life Fund',
    icon: '🏠',
    color: 'blue'
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'rose':
        return {
          text: 'text-rose-600',
          bg: 'bg-rose-500',
          border: 'border-rose-200',
          hover: 'hover:bg-rose-50'
        }
      case 'blue':
        return {
          text: 'text-blue-600',
          bg: 'bg-blue-500',
          border: 'border-blue-200',
          hover: 'hover:bg-blue-50'
        }
      default:
        return {
          text: 'text-accent',
          bg: 'bg-accent',
          border: 'border-accent/20',
          hover: 'hover:bg-accent/5'
        }
    }
  }

  const colors = getColorClasses(details.color)

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
      <div className="text-center mb-8">
        <div className="text-4xl mb-2">{details.icon}</div>
        <h2 className={`font-serif text-2xl md:text-3xl font-light ${colors.text}`}>
          {details.title}
        </h2>
      </div>

      {/* Instructions */}
      <div className="text-center mb-8">
        <p className="text-gray-600">
          Choose whatever payment method works best for you!
        </p>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">
        {paymentMethods.map((method) => {
          const isInteractive = method.type !== 'address'
          return (
            <div
              key={method.name}
              className={`
              rounded-xl p-6 shadow-md border transition-all duration-200
              ${isInteractive
                  ? `bg-white ${colors.border} ${colors.hover} cursor-pointer hover:shadow-lg`
                  : 'bg-gray-50 border-gray-200'
                }
            `}
              onClick={() => {
                if (method.type === 'link') {
                  window.open(method.value, '_blank')
                } else if (method.type !== 'address') {
                  copyToClipboard(method.value, method.name)
                }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{method.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">{method.name}</div>
                    {method.type === 'qr' && (
                      <div className="text-sm text-gray-500 mt-1">
                        QR Code available • {method.displayValue}
                      </div>
                    )}
                    {method.type === 'text' && (
                      <div className="text-gray-600 font-mono mt-1">
                        {method.displayValue}
                      </div>
                    )}
                    {method.type === 'link' && (
                      <div className="text-gray-600 mt-1">
                        {method.displayValue}
                      </div>
                    )}
                    {method.type === 'address' && (
                      <div className="text-gray-600 mt-1">
                        <div>{method.displayValue}</div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {method.type === 'qr' && (
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <span className="text-xs text-gray-500 font-medium">QR</span>
                    </div>
                  )}

                  {isInteractive ? (
                    <button
                      className={`
                      px-4 py-2 rounded-full font-medium transition-all duration-200
                      ${copiedItem === method.name
                          ? `${colors.bg} text-white`
                          : `${colors.text} border-2 ${colors.border} bg-white hover:${colors.bg} hover:text-black`
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
                  ) : (
                    <div className="flex items-center text-gray-500 text-sm">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Contact Required
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer Message */}
      <div className="text-center mt-8 p-6 bg-white/50 rounded-xl">
        <p className="text-gray-600 italic">
          Thank you for helping us start our new life together! ❤️
        </p>
      </div>
    </div>
  )
}