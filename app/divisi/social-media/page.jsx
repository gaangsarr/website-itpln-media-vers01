import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Social Media Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Social
                <br />
                <span className="text-[#471396]">Media</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Crafting digital narratives that connect, engage, and inspire
                communities through strategic social media presence.
              </p>
              <div className="flex gap-6">
                <a
                  href="#work"
                  className="group flex items-center gap-3 text-[#471396] font-semibold"
                >
                  <span>View Work</span>
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#471396]/20 to-transparent rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#471396] rounded-lg"></div>
                    <div className="flex-1 h-4 bg-gray-100 rounded"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 rounded-2xl"></div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-3 bg-gray-100 rounded"></div>
                    <div className="w-16 h-3 bg-[#471396]/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Minimal Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="work">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              What We Do
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Strategy",
                description:
                  "Data-driven social media strategies that align with your brand objectives and audience behavior.",
              },
              {
                number: "02",
                title: "Creation",
                description:
                  "Compelling visual content and copy that tells your brand story across all social platforms.",
              },
              {
                number: "03",
                title: "Management",
                description:
                  "End-to-end social media management including posting, engagement, and community building.",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-[#471396]/20 hover:shadow-lg transition-all duration-500">
                  <div className="text-[#471396]/30 text-6xl font-black mb-6 group-hover:text-[#471396]/50 transition-colors duration-300">
                    {service.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
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

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "2.5M+", label: "Total Reach" },
              { number: "85%", label: "Engagement Rate" },
              { number: "50+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-black text-[#471396] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Recent Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of our latest social media campaigns and content
              strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#471396]/10 to-[#00A2B9]/10 aspect-[4/3]">
                  <div className="absolute inset-0 bg-gray-200 sm:group-hover:scale-105 sm:transition-transform sm:duration-700 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">
                      Project {item}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 sm:transition-transform sm:duration-500">
                      <h3 className="font-bold text-gray-900 mb-1">
                        Campaign Title
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Brand Identity • Social Strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">
            Ready to Amplify
            <br />
            Your <span className="text-[#471396]">Digital Voice?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's create a social media strategy that drives real results for
            your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/6285732705272"
              target="_blank"
              className="group bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span>Start Project</span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
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
            <a
              href="#portfolio"
              className="px-12 py-4 rounded-full font-semibold text-gray-900 border-2 border-gray-200 hover:border-[#471396] hover:text-[#471396] transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
