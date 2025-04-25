import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-blue-400">Wander</span>
                <span className="text-white">Lust</span>
              </span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Discover the world with us. We provide unforgettable travel experiences 
              tailored to your desires.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Destinations', 'Special Offers', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              {['Bali, Indonesia', 'Santorini, Greece', 'Kyoto, Japan', 'Paris, France', 'New York, USA'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/destinations" 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@wanderlust.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400">© 2025 WanderLust. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;