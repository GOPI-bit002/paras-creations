"use client";

import { useState } from "react";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import { company } from "@/data/company";

// ------------------------------------------------------------
// Enquiry form — currently frontend-only (no backend).
// When adding a real backend:
//   1. Replace the handleSubmit body with a fetch() POST to your API.
//   2. Persist submissions to a database so /admin/enquiries reads them.
// ------------------------------------------------------------

const projectTypes = [
  "Government Construction",
  "Private Villa",
  "Commercial Building",
  "Renovation",
  "Civil Work",
  "Road / Infrastructure",
  "Material Supply",
  "Other"
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    projectType: projectTypes[0],
    location: "",
    message: ""
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/enquiries once a real backend exists.
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-black text-white py-20 relative overflow-hidden">
          <div
            className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
              Contact
            </div>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Let&apos;s talk about your next build.
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl text-lg">
              Fill out the enquiry form or call us directly — we typically reply
              within 24 hours.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-premium grid lg:grid-cols-5 gap-10">
            {/* Info card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-brand-black text-white rounded-2xl p-8">
                <h3 className="font-display font-bold text-2xl">
                  Reach us directly
                </h3>
                <p className="mt-3 text-white/70">
                  Speak with {company.owner} or the project team.
                </p>

                <div className="mt-6 space-y-5 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                      Phone
                    </div>
                    <a
                      href={`tel:${company.phone}`}
                      className="mt-1 block text-lg font-semibold hover:text-brand-gold"
                    >
                      {company.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                      Email
                    </div>
                    <div className="mt-1 text-white/80">{company.email}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                      Address
                    </div>
                    <div className="mt-1 text-white/80">{company.address}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                      Owner
                    </div>
                    <div className="mt-1 text-white/80">
                      {company.owner} — {company.ownerTitle}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-gold text-brand-black rounded-2xl p-8">
                <h4 className="font-display font-bold text-lg">
                  Urgent project?
                </h4>
                <p className="mt-2 text-sm">
                  For urgent government tender assistance or site emergencies,
                  call us directly.
                </p>
                <a
                  href={`tel:${company.phone}`}
                  className="mt-4 inline-flex items-center gap-2 bg-brand-black text-white px-5 py-2.5 rounded-md font-semibold hover:bg-brand-gray transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="mx-auto h-16 w-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl">
                      ✓
                    </div>
                    <h3 className="mt-6 font-display font-bold text-2xl text-brand-black">
                      Enquiry sent successfully
                    </h3>
                    <p className="mt-3 text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out to {company.name}. Our team will
                      contact you within 24 hours on{" "}
                      <span className="font-semibold text-brand-black">
                        {form.mobile}
                      </span>
                      .
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          mobile: "",
                          projectType: projectTypes[0],
                          location: "",
                          message: ""
                        });
                      }}
                      className="mt-8 btn-dark"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display font-bold text-2xl text-brand-black">
                      Send an Enquiry
                    </h3>
                    <p className="text-sm text-gray-600 -mt-3">
                      Fields marked * are required.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Your Name *"
                        value={form.name}
                        onChange={(v) => update("name", v)}
                        required
                      />
                      <Field
                        label="Mobile Number *"
                        type="tel"
                        value={form.mobile}
                        onChange={(v) => update("mobile", v)}
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                          Project Type *
                        </label>
                        <select
                          value={form.projectType}
                          onChange={(e) => update("projectType", e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent bg-white"
                        >
                          {projectTypes.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <Field
                        label="Location *"
                        value={form.location}
                        onChange={(v) => update("location", v)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        required
                        rows={5}
                        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent resize-none"
                        placeholder="Tell us about your project — scope, site, timeline, budget..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Submit Enquiry →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  pattern
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        pattern={pattern}
        className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
      />
    </div>
  );
}
