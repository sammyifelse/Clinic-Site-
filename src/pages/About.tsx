import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Shifa Clinic</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 mb-6">
              For over 12 years, Shifa Clinic has been at the forefront of physiotherapy care in Guwahati.
              With more than 4000 satisfied patients, we have established ourselves as a trusted name in
              physical rehabilitation and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                {/* Placeholder for Dr. Mustafa's photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Photo of Dr. Mustafa
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Mustafa</h3>
              <p className="text-gray-600">
                Leading physiotherapist with extensive experience in sports medicine and rehabilitation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                {/* Placeholder for Dr. Shifa's photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Photo of Dr. Shifa
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Shifa</h3>
              <p className="text-gray-600">
                Specialized in advanced physiotherapy techniques and patient care management.
              </p>
            </div>
          </div>

          {/* Clinic Location Image */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-12">
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
              {/* Placeholder for clinic building photo */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Photo of Shifa Clinic Building
              </div>
            </div>
            <p className="text-gray-600 text-center">
              Our modern facility in Kahikuchi, equipped with state-of-the-art therapeutic equipment
            </p>
          </div>

          <div className="bg-teal-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Over 4000 successfully treated patients</li>
              <li>12 years of excellence in physiotherapy</li>
              <li>State-of-the-art treatment facilities</li>
              <li>Specialized in sports injuries and rehabilitation</li>
              <li>Comprehensive patient care approach</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;