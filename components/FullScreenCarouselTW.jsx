// components/FullScreenCarouselTW.jsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { src: "/home-1.JPG", alt: "ITPLN Team 1" },
  { src: "/home-1.JPG", alt: "ITPLN Team 2" },
  { src: "/home-1.JPG", alt: "ITPLN Team 3" },
  { src: "/home-1.JPG", alt: "ITPLN Team 4" },
  { src: "/home-1.JPG", alt: "ITPLN Team 5" },
];

export default function FullScreenCarouselTW({ auto = true, interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(id);
  }, [auto, interval]);

  const go = (dir) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/20" />
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/30 hover:bg-white/50 p-3 backdrop-blur text-white transition-all duration-200 text-2xl font-bold"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/30 hover:bg-white/50 p-3 backdrop-blur text-white transition-all duration-200 text-2xl font-bold"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
