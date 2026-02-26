import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Custom Uniforms Dubai | Free Quote in 24hrs | RR Threads",
  description:
    "Order custom uniforms in Dubai — corporate, hospitality, healthcare & retail. Free quote in 24 hours. MOQ from 20 sets, logo embroidery, 14-day delivery.",
  keywords:
    "custom uniforms Dubai, bespoke uniforms UAE, corporate uniforms Dubai, hospitality uniforms, RR Threads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
