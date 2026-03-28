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
    "Barbearia Duarte em Miguel Pereira, RJ. Corte de cabelo, barba e planos de assinatura com agenda flexível. Mais de 8 anos de experiência e atendimento de excelência.",
  keywords: [
    "barbearia",
    "barbearia Miguel Pereira",
    "barbearia RJ",
    "corte de cabelo",
    "barba",
    "Barbearia Duarte",
    "Clube Duarte",
    "plano de assinatura barbearia",
    "barbearia com plano mensal",
  ],
  authors: [{ name: "Barbearia Duarte" }],
  creator: "Barbearia Duarte",
  openGraph: {
    title: "Barbearia Duarte",
    description:
      "Barbearia Duarte em Miguel Pereira, RJ. Corte de cabelo, barba e planos de assinatura com agenda flexível. Mais de 8 anos de experiência e atendimento de excelência.",
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
      "Barbearia Duarte em Miguel Pereira, RJ. Corte de cabelo, barba e planos de assinatura com agenda flexível. Mais de 8 anos de experiência e atendimento de excelência.",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N24NCPSV');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N24NCPSV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
