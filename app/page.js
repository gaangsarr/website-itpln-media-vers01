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
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 1"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
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
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 3"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
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
                src="/home-1.jpg"
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu genean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="relative z-10">
        <div className="bg-[#F8F8F8] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* About Us Header */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#471396] mb-4">
                About us
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Lorem ipsum dolor sit amet
                <br />
                consectetur <span className="text-purple-500">
                  adipiscing
                </span>{" "}
                elit.
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-4xl mx-auto leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu genean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  70+
                </div>
                <div className="text-gray-600 font-medium">Members</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  70+
                </div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  70+
                </div>
                <div className="text-gray-600 font-medium">Awards</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-[#471396] mb-2">
                  70+
                </div>
                <div className="text-gray-600 font-medium">Clients</div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] text-center mb-12">
              Our Competencies
            </h2>

            {/* Competency Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Social Media Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Social Media
                </h3>
              </div>

              {/* Broadcasting Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Broadcasting
                </h3>
              </div>

              {/* Photography Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Photography
                </h3>
              </div>

              {/* Videography Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Videography
                </h3>
              </div>

              {/* Graphic Design Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Graphic Design
                </h3>
              </div>

              {/* Web Development Card */}
              <div className="bg-gradient-to-br from-[#471396] to-purple-600 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="bg-gray-300 rounded-2xl h-48 mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">
                    Image Placeholder
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white text-center">
                  Web Development
                </h3>
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
                menarik
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
                Apa yang mereka katakan tentang ITPLN Media
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
        <div className="bg-white py-25 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#471396] mb-4">
                Rate Card
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                Belum ada rate card yang tersedia.
              </p>
            </div>

            {/* Rate Cards Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"> */}
            {/* Social Media Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    Social Media
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    Rp. 500.000
                  </div>
                  <div className="text-gray-500 text-sm">per bulan</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Content Planning & Strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    15 Feed Posts per bulan
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Instagram Stories
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Basic Analytics Report
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}

            {/* Photography Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    Photography
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    Rp. 750.000
                  </div>
                  <div className="text-gray-500 text-sm">per project</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    4 Hours Photo Session
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    50+ Edited Photos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    High Resolution Files
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Online Gallery Access
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}

            {/* Videography Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    Videography
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    Rp. 1.500.000
                  </div>
                  <div className="text-gray-500 text-sm">per project</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Full Day Shooting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Professional Editing
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    4K Video Quality
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Color Grading & Audio
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}

            {/* Graphic Design Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    TBA
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    TBA
                  </div>
                  <div className="text-gray-500 text-sm">TBA</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TBA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TBA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TBA
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    TBA
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}

            {/* Web Development Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    Web Development
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    Rp. 2.500.000
                  </div>
                  <div className="text-gray-500 text-sm">per project</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Modern Framework
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    SEO Optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    3 Months Support
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}

            {/* Event Organizer Package */}
            {/* <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-purple-600 text-lg font-semibold mb-2">
                    Event Organizer
                  </h3>
                  <div className="text-3xl font-bold text-[#471396] mb-1">
                    Rp. 5.000.000
                  </div>
                  <div className="text-gray-500 text-sm">per event</div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Event Planning & Coordination
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Venue Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Documentation Team
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Post-Event Report
                  </li>
                </ul>
                <button className="w-full bg-[#471396] text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Contact
                </button>
              </div> */}
            {/* </div> */}

            {/* Custom Package CTA */}
            {/* <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Butuh paket khusus? Hubungi kami untuk konsultasi gratis
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-base">
                Konsultasi Gratis
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
