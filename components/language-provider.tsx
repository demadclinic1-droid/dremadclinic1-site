"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.certificates": "Certificates",
    "nav.clinic": "Clinic",
    "nav.gallery": "Gallery",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.book": "Book Appointment",

    // Hero
    "hero.title": "Dr. Emad Hamdy",
    "hero.subtitle": "Internal Medicine & Tropical Specialist",
    "hero.description":
      "Providing exceptional medical care with precision, compassion, and evidence-based practices. Your health is my priority.",
    "hero.cta.call": "Call Now",
    "hero.cta.book": "Book Appointment",
    "hero.cta.facebook": "Follow on Facebook",

    // About
    "about.title": "About Dr. Emad",
    "about.subtitle": "Dedicated to Excellence in Healthcare",
    "about.bio":
      "Dr. Emad Hamdy is a highly qualified specialist in Internal Medicine, Tropical diseases, Gastroenterology, Hepatology, and Diabetes & Metabolism. With years of dedicated experience and continuous pursuit of medical excellence, Dr. Emad provides comprehensive care tailored to each patient's unique needs.",
    "about.mission.title": "Our Mission",
    "about.mission.text":
      "To deliver the highest standard of medical care through evidence-based practices, advanced diagnostics, and patient-centered approach.",
    "about.vision.title": "Our Vision",
    "about.vision.text":
      "To be a leading healthcare provider recognized for excellence, innovation, and compassionate patient care.",

    // Timeline
    "timeline.education": "Medical Education",
    "timeline.education.desc": "Faculty of Medicine - Comprehensive medical training",
    "timeline.internal": "Internal Medicine",
    "timeline.internal.desc": "Specialized training in Internal Medicine",
    "timeline.gastro": "Gastro & Hepatology",
    "timeline.gastro.desc": "Advanced specialization in Gastroenterology and Hepatology",
    "timeline.diabetes": "Diabetes & Metabolism",
    "timeline.diabetes.desc": "Expert certification in Diabetes and Metabolic disorders",
    "timeline.ultrasound": "Ultrasound Certification",
    "timeline.ultrasound.desc": "Advanced diagnostic ultrasound certification",
    "timeline.conferences": "International Conferences",
    "timeline.conferences.desc": "Continuous education through international medical conferences",

    // Specialties
    "specialties.title": "Medical Specialties",
    "specialties.subtitle": "Comprehensive Healthcare Services",
    "specialties.internal": "Internal Medicine",
    "specialties.internal.desc":
      "Comprehensive diagnosis and treatment of adult diseases with a holistic approach to patient care.",
    "specialties.gastro": "Gastrointestinal Diseases",
    "specialties.gastro.desc":
      "Expert care for digestive system disorders including stomach, intestines, and related conditions.",
    "specialties.hepatology": "Hepatology",
    "specialties.hepatology.desc": "Specialized treatment for liver diseases, hepatitis, and related conditions.",
    "specialties.diabetes": "Diabetes & Metabolism",
    "specialties.diabetes.desc": "Comprehensive diabetes management and metabolic disorder treatment.",
    "specialties.hypertension": "Hypertension & Cardiac",
    "specialties.hypertension.desc": "Management of high blood pressure and cardiovascular health optimization.",
    "specialties.tropical": "Tropical Fevers",
    "specialties.tropical.desc": "Diagnosis and treatment of tropical and infectious diseases.",
    "specialties.geriatric": "Geriatric Care",
    "specialties.geriatric.desc": "Specialized healthcare services for elderly patients.",
    "specialties.ultrasound": "Diagnostic Ultrasound",
    "specialties.ultrasound.desc": "Advanced imaging for accurate diagnosis and monitoring.",

    // Certificates
    "certificates.title": "Certificates & Achievements",
    "certificates.subtitle": "Academic Excellence & Professional Accreditations",

    // Clinic
    "clinic.title": "Our Clinic & Facilities",
    "clinic.subtitle": "State-of-the-Art Medical Center",
    "clinic.feature.modern": "Modern Facility",
    "clinic.feature.modern.desc": "Clean, comfortable environment",
    "clinic.feature.equipment": "Advanced Equipment",
    "clinic.feature.equipment.desc": "Latest diagnostic technology",
    "clinic.feature.care": "Expert Care",
    "clinic.feature.care.desc": "Professional medical staff",
    "clinic.feature.comfort": "Patient Comfort",
    "clinic.feature.comfort.desc": "Welcoming atmosphere",

    // Gallery
    "gallery.title": "Gallery",
    "gallery.subtitle": "Services & Patient Care",

    // Testimonials
    "testimonials.title": "Patient Testimonials",
    "testimonials.subtitle": "What Our Patients Say",

    // Values
    "values.title": "Our Values & Philosophy",
    "values.subtitle": "Guiding Principles of Care",
    "values.precision": "Precision & Accuracy",
    "values.precision.desc": "Every diagnosis and treatment plan is crafted with meticulous attention to detail.",
    "values.evidence": "Evidence-Based Practice",
    "values.evidence.desc": "Medical decisions guided by the latest scientific research and clinical evidence.",
    "values.patient": "Patient-Centered Care",
    "values.patient.desc": "Your needs, concerns, and preferences are at the heart of everything we do.",
    "values.diagnostic": "Advanced Diagnostics",
    "values.diagnostic.desc": "Utilizing cutting-edge technology for accurate and timely diagnoses.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Common Questions Answered",
    "faq.q1": "What are the clinic hours?",
    "faq.a1": "Our clinic is open Saturday through Thursday, 10:00 AM to 10:00 PM. Friday by appointment only.",
    "faq.q2": "How can I book an appointment?",
    "faq.a2": "You can book by calling 01005166376, via WhatsApp, or using our online booking form.",
    "faq.q3": "What payment methods are accepted?",
    "faq.a3": "We accept cash, Visa, MasterCard, InstaPay, PayPal, and Vodafone Cash.",
    "faq.q4": "Do you offer follow-up consultations?",
    "faq.a4": "Yes, follow-up consultations are available and can be scheduled at discounted rates.",
    "faq.q5": "What should I bring to my first appointment?",
    "faq.a5": "Please bring any previous medical records, test results, current medications list, and valid ID.",

    // Contact
    "contact.title": "Contact & Follow",
    "contact.subtitle": "Get in Touch",
    "contact.phone": "Phone",
    "contact.whatsapp": "WhatsApp",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.facebook": "Facebook",

    // Booking
    "booking.title": "Book an Appointment",
    "booking.subtitle": "Schedule Your Visit",
    "booking.name": "Full Name",
    "booking.phone": "Phone Number",
    "booking.visitType": "Visit Type",
    "booking.visitType.new": "New Patient",
    "booking.visitType.followup": "Follow-up",
    "booking.visitType.consultation": "Consultation",
    "booking.date": "Preferred Date",
    "booking.time": "Preferred Time",
    "booking.message": "Additional Message",
    "booking.submit": "Submit Request",
    "booking.success": "Thank you! Your appointment request has been submitted.",
    "booking.floating": "Book Now",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.data": "Patient Data Protection",

    // AI Chat
    "chat.title": "Medical Assistant",
    "chat.placeholder": "Ask me anything...",
    "chat.welcome":
      "Hello! I'm Dr. Emad's virtual assistant. How can I help you today? Select an option below or type your question.",
    "chat.fallback": "For immediate assistance, please contact us via WhatsApp.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "نبذة عنا",
    "nav.services": "الخدمات",
    "nav.certificates": "الشهادات",
    "nav.clinic": "العيادة",
    "nav.gallery": "المعرض",
    "nav.testimonials": "آراء المرضى",
    "nav.faq": "الأسئلة الشائعة",
    "nav.contact": "تواصل معنا",
    "nav.book": "احجز موعد",

    // Hero
    "hero.title": "د. عماد حمدي",
    "hero.subtitle": "أخصائي الباطنة والأمراض المدارية",
    "hero.description": "تقديم رعاية طبية استثنائية بدقة وتعاطف وممارسات قائمة على الأدلة. صحتك هي أولويتي.",
    "hero.cta.call": "اتصل الآن",
    "hero.cta.book": "احجز موعد",
    "hero.cta.facebook": "تابعنا على فيسبوك",

    // About
    "about.title": "عن د. عماد",
    "about.subtitle": "ملتزمون بالتميز في الرعاية الصحية",
    "about.bio":
      "د. عماد حمدي هو أخصائي مؤهل تأهيلاً عالياً في الطب الباطني والأمراض المدارية وأمراض الجهاز الهضمي والكبد والسكري والتمثيل الغذائي. مع سنوات من الخبرة المتفانية والسعي المستمر نحو التميز الطبي، يقدم د. عماد رعاية شاملة مصممة خصيصاً لاحتياجات كل مريض.",
    "about.mission.title": "رسالتنا",
    "about.mission.text":
      "تقديم أعلى معايير الرعاية الطبية من خلال الممارسات القائمة على الأدلة والتشخيص المتقدم والنهج المرتكز على المريض.",
    "about.vision.title": "رؤيتنا",
    "about.vision.text": "أن نكون مقدم رعاية صحية رائد معترف به للتميز والابتكار والرعاية الرحيمة للمرضى.",

    // Timeline
    "timeline.education": "التعليم الطبي",
    "timeline.education.desc": "كلية الطب - تدريب طبي شامل",
    "timeline.internal": "الطب الباطني",
    "timeline.internal.desc": "تدريب متخصص في الطب الباطني",
    "timeline.gastro": "الجهاز الهضمي والكبد",
    "timeline.gastro.desc": "تخصص متقدم في أمراض الجهاز الهضمي والكبد",
    "timeline.diabetes": "السكري والتمثيل الغذائي",
    "timeline.diabetes.desc": "شهادة خبير في السكري واضطرابات التمثيل الغذائي",
    "timeline.ultrasound": "شهادة الموجات فوق الصوتية",
    "timeline.ultrasound.desc": "شهادة الموجات فوق الصوتية التشخيصية المتقدمة",
    "timeline.conferences": "المؤتمرات الدولية",
    "timeline.conferences.desc": "التعليم المستمر من خلال المؤتمرات الطبية الدولية",

    // Specialties
    "specialties.title": "التخصصات الطبية",
    "specialties.subtitle": "خدمات رعاية صحية شاملة",
    "specialties.internal": "الطب الباطني",
    "specialties.internal.desc": "تشخيص وعلاج شامل لأمراض البالغين بنهج شمولي للرعاية.",
    "specialties.gastro": "أمراض الجهاز الهضمي",
    "specialties.gastro.desc": "رعاية متخصصة لاضطرابات الجهاز الهضمي بما في ذلك المعدة والأمعاء.",
    "specialties.hepatology": "أمراض الكبد",
    "specialties.hepatology.desc": "علاج متخصص لأمراض الكبد والتهاب الكبد والحالات ذات الصلة.",
    "specialties.diabetes": "السكري والتمثيل الغذائي",
    "specialties.diabetes.desc": "إدارة شاملة لمرض السكري وعلاج اضطرابات التمثيل الغذائي.",
    "specialties.hypertension": "ارتفاع ضغط الدم والقلب",
    "specialties.hypertension.desc": "إدارة ارتفاع ضغط الدم وتحسين صحة القلب والأوعية الدموية.",
    "specialties.tropical": "الحمى الاستوائية",
    "specialties.tropical.desc": "تشخيص وعلاج الأمراض الاستوائية والمعدية.",
    "specialties.geriatric": "رعاية المسنين",
    "specialties.geriatric.desc": "خدمات رعاية صحية متخصصة لكبار السن.",
    "specialties.ultrasound": "الموجات فوق الصوتية التشخيصية",
    "specialties.ultrasound.desc": "تصوير متقدم للتشخيص الدقيق والمراقبة.",

    // Certificates
    "certificates.title": "الشهادات والإنجازات",
    "certificates.subtitle": "التميز الأكاديمي والاعتمادات المهنية",

    // Clinic
    "clinic.title": "عيادتنا ومرافقنا",
    "clinic.subtitle": "مركز طبي متطور",
    "clinic.feature.modern": "مرافق حديثة",
    "clinic.feature.modern.desc": "بيئة نظيفة ومريحة",
    "clinic.feature.equipment": "معدات متقدمة",
    "clinic.feature.equipment.desc": "أحدث تقنيات التشخيص",
    "clinic.feature.care": "رعاية متخصصة",
    "clinic.feature.care.desc": "طاقم طبي محترف",
    "clinic.feature.comfort": "راحة المرضى",
    "clinic.feature.comfort.desc": "أجواء ترحيبية",

    // Gallery
    "gallery.title": "المعرض",
    "gallery.subtitle": "الخدمات ورعاية المرضى",

    // Testimonials
    "testimonials.title": "آراء المرضى",
    "testimonials.subtitle": "ماذا يقول مرضانا",

    // Values
    "values.title": "قيمنا وفلسفتنا",
    "values.subtitle": "المبادئ التوجيهية للرعاية",
    "values.precision": "الدقة والإتقان",
    "values.precision.desc": "كل تشخيص وخطة علاج تُصاغ باهتمام دقيق بالتفاصيل.",
    "values.evidence": "الممارسة القائمة على الأدلة",
    "values.evidence.desc": "القرارات الطبية تسترشد بأحدث الأبحاث العلمية والأدلة السريرية.",
    "values.patient": "رعاية تتمحور حول المريض",
    "values.patient.desc": "احتياجاتك ومخاوفك وتفضيلاتك في صميم كل ما نقوم به.",
    "values.diagnostic": "التشخيص المتقدم",
    "values.diagnostic.desc": "استخدام التكنولوجيا المتطورة للتشخيص الدقيق والسريع.",

    // FAQ
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "إجابات الأسئلة الشائعة",
    "faq.q1": "ما هي ساعات العمل؟",
    "faq.a1": "العيادة مفتوحة من السبت إلى الخميس، من 10:00 صباحاً إلى 10:00 مساءً. الجمعة بموعد مسبق فقط.",
    "faq.q2": "كيف يمكنني حجز موعد؟",
    "faq.a2": "يمكنك الحجز بالاتصال على 01005166376، عبر الواتساب، أو باستخدام نموذج الحجز عبر الإنترنت.",
    "faq.q3": "ما هي طرق الدفع المقبولة؟",
    "faq.a3": "نقبل الدفع النقدي، فيزا، ماستركارد، إنستاباي، باي بال، وفودافون كاش.",
    "faq.q4": "هل تقدمون استشارات متابعة؟",
    "faq.a4": "نعم، استشارات المتابعة متاحة ويمكن جدولتها بأسعار مخفضة.",
    "faq.q5": "ماذا يجب أن أحضر في أول موعد؟",
    "faq.a5": "يرجى إحضار أي سجلات طبية سابقة، نتائج الفحوصات، قائمة الأدوية الحالية، وبطاقة هوية صالحة.",

    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "ابقَ على تواصل",
    "contact.phone": "الهاتف",
    "contact.whatsapp": "واتساب",
    "contact.email": "البريد الإلكتروني",
    "contact.location": "الموقع",
    "contact.facebook": "فيسبوك",

    // Booking
    "booking.title": "احجز موعد",
    "booking.subtitle": "جدولة زيارتك",
    "booking.name": "الاسم الكامل",
    "booking.phone": "رقم الهاتف",
    "booking.visitType": "نوع الزيارة",
    "booking.visitType.new": "مريض جديد",
    "booking.visitType.followup": "متابعة",
    "booking.visitType.consultation": "استشارة",
    "booking.date": "التاريخ المفضل",
    "booking.time": "الوقت المفضل",
    "booking.message": "رسالة إضافية",
    "booking.submit": "إرسال الطلب",
    "booking.success": "شكراً لك! تم إرسال طلب موعدك.",
    "booking.floating": "احجز الآن",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.data": "حماية بيانات المرضى",

    // AI Chat
    "chat.title": "المساعد الطبي",
    "chat.placeholder": "اسألني أي شيء...",
    "chat.welcome":
      "مرحباً! أنا المساعد الافتراضي لد. عماد. كيف يمكنني مساعدتك اليوم؟ اختر أحد الخيارات أدناه أو اكتب سؤالك.",
    "chat.fallback": "للمساعدة الفورية، يرجى التواصل معنا عبر الواتساب.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguage(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
