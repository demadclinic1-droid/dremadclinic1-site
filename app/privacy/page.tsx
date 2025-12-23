"use client"

import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  const { language, dir } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "Your Privacy Matters to Us",
      backHome: "Back to Home",
      lastUpdated: "Last Updated: January 2020",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information you provide directly to us, including your name, phone number, email address, and any medical information you choose to share during appointments or through our booking forms.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect to provide medical services, schedule appointments, communicate with you about your care, and improve our services. We never sell or share your personal information with third parties for marketing purposes.",
        },
        {
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All patient data is stored securely in compliance with medical data protection standards.",
        },
        {
          title: "Cookies",
          content:
            "Our website uses cookies to enhance your browsing experience. You can choose to accept or reject non-essential cookies. Essential cookies are necessary for the website to function properly.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access, correct, or delete your personal data. You may also request a copy of your data or object to its processing. To exercise these rights, please contact us directly.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy or our data practices, please contact us at doctoremadhamdy@gmail.com or call 01005166376.",
        },
      ],
    },
    ar: {
      title: "سياسة الخصوصية",
      subtitle: "خصوصيتك تهمنا",
      backHome: "العودة للرئيسية",
      lastUpdated: "آخر تحديث: يناير 2020",
      sections: [
        {
          title: "المعلومات التي نجمعها",
          content:
            "نجمع المعلومات التي تقدمها لنا مباشرة، بما في ذلك اسمك ورقم هاتفك وعنوان بريدك الإلكتروني وأي معلومات طبية تختار مشاركتها أثناء المواعيد أو من خلال نماذج الحجز.",
        },
        {
          title: "كيف نستخدم معلوماتك",
          content:
            "نستخدم المعلومات التي نجمعها لتقديم الخدمات الطبية وجدولة المواعيد والتواصل معك بشأن رعايتك وتحسين خدماتنا. لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض التسويق.",
        },
        {
          title: "أمان البيانات",
          content:
            "نطبق التدابير التقنية والتنظيمية المناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير. يتم تخزين جميع بيانات المرضى بشكل آمن وفقًا لمعايير حماية البيانات الطبية.",
        },
        {
          title: "ملفات تعريف الارتباط",
          content:
            "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح. يمكنك اختيار قبول أو رفض ملفات تعريف الارتباط غير الضرورية. ملفات تعريف الارتباط الأساسية ضرورية لعمل الموقع بشكل صحيح.",
        },
        {
          title: "حقوقك",
          content:
            "لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. يمكنك أيضًا طلب نسخة من بياناتك أو الاعتراض على معالجتها. لممارسة هذه الحقوق، يرجى الاتصال بنا مباشرة.",
        },
        {
          title: "اتصل بنا",
          content:
            "إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا على doctoremadhamdy@gmail.com أو الاتصال على 01005166376.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-[#f5d547] hover:text-[#f8e17a] hover:bg-[#f5d547]/10">
              <ArrowLeft className="w-4 h-4 ltr:mr-2 rtl:ml-2 rtl:rotate-180" />
              {t.backHome}
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-[#f5d547]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#f5d547]" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-serif mb-2">{t.title}</h1>
            <p className="text-muted-foreground">{t.subtitle}</p>
            <p className="text-sm text-muted-foreground mt-2">{t.lastUpdated}</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {t.sections.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
