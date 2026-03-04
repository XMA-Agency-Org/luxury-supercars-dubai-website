import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget"
import { FloatingCallButton } from "@/components/layout/floating-call-button"
import { CurrencyProvider } from "./_lib/currency-context"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CurrencyProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppWidget />
    </CurrencyProvider>
  )
}
