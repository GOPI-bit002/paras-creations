"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Plus } from "lucide-react";
import type { Product } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-soft transition-shadow hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-md border border-green-600/70 bg-white/90 px-1.5 py-1 text-[10px] font-bold text-green-700 shadow-sm">
          <span className="grid h-3 w-3 place-items-center rounded-sm border border-green-600">
            <Leaf className="h-2 w-2" />
          </span>
          VEG
        </div>
        {product.tag && (
          <div className="absolute right-3 top-3 rounded-full bg-gold-gradient px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-brown-dark shadow-soft">
            {product.tag}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
          {product.category}
        </div>
        <h3 className="mt-1 line-clamp-2 font-display text-lg font-semibold leading-snug text-brand-green-dark">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="font-display text-xl font-bold text-brand-green">
            {formatINR(product.price)}
          </div>
          <button
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3.5 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brand-green-soft active:scale-95"
          >
            <Plus className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
