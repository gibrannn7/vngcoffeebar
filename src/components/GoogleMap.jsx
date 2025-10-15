import React from 'react';

const GoogleMap = ({ address }) => {
  // Using a static image of the map as an approximation since embedding Google Maps requires an API key
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-full flex items-center justify-center bg-gray-200 relative">
        <img 
          src="https://maps.googleapis.com/maps/api/staticmap?center=-6.1108,106.1525&zoom=15&size=600x400&maptype=roadmap&markers=color:red|-6.1108,106.1525" 
          alt="VnG Coffee & Foodbar Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg text-center max-w-xs">
            <h3 className="font-bold text-primary-brown mb-2">VnG Coffee & Foodbar</h3>
            <p className="text-gray-700 text-sm">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;