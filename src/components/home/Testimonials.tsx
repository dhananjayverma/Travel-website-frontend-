import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const testimonials = [
    {
      id: 1,
      text: "Our family trip to Japan exceeded all expectations. The attention to detail and personalized recommendations made our journey truly special. We can't wait to book our next adventure with WanderLust!",
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5
    },
    {
      id: 2,
      text: "As solo travelers, safety and unique experiences are our top priorities. WanderLust delivered on both fronts, creating an itinerary that took me off the beaten path while ensuring I felt secure throughout my journey in South America.",
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5
    },
    {
      id: 3,
      text: "Our honeymoon in the Maldives was absolutely perfect. From the seamless transfers to the stunning overwater villa, every detail was considered. The surprise sunset dinner on the beach was the highlight of our trip!",
      name: "Elena Rodriguez",
      location: "Madrid, Spain",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from adventurers who have experienced the WanderLust difference
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative h-[340px] sm:h-[280px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <div className="flex flex-col sm:flex-row items-center mb-6">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-16 h-16 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                      <div className="flex items-center justify-center sm:justify-start mt-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500" fill="#f59e0b" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonials[currentIndex].text}"</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;