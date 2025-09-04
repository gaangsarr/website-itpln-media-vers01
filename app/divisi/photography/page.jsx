import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Asymmetric Layout */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Photography Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Photo
                <br />
                <span className="text-[#471396]">graphy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Capturing moments, telling stories, creating visual narratives
                that last forever.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#471396]/10 via-purple-50 to-[#00A2B9]/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 opacity-60"></div>

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                      <div className="text-2xl font-black text-[#471396]">
                        Photography
                      </div>
                      <div className="text-gray-600">Division</div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                      <div className="text-xl font-bold text-[#471396]">
                        1000+
                      </div>
                      <div className="text-gray-600 text-sm">Projects</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-[#471396]">
                        500+
                      </div>
                      <div className="text-gray-600 text-xs">Portraits</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-[#471396]">
                        200+
                      </div>
                      <div className="text-gray-600 text-xs">Events</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-[#471396]">
                        150+
                      </div>
                      <div className="text-gray-600 text-xs">Products</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Masonry Grid Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What We Capture
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="hover:shadow-xl transition-all relative bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 rounded-3xl p-8 h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 duration-700 opacity-20"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-[#471396] mb-4">
                      Portrait & People
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Human Stories
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Capturing authentic emotions and genuine moments that tell
                      your unique story.
                    </p>
                  </div>
                  <div className="text-4xl font-black text-[#471396]/30">
                    500+ Shots
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="group cursor-pointer">
              <div className="relative bg-white border border-gray-100 rounded-3xl p-6 h-80 hover:shadow-xl transition-all duration-500">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#471396]/10 rounded-xl flex items-center justify-center mb-6">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Events
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      From intimate gatherings to large celebrations, we
                      document every precious moment.
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-[#471396]">200+</div>
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="group cursor-pointer">
              <div className="relative bg-white border border-gray-100 rounded-3xl p-6 h-64 hover:shadow-xl transition-all duration-500">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#00A2B9]/10 rounded-xl flex items-center justify-center mb-4">
                      <span className="text-2xl">📦</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Product
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Professional product photography for e-commerce and
                      catalogs.
                    </p>
                  </div>
                  <div className="text-xl font-bold text-[#471396]">150+</div>
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="hover:shadow-xl transition-all relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 h-64 overflow-hidden">
                <div className="h-full flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Architecture & Spaces
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Showcasing the beauty of architectural design and interior
                      spaces with perfect lighting and composition.
                    </p>
                    <div className="mt-6">
                      <span className="text-2xl font-bold text-[#471396]">
                        100+ Buildings
                      </span>
                    </div>
                  </div>
                  <div className="text-6xl opacity-20">🏢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Gallery</h2>
            <p className="text-gray-600">
              A curated selection of our finest work
            </p>
          </div>

          <div className="grid grid-cols-12 grid-rows-8 gap-4 h-screen">
            <div className="col-span-4 row-span-5 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gray-300 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500">Large Portrait</span>
              </div>
            </div>
            <div className="col-span-3 row-span-3 bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Event</span>
              </div>
            </div>
            <div className="col-span-5 row-span-4 bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500">Featured Work</span>
              </div>
            </div>
            <div className="col-span-3 row-span-3 bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product</span>
              </div>
            </div>
            <div className="col-span-5 row-span-4 bg-gray-300 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500">Architecture</span>
              </div>
            </div>
            <div className="col-span-4 row-span-3 bg-gradient-to-br from-[#00A2B9]/10 to-transparent rounded-2xl overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                <span className="text-gray-500">Wedding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">
            Let's Create
            <br />
            <span className="text-[#471396]">Something Beautiful</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Every story deserves to be told through the perfect frame.
          </p>

          <a
            href="https://wa.me/6285732705272"
            target="_blank"
            className="inline-flex items-center gap-4 bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 group"
          >
            <span>Book Session</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
