import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download, Calendar, TrendingUp } from 'lucide-react';

const monthlyRevenue = [
  { month: 'Jan', revenue: 420000, bookings: 320, users: 150 },
  { month: 'Feb', revenue: 480000, bookings: 380, users: 180 },
  { month: 'Mar', revenue: 510000, bookings: 420, users: 220 },
  { month: 'Apr', revenue: 580000, bookings: 450, users: 250 },
  { month: 'May', revenue: 620000, bookings: 490, users: 280 },
  { month: 'Jun', revenue: 710000, bookings: 530, users: 310 },
];

const cityPerformance = [
  { city: 'Mumbai', bookings: 450, revenue: 280000 },
  { city: 'Delhi', bookings: 380, revenue: 245000 },
  { city: 'Bangalore', bookings: 420, revenue: 290000 },
  { city: 'Hyderabad', bookings: 310, revenue: 195000 },
  { city: 'Chennai', bookings: 280, revenue: 178000 },
];

const sportPopularity = [
  { sport: 'Cricket', bookings: 580, color: '#3b82f6' },
  { sport: 'Football', bookings: 420, color: '#10b981' },
  { sport: 'Badminton', bookings: 350, color: '#f59e0b' },
  { sport: 'Tennis', bookings: 210, color: '#8b5cf6' },
  { sport: 'Basketball', bookings: 140, color: '#ef4444' },
];

const topVendors = [
  { name: 'Sports Arena Mumbai', revenue: '₹2.4L', bookings: 234, rating: 4.7 },
  { name: 'Green Field Bangalore', revenue: '₹1.8L', bookings: 189, rating: 4.5 },
  { name: 'Tennis Hub Hyderabad', revenue: '₹1.2L', bookings: 156, rating: 4.9 },
  { name: 'Court Kings Delhi', revenue: '₹95K', bookings: 128, rating: 4.6 },
  { name: 'Elite Sports Complex', revenue: '₹78K', bookings: 98, rating: 4.4 },
];

export function ReportsView() {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Start Date</label>
              <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">End Date</label>
              <input type="date" className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Report Type</label>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Revenue Report</option>
                <option>Booking Report</option>
                <option>Vendor Performance</option>
                <option>User Activity</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="size-4" />
              <span className="text-sm">Export CSV</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="size-4" />
              <span className="text-sm">Export PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">Revenue & Booking Trends</h3>
            <p className="text-sm text-gray-500 mt-1">Monthly performance over the last 6 months</p>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="size-5" />
            <span className="text-sm font-medium">+18.5% growth</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue (₹)" />
            <Line yAxisId="right" type="monotone" dataKey="bookings" stroke="#10b981" strokeWidth={2} name="Bookings" />
            <Line yAxisId="right" type="monotone" dataKey="users" stroke="#f59e0b" strokeWidth={2} name="New Users" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* City Performance & Sport Popularity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* City Performance */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">City-wise Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cityPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#3b82f6" name="Bookings" />
              <Bar dataKey="revenue" fill="#10b981" name="Revenue (₹)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Sport Popularity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Sport Popularity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sportPopularity}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ sport, bookings }) => `${sport}: ${bookings}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="bookings"
              >
                {sportPopularity.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Vendors Performance */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Top Performing Vendors</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Rank</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Vendor Name</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Total Revenue</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Total Bookings</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Rating</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Avg. Revenue/Booking</th>
              </tr>
            </thead>
            <tbody>
              {topVendors.map((vendor, index) => (
                <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className={`size-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? 'bg-yellow-100 text-yellow-700' :
                      index === 1 ? 'bg-gray-100 text-gray-700' :
                      index === 2 ? 'bg-orange-100 text-orange-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {index + 1}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{vendor.name}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-600">{vendor.revenue}</td>
                  <td className="px-4 py-3 text-sm">{vendor.bookings}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{vendor.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    ₹{Math.round(parseInt(vendor.revenue.replace(/[₹,KL]/g, '')) * 1000 / vendor.bookings)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <p className="text-blue-100 text-sm mb-2">Total Revenue (6 months)</p>
          <h3 className="text-3xl font-bold">₹33.2L</h3>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
          <p className="text-green-100 text-sm mb-2">Total Bookings (6 months)</p>
          <h3 className="text-3xl font-bold">2,590</h3>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <p className="text-purple-100 text-sm mb-2">Total Users Acquired</p>
          <h3 className="text-3xl font-bold">1,390</h3>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <p className="text-orange-100 text-sm mb-2">Average Booking Value</p>
          <h3 className="text-3xl font-bold">₹1,282</h3>
        </div>
      </div>
    </div>
  );
}
