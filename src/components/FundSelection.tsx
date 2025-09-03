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
    gradient: 'from-rose-50 to-pink-50',
    border: 'border-rose-200',
    hover: 'hover:border-rose-300 hover:shadow-rose-100'
  },
  {
    id: 'newlife' as Fund,
    title: 'New Life Fund',
    description: 'Help us build our home, wherever in the world that may be.',
    icon: '🏠',
    gradient: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300 hover:shadow-blue-100'
  }
]

export default function FundSelection({ onSelectFund }: FundSelectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {funds.map((fund) => (
        <button
          key={fund.id}
          onClick={() => onSelectFund(fund.id)}
          className={`
            bg-gradient-to-br ${fund.gradient} 
            rounded-2xl p-8 border-2 ${fund.border}
            transition-all duration-300 
            hover:shadow-xl ${fund.hover}
            text-left group cursor-pointer
            transform hover:scale-105
          `}
        >
          <div className="text-center">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {fund.icon}
            </div>
            <h2 className="font-serif text-3xl font-light text-gray-900 mb-4">
              {fund.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {fund.description}
            </p>
            <div className="inline-flex items-center text-accent font-medium group-hover:text-accent/80 transition-colors">
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