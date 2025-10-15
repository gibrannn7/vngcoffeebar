import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-brown text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com/vien.gh" className="text-gray-300 hover:text-accent-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

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

          <div>
            <h4 className="text-lg font-bold text-accent-gold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>Mon - Fri: 11:00 - 23:00</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>Saturday: 11:00 - 24:00</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2" size={16} />
                <span>Sunday: 11:00 - 23:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-accent-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1" size={16} />
                <span>Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota Serang, Banten 42116</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="https://wa.me/628111288945" className="hover:text-accent-gold transition-colors">
                  +62 811-1288-945
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="https://wa.me/6287776620926" className="hover:text-accent-gold transition-colors">
                  +62 877-7662-0926
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-brown/30 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} VnG Coffee & Foodbar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;