import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#471396]/10 text-[#471396] rounded-full text-sm font-medium mb-6">
                Web Development Division
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-8">
                Web
                <br />
                <span className="text-[#471396]">Dev</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Building modern, responsive, and high-performance web
                applications that drive business growth.
              </p>
              <div className="flex gap-6">
                <a
                  href="#projects"
                  className="group flex items-center gap-3 text-[#471396] font-semibold"
                >
                  <span>View Code</span>
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
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Code Editor Mockup */}
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-6 aspect-[4/3] font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs ml-4">app.tsx</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="text-purple-400">
                    import <span className="text-yellow-300">React</span> from{" "}
                    <span className="text-green-400">'react'</span>
                  </div>
                  <div className="text-purple-400">
                    import <span className="text-yellow-300">NextJS</span> from{" "}
                    <span className="text-green-400">'next'</span>
                  </div>
                  <div className="text-gray-500">
                    // Building amazing web apps
                  </div>
                  <div className="text-blue-400">
                    function <span className="text-yellow-300">App</span>(){" "}
                    {`{`}
                  </div>
                  <div className="text-gray-300 ml-4">return (</div>
                  <div className="text-red-400 ml-8">
                    &lt;div className=
                    <span className="text-green-400">"app"</span>&gt;
                  </div>
                  <div className="text-gray-300 ml-12">Hello World!</div>
                  <div className="text-red-400 ml-8">&lt;/div&gt;</div>
                  <div className="text-gray-300 ml-4">)</div>
                  <div className="text-blue-400">{`}`}</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#471396]">50+</div>
                  <div className="text-xs text-gray-500">Websites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Tech Stack
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto mb-6"></div>
            <p className="text-gray-600">
              Modern technologies we use to build exceptional web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", color: "from-blue-500/20 to-cyan-500/20" },
              { name: "Next.js", color: "from-gray-800/20 to-gray-600/20" },
              { name: "TypeScript", color: "from-blue-600/20 to-blue-800/20" },
              { name: "Tailwind", color: "from-teal-500/20 to-blue-600/20" },
              { name: "Node.js", color: "from-green-600/20 to-green-800/20" },
              { name: "MongoDB", color: "from-green-500/20 to-green-700/20" },
            ].map((tech, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className={`bg-gradient-to-br ${tech.color} rounded-2xl p-6 text-center h-24 flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  <span className="font-bold text-gray-900 group-hover:text-[#471396] transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Development Services
            </h2>
            <div className="w-16 h-1 bg-[#471396] mx-auto"></div>
          </div>

          <div className="space-y-1">
            {[
              {
                title: "Frontend Development",
                description:
                  "React, Next.js, and modern JavaScript frameworks for responsive user interfaces",
                tech: "React • Next.js • TypeScript",
              },
              {
                title: "Backend Development",
                description:
                  "Node.js, API development, and database integration for robust server-side solutions",
                tech: "Node.js • Express • MongoDB",
              },
              {
                title: "Full-Stack Applications",
                description:
                  "Complete web applications with both frontend and backend development",
                tech: "MERN Stack • Next.js • PostgreSQL",
              },
              {
                title: "E-Commerce Solutions",
                description:
                  "Custom online stores with payment integration and inventory management",
                tech: "Shopify • WooCommerce • Stripe",
              },
              {
                title: "CMS Development",
                description:
                  "Content management systems for easy website updates and maintenance",
                tech: "WordPress • Headless CMS • Sanity",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer border border-gray-100 rounded-2xl hover:border-[#471396]/20 transition-all duration-500 hover:shadow-lg"
              >
                <div className="p-8 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-6">
                      <div className="text-3xl font-black text-gray-200 group-hover:text-[#471396]/30 transition-colors duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#471396] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-2">
                          {service.description}
                        </p>
                        <p className="text-sm text-[#471396]/70 font-medium">
                          {service.tech}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-[#471396] group-hover:bg-[#471396] transition-all duration-300">
                    <svg
                      className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-600">
              Web applications we've built for various clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 sm:group-hover:scale-105 sm:transition-transform sm:duration-700 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-[#471396]/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-[#471396]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-400 text-sm">
                          Project {item}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2">
                      Website Project {item}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      E-commerce platform with modern design and seamless user
                      experience
                    </p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-[#471396]/10 text-[#471396] text-xs rounded-full">
                        React
                      </span>
                      <span className="px-2 py-1 bg-[#00A2B9]/10 text-[#00A2B9] text-xs rounded-full">
                        Next.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-gray-900 mb-8">
            Ready to Build
            <br />
            <span className="text-[#471396]">Your Website?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's turn your ideas into a powerful web application that drives
            results.
          </p>

          <a
            href="https://wa.me/6285732705272"
            target="_blank"
            className="inline-flex items-center gap-4 bg-[#471396] text-white px-12 py-4 rounded-full font-semibold hover:bg-[#471396]/90 transition-all duration-300 group"
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
