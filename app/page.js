// pages/index.js atau app/page.js (tergantung Next.js version)
import Image from "next/image";
import Squares from "@/components/Squares";
import Link from "next/link";
import FullScreenCarouselTW from "@/components/FullScreenCarouselTW";
import FadeInSection from "@/components/FadeInSection";
import { getLatestArticles } from "@/lib/articles";
import { getLatestTestimonials } from "@/lib/testimonials";
import ArticleCard from "@/components/ArticleCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";

export default async function Home() {
  const latestArticles = await getLatestArticles(3);
  const latestTestimonials = await getLatestTestimonials(6);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* HERO: Carousel full-screen menggantikan grid 5 foto */}
      <section className="relative z-10">
        <FullScreenCarouselTW auto interval={5000} />
        {/* Overlay heading/CTA di atas carousel */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-purple-200 text-lg font-medium">We are,</p>
            <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              ITPLN Media!
            </h1>
            <h2 className="text-purple-100 text-2xl lg:text-3xl font-semibold mt-2">
              Creativity to Beyond!
            </h2>
            <div className="mt-6">
              <a
                href="#about"
                className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <div className="relative z-10" id="about">
        <div className="bg-[#F8F8F8] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* About Us Header */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#471396] mb-4">
                About us
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Wadah Kreativitas Mahasiswa
                <br />
                Institut Teknologi <span className="text-[#00A2B9]">PLN</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-4xl mx-auto leading-relaxed">
                ITPLN Media berdiri sebagai organisasi mahasiswa yang fokus pada
                pengembangan kemampuan di bidang media kreatif dan teknologi
                informasi. Kami memiliki divisi yang lengkap mulai dari Social
                Media, Broadcasting, Photography, Videography, Graphic Design,
                hingga Web Development. Setiap anggota kami dibekali dengan
                skill yang mumpuni untuk menghadapi tantangan dunia digital yang
                terus berkembang. Bersama ITPLN Media, mari wujudkan kreativitas
                tanpa batas!
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Active Members</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  99+
                </div>
                <div className="text-gray-600 font-medium">Projects Done</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  30+
                </div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Competencies */}
      <div className="relative z-10" id="competencies">
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Our Competencies
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Keahlian unggulan ITPLN Media yang siap membantu mewujudkan ide
                kreatif Anda
              </p>
            </div>

            {/* Competency Cards - New Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Social Media Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Social Media
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai strategi konten dan manajemen media sosial
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Broadcasting Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" />
                        <path d="M12 6a6 6 0 106 6 6.007 6.007 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Broadcasting
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai konten audio dan podcast berkualitas untuk
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Photography Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.25 2.1l-.9 1.2c-.4.5-1 .8-1.6.8H9c-.6 0-1.2-.3-1.6-.8l-.9-1.2c-.4-.5-1-.8-1.6-.8H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-1.9c-.6 0-1.2.3-1.6.8zM12 16c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Photography
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai dokumentasi visual profesional untuk Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Videography Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Videography
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai produksi video kreatif dan berkualitas untuk
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Graphic Design Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Graphic Design
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai desain visual dan branding terbaik untuk
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Web Development Card */}
              <Link href={"/not-found"}>
                <div className="bg-[#471396] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 13H5V6h14v10z" />
                        <path d="M7 8l2 2-2 2v1h2l2-2-2-2V8H7zm4 4h4v1h-4v-1z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Web Development
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Menyuplai solusi website modern dan responsif untuk
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="relative z-10" id="artikel">
        <div className="bg-[#F8F8F8] py-25 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Artikel Terbaru
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Baca artikel terbaru dari ITPLN Media tentang berbagai topik
                menarik seputar teknologi, kreativitas, dan dunia digital
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {latestArticles.length > 0 ? (
                latestArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Belum ada artikel tersedia
                  </p>
                </div>
              )}
            </div>

            {/* View All Articles Button */}
            <div className="text-center">
              <Link href="/artikel">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base">
                  Lihat Semua Artikel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10" id="testimoni">
        <div className="bg-white py-25 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Testimoni
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Apa yang klien dan partner katakan tentang kualitas kerja ITPLN
                Media
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {latestTestimonials.length > 0 ? (
                latestTestimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Belum ada testimoni tersedia
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rate Card Section */}
      <div className="relative z-10" id="ratecard">
        <div className="bg-[#F8F8F8] py-25 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Rate Card
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Paket layanan ITPLN Media dengan harga terjangkau untuk berbagai
                kebutuhan kreatif Anda
              </p>
            </div>

            {/* Coming Soon Message */}
            <div className="text-center py-12">
              <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-600 mb-4">
                  Rate card kami sedang dalam tahap finalisasi. Untuk konsultasi
                  gratis dan penawaran khusus, silakan hubungi kami langsung.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/6285732705272"
                    target="_blank"
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-block"
                  >
                    WhatsApp Kami
                  </a>
                  <a
                    href="https://www.instagram.com/itplnmedia/"
                    target="_blank"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
                  >
                    Instagram Kami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
