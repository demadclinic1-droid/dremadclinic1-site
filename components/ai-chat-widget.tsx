"use client"

import { useState } from "react"
import { MessageCircle, X, Send, Bot, User, Stethoscope, CalendarCheck, ClipboardList } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  role: "user" | "assistant"
  content: string
}

const consultationOptions = {
  en: [
    { id: "general", label: "General Consultation", icon: Stethoscope },
    { id: "followup", label: "Follow-up Visit", icon: CalendarCheck },
    { id: "checkup", label: "Initial Check-up", icon: ClipboardList },
  ],
  ar: [
    { id: "general", label: "استشارة عامة", icon: Stethoscope },
    { id: "followup", label: "زيارة متابعة", icon: CalendarCheck },
    { id: "checkup", label: "فحص أولي", icon: ClipboardList },
  ],
}

const optionResponses = {
  en: {
    general:
      "Great! For a general consultation, Dr. Emad will assess your overall health and address any concerns you may have. Would you like to book an appointment? You can call us at 01005166376 or use WhatsApp.",
    followup:
      "For a follow-up visit, please have your previous medical records ready. Dr. Emad will review your progress and adjust treatment if needed. Would you like to schedule your follow-up? Call 01005166376 or message us on WhatsApp.",
    checkup:
      "An initial check-up includes a comprehensive health assessment, medical history review, and basic examinations. Perfect for new patients! To book your first appointment, call 01005166376 or reach us via WhatsApp.",
  },
  ar: {
    general:
      "رائع! في الاستشارة العامة، سيقوم د. عماد بتقييم صحتك العامة ومعالجة أي مخاوف لديك. هل تريد حجز موعد؟ يمكنك الاتصال على 01005166376 أو عبر الواتساب.",
    followup:
      "لزيارة المتابعة، يرجى إحضار سجلاتك الطبية السابقة. سيراجع د. عماد تقدمك ويعدل العلاج إذا لزم الأمر. هل تريد جدولة موعد المتابعة؟ اتصل على 01005166376 أو راسلنا على الواتساب.",
    checkup:
      "يشمل الفحص الأولي تقييماً صحياً شاملاً ومراجعة التاريخ الطبي والفحوصات الأساسية. مثالي للمرضى الجدد! لحجز أول موعد، اتصل على 01005166376 أو تواصل معنا عبر الواتساب.",
  },
}

export function AIChatWidget() {
  const { t, dir, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: t("chat.welcome") }])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showOptions, setShowOptions] = useState(true)

  const handleOptionSelect = (optionId: string) => {
    const options = consultationOptions[language]
    const selectedOption = options.find((opt) => opt.id === optionId)
    if (!selectedOption) return

    setShowOptions(false)
    setMessages((prev) => [...prev, { role: "user", content: selectedOption.label }])
    setIsLoading(true)

    setTimeout(() => {
      const response = optionResponses[language][optionId as keyof typeof optionResponses.en]
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 800)
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setShowOptions(false)
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    setTimeout(() => {
      const responses = {
        en: [
          "I can help you with information about Dr. Emad's services. Would you like to book an appointment?",
          "Dr. Emad specializes in Internal Medicine, Tropical diseases, Gastroenterology, and Diabetes management. How can I assist you?",
          "For immediate assistance, please contact us via WhatsApp at 01005166376.",
          "Our clinic hours are Saturday to Thursday, 10 AM to 10 PM. Friday by appointment only.",
        ],
        ar: [
          "يمكنني مساعدتك بمعلومات عن خدمات د. عماد. هل تريد حجز موعد؟",
          "د. عماد متخصص في الطب الباطني والأمراض المدارية والجهاز الهضمي وإدارة السكري. كيف يمكنني مساعدتك؟",
          "للمساعدة الفورية، يرجى التواصل معنا عبر الواتساب على 01005166376.",
          "ساعات العيادة من السبت إلى الخميس، من 10 صباحاً إلى 10 مساءً. الجمعة بموعد مسبق فقط.",
        ],
      }

      const randomResponse = responses[language][Math.floor(Math.random() * responses[language].length)]
      setMessages((prev) => [...prev, { role: "assistant", content: randomResponse }])
      setIsLoading(false)
    }, 1000)
  }

  const resetChat = () => {
    setMessages([{ role: "assistant", content: t("chat.welcome") }])
    setShowOptions(true)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 ltr:right-6 rtl:left-6 z-50 w-14 h-14 bg-[#0a1b3d] text-[#f5d547] rounded-full shadow-lg hover:bg-[#152850] transition-colors flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 ltr:right-6 rtl:left-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in-up"
          dir={dir}
        >
          {/* Header */}
          <div className="bg-[#0a1b3d] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f5d547]/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#f5d547]" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("chat.title")}</h3>
                  <span className="text-xs text-white/60">{language === "en" ? "Online" : "متصل"}</span>
                </div>
              </div>
              <button onClick={resetChat} className="text-xs text-white/60 hover:text-[#f5d547] transition-colors">
                {language === "en" ? "New Chat" : "محادثة جديدة"}
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[#0a1b3d] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-[#f5d547]" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-[#0a1b3d] text-white rounded-br-none rtl:rounded-br-2xl rtl:rounded-bl-none"
                      : "bg-card border border-border text-foreground rounded-bl-none rtl:rounded-bl-2xl rtl:rounded-br-none"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-[#f5d547] flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-[#0a1b3d]" />
                  </div>
                )}
              </div>
            ))}

            {showOptions && !isLoading && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-muted-foreground text-center mb-2">
                  {language === "en" ? "Quick Options:" : "خيارات سريعة:"}
                </p>
                {consultationOptions[language].map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className="w-full flex items-center gap-3 p-3 bg-card border border-border rounded-xl hover:border-[#f5d547]/50 hover:bg-[#f5d547]/5 transition-all text-sm text-foreground"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#0a1b3d]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#0a1b3d] dark:text-[#f5d547]" />
                      </div>
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>
            )}

            {isLoading && (
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-[#0a1b3d] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#f5d547]" />
                </div>
                <div className="bg-card border border-border p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-100" />
                    <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t("chat.placeholder")}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-[#0a1b3d] text-[#f5d547] hover:bg-[#152850]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            {/* WhatsApp Fallback */}
            <a
              href="https://wa.me/+201005166376"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-muted-foreground hover:text-[#f5d547] mt-2 transition-colors"
            >
              {t("chat.fallback")}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
