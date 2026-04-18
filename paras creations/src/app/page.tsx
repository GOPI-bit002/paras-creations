import Link from "next/link";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";
import Hero from "@/components/public/Hero";
import SectionTitle from "@/components/public/SectionTitle";
import ServiceCard from "@/components/public/ServiceCard";
import ProjectCard from "@/components/public/ProjectCard";
import Industries from "@/components/public/Industries";
import Testimonials from "@/components/public/Testimonials";
import Process from "@/components/public/Process";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { company } from "@/data/company";

export default function HomePage() {
  const featured = projects.slice(0, 3);
  const topServices = services.slice(0, 6);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Industries />

        {/* Services preview */}
        <section className="section-padding bg-white">
          <div className="container-premium">
            <SectionTitle
              eyebrow="What We Do"
              title="Premium Construction Services"
              subtitle="From large-scale government tenders to private residential and commercial builds — we handle every phase with precision."
            />

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topServices.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/services" className="btn-dark">
                View All Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="section-padding bg-brand-soft">
          <div className="container-premium">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <SectionTitle
                eyebrow="Signature Work"
                title="Featured Projects"
                subtitle={`A snapshot of the government and private projects delivered under the leadership of ${company.owner}.`}
                align="left"
              />
              <Link href="/projects" className="btn-dark self-start lg:self-end">
                See all projects
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <Process />

        {/* Why choose us */}
        <section className="section-padding bg-brand-black text-white relative overflow-hidden">
          <div
            className="absolute -left-40 top-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div
            className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{
              background: "radial-gradient(closest-side, #d4af37, transparent)"
            }}
          />
          <div className="container-premium relative z-10">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Built on Trust. Delivered with Precision."
              subtitle="A trusted name for government departments, developers, and private clients across Punjab and North India."
              light
            />

            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.whyChooseUs.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-brand-gold/60 hover:bg-white/10 transition-all group"
                >
                  <div className="h-11 w-11 rounded-lg bg-brand-gold text-brand-black font-bold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Contact CTA */}
        <section className="section-padding bg-brand-soft">
          <div className="container-premium">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-black via-brand-gray to-brand-black p-10 sm:p-14 text-white">
              <div
                className="absolute -right-10 -top-10 w-72 h-72 rounded-full opacity-30 blur-3xl"
                style={{
                  background: "radial-gradient(closest-side, #d4af37, transparent)"
                }}
              />
              <div
                className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
                style={{
                  background: "radial-gradient(closest-side, #d4af37, transparent)"
                }}
              />
              <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
                    Start Your Project
                  </div>
                  <h3 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl">
                    Have a project in mind? Let&apos;s build it together.
                  </h3>
                  <p className="mt-4 text-white/70 max-w-2xl">
                    Share your requirement with {company.owner} and our team. We
                    will get back with a detailed assessment and timeline.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href="/contact" className="btn-primary justify-center">
                    Send Enquiry
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
