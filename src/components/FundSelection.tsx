'use client'

type Fund = 'honeymoon' | 'newlife'

interface FundSelectionProps {
  onSelectFund: (fund: Fund) => void
}

const funds = [
  {
    id: 'honeymoon' as Fund,
    title: 'Honeymoon Fund',
    description: 'Help us create unforgettable memories on our dream honeymoon adventure together.',
    icon: '🌴',
  },
  {
    id: 'newlife' as Fund,
    title: 'New Life Fund',
    description: 'Help us build our home, wherever in the world that may be.',
    icon: '🏠',
  }
]

export default function FundSelection({ onSelectFund }: FundSelectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {funds.map((fund) => (
        <button
          key={fund.id}
          onClick={() => onSelectFund(fund.id)}
          style={{
            background: 'linear-gradient(to bottom right, #fefce8, #fef9c3)',
            borderColor: '#fef08a'
          }}
          className="
            rounded-2xl p-6 border-2
            transition-all duration-300
            hover:shadow-xl
            text-left group cursor-pointer
            transform hover:scale-105
          "
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#fde047'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#fef08a'
          }}
        >
          <div className="text-center">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
              {fund.icon}
            </div>
            <h2 className="font-serif text-2xl font-light color-red mb-3">
              {fund.title}
            </h2>
            <p className="body-text color-blue text-base leading-relaxed mb-4">
              {fund.description}
            </p>
            <div className="inline-flex items-center color-red font-medium group-hover:text-red/80 transition-colors text-sm">
              Select Fund
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}