import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Eiffel Tower, Paris",
      location: "Paris, France"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Beach in Bali",
      location: "Bali, Indonesia"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "New York Skyline",
      location: "New York, USA"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2564032/pexels-photo-2564032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Venice Canal",
      location: "Venice, Italy"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/2245436/pexels-photo-2245436.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Sydney Opera House",
      location: "Sydney, Australia"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/5961922/pexels-photo-5961922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Machu Picchu",
      location: "Cusco, Peru"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-3">
            INSPIRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Travel Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Immerse yourself in stunning destinations from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer h-[300px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-medium text-lg">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary">
            <span>View Full Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl w-full max-h-[80vh]">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-xl font-medium">{selectedImage.location}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;