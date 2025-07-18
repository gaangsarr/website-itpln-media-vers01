import React from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

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
            <h1 className="text-5xl sm:text-5xl lg:text-9xl font-bold text-black mb-8 leading-tight">
              <span className="text-purple-600">N</span>ATIONAL
              <br />
              <span className="text-purple-600">C</span>REATIVE
              <br />
              <span className="text-purple-600">C</span>OMPETITION.
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Apa itu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                National Creative Competition
              </span>
            </h2>
          </div>

          {/* Logo */}
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

          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                National Creative Competition adalah kompetisi kreativitas
                tingkat nasional yang diselenggarakan untuk memberikan wadah
                bagi para kreator muda Indonesia untuk mengekspresikan bakat dan
                inovasi mereka di berbagai bidang kreatif.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Melalui tiga kategori utama - Poster, Instagram Reels, dan UI
                Design - kompetisi ini bertujuan untuk mengembangkan potensi
                kreatif generasi muda dan memberikan pengalaman kompetitif yang
                berharga dalam industri kreatif.
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
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
          {/* Left side - Logo/Image */}
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

          {/* Right side - Content */}
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
                  Pada tahun 2025, NCC mengusung tema besar “Nuklir: Energi
                  Kreativitas Masa Depan”, dengan fokus pada eksplorasi Data
                  Science untuk kebutuhan energi bersih berbasis nuklir. Tema
                  ini membuka ruang bagi peserta untuk menggali ide dan
                  menyampaikan pesan edukatif melalui media kreatif yang
                  inovatif dan informatif.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Dengan tiga kategori utama—Poster Design, Instagram Reels, dan
                  UI Design—NCC 2025 terbuka bagi pelajar, mahasiswa, dan
                  masyarakat umum dari seluruh Indonesia. Kompetisi ini
                  diharapkan dapat menjadi platform kompetitif yang positif
                  serta penghubung antara kreativitas dan kontribusi nyata bagi
                  masa depan energi bangsa.
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
        </div>
      </div>

      {/* Competition List Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          List of Competition
        </h2>

        <div className="space-y-4">
          {/* Poster Competition */}
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

          {/* Instagram Reels Competition */}
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

          {/* UI Design Competition */}
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
        </div>
      </div>

      {/* Key Dates Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Dates</h2>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">
                17 Juli - 1 Agustus 2025:
              </h3>
              <p className="text-purple-100">Pendaftaran Karya Batch 1</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">2 - 4 Agustus 2025:</h3>
              <p className="text-purple-100">Pendaftaran Karya Batch 2</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">30 - 31 Agustus 2025:</h3>
              <p className="text-purple-100">Pengumpulan Karya Batch 1 & 2</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">1 - 12 September 2025:</h3>
              <p className="text-purple-100">Penilaian & Kurasi Karya</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">15 September 2025:</h3>
              <p className="text-purple-100">Awarding & Seminar Nasional</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Calling Out Sponsors and Partners
        </h2>

        <div className="text-center mb-8">
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            We are open to sponsorship and partnership opportunities. If you are
            interested in collaborating with us, please reach out via the
            contact information below.
          </p>
        </div>

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
      </div>

      {/* More Information Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:items-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          More Information
        </h2>

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
      </div>
      <Footer />
    </div>
  );
};

export default NCCLandingPage;
