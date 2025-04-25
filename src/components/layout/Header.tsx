import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
  }`;

  const linkClasses = `relative font-medium text-base transition-colors duration-300 
    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
    after:bg-blue-600 after:transition-all after:duration-300 
    hover:after:w-full`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold tracking-tight">
              <span className={isScrolled ? 'text-blue-600' : 'text-white'}>Wander</span>
              <span className={isScrolled ? 'text-gray-800' : 'text-blue-200'}>Lust</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClasses} ${
                  location.pathname === link.path 
                    ? 'text-blue-600 after:w-full' 
                    : isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary">Book Now</button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-gray-800 py-2 px-4 rounded-md transition-colors duration-300 ${
                      location.pathname === link.path ? 'bg-blue-50 text-blue-600' : ''
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
                <button 
                  className="bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700"
                  onClick={closeMenu}
                >
                  Book Now
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;