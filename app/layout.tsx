import { Header } from "./components/Header"
import "./globals.css"
import { Container } from "./components/Container"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { TanstackQueryProvider } from "./providers/query-client-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Começando com Next.js",
  description: "Site de exemplo para começar a usar Next.js",
  openGraph: {
    title: "Começando com Next.js",
    description: "Site de exemplo para começar a usar Next.js",
    url: "https://comecando-com-next.vercel.app",
    siteName: "Começando com Next.js",
    locale: "pt-BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="antialiased">
        <Header />
        <TanstackQueryProvider>
          <Container>{children}</Container>
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
