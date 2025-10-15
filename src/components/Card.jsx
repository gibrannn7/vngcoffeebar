import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  title, 
  description, 
  price, 
  image, 
  alt, 
  category,
  className = '' 
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={alt || title} 
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          {category && (
            <div className="absolute top-4 left-4 bg-accent-gold text-primary-brown px-3 py-1 rounded-full text-sm font-bold">
              {category}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary-brown">{title}</h3>
          {price && <span className="text-accent-gold font-bold text-lg">{price}</span>}
        </div>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    </motion.div>
  );
};

export default Card;