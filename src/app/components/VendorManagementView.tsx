import { Building2, MapPin, Star, DollarSign, CheckCircle, Clock, XCircle, Eye, Edit, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { AddNewVenue } from './AddNewVenue';

const mockVendors = [
  { 
    id: 'VEN-2001', 
    name: 'Sports Arena Mumbai', 
    owner: 'Rajesh Mehta', 
    city: 'Mumbai', 
    sports: ['Cricket', 'Football'], 
    courts: 5, 
    status: 'approved', 
    revenue: '₹2.4L', 
    rating: 4.7,
    bookings: 234,
    commission: 15
  },
  { 
    id: 'VEN-2002', 
    name: 'Green Field Bangalore', 
    owner: 'Suresh Kumar', 
    city: 'Bangalore', 
    sports: ['Football', 'Cricket'], 
    courts: 3, 
    status: 'approved', 
    revenue: '₹1.8L', 
    rating: 4.5,
    bookings: 189,
    commission: 18
  },
  { 
    id: 'VEN-2003', 
    name: 'Court Kings Delhi', 
    owner: 'Amit Sharma', 
    city: 'Delhi', 
    sports: ['Badminton', 'Tennis'], 
    courts: 8, 
    status: 'pending', 
    revenue: '₹0', 
    rating: 0,
    bookings: 0,
    commission: 15
  },
  { 
    id: 'VEN-2004', 
    name: 'Tennis Hub Hyderabad', 
    owner: 'Lakshmi Reddy', 
    city: 'Hyderabad', 
    sports: ['Tennis'], 
    courts: 4, 
    status: 'approved', 
    revenue: '₹95K', 
    rating: 4.9,
    bookings: 156,
    commission: 12
  },
  { 
    id: 'VEN-2005', 
    name: 'Elite Sports Complex', 
    owner: 'Vikram Singh', 
    city: 'Mumbai', 
    sports: ['Cricket', 'Football', 'Badminton'], 
    courts: 12, 
    status: 'rejected', 
    revenue: '₹0', 
    rating: 0,
    bookings: 0,
    commission: 15
  },
];

const pendingVendors = mockVendors.filter(v => v.status === 'pending');

export function VendorManagementView() {
  const [selectedVendor, setSelectedVendor] = useState<typeof mockVendors[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'approved'>('all');
  const [showAddVenue, setShowAddVenue] = useState(false);

  const filteredVendors = activeTab === 'all' ? mockVendors : 
                          activeTab === 'pending' ? mockVendors.filter(v => v.status === 'pending') :
                          mockVendors.filter(v => v.status === 'approved');

  const handleAddVenue = (venueData: any) => {
    console.log('New venue data:', venueData);
    // Here you would typically send the data to your backend
    setShowAddVenue(false);
    // Show success message
    alert('Venue submitted successfully! Pending admin approval.');
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Venues</p>
              <h3 className="text-3xl font-bold">{mockVendors.length}</h3>
            </div>
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
              <Building2 className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Active Venues</p>
              <h3 className="text-3xl font-bold">{mockVendors.filter(v => v.status === 'approved').length}</h3>
            </div>
            <div className="bg-green-100 text-green-600 p-3 rounded-lg">
              <CheckCircle className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending Approval</p>
              <h3 className="text-3xl font-bold">{pendingVendors.length}</h3>
            </div>
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg">
              <Clock className="size-6" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold">₹5.2L</h3>
            </div>
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
              <DollarSign className="size-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Vendors
            </button>
            <button 
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                activeTab === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending Approval
              {pendingVendors.length > 0 && (
                <span className="absolute -top-1 -right-1 size-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {pendingVendors.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('approved')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'approved' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Approved
            </button>
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => setShowAddVenue(true)}
          >
            + Add New Venue
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search venues..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Cities</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
            </select>
          </div>
          <div>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Sports</option>
              <option>Cricket</option>
              <option>Football</option>
              <option>Badminton</option>
              <option>Tennis</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => (
          <div key={vendor.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Venue Image */}
            <div className="h-40 bg-gradient-to-br from-blue-400 to-purple-500"></div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-lg mb-1">{vendor.name}</h4>
                  <p className="text-sm text-gray-600">{vendor.id}</p>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  vendor.status === 'approved' ? 'bg-green-100 text-green-700' :
                  vendor.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {vendor.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="size-4" />
                  <span>{vendor.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building2 className="size-4" />
                  <span>{vendor.courts} Courts/Fields</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="size-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-medium">{vendor.rating > 0 ? vendor.rating : 'No rating'}</span>
                  <span className="text-gray-500">({vendor.bookings} bookings)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {vendor.sports.map((sport, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                    {sport}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="text-sm font-semibold text-green-600">{vendor.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Commission</p>
                  <p className="text-sm font-semibold">{vendor.commission}%</p>
                </div>
                <div className="flex gap-1">
                  <button 
                    onClick={() => setSelectedVendor(vendor)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="View Details"
                  >
                    <Eye className="size-4 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                    <Edit className="size-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vendor Detail Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b flex items-center justify-between">
              <h3 className="text-xl font-semibold">Venue Details</h3>
              <button onClick={() => setSelectedVendor(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="size-20 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold">{selectedVendor.name}</h4>
                  <p className="text-sm text-gray-600">{selectedVendor.id}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedVendor.status === 'approved' ? 'bg-green-100 text-green-700' :
                      selectedVendor.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {selectedVendor.status}
                    </span>
                    {selectedVendor.rating > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="size-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{selectedVendor.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Owner Name</p>
                  <p className="text-sm font-medium">{selectedVendor.owner}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>
                  <p className="text-sm font-medium">{selectedVendor.city}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Courts</p>
                  <p className="text-sm font-medium">{selectedVendor.courts}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Sports Offered</p>
                  <p className="text-sm font-medium">{selectedVendor.sports.join(', ')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
                  <p className="text-sm font-medium text-green-600">{selectedVendor.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Total Bookings</p>
                  <p className="text-sm font-medium">{selectedVendor.bookings}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Commission Rate</p>
                  <p className="text-sm font-medium">{selectedVendor.commission}%</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Rating</p>
                  <p className="text-sm font-medium">{selectedVendor.rating > 0 ? selectedVendor.rating + ' / 5.0' : 'Not rated yet'}</p>
                </div>
              </div>

              {/* Actions */}
              {selectedVendor.status === 'pending' && (
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    ✓ Approve Vendor
                  </button>
                  <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    ✕ Reject
                  </button>
                </div>
              )}
              {selectedVendor.status === 'approved' && (
                <div className="flex gap-3 pt-4 border-t">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Details
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    View Revenue Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add New Venue Modal */}
      {showAddVenue && (
        <AddNewVenue 
          onClose={() => setShowAddVenue(false)}
          onSubmit={handleAddVenue}
        />
      )}
    </div>
  );
}