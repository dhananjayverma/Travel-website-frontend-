import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useInterval } from 'react-use';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Discover Amazing Places",
      subtitle: "Explore breathtaking destinations around the world",
      cta: "Start Your Journey"
    },
    {
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Unforgettable Experiences",
      subtitle: "Create memories that last a lifetime",
      cta: "View Experiences"
    },
    {
      image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Journey Beyond Boundaries",
      subtitle: "Travel with confidence and comfort",
      cta: "Plan Your Trip"
    }
  ];

  useInterval(
    () => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    },
    6000
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        {slides.map((slide, index) => (
          <motion.div 
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 7 }
            }}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(0.7)"
              }}
            />
            
            {currentSlide === index && (
              <motion.div 
                className="relative h-full flex items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
                  <div className="max-w-xl md:ml-12 lg:ml-24">
                    <motion.h1 
                      className="text-5xl sm:text-6xl font-bold text-white mb-4 drop-shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p 
                      className="text-xl sm:text-2xl text-white mb-8 drop-shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div 
                      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <motion.button 
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slide.cta}
                      </motion.button>
                      <motion.button 
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Explore Destinations</span>
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8">
        <motion.button
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Play/Pause Button */}
      <motion.button
        className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        onClick={() => setIsPlaying(!isPlaying)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <span className="w-4 h-4 bg-white rounded-sm" />
        ) : (
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
        )}
      </motion.button>
    </div>
  );
};

export default HeroSection;