// import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star } from 'lucide-react';

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1299,
      rating: 4.9,
      duration: '7 days',
    },
    {
      id: 2,
      title: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/5759810/pexels-photo-5759810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 999,
      rating: 4.8,
      duration: '10 days',
    },
    {
      id: 3,
      title: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/3800182/pexels-photo-3800182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1499,
      rating: 4.9,
      duration: '8 days',
    },
    {
      id: 4,
      title: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2929906/pexels-photo-2929906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: 1799,
      rating: 4.7,
      duration: '9 days',
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-3">
            FEATURED DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Popular Travel Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover breathtaking places loved by travelers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-2 rounded-full shadow flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" fill="#f59e0b" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-blue-600 mr-1" />
                  <h3 className="text-lg font-semibold">{destination.title}</h3>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-blue-600">${destination.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ person</span>
                  </div>
                  <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary">
            <span>View All Destinations</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;