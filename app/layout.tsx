import type React from "react"
import "@/app/globals.css"
import "@copilotkit/react-ui/styles.css";
import type { Metadata } from "next"
import { Nunito_Sans, Montserrat } from "next/font/google"
import { Providers } from "@/components/providers"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "FastGPT Interface",
  description: "A cross-platform interface for FastGPT API",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${montserrat.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
