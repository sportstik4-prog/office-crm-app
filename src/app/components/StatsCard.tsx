import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export function StatsCard({ title, value, change, changeType, icon: Icon, iconColor, iconBg }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm mb-1">{title}</p>
          <h3 className="text-3xl font-semibold mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            <span className={`text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {changeType === 'positive' ? '↑' : '↓'} {change}
            </span>
            <span className="text-gray-500 text-xs">vs last month</span>
          </div>
        </div>
        <div className={`${iconBg} ${iconColor} p-3 rounded-lg`}>
          <Icon className="size-6" />
        </div>
      </div>
    </div>
  );
}
