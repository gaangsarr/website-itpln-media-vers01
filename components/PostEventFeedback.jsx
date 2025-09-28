"use client";

import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Send,
  MessageSquare,
  Lightbulb,
  Heart,
  QrCode,
  Gift,
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
    <div className="fixed top-4 right-4 z-[9998] animate-in slide-in-from-top-2 duration-300">
      <div
        className={`max-w-md rounded-lg border p-4 shadow-xl backdrop-blur-sm ${getToastStyles()}`}
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

// Success Modal Component
const SuccessModal = ({ isVisible, onClose, feedbackData, showToast }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative z-10 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-t-2xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Feedback Terkirim!</h2>
          <p className="text-green-100">Terima kasih atas partisipasi Anda</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-xl p-4 mb-4">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                Feedback ID
              </h3>
              <div className="text-2xl font-bold text-green-600">
                #{feedbackData?.feedbackId || "FDB-" + Date.now()}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>Nama:</strong> {feedbackData?.namaLengkap}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-sm">
                  <strong>Email:</strong> {feedbackData?.email}
                </span>
              </div>
            </div>
          </div>

          {/* Support Info (jika ada) */}
          {(feedbackData?.dukunganDana || feedbackData?.pesanDukungan) && (
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-4 mb-4">
              <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                Info Dukungan Anda
              </h4>

              {feedbackData?.dukunganDana && (
                <p className="text-yellow-700 text-sm mb-2">
                  <strong>Nominal:</strong>{" "}
                  {feedbackData.dukunganDana === "custom"
                    ? "Nominal lainnya"
                    : `Rp ${parseInt(feedbackData.dukunganDana).toLocaleString(
                        "id-ID"
                      )}`}
                </p>
              )}

              <div className="bg-white rounded-lg p-3 mb-3">
                <p className="text-gray-800 text-sm font-medium mb-1">
                  Transfer DANA:
                </p>
                <div className="text-lg font-bold text-blue-600">
                  082323786505
                </div>
                <p className="text-gray-600 text-xs">
                  a.n. Lintang Angrenggani K
                </p>
              </div>

              {feedbackData?.pesanDukungan && (
                <div className="bg-white/70 rounded-lg p-3 mb-3">
                  <p className="text-gray-700 text-sm italic">
                    "{feedbackData.pesanDukungan}"
                  </p>
                </div>
              )}

              <p className="text-yellow-600 text-xs">
                Konfirmasi transfer di WhatsApp Group atau contact panitia
              </p>
            </div>
          )}

          {/* WhatsApp Group Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              Join WhatsApp Group Peserta
            </h4>
            <p className="text-green-800 text-sm mb-4">
              Tetap terhubung dengan peserta lain dan dapatkan update terbaru
              tentang sertifikat peserta!
            </p>
            <a
              href="https://chat.whatsapp.com/F1UbDHBjHx7JRPzjmhFLwT"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>

          {/* Thank You Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-bold text-blue-900 mb-2">Terima Kasih!</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Feedback Anda sangat berharga untuk kami</li>
              <li>• Akan membantu perbaikan event selanjutnya</li>
              <li>• Tim NCC akan review semua saran yang masuk</li>
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
    <span className="text-gray-600 font-medium">Mengirim feedback...</span>
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

const PostEventFeedback = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [feedbackResult, setFeedbackResult] = useState(null);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noWa: "",
    instansi: "",

    // Feedback fields
    kesan: "",
    kritikSaran: "",
    dukungan: "",

    // Support (opsional)
    dukunganDana: "",
    pesanDukungan: "",
  });

  const { toast, showToast, hideToast } = useToast();

  // URL Google Apps Script - ganti dengan URL script Anda
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx5s5eVyqTYZX3cJ0QdLhLnxx8lS8oLL1vliZL92oVClIpQKCxEc1T8PRcvsrMikk5DQg/exec";

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
      "kesan",
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

    return true;
  };

  const submitFeedback = async () => {
    try {
      console.log("Sending feedback to:", SCRIPT_URL);
      console.log("Form data:", formData);

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(formData),
        redirect: "follow",
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
        throw new Error(
          result.message || "Terjadi kesalahan saat mengirim feedback"
        );
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
      const result = await submitFeedback();

      setFeedbackResult(result);
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        namaLengkap: "",
        email: "",
        noWa: "",
        instansi: "",
        kesan: "",
        kritikSaran: "",
        dukungan: "",
        dukunganDana: "",
        pesanDukungan: "",
      });

      showToast("Feedback berhasil terkirim! 🎉", "success");
    } catch (error) {
      showToast(`Gagal mengirim feedback: ${error.message}`, "error");
    }

    setIsSubmitting(false);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setFeedbackResult(null);
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
        feedbackData={feedbackResult}
        showToast={showToast}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Feedback NCC 2025
            </h1>
            <p className="text-gray-600 text-lg">
              Bagikan kesan, pesan, dan saran Anda
            </p>
            <div className="mt-4 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-xl p-4">
              <p className="text-purple-800 font-semibold">
                🙏 Feedback Anda sangat berharga untuk perbaikan event
                selanjutnya
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Data Personal
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
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

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
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

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    No WhatsApp *
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

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Instansi/Universitas *
                  </label>
                  <input
                    type="text"
                    name="instansi"
                    value={formData.instansi}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Universitas/Instansi Anda"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Feedback Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  Kesan & Pesan tentang NCC 2025 *
                </label>
                <textarea
                  name="kesan"
                  value={formData.kesan}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Bagikan kesan dan pesan Anda tentang acara NCC 2025..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-500" />
                  Kritik & Saran
                </label>
                <textarea
                  name="kritikSaran"
                  value={formData.kritikSaran}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Berikan kritik dan saran untuk perbaikan event selanjutnya..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  Dukungan & Harapan untuk NCC 2026
                </label>
                <textarea
                  name="dukungan"
                  value={formData.dukungan}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Apa dukungan dan harapan Anda untuk NCC tahun depan?"
                />
              </div>
            </div>

            {/* Optional Support Section */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Dukungan (Opsional)
              </h4>
              <p className="text-yellow-700 text-sm mb-4">
                Jika Anda ingin mendukung pengembangan NCC untuk tahun depan,
                setiap kontribusi sangat dihargai dan akan digunakan untuk
                meningkatkan kualitas event.
              </p>

              {/* Transfer DANA Section */}
              <div className="text-center mb-4">
                <div className="bg-white border-2 border-dashed border-blue-300 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-800 mb-2">
                    Transfer DANA
                  </h5>
                  <div className="bg-blue-50 rounded-lg p-4 mb-2">
                    <div className="text-lg font-bold text-blue-800 mb-1">
                      082323786505
                    </div>
                    <p className="text-sm text-blue-700 font-medium">
                      a.n. Lintang Angrenggani K
                    </p>
                  </div>
                  <p className="text-xs text-gray-600">
                    Transfer via DANA untuk memberikan dukungan
                  </p>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText("082323786505");
                      showToast("Nomor DANA berhasil disalin!", "success");
                    }}
                    className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copy Nomor
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nominal Dukungan (Opsional)
                  </label>
                  <select
                    name="dukunganDana"
                    value={formData.dukunganDana}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih nominal (opsional)</option>
                    <option value="10000">Rp 10.000</option>
                    <option value="25000">Rp 25.000</option>
                    <option value="50000">Rp 50.000</option>
                    <option value="100000">Rp 100.000</option>
                    <option value="custom">Nominal lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Pesan untuk Tim NCC (Opsional)
                  </label>
                  <textarea
                    name="pesanDukungan"
                    value={formData.pesanDukungan}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Pesan semangat untuk tim NCC..."
                  />
                </div>
              </div>

              {/* Info Note */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-700 text-xs text-center">
                  💡 <strong>Tips:</strong> Setelah transfer, Anda bisa mention
                  di WhatsApp Group atau kirim bukti transfer ke contact panitia
                </p>
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
                  Kirim Feedback
                </>
              )}
            </button>

            {/* Footer Info */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Feedback Anda akan membantu kami meningkatkan kualitas NCC di
                masa mendatang
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostEventFeedback;
