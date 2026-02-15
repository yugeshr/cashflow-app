export default function StatCard({ label, value, trend, icon: Icon, color, delay }) {
  return (
    <div 
      className="card p-6 hover:border-accent hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
      style={{ animation: `slideDown 0.6s ease-out ${delay}s both` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {label}
          </div>
          <div className={`font-syne text-3xl font-bold ${color}`}>
            {value}
          </div>
        </div>
        <Icon className={`${color} opacity-20 group-hover:opacity-40 transition-opacity`} size={24} />
      </div>
      <div className="text-xs text-gray-400">{trend}</div>
      
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
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
