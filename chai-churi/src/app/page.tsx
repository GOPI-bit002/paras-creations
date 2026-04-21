import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <CategorySection />
      <MenuSection />
      <About />
      <WhyChooseUs />
      <Location />
      <Contact />
      <Footer />
      <CartDrawer />
    </main>
  );
}
