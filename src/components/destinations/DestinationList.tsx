import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Star } from 'lucide-react';

interface Destination {
  id: number;
  title: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  description: string;
  activities: string[];
}

interface DestinationListProps {
  destinations: Destination[];
}

const DestinationList: React.FC<DestinationListProps> = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
          <div className="relative h-60 overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white py-1 px-2 rounded-full shadow flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" fill="#f59e0b" />
              <span className="text-sm font-medium">{destination.rating}</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{destination.location}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.title}</h3>
            
            <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
            
            <div className="flex items-center justify-between mb-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{destination.duration}</span>
              </div>
              
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>Group & Private</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-blue-600">${destination.price}</span>
                  <span className="text-gray-500 text-sm ml-1">/ person</span>
                </div>
                <button className="py-2 px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DestinationList;