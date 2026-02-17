import { Plus, Upload, Users, FileText, Calendar, Settings } from 'lucide-react';

const actions = [
  { id: 1, name: 'New Project', icon: Plus, color: 'bg-blue-500', hoverColor: 'hover:bg-blue-600' },
  { id: 2, name: 'Upload Files', icon: Upload, color: 'bg-green-500', hoverColor: 'hover:bg-green-600' },
  { id: 3, name: 'Invite Team', icon: Users, color: 'bg-purple-500', hoverColor: 'hover:bg-purple-600' },
  { id: 4, name: 'New Document', icon: FileText, color: 'bg-orange-500', hoverColor: 'hover:bg-orange-600' },
  { id: 5, name: 'Schedule Event', icon: Calendar, color: 'bg-pink-500', hoverColor: 'hover:bg-pink-600' },
  { id: 6, name: 'Settings', icon: Settings, color: 'bg-gray-500', hoverColor: 'hover:bg-gray-600' },
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              className={`${action.color} ${action.hoverColor} text-white rounded-lg p-4 flex flex-col items-center gap-2 transition-colors`}
            >
              <Icon className="size-6" />
              <span className="text-sm font-medium">{action.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
