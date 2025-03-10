import React from 'react';
import { Zap, Activity, Brain, Plus } from 'lucide-react';

const Services = () => {
  const therapyServices = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Mobilization",
      description: "Manual therapy technique to restore joint mobility and reduce pain through gentle movement of joints and soft tissues."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Infrared Therapy (IR)",
      description: "Deep-penetrating heat therapy that helps reduce pain, improve circulation, and promote healing in muscles and joints."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Laser Therapy",
      description: "Advanced treatment using focused light to reduce pain, inflammation, and accelerate tissue repair and cell growth."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Ultrasound Therapy (UST)",
      description: "Uses sound waves to provide deep heating to soft tissues, reducing pain and stiffness while promoting healing."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Speech Therapy",
      description: "Specialized therapy for individuals with speech disorders, helping improve communication, articulation, and language skills."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {therapyServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-teal-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
          
          {/* Placeholder for Additional Services */}
          <div className="bg-teal-50 p-6 rounded-lg border-2 border-dashed border-teal-200 flex flex-col items-center justify-center">
            <Plus className="h-8 w-8 text-teal-600 mb-2" />
            <p className="text-teal-600 text-center">More services coming soon...</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-teal-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Comprehensive Care Approach</h2>
            <p className="text-lg mb-4">
              At Shifa Clinic, we believe in providing holistic care that addresses not just the symptoms, 
              but the root cause of your condition. Our team of experienced therapists uses a combination 
              of these advanced therapeutic techniques to create personalized treatment plans.
            </p>
            <p className="text-lg">
              Whether you're recovering from an injury, managing chronic pain, or working to improve your speech,
              our comprehensive range of services ensures that you receive the most effective treatment for your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;