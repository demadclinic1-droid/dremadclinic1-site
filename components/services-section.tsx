"use client"

import { useLanguage } from "@/components/language-provider"
import { Stethoscope, Heart, Activity, Pill, Thermometer, Users, Scan, HeartPulse } from "lucide-react"

const services = [
  { key: "internal", icon: Stethoscope },
  { key: "gastro", icon: Activity },
  { key: "hepatology", icon: HeartPulse },
  { key: "diabetes", icon: Pill },
  { key: "hypertension", icon: Heart },
  { key: "tropical", icon: Thermometer },
  { key: "geriatric", icon: Users },
  { key: "ultrasound", icon: Scan },
]

export function ServicesSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="services" className="py-20 bg-[#0a1b3d]" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("specialties.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">{t("specialties.title")}</h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.key}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#f5d547]/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#f5d547]/10 flex items-center justify-center mb-4 group-hover:bg-[#f5d547]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#f5d547]" />
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#f5d547] transition-colors">
                  {t(`specialties.${service.key}`)}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{t(`specialties.${service.key}.desc`)}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">
            {dir === "rtl" ? "للحجز والاستفسار:" : "For appointments and inquiries:"}
          </p>
          <a
            href="tel:+201005166376"
            className="inline-flex items-center gap-2 text-[#f5d547] hover:text-[#f8e17a] text-xl font-semibold transition-colors"
          >
            <span dir="ltr">01005166376</span>
          </a>
        </div>
      </div>
    </section>
  )
}
