"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Upload,
  Check,
  X,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

// Komponen Toast Notification
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

// Komponen Success Popup
const SuccessPopup = ({ isVisible, onClose, participantData }) => {
  if (!isVisible) return null;

  const joinWhatsAppGroup = () => {
    window.open(
      "https://chat.whatsapp.com/LGMgGXkyhXz2iYqj8swQpL?mode=ac_t",
      "_blank"
    );
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-t-2xl text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-purple-500"
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
          <p className="text-purple-100">Selamat datang peserta NCC 2025</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Registration Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Data Pendaftaran Anda:
            </h3>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 space-y-2">
              <div className="text-sm text-gray-600">
                <span className="font-medium">Nama:</span>{" "}
                {participantData?.namaLengkap}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">Kategori:</span>{" "}
                {participantData?.kategoriLomba}
              </div>
              {participantData?.namaTim && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Tim:</span>{" "}
                  {participantData?.namaTim}
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp Group Section */}
          <div className="border-t pt-6">
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Langkah Selanjutnya:
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                <strong>WAJIB</strong> bergabung ke grup WhatsApp peserta untuk
                mendapatkan informasi lomba dan pengumuman penting!
              </p>
            </div>

            <button
              onClick={joinWhatsAppGroup}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>Gabung Grup WhatsApp Peserta</span>
            </button>

            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-800 text-center font-medium">
                ⚠️ Informasi penting tentang timeline, technical meeting, dan
                pengumuman akan diberikan di grup!
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <h4 className="font-semibold text-gray-800 mb-2">
              Yang Akan Anda Dapatkan:
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Informasi terbaru</li>
              <li>• Link pengumpulan karya</li>
              <li>• Pertanyaan-pertanyaan peserta</li>
            </ul>
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
          <p className="text-xs text-gray-500 text-center mt-2">
            Anda dapat bergabung ke grup kapan saja melalui link yang diberikan
          </p>
        </div>
      </div>
    </div>
  );
};

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

// Pindahkan komponen Step1 ke luar dari komponen utama
const Step1 = ({
  formData,
  handleInputChange,
  handleFileUpload,
  uploadStatus,
  referralValidation,
  handleReferralCheck,
  handleNext,
}) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Pendaftaran NCC 2025
      </h2>
      <p className="text-gray-600">
        Lengkapi data diri Anda untuk mendaftar lomba
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Nama Lengkap/Nama Ketua Tim *
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
          name="nomorWa"
          value={formData.nomorWa}
          onChange={handleInputChange}
          placeholder="08xxxxxxxxxx"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Asal Sekolah/Instansi *
        </label>
        <input
          type="text"
          name="asalSekolah"
          value={formData.asalSekolah}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-4">
        Kategori Lomba *
      </label>
      <div className="space-y-3">
        {["Poster", "Instagram Reels", "UI Design"].map((category) => (
          <label key={category} className="flex items-center space-x-3">
            <input
              type="radio"
              name="kategoriLomba"
              value={category}
              checked={formData.kategoriLomba === category}
              onChange={handleInputChange}
              className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              required
            />
            <span className="text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Bukti Follow Instagram @itplnmedia *
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-purple-400 transition-colors">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="bukti-follow"
              className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
            >
              <span>Upload gambar</span>
              <input
                id="bukti-follow"
                name="bukti-follow"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => handleFileUpload(e, "buktiFollow")}
                required
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          {formData.buktiFollow && (
            <div className="text-sm">
              {formData.buktiFollow.status === "selected" && (
                <p className="text-blue-600">
                  📁 {formData.buktiFollow.file.name}
                </p>
              )}
              {uploadStatus.buktiFollow === "uploading" && (
                <p className="text-yellow-600">
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-yellow-600 border-t-transparent mr-2"></span>
                  Uploading...
                </p>
              )}
              {formData.buktiFollow.status === "uploaded" && (
                <p className="text-green-600">✓ Uploaded</p>
              )}
              {uploadStatus.buktiFollow === "error" && (
                <p className="text-red-600">❌ Upload failed</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Kode Referral (Opsional)
      </label>
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          name="kodeReferral"
          value={formData.kodeReferral}
          onChange={handleInputChange}
          placeholder="Masukkan kode referral"
          className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button
          type="button"
          onClick={handleReferralCheck}
          disabled={
            !formData.kodeReferral.trim() || referralValidation.isValidating
          }
          className="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {referralValidation.isValidating ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              <span>Checking...</span>
            </>
          ) : (
            <span>Periksa</span>
          )}
        </button>
      </div>

      {referralValidation.checked && (
        <div className="mt-2 flex items-center space-x-2">
          {referralValidation.isValid ? (
            <>
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-green-600 font-medium">
                Kode referral valid! Anda mendapat diskon.
              </span>
            </>
          ) : (
            <>
              <X className="w-5 h-5 text-red-500" />
              <span className="text-red-600 font-medium">
                Kode referral tidak valid.
              </span>
            </>
          )}
        </div>
      )}
    </div>

    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleNext}
        className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
      >
        <span>Selanjutnya</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// Pindahkan komponen Step2 ke luar dari komponen utama
const Step2 = ({
  formData,
  handleInputChange,
  handleFileUpload,
  uploadStatus,
  handleSubmit,
  isSubmitting,
  setCurrentStep,
  referralValidation,
  formatPrice,
}) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Pembayaran & Data Tim
      </h2>
      <p className="text-gray-600">
        Kategori:{" "}
        <span className="font-semibold text-purple-600">
          {formData.kategoriLomba}
        </span>
      </p>
    </div>

    {/* Price Display */}
    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-purple-800 mb-2">
          Biaya Pendaftaran
        </h3>
        {referralValidation.isValid && referralValidation.checked ? (
          <div>
            <div className="text-gray-500 line-through text-lg">
              {formatPrice(75000)}
            </div>
            <div className="text-3xl font-bold text-green-600">
              {formatPrice(60000)}
            </div>
            <div className="text-sm text-green-600 font-medium">
              Diskon 20% dengan kode referral!
            </div>
          </div>
        ) : (
          <div className="text-3xl font-bold text-purple-800">
            {formatPrice(75000)}
          </div>
        )}
      </div>
    </div>

    {/* Payment Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload Bukti Pembayaran *
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-purple-400 transition-colors">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="bukti-pembayaran"
              className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none"
            >
              <span>Upload bukti pembayaran</span>
              <input
                id="bukti-pembayaran"
                name="bukti-pembayaran"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => handleFileUpload(e, "buktiPembayaran")}
                required
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          {formData.buktiPembayaran && (
            <div className="text-sm">
              {formData.buktiPembayaran.status === "selected" && (
                <p className="text-blue-600">
                  📁 {formData.buktiPembayaran.file.name}
                </p>
              )}
              {uploadStatus.buktiPembayaran === "uploading" && (
                <p className="text-yellow-600">
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-yellow-600 border-t-transparent mr-2"></span>
                  Uploading...
                </p>
              )}
              {formData.buktiPembayaran.status === "uploaded" && (
                <p className="text-green-600">✓ Uploaded</p>
              )}
              {uploadStatus.buktiPembayaran === "error" && (
                <p className="text-red-600">❌ Upload failed</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Team Data for Instagram Reels and UI Design */}
    {(formData.kategoriLomba === "Instagram Reels" ||
      formData.kategoriLomba === "UI Design") && (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Data Tim</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Tim *
          </label>
          <input
            type="text"
            name="namaTim"
            value={formData.namaTim}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nama Anggota 1 *
          </label>
          <input
            type="text"
            name="anggota1"
            value={formData.anggota1}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {formData.kategoriLomba === "Instagram Reels" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Anggota 2 (Opsional)
            </label>
            <input
              type="text"
              name="anggota2"
              value={formData.anggota2}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        )}
      </div>
    )}

    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => setCurrentStep(1)}
        className="bg-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors flex items-center space-x-2"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Kembali</span>
      </button>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
            <span>Mengirim...</span>
          </>
        ) : (
          <span>Daftar Sekarang</span>
        )}
      </button>
    </div>
  </div>
);

const NCCRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [referralValidation, setReferralValidation] = useState({
    isValidating: false,
    isValid: false,
    checked: false,
  });

  const [formData, setFormData] = useState({
    // Step 1 data
    namaLengkap: "",
    email: "",
    nomorWa: "",
    asalSekolah: "",
    kategoriLomba: "",
    buktiFollow: null,
    kodeReferral: "",

    // Step 2 data (conditional)
    buktiPembayaran: null,
    namaTim: "",
    anggota1: "",
    anggota2: "",
  });

  // Gunakan hook toast
  const { toast, showToast, hideToast } = useToast();

  // URL Google Apps Script Anda
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyegTLV_TjHJDtbF4KAWbpj2aNI03S0aRxFw98F-FMWXz0TCwYVQOnHUxzQcQZ1QMOj/exec";

  // Fungsi untuk validasi kode referral menggunakan Google Apps Script
  const validateReferralCode = async (code) => {
    setReferralValidation({
      isValidating: true,
      isValid: false,
      checked: false,
    });

    try {
      const response = await fetch(
        `${SCRIPT_URL}?action=validateReferral&code=${encodeURIComponent(code)}`
      );
      const result = await response.json();

      setReferralValidation({
        isValidating: false,
        isValid: result.valid,
        checked: true,
      });

      return result.valid;
    } catch (error) {
      console.error("Error validating referral code:", error);

      setReferralValidation({
        isValidating: false,
        isValid: false,
        checked: true,
      });

      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset referral validation when code changes
    if (name === "kodeReferral") {
      setReferralValidation({
        isValidating: false,
        isValid: false,
        checked: false,
      });
    }
  };

  const [uploadStatus, setUploadStatus] = useState({});

  const uploadToGoogleDrive = async (file, fieldName) => {
    setUploadStatus((prev) => ({ ...prev, [fieldName]: "uploading" }));

    try {
      // Convert file to base64
      const base64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(",")[1]);
        reader.readAsDataURL(file);
      });

      const formData = new FormData();
      formData.append("file", base64);
      formData.append("fileName", `${fieldName}_${Date.now()}_${file.name}`);
      formData.append("mimeType", file.type);

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setUploadStatus((prev) => ({ ...prev, [fieldName]: "success" }));
        showToast("File berhasil diupload!", "success");
        return {
          file: file,
          googleDriveUrl: result.fileUrl,
          googleDriveId: result.fileId,
        };
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      setUploadStatus((prev) => ({ ...prev, [fieldName]: "error" }));
      showToast(`Gagal mengupload file: ${error.message}`, "error");
      return null;
    }
  };

  const handleFileUpload = async (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show file selected immediately
    setFormData((prev) => ({
      ...prev,
      [fieldName]: { file: file, status: "selected" },
    }));

    // Upload to Google Drive
    const uploadResult = await uploadToGoogleDrive(file, fieldName);

    if (uploadResult) {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: {
          ...uploadResult,
          status: "uploaded",
        },
      }));
    }
  };

  const handleReferralCheck = async () => {
    if (formData.kodeReferral.trim()) {
      await validateReferralCode(formData.kodeReferral.trim());
    }
  };

  const handleNext = async () => {
    // Validate step 1
    const requiredFields = [
      "namaLengkap",
      "email",
      "nomorWa",
      "asalSekolah",
      "kategoriLomba",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    // Check if buktiFollow is uploaded
    if (!formData.buktiFollow || formData.buktiFollow.status !== "uploaded") {
      showToast(
        "Mohon upload bukti follow Instagram terlebih dahulu!",
        "warning"
      );
      return;
    }

    if (missingFields.length > 0) {
      showToast("Mohon lengkapi semua field yang diperlukan!", "warning");
      return;
    }

    // Validate referral code if provided
    if (formData.kodeReferral.trim() && !referralValidation.checked) {
      showToast("Mohon periksa kode referral terlebih dahulu!", "warning");
      return;
    }

    setCurrentStep(2);
  };

  // Fungsi untuk submit data pendaftaran ke Google Sheets
  const submitToDatabase = async () => {
    try {
      const params = new URLSearchParams({
        action: "submitRegistration",
        namaLengkap: formData.namaLengkap,
        email: formData.email,
        nomorWa: formData.nomorWa,
        asalSekolah: formData.asalSekolah,
        kategoriLomba: formData.kategoriLomba,
        kodeReferral: formData.kodeReferral,
        buktiFollowUrl: formData.buktiFollow?.googleDriveUrl || "",
        buktiPembayaranUrl: formData.buktiPembayaran?.googleDriveUrl || "",
        namaTim: formData.namaTim,
        anggota1: formData.anggota1,
        anggota2: formData.anggota2,
      });

      const response = await fetch(`${SCRIPT_URL}?${params.toString()}`);
      const result = await response.json();

      if (result.success) {
        return true;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting to database:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate step 2 based on category
    if (
      !formData.buktiPembayaran ||
      formData.buktiPembayaran.status !== "uploaded"
    ) {
      showToast("Mohon upload bukti pembayaran terlebih dahulu!", "warning");
      setIsSubmitting(false);
      return;
    }

    let requiredStep2Fields = [];

    if (formData.kategoriLomba === "Instagram Reels") {
      requiredStep2Fields.push("namaTim", "anggota1");
    } else if (formData.kategoriLomba === "UI Design") {
      requiredStep2Fields.push("namaTim", "anggota1");
    }

    const missingFields = requiredStep2Fields.filter(
      (field) => !formData[field]
    );

    if (missingFields.length > 0) {
      showToast("Mohon lengkapi semua field yang diperlukan!", "warning");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit ke database
      await submitToDatabase();

      setSubmittedData({
        namaLengkap: formData.namaLengkap,
        kategoriLomba: formData.kategoriLomba,
        namaTim: formData.namaTim,
        email: formData.email,
        nomorWa: formData.nomorWa,
        asalSekolah: formData.asalSekolah,
        anggota1: formData.anggota1,
        anggota2: formData.anggota2,
      });

      // Show success popup instead of toast
      setShowSuccessPopup(true);

      // Reset form
      setFormData({
        namaLengkap: "",
        email: "",
        nomorWa: "",
        asalSekolah: "",
        kategoriLomba: "",
        buktiFollow: null,
        kodeReferral: "",
        buktiPembayaran: null,
        namaTim: "",
        anggota1: "",
        anggota2: "",
      });
      setCurrentStep(1);
      setReferralValidation({
        isValidating: false,
        isValid: false,
        checked: false,
      });
      setUploadStatus({});
    } catch (error) {
      showToast(
        `Terjadi kesalahan saat menyimpan data: ${error.message}`,
        "error"
      );
    }

    setIsSubmitting(false);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setSubmittedData(null);
  };

  const getPrice = () => {
    const basePrice = 75000;
    const discountedPrice = 60000;
    return referralValidation.isValid && referralValidation.checked
      ? discountedPrice
      : basePrice;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      {/* Success Popup */}
      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={closeSuccessPopup}
        participantData={submittedData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 1 ? "text-purple-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 1
                    ? "border-purple-600 bg-purple-600 text-white"
                    : "border-gray-300"
                }`}
              >
                1
              </div>
              <span className="font-medium">Data Diri</span>
            </div>
            <div
              className={`w-16 h-1 ${
                currentStep >= 2 ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></div>
            <div
              className={`flex items-center space-x-2 ${
                currentStep >= 2 ? "text-purple-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 2
                    ? "border-purple-600 bg-purple-600 text-white"
                    : "border-gray-300"
                }`}
              >
                2
              </div>
              <span className="font-medium">Pembayaran</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <form
          className="bg-white rounded-xl shadow-lg p-8"
          onSubmit={handleSubmit}
        >
          {currentStep === 1 ? (
            <Step1
              formData={formData}
              handleInputChange={handleInputChange}
              handleFileUpload={handleFileUpload}
              uploadStatus={uploadStatus}
              referralValidation={referralValidation}
              handleReferralCheck={handleReferralCheck}
              handleNext={handleNext}
            />
          ) : (
            <Step2
              formData={formData}
              handleInputChange={handleInputChange}
              handleFileUpload={handleFileUpload}
              uploadStatus={uploadStatus}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              setCurrentStep={setCurrentStep}
              referralValidation={referralValidation}
              formatPrice={formatPrice}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default NCCRegistrationForm;
