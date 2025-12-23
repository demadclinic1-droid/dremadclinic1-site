"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle } from "lucide-react"

export function BookingSection() {
  const { t, dir } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    visitType: "new",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Visit Type: ${formData.visitType}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}`

    // Open WhatsApp with the message
    window.open(`https://wa.me/+201005166376?text=${encodeURIComponent(message)}`, "_blank")

    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="booking" className="py-20 bg-[#0a1b3d]" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#f5d547] font-medium mb-2">{t("booking.subtitle")}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif">{t("booking.title")}</h2>
          <div className="w-24 h-1 bg-[#f5d547] mx-auto mt-4" />
        </div>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-[#f5d547] mx-auto mb-4" />
              <p className="text-white text-xl">{t("booking.success")}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-6 border border-white/10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <User className="w-4 h-4 text-[#f5d547]" />
                    {t("booking.name")}
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#f5d547]"
                    placeholder={t("booking.name")}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#f5d547]" />
                    {t("booking.phone")}
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#f5d547]"
                    placeholder="01005166376"
                    dir="ltr"
                  />
                </div>
              </div>

              {/* Visit Type */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm">{t("booking.visitType")}</label>
                <div className="grid grid-cols-3 gap-3">
                  {["new", "followup", "consultation"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, visitType: type })}
                      className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                        formData.visitType === type
                          ? "bg-[#f5d547] text-[#0a1b3d]"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {t(`booking.visitType.${type}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#f5d547]" />
                    {t("booking.date")}
                  </label>
                  <Input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white/10 border-white/20 text-white focus:border-[#f5d547]"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#f5d547]" />
                    {t("booking.time")}
                  </label>
                  <Input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="bg-white/10 border-white/20 text-white focus:border-[#f5d547]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#f5d547]" />
                  {t("booking.message")}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#f5d547] min-h-[100px]"
                  placeholder={t("booking.message")}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#f5d547] text-[#0a1b3d] hover:bg-[#f8e17a] font-semibold py-6 text-lg"
              >
                {t("booking.submit")}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
