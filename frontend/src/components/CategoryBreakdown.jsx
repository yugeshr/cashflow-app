export default function CategoryBreakdown({ categories }) {
  return (
    <div className="card p-8">
      <h2 className="font-syne text-2xl font-bold mb-6">Top Categories</h2>
      
      <div className="space-y-4">
        {categories.map((cat, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-700 hover:border-accent hover:bg-gray-800/20 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-lg group-hover:from-accent/30">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
                <p className="text-xs text-gray-400">{cat.count} transactions</p>
              </div>
            </div>
            <div className="font-syne font-bold text-accent">{cat.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
