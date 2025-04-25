import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from '../components/about/TeamMember';
import { MapPin, Users, ThumbsUp, Award } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'With 15 years of travel experience, Sarah founded WanderLust to share her passion for exploring the world.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Travel Director',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Michael has visited over 50 countries and specializes in creating unique, immersive travel experiences.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Customer Experience',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Elena ensures our clients receive exceptional service from first inquiry to return home.'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Adventure Specialist',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'David designs our adventure tours and has summited peaks on all seven continents.'
    }
  ];

  const values = [
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: 'Authentic Experiences',
      description: 'We create journeys that immerse you in local cultures and traditions.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Personal Touch',
      description: 'Every itinerary is crafted with care to match your unique preferences.'
    },
    {
      icon: <ThumbsUp className="w-12 h-12 text-blue-600" />,
      title: 'Sustainability',
      description: 'We promote responsible travel that respects local communities and environments.'
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for perfection in every detail of your travel experience.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-600">
            Creating unforgettable travel experiences since 2015
          </p>
        </motion.div>

        {/* About Story */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Passion for Travel</h2>
            <p className="text-gray-700 mb-4">
              WanderLust was born from a simple belief: travel should be transformative. Founded in 2015 by a group of passionate explorers, we've grown from a small team with big dreams to a global travel company serving thousands of adventurers each year.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began when our founder, Sarah Johnson, decided to share her travel expertise after spending 15 years exploring remote corners of the world. What started as a blog became a movement, connecting like-minded travelers who seek authentic experiences.
            </p>
            <p className="text-gray-700">
              Today, we're proud to curate journeys that go beyond the ordinary, creating moments of wonder, connection, and discovery. Our experienced team has collective knowledge of over 100 countries, allowing us to craft truly unique experiences.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={member.id} 
                member={member} 
                index={index} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;