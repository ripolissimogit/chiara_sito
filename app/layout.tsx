import type { Metadata } from "next"
import { DM_Serif_Display, Instrument_Sans } from "next/font/google"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chiara Natali — Digital Marketing per la Cultura",
  description:
    "Oltre 13 anni di esperienza nel digital marketing per il settore culturale. Arte, mostre, cinema e molto altro.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${dmSerif.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
