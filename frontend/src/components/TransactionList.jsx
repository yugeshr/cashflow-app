export default function TransactionList({ transactions }) {
  return (
    <div className="card p-8">
      <h2 className="font-syne text-2xl font-bold mb-6">Recent Transactions</h2>
      
      <div className="space-y-1">
        {transactions.map((txn, index) => (
          <div 
            key={txn.id}
            className="flex items-center justify-between p-4 border-b border-gray-700 last:border-0 hover:bg-gray-800/30 rounded transition-all duration-200 group"
            style={{ animation: `fadeIn 0.6s ease-out ${0.5 + index * 0.1}s both` }}
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-xl group-hover:from-accent/30">
                {txn.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white">{txn.name}</h3>
                <p className="text-sm text-gray-400">{txn.category} • {txn.location}</p>
              </div>
            </div>
            
            <div className="flex gap-8 text-right">
              <div className="text-xs text-gray-400 min-w-[100px]">{txn.date}</div>
              <div className={`font-syne font-bold text-lg min-w-[80px] ${
                txn.amount.startsWith('+') ? 'text-accent' : 'text-accent-warm'
              }`}>
                {txn.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
