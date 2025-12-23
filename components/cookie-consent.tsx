"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const { language, dir } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  const content = {
    en: {
      title: "Cookie Consent",
      description:
        "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking 'Accept All', you consent to our use of cookies.",
      acceptAll: "Accept All",
      rejectAll: "Reject All",
      learnMore: "Learn More",
    },
    ar: {
      title: "موافقة ملفات تعريف الارتباط",
      description:
        "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور وتخصيص المحتوى. بالنقر على 'قبول الكل'، فإنك توافق على استخدامنا لملفات تعريف الارتباط.",
      acceptAll: "قبول الكل",
      rejectAll: "رفض الكل",
      learnMore: "اعرف المزيد",
    },
  }

  const t = content[language]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up" dir={dir}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#0a1b3d] border border-[#f5d547]/30 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-[#f5d547]/20 rounded-full flex items-center justify-center">
            <Cookie className="w-6 h-6 text-[#f5d547]" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg mb-1">{t.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t.description}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
            <Button
              onClick={handleAcceptAll}
              className="bg-[#f5d547] text-[#0a1b3d] hover:bg-[#f8e17a] font-semibold px-6"
            >
              {t.acceptAll}
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-6 bg-transparent"
            >
              {t.rejectAll}
            </Button>
            <Link href="/privacy">
              <Button
                variant="ghost"
                className="text-[#f5d547] hover:text-[#f8e17a] hover:bg-[#f5d547]/10 font-medium px-6 w-full sm:w-auto"
              >
                {t.learnMore}
              </Button>
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={handleRejectAll}
            className="absolute top-3 ltr:right-3 rtl:left-3 md:relative md:top-auto md:right-auto text-white/50 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
