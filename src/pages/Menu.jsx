// src/pages/Menu.jsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Card from '../components/Card';
import Tabs from '../components/Tabs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const toUrl = (relativePath) => new URL(relativePath, import.meta.url).href;

const Menu = () => {
  const [showAllMainCourses, setShowAllMainCourses] = useState(false);
  const [showAllAppetizers, setShowAllAppetizers] = useState(false);
  const [showAllDrinks, setShowAllDrinks] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  // --- MAIN COURSE (sesuaikan nama file dengan yang ada di folder)
  const mainCourseItems = [
    {
      id: 'mc-miegoreng',
      name: 'Mie Goreng',
      description: 'Mie lezat dengan bumbu pilihan',
      price: 'Rp 35.000',
      image: toUrl('../assets/menu/maincourse/miegoreng.jpg'),
    },
    {
      id: 'mc-ayam-kremes',
      name: 'Ayam Goreng Kremes',
      description: 'Ayam goreng renyah dengan kremesan gurih',
      price: 'Rp 45.000',
      image: toUrl('../assets/menu/maincourse/ayam katsu.jpeg'),
    },
    {
      id: 'mc-ayam-bakar',
      name: 'Ayam Bakar',
      description: 'Ayam bakar bumbu rempah khas',
      price: 'Rp 42.000',
      image: toUrl('../assets/menu/maincourse/ayam bakar.jpeg'),
    },
    {
      id: 'mc-nasi-hijau',
      name: 'Nasi Goreng Hijau',
      description: 'Nasi goreng dengan sambal hijau pedas',
      price: 'Rp 38.000',
      image: toUrl('../assets/menu/maincourse/nasigorenghijau.jpeg'),
    },
    {
      id: 'mc-soto-ayam',
      name: 'Soto Ayam',
      description: 'Soto ayam kuning dengan bumbu kaya',
      price: 'Rp 32.000',
      image: toUrl('../assets/menu/maincourse/sotoayam.jpeg'),
    },
    {
      id: 'mc-chicken-katsu',
      name: 'Chicken Katsu',
      description: 'Daging ayam goreng dengan saus katsu',
      price: 'Rp 40.000',
      image: toUrl('../assets/menu/maincourse/chicken katsu.jpeg'),
    },
  ];

  // --- APPETIZER & DESSERT
  const appetizerItems = [
    {
      id: 'ap-sosis-fries',
      name: 'Sosis N Fries',
      description: 'Sosis goreng dengan kentang goreng',
      price: 'Rp 28.000',
      image: toUrl('../assets/menu/appetizer/sosisnfries.jpeg'),
    },
    {
      id: 'ap-dori-fries',
      name: 'Dori N Fries',
      description: 'Ikan dori goreng dengan kentang goreng',
      price: 'Rp 32.000',
      image: toUrl('../assets/menu/appetizer/dorinfries.jpeg'),
    },
    {
      id: 'ap-mozzarella',
      name: 'Mozzarella N Fries',
      description: 'Keju mozzarella goreng dengan kentang',
      price: 'Rp 30.000',
      image: toUrl('../assets/menu/appetizer/mozzarellanfries.jpeg'),
    },
    {
      id: 'ap-cajun-prawn',
      name: 'Cajun Prawn',
      description: 'Udang goreng dengan bumbu cajun',
      price: 'Rp 45.000',
      image: toUrl('../assets/menu/appetizer/cajun prawn.jpeg'),
    },
    {
      id: 'ap-beef-teriyaki',
      name: 'Beef Teriyaki',
      description: 'Daging sapi dengan saus teriyaki',
      price: 'Rp 50.000',
      image: toUrl('../assets/menu/appetizer/beefteriyaki.jpeg'),
    },
    {
      id: 'ap-chicken-wings',
      name: 'Chicken Wings',
      description: 'Sayap ayam goreng dengan saus pilihan',
      price: 'Rp 35.000',
      image: toUrl('../assets/menu/appetizer/chickenwings.jpeg'),
    },
    {
      id: 'ap-korokoro-tofu',
      name: 'Koro Koro Tofu',
      description: 'Tahu goreng dengan saus gurih',
      price: 'Rp 25.000',
      image: toUrl('../assets/menu/appetizer/korokorotofu.jpeg'),
    },
    {
      id: 'ap-nougat-toast',
      name: 'Nougat Toast Mochi Ice Cream',
      description: 'Es krim mochi dengan roti panggang',
      price: 'Rp 38.000',
      image: toUrl('../assets/menu/appetizer/nougattoastmochiicecream.jpeg'),
    },
    {
      id: 'ap-roti-keju',
      name: 'Roti Keju Choco Crunch',
      description: 'Roti panggang dengan keju dan cokelat',
      price: 'Rp 28.000',
      image: toUrl('../assets/menu/appetizer/rotikejuchococrunch.jpeg'),
    },
    {
      id: 'ap-taro-toast',
      name: 'Taro Toast Oreo Choco',
      description: 'Roti talas dengan oreo dan cokelat',
      price: 'Rp 30.000',
      image: toUrl('../assets/menu/appetizer/tarotoastoreochoco.jpeg'),
    },
  ];

  // --- DRINKS
  const drinkItems = [
    {
      id: 'dr-avocado',
      name: 'Avocado Coffee',
      description: 'Kopi alpukat segar dan nikmat',
      price: 'Rp 35.000',
      image: toUrl('../assets/menu/drinks/avocado coffee.jpeg'),
    },
    {
      id: 'dr-caramel-macchiato',
      name: 'Caramel Macchiato',
      description: 'Kopi dengan sirup karamel dan susu',
      price: 'Rp 32.000',
      image: toUrl('../assets/menu/drinks/caramel macchiato.jpeg'),
    },
    {
      id: 'dr-taro-oreo',
      name: 'Taro Oreo',
      description: 'Minuman talas dengan oreo',
      price: 'Rp 30.000',
      image: toUrl('../assets/menu/drinks/tarooreo.jpeg'),
    },
    {
      id: 'dr-redvelvet',
      name: 'Red Velvet Cheese Oreo',
      description: 'Minuman red velvet dengan keju dan oreo',
      price: 'Rp 35.000',
      image: toUrl('../assets/menu/drinks/redvelvet cheese oreo.jpeg'),
    },
    {
      id: 'dr-choco-java',
      name: 'Choco Java Chip',
      description: 'Minuman cokelat dengan kepingan cokelat',
      price: 'Rp 32.000',
      image: toUrl('../assets/menu/drinks/choco java chip.jpeg'),
    },
    {
      id: 'dr-caramel-peanut',
      name: 'Caramel Peanut Butter',
      description: 'Karamel dengan kacang dan susu',
      price: 'Rp 38.000',
      image: toUrl('../assets/menu/drinks/caramel peanut butter.jpeg'),
    },
  ];

  const menuTabs = [
    { id: 'maincourse', label: 'Main Course' },
    { id: 'appetizer', label: 'Appetizer & Dessert' },
    { id: 'drinks', label: 'Drinks' },
  ];

  return (
    <div className="bg-primary-brown min-h-screen">
      <Helmet>
        <title>Menu VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta
          name="description"
          content="Discover our premium menu at VnG Coffee & Foodbar - featuring delicious main courses, appetizers, desserts, and specialty drinks in Serang, Banten."
        />
      </Helmet>

      <Section id="menu" className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" data-aos="fade-up">
              Our Menu
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="80">
              Nikmati berbagai pilihan hidangan lezat dan minuman segar kami
            </p>
          </div>

          <Tabs tabs={menuTabs}>
            {/* Main Course */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(showAllMainCourses ? mainCourseItems : mainCourseItems.slice(0, 6)).map((item) => (
                  <Card
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    className="bg-white/6 backdrop-blur border border-white/10"
                  />
                ))}
              </div>
              {mainCourseItems.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllMainCourses(!showAllMainCourses)}
                    className="bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-2 px-4 rounded"
                  >
                    {showAllMainCourses ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
                  </button>
                </div>
              )}
            </div>

            {/* Appetizer */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(showAllAppetizers ? appetizerItems : appetizerItems.slice(0, 6)).map((item) => (
                  <Card
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    className="bg-white/6 backdrop-blur border border-white/10"
                  />
                ))}
              </div>
              {appetizerItems.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllAppetizers(!showAllAppetizers)}
                    className="bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-2 px-4 rounded"
                  >
                    {showAllAppetizers ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
                  </button>
                </div>
              )}
            </div>

            {/* Drinks */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(showAllDrinks ? drinkItems : drinkItems.slice(0, 6)).map((item) => (
                  <Card
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    className="bg-white/6 backdrop-blur border border-white/10"
                  />
                ))}
              </div>
              {drinkItems.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllDrinks(!showAllDrinks)}
                    className="bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-2 px-4 rounded"
                  >
                    {showAllDrinks ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
                  </button>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </Section>

      <Section className="relative py-20" bgImage={toUrl('../assets/coffees/asset4.jpg')} darkOverlay={true}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up">
            Ingin Menikmati Menu Kami?
          </h2>
          <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="100">
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