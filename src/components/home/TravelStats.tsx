import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TravelStats = () => {
  const stats = [
    { value: 15000, label: 'Happy Travelers', suffix: '+' },
    { value: 500, label: 'Destinations', suffix: '+' },
    { value: 150, label: 'Countries', suffix: '' },
    { value: 10, label: 'Years Experience', suffix: '+' }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-800 text-blue-200 text-sm font-semibold mb-3">
            OUR IMPACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Creating Memorable Travel Experiences
          </h2>
          <p className="text-xl text-blue-200">
            Join thousands of travelers who have discovered the world with us
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCounter = ({ value, label, suffix, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const steps = 50; // Number of steps to reach the target
      const stepValue = value / steps;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep += 1;
        setCount(Math.ceil(stepValue * currentStep));
        
        if (currentStep >= steps) {
          setCount(value);
          clearInterval(timer);
        }
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-4xl sm:text-5xl font-bold mb-2">
        {isInView ? count : 0}{suffix}
      </h3>
      <p className="text-lg text-blue-200">{label}</p>
    </motion.div>
  );
};

export default TravelStats;