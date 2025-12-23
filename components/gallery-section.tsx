"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gemini-generated-image-8g9k5y8g9k5y8g9k.png",
    alt: "Young patient ultrasound",
  },
  {
    src: "/images/gemini-generated-image-9zxwgp9zxwgp9zxw.png",
    alt: "Patient examination",
  },
  {
    src: "/images/gemini-generated-image-a5phyaa5phyaa5ph.png",
    alt: "Ultrasound diagnostic",
  },
  {
    src: "/images/gemini-generated-image-q6ihuqq6ihuqq6ih.png",
    alt: "Abdominal ultrasound",
  },
  {
    src: "/images/gemini-generated-image-yfox69yfox69yfox.png",
    alt: "Blood pressure monitoring",
  },
  {
    src: "/images/gemini-generated-image-f9sufdf9sufdf9su.png",
    alt: "Doctor consultation",
  },
  {
    src: "/images/gemini-generated-image-3m8zzg3m8zzg3m8z.png",
    alt: "Medical examination",
  },
  {
    src: "/images/gemini-generated-image-wteqmkwteqmkwteq.png",
    alt: "Patient care",
  },
  {
    src: "/images/gemini-generated-image-n3i9nen3i9nen3i9.png",
    alt: "Diagnostic imaging",
  },
]

export function GallerySection() {
  const { t, dir } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-20 bg-muted/50 dark:bg-muted/20" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("gallery.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] dark:text-white font-serif">
            {t("gallery.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0a1b3d]/0 group-hover:bg-[#0a1b3d]/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {image.alt}
                </span>
              </div>
              {/* Border Accent */}
              <div className="absolute inset-0 border-2 border-[#f5d547]/0 group-hover:border-[#f5d547]/50 transition-colors duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#f5d547] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
