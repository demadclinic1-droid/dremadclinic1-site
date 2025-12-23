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
    <footer className="bg-[#0a1b3d] text-white py-16" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About - Updated name */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src="/images/gemini-generated-image-xjdm05xjdm05xjdm.png"
                  alt="Dr. Emad Hamdy Clinic Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg">{language === "en" ? "Dr. Emad Hamdy" : "د. عماد حمدي"}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {language === "en"
                ? "Specialist in Internal Medicine, Tropical diseases, Gastroenterology, Hepatology, and Diabetes Management."
                : "أخصائي الطب الباطني والأمراض المدارية وأمراض الجهاز الهضمي والكبد وإدارة السكري."}
            </p>
          </div>

          {/* Contact - Updated Facebook link */}
          <div>
            <h3 className="text-[#f5d547] font-semibold mb-4">{t("contact.title")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+201005166376"
                  className="flex items-center gap-2 text-white/60 hover:text-[#f5d547] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">01005166376</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  className="flex items-center gap-2 text-white/60 hover:text-[#f5d547] transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:doctoremadhamdy@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-[#f5d547] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>doctoremadhamdy@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-[#f5d547] transition-colors text-sm"
                >
                  <Facebook className="w-4 h-4" />
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
                  <Link href={`#${item}`} className="text-white/60 hover:text-[#f5d547] transition-colors text-sm">
                    {t(`nav.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-[#f5d547] font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              {language === "en" ? "Payment Methods" : "طرق الدفع"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span key={method} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                  {method}
                </span>
              ))}
            </div>

            {/* Location */}
            <div className="mt-6">
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-[#f5d547]" />
                <span>Hurghada, Red Sea, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-start">
              <h3 className="text-[#f5d547] font-semibold mb-2">
                {language === "en" ? "Scan to Connect" : "امسح للتواصل"}
              </h3>
              <p className="text-white/60 text-sm">
                {language === "en"
                  ? "Scan the QR codes to connect with us instantly"
                  : "امسح رموز QR للتواصل معنا فوراً"}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {/* WhatsApp QR Code */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="bg-white p-2 rounded-xl shadow-lg group-hover:shadow-[#25D366]/30 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/images/qr-whatsapp.png"
                    alt="WhatsApp QR Code"
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28"
                  />
                </div>
                <span className="text-xs text-white/60 group-hover:text-[#25D366] transition-colors font-medium">
                  WhatsApp
                </span>
              </a>

              {/* Facebook QR Code */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="bg-white p-2 rounded-xl shadow-lg group-hover:shadow-[#1877F2]/30 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/images/qr-facebook.png"
                    alt="Facebook QR Code"
                    width={100}
                    height={100}
                    className="w-24 h-24 md:w-28 md:h-28"
                  />
                </div>
                <span className="text-xs text-white/60 group-hover:text-[#1877F2] transition-colors font-medium">
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* End QR Codes Section */}

        {/* Bottom Bar - Updated name */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2020 {language === "en" ? "Dr. Emad Hamdy" : "د. عماد حمدي"}. {t("footer.rights")}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-[#f5d547] text-sm transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-[#f5d547] text-sm transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/data-protection" className="text-white/40 hover:text-[#f5d547] text-sm transition-colors">
              {t("footer.data")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
