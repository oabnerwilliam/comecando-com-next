import { Header } from "./components/header";
import "./globals.css";
import { Container } from "./components/container";
import { Metadata } from "next";

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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
