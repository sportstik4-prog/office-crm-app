import { Wallet, TrendingUp, DollarSign, CreditCard, Download, Search, AlertCircle, CheckCircle } from 'lucide-react';

const recentTransactions = [
  { id: 'TXN-7001', user: 'Rahul Sharma', type: 'booking', amount: '₹1,200', status: 'success', date: '2026-02-03 10:45 AM', gateway: 'Stripe' },
  { id: 'TXN-7002', user: 'Priya Patel', type: 'wallet_credit', amount: '₹500', status: 'success', date: '2026-02-03 11:20 AM', gateway: 'PayPal' },
  { id: 'TXN-7003', user: 'Amit Kumar', type: 'booking', amount: '₹600', status: 'failed', date: '2026-02-03 12:15 PM', gateway: 'Stripe' },
  { id: 'TXN-7004', user: 'Sneha Reddy', type: 'refund', amount: '₹800', status: 'processing', date: '2026-02-03 01:30 PM', gateway: 'Stripe' },
  { id: 'TXN-7005', user: 'Vikram Singh', type: 'booking', amount: '₹1,200', status: 'success', date: '2026-02-03 02:00 PM', gateway: 'PayPal' },
];

const pendingSettlements = [
  { vendor: 'Sports Arena Mumbai', amount: '₹45,000', bookings: 38, commission: '₹6,750', netAmount: '₹38,250', dueDate: '2026-02-05' },
  { vendor: 'Green Field Bangalore', amount: '₹32,000', bookings: 27, commission: '₹5,760', netAmount: '₹26,240', dueDate: '2026-02-06' },
  { vendor: 'Court Kings Delhi', amount: '₹18,500', bookings: 15, commission: '₹2,775', netAmount: '₹15,725', dueDate: '2026-02-05' },
];

const walletActivity = [
  { user: 'Rahul Sharma', userId: 'USR-1001', balance: '₹450', lastActivity: 'Credit ₹200', date: '2026-02-02' },
  { user: 'Priya Patel', userId: 'USR-1002', balance: '₹320', lastActivity: 'Debit ₹100', date: '2026-02-03' },
  { user: 'Ananya Iyer', userId: 'USR-1006', balance: '₹890', lastActivity: 'Credit ₹500', date: '2026-02-01' },
];

export function PaymentsView() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold">₹5.2L</h3>
              <p className="text-xs text-green-600 mt-1">+18.5% this month</p>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <TrendingUp className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending Settlements</p>
              <h3 className="text-3xl font-bold">₹95K</h3>
              <p className="text-xs text-orange-600 mt-1">3 vendors waiting</p>
            </div>
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
              <DollarSign className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Failed Payments</p>
              <h3 className="text-3xl font-bold">12</h3>
              <p className="text-xs text-red-600 mt-1">Needs attention</p>
            </div>
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <AlertCircle className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Wallet Balance</p>
              <h3 className="text-3xl font-bold">₹42K</h3>
              <p className="text-xs text-blue-600 mt-1">Across all users</p>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Wallet className="size-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <p className="text-sm text-gray-500 mt-1">Latest payment activity</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Search className="size-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="size-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Transaction ID</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">User</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Type</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Amount</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Gateway</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Date & Time</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((txn) => (
                <tr key={txn.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{txn.id}</td>
                  <td className="px-4 py-3 text-sm">{txn.user}</td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">
                      {txn.type.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-semibold text-green-600">{txn.amount}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.gateway}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{txn.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      txn.status === 'success' ? 'bg-green-100 text-green-700' :
                      txn.status === 'failed' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {txn.status === 'success' && <CheckCircle className="size-3" />}
                      {txn.status === 'failed' && <AlertCircle className="size-3" />}
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-xs text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Settlements & Wallet */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Settlements */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending Vendor Settlements</h3>
            <span className="size-6 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
              {pendingSettlements.length}
            </span>
          </div>
          <div className="space-y-3">
            {pendingSettlements.map((settlement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{settlement.vendor}</h4>
                    <p className="text-xs text-gray-600">{settlement.bookings} bookings</p>
                  </div>
                  <span className="text-lg font-bold text-green-600">{settlement.netAmount}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                  <div>
                    <p className="text-gray-500">Gross Amount</p>
                    <p className="font-medium">{settlement.amount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Commission</p>
                    <p className="font-medium text-orange-600">-{settlement.commission}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Due Date</p>
                    <p className="font-medium">{settlement.dueDate}</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Process Settlement
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">User Wallet Activity</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="space-y-3 mb-4">
            {walletActivity.map((wallet, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div>
                    <p className="text-sm font-medium">{wallet.user}</p>
                    <p className="text-xs text-gray-500">{wallet.userId}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{wallet.balance}</p>
                  <p className="text-xs text-gray-500">{wallet.lastActivity}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            Adjust Wallet Balance
          </button>
        </div>
      </div>
    </div>
  );
}
