import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
  };
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
        <p className="text-blue-600 text-sm mb-3">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;