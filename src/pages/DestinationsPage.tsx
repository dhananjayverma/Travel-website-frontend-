import React from 'react';
import { motion } from 'framer-motion';
import DestinationList from '../components/destinations/DestinationList';
import DestinationFilters from '../components/destinations/DestinationFilters';
import { destinations } from '../data/destinations';

const DestinationsPage = () => {
  return (
    <div className="pt-24 pb-20">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing places around the world and plan your next unforgettable journey
          </p>
        </div>
        
        <DestinationFilters />
        <DestinationList destinations={destinations} />
      </motion.div>
    </div>
  );
};

export default DestinationsPage;