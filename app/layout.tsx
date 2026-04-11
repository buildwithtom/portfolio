import type { Metadata } from "next";
import { Courier_Prime, Space_Mono, VT323 } from "next/font/google";
import "./globals.css";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

import { Navbar } from "@/components/Navbar";
import { PixelPet } from "@/components/ui/PixelPet";

export const metadata: Metadata = {
  title: "Tom Jose - Software Engineer",
  description: "Portfolio of Tom Jose, a Software Engineer proficient in frontend infrastructure and UI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${courierPrime.variable} ${spaceMono.variable} ${vt323.variable} antialiased`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <Navbar />
        {children}
        <PixelPet />
      </body>
    </html>
  );
}
