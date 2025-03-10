import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Shifa Clinic</h3>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <p>Kahikuchi, Near LGBI Airport</p>
            </div>
            <p>Guwahati, Assam 781015</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@shifaclinic.com</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Shifa Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;