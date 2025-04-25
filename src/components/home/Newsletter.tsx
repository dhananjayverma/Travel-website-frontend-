import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setError('');
    }, 800);
  };

  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 text-blue-500 opacity-10" width="600" height="600" viewBox="0 0 600 600">
          <path d="M0,0 C150,100 350,50 500,250 C600,400 500,550 600,600 L0,600 L0,0Z" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-0 right-0 text-blue-500 opacity-10" width="600" height="600" viewBox="0 0 600 600">
          <path d="M600,600 C450,500 250,550 100,350 C0,200 100,50 0,0 L600,0 L600,600Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500 text-white text-sm font-semibold mb-3">
            STAY UPDATED
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Travel Inspiration & Special Offers
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our newsletter and discover new destinations and exclusive deals
          </p>
          
          <motion.form
            onSubmit={handleSubmit}
            className={`relative mx-auto max-w-lg transition-all duration-300 ${submitted ? 'pointer-events-none' : ''}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              className={`w-full py-4 px-6 pr-[140px] rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 shadow-lg ${
                error ? 'border-2 border-red-400' : 'border-0'
              }`}
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              disabled={submitted}
            />
            <button
              type="submit"
              className={`absolute right-2 top-2 bottom-2 px-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                submitted 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-800 text-white hover:bg-blue-900'
              }`}
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <Check className="h-5 w-5 mr-1" />
                  <span>Subscribed</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="h-4 w-4 ml-2" />
                </>
              )}
            </button>
            
            {error && (
              <motion.p 
                className="text-left text-white mt-2 pl-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}
            
            {submitted && (
              <motion.div 
                className="absolute left-0 right-0 -bottom-10 text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you for subscribing!
              </motion.div>
            )}
          </motion.form>
          
          <p className="text-blue-200 text-sm mt-16">
            By subscribing, you agree to our Privacy Policy and consent to receive travel deals and updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;