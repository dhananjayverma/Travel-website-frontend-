import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Visit Us',
      details: ['123 Travel Street', 'Adventure City, AC 12345', 'United States']
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email Us',
      details: ['info@wanderlust.com', 'bookings@wanderlust.com']
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Office Hours',
      details: ['Monday-Friday: 9AM-6PM', 'Saturday: 10AM-4PM', 'Sunday: Closed']
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Let us help plan your next adventure.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <div className="text-gray-600">
                {item.details.map((detail, i) => (
                  <p key={i} className="mb-1">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1634756694261!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="WanderLust location map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;