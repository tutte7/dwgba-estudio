import type React from "react"
import type { Metadata } from "next"
import { neueMontreal } from "./fonts/neue-montreal"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Load PP Neue Montreal variable into CSS

export const metadata: Metadata = {
  title: "dwgba • estudio - Architecture Studio",
  description: "Contemporary architecture studio showcasing prestigious projects with editorial authority",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={neueMontreal.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
