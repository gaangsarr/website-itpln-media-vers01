import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BroadcastingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Broadcasting Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Broad
                <br />
                <span className="text-[#471396]">casting</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Creating compelling audio experiences and podcast content that
                resonates with your audience.
              </p>
              <div className="flex gap-6">
                <a
                  href="#services"
                  className="group flex items-center gap-3 text-[#471396] font-semibold"
                >
                  <span>Listen Now</span>
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

            {/* Audio Visualizer */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="flex items-end space-x-2">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-[#471396] rounded-full animate-pulse"
                      style={{
                        width: "8px",
                        height: `${Math.random() * 60 + 20}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#471396]">100+</div>
                  <div className="text-xs text-gray-500">Episodes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Our Audio Services
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Podcast Production",
                description:
                  "End-to-end podcast creation from concept to distribution across all major platforms.",
              },
              {
                number: "02",
                title: "Audio Editing",
                description:
                  "Professional audio post-production with crystal clear sound quality and seamless transitions.",
              },
              {
                number: "03",
                title: "Voice Over",
                description:
                  "Professional voice recording services for commercials, documentaries, and corporate content.",
              },
              {
                number: "04",
                title: "Radio Shows",
                description:
                  "Live and recorded radio programming with engaging content and smooth delivery.",
              },
              {
                number: "05",
                title: "Audio Branding",
                description:
                  "Custom jingles, sound effects, and audio identities that represent your brand.",
              },
              {
                number: "06",
                title: "Live Streaming",
                description:
                  "Professional live audio streaming setup and management for events and shows.",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#471396]/20 hover:shadow-lg transition-all duration-500">
                  <div className="text-[#471396]/30 text-5xl font-black mb-6 group-hover:text-[#471396]/50 transition-colors duration-300">
                    {service.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Featured Shows
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Listen to our latest podcast episodes and radio show highlights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gray-200 sm:group-hover:scale-105 sm:transition-transform sm:duration-700 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#471396]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Episode Title
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Podcast • 45 minutes
                      </p>
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
            Ready to Create
            <br />
            <span className="text-[#471396]">Audio Magic?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's bring your audio vision to life with professional broadcasting
            services.
          </p>

          <a
            href="https://wa.me/6285732705272"
            target="_blank"
            className="inline-flex items-center gap-4 bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 group"
          >
            <span>Start Recording</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
