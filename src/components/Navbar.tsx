import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8" />
            <span className="text-xl font-bold">Shifa Clinic</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-teal-200 transition-colors">Home</Link>
              <Link to="/services" className="hover:text-teal-200 transition-colors">Services</Link>
              <Link to="/about" className="hover:text-teal-200 transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-teal-200 transition-colors">Contact Us</Link>
            </div>
            {/* Sign In Button - Link can be added later */}
            <button className="flex items-center space-x-2 bg-white text-teal-600 px-4 py-2 rounded-lg hover:bg-teal-50 transition-colors">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;