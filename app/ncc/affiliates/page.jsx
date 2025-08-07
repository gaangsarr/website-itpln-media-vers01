"use client";
import { useState } from "react";

export default function AffiliateRegistration() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorWhatsApp: "",
    akunMediaSosial: "",
    platformPromosi: [],
    platformLainnya: "",
    komitmen: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  // Generate unique referral code
  const generateReferralCode = () => {
    const timestamp = Date.now().toString(36).slice(-4);
    const random = Math.random().toString(36).slice(2, 6);
    return `${timestamp}${random}`.toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      platformPromosi: checked
        ? [...prev.platformPromosi, value]
        : prev.platformPromosi.filter((platform) => platform !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (
      !formData.namaLengkap ||
      !formData.email ||
      !formData.nomorWhatsApp ||
      formData.platformPromosi.length === 0 ||
      formData.komitmen !== "Ya"
    ) {
      setSubmitMessage("Mohon lengkapi semua field yang diperlukan!");
      setIsSubmitting(false);
      return;
    }

    try {
      // Generate unique referral code
      const newReferralCode = generateReferralCode();
      setReferralCode(newReferralCode);

      // Format platform promosi
      const platforms = [...formData.platformPromosi];
      if (formData.platformLainnya) {
        platforms.push(`Lainnya: ${formData.platformLainnya}`);
      }

      // Prepare data for submission
      const submissionData = {
        timestamp: new Date().toLocaleString("id-ID"),
        namaLengkap: formData.namaLengkap,
        email: formData.email,
        nomorWhatsApp: formData.nomorWhatsApp,
        akunMediaSosial: formData.akunMediaSosial,
        platformPromosi: platforms.join(", "),
        referralCode: newReferralCode,
      };

      // Send data to Google Sheets via Google Apps Script
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyklRgkNvQMK2ZgfOvdJ5Enqf-8YELDYeKTaP34NOF9WIe2Q8oT7YGjjWE7G5RV7Hql/exec";

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Show success popup
      setShowSuccessPopup(true);

      // Reset form
      setFormData({
        namaLengkap: "",
        email: "",
        nomorWhatsApp: "",
        akunMediaSosial: "",
        platformPromosi: [],
        platformLainnya: "",
        komitmen: "",
      });
    } catch (error) {
      setSubmitMessage("Terjadi kesalahan. Silakan coba lagi.");
    }

    setIsSubmitting(false);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setReferralCode("");
  };

  const joinWhatsAppGroup = () => {
    window.open(
      "https://chat.whatsapp.com/IXXbSovSKDH4XN8nEbQWUu?mode=ac_t",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pendaftaran Affiliate NCC 2025
          </h1>
          <p className="text-lg text-gray-600">
            Bergabunglah sebagai affiliate dan dapatkan kode referral unik! Ajak
            teman-temanmu untuk mendaftar NCC 2025 menggunakan kode tersebut dan
            dapatkan komisi untuk setiap peserta yang berhasil kamu ajak.
            Semakin banyak yang mendaftar lewat kamu, semakin besar reward-nya!
          </p>
        </div>

        {/* Ketentuan */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Ketentuan Affiliate NCC 2025
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                A. Ketentuan Umum
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Affiliator adalah individu/komunitas yang secara sukarela
                  berpartisipasi dalam mempromosikan kegiatan NCC 2025.
                </li>
                <li>
                  Affiliator wajib mengisi formulir pendaftaran resmi yang
                  disediakan oleh ITPLN Media.
                </li>
                <li>
                  Setiap affiliator akan mendapatkan kode referral unik dari
                  panitia.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                B. Tugas dan Tanggung Jawab Affiliator
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Membagikan informasi resmi terkait lomba melalui media sosial,
                  komunitas, atau jaringan pribadi.
                </li>
                <li>
                  Menggunakan kode referral yang diberikan secara benar dan
                  tidak menyalahgunakan identitas.
                </li>
                <li>
                  Menjaga etika komunikasi dan tidak melakukan spamming, hoaks,
                  atau promosi yang merugikan citra lomba dan institusi.
                </li>
                <li>
                  Bergabung dalam grup koordinasi (WhatsApp/Telegram) dan
                  mengikuti arahan dari panitia.
                </li>
                <li>
                  Tidak membuat materi promosi yang menyimpang dari pedoman yang
                  diberikan oleh panitia.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                C. Hak Affiliator
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Berhak atas apresiasi dan/atau insentif berdasarkan jumlah
                  peserta yang mendaftar melalui kode referral.
                </li>
                <li>
                  Berkesempatan memperluas jejaring dan pengalaman
                  organisasi/komunitas.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-3">
                D. Ketentuan Tambahan
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Panitia berhak menghentikan kerja sama jika terjadi
                  pelanggaran etik atau penyebaran informasi palsu.
                </li>
                <li>
                  Segala kebijakan tambahan akan diinformasikan langsung melalui
                  kanal resmi ITPLN Media.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Pendaftaran */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Form Pendaftaran
          </h2>

          <div className="space-y-6">
            {/* Data Pribadi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Aktif *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  name="nomorWhatsApp"
                  value={formData.nomorWhatsApp}
                  onChange={handleInputChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Akun Media Sosial (Instagram/TikTok/LinkedIn)
                </label>
                <input
                  type="text"
                  name="akunMediaSosial"
                  value={formData.akunMediaSosial}
                  onChange={handleInputChange}
                  placeholder="@username atau link profil"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Platform Promosi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Platform yang akan digunakan untuk promosi: *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Instagram", "WhatsApp", "TikTok", "Twitter/X"].map(
                  (platform) => (
                    <label
                      key={platform}
                      className="flex items-center space-x-3"
                    >
                      <input
                        type="checkbox"
                        value={platform}
                        checked={formData.platformPromosi.includes(platform)}
                        onChange={handlePlatformChange}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <span className="text-gray-700">{platform}</span>
                    </label>
                  )
                )}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lainnya (opsional):
                </label>
                <input
                  type="text"
                  name="platformLainnya"
                  value={formData.platformLainnya}
                  onChange={handleInputChange}
                  placeholder="Sebutkan platform lainnya"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Komitmen */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Saya bersedia aktif mempromosikan lomba NCC 2025 dan mengikuti
                arahan dari tim ITPLN Media. *
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="komitmen"
                    value="Ya"
                    checked={formData.komitmen === "Ya"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    required
                  />
                  <span className="text-gray-700">Ya</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="komitmen"
                    value="Tidak"
                    checked={formData.komitmen === "Tidak"}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="text-gray-700">Tidak</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Memproses..." : "Daftar Sebagai Affiliate"}
              </button>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`text-center p-4 rounded-lg ${
                  submitMessage.includes("berhasil")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </div>
        </div>

        {/* Info Tambahan */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Untuk pertanyaan lebih lanjut, hubungi tim ITPLN Media melalui
            kontak resmi.
          </p>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-2xl text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Pendaftaran Berhasil!</h2>
              <p className="text-green-100">
                Selamat datang sebagai Affiliate NCC 2025
              </p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Referral Code */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Kode Referral Anda:
                </h3>
                <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4">
                  <span className="text-2xl font-bold text-purple-800">
                    {referralCode}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Gunakan kode ini untuk mengajak peserta baru!
                </p>
              </div>

              {/* WhatsApp Group Section */}
              <div className="border-t pt-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Langkah Selanjutnya:
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    <strong>WAJIB</strong> bergabung ke grup WhatsApp affiliate
                    untuk mendapatkan informasi terbaru!
                  </p>
                </div>

                <button
                  onClick={joinWhatsAppGroup}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span>Gabung Grup WhatsApp</span>
                </button>

                <p className="text-xs text-red-600 text-center mt-3 font-semibold">
                  ⚠️ Pastikan Anda bergabung sebelum menutup popup ini!
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
              <button
                onClick={closePopup}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
