"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gradient-to-r from-[#B13BFF] via-[#4A1789] to-[#090040] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="logo">
              <Image
                src="/logo-navbar.png"
                alt="ITPLN Media Logo"
                width={221}
                height={57}
                className="w-40 h-auto"
              />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              ITPLN Media adalah organisasi yang bergerak di bidang media dan
              teknologi dengan semangat "Creativity to Beyond!"
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/itplnmedia"
                target="_blank"
                className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://www.tiktok.com/@itplnmedia"
                target="_blank"
                className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300"
                aria-label="TikTok"
              >
                <i className="ri-tiktok-line text-xl"></i>
              </a>
              <a
                href="https://open.spotify.com/show/1uiTGptquFpnTeZeSP8UjU?si=AGw8SCEBRAaqH2wDQD0ecQ"
                target="_blank"
                className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300"
                aria-label="Spotify"
              >
                <i className="ri-spotify-line text-xl"></i>
              </a>
              <a
                href="https://youtube.com/@itplnmedia"
                target="_blank"
                className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300"
                aria-label="YouTube"
              >
                <i className="ri-youtube-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/ncc"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  NCC
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  Competencies
                </Link>
              </li>
              <li>
                <Link
                  href="/#artikel"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimoni"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#ratecard"
                  className="text-gray-300 hover:text-[#FFCC00] transition-colors duration-300 text-sm"
                >
                  Ratecard
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 text-sm">Social Media</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Broadcasting</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Photography</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Videography</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Graphic Design</span>
              </li>
              <li>
                <span className="text-gray-300 text-sm">Web Development</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-[#FFCC00] mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-sm font-medium text-white">
                    Institut Teknologi PLN, Jakarta
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Menara PLN, Jl. Lkr. Luar Barat, RT.1/RW.1, Duri Kosambi,
                    Kecamatan Cengkareng, Kota Jakarta Barat, Daerah Khusus
                    Ibukota Jakarta 11750.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#FFCC00]"></i>
                <div>
                  <p className="text-sm font-medium text-white">Contact us:</p>
                  <p className="text-sm text-gray-300">0857-3270-5272</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#FFCC00]"></i>
                <div>
                  <p className="text-sm font-medium text-white">Email:</p>
                  <p className="text-sm text-gray-300">itplnmedia@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                © 2025 ITPLN Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
