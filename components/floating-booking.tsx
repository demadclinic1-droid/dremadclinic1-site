"use client"

import { Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

export function FloatingBooking() {
  const { t } = useLanguage()

  return (
    <Link
      href="#booking"
      className="fixed bottom-24 ltr:right-6 rtl:left-6 z-40 bg-[#f5d547] text-[#0a1b3d] px-6 py-3 rounded-full shadow-lg hover:bg-[#f8e17a] transition-all hover:scale-105 flex items-center gap-2 font-semibold animate-bounce"
    >
      <Calendar className="w-5 h-5" />
      <span>{t("booking.floating")}</span>
    </Link>
  )
}
