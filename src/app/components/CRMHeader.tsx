import { Bell, Search, Filter, Download } from 'lucide-react';

interface CRMHeaderProps {
  title: string;
  subtitle?: string;
  showFilters?: boolean;
  showExport?: boolean;
}

export function CRMHeader({ title, subtitle, showFilters = false, showExport = false }: CRMHeaderProps) {
  return (
    <div className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-80">
            <Search className="size-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search users, bookings, venues..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Filter Button */}
          {showFilters && (
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="size-4" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          )}

          {/* Export Button */}
          {showExport && (
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="size-4" />
              <span className="text-sm font-medium">Export</span>
            </button>
          )}

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
