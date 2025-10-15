import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Animated coffee smoke effect */}
      <div className="absolute inset-0">
        {/* This is a placeholder for the coffee smoke effect */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-gold/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-primary-brown/20 blur-3xl animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 font-poppins"
          data-aos="fade-down"
        >
          {title}
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle}
        </p>
        <motion.div
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href={ctaLink}
            className="inline-block bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {ctaText}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;