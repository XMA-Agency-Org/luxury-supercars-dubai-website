import type { Metadata } from "next"
import { Epilogue, DM_Sans, Poppins } from "next/font/google"
import "./globals.css"

const epilogue = Epilogue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const poppins = Poppins({
  variable: "--font-cta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luxury Supercar Rentals Dubai | Premium Car Hire in Dubai, UAE",
  description:
    "Dubai's most trusted supercar rentals. Premium services with 24/7 support and free delivery across Dubai. Rent Lamborghini, Ferrari, Rolls Royce, and more.",
  openGraph: {
    title: "Luxury Supercar Rentals Dubai | Premium Car Hire in Dubai, UAE",
    description:
      "Dubai's most trusted supercar rentals. Premium services with 24/7 support and free delivery across Dubai.",
    url: "https://luxurysupercarsdubai.com",
    siteName: "Luxury Supercars Dubai",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${dmSans.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
