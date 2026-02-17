import { Bell, Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden">
            <Menu className="size-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <span className="text-xl font-semibold">Dashboard</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 w-64">
            <Search className="size-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="size-5" />
            <span className="absolute top-1 right-1 size-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="size-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
