import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";


const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "anuncia.ai — Anúncios prontos em 30 segundos",
  description:
    "Envie uma foto do seu produto e a IA gera 3 imagens otimizadas, título SEO, descrição persuasiva e tags — tudo pronto para Mercado Livre, Shopee e Amazon.",
  keywords: "anúncio, marketplace, mercado livre, shopee, amazon, IA, inteligência artificial, SEO, e-commerce",
  openGraph: {
    title: "anuncia.ai — De foto crua a anúncio que vende em 30 segundos",
    description:
      "A IA que transforma uma foto do produto em anúncio profissional para Mercado Livre, Shopee e Amazon.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/icon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={figtree.variable}
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
