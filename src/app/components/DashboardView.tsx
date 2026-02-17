import { Users, Building2, Calendar, DollarSign, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const statsCards = [
  { title: 'Total Users', value: '45,231', change: '+12.5%', isPositive: true, icon: Users, color: 'bg-blue-100 text-blue-600' },
  { title: 'Active Venues', value: '1,247', change: '+8.2%', isPositive: true, icon: Building2, color: 'bg-green-100 text-green-600' },
  { title: 'Bookings Today', value: '342', change: '-3.1%', isPositive: false, icon: Calendar, color: 'bg-purple-100 text-purple-600' },
  { title: 'Revenue Today', value: '₹1.2L', change: '+15.8%', isPositive: true, icon: DollarSign, color: 'bg-orange-100 text-orange-600' },
];

const revenueData = [
  { month: 'Jan', revenue: 42000, bookings: 320 },
  { month: 'Feb', revenue: 48000, bookings: 380 },
  { month: 'Mar', revenue: 51000, bookings: 420 },
  { month: 'Apr', revenue: 58000, bookings: 450 },
  { month: 'May', revenue: 62000, bookings: 490 },
  { month: 'Jun', revenue: 71000, bookings: 530 },
];

const sportDistribution = [
  { name: 'Cricket', value: 35, color: '#3b82f6' },
  { name: 'Football', value: 25, color: '#10b981' },
  { name: 'Badminton', value: 20, color: '#f59e0b' },
  { name: 'Tennis', value: 12, color: '#8b5cf6' },
  { name: 'Others', value: 8, color: '#6b7280' },
];

const recentBookings = [
  { id: 'BK-2345', user: 'Rahul Sharma', venue: 'Sports Arena Mumbai', sport: 'Cricket', amount: '₹1,200', status: 'confirmed' },
  { id: 'BK-2344', user: 'Priya Patel', venue: 'Green Field Bangalore', sport: 'Football', amount: '₹800', status: 'pending' },
  { id: 'BK-2343', user: 'Amit Kumar', venue: 'Court Kings Delhi', sport: 'Badminton', amount: '₹600', status: 'confirmed' },
  { id: 'BK-2342', user: 'Sneha Reddy', venue: 'Tennis Hub Hyderabad', sport: 'Tennis', amount: '₹1,000', status: 'confirmed' },
  { id: 'BK-2341', user: 'Vikram Singh', venue: 'Sports Arena Mumbai', sport: 'Cricket', amount: '₹1,200', status: 'cancelled' },
];

const pendingApprovals = [
  { type: 'Vendor', name: 'Sports Complex XYZ', detail: 'New venue registration', priority: 'high' },
  { type: 'Payout', name: 'Court Kings Delhi', detail: '₹45,000 settlement request', priority: 'medium' },
  { type: 'Refund', name: 'Rahul Sharma - BK-2340', detail: '₹1,200 refund request', priority: 'high' },
];

export function DashboardView() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.isPositive ? TrendingUp : TrendingDown;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <div className="flex items-center gap-1">
                    <TrendIcon className={`size-4 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                    <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-xs">vs last month</span>
                  </div>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="size-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Revenue & Bookings Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Revenue (₹)" />
              <Area type="monotone" dataKey="bookings" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Bookings" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Sport Distribution */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Sport Popularity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sportDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sportDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & Approvals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">Booking ID</th>
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">User</th>
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">Venue</th>
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">Sport</th>
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">Amount</th>
                  <th className="text-left text-xs font-medium text-gray-500 pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b last:border-0">
                    <td className="py-3 text-sm font-medium">{booking.id}</td>
                    <td className="py-3 text-sm">{booking.user}</td>
                    <td className="py-3 text-sm text-gray-600">{booking.venue}</td>
                    <td className="py-3 text-sm">{booking.sport}</td>
                    <td className="py-3 text-sm font-medium">{booking.amount}</td>
                    <td className="py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
            <span className="size-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {pendingApprovals.length}
            </span>
          </div>
          <div className="space-y-3">
            {pendingApprovals.map((approval, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">{approval.type}</span>
                  <span className={`size-2 rounded-full ${approval.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                </div>
                <p className="text-sm font-medium mb-1">{approval.name}</p>
                <p className="text-xs text-gray-600">{approval.detail}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            View All Approvals
          </button>
        </div>
      </div>
    </div>
  );
}
