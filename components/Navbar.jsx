"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
            <li className="relative group">
              <button
                onClick={toggleDropdown}
                className="hover:text-[#FFCC00] transition-all hover:font-bold flex items-center gap-2 py-2"
              >
                Event
                <svg
                  className={`w-4 h-4 transition-all duration-300 ${
                    dropdownOpen ? "rotate-180 text-[#FFCC00]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Desktop Dropdown */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-52 transition-all duration-300 ease-out z-50 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                  <div className="p-2">
                    <Link
                      href="/ncc"
                      className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#4A1789] hover:bg-gradient-to-r hover:from-[#4A1789]/10 hover:to-[#B13BFF]/10 rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4A1789] to-[#B13BFF] flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">NCC</div>
                        <div className="text-xs text-gray-500">
                          National Creative Competition
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/oprec"
                      className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#4A1789] hover:bg-gradient-to-r hover:from-[#4A1789]/10 hover:to-[#B13BFF]/10 rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B13BFF] to-[#4A1789] flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-semibold">OPREC '19</div>
                        <div className="text-xs text-gray-500">
                          Open Recruitment Batch 19
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
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
            className={`lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-[#B13BFF] via-[#4A1789] to-[#090040] shadow-2xl transition-all duration-300 ease-in-out z-40 ${
              active
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="container mx-auto px-6 py-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <Link
                    href={"/"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center gap-3">
                      <i className="ri-user-line"></i>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={toggleDropdown}
                    className="w-full text-left block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <i className="ri-calendar-event-line"></i>
                        Event
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                  {/* Mobile Dropdown */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      dropdownOpen
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 pl-4 border-l-2 border-white/20 space-y-1">
                      <Link
                        href="/ncc"
                        onClick={() => {
                          setActive(false);
                          setDropdownOpen(false);
                        }}
                        className="block px-4 py-3 text-white/90 font-medium hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-1"
                      >
                        <span className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                            <i className="ri-lightbulb-line text-xs"></i>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">NCC</div>
                            <div className="text-xs text-white/70">
                              National Creative Competition
                            </div>
                          </div>
                        </span>
                      </Link>
                      <Link
                        href="/oprec"
                        onClick={() => {
                          setActive(false);
                          setDropdownOpen(false);
                        }}
                        className="block px-4 py-3 text-white/90 font-medium hover:bg-white hover:text-black hover:bg-opacity-10 rounded-lg transition-all duration-200 hover:translate-x-1"
                      >
                        <span className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center">
                            <i className="ri-team-line text-xs"></i>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">
                              OPREC '19
                            </div>
                            <div className="text-xs text-white/70">
                              Open Recruitment '19
                            </div>
                          </div>
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    href={"/#competencies"}
                    onClick={() => setActive(false)}
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
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
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
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
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
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
                    className="block px-4 py-3 text-white font-semibold hover:bg-white hover:text-black hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:translate-x-2"
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
