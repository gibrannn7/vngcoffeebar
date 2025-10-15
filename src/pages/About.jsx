import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>About VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta name="description" content="Discover the story behind VnG Coffee & Foodbar - your premium destination for coffee, food, and live music in Serang, Banten." />
      </Helmet>

      <Section 
        id="about" 
        className="relative pt-32 pb-20"
        bgImage="/src/assets/events/asset2.jpg"
        darkOverlay={true}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            data-aos="fade-up"
          >
            About VnG Coffee & Foodbar
          </h1>
          <p 
            className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Tempat di mana kopi, makanan, dan musik berpadu dalam kebahagiaan.
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-accent-gold mb-6">Sejarah VnG</h2>
              <p className="text-gray-200 mb-4 text-lg">
                VnG Coffee & Foodbar berdiri dengan semangat untuk menyediakan tempat yang hangat dan nyaman 
                bagi masyarakat Serang untuk menikmati secangkir kopi nikmat, hidangan lezat, dan hiburan live music.
              </p>
              <p className="text-gray-200 mb-4 text-lg">
                Kami percaya bahwa momen-momen terbaik dalam hidup seringkali terjadi saat kita menikmati 
                secangkir kopi sambil bersenda gurau dengan orang-orang terkasih.
              </p>
            </div>
            <div 
              className="rounded-2xl overflow-hidden shadow-xl"
              data-aos="fade-left"
            >
              <img 
                src="/src/assets/coffees/asset5.jpg" 
                alt="VnG Coffee & Foodbar Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section 
        className="relative py-20"
        bgImage="/src/assets/coffees/asset6.jpg"
        darkOverlay={true}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            data-aos="fade-up"
          >
            Filosofi Kami
          </h2>
          <p 
            className="text-xl text-gray-200 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            "Perpaduan nikmat kopi, kelezatan makanan, dan live music setiap hari."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-bold text-accent-gold mb-4">Hangat</h3>
              <p className="text-gray-200">
                Suasana yang ramah dan menyenangkan untuk bersantai dan menikmati waktu bersama orang-orang terkasih.
              </p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-xl font-bold text-accent-gold mb-4">Classy</h3>
              <p className="text-gray-200">
                Desain interior yang elegan dengan sentuhan warna coklat tua, kuning emas, dan hijau tua.
              </p>
            </div>
            
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-xl font-bold text-accent-gold mb-4">Nyaman</h3>
              <p className="text-gray-200">
                Tempat yang ideal untuk bekerja, belajar, atau sekadar bersantai setelah seharian beraktivitas.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-accent-gold mb-12"
            data-aos="fade-up"
          >
            Jadwal Operasional
          </h2>
          
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-accent-gold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-music text-primary-brown text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white">Live Music Everyday</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-white/20">
                <span className="text-gray-200">Sunday - Friday</span>
                <span className="text-white font-medium">11.00 - 23.00</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/20">
                <span className="text-gray-200">Saturday</span>
                <span className="text-white font-medium">11.00 - 24.00</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;