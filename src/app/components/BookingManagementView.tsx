import { Calendar, Clock, MapPin, Users, DollarSign, Filter, Download } from 'lucide-react';

const mockBookings = [
  {
    id: 'BK-3001',
    user: 'Rahul Sharma',
    venue: 'Sports Arena Mumbai',
    sport: 'Cricket',
    date: '2026-02-05',
    time: '10:00 AM - 12:00 PM',
    duration: '2 hours',
    amount: '₹1,200',
    players: 12,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-3002',
    user: 'Priya Patel',
    venue: 'Green Field Bangalore',
    sport: 'Football',
    date: '2026-02-06',
    time: '4:00 PM - 6:00 PM',
    duration: '2 hours',
    amount: '₹800',
    players: 10,
    status: 'pending',
    paymentStatus: 'pending'
  },
  {
    id: 'BK-3003',
    user: 'Amit Kumar',
    venue: 'Court Kings Delhi',
    sport: 'Badminton',
    date: '2026-02-04',
    time: '6:00 PM - 7:00 PM',
    duration: '1 hour',
    amount: '₹600',
    players: 4,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-3004',
    user: 'Sneha Reddy',
    venue: 'Tennis Hub Hyderabad',
    sport: 'Tennis',
    date: '2026-02-07',
    time: '9:00 AM - 11:00 AM',
    duration: '2 hours',
    amount: '₹1,000',
    players: 4,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-3005',
    user: 'Vikram Singh',
    venue: 'Sports Arena Mumbai',
    sport: 'Cricket',
    date: '2026-02-03',
    time: '2:00 PM - 4:00 PM',
    duration: '2 hours',
    amount: '₹1,200',
    players: 12,
    status: 'cancelled',
    paymentStatus: 'refunded'
  },
  {
    id: 'BK-3006',
    user: 'Ananya Iyer',
    venue: 'Court Kings Delhi',
    sport: 'Badminton',
    date: '2026-02-08',
    time: '7:00 PM - 8:00 PM',
    duration: '1 hour',
    amount: '₹600',
    players: 2,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
];

const upcomingGames = [
  { id: 'GM-5001', title: 'Friday Night Cricket Match', organizer: 'Rahul Sharma', venue: 'Sports Arena Mumbai', date: '2026-02-07', players: '12/14', status: 'open' },
  { id: 'GM-5002', title: 'Weekend Football Tournament', organizer: 'Priya Patel', venue: 'Green Field Bangalore', date: '2026-02-08', players: '20/22', status: 'open' },
  { id: 'GM-5003', title: 'Badminton Doubles Championship', organizer: 'Amit Kumar', venue: 'Court Kings Delhi', date: '2026-02-09', players: '8/8', status: 'full' },
];

export function BookingManagementView() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Today's Bookings</p>
              <h3 className="text-3xl font-bold">342</h3>
              <p className="text-xs text-green-600 mt-1">+15% from yesterday</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Calendar className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending Approvals</p>
              <h3 className="text-3xl font-bold">23</h3>
              <p className="text-xs text-orange-600 mt-1">Needs attention</p>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <Clock className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Games</p>
              <h3 className="text-3xl font-bold">18</h3>
              <p className="text-xs text-blue-600 mt-1">Live now</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <Users className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Revenue Today</p>
              <h3 className="text-3xl font-bold">₹1.2L</h3>
              <p className="text-xs text-green-600 mt-1">+22% from yesterday</p>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <DollarSign className="size-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Date Range</label>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Venue</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Venues</option>
              <option>Sports Arena Mumbai</option>
              <option>Green Field Bangalore</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Sport</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Status</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium text-gray-600 mb-1 block">Payment</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Payments</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Refunded</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">All Bookings</h3>
            <p className="text-sm text-gray-500 mt-1">{mockBookings.length} total bookings</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="size-4" />
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Booking ID</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">User</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Venue & Sport</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Date & Time</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Players</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Amount</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Payment</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{booking.id}</td>
                  <td className="px-4 py-3 text-sm">{booking.user}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm">
                      <p className="font-medium">{booking.venue}</p>
                      <p className="text-gray-500 text-xs">{booking.sport}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm">
                      <p className="font-medium">{booking.date}</p>
                      <p className="text-gray-500 text-xs">{booking.time}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{booking.players}</td>
                  <td className="px-4 py-3 text-sm font-medium text-green-600">{booking.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' :
                      booking.paymentStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {booking.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="px-3 py-1 text-xs border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between p-4 border-t">
          <p className="text-sm text-gray-600">Showing 1 to 6 of {mockBookings.length} results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Next</button>
          </div>
        </div>
      </div>

      {/* Upcoming Games */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Upcoming Public Games</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingGames.map((game) => (
            <div key={game.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-semibold text-sm">{game.title}</h4>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  game.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {game.status}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Users className="size-3" />
                  <span>Organized by {game.organizer}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <MapPin className="size-3" />
                  <span>{game.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Calendar className="size-3" />
                  <span>{game.date}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-xs font-medium">{game.players} players</span>
                <button className="text-xs text-blue-600 hover:underline">Manage</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
