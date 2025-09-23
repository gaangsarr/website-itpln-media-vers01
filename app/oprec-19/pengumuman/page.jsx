"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  X,
  Calendar,
  User,
  GraduationCap,
  Award,
  Clock,
  ArrowLeft,
  Eye,
  EyeOff,
  Timer,
  Bell,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

// ============================
// KONFIGURASI PENGUMUMAN
// Ubah menjadi true untuk membuka halaman pengumuman
// ============================
const PENGUMUMAN = false; // UBAH KE TRUE UNTUK MEMBUKA PENGUMUMAN

// Toast Notification Component
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
        return <CheckCircle className="w-5 h-5" />;
      case "error":
        return <XCircle className="w-5 h-5" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5" />;
      case "info":
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 p-4 border rounded-lg shadow-lg max-w-md ${getToastStyles()}`}
      >
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
  );
};

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600">Mencari data...</span>
  </div>
);

// Coming Soon Component
const ComingSoon = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden p-10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <Timer className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Coming Soon
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pengumuman Hasil Seleksi
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              ITPLN Media Batch 19
            </p>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-orange-700">
                      Status
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      Dalam Proses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-blue-700">
                      Estimasi
                    </p>
                    <p className="text-lg font-bold text-gray-900">Segera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Time Display */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl max-w-md mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Waktu Saat Ini
                </h3>
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentTime.toLocaleTimeString("id-ID", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
              <div className="text-lg text-gray-600 mt-2">
                {currentTime.toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 to-slate-400/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                  <Info className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">
                    Informasi Penting
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Hasil seleksi sedang dalam tahap finalisasi</li>
                    <li>• Pengumuman akan dibuka segera</li>
                    <li>• Pantau terus halaman ini untuk update terbaru</li>
                    <li>• Hubungi admin jika ada pertanyaan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl">
              <h4 className="font-bold text-gray-800 mb-6 text-lg">
                📞 Kontak Admin
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl hover:bg-white/50 transition-all duration-200 hover:scale-105 cursor-pointer group">
                  <p className="font-semibold text-gray-700 mb-2">Email</p>
                  <p className="text-blue-600 font-medium group-hover:font-bold transition-all">
                    itplnmediacorp@gmail.com
                  </p>
                </div>
                <div className="p-4 rounded-xl hover:bg-white/50 transition-all duration-200 hover:scale-105 cursor-pointer group">
                  <p className="font-semibold text-gray-700 mb-2">WhatsApp</p>
                  <p className="text-green-600 font-medium group-hover:font-bold transition-all">
                    +62 812-3456-7890
                  </p>
                </div>
                <div className="p-4 rounded-xl hover:bg-white/50 transition-all duration-200 hover:scale-105 cursor-pointer group">
                  <p className="font-semibold text-gray-700 mb-2">Instagram</p>
                  <p className="text-pink-600 font-medium group-hover:font-bold transition-all">
                    @itplnmedia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Success Result Component (sama seperti sebelumnya)
const SuccessResult = ({ data }) => (
  <div className="space-y-6">
    <div className="text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-12 h-12 text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-green-600 mb-2">SELAMAT!</h2>
      <p className="text-lg text-gray-600">
        Anda diterima sebagai anggota ITPLN Media Batch 19
      </p>
    </div>

    <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Nama Lengkap
                </p>
                <p className="text-lg font-bold text-green-900">
                  {data.namaLengkap}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">NIM</p>
                <p className="text-lg font-semibold text-green-900">
                  {data.nim}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">Jurusan</p>
                <p className="text-lg font-semibold text-green-900">
                  {data.jurusan}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  Divisi Diterima
                </p>
                <p className="text-xl font-bold text-green-900 bg-white px-3 py-2 rounded-lg inline-block">
                  {data.divisiDiterima}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Next Steps */}
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
        <Info className="w-5 h-5" />
        Langkah Selanjutnya
      </h3>
      <ul className="space-y-3 text-blue-800">
        <li className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
          <span>Bergabung ke grup WhatsApp divisi</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
          <span>Hadiri orientasi anggota baru</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
          <span>Siapkan dokumen persyaratan</span>
        </li>
      </ul>
    </div>

    <div className="bg-gray-50 rounded-xl p-6 text-center">
      <h4 className="font-semibold text-gray-800 mb-3">
        📞 Informasi Lebih Lanjut
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-medium text-gray-700">Email</p>
          <p className="text-blue-600">itplnmediacorp@gmail.com</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">WhatsApp</p>
          <p className="text-green-600">+62 812-3456-7890</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">Instagram</p>
          <p className="text-pink-600">@itplnmedia</p>
        </div>
      </div>
    </div>
  </div>
);

// Failed Result Component (sama seperti sebelumnya)
const FailedResult = ({ data }) => (
  <div className="space-y-6">
    <div className="text-center">
      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <XCircle className="w-12 h-12 text-red-600" />
      </div>
      <h2 className="text-3xl font-bold text-red-600 mb-2">BELUM BERHASIL</h2>
      <p className="text-lg text-gray-600">
        Mohon maaf, Anda belum lolos seleksi kali ini
      </p>
    </div>

    <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Nama Lengkap</p>
                <p className="text-lg font-bold text-red-900">
                  {data.namaLengkap}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">NIM</p>
                <p className="text-lg font-semibold text-red-900">{data.nim}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Jurusan</p>
                <p className="text-lg font-semibold text-red-900">
                  {data.jurusan}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-red-800">Status</p>
                <p className="text-xl font-bold text-red-900 bg-white px-3 py-2 rounded-lg inline-block">
                  TIDAK LOLOS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
      <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5" />
        Tetap Semangat dan Jangan Menyerah!
      </h3>
      <div className="text-orange-800 space-y-2">
        <p>
          • Terima kasih telah berpartisipasi dalam Open Recruitment ITPLN Media
          Batch 19
        </p>
        <p>• Kami menghargai antusiasme dan usaha yang telah Anda berikan</p>
        <p>
          • Tetap pantau media sosial kami untuk kesempatan bergabung
          selanjutnya
        </p>
        <p>
          • Jangan ragu untuk mengikuti kegiatan-kegiatan terbuka ITPLN Media
        </p>
      </div>
    </div>

    <div className="bg-gray-50 rounded-xl p-6 text-center">
      <h4 className="font-semibold text-gray-800 mb-3">📱 Tetap Terhubung</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium text-gray-700">Instagram</p>
          <p className="text-pink-600">@itplnmedia</p>
        </div>
        <div>
          <p className="font-medium text-gray-700">Email</p>
          <p className="text-blue-600">itplnmediacorp@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default function PengumumanPage() {
  const [formData, setFormData] = useState({
    nim: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  // Google Apps Script URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxlWA5i6AEL2eBRyX2KtjbJa7asEBvpxNZgzOK-OifhUa723_mNhr8bxnFQK1XvAv3O/exec";

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!formData.nim) {
      showToast("Mohon masukkan NIM Anda", "warning");
      return;
    }

    setIsLoading(true);
    setShowResult(false);

    try {
      // Call Google Apps Script dengan parameter NIM saja
      const response = await fetch(
        `${GOOGLE_SCRIPT_URL}?action=checkResult&nim=${encodeURIComponent(
          formData.nim
        )}`
      );

      const data = await response.json();

      if (data.success) {
        if (data.found) {
          setResult(data.data);
          setShowResult(true);
        } else {
          showToast("Data tidak ditemukan. Periksa kembali NIM Anda.", "error");
        }
      } else {
        throw new Error(data.message || "Terjadi kesalahan sistem");
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(
        "Terjadi kesalahan saat mengecek data. Silakan coba lagi.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ nim: "" });
    setResult(null);
    setShowResult(false);
  };

  // Jika pengumuman belum dibuka, tampilkan coming soon
  if (!PENGUMUMAN) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {!showResult ? (
          /* Form Input - Hanya NIM */
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Cek Hasil Seleksi
              </h2>
              <p className="text-gray-600">
                Masukkan NIM untuk melihat hasil seleksi Anda
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  NIM *
                </label>
                <input
                  type="text"
                  name="nim"
                  value={formData.nim}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-lg"
                  placeholder="Masukkan NIM Anda"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                  isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105"
                } text-white shadow-lg`}
              >
                {isLoading ? <LoadingSpinner /> : "Cek Hasil Seleksi"}
              </button>
            </form>

            {/* Info */}
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-blue-800 text-sm">
                  <p className="font-medium mb-1">Informasi Penting:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Pastikan NIM sesuai dengan data pendaftaran</li>
                    <li>• Hubungi admin jika mengalami kendala</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Results Display */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {result?.statusKelulusan?.toUpperCase() === "LOLOS" ? (
                <SuccessResult data={result} />
              ) : (
                <FailedResult data={result} />
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cek NIM Lain
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Cetak Hasil
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
