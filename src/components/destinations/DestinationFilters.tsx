import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, MapPin, DollarSign, Filter, X } from 'lucide-react';
import { Transition, Dialog } from '@headlessui/react';
import { format } from 'date-fns';

const DestinationFilters = () => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDates, setSelectedDates] = useState({ start: null, end: null });
  const [selectedFilters, setSelectedFilters] = useState({
    region: '',
    priceRange: '',
    tripTypes: [],
    travelers: [],
    amenities: []
  });
  
  const regions = [
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'north-america', label: 'North America' },
    { value: 'south-america', label: 'South America' },
    { value: 'africa', label: 'Africa' },
    { value: 'oceania', label: 'Oceania' }
  ];

  const priceRanges = [
    { value: 'budget', label: 'Budget (Under $500)', range: [0, 500] },
    { value: 'mid', label: 'Mid-range ($500-$1500)', range: [500, 1500] },
    { value: 'luxury', label: 'Luxury ($1500+)', range: [1500, Infinity] }
  ];

  const tripTypes = [
    'Adventure', 'Beach', 'City Break', 'Cultural', 'Nature & Wildlife'
  ];

  const travelerTypes = [
    'Solo', 'Couples', 'Family', 'Friends Group', 'Senior'
  ];

  const amenities = [
    'All-Inclusive', 'Guided Tours', 'Luxury Accommodations', 'Transport Included', 'Meals Included'
  ];

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => {
      if (Array.isArray(prev[category])) {
        return {
          ...prev,
          [category]: prev[category].includes(value)
            ? prev[category].filter(item => item !== value)
            : [...prev[category], value]
        };
      }
      return {
        ...prev,
        [category]: value
      };
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      region: '',
      priceRange: '',
      tripTypes: [],
      travelers: [],
      amenities: []
    });
    setSelectedDates({ start: null, end: null });
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).reduce((count, value) => {
      if (Array.isArray(value)) {
        return count + value.length;
      }
      return count + (value ? 1 : 0);
    }, 0) + (selectedDates.start ? 1 : 0);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 lg:mb-0">Find Your Perfect Destination</h3>
          
          <button 
            className="flex items-center text-blue-600 font-medium"
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
          >
            <Filter className="w-5 h-5 mr-1" />
            <span>{isFilterExpanded ? 'Hide Filters' : 'Show All Filters'}</span>
            {getActiveFiltersCount() > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-sm">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
              placeholder="Search destinations"
            />
          </div>
          
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MapPin className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={selectedFilters.region}
              onChange={(e) => handleFilterChange('region', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
            >
              <option value="">Select Region</option>
              {regions.map(region => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3 text-left"
            >
              {selectedDates.start ? (
                format(selectedDates.start, 'MMM dd, yyyy')
              ) : (
                'Select Dates'
              )}
            </button>
          </div>
          
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <DollarSign className="w-5 h-5 text-gray-400" />
            </div>
            <select
              value={selectedFilters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
            >
              <option value="">Price Range</option>
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <AnimatePresence>
          {isFilterExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
                  <div className="space-y-2">
                    {tripTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          id={`type-${type}`}
                          type="checkbox"
                          checked={selectedFilters.tripTypes.includes(type)}
                          onChange={() => handleFilterChange('tripTypes', type)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                  <div className="space-y-2">
                    {travelerTypes.map((traveler) => (
                      <div key={traveler} className="flex items-center">
                        <input
                          id={`traveler-${traveler}`}
                          type="checkbox"
                          checked={selectedFilters.travelers.includes(traveler)}
                          onChange={() => handleFilterChange('travelers', traveler)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`traveler-${traveler}`} className="ml-2 text-sm text-gray-700">
                          {traveler}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
                  <div className="space-y-2">
                    {amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input
                          id={`amenity-${amenity}`}
                          type="checkbox"
                          checked={selectedFilters.amenities.includes(amenity)}
                          onChange={() => handleFilterChange('amenities', amenity)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-gray-700">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
          <button 
            className="btn-secondary"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
          <button className="btn-primary">
            Search Destinations
          </button>
        </div>
      </div>

      {/* Calendar Modal */}
      <Transition show={isCalendarOpen} as={React.Fragment}>
        <Dialog 
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsCalendarOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Select Travel Dates
                </Dialog.Title>
                <div className="mt-4">
                  {/* Add your calendar component here */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Start Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, start: new Date(e.target.value) }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">End Date</label>
                      <input
                        type="date"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        onChange={(e) => setSelectedDates(prev => ({ ...prev, end: new Date(e.target.value) }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsCalendarOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => setIsCalendarOpen(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </motion.div>
  );
};

export default DestinationFilters;