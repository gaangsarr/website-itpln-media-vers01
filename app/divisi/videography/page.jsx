import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function VideographyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Videography Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Video
                <br />
                <span className="text-[#471396]">graphy</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Crafting cinematic stories through compelling video production
                and post-production excellence.
              </p>
              <div className="flex gap-6">
                <a
                  href="#portfolio"
                  className="group flex items-center gap-3 text-[#471396] font-semibold"
                >
                  <span>Watch Reel</span>
                  <div className="w-8 h-8 bg-[#471396]/10 rounded-full flex items-center justify-center group-hover:bg-[#471396] group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Video Player Mockup */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-[#471396] ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#471396]">300+</div>
                  <div className="text-xs text-gray-500">Videos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Video Production
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                {
                  title: "Corporate Videos",
                  desc: "Professional company profiles and promotional content",
                },
                {
                  title: "Event Coverage",
                  desc: "Complete documentation of conferences, seminars, and celebrations",
                },
                {
                  title: "Product Videos",
                  desc: "Showcase your products with stunning visual storytelling",
                },
                {
                  title: "Documentaries",
                  desc: "In-depth storytelling for educational and commercial purposes",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 group cursor-pointer p-4 rounded-2xl hover:bg-white/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#471396]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#471396] group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <span className="text-2xl group-hover:grayscale group-hover:contrast-200">
                      🎬
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#471396] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#471396]/5 to-[#00A2B9]/5 rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="text-6xl font-black text-[#471396] mb-4">
                  500+
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  Hours of Content
                </div>
                <div className="text-gray-600 mb-8">
                  From 30-second commercials to feature-length documentaries,
                  we've produced content of all scales.
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#471396]">4K</div>
                    <div className="text-gray-600 text-sm">Resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#471396]">
                      60fps
                    </div>
                    <div className="text-gray-600 text-sm">Frame Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600">
              A showcase of our latest video productions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gray-300 sm:group-hover:scale-105 sm:transition-transform sm:duration-700 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#471396]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        Project Title
                      </h3>
                      <p className="text-gray-600 text-xs">Corporate • 2:30</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">
            Let's Create
            <br />
            <span className="text-[#471396]">Visual Stories</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Bring your vision to life with professional video production
            services.
          </p>

          <a
            href="https://wa.me/6285732705272"
            target="_blank"
            className="inline-flex items-center gap-4 bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 group"
          >
            <span>Start Production</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
