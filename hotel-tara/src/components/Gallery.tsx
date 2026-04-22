"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    alt: "Premium bedroom at Hotel TARA",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean, elegant bathroom",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    alt: "Dining area with warm lighting",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    alt: "Himachal highway near the hotel",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Hotel TARA exterior view",
    span: "md:col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Reception and lobby area",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-py bg-sand/60">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="heading">A glimpse into Hotel TARA</h2>
          <p className="mt-4 text-charcoal/70">
            Rooms, dining and the quiet charm of Himachal — captured in a few
            frames.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl2 shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 text-sm font-medium text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
