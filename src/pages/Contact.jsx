import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';
import Section from '../components/Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>Contact VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta name="description" content="Get in touch with VnG Coffee & Foodbar in Serang. Find our location, hours, and contact information." />
      </Helmet>

      <Section id="contact" className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Contact Us
            </h1>
            <p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hubungi kami untuk reservasi atau pertanyaan lebih lanjut
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                data-aos="fade-right"
              >
                <div className="flex items-start mb-6">
                  <MapPin className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Alamat</h3>
                    <p className="text-gray-200">
                      Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota Serang, Banten 42116
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Phone className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kontak</h3>
                    <div className="space-y-2">
                      <a href="https://wa.me/628111288945" className="block text-gray-200 hover:text-accent-gold transition-colors">
                        +62 811-1288-945
                      </a>
                      <a href="https://wa.me/6287776620926" className="block text-gray-200 hover:text-accent-gold transition-colors">
                        +62 877-7662-0926
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Clock className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Jam Operasional</h3>
                    <div className="space-y-2 text-gray-200">
                      <p>Live Music Everyday</p>
                      <p>Sunday - Friday : 11.00 - 23.00</p>
                      <p>Saturday : 11.00 - 24.00</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-200">vngcoffeebar@example.com</p>
                  </div>
                </div>
              </div>

              <div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/vien.gh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-accent-gold text-primary-brown w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    IG
                  </a>
                </div>
              </div>
            </div>

            <div 
              className="space-y-8"
              data-aos="fade-left"
            >
              <GoogleMap 
                address="Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota Serang, Banten 42116"
              />

              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Kirim Pesan</h3>
                
                {submitSuccess && (
                  <div className="mb-4 p-3 bg-green-500/30 text-green-200 rounded-lg">
                    Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-200 mb-2">Nama</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-200 mb-2">Pesan</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        className="relative py-20"
        bgImage="/src/assets/events/asset3.jpg"
        darkOverlay={true}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Siap Mengunjungi VnG?
          </h2>
          <p 
            className="text-xl text-gray-200 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Buat reservasi sekarang dan nikmati pengalaman kuliner terbaik bersama kami
          </p>
          <a 
            href="https://wa.me/628111288945"
            className="inline-block bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 mr-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            WhatsApp Reservasi
          </a>
          <a 
            href="https://wa.me/6287776620926"
            className="inline-block bg-primary-brown hover:bg-accent-gold text-accent-gold hover:text-primary-brown font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border-2 border-accent-gold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            WhatsApp Alternatif
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Contact;