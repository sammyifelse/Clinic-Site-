import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Visit Our Clinic
            </h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <MapPin className="h-8 w-8 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600 text-lg">
                    Kahikuchi, Near LGBI Airport
                    <br />
                    Guwahati, Assam 781015
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <Phone className="h-8 w-8 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 text-lg">+91 XXXXXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <Mail className="h-8 w-8 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 text-lg">
                    contact@shifaclinic.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-teal-50 rounded-lg">
                <Clock className="h-8 w-8 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Working Hours</h3>
                  <p className="text-gray-600 text-lg">
                    Monday - Saturday: 9:00 AM - 1:00
                    PM&nbsp;&nbsp;&nbsp;&nbsp;4:00 PM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-600">
              Visit us during working hours or call us to schedule an
              appointment. Our team is ready to help you on your journey to
              recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
