import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Dental Primero de Mayo | Tu sonrisa, nuestra pasión",
  description:
    "Clínica dental de confianza: ortodoncia, implantes, estética dental, odontopediatría y más. Reservá tu cita hoy.",
  keywords: [
    "dentista",
    "clínica dental",
    "ortodoncia",
    "implantes",
    "estética dental",
    "odontopediatría",
  ],
  openGraph: {
    title: "Clínica Dental Primero de Mayo",
    description: "Tu sonrisa en las mejores manos. Pedí tu turno hoy.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
