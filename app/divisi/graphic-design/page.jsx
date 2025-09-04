import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Graphic Design Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Graphic
                <br />
                <span className="text-[#471396]">Design</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Creating visual identities and compelling designs that
                communicate your brand's unique story.
              </p>
              <div className="flex gap-6">
                <a
                  href="#portfolio"
                  className="group flex items-center gap-3 text-[#471396] font-semibold"
                >
                  <span>View Designs</span>
                  <div className="w-8 h-8 bg-[#471396]/10 rounded-full flex items-center justify-center group-hover:bg-[#471396] group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Design Elements */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 h-96">
                <div className="space-y-4">
                  <div className="bg-[#471396] rounded-2xl h-20 flex items-center justify-center">
                    <span className="text-white font-bold">LOGO</span>
                  </div>
                  <div className="bg-gradient-to-br from-[#00A2B9]/20 to-transparent rounded-2xl h-32"></div>
                  <div className="bg-gray-100 rounded-2xl h-24"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-[#471396]/20 to-transparent rounded-2xl h-28"></div>
                  <div className="bg-[#00A2B9] rounded-2xl h-16 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">BRAND</span>
                  </div>
                  <div className="bg-gray-200 rounded-2xl h-20"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-2xl h-24"></div>
                  <div className="bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl h-36"></div>
                  <div className="bg-[#471396]/10 rounded-2xl h-16"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#471396]">400+</div>
                  <div className="text-xs text-gray-500">Designs</div>
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
              Design Services
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎨",
                title: "Logo Design",
                description:
                  "Memorable brand marks that represent your company's identity",
              },
              {
                icon: "📘",
                title: "Brand Identity",
                description:
                  "Complete visual identity systems including guidelines and assets",
              },
              {
                icon: "📄",
                title: "Print Design",
                description:
                  "Brochures, flyers, business cards, and marketing materials",
              },
              {
                icon: "💻",
                title: "Digital Design",
                description:
                  "Web graphics, social media content, and digital advertisements",
              },
              {
                icon: "📦",
                title: "Packaging",
                description:
                  "Product packaging that stands out on shelves and online",
              },
              {
                icon: "🎪",
                title: "Event Graphics",
                description:
                  "Banners, signage, and promotional materials for events",
              },
              {
                icon: "📚",
                title: "Editorial Design",
                description:
                  "Magazine layouts, book covers, and publication design",
              },
              {
                icon: "🏢",
                title: "Corporate Design",
                description:
                  "Annual reports, presentations, and corporate communications",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-[#471396]/20 hover:shadow-lg transition-all duration-500">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600">
              A collection of our most creative design solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 bg-gray-300 sm:group-hover:scale-105 sm:transition-transform sm:duration-700 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Design {item}</span>
                  </div>
                  <div className="absolute inset-0 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500 bg-[#471396]/90 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-sm font-bold mb-1">Project Name</div>
                      <div className="text-xs opacity-80">Brand Identity</div>
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
            Let's Design
            <br />
            <span className="text-[#471396]">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Transform your brand with creative design solutions that make an
            impact.
          </p>

          <a
            href="https://wa.me/6285732705272"
            target="_blank"
            className="inline-flex items-center gap-4 bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 group"
          >
            <span>Start Design</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
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
