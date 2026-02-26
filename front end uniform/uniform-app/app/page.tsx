"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Workshop from "@/components/Workshop";
import SplitSection from "@/components/SplitSection";
import USPBanner from "@/components/USPBanner";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <Services />
        <Industries />
        <Process />
        <Gallery onLightbox={setLightboxSrc} />
        <Workshop onLightbox={setLightboxSrc} />
        <SplitSection />
        <USPBanner />
        <Testimonials />
        <QuoteForm />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
