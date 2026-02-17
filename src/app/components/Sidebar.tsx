import { Home, BarChart3, Users, FileText, Calendar, Settings, MessageSquare, Briefcase, LogOut } from 'lucide-react';
import { useState } from 'react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ icon: Icon, label, isActive = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon className="size-5 flex-shrink-0" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const mainNavItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Briefcase, label: 'Projects' },
    { icon: Users, label: 'Team' },
    { icon: FileText, label: 'Documents' },
    { icon: Calendar, label: 'Calendar' },
    { icon: MessageSquare, label: 'Messages' },
  ];

  const bottomNavItems = [
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r h-full">
      {/* Sidebar Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div>
            <h2 className="font-bold text-lg">Dashboard</h2>
            <p className="text-xs text-gray-500">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {mainNavItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="p-4 border-t space-y-1">
        {bottomNavItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>

      {/* User Card */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
