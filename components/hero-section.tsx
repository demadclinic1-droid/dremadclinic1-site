"use client"

import { Phone, Facebook, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61584099088156"

export function HeroSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/emad.jpeg')",
        }}
      />

      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-[#0a1b3d]/60" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#f5d547]/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#f5d547]/20 rounded-full animate-pulse animation-delay-200" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f5d547]/10 border border-[#f5d547]/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-[#f5d547] rounded-full animate-pulse" />
            <span className="text-[#f5d547] text-sm font-medium">{t("hero.subtitle")}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up font-serif">
            {t("hero.title")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200 text-pretty">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="bg-[#f5d547] text-[#0a1b3d] hover:bg-[#f8e17a] font-semibold px-8 py-6 text-lg shadow-lg shadow-[#f5d547]/20"
            >
              <a href="tel:+201005166376">
                <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                {t("hero.cta.call")}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#f5d547] text-[#f5d547] hover:bg-[#f5d547]/10 font-semibold px-8 py-6 text-lg bg-transparent"
            >
              <Link href="#booking">
                <Calendar className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                {t("hero.cta.book")}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white hover:text-[#f5d547] hover:bg-white/5 font-semibold px-8 py-6 text-lg"
            >
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                {t("hero.cta.facebook")}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#f5d547] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
