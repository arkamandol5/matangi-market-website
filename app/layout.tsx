import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Matangi Market Pvt Limited | UK Wholesale-to-Market Partner",
    template: "%s | Matangi Market",
  },
  description:
    "Matangi Market Pvt Limited is a UK company sourcing branded goods from wholesale partners for responsible resale through Amazon FBA.",
  keywords: [
    "Matangi Market",
    "UK wholesale buyer",
    "Amazon FBA seller",
    "wholesale partnerships",
    "Gateshead business",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Matangi Market Pvt Limited",
    description:
      "A transparent, growth-minded UK buyer building dependable wholesale partnerships.",
  },
  twitter: {
    card: "summary",
    title: "Matangi Market Pvt Limited",
    description:
      "A transparent, growth-minded UK buyer building dependable wholesale partnerships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
