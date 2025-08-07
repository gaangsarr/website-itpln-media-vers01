"use client";
import React from "react";

// Script animasi diambil dari poster/page.jsx
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

const ScrollAnimationWrapper = ({
  children,
  className = "",
  delay = 0,
  animation = "fadeInUp",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const animations = {
    fadeInUp: {
      initial: "opacity-0 translate-y-8",
      animate: "opacity-100 translate-y-0",
    },
    fadeInLeft: {
      initial: "opacity-0 -translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    fadeInRight: {
      initial: "opacity-0 translate-x-8",
      animate: "opacity-100 translate-x-0",
    },
    fadeIn: {
      initial: "opacity-0",
      animate: "opacity-100",
    },
    scaleIn: {
      initial: "opacity-0 scale-95",
      animate: "opacity-100 scale-100",
    },
  };

  const currentAnimation = animations[animation] || animations.fadeInUp;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? currentAnimation.animate : currentAnimation.initial
      } ${className}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

const Reels = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <ScrollAnimationWrapper animation="fadeInUp">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                Instagram Reels
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-purple-100 leading-relaxed mb-12">
                  Jadikan media sosial sebagai panggung karyamu! Buat video
                  Reels berdurasi 30-60 detik yang kreatif dan informatif dengan
                  tema "Data Science Untuk Kebutuhan Energi Bersih Nuklir."
                  Sampaikan pesan yang jelas dan menginspirasi, dengan kualitas
                  visual dan audio yang memukau.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="scaleIn" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                {/* Tombol Guidebook */}
                <a
                  href="https://drive.google.com/drive/folders/1vJJVfw3Jh58jDTdkwi-FRrt_-3JIa8L2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Guidebook
                  </button>
                </a>

                {/* Tombol Register */}
                <a
                  href="https://forms.gle/QVAfkPQ3jmsuhfoF6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Register
                  </button>
                </a>

                {/* Tombol Contact Person (WhatsApp) */}
                <a
                  href="https://wa.me/6289513050951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Person
                  </button>
                </a>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Competition Details Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper animation="fadeInUp">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Competition Details
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <ScrollAnimationWrapper animation="fadeInLeft" delay={200}>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">
                    Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      • Participants: Active High School/Vocational School
                      students or University students (D3/S1) in Indonesia. Can
                      be individual or team (max 3 members).
                    </li>
                    <li>• Format: MP4 video.</li>
                    <li>
                      • Originality: Must be 100% original and never published
                      before.
                    </li>
                    <li>• Orientation: Vertical (9:16 ratio).</li>
                    <li>• Duration: 30-60 seconds.</li>
                    <li>• Resolution: Minimum 1080 x 1920 pixels.</li>
                    <li>
                      • No Identifiers: No personal/institutional watermarks or
                      logos on the video.
                    </li>
                    <li>
                      • Copyright: All content (music, visuals) must be
                      copyright-free or have proper licenses.
                    </li>
                    <li>
                      • Instagram Post: Upload to personal/team's public
                      Instagram account with:
                      <ul>
                        <li>
                          {" "}
                          - Title and short description (max 100 words).{" "}
                        </li>
                        <li>
                          - Required hashtags: #NCC2025 #ReelsNuklir
                          #ITPLNMedia.
                        </li>
                        <li>- Mention @itplnmedia and 3 friends. </li>
                      </ul>
                    </li>
                    <li>• Submission File: MP4 video file. </li>
                  </ul>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fadeInRight" delay={300}>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">
                    Submission Form (Google Form fields):
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full Name(s) / Team Name </li>
                    <li>• School/University </li>
                    <li>• Phone Number </li>
                    <li>• Email Address </li>
                    <li>• Proof of Payment (screenshot/photo) </li>
                    <li>• Link to Instagram Reels Post </li>
                    <li>• Upload Video File (MP4) </li>
                  </ul>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="scaleIn" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">Prizes</h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  place: "1st Place",
                  amount: "Rp X.X00.000,00",
                  color: "from-yellow-400 to-yellow-500",
                  delay: 0,
                },
                {
                  place: "2nd Place",
                  amount: "Rp X.X00.000,00",
                  color: "from-gray-300 to-gray-400",
                  delay: 100,
                },
                {
                  place: "3rd Place",
                  amount: "Rp X.X00.000,00",
                  color: "from-orange-400 to-orange-500",
                  delay: 200,
                },
                {
                  place: "Favorite",
                  amount: "Rp X.X00.000,00",
                  color: "from-blue-300 to-cyan-400",
                  delay: 300,
                },
              ].map((prize, index) => (
                <ScrollAnimationWrapper
                  key={index}
                  animation="scaleIn"
                  delay={prize.delay}
                >
                  <div
                    className={`text-center p-6 bg-gradient-to-br ${prize.color} rounded-xl`}
                  >
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">
                      {prize.place}
                    </h3>
                    <p className="text-xl font-bold text-purple-700">
                      {prize.amount}
                    </p>
                    <p className="text-purple-600">+ Certificate</p>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>

            <div className="space-y-6">
              {[
                {
                  event: "Pendaftaran Karya Batch 1",
                  date: "17 Juli - 1 Agustus 2025",
                  delay: 0,
                },
                {
                  event: "Pendaftaran Karya Batch 1",
                  date: "2 - 14 Agustus 2025",
                  delay: 100,
                },
                {
                  event: "Pengumpulan Karya Batch 1 & 2",
                  date: "30 - 31 Agustus 2025",
                  delay: 200,
                },
                {
                  event: "Penilaian & Kurasi Karya",
                  date: "1 - 12 September 2025",
                  delay: 300,
                },
                {
                  event: "Awarding & Seminar Nasional NCC 2025",
                  date: "15 September 2025",
                  delay: 400,
                },
              ].map((item, index) => (
                <ScrollAnimationWrapper
                  key={index}
                  animation="fadeInLeft"
                  delay={item.delay}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div>
                      <h3 className="text-lg font-bold">{item.event}</h3>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper animation="fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fadeInUp" delay={200}>
            <p className="text-xl mb-8">
              Join the National Creative Competition and showcase your reels
              editing skills!
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="scaleIn" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Tombol Register Now */}
              <a
                href="https://forms.gle/QVAfkPQ3jmsuhfoF6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Register Now
                </button>
              </a>

              {/* Tombol Download Guidebook */}
              <a
                href="https://drive.google.com/drive/folders/1vJJVfw3Jh58jDTdkwi-FRrt_-3JIa8L2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-purple-800 transition-all duration-300 transform hover:scale-105">
                  Download Guidebook
                </button>
              </a>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Reels;
