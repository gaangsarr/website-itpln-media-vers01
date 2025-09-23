"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Upload,
  Check,
  X,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  User,
  Mail,
  Calendar,
  FileText,
  Target,
} from "lucide-react";
import Link from "next/link";

// URL Google Apps Script yang baru
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz6mlYb1NzuOucsdjE2SOuK_46GoYoZ1ZorbxDL_vr1jSTnkfBYQnirq8Utom8FBhGC/exec";

// ============================
// CONFIGURASI - MUDAH DIUBAH
// ============================
const jurusanOptions = [
  "Teknik Elektro",
  "Teknik Informatika",
  "Teknik Komputer",
  "Sistem Informasi",
  "Manajemen",
  "Akuntansi",
  "Desain Komunikasi Visual",
  "Teknik Sipil",
  "Teknik Mesin",
  "Psikologi",
  "Hukum",
  // Tambah jurusan baru di sini
];

const divisiOptions = [
  "Program Director",
  "Creative Director",
  "Marketing Communication",
];

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

// Progress Steps Component
const ProgressSteps = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index + 1 <= currentStep
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1 <= currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              index + 1
            )}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`w-12 h-1 ${
                index + 1 < currentStep ? "bg-blue-600" : "bg-gray-200"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function RegistrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  const [uploadStatus, setUploadStatus] = useState({
    cv: "idle",
    portfolio: "idle",
  });

  const [formData, setFormData] = useState({
    nama: "",
    email: "", // ⚠️ TAMBAH EMAIL
    nim: "",
    jurusan: "",
    tanggalLahir: "",
    divisiPilihan1: "", // ⚠️ DIVISI 1
    alasanDivisi1: "", // ⚠️ ALASAN DIVISI 1
    divisiPilihan2: "", // ⚠️ DIVISI 2
    alasanDivisi2: "", // ⚠️ ALASAN DIVISI 2
    cv: null,
    portfolio: null,
  });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        resolve(base64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle file upload
  const handleFileUpload = async (file, fieldName) => {
    if (!file) return null;

    setUploadStatus((prev) => ({ ...prev, [fieldName]: "uploading" }));

    try {
      const base64Data = await fileToBase64(file);
      const formData = new FormData();
      formData.append("action", "uploadFile");
      formData.append("file", base64Data);
      formData.append("fileName", `${fieldName}_${Date.now()}_${file.name}`);
      formData.append("mimeType", file.type);
      formData.append("fileType", fieldName);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setUploadStatus((prev) => ({ ...prev, [fieldName]: "success" }));
        showToast(`${fieldName.toUpperCase()} berhasil diupload!`, "success");
        return result.fileUrl;
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus((prev) => ({ ...prev, [fieldName]: "error" }));
      showToast(`Gagal mengunggah ${fieldName}. Silakan coba lagi.`, "error");
      return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      if (file && file.size > 10 * 1024 * 1024) {
        showToast("Ukuran file maksimal 10MB", "warning");
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: { file: file, status: "selected" },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          formData.nama &&
          formData.email &&
          validateEmail(formData.email) &&
          formData.nim &&
          formData.jurusan &&
          formData.tanggalLahir
        );
      case 2:
        return (
          formData.divisiPilihan1 &&
          formData.alasanDivisi1.length >= 50 &&
          formData.divisiPilihan2 &&
          formData.alasanDivisi2.length >= 50 &&
          formData.divisiPilihan1 !== formData.divisiPilihan2
        );
      case 3:
        return formData.cv && formData.portfolio;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    } else {
      let message = "Mohon lengkapi semua field yang diperlukan";
      if (
        currentStep === 1 &&
        formData.email &&
        !validateEmail(formData.email)
      ) {
        message = "Format email tidak valid";
      } else if (
        currentStep === 2 &&
        formData.divisiPilihan1 === formData.divisiPilihan2
      ) {
        message = "Pilihan divisi 1 dan 2 harus berbeda";
      }
      showToast(message, "warning");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) {
      showToast("Mohon lengkapi semua data terlebih dahulu", "warning");
      return;
    }

    setIsSubmitting(true);

    try {
      showToast("Mengupload file...", "info");

      const cvUrl = await handleFileUpload(formData.cv?.file, "cv");
      if (!cvUrl) throw new Error("CV upload failed");

      const portfolioUrl = await handleFileUpload(
        formData.portfolio?.file,
        "portfolio"
      );
      if (!portfolioUrl) throw new Error("Portfolio upload failed");

      // ⚠️ GUNAKAN FORMDATA INSTEAD OF JSON
      const formDataPayload = new FormData();
      formDataPayload.append("action", "submitRegistration");
      formDataPayload.append("nama", formData.nama);
      formDataPayload.append("email", formData.email);
      formDataPayload.append("nim", formData.nim);
      formDataPayload.append("jurusan", formData.jurusan);
      formDataPayload.append("tanggalLahir", formData.tanggalLahir);
      formDataPayload.append("divisiPilihan1", formData.divisiPilihan1);
      formDataPayload.append("alasanDivisi1", formData.alasanDivisi1);
      formDataPayload.append("divisiPilihan2", formData.divisiPilihan2);
      formDataPayload.append("alasanDivisi2", formData.alasanDivisi2);
      formDataPayload.append("cvUrl", cvUrl);
      formDataPayload.append("portfolioUrl", portfolioUrl);

      console.log("Submitting data via FormData");
      showToast("Menyimpan data pendaftaran...", "info");

      // ⚠️ FETCH DENGAN FORMDATA (NO HEADERS)
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataPayload,
        // JANGAN TAMBAH HEADERS!
      });

      // Handle response
      if (response.ok) {
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        let result;
        try {
          result = JSON.parse(responseText);
        } catch (parseError) {
          if (
            responseText.includes("success") ||
            responseText.includes("berhasil")
          ) {
            result = {
              success: true,
              message: "Pendaftaran berhasil!",
              registrationId: "REG-" + Date.now().toString().substr(-8),
            };
          } else {
            throw new Error("Invalid response format");
          }
        }

        if (result.success) {
          showToast(
            `Pendaftaran berhasil! ${
              result.registrationId ? "ID: " + result.registrationId : ""
            }`,
            "success"
          );
          setCurrentStep(4);
        } else {
          throw new Error(result.error || "Submission failed");
        }
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        `Terjadi kesalahan: ${error.message}. Silakan coba lagi.`,
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-blue-600" />
              Data Pribadi
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            {/* ⚠️ FIELD EMAIL BARU */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Aktif *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-4 border rounded-xl focus:ring-2 transition-all ${
                  formData.email && !validateEmail(formData.email)
                    ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="namakamu@gmail.com"
              />
              {formData.email && !validateEmail(formData.email) && (
                <p className="text-red-500 text-sm mt-1">
                  Format email tidak valid
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NIM *
              </label>
              <input
                type="text"
                name="nim"
                value={formData.nim}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Masukkan NIM"
              />
            </div>

            {/* ⚠️ DROPDOWN JURUSAN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jurusan *
              </label>
              <select
                name="jurusan"
                value={formData.jurusan}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="">Pilih jurusan</option>
                {jurusanOptions.map((jurusan, index) => (
                  <option key={index} value={jurusan}>
                    {jurusan}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Lahir *
              </label>
              <input
                type="date"
                name="tanggalLahir"
                value={formData.tanggalLahir}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-blue-600" />
              Pilihan Divisi (2 Pilihan)
            </h2>

            {/* ⚠️ DIVISI PILIHAN 1 */}
            <div className="p-6 bg-blue-50 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                Pilihan Divisi 1
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Divisi Prioritas Utama *
                </label>
                <select
                  name="divisiPilihan1"
                  value={formData.divisiPilihan1}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Pilih divisi prioritas utama</option>
                  {divisiOptions.map((divisi, index) => (
                    <option key={index} value={divisi}>
                      {divisi}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alasan Memilih Divisi 1 * (min. 50 karakter)
                </label>
                <textarea
                  name="alasanDivisi1"
                  value={formData.alasanDivisi1}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                  placeholder="Jelaskan mengapa Anda tertarik dengan divisi ini dan bagaimana Anda dapat berkontribusi..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.alasanDivisi1.length}/50 karakter minimum
                </p>
              </div>
            </div>

            {/* ⚠️ DIVISI PILIHAN 2 */}
            <div className="p-6 bg-purple-50 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                Pilihan Divisi 2
              </h3>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Divisi Alternatif *
                </label>
                <select
                  name="divisiPilihan2"
                  value={formData.divisiPilihan2}
                  onChange={handleInputChange}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="">Pilih divisi alternatif</option>
                  {divisiOptions
                    .filter((divisi) => divisi !== formData.divisiPilihan1)
                    .map((divisi, index) => (
                      <option key={index} value={divisi}>
                        {divisi}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alasan Memilih Divisi 2 * (min. 50 karakter)
                </label>
                <textarea
                  name="alasanDivisi2"
                  value={formData.alasanDivisi2}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                  placeholder="Jelaskan alasan memilih divisi alternatif ini..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.alasanDivisi2.length}/50 karakter minimum
                </p>
              </div>
            </div>

            {formData.divisiPilihan1 &&
              formData.divisiPilihan1 === formData.divisiPilihan2 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-700 text-sm font-medium">
                    ⚠️ Pilihan divisi 1 dan 2 harus berbeda
                  </p>
                </div>
              )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Upload Dokumen
            </h2>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleInputChange}
                  className="hidden"
                  id="cv-upload"
                />
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium mb-2">
                    Klik untuk upload CV
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                </label>
                {formData.cv && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700 font-medium">
                      📁 {formData.cv.file.name}
                    </span>
                    {uploadStatus.cv === "success" && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                  </div>
                )}
                {uploadStatus.cv === "uploading" && (
                  <div className="mt-2 text-blue-600 flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    Uploading...
                  </div>
                )}
                {uploadStatus.cv === "error" && (
                  <div className="mt-2 text-red-600 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Upload failed
                  </div>
                )}
              </div>
            </div>

            {/* Portfolio Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Portfolio *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  name="portfolio"
                  accept=".pdf,.jpg,.jpeg,.png,.zip,.rar"
                  onChange={handleInputChange}
                  className="hidden"
                  id="portfolio-upload"
                />
                <label
                  htmlFor="portfolio-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 font-medium mb-2">
                    Klik untuk upload Portfolio
                  </p>
                  <p className="text-sm text-gray-500">
                    PDF, JPG, PNG, ZIP up to 10MB
                  </p>
                </label>
                {formData.portfolio && (
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700 font-medium">
                      📁 {formData.portfolio.file.name}
                    </span>
                    {uploadStatus.portfolio === "success" && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                  </div>
                )}
                {uploadStatus.portfolio === "uploading" && (
                  <div className="mt-2 text-purple-600 flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                    Uploading...
                  </div>
                )}
                {uploadStatus.portfolio === "error" && (
                  <div className="mt-2 text-red-600 flex items-center gap-2">
                    <XCircle className="w-4 h-4" />
                    Upload failed
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pendaftaran Berhasil!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Terima kasih telah mendaftar Open Recruitment ITPLN Media Batch
              19.
              <br />
              <strong>Silakan bergabung ke WhatsApp Group</strong>
            </p>

            {/* WhatsApp Group Section */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl mb-8 border border-green-200">
              <div className="flex flex-col items-center">
                {/* WhatsApp Icon */}
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Join WhatsApp Group
                </h3>
                <p className="text-green-700 mb-6 max-w-sm">
                  Bergabunglah dengan grup WhatsApp untuk mendapatkan update
                  terbaru tentang proses recruitment
                </p>

                {/* Join Button */}
                <a
                  href="https://chat.whatsapp.com/your-group-link-here" // ⚠️ Ganti dengan link grup WA yang sebenarnya
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Gabung Grup WhatsApp
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>

                {/* Additional Info */}
                <div className="mt-6 flex items-center gap-2 text-sm text-green-600">
                  <Info className="w-4 h-4" />
                  <span>
                    Grup ini akan digunakan untuk komunikasi resmi recruitment
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Langkah Selanjutnya:
              </h3>
              <ul className="text-blue-800 text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Join grup WhatsApp</strong> untuk update recruitment
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Pantau informasi</strong> seleksi berkas
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <User className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Siapkan diri</strong> untuk tahap interview
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-6 rounded-xl mb-8">
              <h4 className="font-semibold text-gray-800 mb-3">
                📞 Butuh Bantuan?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex flex-col items-center">
                  <Mail className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="font-medium">Email</span>
                  <span className="text-gray-600">
                    itplnmediacorp@gmail.com
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-5 h-5 text-green-600 mb-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                  <span className="text-gray-600">0857-3270-5272</span>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    className="w-5 h-5 text-pink-600 mb-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-medium">Instagram</span>
                  <span className="text-gray-600">@itplnmedia</span>
                </div>
              </div>
            </div>

            <Link href="/">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Kembali ke Beranda
              </button>
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Kembali ke Beranda
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Daftar{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ITPLN Media
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Lengkapi form berikut untuk mendaftar sebagai anggota Batch 19
          </p>
        </div>

        {/* Progress Steps */}
        {currentStep < 4 && (
          <ProgressSteps currentStep={currentStep} totalSteps={3} />
        )}

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          {renderStep()}

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Kembali
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!validateStep(currentStep)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    validateStep(currentStep)
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Selanjutnya
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !validateStep(3)}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    !isSubmitting && validateStep(3)
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Mengirim...
                    </div>
                  ) : (
                    "Kirim Pendaftaran"
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
