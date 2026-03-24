import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Lora } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const BASE_URL = "https://barbeariaduartemp.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Barbearia Duarte",
    template: "%s | Barbearia Duarte",
  },
  description:
    "Barbearia premium em Montes Claros. Cortes modernos, barba perfeita e atendimento de excelência.",
  keywords: ["barbearia", "corte de cabelo", "barba", "Barbearia Duarte"],
  authors: [{ name: "Barbearia Duarte" }],
  creator: "Barbearia Duarte",
  openGraph: {
    title: "Barbearia Duarte",
    description:
      "Barbearia premium em Montes Claros. Cortes modernos, barba perfeita e atendimento de excelência.",
    url: BASE_URL,
    siteName: "Barbearia Duarte",
    images: [
      {
        url: "/open-graph.jpg",
        width: 1200,
        height: 630,
        alt: "Barbearia Duarte",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia Duarte",
    description:
      "Barbearia premium em Montes Claros. Cortes modernos, barba perfeita e atendimento de excelência.",
    images: ["/open-graph.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" }
    ],
    apple: { url: "/favicon.ico", type: "image/x-icon" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${instrumentSans.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
