import { Plus, TrendingDown, Wallet, Target } from 'lucide-react'
import StatCard from './components/StatCard'
import TransactionList from './components/TransactionList'
import CategoryBreakdown from './components/CategoryBreakdown'

function App() {
  const stats = [
    { label: 'Balance', value: '₹45,230', trend: '+₹5,200 this month', icon: Wallet, color: 'text-accent' },
    { label: 'Spent This Month', value: '₹12,840', trend: '↓ 8% from last month', icon: TrendingDown, color: 'text-accent-warm' },
    { label: 'Budget Left', value: '₹7,160', trend: '40% of budget remaining', icon: Target, color: 'text-blue-500' },
  ]

  const transactions = [
    { id: 1, name: 'Blue Tokai Coffee', category: 'Food & Dining', location: 'Whitefield', amount: '-₹285', date: 'Today, 9:45 AM', icon: '☕' },
    { id: 2, name: 'Uber Trip', category: 'Travel', location: 'Indiranagar to Koramangala', amount: '-₹342', date: 'Today, 8:20 AM', icon: '🚕' },
    { id: 3, name: 'Salary Deposit', category: 'Income', location: 'Monthly salary', amount: '+₹65,000', date: 'Feb 1, 2026', icon: '💰' },
    { id: 4, name: 'Rent Payment', category: 'Housing', location: 'Monthly rent', amount: '-₹18,000', date: 'Feb 1, 2026', icon: '🏠' },
  ]

  const categories = [
    { name: 'Food & Dining', count: 12, amount: '₹3,240', icon: '🍔' },
    { name: 'Travel', count: 8, amount: '₹2,180', icon: '🚕' },
    { name: 'Entertainment', count: 5, amount: '₹1,890', icon: '🎬' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark to-[#111820] p-8">
      {/* Header */}
      <div className="mb-12 animate-fade-in">
        <h1 className="font-syne text-5xl font-bold bg-gradient-to-r from-accent to-[#00b570] bg-clip-text text-transparent mb-2">
          Cashflow
        </h1>
        <p className="text-gray-400">Track every rupee. Control your spending.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} delay={index * 0.1} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Category Breakdown */}
        <CategoryBreakdown categories={categories} />
        
        {/* Transactions */}
        <div className="lg:col-span-2">
          <TransactionList transactions={transactions} />
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-accent to-[#00b570] text-primary font-bold text-2xl rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center">
        <Plus size={28} />
      </button>
    </div>
  )
}

export default App
