/**
 * Akidiva Hospital Footer
 * Design: Warm Humanity — dark navy footer with warm accents
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hospital-blue-dark text-white">
      {/* Emergency banner */}
      <div className="bg-hospital-amber py-3">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-semibold text-white">
            <Phone className="w-4 h-4 animate-pulse" />
            <span>24/7 Emergency Services Available</span>
          </div>
          <a
            href="tel:+254700123456"
            className="text-white font-bold text-lg hover:underline"
          >
            +254 700 123 456
          </a>
        </div>
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                  <rect x="16" y="4" width="8" height="32" rx="2" fill="white" />
                  <rect x="4" y="16" width="32" height="8" rx="2" fill="white" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold text-white" style={{ fontFamily: "Merriweather, serif" }}>
                  Akidiva
                </span>
                <span className="block text-xs text-white/60 tracking-widest uppercase">Hospital</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Providing compassionate, world-class healthcare to the people of Migori County and beyond. Your health is our mission.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-hospital-amber transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/patient-journey", label: "Patient Journey" },
                { href: "/education", label: "Health Education" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-hospital-amber rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Maternity & Newborn Care",
                "General Surgery",
                "Outpatient Services",
                "Malaria Programs",
                "Diagnostic Services",
                "Emergency Care",
                "Pediatrics",
                "Pharmacy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-hospital-green rounded-full group-hover:w-2 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hospital-amber mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Akidiva Hospital, Migori Town,<br />
                  Migori County, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hospital-amber shrink-0" />
                <div className="text-sm">
                  <a href="tel:+254700123456" className="text-white/70 hover:text-white transition-colors block">
                    +254 700 123 456
                  </a>
                  <a href="tel:+254711234567" className="text-white/70 hover:text-white transition-colors block">
                    +254 711 234 567
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hospital-amber shrink-0" />
                <a href="mailto:info@akidivahospital.co.ke" className="text-white/70 hover:text-white text-sm transition-colors">
                  info@akidivahospital.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-hospital-amber mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>Mon – Sat: 8:00 AM – 8:00 PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/70 text-xs mb-2">Subscribe to health tips newsletter:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-hospital-amber"
                />
                <button className="bg-hospital-amber text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p className="flex items-center gap-1">
            © 2026 Akidiva Hospital. Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for our community.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
