import { Moon, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/85">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-cream text-ink flex items-center justify-center">
                <Moon size={18} strokeWidth={1.8} />
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold text-cream">
                  Shree Naina
                </div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-cream/60">
                  Enterprises
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-cream/65 leading-relaxed max-w-xs">
              Premium mattresses &amp; pillows — helping you sleep better and
              live better.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-cream/65 hover:text-cream transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 text-cream/60" />
                <a href="tel:+917018050630" className="hover:text-cream">
                  7018050630
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 text-cream/60" />
                <a
                  href="mailto:eshrinaina@gmail.com"
                  className="hover:text-cream break-all"
                >
                  eshrinaina@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 text-cream/60" />
                <span>Hamirpur, Himachal Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Note */}
          <div>
            <h4 className="font-display text-base font-semibold text-cream">
              About the Brand
            </h4>
            <p className="mt-5 text-sm text-cream/65 leading-relaxed">
              Authorized seller of{" "}
              <span className="text-cream font-medium">Spenta Mattress</span>.
              Quality products backed by the trust of a reputed manufacturer.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row gap-3 sm:gap-0 items-start sm:items-center justify-between text-xs text-cream/50">
          <div>
            &copy; {new Date().getFullYear()} Shree Naina Enterprises. All
            rights reserved.
          </div>
          <div>Crafted with care for better sleep.</div>
        </div>
      </div>
    </footer>
  );
}
