import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Tabs from '../components/Tabs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Main Course Menu Items
  const mainCourseItems = [
    { id: 1, name: 'Mie Goreng', description: 'Mie lezat dengan bumbu pilihan', price: 'Rp 35,000', image: '/src/assets/menu/maincourse/mie-goreng.jpg' },
    { id: 2, name: 'Ayam Goreng Kremes', description: 'Ayam goreng renyah dengan kremesan gurih', price: 'Rp 45,000', image: '/src/assets/menu/maincourse/ayam-kremes.jpg' },
    { id: 3, name: 'Ayam Bakar', description: 'Ayam bakar bumbu rempah khas', price: 'Rp 42,000', image: '/src/assets/menu/maincourse/ayam-bakar.jpg' },
    { id: 4, name: 'Nasi Goreng Hijau', description: 'Nasi goreng dengan sambal hijau pedas', price: 'Rp 38,000', image: '/src/assets/menu/maincourse/nasi-hijau.jpg' },
    { id: 5, name: 'Soto Ayam', description: 'Soto ayam kuning dengan bumbu kaya', price: 'Rp 32,000', image: '/src/assets/menu/maincourse/soto-ayam.jpg' },
    { id: 6, name: 'Chicken Katsu', description: 'Daging ayam goreng dengan saus katsu', price: 'Rp 40,000', image: '/src/assets/menu/maincourse/chicken-katsu.jpg' },
  ];

  // Appetizer & Dessert Items
  const appetizerItems = [
    { id: 1, name: 'Sosis N Fries', description: 'Sosis goreng dengan kentang goreng', price: 'Rp 28,000', image: '/src/assets/menu/appetizer/sosis-fries.jpg' },
    { id: 2, name: 'Dori N Fries', description: 'Ikan dori goreng dengan kentang goreng', price: 'Rp 32,000', image: '/src/assets/menu/appetizer/dori-fries.jpg' },
    { id: 3, name: 'Mozzarella N Fries', description: 'Keju mozzarella goreng dengan kentang', price: 'Rp 30,000', image: '/src/assets/menu/appetizer/mozzarella-fries.jpg' },
    { id: 4, name: 'Cajun Prawn', description: 'Udang goreng dengan bumbu cajun', price: 'Rp 45,000', image: '/src/assets/menu/appetizer/cajun-prawn.jpg' },
    { id: 5, name: 'Beef Teriyaki', description: 'Daging sapi dengan saus teriyaki', price: 'Rp 50,000', image: '/src/assets/menu/appetizer/beef-teriyaki.jpg' },
    { id: 6, name: 'Chicken Wings', description: 'Sayap ayam goreng dengan saus pilihan', price: 'Rp 35,000', image: '/src/assets/menu/appetizer/chicken-wings.jpg' },
    { id: 7, name: 'Koro Koro Tofu', description: 'Tahu goreng dengan saus gurih', price: 'Rp 25,000', image: '/src/assets/menu/appetizer/koro-tofu.jpg' },
    { id: 8, name: 'Nougat Toast Mochi Ice Cream', description: 'Es krim mochi dengan roti panggang', price: 'Rp 38,000', image: '/src/assets/menu/appetizer/nougat-ice.jpg' },
    { id: 9, name: 'Roti Keju Choco Crunch', description: 'Roti panggang dengan keju dan cokelat', price: 'Rp 28,000', image: '/src/assets/menu/appetizer/roti-keju.jpg' },
    { id: 10, name: 'Taro Toast Oreo Choco', description: 'Roti talas dengan oreo dan cokelat', price: 'Rp 30,000', image: '/src/assets/menu/appetizer/taro-oreo.jpg' },
  ];

  // Drink Items
  const drinkItems = [
    { id: 1, name: 'Avocado Coffee', description: 'Kopi alpukat segar dan nikmat', price: 'Rp 35,000', image: '/src/assets/menu/drinks/avocado-coffee.jpg' },
    { id: 2, name: 'Caramel Macchiato', description: 'Kopi dengan sirup karamel dan susu', price: 'Rp 32,000', image: '/src/assets/menu/drinks/caramel-macchiato.jpg' },
    { id: 3, name: 'Taro Oreo', description: 'Minuman talas dengan oreo', price: 'Rp 30,000', image: '/src/assets/menu/drinks/taro-oreo.jpg' },
    { id: 4, name: 'Red Velvet Cheese Oreo', description: 'Minuman red velvet dengan keju dan oreo', price: 'Rp 35,000', image: '/src/assets/menu/drinks/red-velvet.jpg' },
    { id: 5, name: 'Choco Java Chip', description: 'Minuman cokelat dengan kepingan cokelat', price: 'Rp 32,000', image: '/src/assets/menu/drinks/choco-java.jpg' },
    { id: 6, name: 'Caramel Peanut Butter', description: 'Karamel dengan kacang dan susu', price: 'Rp 38,000', image: '/src/assets/menu/drinks/caramel-peanut.jpg' },
  ];

  const menuTabs = [
    { id: 'maincourse', label: 'Main Course' },
    { id: 'appetizer', label: 'Appetizer & Dessert' },
    { id: 'drinks', label: 'Drinks' }
  ];

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>Menu VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta name="description" content="Discover our premium menu at VnG Coffee & Foodbar - featuring delicious main courses, appetizers, desserts, and specialty drinks in Serang, Banten." />
      </Helmet>

      <Section id="menu" className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Our Menu
            </h1>
            <p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Nikmati berbagai pilihan hidangan lezat dan minuman segar kami
            </p>
          </div>

          <Tabs tabs={menuTabs}>
            {/* Main Course Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainCourseItems.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                />
              ))}
            </div>

            {/* Appetizer & Dessert Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appetizerItems.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                />
              ))}
            </div>

            {/* Drinks Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drinkItems.map((item) => (
                <Card
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                />
              ))}
            </div>
          </Tabs>
        </div>
      </Section>

      <Section 
        className="relative py-20"
        bgImage="/src/assets/coffees/asset4.jpg"
        darkOverlay={true}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Ingin Menikmati Menu Kami?
          </h2>
          <p 
            className="text-xl text-gray-200 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Datang dan nikmati pengalaman kuliner terbaik di VnG Coffee & Foodbar
          </p>
          <a 
            href="https://wa.me/628111288945"
            className="inline-block bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Reservasi Sekarang
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Menu;