"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#certificates", label: t("nav.certificates") },
    { href: "#clinic", label: t("nav.clinic") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#0a1b3d]/95 dark:bg-[#050d1f]/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/gemini-generated-image-xjdm05xjdm05xjdm.png"
                alt="Dr. Emad Hamdy Clinic Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Dr. Emad</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-[#f5d547] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-full text-white/80 hover:text-[#f5d547] hover:bg-white/10 transition-all"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="flex items-center gap-1 text-white/80 hover:text-[#f5d547] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "en" ? "عربي" : "EN"}</span>
            </button>

            {/* Book Button */}
            <Button asChild className="hidden sm:flex bg-[#f5d547] text-[#0a1b3d] hover:bg-[#f8e17a] font-semibold">
              <Link href="#booking">{t("nav.book")}</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-[#f5d547] transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-[#f5d547] text-[#0a1b3d] hover:bg-[#f8e17a] font-semibold mt-2">
                <Link href="#booking" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("nav.book")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
