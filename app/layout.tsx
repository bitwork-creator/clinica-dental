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
  title: "Clínica Dental Primero de Mayo | Valencia",
  description:
    "Clínica Dental en Valencia, barrio de Jesús. Tratamientos de ortodoncia, implantes, estética dental y odontopediatría en Primero de Mayo.",
  keywords: [
    "clínica dental Valencia",
    "dentista Valencia Jesús",
    "Primero de Mayo dental",
    "ortodoncia Valencia",
    "implantes Valencia",
    "estética dental Valencia",
  ],
  openGraph: {
    title: "Clínica Dental Primero de Mayo | Valencia",
    description:
      "Clínica dental en el barrio de Jesús, Valencia. Tratamientos dentales profesionales con equipo experto y tecnología avanzada.",
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
