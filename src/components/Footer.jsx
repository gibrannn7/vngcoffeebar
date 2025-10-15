import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-brown text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* VnG Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/src/assets/logo/logo-vng.jpg"
                alt="VnG Coffee & Foodbar Logo"
                className="h-10 mr-3"
              />
              <h3 className="text-xl font-bold text-accent-gold">VnG COFFEE & FOODBAR</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Tempat di mana kopi, makanan, dan musik berpadu dalam kebahagiaan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-accent-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-accent-gold transition-colors">Menu</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent-gold transition-colors">About</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-accent-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-accent-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="https://wa.me/628111288945" className="text-white hover:text-accent-gold transition-colors">
                  +62 811-1288-945
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="https://wa.me/6287776620926" className="text-white hover:text-accent-gold transition-colors">
                  +62 877-7662-0926
                </a>
              </li>
              <li className="flex items-center">
                <a href="https://instagram.com/vien.gh" className="text-gray-300 hover:text-accent-gold transition-colors flex items-center">
                  <Instagram size={20} className="mr-2" />
                  <span>@vien.gh</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div>
            <h4 className="text-lg font-bold text-accent-gold mb-4">Alamat</h4>
            <div className="flex items-start">
              <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-300">Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota Serang, Banten 42116</span>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-8">
            <div 
                className="h-px w-2/3 mx-auto" 
                style={{
                    backgroundImage: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent)'
                }}
            ></div>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} VnG Coffee & Foodbar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;