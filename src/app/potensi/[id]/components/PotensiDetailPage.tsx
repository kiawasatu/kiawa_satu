"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import NavbarWithAuth from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

const POTENSI_DATA = {
  pertanian: {
    id: "pertanian",
    title: "Pertanian",
    images: [
      "/images/potensidesa/cabe.jpg",
      "/images/potensidesa/cabekeriting.jpg",
      "/images/potensidesa/tomat.jpg",
      "/images/potensidesa/labu.jpg",
      "/images/potensidesa/jagung.jpg",
      "/images/potensidesa/bawangmerah.jpg",
      "/images/potensidesa/nilam.jpg",
    ],
    sections: [
      {
        title: "Cabe Merah",
        description:
          "Cabe merah menjadi salah satu komoditas unggulan pertanian di Desa Kiawa Satu. Dengan lahan yang subur dan iklim tropis yang mendukung, petani dapat menghasilkan cabe merah berkualitas tinggi sepanjang tahun. Produksi cabe merah memberikan nilai ekonomi tinggi dan menjadi sumber pendapatan utama bagi banyak keluarga petani.",
      },
      {
        title: "Cabe Keriting",
        description:
          "Cabe keriting memiliki permintaan pasar yang stabil dan harga jual yang kompetitif. Petani di desa ini telah mengembangkan teknik budidaya yang efisien untuk menghasilkan cabe keriting dengan kualitas premium. Hasil panen rutin dipasok ke pasar lokal dan regional.",
      },
      {
        title: "Tomat",
        description:
          "Budidaya tomat di Desa Kiawa Satu berkembang pesat dengan menggunakan teknologi pertanian modern. Tomat yang dihasilkan memiliki ukuran besar, warna cerah, dan rasa yang segar. Produk ini tidak hanya memenuhi kebutuhan lokal tetapi juga diekspor ke daerah lain.",
      },
      {
        title: "Labu",
        description:
          "Labu menjadi komoditas pertanian yang mudah dibudidayakan dengan hasil panen yang melimpah. Tanaman ini cocok dengan kondisi tanah di desa dan memerlukan perawatan minimal. Labu yang dihasilkan digunakan untuk konsumsi rumah tangga dan dijual ke pasar tradisional.",
      },
      {
        title: "Jagung",
        description:
          "Jagung adalah tanaman pangan utama yang ditanam secara luas oleh petani Desa Kiawa Satu. Dengan rotasi tanam yang baik, jagung dapat dipanen beberapa kali dalam setahun. Hasil panen dimanfaatkan untuk konsumsi lokal, pakan ternak, dan dijual ke industri pengolahan makanan.",
      },
      {
        title: "Bawang Merah",
        description:
          "Bawang merah memiliki nilai jual tinggi dan permintaan pasar yang konsisten. Petani menggunakan bibit unggul dan pupuk organik untuk menghasilkan bawang merah berkualitas. Produksi bawang merah memberikan kontribusi signifikan terhadap ekonomi pertanian desa.",
      },
      {
        title: "Nilam",
        description:
          "Nilam merupakan tanaman herbal bernilai ekonomi tinggi yang mulai dikembangkan di Desa Kiawa Satu. Minyak nilam yang diekstrak dari daun tanaman ini memiliki permintaan tinggi di industri kosmetik dan farmasi. Budidaya nilam memberikan alternatif pendapatan baru bagi petani lokal.",
      },
    ],
  },
  peternakan: {
    id: "peternakan",
    title: "Peternakan",
    images: ["/images/potensidesa/babi.jpg"],
    sections: [
      {
        title: "Peternakan Babi",
        description:
          "Peternakan babi merupakan sektor usaha yang berkembang pesat di Desa Kiawa Satu. Babi dipelihara dengan sistem manajemen modern yang memperhatikan kesehatan dan kesejahteraan hewan. Peternak menggunakan pakan berkualitas tinggi dan menerapkan standar kebersihan yang ketat untuk menghasilkan daging babi berkualitas premium.",
      },
      {
        title: "Pakan Berkualitas",
        description:
          "Peternak memberikan pakan bernutrisi tinggi yang diformulasikan khusus untuk pertumbuhan optimal babi. Pakan terdiri dari campuran jagung, dedak, konsentrat protein, dan suplemen vitamin. Beberapa peternak juga mengolah limbah pertanian menjadi pakan alternatif yang ekonomis dan ramah lingkungan.",
      },
      {
        title: "Program Kesehatan Ternak",
        description:
          "Desa memfasilitasi program vaksinasi rutin dan pemeriksaan kesehatan berkala oleh petugas veteriner. Program ini bertujuan mencegah penyebaran penyakit dan memastikan produktivitas ternak tetap tinggi. Peternak juga mendapat pelatihan tentang biosekuriti dan manajemen kesehatan ternak yang baik.",
      },
      {
        title: "Nilai Ekonomi",
        description:
          "Peternakan babi memberikan kontribusi ekonomi signifikan bagi masyarakat desa. Harga jual yang stabil dan permintaan pasar yang tinggi menjadikan usaha ini menguntungkan. Hasil penjualan tidak hanya untuk konsumsi lokal tetapi juga dipasarkan ke kota-kota besar di sekitar desa.",
      },
    ],
  },
  "usaha-swasta": {
    id: "usaha-swasta",
    title: "Usaha Swasta Rumahan",
    images: [
      "/images/potensidesa/kacangshanghai.jpg",
      "/images/potensidesa/kacangshanghai2.jpg",
      "/images/potensidesa/kuetelur.jpg",
      "/images/potensidesa/keripik.jpg",
      "/images/potensidesa/rujak.jpg",
      "/images/potensidesa/ayam_kuning.jpg",
      "/images/potensidesa/ikangoreng.jpg",
      "/images/potensidesa/cakalangfufu.jpg",
      "/images/potensidesa/bihun.jpg",
      "/images/potensidesa/salad.jpg",
      "/images/potensidesa/donut.jpg",
      "/images/potensidesa/kue.jpg",
      "/images/potensidesa/kangkung.jpg",
      "/images/potensidesa/ikanbakar.jpg",
    ],
    sections: [
      {
        title: "Kacang Shanghai",
        description:
          "Produksi kacang shanghai menjadi salah satu usaha rumahan yang berkembang pesat di Desa Kiawa Satu. Menggunakan resep tradisional yang telah diwariskan turun-temurun, kacang shanghai yang dihasilkan memiliki rasa gurih dan renyah yang khas. Produk ini dikemas dengan higienis dan dipasarkan ke toko-toko lokal serta dijual online.",
      },
      {
        title: "Kue Telur",
        description:
          "Kue telur adalah camilan tradisional yang sangat populer di kalangan masyarakat. Dibuat dari telur segar, tepung terigu, dan gula dengan komposisi pas, kue telur yang dihasilkan memiliki tekstur lembut dan aroma harum. Produk ini sering menjadi oleh-oleh khas dari Desa Kiawa Satu.",
      },
      {
        title: "Kue Inbeikuk",
        description:
          "Kue inbeikuk merupakan kue tradisional khas yang memiliki cita rasa unik dan diwariskan secara turun-temurun. Dibuat dengan bahan-bahan pilihan dan resep autentik, kue ini menjadi salah satu produk unggulan usaha rumahan yang mempertahankan kearifan lokal sambil terus berinovasi dalam penyajian dan pengemasan.",
      },
      {
        title: "Balapis",
        description:
          "Balapis adalah kue lapis tradisional yang dibuat dengan teknik khusus berlapis-lapis hingga menghasilkan tekstur yang lembut dan kenyal. Kue ini memiliki berbagai varian rasa dan warna yang menarik. Proses pembuatan yang teliti menghasilkan balapis berkualitas tinggi yang diminati sebagai sajian istimewa.",
      },
      {
        title: "Kue Telinga Gajah",
        description:
          "Kue telinga gajah terkenal dengan bentuknya yang unik dan rasa yang renyah. Dibuat dari adonan tepung yang digoreng dengan teknik khusus, menghasilkan tekstur berlapis yang gurih dan manis. Kue ini menjadi favorit banyak orang sebagai camilan atau oleh-oleh.",
      },
      {
        title: "Balapis Pisang",
        description:
          "Balapis pisang menggabungkan kelezatan kue lapis dengan aroma dan rasa pisang yang khas. Menggunakan pisang lokal berkualitas tinggi, produk ini menawarkan perpaduan sempurna antara tekstur lembut kue lapis dengan kelezatan buah pisang. Sangat populer sebagai kue untuk acara-acara khusus.",
      },
      {
        title: "Lalampa",
        description:
          "Lalampa adalah makanan tradisional khas yang terbuat dari bahan-bahan alami dan dimasak dengan cara tradisional. Memiliki cita rasa yang khas dan nilai gizi tinggi, lalampa menjadi salah satu kuliner yang terus dilestarikan dan dikembangkan oleh para pengusaha rumahan di desa.",
      },
      {
        title: "Kuekuk",
        description:
          "Kuekuk merupakan kue tradisional dengan karakteristik unik yang membedakannya dari kue lainnya. Dibuat dengan resep turun-temurun dan bahan-bahan berkualitas, kuekuk menjadi salah satu produk kuliner yang mencerminkan kekayaan budaya kuliner lokal dan terus diminati hingga saat ini.",
      },
      {
        title: "Panada",
        description:
          "Panada adalah makanan khas berupa roti goreng berisi yang sangat populer. Dengan isian yang beragam seperti ikan cakalang atau daging, panada memiliki rasa gurih dan tekstur yang renyah di luar namun lembut di dalam. Produk ini menjadi favorit untuk sarapan atau camilan kapan saja.",
      },
      {
        title: "Biapong Goreng",
        description:
          "Biapong goreng adalah camilan tradisional yang memiliki cita rasa unik dan tekstur yang khas. Dibuat dengan teknik penggorengan khusus dan bumbu rempah pilihan, biapong goreng menghasilkan makanan yang gurih dan renyah. Produk ini sangat diminati sebagai camilan atau lauk pendamping.",
      },
      {
        title: "Midal",
        description:
          "Midal merupakan kuliner tradisional dengan bahan dasar dan proses pembuatan yang khas. Memiliki nilai budaya yang tinggi, midal terus diproduksi oleh pengusaha rumahan dengan tetap mempertahankan resep asli namun dengan standar kebersihan.",
      },
      {
        title: "Bermacam Ikan & Sayur Masak",
        description:
          "Usaha pengolahan ikan masak menawarkan berbagai variasi olahan ikan dengan bumbu dan teknik masak tradisional. Dari ikan rica-rica, ikan bumbu kuning, hingga ikan woku, setiap hidangan dibuat dengan ikan segar dan rempah-rempah pilihan.",
      },
    ],
  },
}

export default function PotensiDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const potensi = POTENSI_DATA[params.id as keyof typeof POTENSI_DATA]

  // Auto slide images
  useEffect(() => {
    if (!potensi || potensi.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % potensi.images.length)
    }, 4000) // Ganti gambar setiap 4 detik

    return () => clearInterval(interval)
  }, [potensi])

  if (!potensi) {
    return (
      <main>
        <NavbarWithAuth />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500">Potensi tidak ditemukan</p>
        </div>
        <Footer />
      </main>
    )
  }

  const hasMultipleImages = potensi.images.length > 1

  return (
    <main>
      <NavbarWithAuth />

      <div className="w-full bg-linear-to-b from-gray-50 to-white">
        {/* Hero Image Section with Slider */}
        <div className="w-full bg-white shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="relative w-full h-[400px] md:h-[480px] overflow-hidden group">
              {potensi.images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${potensi.title} ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              ))}

              {/* Navigation Buttons */}
              {hasMultipleImages && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev - 1 + potensi.images.length) % potensi.images.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex((prev) => (prev + 1) % potensi.images.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
                    {potensi.title}
                  </h1>
                  <div className="w-24 h-1.5 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Slider Indicators */}
              {hasMultipleImages && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {potensi.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75 w-2"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-16">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 mb-12 font-semibold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Kembali
          </button>

          {/* Sections */}
          <div className="space-y-10">
            {potensi.sections.map((section, index) => {
              const letterMap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="shrink-0 w-12 h-12 bg-linear-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-xl">
                        {letterMap[index] || ""}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pt-1">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed pl-[68px]">
                    {section.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Back Button Footer */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => router.back()}
              className="px-10 py-4 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Kembali ke Potensi Desa
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}