import React from 'react';
import { Users, Award, Activity, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Your Journey to Recovery Starts Here</h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8">Expert physiotherapy care with a personal touch</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-white text-lg">
                  "The greatest pleasure in life is doing what people say you cannot do."
                  <br />
                  <span className="text-teal-200 mt-2 block">- Through Physiotherapy, We Make It Possible</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Quote Section */}
      <div className="bg-teal-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-teal-200" />
            <blockquote className="text-2xl italic mb-4">
              "Movement is medicine for creating change in a person's physical, emotional, and mental states."
            </blockquote>
            <p className="text-teal-200">- Physiotherapy Wisdom</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 mx-auto text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-2">7000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 mx-auto text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-2">12 Years</h3>
              <p className="text-gray-600">of Experience</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-300">
              <Activity className="h-12 w-12 mx-auto text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-2">Expert Care</h3>
              <p className="text-gray-600">Specialized Treatment</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Shifa Clinic?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              Located in Kahikuchi, near LGBI Airport, Guwahati, Shifa Clinic is a state-of-the-art 
              physiotherapy center dedicated to helping patients achieve optimal physical health. 
              Our expert team provides personalized treatment plans using the latest therapeutic techniques 
              and equipment.
            </p>
            <div className="bg-teal-50 p-6 rounded-lg shadow-inner">
              <p className="text-xl text-center italic text-teal-800">
                "The power of physiotherapy lies not just in treating symptoms, but in restoring lives."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sports Injury',
                description: 'Specialized treatment for athletes and sports enthusiasts to get back in the game.'
              },
              {
                title: 'Rehabilitation',
                description: 'Comprehensive rehabilitation programs tailored to your recovery journey.'
              },
              {
                title: 'Pain Management',
                description: 'Expert care for chronic pain and acute conditions with proven techniques.'
              }
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-teal-800">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;