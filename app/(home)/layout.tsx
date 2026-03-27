import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import { MagneticCursor } from "@/components/ui/magnetic-cursor"
import { CurrencyProvider } from "./_lib/currency-context"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CurrencyProvider>
      <SmoothScroll>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <MagneticCursor />
      </SmoothScroll>
    </CurrencyProvider>
  )
}
