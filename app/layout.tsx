import type { Metadata, Viewport } from "next"
import { DM_Serif_Display, Instrument_Sans } from "next/font/google"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Chiara Natali — Digital Marketing per la Cultura",
  description:
    "Oltre 12 anni di esperienza nel digital marketing per il settore culturale. Arte, mostre, cinema e molto altro.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f0e8",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${dmSerif.variable} ${instrumentSans.variable}`} style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  )
}
