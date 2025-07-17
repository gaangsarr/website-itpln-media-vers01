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
            {" "}
            {/* Tambahkan w-full agar div mengambil lebar penuh di dalam flex container */}
            <h1 className="text-5xl sm:text-5xl lg:text-9xl font-bold text-black mb-8">
              NATIONAL
              <br />
              CREATIVE
              <br />
              COMPETITION.
            </h1>
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
              <p className="text-purple-100">
                Pendaftaran & Pengumpulan Karya Batch 1
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                30 Juli - 31 Juli 2025:
              </h3>
              <p className="text-purple-100">
                Pendaftaran & Pengumpulan Karya Batch 2
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">
                1 Agustus - 14 Agustus 2025:
              </h3>
              <p className="text-purple-100">Penjurian</p>
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
