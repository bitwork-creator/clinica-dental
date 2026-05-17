import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica Dental Sonrisa | Dentista en Valencia Centro",
  description:
    "Clínica dental en Valencia centro. Ortodoncia, implantes, estética dental y odontopediatría. Primera consulta gratuita.",
  keywords: [
    "clínica dental Valencia",
    "dentista Valencia centro",
    "Clínica Dental Sonrisa",
    "ortodoncia Valencia",
    "implantes Valencia",
    "estética dental Valencia",
    "odontopediatría Valencia",
  ],
  openGraph: {
    title: "Clínica Dental Sonrisa | Dentista en Valencia Centro",
    description:
      "Clínica dental en Valencia centro. Ortodoncia, implantes, estética dental y odontopediatría. Primera consulta gratuita.",
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
      className={`${dmSans.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
