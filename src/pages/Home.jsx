import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Products from '../components/Products.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Contact from '../components/Contact.jsx'
import Location from '../components/Location.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Contact />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
