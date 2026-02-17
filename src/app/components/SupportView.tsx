import { MessageSquare, Clock, CheckCircle, AlertTriangle, User, MapPin } from 'lucide-react';
import { useState } from 'react';

const supportTickets = [
  {
    id: 'TKT-8001',
    user: 'Rahul Sharma',
    subject: 'Payment not received',
    category: 'payment',
    priority: 'high',
    status: 'open',
    created: '2026-02-03 10:30 AM',
    lastUpdate: '2026-02-03 11:45 AM',
    assignee: 'Support Team A',
    messages: 3
  },
  {
    id: 'TKT-8002',
    user: 'Priya Patel',
    subject: 'Venue not available as shown',
    category: 'venue',
    priority: 'medium',
    status: 'in-progress',
    created: '2026-02-03 09:15 AM',
    lastUpdate: '2026-02-03 12:00 PM',
    assignee: 'Support Team B',
    messages: 5
  },
  {
    id: 'TKT-8003',
    user: 'Amit Kumar',
    subject: 'Booking cancellation issue',
    category: 'booking',
    priority: 'high',
    status: 'open',
    created: '2026-02-03 11:00 AM',
    lastUpdate: '2026-02-03 11:30 AM',
    assignee: 'Unassigned',
    messages: 1
  },
  {
    id: 'TKT-8004',
    user: 'Sneha Reddy',
    subject: 'Refund not processed',
    category: 'payment',
    priority: 'high',
    status: 'open',
    created: '2026-02-03 08:45 AM',
    lastUpdate: '2026-02-03 10:15 AM',
    assignee: 'Support Team A',
    messages: 4
  },
  {
    id: 'TKT-8005',
    user: 'Vikram Singh',
    subject: 'Account login problem',
    category: 'account',
    priority: 'low',
    status: 'resolved',
    created: '2026-02-02 03:30 PM',
    lastUpdate: '2026-02-02 04:00 PM',
    assignee: 'Support Team C',
    messages: 2
  },
];

const disputes = [
  { id: 'DSP-9001', type: 'Booking Dispute', parties: 'Rahul vs Sports Arena', amount: '₹1,200', status: 'pending', created: '2026-02-03' },
  { id: 'DSP-9002', type: 'Game Dispute', parties: 'Team A vs Team B', amount: '₹0', status: 'under-review', created: '2026-02-02' },
  { id: 'DSP-9003', type: 'Refund Dispute', parties: 'Priya vs Green Field', amount: '₹800', status: 'resolved', created: '2026-02-01' },
];

export function SupportView() {
  const [selectedTicket, setSelectedTicket] = useState<typeof supportTickets[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'open' | 'in-progress' | 'resolved'>('all');

  const filteredTickets = activeTab === 'all' ? supportTickets : supportTickets.filter(t => t.status === activeTab);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Open Tickets</p>
              <h3 className="text-3xl font-bold">{supportTickets.filter(t => t.status === 'open').length}</h3>
            </div>
            <div className="bg-red-100 text-red-600 p-3 rounded-lg">
              <AlertTriangle className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">In Progress</p>
              <h3 className="text-3xl font-bold">{supportTickets.filter(t => t.status === 'in-progress').length}</h3>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <Clock className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Resolved Today</p>
              <h3 className="text-3xl font-bold">{supportTickets.filter(t => t.status === 'resolved').length}</h3>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <CheckCircle className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Disputes</p>
              <h3 className="text-3xl font-bold">{disputes.filter(d => d.status !== 'resolved').length}</h3>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <MessageSquare className="size-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex gap-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Tickets ({supportTickets.length})
          </button>
          <button 
            onClick={() => setActiveTab('open')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'open' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Open ({supportTickets.filter(t => t.status === 'open').length})
          </button>
          <button 
            onClick={() => setActiveTab('in-progress')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'in-progress' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            In Progress ({supportTickets.filter(t => t.status === 'in-progress').length})
          </button>
          <button 
            onClick={() => setActiveTab('resolved')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'resolved' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Resolved ({supportTickets.filter(t => t.status === 'resolved').length})
          </button>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="text-lg font-semibold">Support Tickets</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Ticket ID</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">User</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Subject</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Category</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Priority</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Assignee</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Last Update</th>
                <th className="text-left text-xs font-medium text-gray-500 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium">{ticket.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"></div>
                      <span className="text-sm">{ticket.user}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium">{ticket.subject}</p>
                      <p className="text-xs text-gray-500">{ticket.messages} messages</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded capitalize">
                      {ticket.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.priority === 'high' ? 'bg-red-100 text-red-700' :
                      ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                      ticket.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{ticket.assignee}</td>
                  <td className="px-4 py-3 text-xs text-gray-500">{ticket.lastUpdate}</td>
                  <td className="px-4 py-3">
                    <button 
                      onClick={() => setSelectedTicket(ticket)}
                      className="px-3 py-1 text-xs border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disputes Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Active Disputes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {disputes.map((dispute) => (
            <div key={dispute.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-sm mb-1">{dispute.type}</h4>
                  <p className="text-xs text-gray-600">{dispute.id}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  dispute.status === 'resolved' ? 'bg-green-100 text-green-700' :
                  dispute.status === 'under-review' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {dispute.status}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <div className="text-sm">
                  <p className="text-gray-500 text-xs mb-1">Parties Involved</p>
                  <p className="font-medium">{dispute.parties}</p>
                </div>
                {dispute.amount !== '₹0' && (
                  <div className="text-sm">
                    <p className="text-gray-500 text-xs mb-1">Amount</p>
                    <p className="font-medium text-green-600">{dispute.amount}</p>
                  </div>
                )}
                <div className="text-sm">
                  <p className="text-gray-500 text-xs mb-1">Created</p>
                  <p className="text-xs">{dispute.created}</p>
                </div>
              </div>
              <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
                Review Dispute
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">{selectedTicket.subject}</h3>
                <p className="text-sm text-gray-500 mt-1">{selectedTicket.id}</p>
              </div>
              <button onClick={() => setSelectedTicket(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Ticket Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">User</p>
                  <p className="text-sm font-medium">{selectedTicket.user}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Category</p>
                  <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded capitalize">
                    {selectedTicket.category}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Priority</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedTicket.priority === 'high' ? 'bg-red-100 text-red-700' :
                    selectedTicket.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {selectedTicket.priority}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    selectedTicket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                    selectedTicket.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {selectedTicket.status}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Created</p>
                  <p className="text-sm">{selectedTicket.created}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Assigned To</p>
                  <p className="text-sm font-medium">{selectedTicket.assignee}</p>
                </div>
              </div>

              {/* Mock Messages */}
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3">Conversation</h4>
                <div className="space-y-3 bg-gray-50 p-4 rounded-lg max-h-60 overflow-y-auto">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">User - {selectedTicket.created}</p>
                    <p className="text-sm">I made a payment but it's not reflecting in my account...</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Support - {selectedTicket.lastUpdate}</p>
                    <p className="text-sm">We're looking into this issue. Can you provide the transaction ID?</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Mark as Resolved
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Assign to Me
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
