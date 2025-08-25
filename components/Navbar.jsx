"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="navbar bg-gradient-to-r from-[#B13BFF] via-[#4A1789] to-[#090040] p-3 relative shadow-2xl">
      <div className="container mx-auto">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <Link href={"/"}>
              <Image
                src="/logo-navbar.png"
                alt="ITPLN Media Logo"
                width={221}
                height={57}
                className="w-32 h-auto lg:w-[221px] lg:h-[57px] cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-12 py-3 text-white font-medium">
            <li>
              <Link
                href={"/"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/ncc"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                NCC
              </Link>
            </li>
            <li>
              <Link
                href={"/#competencies"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                Competencies
              </Link>
            </li>
            <li>
              <Link
                href={"/#artikel"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                Article
              </Link>
            </li>
            <li>
              <Link
                href={"/#testimoni"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href={"/#ratecard"}
                className="hover:text-[#FFCC00] transition-all hover:font-bold"
              >
                Ratecard
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#B13BFF] via-[#4A1789] to-[#090040] shadow-2xl transition-all duration-300 ease-in-out ${
              active
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-6 py-4">
              <ul className="flex flex-col space-y-1">
                <li>
                  <Link
                    href={"/"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-user-line"></i>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/ncc"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-lightbulb-line"></i>
                      NCC
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#competencies"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-folder-line"></i>
                      Competencies
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#artikel"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-article-line"></i>
                      Article
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#testimoni"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-chat-quote-line"></i>
                      Testimonials
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/#ratecard"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-price-tag-3-line"></i>
                      Ratecard
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div
            className="lg:hidden block cursor-pointer"
            onClick={() => handleClick()}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform">
                <div
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    active ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                ></div>
                <div
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    active ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                    active ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
