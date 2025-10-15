import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation, Pagination, Scrollbar, A11Y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Section from '../components/Section';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Gallery images
  const galleryImages = [
    { id: 1, src: '/src/assets/events/asset1.jpg', alt: 'VnG Coffee & Foodbar Interior 1' },
    { id: 2, src: '/src/assets/events/asset2.jpg', alt: 'VnG Coffee & Foodbar Interior 2' },
    { id: 3, src: '/src/assets/events/asset3.jpg', alt: 'VnG Coffee & Foodbar Interior 3' },
    { id: 4, src: '/src/assets/coffees/asset4.jpg', alt: 'Coffee Selection' },
    { id: 5, src: '/src/assets/coffees/asset5.jpg', alt: 'Coffee & Food Presentation' },
    { id: 6, src: '/src/assets/coffees/asset6.jpg', alt: 'VnG Coffee & Foodbar Atmosphere' },
    { id: 7, src: '/src/assets/menu/maincourse/mie-goreng.jpg', alt: 'Mie Goreng' },
    { id: 8, src: '/src/assets/menu/drinks/avocado-coffee.jpg', alt: 'Avocado Coffee' },
    { id: 9, src: '/src/assets/menu/appetizer/sosis-fries.jpg', alt: 'Sosis N Fries' },
    { id: 10, src: '/src/assets/menu/maincourse/ayam-kremes.jpg', alt: 'Ayam Goreng Kremes' },
    { id: 11, src: '/src/assets/menu/drinks/caramel-macchiato.jpg', alt: 'Caramel Macchiato' },
    { id: 12, src: '/src/assets/menu/appetizer/chicken-wings.jpg', alt: 'Chicken Wings' },
  ];

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>Gallery VnG Coffee & Foodbar | Serang’s Premium Cafe Experience</title>
        <meta name="description" content="Explore the atmosphere and delicious food at VnG Coffee & Foodbar through our photo gallery." />
      </Helmet>

      <Section id="gallery" className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Gallery
            </h1>
            <p 
              className="text-xl text-gray-200 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Jelajahi suasana dan hidangan lezat kami
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11Y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="py-8"
            >
              {galleryImages.map((image) => (
                <SwiperSlide key={image.id} className="flex justify-center">
                  <div 
                    className="rounded-2xl overflow-hidden shadow-xl h-80"
                    data-aos="fade-up"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Section>

      <Section 
        className="relative py-20"
        bgImage="/src/assets/coffees/asset6.jpg"
        darkOverlay={true}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-white mb-6"
            data-aos="fade-up"
          >
            Ingin Melihat Langsung?
          </h2>
          <p 
            className="text-xl text-gray-200 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Datang dan nikmati suasana hangat dan nyaman di VnG Coffee & Foodbar
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

export default Gallery;