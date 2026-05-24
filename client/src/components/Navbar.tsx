/**
 * Akidiva Hospital Navbar
 * Design: Warm Humanity — sticky nav with blur backdrop, cerulean blue branding
 * Typography: Merriweather (logo) + Inter (nav links)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#maternity", label: "Maternity & Newborn" },
      { href: "/services#surgery", label: "Surgery" },
      { href: "/services#outpatient", label: "Outpatient" },
      { href: "/services#malaria", label: "Malaria Programs" },
      { href: "/services#diagnostics", label: "Diagnostics" },
    ],
  },
  { href: "/patient-journey", label: "Patient Journey" },
  { href: "/education", label: "Health Education" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-hospital-blue-dark text-white text-xs py-2 hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              Emergency: +254 0722255732
            </span>
            <span>Mon–Sat: 8:00 AM – 8:00 PM | Emergency: 24/7</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">Book Appointment</Link>
            <span className="text-white/40">|</span>
            <Link href="/patient-journey" className="hover:text-yellow-300 transition-colors">Patient Portal</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm border border-white/20 p-1">
    <img 
      src="src/images/WhatsApp Image 2026-05-02 at 22.03.48 (1).jpeg" 
      alt="Akidiva Hospital Logo" 
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
    />
  </div>
              <div>
                <span
                  className="block text-lg md:text-xl font-bold text-hospital-blue leading-tight"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  Akidiva
                </span>
                <span className="block text-xs text-gray-500 tracking-widest uppercase">
                  Hospital
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-hospital-blue transition-colors rounded-lg hover:bg-blue-50">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {activeDropdown === link.href && (
                      <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-hospital-blue transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location === link.href
                        ? "text-hospital-blue bg-blue-50"
                        : "text-gray-700 hover:text-hospital-blue hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-hospital-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-hospital-blue-dark transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      location === link.href
                        ? "text-hospital-blue bg-blue-50"
                        : "text-gray-700 hover:text-hospital-blue hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-xs text-gray-600 hover:text-hospital-blue hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-hospital-blue text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-hospital-blue-dark transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
