import { useState } from 'react';
import { LoginPage } from '@/app/components/LoginPage';
import { CRMSidebar } from '@/app/components/CRMSidebar';
import { CRMHeader } from '@/app/components/CRMHeader';
import { DashboardView } from '@/app/components/DashboardView';
import { UserManagementView } from '@/app/components/UserManagementView';
import { VendorManagementView } from '@/app/components/VendorManagementView';
import { BookingManagementView } from '@/app/components/BookingManagementView';
import { PaymentsView } from '@/app/components/PaymentsView';
import { SupportView } from '@/app/components/SupportView';
import { ReportsView } from '@/app/components/ReportsView';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');

  const handleLogin = (email: string, password: string) => {
    // In production, validate credentials with backend
    setIsAuthenticated(true);
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const getModuleConfig = () => {
    switch (activeModule) {
      case 'dashboard':
        return {
          title: 'Dashboard',
          subtitle: 'Overview of your platform performance',
          showFilters: false,
          showExport: false,
          component: <DashboardView />
        };
      case 'users':
        return {
          title: 'User Management',
          subtitle: 'Manage players and their accounts',
          showFilters: true,
          showExport: true,
          component: <UserManagementView />
        };
      case 'vendors':
        return {
          title: 'Vendor & Venue Management',
          subtitle: 'Manage venues, onboarding, and vendor operations',
          showFilters: true,
          showExport: true,
          component: <VendorManagementView />
        };
      case 'bookings':
        return {
          title: 'Bookings & Games',
          subtitle: 'Manage all bookings and game activities',
          showFilters: true,
          showExport: true,
          component: <BookingManagementView />
        };
      case 'trainers':
        return {
          title: 'Trainers & Coaches',
          subtitle: 'Manage trainer profiles and bookings',
          showFilters: true,
          showExport: true,
          component: <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Trainer Management Module</h3>
            <p className="text-gray-600">Trainer/Coach management interface coming soon...</p>
          </div>
        };
      case 'payments':
        return {
          title: 'Payments & Wallet',
          subtitle: 'Transaction monitoring, settlements, and wallet management',
          showFilters: true,
          showExport: true,
          component: <PaymentsView />
        };
      case 'commission':
        return {
          title: 'Commission & Pricing',
          subtitle: 'Configure commission rules and pricing structures',
          showFilters: false,
          showExport: true,
          component: <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Global Commission Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Default Commission Rate (%)</label>
                  <input type="number" defaultValue="15" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Convenience Fee (₹)</label>
                  <input type="number" defaultValue="50" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Sport-wise Commission</h3>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-700 px-4 py-3">Sport</th>
                    <th className="text-left text-sm font-medium text-gray-700 px-4 py-3">Commission Rate (%)</th>
                    <th className="text-left text-sm font-medium text-gray-700 px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {['Cricket', 'Football', 'Badminton', 'Tennis'].map((sport) => (
                    <tr key={sport} className="border-b">
                      <td className="px-4 py-3">{sport}</td>
                      <td className="px-4 py-3">
                        <input type="number" defaultValue="15" className="w-24 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </td>
                      <td className="px-4 py-3">
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        };
      case 'content':
        return {
          title: 'Content & Platform Configuration',
          subtitle: 'Manage sports, locations, banners, and promotions',
          showFilters: false,
          showExport: false,
          component: <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Sports Management</h3>
                <div className="space-y-3 mb-4">
                  {['Cricket', 'Football', 'Badminton', 'Tennis', 'Basketball'].map((sport) => (
                    <div key={sport} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="font-medium">{sport}</span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Edit</button>
                        <button className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">+ Add New Sport</button>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">City Management</h3>
                <div className="space-y-3 mb-4">
                  {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'].map((city) => (
                    <div key={city} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <span className="font-medium">{city}</span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">Edit</button>
                        <button className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50">Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">+ Add New City</button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Active Promotions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { code: 'FIRST50', discount: '50% OFF', type: 'First Booking' },
                  { code: 'WEEKEND20', discount: '20% OFF', type: 'Weekend Special' },
                  { code: 'REFER100', discount: '₹100 OFF', type: 'Referral' }
                ].map((promo) => (
                  <div key={promo.code} className="border border-gray-200 rounded-lg p-4">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded font-mono text-sm">{promo.code}</span>
                    </div>
                    <p className="text-lg font-semibold mb-1">{promo.discount}</p>
                    <p className="text-sm text-gray-600 mb-3">{promo.type}</p>
                    <button className="w-full py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-50">Edit Promo</button>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">+ Create New Promo Code</button>
            </div>
          </div>
        };
      case 'support':
        return {
          title: 'Support & Disputes',
          subtitle: 'Manage customer support tickets and dispute resolution',
          showFilters: true,
          showExport: true,
          component: <SupportView />
        };
      case 'reports':
        return {
          title: 'Reports & Analytics',
          subtitle: 'Platform insights and performance metrics',
          showFilters: false,
          showExport: true,
          component: <ReportsView />
        };
      case 'settings':
        return {
          title: 'Access Control & Settings',
          subtitle: 'Manage roles, permissions, and system settings',
          showFilters: false,
          showExport: false,
          component: <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">User Roles & Permissions</h3>
              <div className="space-y-3">
                {[
                  { role: 'Super Admin', users: 2, permissions: 'Full Access' },
                  { role: 'Operations Admin', users: 5, permissions: 'Limited Access' },
                  { role: 'Support Executive', users: 8, permissions: 'Support Only' },
                  { role: 'Finance Admin', users: 3, permissions: 'Finance Only' },
                  { role: 'Content Manager', users: 4, permissions: 'Content Only' }
                ].map((role) => (
                  <div key={role.role} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div>
                      <h4 className="font-semibold">{role.role}</h4>
                      <p className="text-sm text-gray-600">{role.users} users • {role.permissions}</p>
                    </div>
                    <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100">Manage</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Audit Logs</h3>
              <div className="space-y-2">
                {[
                  { user: 'Admin User', action: 'Modified user wallet balance', time: '2 hours ago' },
                  { user: 'Support Team A', action: 'Resolved ticket TKT-8001', time: '3 hours ago' },
                  { user: 'Finance Admin', action: 'Processed vendor settlement', time: '5 hours ago' }
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">{log.user}</p>
                      <p className="text-xs text-gray-600">{log.action}</p>
                    </div>
                    <span className="text-xs text-gray-500">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        };
      default:
        return {
          title: 'Dashboard',
          subtitle: 'Overview of your platform performance',
          showFilters: false,
          showExport: false,
          component: <DashboardView />
        };
    }
  };

  const config = getModuleConfig();

  return (
    <div className="size-full flex bg-gray-50">
      <CRMSidebar activeModule={activeModule} onModuleChange={setActiveModule} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <CRMHeader 
          title={config.title} 
          subtitle={config.subtitle}
          showFilters={config.showFilters}
          showExport={config.showExport}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          {config.component}
        </main>
      </div>
    </div>
  );
}