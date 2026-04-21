import Navbar from "@/components/public/Navbar";
import Hero from "@/components/public/Hero";
import PortfolioGrid from "@/components/public/PortfolioGrid";
import FeaturedProject from "@/components/public/FeaturedProject";
import Capabilities from "@/components/public/Capabilities";
import Testimonials from "@/components/public/Testimonials";
import Footer from "@/components/public/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <FeaturedProject />
        <Capabilities />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
