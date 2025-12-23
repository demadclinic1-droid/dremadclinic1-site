import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dremadhamdy.com"),
  title: {
    default: "Dr. Emad Hamdy | Internal Medicine & Tropical Specialist | Hurghada, Egypt",
    template: "%s | Dr. Emad Hamdy",
  },
  description:
    "Dr. Emad Hamdy - Specialist in Internal Medicine, Tropical Diseases, Gastroenterology, Hepatology & Diabetes Management in Hurghada, Egypt. Book your appointment today. Over 30 years of medical experience.",
  keywords: [
    "Dr. Emad Hamdy",
    "Internal Medicine",
    "Tropical Diseases",
    "Gastroenterology",
    "Hepatology",
    "Diabetes Management",
    "Hurghada",
    "Red Sea",
    "Egypt",
    "Medical Specialist",
    "Ultrasound",
    "GI Doctor",
    "Liver Specialist",
    "د. عماد حمدي",
    "الطب الباطني",
    "الأمراض المدارية",
    "الغردقة",
    "مصر",
  ],
  authors: [{ name: "Dr. Emad Hamdy", url: "https://dremadhamdy.com" }],
  creator: "Dr. Emad Hamdy",
  publisher: "Dr. Emad Hamdy Medical Clinic",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://dremadhamdy.com",
    siteName: "Dr. Emad Hamdy Medical Clinic",
    title: "Dr. Emad Hamdy | Internal Medicine & Tropical Specialist",
    description:
      "Expert medical care in Internal Medicine, Tropical Diseases, Gastroenterology, and Diabetes Management. Located in Hurghada, Egypt.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Emad Hamdy Medical Clinic - Internal Medicine & Tropical Specialist",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Emad Hamdy | Internal Medicine & Tropical Specialist",
    description:
      "Expert medical care in Internal Medicine, Tropical Diseases, Gastroenterology, and Diabetes Management in Hurghada, Egypt.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Emad Hamdy Medical Clinic Logo",
      },
    ],
    creator: "@dremadhamdy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Medical",
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://dremadhamdy.com",
  name: "Dr. Emad Hamdy Medical Clinic",
  alternateName: "عيادة د. عماد حمدي",
  description: "Specialist in Internal Medicine, Tropical Diseases, Gastroenterology, Hepatology & Diabetes Management",
  url: "https://dremadhamdy.com",
  telephone: "+201005166376",
  email: "doctoremadhamdy@gmail.com",
  image: "https://dremadhamdy.com/images/og-image.jpg",
  logo: "https://dremadhamdy.com/images/og-image.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hurghada",
    addressLocality: "Hurghada",
    addressRegion: "Red Sea",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.2579,
    longitude: 33.8116,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  sameAs: ["https://www.facebook.com/profile.php?id=61584099088156"],
  medicalSpecialty: ["Internal Medicine", "Gastroenterology", "Hepatology", "Tropical Medicine", "Diabetes Management"],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Internal Medicine Consultation",
      description: "Comprehensive diagnosis and treatment of adult diseases",
    },
    {
      "@type": "MedicalProcedure",
      name: "Gastroenterology",
      description: "Expert care for digestive system disorders",
    },
    {
      "@type": "MedicalProcedure",
      name: "Hepatology",
      description: "Specialized treatment for liver diseases",
    },
    {
      "@type": "MedicalProcedure",
      name: "Diabetes Management",
      description: "Comprehensive diabetes care and metabolic disorder treatment",
    },
    {
      "@type": "MedicalProcedure",
      name: "Diagnostic Ultrasound",
      description: "Advanced imaging for accurate diagnosis",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Dr. Emad Hamdy",
    alternateName: "د. عماد حمدي",
    jobTitle: "Internal Medicine & Tropical Specialist",
    image: "/images/emad.jpeg",
    sameAs: ["https://www.facebook.com/profile.php?id=61584099088156"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <CookieConsent />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
