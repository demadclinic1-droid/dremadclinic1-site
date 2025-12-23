"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Phone, MessageCircle, Mail, MapPin, Facebook, CreditCard } from "lucide-react"

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61584099088156"
const WHATSAPP_URL = "https://wa.me/+201005166376"

export function Footer() {
  const { t, dir, language } = useLanguage()
  const paymentMethods = ["Visa", "MasterCard", "InstaPay", "PayPal", "Vodafone Cash"]

  return (
    <footer className="bg-gradient-to-r from-[#0a1b3d] via-[#0f2950] to-[#132f5f] text-white py-20" dir={dir}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/gemini-generated-image-xjdm05xjdm05xjdm.png"
                  alt="Dr. Emad Hamdy Clinic Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg">{language === "en" ? "Dr. Emad Hamdy" : "د. عماد حمدي"}</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {language === "en"
                ? "Specialist in Internal Medicine, Tropical diseases, Gastroenterology, Hepatology, and Diabetes Management."
                : "أخصائي الطب الباطني والأمراض المدارية وأمراض الجهاز الهضمي والكبد وإدارة السكري."}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f5d547] font-semibold mb-4">{t("contact.title")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+201005166376"
                  className="flex items-center gap-2 text-white/70 hover:text-[#f5d547] transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">01005166376</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  className="flex items-center gap-2 text-white/70 hover:text-[#25D366] transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:doctoremadhamdy@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-[#f5d547] transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>doctoremadhamdy@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-[#1877F2] transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f5d547] font-semibold mb-4">{language === "en" ? "Quick Links" : "روابط سريعة"}</h3>
            <ul className="space-y-2">
              {["home", "about", "services", "certificates", "testimonials", "faq", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="text-white/70 hover:text-[#f5d547] transition-all duration-300 transform hover:scale-105 text-sm"
                  >
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods & Location */}
          <div>
            <h3 className="text-[#f5d547] font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              {language === "en" ? "Payment Methods" : "طرق الدفع"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {method}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2 text-white/70 text-sm">
              <MapPin className="w-5 h-5 mt-0.5 text-[#f5d547]" />
              <span>Hurghada, Red Sea, Egypt</span>
            </div>
          </div>
        </div>

        {/* QR Codes Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-start">
              <h3 className="text-[#f5d547] font-semibold mb-2">{language === "en" ? "Scan to Connect" : "امسح للتواصل"}</h3>
              <p className="text-white/70 text-sm">{language === "en" ? "Scan the QR codes to connect with us instantly" : "امسح رموز QR للتواصل معنا فوراً"}</p>
            </div>
            <div className="flex items-center gap-6">
              {[
                { url: WHATSAPP_URL, img: "/images/qr-whatsapp.png", color: "#25D366", label: "WhatsApp" },
                { url: FACEBOOK_URL, img: "/images/qr-facebook.png", color: "#1877F2", label: "Facebook" }
              ].map((item) => (
                <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                  <div className={`bg-white p-2 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-[${item.color}]/40`}>
                    <Image src={item.img} alt={`${item.label} QR Code`} width={100} height={100} className="w-24 h-24 md:w-28 md:h-28" />
                  </div>
                  <span className={`text-xs text-white/70 group-hover:text-[${item.color}] transition-colors duration-300 font-medium`}>
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© 2020 {language === "en" ? "Dr. Emad Hamdy" : "د. عماد حمدي"}. {t("footer.rights")}.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-[#f5d547] text-sm transition-all duration-300 transform hover:scale-105">{t("footer.privacy")}</Link>
            <Link href="/terms" className="text-white/40 hover:text-[#f5d547] text-sm transition-all duration-300 transform hover:scale-105">{t("footer.terms")}</Link>
            <Link href="/data-protection" className="text-white/40 hover:text-[#f5d547] text-sm transition-all duration-300 transform hover:scale-105">{t("footer.data")}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
