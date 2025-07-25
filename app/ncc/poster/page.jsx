import React from "react";

const PosterCompetitionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Poster Infografis
            </h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl text-purple-100 leading-relaxed mb-12">
                Ayo ubah ide-ide inovatifmu menjadi infografis digital yang
                memukau! Dengan tema "Data Science Untuk Kebutuhan Energi Bersih
                Nuklir," tunjukkan bagaimana data sains dapat berperan dalam
                pengembangan energi nuklir yang bersih dan berkelanjutan.
              </p>
            </div>

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
          </div>
        </div>
      </div>

      {/* Competition Details Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Competition Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">
                Requirements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Participants: Active High School/Vocational School students
                  or University students (D3/S1) in Indonesia.
                </li>
                <li>• Format: Digital infographic poster.</li>
                <li>• Originality: Must be 100% original.</li>
                <li>
                  • Size & Resolution: A3 size (3508x4961 pixels) vertical,
                  minimum 300 dpi.
                </li>
                <li>• File Type: JPG or PNG.</li>
                <li>
                  • Logo: Must include the official ITPLN Media logo (provided
                  by committee).
                </li>
                <li>
                  • No Identifiers: No personal/institutional watermarks or
                  logos on the poster.
                </li>
                <li>
                  • Instagram Post: Upload to personal, public Instagram account
                  with:
                  <ul>
                    <li>- Title and short description (max 100 words).</li>
                    <li>
                      - Required hashtags: #NCC2025 #ReelsNuklir #ITPLNMedia.
                    </li>
                    <li>- Mention @itplnmedia and 3 friends. </li>
                  </ul>
                </li>
                <li>
                  • Submission Files: JPG/PNG poster file and a PDF concept
                  explanation (max 5 pages).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-purple-700">
                Submission Form (Google Form fields):
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Full Name </li>
                <li>• School/University </li>
                <li>• Phone Number </li>
                <li>• Email Address </li>
                <li>• Proof of Payment (screenshot/photo) </li>
                <li>• Link to Instagram Post </li>
                <li>• Upload Poster File (JPG/PNG) </li>
                <li>• Upload Concept Explanation File (PDF) </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8">Prizes</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                1st Place
              </h3>
              <p className="text-xl font-bold text-purple-700">
                Rp X.X00.000,00
              </p>
              <p className="text-purple-600">+ Certificate</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                2nd Place
              </h3>
              <p className="text-xl font-bold text-purple-700">
                Rp X.X00.000,00
              </p>
              <p className="text-purple-600">+ Certificate</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                3rd Place
              </h3>
              <p className="text-xl font-bold text-purple-700">
                Rp X.X00.000,00
              </p>
              <p className="text-purple-600">+ Certificate</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-xl">
              <h3 className="text-2xl font-bold text-purple-800 mb-2">
                Favorite
              </h3>
              <p className="text-xl font-bold text-purple-700">
                Rp X.X00.000,00
              </p>
              <p className="text-purple-600">+ Certificate</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Timeline</h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">Pendaftaran Karya Batch 1</h3>
                <p className="text-gray-600">17 Juli - 1 Agustus 2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">Pendaftaran Karya Batch 1</h3>
                <p className="text-gray-600">2 - 14 Agustus 2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">
                  Pengumpulan Karya Batch 1 & 2
                </h3>
                <p className="text-gray-600">30 - 31 Agustus 2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">Penilaian & Kurasi Karya</h3>
                <p className="text-gray-600">1 - 12 September 2025</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">
                  Awarding & Seminar Nasional NCC 2025
                </h3>
                <p className="text-gray-600">15 September 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
          <p className="text-xl mb-8">
            Join the National Creative Competition and showcase your poster
            design skills!
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default PosterCompetitionPage;
