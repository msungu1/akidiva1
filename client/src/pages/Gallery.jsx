import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { X, ArrowRight, Award, Users, Heart, Stethoscope } from "lucide-react";

const CATEGORIES = ["All", "Facilities", "Medical Team", "Maternity", "Community", "Events"];

const GALLERY_ITEMS = [
  { id: 1, category: "Facilities", title: "Hospital Entrance", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hero-hospital-7fKfa7Nu48HuPfY5cvWJp5.webp", span: "md:col-span-2 md:row-span-2 h-full" },
  { id: 2, category: "Medical Team", title: "Our Dedicated Team", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/medical-team-iWwJpfcxuSmAydRTfC8Vnu.webp", span: "" },
  { id: 3, category: "Maternity", title: "Maternity Ward", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/maternity-ward-B4fL3fNuFAh3zHDshhPW3Z.webp", span: "" },
  { id: 4, category: "Facilities", title: "Reception & Lobby", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hospital-lobby-mStJQf2kcVxu5A4aTUo6SM.webp", span: "" },
  { id: 5, category: "Medical Team", title: "Doctor Consultation", src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/doctor-patient-HhGPTE6kKssSvFowkNxqtE.webp", span: "" },
  { id: 6, category: "Community", title: "Community Outreach", src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80", span: "" },
  { id: 7, category: "Events", title: "Health Awareness Camp", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", span: "" },
  { id: 8, category: "Facilities", title: "Diagnostic Center", src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80", span: "" },
  { id: 12, category: "Maternity", title: "Newborn Care", src: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80", span: "md:col-span-2 h-64" },
];

const QUICK_FACTS = [
  { icon: Award, value: "15+", label: "Years of Excellence", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Users, value: "50K+", label: "Patients Served", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Stethoscope, value: "50+", label: "Specialist Doctors", color: "text-green-600", bg: "bg-green-50" },
  { icon: Heart, value: "99%", label: "Patient Satisfaction", color: "text-red-500", bg: "bg-red-50" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue-dark text-white overflow-hidden">
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            Our World
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            A glimpse into life at Akidiva Hospital — our facilities, our team, and the community we serve.
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-white relative z-20 -mt-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_FACTS.map(({ icon: Icon, value, label, color, bg }, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center">
                <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-hospital-blue text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-hospital-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${item.span}`}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-hospital-amber text-xs font-bold uppercase mb-1">{item.category}</span>
                  <h4 className="text-white font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white hover:text-hospital-amber transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>
            
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl shadow-white/5"
            />
            
            <div className="mt-6 text-center">
              <span className="text-hospital-amber font-bold text-sm uppercase tracking-widest">{lightbox.category}</span>
              <h3 className="text-white text-2xl font-bold mt-1">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-4">Come See Us in Person</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the warmth and professionalism of Akidiva Hospital firsthand. We are located in Migori Town, ready to serve you.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-10 py-4 rounded-xl hover:shadow-lg transition-all">
              Book a Visit <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}