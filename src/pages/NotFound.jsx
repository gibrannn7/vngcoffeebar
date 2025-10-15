import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary-brown flex items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found | VnG Coffee & Foodbar</title>
        <meta name="description" content="The page you're looking for doesn't exist at VnG Coffee & Foodbar." />
      </Helmet>
      
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-accent-gold mb-4">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          <Home className="mr-2" size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;