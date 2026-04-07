/**
 * Akidiva Hospital - Gallery Page
 * Design: Warm Humanity — interactive gallery with stats
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { X, ArrowRight, Award, Users, Heart, Stethoscope } from "lucide-react";

const CATEGORIES = ["All", "Facilities", "Medical Team", "Maternity", "Community", "Events"];

const GALLERY_ITEMS = [
  { id: 1, category: "Facilities", title: "Hospital Entrance", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hero-hospital-7fKfa7Nu48HuPfY5cvWJp5.webp", span: "col-span-2" },
  { id: 2, category: "Medical Team", title: "Our Dedicated Team", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/medical-team-iWwJpfcxuSmAydRTfC8Vnu.webp", span: "" },
  { id: 3, category: "Maternity", title: "Maternity Ward", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/maternity-ward-B4fL3fNuFAh3zHDshhPW3Z.webp", span: "" },
  { id: 4, category: "Facilities", title: "Reception & Lobby", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hospital-lobby-mStJQf2kcVxu5A4aTUo6SM.webp", span: "" },
  { id: 5, category: "Medical Team", title: "Doctor Consultation", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/doctor-patient-HhGPTE6kKssSvFowkNxqtE.webp", span: "" },
  { id: 6, category: "Community", title: "Community Outreach", src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80", span: "" },
  { id: 7, category: "Events", title: "Health Awareness Camp", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", span: "" },
  { id: 8, category: "Facilities", title: "Diagnostic Center", src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80", span: "" },
  { id: 9, category: "Community", title: "School Health Visit", src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80", span: "" },
  { id: 10, category: "Events", title: "Medical Conference", src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80", span: "" },
  { id: 11, category: "Facilities", title: "Operating Theater", src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80", span: "" },
  { id: 12, category: "Maternity", title: "Newborn Care", src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80", span: "" },
];

const QUICK_FACTS = [
  { icon: Award, value: "15+", label: "Years of Excellence", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Users, value: "50K+", label: "Patients Served", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Stethoscope, value: "50+", label: "Specialist Doctors", color: "text-green-600", bg: "bg-green-50" },
  { icon: Heart, value: "99%", label: "Patient Satisfaction", color: "text-red-500", bg: "bg-red-50" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Our World</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A glimpse into life at Akidiva Hospital — our facilities, our team, and the community we serve.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {QUICK_FACTS.map(({ icon: Icon, value, label, color, bg }) => (
              <div key={label} className={`${bg} rounded-2xl p-6 text-center`}>
                <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Merriweather, serif" }}>{value}</div>
                <div className="text-sm text-gray-600 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-hospital-blue text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-hospital-blue border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${item.span}`}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-white/70 text-xs">{item.category}</span>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <span className="text-white/60 text-sm">{lightbox.category}</span>
              <h3 className="text-white font-bold text-lg">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-hospital-blue">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Come See Us in Person
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Experience the warmth and professionalism of Akidiva Hospital firsthand. Book a visit or appointment today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg"
          >
            Book an Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
