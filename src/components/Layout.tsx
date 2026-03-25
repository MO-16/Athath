import { Link, useLocation } from 'wouter';
import { Home, Package, Info, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: Home, color: 'blue' },
    { path: '/products', label: 'المنتجات', icon: Package, color: 'green' },
    { path: '/about', label: 'من نحن', icon: Info, color: 'purple' },
    { path: '/contact', label: 'اتصل بنا', icon: Phone, color: 'orange' },
  ];

  const isActive = (path: string) => location === path;

  const getColorClasses = (color: string, active: boolean) => {
    const colors: Record<string, { active: string; inactive: string }> = {
      blue: {
        active: 'bg-blue-600 text-white shadow-lg',
        inactive: 'text-gray-700 hover:bg-blue-100 hover:text-blue-600',
      },
      green: {
        active: 'bg-green-600 text-white shadow-lg',
        inactive: 'text-gray-700 hover:bg-green-100 hover:text-green-600',
      },
      purple: {
        active: 'bg-purple-600 text-white shadow-lg',
        inactive: 'text-gray-700 hover:bg-purple-100 hover:text-purple-600',
      },
      orange: {
        active: 'bg-orange-600 text-white shadow-lg',
        inactive: 'text-gray-700 hover:bg-orange-100 hover:text-orange-600',
      },
    };
    return active ? colors[color].active : colors[color].inactive;
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Navigation */}
      <nav className="bg-white shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              🏠 دار الأثاث
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 space-x-reverse">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${getColorClasses(
                      item.color,
                      active
                    )}`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="القائمة"
            >
              {isMenuOpen ? (
                <X size={28} className="text-gray-700" />
              ) : (
                <Menu size={28} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`flex items-center gap-3 px-5 py-4 rounded-xl font-bold transition-all duration-300 ${getColorClasses(
                        item.color,
                        active
                      )}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon size={24} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2026 دار الأثاث. جميع الحقوق محفوظة.</p>
          <p className="text-gray-400 mt-2">صنع بحب ❤️ للأطفال والعائلات</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
