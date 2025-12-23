"use client"

import { useLanguage } from "@/components/language-provider"
import { Award, Medal, GraduationCap, Star, Trophy, BookOpen } from "lucide-react"

const certificates = [
  {
    icon: GraduationCap,
    title: { en: "Medical Degree", ar: "شهادة الطب" },
    description: { en: "Faculty of Medicine - General Medical Education", ar: "كلية الطب - التعليم الطبي العام" },
    year: "2005",
  },
  {
    icon: Medal,
    title: { en: "Internal Medicine Specialization", ar: "تخصص الطب الباطني" },
    description: { en: "Advanced certification in Internal Medicine", ar: "شهادة متقدمة في الطب الباطني" },
    year: "2010",
  },
  {
    icon: Award,
    title: { en: "Gastroenterology & Hepatology", ar: "الجهاز الهضمي والكبد" },
    description: { en: "Specialized training in digestive diseases", ar: "تدريب متخصص في أمراض الجهاز الهضمي" },
    year: "2013",
  },
  {
    icon: Star,
    title: { en: "Diabetes & Metabolism", ar: "السكري والتمثيل الغذائي" },
    description: { en: "Expert certification in metabolic disorders", ar: "شهادة خبير في اضطرابات التمثيل الغذائي" },
    year: "2015",
  },
  {
    icon: Trophy,
    title: { en: "Ultrasound Certification", ar: "شهادة الموجات فوق الصوتية" },
    description: { en: "Advanced diagnostic imaging certification", ar: "شهادة التصوير التشخيصي المتقدم" },
    year: "2017",
  },
  {
    icon: BookOpen,
    title: { en: "International Conferences", ar: "المؤتمرات الدولية" },
    description: { en: "Continuous medical education and research", ar: "التعليم الطبي المستمر والبحث" },
    year: "2024",
  },
]

export function CertificatesSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section id="certificates" className="py-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("certificates.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] font-serif">
            {t("certificates.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#f5d547]/30 hidden md:block" />

          <div className="space-y-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 animate-fade-in-up ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border group">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-[#0a1b3d] flex items-center justify-center group-hover:bg-[#152850] transition-colors">
                          <Icon className="w-6 h-6 text-[#f5d547]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#0a1b3d] text-lg">{cert.title[language]}</h3>
                          <span className="text-[#f5d547] text-sm font-medium">{cert.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{cert.description[language]}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10 w-4 h-4 rounded-full bg-[#f5d547] border-4 border-background shadow-lg hidden md:block" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
