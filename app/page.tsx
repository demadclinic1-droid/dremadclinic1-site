import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { CertificatesSection } from "@/components/certificates-section"
import { ClinicSection } from "@/components/clinic-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ValuesSection } from "@/components/values-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { FloatingBooking } from "@/components/floating-booking"
import { AIChatWidget } from "@/components/ai-chat-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CertificatesSection />
      <ClinicSection />
      <GallerySection />
      <TestimonialsSection />
      <ValuesSection />
      <FAQSection />
      <ContactSection />
      <BookingSection />
      <Footer />
      <FloatingBooking />
      <AIChatWidget />
    </main>
  )
}
