"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BUSINESS, formatINR, whatsappLink } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, total, setQty, removeItem, count } =
    useCart();

  function buildOrderMessage() {
    const items = lines
      .map(
        (l, i) =>
          `${i + 1}. ${l.product.name} × ${l.qty} — ${formatINR(
            l.qty * l.product.price,
          )}`,
      )
      .join("\n");
    return `Hello ${BUSINESS.name}, I want to order:\n${items}\n\nTotal: ${formatINR(
      total,
    )}\nName: \nAddress: \nPhone: `;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-brand-green-dark/50 backdrop-blur-sm"
          onClick={closeCart}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-brand-off-white shadow-card"
          >
            <header className="flex items-center justify-between border-b border-brand-green/10 bg-white px-5 py-4">
              <div>
                <div className="eyebrow">Your Order</div>
                <div className="font-display text-xl font-bold text-brand-green-dark">
                  {count} {count === 1 ? "item" : "items"}
                </div>
              </div>
              <button
                onClick={closeCart}
                className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream text-brand-green"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-cream text-3xl">
                      🍽️
                    </div>
                    <div className="mt-4 font-display text-xl font-semibold text-brand-green-dark">
                      Your cart is empty
                    </div>
                    <p className="mt-1 text-sm text-brand-brown-dark/60">
                      Add something delicious from the menu.
                    </p>
                    <button
                      onClick={closeCart}
                      className="btn-primary mt-6"
                    >
                      Browse Menu
                    </button>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {lines.map((l) => (
                    <motion.li
                      key={l.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-3 rounded-2xl border border-brand-green/10 bg-white p-3 shadow-soft"
                    >
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={l.product.image}
                          alt={l.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                              {l.product.category}
                            </div>
                            <div className="line-clamp-2 font-display text-sm font-semibold text-brand-green-dark">
                              {l.product.name}
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(l.product.id)}
                            className="rounded-full p-1.5 text-brand-brown-dark/40 hover:bg-red-50 hover:text-red-600"
                            aria-label="Remove"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="inline-flex items-center rounded-full border border-brand-green/15 bg-brand-cream-soft">
                            <button
                              onClick={() => setQty(l.product.id, l.qty - 1)}
                              className="grid h-8 w-8 place-items-center text-brand-green"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold text-brand-green-dark">
                              {l.qty}
                            </span>
                            <button
                              onClick={() => setQty(l.product.id, l.qty + 1)}
                              className="grid h-8 w-8 place-items-center text-brand-green"
                              aria-label="Increase"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <div className="font-display text-base font-bold text-brand-green">
                            {formatINR(l.qty * l.product.price)}
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="border-t border-brand-green/10 bg-white px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-brown-dark/60">
                    Subtotal
                  </span>
                  <span className="font-display text-2xl font-bold text-brand-green-dark">
                    {formatINR(total)}
                  </span>
                </div>
                <a
                  href={whatsappLink(buildOrderMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 active:scale-[0.99]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp · {formatINR(total)}
                </a>
                <p className="mt-2 text-center text-[11px] text-brand-brown-dark/50">
                  We'll open WhatsApp with your order pre-filled.
                </p>
              </footer>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
