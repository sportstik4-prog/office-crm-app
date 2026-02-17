import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Calendar, 
  GraduationCap,
  Wallet, 
  Percent, 
  FileText, 
  HeadphonesIcon, 
  BarChart3, 
  Settings,
  ChevronRight,
  LogOut
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  badge?: number;
}

function NavItem({ icon: Icon, label, isActive = false, onClick, badge }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-5 flex-shrink-0" />
        <span className="font-medium text-sm">{label}</span>
      </div>
      {badge !== undefined && badge > 0 && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-white text-blue-600' : 'bg-red-500 text-white'}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

interface CRMSidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

export function CRMSidebar({ activeModule, onModuleChange }: CRMSidebarProps) {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: Users, label: 'User Management', id: 'users' },
    { icon: Building2, label: 'Venue & Vendors', id: 'vendors' },
    { icon: Calendar, label: 'Bookings & Games', id: 'bookings' },
    { icon: GraduationCap, label: 'Trainers & Coaches', id: 'trainers' },
    { icon: Wallet, label: 'Payments & Wallet', id: 'payments' },
    { icon: Percent, label: 'Commission & Pricing', id: 'commission' },
    { icon: FileText, label: 'Content & Platform', id: 'content' },
    { icon: HeadphonesIcon, label: 'Support & Disputes', id: 'support', badge: 12 },
    { icon: BarChart3, label: 'Reports & Analytics', id: 'reports' },
    { icon: Settings, label: 'Access Control', id: 'settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col">
      {/* Logo & Brand */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <div>
            <h2 className="font-bold text-lg">SportsCRM</h2>
            <p className="text-xs text-gray-500">Back Office</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={activeModule === item.id}
            onClick={() => onModuleChange(item.id)}
            badge={item.badge}
          />
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex items-center gap-3 mb-3">
          <div className="size-10 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Admin User</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut className="size-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
