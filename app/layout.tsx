import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import OffersStrip from "@/components/OffersStrip";
import Footer from "@/components/Footer";
import RouteTransitionWrapper from "@/components/RouteTransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VproTech Digital ",
  description: "software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RouteTransitionWrapper>
          <Navbar />
          <OffersStrip />
          {children}
          <Footer />
        </RouteTransitionWrapper>
      </body>
    </html>
  );
}
