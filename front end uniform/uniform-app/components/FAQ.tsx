"use client";

import { useState } from "react";

const faqs = [
  { q: "What is the minimum order quantity (MOQ)?", a: "Our standard MOQ starts at 20 sets per style. However, we can accommodate smaller boutique orders depending on fabric availability. For very large orders (500+ sets), we offer additional volume discounts." },
  { q: "Do you provide logo embroidery and branding?", a: "Yes — we offer high-density embroidery, screen printing, heat-press, and woven label options for all custom uniforms. We use Pantone color matching to ensure your brand colors are represented accurately on every piece." },
  { q: "How long does production and delivery take?", a: "Standard production takes 14–21 business days after sample approval. Express options are available for urgent requirements. We deliver across Dubai, Abu Dhabi, Sharjah, and the wider UAE." },
  { q: "Do you offer samples before bulk production?", a: "Absolutely. We always produce a physical sample set first so you can approve the fit, fabric, stitching, and branding before we proceed to full bulk production." },
  { q: "Can you match our exact brand colors?", a: "Yes. We use Pantone color matching for both fabric selection and embroidery/print work. Simply share your brand guidelines or Pantone code and we'll ensure everything is matched precisely." },
  { q: "Do you deliver outside Dubai?", a: "Yes, we deliver across the UAE — including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. For international shipping requirements, please contact us directly." },
  { q: "What payment methods do you accept?", a: "We accept bank transfers, cheques, and cash payments. For corporate clients we can arrange credit terms upon approval. A deposit is required before production begins, with the balance due on delivery." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding">
      <div className="container faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-sub">Everything you need to know before placing an order.</p>

        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className={`faq-item${openIndex === i ? " open" : ""}`}
          >
            <button
              type="button"
              className="faq-question"
              aria-expanded={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">{faq.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
