"use client"

import { useLanguage } from "@/components/language-provider"
import { Target, BookCheck, Heart, Microscope } from "lucide-react"

const values = [
  { key: "precision", icon: Target },
  { key: "evidence", icon: BookCheck },
  { key: "patient", icon: Heart },
  { key: "diagnostic", icon: Microscope },
]

export function ValuesSection() {
  const { t, dir } = useLanguage()

  return (
    <section className="py-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("values.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] font-serif">{t("values.title")}</h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.key}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-[#0a1b3d] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#152850] transition-colors shadow-lg">
                  <Icon className="w-10 h-10 text-[#f5d547]" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-[#0a1b3d] text-lg mb-2">{t(`values.${value.key}`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(`values.${value.key}.desc`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
