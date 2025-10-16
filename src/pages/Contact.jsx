import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Clock, Mail, Send, ThumbsUp } from "lucide-react";
import GoogleMap from "../components/GoogleMap";
import Section from "../components/Section";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-primary-brown">
      <Helmet>
        <title>
          Contact VnG Coffee & Foodbar | Serang’s Premium Cafe Experience
        </title>
        <meta
          name="description"
          content="Get in touch with VnG Coffee & Foodbar in Serang. Find our location, hours, and contact information."
        />
      </Helmet>

      <Section id="contact" className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
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
            {/* Left Column: Info and Map */}
            <div className="space-y-8">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                data-aos="fade-right"
              >
                <div className="flex items-start mb-6">
                  <MapPin
                    className="text-accent-gold mt-1 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Alamat
                    </h3>
                    <p className="text-gray-200">
                      Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota
                      Serang, Banten 42116
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Phone className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Kontak
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="https://wa.me/628111288945"
                        className="block text-gray-200 hover:text-accent-gold transition-colors"
                      >
                        +62 811-1288-945
                      </a>
                      <a
                        href="https://wa.me/6287776620926"
                        className="block text-gray-200 hover:text-accent-gold transition-colors"
                      >
                        +62 877-7662-0926
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Clock className="text-accent-gold mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Jam Operasional
                    </h3>
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
                    <a
                      href="mailto:vng.ofc@gmail.com"
                      className="text-gray-200 hover:text-accent-gold transition-colors"
                    >
                      vng.ofc@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <GoogleMap address="Jl. Kolonel Tubagus Suwandi, Serang, Kec. Serang, Kota Serang, Banten 42116" />
            </div>

            {/* Right Column: Form */}
            <div className="space-y-8" data-aos="fade-left">
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 sticky top-28"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Kirim Pesan
                </h3>

                {submitSuccess && (
                  <div className="mb-4 p-4 bg-green-900/50 text-green-100 border border-green-400/50 rounded-lg flex items-center shadow-lg">
                    <ThumbsUp className="mr-3 text-green-300" size={20} />
                    <div>
                      <p className="font-bold">Pesan Terkirim!</p>
                      <p className="text-sm">
                        Terima kasih telah menghubungi kami. Kami akan segera
                        merespon Anda.
                      </p>
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-200 mb-2 font-medium"
                    >
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      required
                      placeholder="Nama Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-200 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      required
                      placeholder="Email Anda"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-200 mb-2 font-medium"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full p-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all"
                      required
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold hover:bg-yellow-600 text-primary-brown font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-opacity-50"
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    {!isSubmitting && <Send className="ml-2" size={18} />}
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
          <h2 className="text-3xl font-bold text-white mb-6" data-aos="fade-up">
            Siap Mengunjungi VnG?
          </h2>
          <p
            className="text-xl text-gray-200 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Buat reservasi sekarang dan nikmati pengalaman kuliner terbaik
            bersama kami
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
