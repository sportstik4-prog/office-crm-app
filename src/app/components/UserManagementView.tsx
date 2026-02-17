import { Search, Filter, Download, Eye, Ban, RefreshCw, Trash2, MoreVertical, MapPin, Star, Wallet } from 'lucide-react';
import { useState } from 'react';

const mockUsers = [
  { id: 'USR-1001', name: 'Rahul Sharma', email: 'rahul@example.com', phone: '+91 98765 43210', city: 'Mumbai', sport: 'Cricket', status: 'active', wallet: '₹450', rating: 4.5, bookings: 23 },
  { id: 'USR-1002', name: 'Priya Patel', email: 'priya@example.com', phone: '+91 98765 43211', city: 'Bangalore', sport: 'Football', status: 'active', wallet: '₹320', rating: 4.8, bookings: 18 },
  { id: 'USR-1003', name: 'Amit Kumar', email: 'amit@example.com', phone: '+91 98765 43212', city: 'Delhi', sport: 'Badminton', status: 'blocked', wallet: '₹0', rating: 3.2, bookings: 7 },
  { id: 'USR-1004', name: 'Sneha Reddy', email: 'sneha@example.com', phone: '+91 98765 43213', city: 'Hyderabad', sport: 'Tennis', status: 'active', wallet: '₹580', rating: 4.9, bookings: 31 },
  { id: 'USR-1005', name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 98765 43214', city: 'Mumbai', sport: 'Cricket', status: 'active', wallet: '₹210', rating: 4.3, bookings: 15 },
  { id: 'USR-1006', name: 'Ananya Iyer', email: 'ananya@example.com', phone: '+91 98765 43215', city: 'Chennai', sport: 'Badminton', status: 'active', wallet: '₹890', rating: 4.7, bookings: 28 },
];

export function UserManagementView() {
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);

  return (
    <div className="space-y-6">
      {/* Filters Bar */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
              <input
                type="text"
                placeholder="Name, email, phone..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">City</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Cities</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Sport</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
              <option>Tennis</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Status</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">All Users</h3>
            <p className="text-sm text-gray-500 mt-1">{mockUsers.length} total users</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="size-4" />
            <span className="text-sm font-medium">Export CSV</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">User ID</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Name</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Contact</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">City</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Sport</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Wallet</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Rating</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Bookings</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{user.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm">
                      <p className="text-gray-900">{user.email}</p>
                      <p className="text-gray-500">{user.phone}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="size-3" />
                      {user.city}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.sport}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Wallet className="size-3 text-green-600" />
                      {user.wallet}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="size-3 text-yellow-500 fill-yellow-500" />
                      {user.rating}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium">{user.bookings}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedUser(user)}
                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="size-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="Block User">
                        <Ban className="size-4 text-red-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded transition-colors" title="More">
                        <MoreVertical className="size-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-gray-600">Showing 1 to 6 of {mockUsers.length} results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Next</button>
          </div>
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-xl font-semibold">User Details</h3>
              <button onClick={() => setSelectedUser(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Profile Section */}
              <div className="flex items-start gap-4">
                <div className="size-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{selectedUser.name}</h4>
                  <p className="text-sm text-gray-600">{selectedUser.id}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedUser.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {selectedUser.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="size-4 text-yellow-500 fill-yellow-500" />
                      {selectedUser.rating} Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium">{selectedUser.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm font-medium">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">City</p>
                  <p className="text-sm font-medium">{selectedUser.city}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Preferred Sport</p>
                  <p className="text-sm font-medium">{selectedUser.sport}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Wallet Balance</p>
                  <p className="text-sm font-medium text-green-600">{selectedUser.wallet}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Bookings</p>
                  <p className="text-sm font-medium">{selectedUser.bookings}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Adjust Wallet
                </button>
                <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  Block User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
