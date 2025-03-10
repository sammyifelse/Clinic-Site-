import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2 shrink-0">
            <Activity className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl font-bold">Shifa</span>
          </Link>
          
          <div className="flex items-center justify-end flex-1 space-x-2 sm:space-x-6">
            <Link to="/" className="text-sm sm:text-base hover:text-teal-200 transition-colors">Home</Link>
            <Link to="/services" className="text-sm sm:text-base hover:text-teal-200 transition-colors">Services</Link>
            <Link to="/about" className="text-sm sm:text-base hover:text-teal-200 transition-colors">About</Link>
            <Link to="/contact" className="text-sm sm:text-base hover:text-teal-200 transition-colors">Contact</Link>
            <button className="flex items-center space-x-1 sm:space-x-2 bg-white text-teal-600 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-teal-50 transition-colors text-sm sm:text-base">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;