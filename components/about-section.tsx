"use client"

import { useLanguage } from "@/components/language-provider"
import { GraduationCap, Stethoscope, Pill, Activity, Scan, Award } from "lucide-react"

const timelineItems = [
  { key: "education", icon: GraduationCap },
  { key: "internal", icon: Stethoscope },
  { key: "gastro", icon: Activity },
  { key: "diabetes", icon: Pill },
  { key: "ultrasound", icon: Scan },
  { key: "conferences", icon: Award },
]

export function AboutSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section id="about" className="py-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("about.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] dark:text-white font-serif">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo & Mission/Vision */}
          <div className="space-y-8">
            <div className="relative animate-fade-in">
              <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f5d547]/20">
                <img
                  src="/images/gemini-generated-image-oui3tsoui3tsoui3-20-281-29.jpeg"
                  alt={language === "en" ? "Dr. Emad Hamdy" : "د. عماد حمدي"}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#f5d547]/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#0a1b3d]/10 rounded-2xl -z-10" />
            </div>

            {/* Bio */}
            <div className="bg-card p-6 rounded-xl shadow-lg animate-fade-in-up animation-delay-200">
              <p className="text-muted-foreground leading-relaxed">{t("about.bio")}</p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#0a1b3d] p-6 rounded-xl text-white animate-slide-in-left animation-delay-300">
                <h3 className="text-[#f5d547] font-semibold text-lg mb-2">{t("about.mission.title")}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{t("about.mission.text")}</p>
              </div>
              <div className="bg-[#f5d547] p-6 rounded-xl text-[#0a1b3d] animate-slide-in-right animation-delay-300">
                <h3 className="font-semibold text-lg mb-2">{t("about.vision.title")}</h3>
                <p className="text-[#0a1b3d]/80 text-sm leading-relaxed">{t("about.vision.text")}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Career Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#0a1b3d] dark:text-white mb-8 font-serif">
              {language === "en" ? "Career Timeline" : "المسيرة المهنية"}
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute ltr:left-6 rtl:right-6 top-0 bottom-0 w-0.5 bg-[#f5d547]/30" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.key}
                      className="relative flex gap-4 animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a1b3d] flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-5 h-5 text-[#f5d547]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-card p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
                        <h4 className="font-semibold text-[#0a1b3d] dark:text-white">{t(`timeline.${item.key}`)}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{t(`timeline.${item.key}.desc`)}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
