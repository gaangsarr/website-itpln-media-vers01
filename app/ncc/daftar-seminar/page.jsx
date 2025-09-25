"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  IdCard,
  QrCode,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Send,
  Download,
} from "lucide-react";

const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "info":
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div
        className={`max-w-md rounded-lg border p-4 shadow-lg ${getToastStyles()}`}
      >
        <div className="flex items-start space-x-3">
          {getIcon()}
          <div className="flex-1">
            <p className="text-sm font-medium">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Modal Component - FIXED VERSION
const SuccessModal = ({ isVisible, onClose, registrationData }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const downloadQRCode = () => {
    if (registrationData?.qrCodeUrl) {
      const link = document.createElement("a");
      link.href = registrationData.qrCodeUrl;
      link.download = `QR_Code_${registrationData.nomorUndian}.png`;
      link.click();
    }
  };

  return (
    // 🔧 FIX: Higher z-index + better backdrop
    <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
      {/* Backdrop dengan opacity yang benar */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative z-10 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-t-2xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Pendaftaran Berhasil! 🎉</h2>
          <p className="text-purple-100">Sampai bertemu di Seminar NCC 2025</p>
        </div>

        {/* Content - sama seperti sebelumnya */}
        <div className="p-6 space-y-6">
          {/* Registration Info */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold text-purple-800 mb-2">
                Nomor Undian Anda
              </h3>
              <div className="text-4xl font-bold text-purple-600">
                #{registrationData?.nomorUndian}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>Nama:</strong> {registrationData?.namaLengkap}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>Email:</strong> {registrationData?.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>WhatsApp:</strong> {registrationData?.noWa}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>Instansi/Jurusan:</strong>{" "}
                  {registrationData?.instansi}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IdCard className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>NIM/NPM:</strong> {registrationData?.nimNpm}
                </span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          {registrationData?.qrCodeUrl && (
            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
                <QrCode className="w-5 h-5" />
                QR Code Absensi
              </h4>
              <div className="bg-white border-2 border-dashed border-purple-300 rounded-xl p-4 mb-4">
                <img
                  src={registrationData.qrCodeUrl}
                  alt="QR Code Absensi"
                  className="mx-auto w-48 h-48"
                />
                <p className="text-xs text-gray-600 mt-2">
                  QR Code untuk absensi acara
                </p>
              </div>
              <button
                onClick={downloadQRCode}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download QR Code
              </button>
            </div>
          )}

          {/* Important Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">
              📋 Informasi Penting
            </h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Simpan nomor undian dan QR code Anda</li>
              <li>• QR code digunakan untuk absensi acara</li>
              <li>• Pantau email untuk update selanjutnya</li>
              <li>• Hubungi panitia jika ada pertanyaan</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <h4 className="font-semibold text-gray-800 mb-3">
              📞 Kontak Panitia
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-blue-600 ml-2">
                  itplnmediacorp@gmail.com
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">WhatsApp:</span>
                <span className="text-green-600 ml-2">+62 895-1305-0951</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
          <button
            onClick={onClose}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center gap-3">
    <div className="animate-spin rounded-full h-6 w-6 border-2 border-transparent border-t-purple-500 border-r-blue-500"></div>
    <span className="text-gray-600 font-medium">Mendaftarkan...</span>
  </div>
);

// Hook untuk mengelola toast notifications
const useToast = () => {
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  const showToast = (message, type = "info") => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  return { toast, showToast, hideToast };
};

const SeminarRegistrationForm = () => {
  // Status pendaftaran - ubah ke true untuk membuka pendaftaran
  const PENDAFTARAN_DIBUKA = false;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registrationResult, setRegistrationResult] = useState(null);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noWa: "",
    instansi: "",
    nimNpm: "",
  });

  // Gunakan hook toast
  const { toast, showToast, hideToast } = useToast();

  // URL Google Apps Script
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby_gQ27aTY_TIPZLtkgiQSqn-iW1F-lSrHprr95xAwlvseop6A-QGHMgDPGp-p1yGljlw/exec";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "namaLengkap",
      "email",
      "noWa",
      "instansi",
      "nimNpm",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field].trim()
    );

    if (missingFields.length > 0) {
      showToast("Mohon lengkapi semua field yang diperlukan!", "warning");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Format email tidak valid!", "warning");
      return false;
    }

    // WhatsApp validation
    const phoneRegex = /^[0-9]{10,15}$/;
    const cleanPhone = formData.noWa.replace(/[^0-9]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      showToast("Nomor WhatsApp harus 10-15 digit angka!", "warning");
      return false;
    }

    return true;
  };

  const submitRegistration = async () => {
    try {
      console.log("Sending data to:", SCRIPT_URL);
      console.log("Form data:", formData);

      // Gunakan method yang kompatibel dengan Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain", // PENTING: text/plain untuk menghindari preflight
        },
        body: JSON.stringify(formData),
        redirect: "follow", // PENTING: Google Apps Script melakukan redirect
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const responseText = await response.text();
        console.log("Response text:", responseText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response result:", result);

      if (result.success) {
        return result.data;
      } else {
        throw new Error(result.message || "Terjadi kesalahan saat mendaftar");
      }
    } catch (error) {
      console.error("Detailed error:", error);

      if (error.message === "Failed to fetch") {
        throw new Error(
          "Tidak dapat terhubung ke server. Pastikan koneksi internet stabil."
        );
      } else {
        throw error;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await submitRegistration();

      setRegistrationResult(result);
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        namaLengkap: "",
        email: "",
        noWa: "",
        instansi: "",
        nimNpm: "",
      });

      showToast(
        "Pendaftaran berhasil! Cek detail di modal yang muncul.",
        "success"
      );
    } catch (error) {
      showToast(`Gagal mendaftar: ${error.message}`, "error");
    }

    setIsSubmitting(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setRegistrationResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-12">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Success Modal */}
      <SuccessModal
        isVisible={showSuccessModal}
        onClose={closeSuccessModal}
        registrationData={registrationResult}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {!PENDAFTARAN_DIBUKA ? (
          /* Closed Registration Message */
          <div className="flex items-center justify-center min-h-[70vh]">
            <div className="bg-white rounded-2xl p-8 max-w-md text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Pendaftaran Ditutup
              </h2>
              <p className="text-gray-600 mb-4">
                Maaf, pendaftaran Seminar NCC 2025 telah ditutup.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  📢 Pantau Instagram{" "}
                  <a
                    href="https://instagram.com/itplnmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                  >
                    @itplnmedia
                  </a>{" "}
                  untuk info selanjutnya!
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Pendaftaran Seminar NCC 2025
              </h1>
              <p className="text-gray-600 text-lg">
                National Creative Competition 2025
              </p>
              <div className="mt-4 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-xl p-4">
                <p className="text-purple-800 font-semibold">
                  📅 29 September 2025 | 🕒 08.00 - 12.00 WIB | 📍 Auditorium
                  ITPLN Lt. 12
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                {/* No WA/HP */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    No WhatsApp/HP *
                  </label>
                  <input
                    type="tel"
                    name="noWa"
                    value={formData.noWa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                {/* Instansi */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Building className="w-4 h-4 inline mr-2" />
                    Instansi/Jurusan *
                  </label>
                  <input
                    type="text"
                    name="instansi"
                    value={formData.instansi}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Universitas/Jurusan/Sekolah"
                    required
                  />
                </div>

                {/* NIM/NPM */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <IdCard className="w-4 h-4 inline mr-2" />
                    NIM/NPM *
                  </label>
                  <input
                    type="text"
                    name="nimNpm"
                    value={formData.nimNpm}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Apabila tidak ada isi (-)"
                    required
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-blue-800 text-sm">
                    <p className="font-bold mb-2">Informasi Penting:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Pendaftaran gratis untuk semua peserta</li>
                      <li>• QR Code akan digenerate otomatis untuk absensi</li>
                      <li>• Konfirmasi pendaftaran akan dikirim via email</li>
                      <li>• Sertifikat digital akan diberikan setelah acara</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 text-white shadow-lg transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Daftar Sekarang
                  </>
                )}
              </button>
            </form>

            {/* Footer Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Dengan mendaftar, Anda menyetujui untuk menerima informasi
                terkait acara via email
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeminarRegistrationForm;
