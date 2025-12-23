"use client"

import { useLanguage } from "@/components/language-provider"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: { en: "Dr. Christian Westhoff", ar: "د. كريستيان ويستهوف" },
    text: {
      en: "I have known Dr. Emad for 15 years, and when it comes to medical professionalism, his expertise consistently stands out as exemplary. Rarely have I encountered someone who combines such profound knowledge with genuine empathy and compassion. Dr. Emad's dedication to his patients is truly remarkable, making him a trusted and outstanding medical professional.",
      ar: "أعرف د. عماد منذ 15 عامًا، وعندما يتعلق الأمر بالاحترافية الطبية، تبرز خبرته دائمًا كمثال يُحتذى به. نادرًا ما قابلت شخصًا يجمع بين هذه المعرفة العميقة والتعاطف الحقيقي والرحمة. تفاني د. عماد في رعاية مرضاه أمر رائع حقًا، مما يجعله طبيبًا موثوقًا ومتميزًا.",
    },
    rating: 5,
    condition: { en: "Hurghada", ar: "الغردقة" },
  },
  {
    name: { en: "Ahmed Hassan", ar: "أحمد حسن" },
    text: {
      en: "Dr. Emad is an exceptional physician. His attention to detail and thorough approach to diagnosis gave me confidence in my treatment. Highly recommended!",
      ar: "د. عماد طبيب استثنائي. اهتمامه بالتفاصيل ونهجه الشامل في التشخيص أعطاني الثقة في علاجي. أوصي به بشدة!",
    },
    rating: 5,
    condition: { en: "Gastric Treatment", ar: "علاج المعدة" },
  },
  {
    name: { en: "Fatima El-Sayed", ar: "فاطمة السيد" },
    text: {
      en: "After struggling with diabetes management for years, Dr. Emad developed a comprehensive plan that has significantly improved my quality of life.",
      ar: "بعد معاناة مع إدارة السكري لسنوات، وضع د. عماد خطة شاملة حسّنت جودة حياتي بشكل كبير.",
    },
    rating: 5,
    condition: { en: "Diabetes Management", ar: "إدارة السكري" },
  },
  {
    name: { en: "Mohamed Ali", ar: "محمد علي" },
    text: {
      en: "The clinic is modern and well-equipped. Dr. Emad takes time to explain everything and makes you feel comfortable throughout the consultation.",
      ar: "العيادة حديثة ومجهزة جيداً. د. عماد يأخذ الوقت الكافي لشرح كل شيء ويجعلك تشعر بالراحة طوال الاستشارة.",
    },
    rating: 5,
    condition: { en: "Liver Condition", ar: "حالة الكبد" },
  },
  {
    name: { en: "Sara Mahmoud", ar: "سارة محمود" },
    text: {
      en: "Professional, knowledgeable, and caring. Dr. Emad diagnosed my condition when others couldn't. I'm grateful for his expertise.",
      ar: "محترف ومطلع ومهتم. د. عماد شخّص حالتي عندما لم يستطع آخرون. أنا ممتنة لخبرته.",
    },
    rating: 5,
    condition: { en: "Internal Medicine", ar: "الطب الباطني" },
  },
]

export function TestimonialsSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section id="testimonials" className="py-20 bg-[#0a1b3d]" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("testimonials.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">
            {t("testimonials.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured Testimonial - Dr. Christian Westhoff */}
          <div className="bg-gradient-to-r from-[#f5d547]/10 to-[#f5d547]/5 backdrop-blur-sm border border-[#f5d547]/30 rounded-2xl p-8 mb-6 hover:bg-[#f5d547]/15 transition-colors animate-fade-in-up">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-[#f5d547]/50 mb-4" />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#f5d547] text-[#f5d547]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-white/90 leading-relaxed mb-6 text-lg italic">"{testimonials[0].text[language]}"</p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-14 h-14 rounded-full bg-[#f5d547]/30 flex items-center justify-center">
                <span className="text-[#f5d547] font-bold text-xl">{testimonials[0].name[language].charAt(0)}</span>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">{testimonials[0].name[language]}</p>
                <p className="text-[#f5d547]">{testimonials[0].condition[language]}</p>
              </div>
            </div>
          </div>

          {/* Other Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#f5d547]/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5d547] text-[#f5d547]" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/80 leading-relaxed mb-6">"{testimonial.text[language]}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-[#f5d547]/20 flex items-center justify-center">
                    <span className="text-[#f5d547] font-semibold">{testimonial.name[language].charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name[language]}</p>
                    <p className="text-[#f5d547] text-sm">{testimonial.condition[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
