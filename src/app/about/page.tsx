import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import SectionTitle from "@/components/public/SectionTitle";
import Link from "next/link";
import { company } from "@/data/company";

export const metadata = { title: `About — ${company.name}` };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-brand-black text-white py-20 relative overflow-hidden">
          <div
            className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
              About Us
            </div>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Two decades of building trust through construction.
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl text-lg">
              {company.name} is a full-service construction company headquartered
              in Punjab, delivering premium government and private projects under
              the leadership of {company.owner}.
            </p>
          </div>
        </section>

        {/* Owner + mission */}
        <section className="section-padding bg-white">
          <div className="container-premium grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTitle
                eyebrow="Our Mission"
                title="Construction built on quality, safety, and accountability."
                subtitle="We exist to raise the standard of construction across every project we take on — whether a government tender or a private home."
                align="left"
              />
              <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  From day one, our work has been guided by a single promise: do
                  things the right way. That promise applies on every floor we
                  cast, every brick we lay, and every worker we deploy.
                </p>
                <p>
                  With experience spanning PWD tenders, municipal infrastructure,
                  commercial plazas, and luxury private residences, our team
                  combines on-ground expertise with modern project management
                  practices.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand-gold/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-brand-black to-brand-gray text-white rounded-2xl p-8 sm:p-10 overflow-hidden">
                <div className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
                  Leadership
                </div>
                <h3 className="font-display font-bold text-3xl">
                  {company.owner}
                </h3>
                <div className="mt-1 text-white/60 text-sm">
                  {company.ownerTitle}
                </div>
                <p className="mt-6 text-white/80 leading-relaxed">
                  With over a decade of hands-on construction experience,{" "}
                  {company.owner} has built {company.name} into a name trusted by
                  both government departments and private clients for reliable
                  delivery, fair pricing, and premium quality.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-brand-gold font-bold text-2xl">45+</div>
                    <div className="text-white/60">Government Projects</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-brand-gold font-bold text-2xl">120+</div>
                    <div className="text-white/60">Private Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-brand-soft">
          <div className="container-premium">
            <SectionTitle
              eyebrow="Our Values"
              title="Principles we never compromise on."
              subtitle="These values shape every decision from the office to the site."
            />

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {company.values.map((v, idx) => (
                <div
                  key={v.title}
                  className="card p-6 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-gold"
                >
                  <div className="text-brand-gold font-bold text-3xl font-display">
                    0{idx + 1}
                  </div>
                  <h4 className="mt-4 font-display font-bold text-brand-black">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="section-padding bg-white">
          <div className="container-premium grid md:grid-cols-2 gap-10">
            <div className="bg-brand-black text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
                Government
              </div>
              <h3 className="font-display font-bold text-3xl mt-2">
                Public-sector expertise
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Registered, documented, and experienced in PWD, municipal, and
                departmental tenders. Our team understands compliance, billing,
                and timeline requirements inside-out.
              </p>
            </div>
            <div className="bg-brand-gold text-brand-black rounded-2xl p-8 relative overflow-hidden">
              <div className="text-xs uppercase tracking-[0.25em] font-semibold">
                Private
              </div>
              <h3 className="font-display font-bold text-3xl mt-2">
                Premium private builds
              </h3>
              <p className="mt-4 leading-relaxed">
                Luxury villas, commercial plazas, warehouses, and institutional
                buildings — delivered with modern design practices, quality
                finishes, and transparent pricing.
              </p>
            </div>
          </div>

          <div className="container-premium mt-14 text-center">
            <Link href="/contact" className="btn-dark">
              Start a conversation →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
