"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

// Animation wrapper component
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
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? currentAnimation.animate : currentAnimation.initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollAnimationWrapper animation="fadeInUp">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
            Pendaftaran Dibuka
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Open Recruitment
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              ITPLN Media
            </span>
            <span className="text-4xl md:text-5xl font-medium text-gray-600">
              Batch 19
            </span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={400}>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan organisasi mahasiswa terdepan di bidang media
            kreatif dan teknologi. Kembangkan potensimu bersama tim yang
            passionate dan inovatif.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="https://forms.gle/idwR6VyRT5h5JZ3a8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/oprec-19/pengumuman">
              <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                Pengumuman
              </button>
            </Link>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeIn" delay={800}>
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Anggota Aktif", icon: Users },
    { number: "99+", label: "Project Selesai", icon: Target },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="scaleIn"
              delay={index * 200}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section
      id="tentang"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper animation="fadeInLeft">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tentang
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  ITPLN Media
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ITPLN Media adalah organisasi mahasiswa yang fokus pada
                pengembangan kemampuan di bidang media kreatif dan teknologi
                informasi. Kami memiliki divisi lengkap yang siap mengembangkan
                potensi setiap anggotanya.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Pengembangan skill yang komprehensif
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Networking dengan profesional industri
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">
                    Portfolio project yang impresif
                  </span>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fadeInRight">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Mengapa Bergabung?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    Mentorship dari senior berpengalaman
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    Project real dengan client sesungguhnya
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    Sertifikat dan pengakuan prestasi
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

// Divisions Section
const DivisionsSection = () => {
  const divisions = [
    {
      title: "Program Director",
      description:
        "Memimpin perencanaan dan eksekusi program organisasi secara strategis",
      icon: "🎯",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Creative Director",
      description:
        "Mengarahkan visi kreatif dan memastikan kualitas output visual",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Marketing Communication",
      description: "Mengelola strategi komunikasi dan branding organisasi",
      icon: "📢",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section id="divisi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pilih{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Divisimu
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga divisi unggulan yang membuka kesempatan untuk mengembangkan
              potensi kepemimpinan dan kreativitasmu
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 200}
            >
              <div className="group p-8 rounded-3xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${division.color} rounded-2xl mb-6 text-2xl`}
                >
                  {division.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {division.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {division.description}
                </p>
                <div
                  className={`h-1 w-0 bg-gradient-to-r ${division.color} rounded-full group-hover:w-full transition-all duration-500`}
                ></div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timeline = [
    { date: "16-23 September", title: "Pendaftaran", status: "active" },
    { date: "TBA", title: "Coming Soon", status: "upcoming" },
    { date: "TBA", title: "Coming Soon", status: "upcoming" },
  ];

  return (
    <section
      id="timeline"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Timeline{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Recruitment
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Jangan sampai terlewat tahapan penting berikut
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeline.map((item, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="fadeInUp"
              delay={index * 150}
            >
              <div className="text-center relative timeline-item">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 relative z-10 ${
                    item.status === "active"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.date}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollAnimationWrapper animation="fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Siap Bergabung dengan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Jangan lewatkan kesempatan untuk menjadi bagian dari ITPLN Media
            Batch 19
          </p>
          <Link href="https://forms.gle/idwR6VyRT5h5JZ3a8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

// Main Home Component - Tanpa Navbar dan Footer
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <DivisionsSection />
      <TimelineSection />
      <CTASection />
    </main>
  );
}
