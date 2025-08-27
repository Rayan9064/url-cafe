import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'events', label: 'Events' },
    { id: 'location', label: 'Visit' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg text-amber-800' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/url.trans.png" 
            alt="URL COFFEE Logo" 
            className={`transition-all duration-300 ${
              isScrolled ? 'h-12' : 'h-16'
            }`}
          />
          <div className="ml-3">
            <h1 className={`font-bold text-xl ${isScrolled ? 'text-amber-800' : 'text-white'}`}>
              URL COFFEE
            </h1>
            <p className={`text-sm ${isScrolled ? 'text-amber-600' : 'text-white/80'}`}>
              First Hill, Seattle
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-300 hover:opacity-75 ${
                    isScrolled 
                      ? 'text-amber-700 hover:text-amber-800' 
                      : 'text-white hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-amber-800' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-amber-700 hover:text-amber-800 font-medium transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-4 border-t border-amber-100">
                <a 
                  href="tel:(614) 555-1234"
                  className="block w-full text-left py-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300"
                >
                  📞 Call Now: (614) 555-1234
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
