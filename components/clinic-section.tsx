"use client"

import { useLanguage } from "@/components/language-provider"
import { Building2, Stethoscope, Monitor, Users } from "lucide-react"

const clinicImages = [
  {
    src: "/images/82648806056.jpeg",
    alt: { en: "Dr. Emad Hamdy - Office Consultation", ar: "د. عماد حمدي - استشارة في العيادة" },
  },
  {
    src: "/images/gemini-generated-image-ixbv79ixbv79ixbv.png",
    alt: { en: "Dr. Emad Hamdy - Patient Care", ar: "د. عماد حمدي - رعاية المرضى" },
  },
  {
    src: "/images/gemini-generated-image-i2x40ri2x40ri2x4-20copy.png",
    alt: { en: "Dr. Emad Hamdy Clinic - Consultation Room", ar: "عيادة د. عماد حمدي - غرفة الاستشارات" },
  },
]

const features = [
  { icon: Building2, key: "modern" },
  { icon: Monitor, key: "equipment" },
  { icon: Stethoscope, key: "care" },
  { icon: Users, key: "comfort" },
]

export function ClinicSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section id="clinic" className="py-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("clinic.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] dark:text-white font-serif">
            {t("clinic.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.key}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-[#f5d547]/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-[#0a1b3d] dark:bg-[#f5d547] flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-[#f5d547] dark:text-[#0a1b3d]" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{t(`clinic.feature.${feature.key}`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`clinic.feature.${feature.key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {/* First image - Full width hero style */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group animate-fade-in shadow-2xl">
            <img
              src={clinicImages[0].src || "/placeholder.svg"}
              alt={clinicImages[0].alt[language]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3d]/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="text-white/90 font-medium text-lg md:text-xl">{clinicImages[0].alt[language]}</span>
            </div>
            {/* Gold border on hover */}
            <div className="absolute inset-0 border-4 border-[#f5d547]/0 group-hover:border-[#f5d547]/60 transition-colors duration-500 rounded-2xl" />
          </div>

          {/* Second and third images - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clinicImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden group animate-fade-in shadow-xl"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1b3d]/80 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-white/90 font-medium text-base md:text-lg">{image.alt[language]}</span>
                </div>
                {/* Gold border on hover */}
                <div className="absolute inset-0 border-4 border-[#f5d547]/0 group-hover:border-[#f5d547]/60 transition-colors duration-500 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
