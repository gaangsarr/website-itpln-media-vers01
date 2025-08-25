// pages/index.js atau app/page.js (tergantung Next.js version)
import Image from "next/image";
import Squares from "@/components/Squares";
import Link from "next/link";
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
      {/* Background Squares dengan perbaikan responsif */}
      <div className="absolute inset-0 z-0 opacity-5">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#471396"
          hoverFillColor="#ffffff"
        />
      </div>

      {/* Main Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:py-8 -translate-y-3">
          {/* Left Column - Photo Gallery */}
          <div className="space-y-4 py-7">
            {/* Top row - 2 photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.JPG"
                  alt="ITPLN Team Photo 1"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.JPG"
                  alt="ITPLN Team Photo 2"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Middle row - 2 photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.JPG"
                  alt="ITPLN Team Photo 3"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.JPG"
                  alt="ITPLN Team Photo 4"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Bottom row - 1 large photo */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/home-1.JPG"
                alt="ITPLN Team Photo 5"
                width={580}
                height={300}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 lg:space-y-1 lg:-translate-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <p className="text-purple-500 text-lg sm:text-xl font-medium translate-y-5">
                We are,
              </p>
              <h1 className="text-5xl sm:text-5xl lg:text-7xl font-black text-[#471396] leading-tight">
                ITPLN Media!
              </h1>
              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-[#471396] -translate-y-4">
                Creativity to Beyond!
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                ITPLN Media adalah Unit Kegiatan Mahasiswa yang bergerak di
                bidang media kreatif dan komunikasi. Kami hadir untuk
                mengembangkan potensi mahasiswa dalam dunia digital, mulai dari
                pembuatan konten, desain grafis, fotografi, videografi, hingga
                pengembangan website. Dengan semangat "Creativity to Beyond",
                kami berkomitmen untuk terus berinovasi dan memberikan karya
                terbaik bagi Institut Teknologi PLN dan masyarakat luas.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link href="#about">
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

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
        <div className="bg-white py-25 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Our Competencies
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Divisi-divisi unggulan ITPLN Media yang siap membantu mewujudkan
                ide kreatif Anda
              </p>
            </div>

            {/* Competency Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Social Media Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Social Media Management
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Social Media
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Strategi konten, manajemen akun, dan kampanye digital yang
                  efektif
                </p>
              </div>

              {/* Broadcasting Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Broadcasting & Audio
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Broadcasting
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Produksi audio, podcast, dan konten broadcasting berkualitas
                  tinggi
                </p>
              </div>

              {/* Photography Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Professional Photography
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Photography
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Dokumentasi event, portrait, dan foto produk dengan kualitas
                  profesional
                </p>
              </div>

              {/* Videography Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Video Production
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Videography
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Produksi video company profile, event, dan konten kreatif
                  lainnya
                </p>
              </div>

              {/* Graphic Design Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Creative Design</span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Graphic Design
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Desain logo, poster, branding, dan material visual yang
                  menarik
                </p>
              </div>

              {/* Web Development Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Modern Web Solutions
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  Web Development
                </h3>
                <p className="text-purple-100 text-center text-sm">
                  Pembuatan website modern, responsif, dan user-friendly
                </p>
              </div>
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
