// src/pages/Gallery.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Section from '../components/Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const toUrl = (relativePath) => new URL(relativePath, import.meta.url).href;

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  // Semua gambar events, coffees, dan menu (gabungkan semuanya agar tidak ada yg terlewat)
  const galleryImages = [
    // events
    { id: 'e1', src: toUrl('../assets/events/asset1.jpg'), alt: 'Event - 1' },
    { id: 'e2', src: toUrl('../assets/events/assets2.jpg'), alt: 'Event - 2' }, // note: assets2.jpg di folder
    { id: 'e3', src: toUrl('../assets/events/asset3.jpg'), alt: 'Event - 3' },

    // coffees
    { id: 'c4', src: toUrl('../assets/coffees/asset4.jpg'), alt: 'Coffee - 1' },
    { id: 'c5', src: toUrl('../assets/coffees/asset5.jpg'), alt: 'Coffee - 2' },
    { id: 'c6', src: toUrl('../assets/coffees/asset6.jpg'), alt: 'Coffee - 3' },

    // main course
    { id: 'mc-miegoreng', src: toUrl('../assets/menu/maincourse/miegoreng.jpg'), alt: 'Mie Goreng' },
    { id: 'mc-ayam-kremes', src: toUrl('../assets/menu/maincourse/ayam kremes.jpeg'), alt: 'Ayam Goreng Kremes' },
    { id: 'mc-ayam-bakar', src: toUrl('../assets/menu/maincourse/ayam bakar.jpeg'), alt: 'Ayam Bakar' },
    { id: 'mc-nasi-hijau', src: toUrl('../assets/menu/maincourse/nasigorenghijau.jpeg'), alt: 'Nasi Goreng Hijau' },
    { id: 'mc-soto-ayam', src: toUrl('../assets/menu/maincourse/sotoayam.jpeg'), alt: 'Soto Ayam' },
    { id: 'mc-chicken-katsu', src: toUrl('../assets/menu/maincourse/chicken katsu.jpeg'), alt: 'Chicken Katsu' },

    // appetizers & desserts
    { id: 'ap-sosis', src: toUrl('../assets/menu/appetizer/sosisnfries.jpeg'), alt: 'Sosis n Fries' },
    { id: 'ap-dori', src: toUrl('../assets/menu/appetizer/dorinfries.jpeg'), alt: 'Dori n Fries' },
    { id: 'ap-mozza', src: toUrl('../assets/menu/appetizer/mozzarellanfries.jpeg'), alt: 'Mozzarella n Fries' },
    { id: 'ap-cajun', src: toUrl('../assets/menu/appetizer/cajun prawn.jpeg'), alt: 'Cajun Prawn' },
    { id: 'ap-beef', src: toUrl('../assets/menu/appetizer/beefteriyaki.jpeg'), alt: 'Beef Teriyaki' },
    { id: 'ap-wings', src: toUrl('../assets/menu/appetizer/chickenwings.jpeg'), alt: 'Chicken Wings' },
    { id: 'ap-tofu', src: toUrl('../assets/menu/appetizer/korokorotofu.jpeg'), alt: 'Koro Koro Tofu' },
    { id: 'ap-nougat', src: toUrl('../assets/menu/appetizer/nougattoastmochiicecream.jpeg'), alt: 'Nougat Toast Mochi Ice Cream' },
    { id: 'ap-roti', src: toUrl('../assets/menu/appetizer/rotikejuchococrunch.jpeg'), alt: 'Roti Keju Choco Crunch' },
    { id: 'ap-taro-toast', src: toUrl('../assets/menu/appetizer/tarotoastoreochoco.jpeg'), alt: 'Taro Toast Oreo Choco' },

    // drinks
    { id: 'dr-avocado', src: toUrl('../assets/menu/drinks/avocado coffee.jpeg'), alt: 'Avocado Coffee' },
    { id: 'dr-caramel', src: toUrl('../assets/menu/drinks/caramel macchiato.jpeg'), alt: 'Caramel Macchiato' },
    { id: 'dr-taro', src: toUrl('../assets/menu/drinks/tarooreo.jpeg'), alt: 'Taro Oreo' },
    { id: 'dr-redvelvet', src: toUrl('../assets/menu/drinks/redvelvet cheese oreo.jpeg'), alt: 'Red Velvet Cheese Oreo' },
    { id: 'dr-choco', src: toUrl('../assets/menu/drinks/choco java chip.jpeg'), alt: 'Choco Java Chip' },
    { id: 'dr-caramel-peanut', src: toUrl('../assets/menu/drinks/caramel peanut butter.jpeg'), alt: 'Caramel Peanut Butter' },
  ];

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>Gallery VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta
          name="description"
          content="Explore the atmosphere and delicious food at VnG Coffee & Foodbar through our photo gallery."
        />
      </Helmet>

      <Section id="gallery" className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3" data-aos="fade-up">
              Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="80">
              Jelajahi suasana dan hidangan lezat kami
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="py-6"
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id} className="flex justify-center">
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-72 w-full" data-aos="fade-up">
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>

      <Section className="relative py-20" bgImage={toUrl('../assets/coffees/asset6.jpg')} darkOverlay={true}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up">
            Ingin Melihat Langsung?
          </h2>
          <p className="text-xl text-gray-200 mb-8" data-aos="fade-up" data-aos-delay="80">
            Datang dan nikmati suasana hangat dan nyaman di VnG Coffee & Foodbar
          </p>
          <a
            href="https://wa.me/628111288945"
            className="inline-block bg-accent-gold hover:bg-primary-brown text-primary-brown hover:text-accent-gold font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            Reservasi Sekarang
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Gallery;