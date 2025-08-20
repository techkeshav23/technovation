import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Legacy', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Departments', href: '#' }
  ];

  return (
    <header className="px-6 lg:px-8 py-6 relative z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto bg-slate-900 rounded-xl px-12 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          TECHNOVATION
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-8 py-3 lg:px-12 lg:py-3">
            <div className="flex items-center space-x-12 lg:space-x-14">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-medium relative group py-1 text-sm lg:text-base whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-gray-300 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;