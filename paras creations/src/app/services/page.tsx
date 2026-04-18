import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import SectionTitle from "@/components/public/SectionTitle";
import ServiceCard from "@/components/public/ServiceCard";
import Link from "next/link";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata = { title: `Services — ${company.name}` };

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-brand-black text-white py-20 relative overflow-hidden">
          <div
            className="absolute -left-32 -top-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
              Our Services
            </div>
            <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              Full-spectrum construction services.
            </h1>
            <p className="mt-5 text-white/70 max-w-2xl text-lg">
              From concept to handover, we provide a complete suite of
              construction services tailored for government and private clients.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-premium">
            <SectionTitle
              eyebrow="Scope Of Work"
              title="Services we offer"
              subtitle="Every service backed by qualified engineers, skilled workers, and on-site supervision."
            />

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-brand-soft">
          <div className="container-premium">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-black to-brand-gray p-10 sm:p-14 text-white">
              <div
                className="absolute -right-10 -top-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "radial-gradient(closest-side, #d4af37, transparent)"
                }}
              />
              <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl">
                    Not sure which service you need?
                  </h3>
                  <p className="mt-4 text-white/70 max-w-2xl">
                    Share your project brief with our team. We will recommend the
                    right scope and provide a transparent cost estimate.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href="/contact" className="btn-primary justify-center">
                    Free Consultation
                  </Link>
                  <a
                    href={`tel:${company.phone}`}
                    className="btn-outline justify-center"
                  >
                    Call {company.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
