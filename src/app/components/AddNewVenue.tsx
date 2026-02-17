import { useState } from 'react';
import { ArrowLeft, Upload, Plus, Trash2, MapPin, Clock, DollarSign, Building2, FileText, CreditCard, Check } from 'lucide-react';

interface AddNewVenueProps {
  onClose: () => void;
  onSubmit: (venueData: any) => void;
}

export function AddNewVenue({ onClose, onSubmit }: AddNewVenueProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    venueName: '',
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    
    // Address
    address: '',
    city: '',
    state: '',
    pincode: '',
    latitude: '',
    longitude: '',
    
    // Sports & Amenities
    sports: [] as string[],
    amenities: [] as string[],
    
    // Courts
    courts: [{ name: '', sport: '', type: '' }],
    
    // Pricing
    pricing: [{ sport: '', peakRate: '', offPeakRate: '', weekendRate: '' }],
    
    // Operating Hours
    operatingHours: {
      monday: { open: '06:00', close: '22:00', closed: false },
      tuesday: { open: '06:00', close: '22:00', closed: false },
      wednesday: { open: '06:00', close: '22:00', closed: false },
      thursday: { open: '06:00', close: '22:00', closed: false },
      friday: { open: '06:00', close: '22:00', closed: false },
      saturday: { open: '06:00', close: '23:00', closed: false },
      sunday: { open: '06:00', close: '23:00', closed: false },
    },
    
    // Bank Details
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    
    // Settings
    advanceBookingDays: '30',
    cancellationPolicy: '24',
    commission: '15',
  });

  const steps = [
    { number: 1, title: 'Basic Info', icon: Building2 },
    { number: 2, title: 'Location', icon: MapPin },
    { number: 3, title: 'Sports & Courts', icon: FileText },
    { number: 4, title: 'Pricing', icon: DollarSign },
    { number: 5, title: 'Schedule', icon: Clock },
    { number: 6, title: 'Bank & Docs', icon: CreditCard },
  ];

  const availableSports = ['Cricket', 'Football', 'Badminton', 'Tennis', 'Basketball', 'Volleyball'];
  const availableAmenities = ['Parking', 'Changing Room', 'Washroom', 'Cafeteria', 'First Aid', 'WiFi', 'Drinking Water', 'Equipment Rental'];

  const toggleSport = (sport: string) => {
    setFormData(prev => ({
      ...prev,
      sports: prev.sports.includes(sport)
        ? prev.sports.filter(s => s !== sport)
        : [...prev.sports, sport]
    }));
  };

  const toggleAmenity = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const addCourt = () => {
    setFormData(prev => ({
      ...prev,
      courts: [...prev.courts, { name: '', sport: '', type: '' }]
    }));
  };

  const removeCourt = (index: number) => {
    setFormData(prev => ({
      ...prev,
      courts: prev.courts.filter((_, i) => i !== index)
    }));
  };

  const updateCourt = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      courts: prev.courts.map((court, i) => 
        i === index ? { ...court, [field]: value } : court
      )
    }));
  };

  const addPricing = () => {
    setFormData(prev => ({
      ...prev,
      pricing: [...prev.pricing, { sport: '', peakRate: '', offPeakRate: '', weekendRate: '' }]
    }));
  };

  const removePricing = (index: number) => {
    setFormData(prev => ({
      ...prev,
      pricing: prev.pricing.filter((_, i) => i !== index)
    }));
  };

  const updatePricing = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: prev.pricing.map((price, i) => 
        i === index ? { ...price, [field]: value } : price
      )
    }));
  };

  const updateOperatingHours = (day: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours[day as keyof typeof prev.operatingHours],
          [field]: value
        }
      }
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Venue Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venue Name *</label>
                  <input
                    type="text"
                    value={formData.venueName}
                    onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                    placeholder="e.g., Sports Arena Mumbai"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner Name *</label>
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner Email *</label>
                  <input
                    type="email"
                    value={formData.ownerEmail}
                    onChange={(e) => setFormData({ ...formData, ownerEmail: e.target.value })}
                    placeholder="owner@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner Phone *</label>
                  <input
                    type="tel"
                    value={formData.ownerPhone}
                    onChange={(e) => setFormData({ ...formData, ownerPhone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Venue Description</h3>
              <textarea
                rows={4}
                placeholder="Describe your venue, facilities, and what makes it special..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Venue Location</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Address *</label>
                  <textarea
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street address, building name, landmark"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select City</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Pune">Pune</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="400001"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                    <input
                      type="text"
                      value={formData.latitude}
                      onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                      placeholder="19.0760"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                    <input
                      type="text"
                      value={formData.longitude}
                      onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                      placeholder="72.8777"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Use Google Maps to find accurate coordinates for your venue location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sports Offered *</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableSports.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => toggleSport(sport)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.sports.includes(sport)
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{sport}</span>
                      {formData.sports.includes(sport) && <Check className="size-5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableAmenities.map((amenity) => (
                  <button
                    key={amenity}
                    onClick={() => toggleAmenity(amenity)}
                    className={`p-3 rounded-lg border-2 text-sm transition-all ${
                      formData.amenities.includes(amenity)
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{amenity}</span>
                      {formData.amenities.includes(amenity) && <Check className="size-4" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Courts / Fields Configuration *</h3>
                <button
                  onClick={addCourt}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="size-4" />
                  Add Court
                </button>
              </div>
              <div className="space-y-3">
                {formData.courts.map((court, index) => (
                  <div key={index} className="p-4 border border-gray-300 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Court Name</label>
                        <input
                          type="text"
                          value={court.name}
                          onChange={(e) => updateCourt(index, 'name', e.target.value)}
                          placeholder="e.g., Court 1"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sport</label>
                        <select
                          value={court.sport}
                          onChange={(e) => updateCourt(index, 'sport', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Sport</option>
                          {formData.sports.map(sport => (
                            <option key={sport} value={sport}>{sport}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                          <select
                            value={court.type}
                            onChange={(e) => updateCourt(index, 'type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Type</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
                            <option value="Covered">Covered</option>
                          </select>
                        </div>
                        {formData.courts.length > 1 && (
                          <button
                            onClick={() => removeCourt(index)}
                            className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="size-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Pricing Configuration *</h3>
                  <p className="text-sm text-gray-600 mt-1">Set hourly rates for different time slots</p>
                </div>
                <button
                  onClick={addPricing}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="size-4" />
                  Add Sport Pricing
                </button>
              </div>
              <div className="space-y-3">
                {formData.pricing.map((price, index) => (
                  <div key={index} className="p-4 border border-gray-300 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sport</label>
                        <select
                          value={price.sport}
                          onChange={(e) => updatePricing(index, 'sport', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Sport</option>
                          {formData.sports.map(sport => (
                            <option key={sport} value={sport}>{sport}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Peak Rate (₹/hr)</label>
                        <input
                          type="number"
                          value={price.peakRate}
                          onChange={(e) => updatePricing(index, 'peakRate', e.target.value)}
                          placeholder="1200"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Off-Peak Rate (₹/hr)</label>
                        <input
                          type="number"
                          value={price.offPeakRate}
                          onChange={(e) => updatePricing(index, 'offPeakRate', e.target.value)}
                          placeholder="800"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Weekend Rate (₹/hr)</label>
                          <input
                            type="number"
                            value={price.weekendRate}
                            onChange={(e) => updatePricing(index, 'weekendRate', e.target.value)}
                            placeholder="1500"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        {formData.pricing.length > 1 && (
                          <button
                            onClick={() => removePricing(index)}
                            className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="size-5" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      Peak: 5 PM - 10 PM | Off-Peak: 6 AM - 5 PM | Weekend: All day Saturday & Sunday
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Booking Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Advance Booking (days)</label>
                  <input
                    type="number"
                    value={formData.advanceBookingDays}
                    onChange={(e) => setFormData({ ...formData, advanceBookingDays: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cancellation (hours before)</label>
                  <input
                    type="number"
                    value={formData.cancellationPolicy}
                    onChange={(e) => setFormData({ ...formData, cancellationPolicy: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Commission (%)</label>
                  <input
                    type="number"
                    value={formData.commission}
                    onChange={(e) => setFormData({ ...formData, commission: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Operating Hours *</h3>
              <p className="text-sm text-gray-600 mb-4">Set your venue's operating hours for each day of the week</p>
              <div className="space-y-3">
                {Object.entries(formData.operatingHours).map(([day, hours]) => (
                  <div key={day} className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg">
                    <div className="w-32">
                      <span className="font-medium capitalize">{day}</span>
                    </div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={hours.closed}
                        onChange={(e) => updateOperatingHours(day, 'closed', e.target.checked)}
                        className="size-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm">Closed</span>
                    </label>
                    {!hours.closed && (
                      <>
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-gray-600">Open:</label>
                          <input
                            type="time"
                            value={hours.open}
                            onChange={(e) => updateOperatingHours(day, 'open', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="text-sm text-gray-600">Close:</label>
                          <input
                            type="time"
                            value={hours.close}
                            onChange={(e) => updateOperatingHours(day, 'close', e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Bank Account Details *</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    placeholder="e.g., HDFC Bank"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
                    placeholder="As per bank records"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    placeholder="Enter account number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                    placeholder="e.g., HDFC0001234"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Document Uploads *</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Owner ID Proof</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="size-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">Aadhar, PAN, Passport (PDF, JPG, PNG - Max 5MB)</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business License / Registration</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="size-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">Trade License, GST Certificate (PDF, JPG, PNG - Max 5MB)</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Venue Photos (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="size-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">Click to upload multiple images</p>
                    <p className="text-xs text-gray-500">Venue photos, courts, facilities (JPG, PNG - Max 5MB each)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Review & Submit</h4>
              <p className="text-sm text-green-800">
                Please review all the information before submitting. Once submitted, the venue will be sent for admin approval.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="size-5" />
              </button>
              <div>
                <h2 className="text-2xl font-bold">Add New Venue</h2>
                <p className="text-sm text-gray-600 mt-1">Fill in the details to onboard a new venue</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between mt-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;
                
                return (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div className={`size-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        isCompleted ? 'bg-green-600 text-white' :
                        isActive ? 'bg-blue-600 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {isCompleted ? <Check className="size-5" /> : <Icon className="size-5" />}
                      </div>
                      <span className={`text-xs mt-2 text-center font-medium ${
                        isActive ? 'text-blue-600' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 rounded ${
                        isCompleted ? 'bg-green-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 min-h-[500px]">
            {renderStepContent()}
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-gray-50 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            <div className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </div>

            {currentStep < steps.length ? (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit for Approval
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
