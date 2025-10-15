import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { Coffee, Utensils, Music, Users, Sparkles } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const whyVnGItems = [
    {
      icon: <Coffee className="text-accent-gold" size={40} />,
      title: "Premium Coffee",
      description: "Racikan kopi pilihan dengan biji terbaik dari berbagai daerah di Indonesia."
    },
    {
      icon: <Utensils className="text-accent-gold" size={40} />,
      title: "Lezat & Gurih",
      description: "Menu makanan nikmat yang diracik dengan bahan-bahan segar dan berkualitas."
    },
    {
      icon: <Music className="text-accent-gold" size={40} />,
      title: "Live Music",
      description: "Hiburan live music setiap hari untuk menemani waktu ngopi dan makan."
    },
    {
      icon: <Users className="text-accent-gold" size={40} />,
      title: "Nyaman & Hangat",
      description: "Atmosfer yang hangat dan ramah untuk bersantai bersama keluarga dan teman."
    }
  ];

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>VnG Coffee & Foodbar | Serang’s Premium Cafe & Food Experience</title>
        <meta name="description" content="VnG Coffee & Foodbar — tempat terbaik untuk ngopi dan makan dengan suasana elegan, live music setiap hari, dan cita rasa premium di Serang, Banten." />
        <meta name="keywords" content="VnG, Coffee Serang, Cafe Serang, Foodbar Serang, Live Music Cafe, Nongkrong Serang, Kopi dan Makan Serang" />
        <meta property="og:title" content="VnG Coffee & Foodbar — Always Hepi!" />
        <meta property="og:description" content="Nikmati kopi, makanan, dan live music di tempat paling hangat dan elegan di Serang." />
      </Helmet>

      <Hero 
        title="COFFEE & FOODBAR"
        subtitle="ngoepi hepi - mangan hepi - always hepi"
        ctaText="Explore Menu"
        ctaLink="/menu"
        backgroundImage="/src/assets/coffees/asset4.jpg"
      />

      <Section 
        id="why-vng" 
        title="Why VnG?" 
        subtitle="Perpaduan nikmat kopi, kelezatan makanan, dan live music setiap hari."
        className="relative py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyVnGItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        id="atmosphere" 
        className="relative"
        bgImage="/src/assets/events/asset2.jpg"
        darkOverlay={true}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Sparkles className="text-accent-gold mx-auto mb-4" size={50} />
          </div>
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Sebuah Tempat yang Istimewa
          </h2>
          <p 
            className="text-xl text-gray-200 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            VnG Coffee & Foodbar adalah tempat di mana kopi, makanan, dan musik berpadu dalam kebahagiaan. 
            Suasana hangat dan nyaman kami menciptakan pengalaman yang tak terlupakan bagi setiap pengunjung.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Home;