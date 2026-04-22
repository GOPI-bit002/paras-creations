import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";
import WhyStay from "@/components/WhyStay";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Location />
      <WhyStay />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
