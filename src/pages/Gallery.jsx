// src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const toUrl = (relativePath) => new URL(relativePath, import.meta.url).href;

const allImages = [
    // Events
    { id: 'e1', src: toUrl('../assets/events/asset1.jpg'), alt: 'Event Atmosphere', category: 'Events' },
    { id: 'e2', src: toUrl('../assets/events/assets2.jpg'), alt: 'Cheers with friends', category: 'Events' },
    { id: 'e3', src: toUrl('../assets/events/asset3.jpg'), alt: 'Birthday Celebration', category: 'Events' },

    // Ambiance & Coffees
    { id: 'c4', src: toUrl('../assets/coffees/asset4.jpg'), alt: 'Espresso shot', category: 'Ambiance' },
    { id: 'c5', src: toUrl('../assets/coffees/asset5.jpg'), alt: 'Latte Art', category: 'Ambiance' },
    { id: 'c6', src: toUrl('../assets/coffees/asset6.jpg'), alt: 'Cup of coffee', category: 'Ambiance' },

    // Live Music
    { id: 'lv1', src: toUrl('../assets/livemusic/lv1.jpeg'), alt: 'Live music performance', category: 'Live Music' },
    { id: 'lv2', src: toUrl('../assets/livemusic/lv2.jpeg'), alt: 'Acoustic night at VnG', category: 'Live Music' },
    { id: 'lv3', src: toUrl('../assets/livemusic/lv3.jpeg'), alt: 'Singer entertaining guests', category: 'Live Music' },
    { id: 'lv4', src: toUrl('../assets/livemusic/lv4.jpeg'), alt: 'Musician playing guitar', category: 'Live Music' },
    { id: 'lv5', src: toUrl('../assets/livemusic/lv5.jpeg'), alt: 'Weekend live music session', category: 'Live Music' },
    { id: 'lv6', src: toUrl('../assets/livemusic/lv6.jpeg'), alt: 'Energetic band performance', category: 'Live Music' },
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [visibleImages, setVisibleImages] = useState(9);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
        });
    }, []);

    const galleryTabs = [
        { id: 'All', label: 'All' },
        { id: 'Live Music', label: 'Live Music' },
        { id: 'Events', label: 'Events' },
        { id: 'Ambiance', label: 'Ambiance' },
    ];

    const filteredImages = activeTab === 'All'
        ? allImages
        : allImages.filter(image => image.category === activeTab);

    const imagesToShow = filteredImages.slice(0, visibleImages);

    const handleLoadMore = () => {
        setVisibleImages(prev => prev + 6);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setVisibleImages(9);
    };

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

                    <div className="flex flex-wrap justify-center border-b border-primary-brown/30 mb-12">
                        {galleryTabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`px-6 py-3 font-medium text-lg relative focus:outline-none mx-2 my-1 ${activeTab === tab.id
                                    ? 'text-accent-gold'
                                    : 'text-gray-400 hover:text-accent-gold'
                                    }`}
                                onClick={() => handleTabClick(tab.id)}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold rounded-t"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                    >
                        {imagesToShow.map((image) => (
                            <motion.div
                                layout
                                key={image.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="group relative rounded-lg overflow-hidden shadow-lg"
                            >
                                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-4">
                                    <p className="text-white font-semibold text-lg drop-shadow-md">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {visibleImages < filteredImages.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="bg-accent-gold hover:bg-yellow-600 text-primary-brown font-bold py-3 px-8 rounded-full transition-all duration-300"
                            >
                                Load More
                            </button>
                        </div>
                    )}
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