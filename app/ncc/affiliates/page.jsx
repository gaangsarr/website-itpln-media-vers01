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

  // Generate unique referral code
  const generateReferralCode = () => {
    const timestamp = Date.now().toString(36).slice(-4); // ambil 4 karakter terakhir dari timestamp base36
    const random = Math.random().toString(36).slice(2, 6); // ambil 4 karakter acak
    return `${timestamp}${random}`.toUpperCase(); // gabungkan dan jadikan kapital
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
      const referralCode = generateReferralCode();

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
        referralCode: referralCode,
      };

      // Send data to Google Sheets via Google Apps Script
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyklRgkNvQMK2ZgfOvdJ5Enqf-8YELDYeKTaP34NOF9WIe2Q8oT7YGjjWE7G5RV7Hql/exec"; // Ganti dengan URL Web App Anda

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Format WhatsApp message
      //       const waMessage = `*PENDAFTARAN AFFILIATE NCC 2025*

      // *Kode Referral Anda: ${referralCode}*

      // Nama: ${submissionData.namaLengkap}
      // Email: ${submissionData.email}
      // WhatsApp: ${submissionData.nomorWhatsApp}
      // Media Sosial: ${submissionData.akunMediaSosial}
      // Platform Promosi: ${submissionData.platformPromosi}
      // Waktu Daftar: ${submissionData.timestamp}

      // Terima kasih telah bergabung sebagai Affiliate NCC 2025! 🎉

      // Tim ITPLN Media akan segera menghubungi Anda untuk koordinasi lebih lanjut.`;

      //       // Send to WhatsApp (replace with your WhatsApp number)
      //       const waNumber = "6285273113795"; // Ganti dengan nomor WhatsApp admin
      //       const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
      //         waMessage
      //       )}`;

      //       // Open WhatsApp
      //       window.open(waUrl, "_blank");

      setSubmitMessage(
        `Pendaftaran berhasil! Kode referral Anda: ${referralCode}. Data telah tersimpan.`
      );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
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
    </div>
  );
}
