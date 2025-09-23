"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Strikethrough } from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

// Custom hook untuk scroll animations
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Komponen wrapper untuk animasi
const ScrollAnimationWrapper = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeInUp",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const animations = {
    fadeInUp: {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    fadeInLeft: {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    fadeInRight: {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    fadeIn: {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    scaleIn: {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  };

  const currentAnimation = animations[animation] || animations.fadeInUp;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? currentAnimation.animate : currentAnimation.initial
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

const NCCLandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/yellow-line-ncc.png"
            alt="Yellow Design Element"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-screen flex items-center">
          <div className="text-left lg:text-left lg:max-w-2xl w-full">
            <ScrollAnimationWrapper animation="fadeInUp">
              <h1 className="text-5xl sm:text-5xl lg:text-9xl font-bold text-black mb-8 leading-tight">
                <span className="text-purple-600">N</span>ATIONAL
                <br />
                <span className="text-purple-600">C</span>REATIVE
                <br />
                <span className="text-purple-600">C</span>OMPETITION.
              </h1>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Title */}
          <ScrollAnimationWrapper animation="fadeInUp">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Apa itu{" "}
                <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  National Creative Competition
                </span>
              </h2>
            </div>
          </ScrollAnimationWrapper>

          {/* Logo */}
          <ScrollAnimationWrapper animation="scaleIn" delay={200}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-110"></div>
                <div className="relative w-48 sm:w-64 aspect-[3/4]">
                  <img
                    src="/logo-ncc.png"
                    alt="Logo NCC"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Content */}
          <ScrollAnimationWrapper animation="fadeInUp" delay={400}>
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  National Creative Competition adalah kompetisi kreativitas
                  tingkat nasional yang diselenggarakan untuk memberikan wadah
                  bagi para kreator muda Indonesia untuk mengekspresikan bakat
                  dan inovasi mereka di berbagai bidang kreatif.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Melalui tiga kategori utama - Poster, Instagram Reels, dan UI
                  Design - kompetisi ini bertujuan untuk mengembangkan potensi
                  kreatif generasi muda dan memberikan pengalaman kompetitif
                  yang berharga dalam industri kreatif.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Bergabunglah dengan ribuan peserta dari seluruh Indonesia dan
                  tunjukkan kreativitas terbaikmu. Raih kesempatan untuk
                  memenangkan hadiah menarik dan dapatkan pengakuan di tingkat
                  nasional.
                </p>
              </div>

              {/* Stats or highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center w-full">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                    3
                  </div>
                  <div className="text-sm text-purple-600">Kategori</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center w-full">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-700">
                    XXJT+
                  </div>
                  <div className="text-sm text-yellow-600">Total Hadiah</div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left side - Logo/Image */}
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-2xl opacity-20 scale-110"></div>
                <div className="relative w-[300px] aspect-[3/4]">
                  <img
                    src="/logo-ncc.png"
                    alt="Logo NCC"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right side - Content */}
          <ScrollAnimationWrapper animation="fadeInRight">
            <div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Apa itu <br />
                    <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                      National Creative Competition
                    </span>
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    National Creative Competition (NCC) merupakan kompetisi
                    tahunan berskala nasional yang diselenggarakan oleh ITPLN
                    Media sebagai wadah pengembangan bakat kreatif generasi muda
                    Indonesia. Melalui pendekatan digital dan visual, NCC hadir
                    untuk mendorong lahirnya karya-karya inspiratif yang relevan
                    dengan isu-isu masa kini.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Pada tahun 2025, NCC mengusung tema besar "Nuklir: Energi
                    Kreativitas Masa Depan", dengan fokus pada eksplorasi Data
                    Science untuk kebutuhan energi bersih berbasis nuklir. Tema
                    ini membuka ruang bagi peserta untuk menggali ide dan
                    menyampaikan pesan edukatif melalui media kreatif yang
                    inovatif dan informatif.
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    Dengan tiga kategori utama—Poster Design, Instagram Reels,
                    dan UI Design—NCC 2025 terbuka bagi pelajar, mahasiswa, dan
                    masyarakat umum dari seluruh Indonesia. Kompetisi ini
                    diharapkan dapat menjadi platform kompetitif yang positif
                    serta penghubung antara kreativitas dan kontribusi nyata
                    bagi masa depan energi bangsa.
                  </p>
                </div>

                {/* Stats or highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                      3
                    </div>
                    <div className="text-sm text-purple-600">Kategori</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center col-span-2 sm:col-span-1">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-700">
                      XXJT+
                    </div>
                    <div className="text-sm text-yellow-600">Total Hadiah</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Competition List Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">
            List of Competition
          </h2>
        </ScrollAnimationWrapper>

        <div className="space-y-4">
          {/* Poster Competition */}
          <ScrollAnimationWrapper animation="fadeInLeft" delay={0}>
            <a
              href="/ncc/poster"
              className="block bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold">Poster</span>
                <div className="bg-yellow-400 rounded-full p-3">
                  <ArrowRight className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </a>
          </ScrollAnimationWrapper>

          {/* Instagram Reels Competition */}
          <ScrollAnimationWrapper animation="fadeInRight" delay={100}>
            <a
              href="/ncc/reels"
              className="block bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold">
                  Instagram Reels
                </span>
                <div className="bg-yellow-400 rounded-full p-3">
                  <ArrowRight className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </a>
          </ScrollAnimationWrapper>

          {/* UI Design Competition */}
          <ScrollAnimationWrapper animation="fadeInLeft" delay={200}>
            <a
              href="/ncc/ui-design"
              className="block bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold">UI Design</span>
                <div className="bg-yellow-400 rounded-full p-3">
                  <ArrowRight className="w-6 h-6 text-purple-700" />
                </div>
              </div>
            </a>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Key Dates Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-12">Key Dates</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                {
                  event: "Pendaftaran Karya Batch 1",
                  date: "17 Juli - 1 Agustus 2025",
                  delay: 0,
                  strikethrough: true,
                },
                {
                  event: "Pendaftaran Karya Batch 2",
                  date: "2 - 14 Agustus 2025",
                  delay: 100,
                  strikethrough: true,
                },
                {
                  event: "Pendaftaran Karya EXTENDED",
                  date: "15 - 24 Agustus 2025",
                  delay: 200,
                  highlight: false,
                  strikethrough: true,
                },
                {
                  event: "Pendaftaran LAST CALL",
                  date: "30 Agustus - 10 September 2025",
                  delay: 300,
                  strikethrough: true,
                },
                {
                  event: "Pengumpulan Karya",
                  date: "12 - 13 September 2025",
                  delay: 400,
                  strikethrough: true,
                },
                {
                  event: "Penilaian & Kurasi Karya",
                  date: "15 - 25 September 2025",
                  delay: 500,
                  highlight: true,
                },
                {
                  event: "Awarding & Seminar Nasional NCC 2025",
                  date: "29 September 2025",
                  delay: 600,
                },
              ].map((item, index) => (
                <ScrollAnimationWrapper
                  key={index}
                  animation="fadeInLeft"
                  delay={item.delay}
                >
                  {item.highlight ? (
                    <div
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 ${
                        item.highlight
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-lg transform scale-105"
                          : item.strikethrough
                          ? "bg-gray-50 opacity-60"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 ${
                          item.highlight
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                            : item.strikethrough
                            ? "bg-gray-400"
                            : "bg-purple-600"
                        }`}
                      />
                      <div className="flex-1">
                        <h3
                          className={`font-bold transition-all duration-300 ${
                            item.highlight
                              ? "text-xl text-purple-800 font-extrabold"
                              : item.strikethrough
                              ? "text-lg text-gray-500 line-through"
                              : "text-lg text-gray-800"
                          }`}
                        >
                          {item.event}
                          {item.highlight && (
                            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse">
                              NOW!
                            </span>
                          )}
                        </h3>
                        <p
                          className={`mt-1 ${
                            item.highlight
                              ? "text-purple-600 font-semibold"
                              : item.strikethrough
                              ? "text-gray-400 line-through"
                              : "text-gray-600"
                          }`}
                        >
                          {item.date}
                        </p>
                        {item.highlight && (
                          <div className="mt-2 flex items-center space-x-2">
                            <span className="text-sm text-purple-700 font-medium">
                              SAMPAI BERTEMU DI ACARA PUNCAK NCC 2025
                            </span>
                          </div>
                        )}
                      </div>
                      {item.highlight && (
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                            <span className="text-white text-xl">🎯</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                        item.highlight
                          ? "bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 shadow-lg transform scale-105"
                          : item.strikethrough
                          ? "bg-gray-50 opacity-60"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-4 h-4 rounded-full mt-1 ${
                          item.highlight
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                            : item.strikethrough
                            ? "bg-gray-400"
                            : "bg-purple-600"
                        }`}
                      />
                      <div className="flex-1">
                        <h3
                          className={`font-bold transition-all duration-300 ${
                            item.highlight
                              ? "text-xl text-purple-800 font-extrabold"
                              : item.strikethrough
                              ? "text-lg text-gray-500 line-through"
                              : "text-lg text-gray-800"
                          }`}
                        >
                          {item.event}
                          {item.highlight && (
                            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white animate-pulse">
                              NOW!
                            </span>
                          )}
                        </h3>
                        <p
                          className={`mt-1 ${
                            item.highlight
                              ? "text-purple-600 font-semibold"
                              : item.strikethrough
                              ? "text-gray-400 line-through"
                              : "text-gray-600"
                          }`}
                        >
                          {item.date}
                        </p>
                        {item.highlight && (
                          <div className="mt-2 flex items-center space-x-2">
                            <span className="text-sm text-purple-700 font-medium">
                              KUMPULKAN KARYA TERBAIKMU SEKARANG!!!
                            </span>
                          </div>
                        )}
                      </div>
                      {item.highlight && (
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                            <span className="text-white text-xl">🎯</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Seminar & Awarding NCC 2025 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-8">
            Seminar & Awarding NCC 2025
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Join us for an inspiring seminar featuring industry experts and
              witness the prestigious NCC 2025 Awards Ceremony. One registration
              for both amazing experiences - educational insights and
              celebration of excellence!
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Highlights Grid */}
        <ScrollAnimationWrapper animation="fadeInUp" delay={300}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <h4 className="font-bold text-blue-700 mb-2">Expert Speakers</h4>
              <p className="text-sm text-gray-600">
                Learn from industry leaders and tech innovators
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🤝</span>
              </div>
              <h4 className="font-bold text-purple-700 mb-2">Networking</h4>
              <p className="text-sm text-gray-600">
                Connect with creators, winners, and professionals
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">🏆</span>
              </div>
              <h4 className="font-bold text-yellow-700 mb-2">Awards Show</h4>
              <p className="text-sm text-gray-600">
                Celebrate creative excellence and innovation
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="scaleIn" delay={400}>
          <div className="text-center">
            <a
              href="/ncc/daftar-seminar"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join the Event
              </button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Affiliate */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-8">Affiliate</h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Invite others to join NCC 2025 using your referral code. For every
              successful registration, you'll earn commissions. Let's grow
              together—start sharing now!
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="scaleIn" delay={400}>
          <div className="text-center">
            <a
              href="/ncc/affiliates"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register
              </button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* Sponsors Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-8">
            Calling Out Sponsors and Partners
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We are open to sponsorship and partnership opportunities. If you
              are interested in collaborating with us, please reach out via the
              contact information below.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="scaleIn" delay={400}>
          <div className="text-center">
            <a
              href="https://wa.me/6281383435345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Reach out to us!
              </button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* More Information Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:items-center">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-3xl font-bold text-center mb-8">
            More Information
          </h2>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="scaleIn" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Tombol Instagram */}
            <a
              href="https://www.instagram.com/itplnmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Instagram
              </button>
            </a>

            {/* Tombol Contact Person (WhatsApp) */}
            <a
              href="https://wa.me/6289513050951"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Person
              </button>
            </a>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <Footer />
      {/* Developer Credit */}
      {/* <div className="bg-gray-50 border-t border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href={"instagram.com/gaangsarr"} target="_blank">
            <p className="text-xs text-gray-500">
              Built with ⚡ by{" "}
              <span className="font-medium text-gray-600">
                Gangsar Anjasmoro
              </span>{" "}
              • 2025
            </p>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default NCCLandingPage;
