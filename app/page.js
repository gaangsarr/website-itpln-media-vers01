import Image from "next/image";
import Squares from "@/components/Squares";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background Squares dengan perbaikan responsif */}
      <div className="fixed top-0 right-0 left-0 bottom-0 w-full h-full z-0 opacity-5">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="up"
          borderColor="#471396"
          hoverFillColor="#ffffff"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen lg:py-8 -translate-y-3">
          {/* Left Column - Photo Gallery */}
          <div className="space-y-4 py-7">
            {/* Top row - 2 photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 1"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 2"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Middle row - 2 photos side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 3"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home-1.jpg"
                  alt="ITPLN Team Photo 4"
                  width={280}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Bottom row - 1 large photo */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/home-1.jpg"
                alt="ITPLN Team Photo 5"
                width={580}
                height={300}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 lg:space-y-6 lg:-translate-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <p className="text-purple-500 text-lg sm:text-xl font-medium">
                We are,
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#471396] leading-tight">
                ITPLN Media!
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#471396]">
                Creativity to Beyond!
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu genean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
