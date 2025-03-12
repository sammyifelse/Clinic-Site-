import React from "react";
import drImage from "../dr.jpeg"; // Adjust path if needed
import mustafaImage from "../mustafa.jpeg";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          About Shifa Clinic
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 mb-6">
              For over 12 years, Shifa Clinic has been at the forefront of
              physiotherapy care in Guwahati. With more than 7000 satisfied
              patients, we have established ourselves as a trusted name in
              physical rehabilitation and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dr. Mustafa Ali Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 rounded-lg mb-4">
                <img
                  src={mustafaImage}
                  alt="Dr. Mustafa Ali"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Mustafa Ali</h3>
              <p className="text-gray-600">
                Leading physiotherapist with extensive experience in sports
                medicine and rehabilitation.
              </p>
            </div>

            {/* Dr. Alamin Are Hussain Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 rounded-lg mb-4">
                <img
                  src={drImage}
                  alt="Dr. Alamin Are Hussain"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Dr. Alamin Are Hussain
              </h3>
              <p className="text-gray-600">
                Specialized in advanced physiotherapy techniques and patient
                care management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
