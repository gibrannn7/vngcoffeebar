import React from 'react';
import AOS from 'aos';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  bgImage = null,
  darkOverlay = false 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${className}`}
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {bgImage && darkOverlay && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}
      <div className={`container mx-auto px-4 relative z-10 ${bgImage && darkOverlay ? 'relative' : ''}`}>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {subtitle && (
              <h3 
                className="text-accent-gold font-bold text-lg mb-2"
                data-aos="fade-up"
              >
                {subtitle}
              </h3>
            )}
            {title && (
              <h2 
                className="text-3xl md:text-4xl font-bold text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;