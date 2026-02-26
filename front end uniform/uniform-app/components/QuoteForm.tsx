"use client";

import { useState } from "react";

const INDUSTRIES = [
  "",
  "corporate",
  "hospitality",
  "healthcare",
  "retail",
  "aviation",
  "industrial",
  "security",
  "education",
  "events",
  "other",
];
const INDUSTRY_LABELS: Record<string, string> = {
  corporate: "Corporate",
  hospitality: "Hospitality",
  healthcare: "Healthcare",
  retail: "Retail",
  aviation: "Aviation",
  industrial: "Industrial / Safety",
  security: "Security",
  education: "Education",
  events: "Events & Promotions",
  other: "Other",
};
const QUANTITIES = ["", "20-50", "51-100", "101-500", "500+"];
const QUANTITY_LABELS: Record<string, string> = {
  "20-50": "20 – 50 sets",
  "51-100": "51 – 100 sets",
  "101-500": "101 – 500 sets",
  "500+": "500+ sets",
};

export default function QuoteForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = e.currentTarget;
    const body = {
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      industry: (form.elements.namedItem("industry") as HTMLSelectElement).value,
      quantity: (form.elements.namedItem("quantity") as HTMLSelectElement).value,
      requirements: (form.elements.namedItem("requirements") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }
      setSuccess(true);
      form.reset();
    } catch {
      setError("Network error. Please try again or contact us via WhatsApp.");
    }
    setLoading(false);
  }

  if (success) {
    return (
      <section id="lead-form" className="section-padding bg-light">
        <div className="container">
          <div className="form-container">
            <div className="form-success">
              <i className="fas fa-check-circle" />
              <h3>Thank you! We&apos;ll be in touch soon.</h3>
              <p>
                One of our specialists will contact you within 24 hours. For a faster response, WhatsApp us directly
                using the button below.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="section-padding bg-light">
      <div className="container">
        <div className="form-container">
          <h2>Get Your Free Quote Within 24 Hours</h2>
          <p className="form-subheading">
            Join 500+ UAE businesses who trust RR Threads. No obligation — a dedicated specialist will call or WhatsApp
            you with a tailored quote.
          </p>

          <form id="quote-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field-group">
                <label htmlFor="full_name">Full Name *</label>
                <input type="text" id="full_name" name="full_name" placeholder="e.g. Ahmed Al Mansouri" required />
              </div>
              <div className="field-group">
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" placeholder="Your business name" />
              </div>
              <div className="field-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="field-group">
                <label htmlFor="phone">Phone / WhatsApp *</label>
                <input type="tel" id="phone" name="phone" placeholder="+971 50 700 8977" required />
              </div>
              <div className="field-group">
                <label htmlFor="industry">Industry *</label>
                <select id="industry" name="industry" required>
                  <option value="">Select Industry</option>
                  {INDUSTRIES.filter(Boolean).map((v) => (
                    <option key={v} value={v}>
                      {INDUSTRY_LABELS[v]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field-group">
                <label htmlFor="quantity">Estimated Quantity</label>
                <select id="quantity" name="quantity">
                  <option value="">Select range</option>
                  {QUANTITIES.filter(Boolean).map((v) => (
                    <option key={v} value={v}>
                      {QUANTITY_LABELS[v]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="textarea-group field-group">
              <label htmlFor="requirements">Tell Us About Your Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                rows={5}
                placeholder="Describe your uniform needs — styles, fabric preferences, logo/branding details, colors, deadline..."
              />
            </div>
            {error && (
              <p style={{ color: "var(--primary)", textAlign: "center", marginBottom: 12, fontSize: 14 }}>{error}</p>
            )}
            <div className="form-submit">
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? "Sending…" : "Request My Free Quote"}
              </button>
            </div>
            <p className="form-note">
              🔒 Your details are safe and never shared. We&apos;ll only contact you about your uniform quote. Prefer
              WhatsApp? Use the green button below.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
