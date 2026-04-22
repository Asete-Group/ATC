import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-family",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ATC China Brasil",
  description:
    "Conectamos sua empresa diretamente às melhores fábricas do mundo, com segurança e estratégia. Importação, exportação e sourcing na China.",
  icons: {
    icon: [
      {
        url: "/atc-dark.png",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
      },
      {
        url: "/atc-light.png",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
      },
      {
        url: "/atc-light.png",
        type: "image/png",
      },
    ],
    apple: "/atc-light.png",
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
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
