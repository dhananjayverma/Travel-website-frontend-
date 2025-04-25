import React from 'react';
import { motion } from 'framer-motion';
import { Map, Globe, Compass, Shield } from 'lucide-react';

const TravelExperience = () => {
  const features = [
    {
      icon: <Map className="w-8 h-8 text-blue-600" />,
      title: 'Curated Itineraries',
      description: 'Expertly designed travel plans that combine must-see attractions with hidden gems.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Expertise',
      description: 'Our team has collective knowledge of over 100 countries across all continents.'
    },
    {
      icon: <Compass className="w-8 h-8 text-blue-600" />,
      title: 'Personalized Journeys',
      description: 'Travel experiences tailored to your preferences, interests, and pace.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey for complete peace of mind.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Travel Experiences Designed For You
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We believe travel should be transformative. Our expert team creates seamless journeys that combine iconic sights with authentic local experiences, tailored to your preferences and travel style.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <button className="btn-primary">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[500px] lg:h-auto rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-blue-900/30 z-10 rounded-xl"></div>
            <img 
              src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Travel Experience" 
              className="w-full h-full object-cover rounded-xl"
            />
            
            <motion.div 
              className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-blue-600 font-semibold mb-2">CUSTOMER STORY</p>
              <p className="text-gray-800 italic">
                "Our family trip to Japan exceeded all expectations. The attention to detail and personalized recommendations made our journey truly special."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Sarah Johnson" 
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Traveled May 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TravelExperience;