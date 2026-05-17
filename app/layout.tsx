import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Dental Sonrisa | Valencia",
  description:
    "Clínica Dental en Valencia. Tratamientos de ortodoncia, implantes, estética dental y odontopediatría en Clínica Dental Sonrisa.",
  keywords: [
    "clínica dental Valencia",
    "dentista Valencia",
    "Clínica Dental Sonrisa",
    "ortodoncia Valencia",
    "implantes Valencia",
    "estética dental Valencia",
  ],
  openGraph: {
    title: "Clínica Dental Sonrisa | Valencia",
    description:
      "Clínica dental en Valencia. Tratamientos dentales profesionales con equipo experto y tecnología avanzada.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
