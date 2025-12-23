"use client"

import { useLanguage } from "@/components/language-provider"
import { Phone, MessageCircle, Mail, MapPin, Facebook } from "lucide-react"

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61584099088156"

const contactInfo = [
  {
    key: "phone",
    icon: Phone,
    value: "01005166376",
    href: "tel:+201005166376",
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    value: "01005166376",
    href: "https://wa.me/+201005166376",
  },
  {
    key: "email",
    icon: Mail,
    value: "doctoremadhamdy@gmail.com",
    href: "mailto:doctoremadhamdy@gmail.com",
  },
  {
    key: "facebook",
    icon: Facebook,
    value: "Dr. Emad Hamdy",
    href: FACEBOOK_URL,
  },
]

export function ContactSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-background" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("contact.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a1b3d] dark:text-white font-serif">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.key}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center p-6 bg-card rounded-2xl border border-border hover:border-[#f5d547]/50 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-full bg-[#0a1b3d] flex items-center justify-center mb-4 group-hover:bg-[#152850] transition-colors">
                    <Icon className="w-6 h-6 text-[#f5d547]" />
                  </div>
                  <span className="text-[#0a1b3d] dark:text-white font-semibold mb-1">
                    {t(`contact.${contact.key}`)}
                  </span>
                  <span className="text-muted-foreground text-sm text-center" dir="ltr">
                    {contact.value}
                  </span>
                </a>
              )
            })}
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border animate-fade-in-up animation-delay-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d33.82105197706843!3d27.25025593209249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE1JzAxLjAiTiAzM8KwNDknMTUuOCJF!5e0!3m2!1sen!2seg!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>

          {/* Additional Contact */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-2">{t("contact.location")}</p>
            <div className="flex items-center justify-center gap-2 text-[#0a1b3d] dark:text-white">
              <MapPin className="w-5 h-5 text-[#f5d547]" />
              <span>Hurghada, Red Sea, Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
