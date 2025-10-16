import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  title,
  description,
  price,
  image,
  alt,
  category
}) => {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden group"
      whileHover={{
        y: -8,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
      }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          {category && (
            <div className="absolute top-4 left-4 bg-accent-gold text-primary-brown px-3 py-1 rounded-full text-sm font-bold">
              {category}
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white font-poppins">{title}</h3>
          {price && <span className="text-accent-gold font-bold text-lg font-poppins">{price}</span>}
        </div>
        {description && <p className="text-gray-300 font-lora">{description}</p>}
      </div>
    </motion.div>
  );
};

export default Card;