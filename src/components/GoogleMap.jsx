import React from 'react';

const GoogleMap = ({ address }) => {
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="VnG Coffee & Foodbar Location"
      ></iframe>
    </div>
  );
};

export default GoogleMap;