import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronRight, Phone, Calendar, Star, ChevronLeft, ArrowRight,
  Heart, Shield, Users, Award, Stethoscope, Baby, Microscope,
  Pill, Activity, Zap, CheckCircle
} from "lucide-react";

const HERO_SLIDES = [
  {

        image: "/images/WhatsApp Image 2026-05-02 at 22.03.49 (1).jpeg",

    tagline: "Compassionate Care,",
    tagline2: "Modern Medicine",
    sub: "World-class healthcare serving Migori County and beyond. Your health, our mission.",
  },
  {
    image: "/images/fronthosi.jpg",
    tagline: "Your Health,",
    tagline1: "Our Priority,", // Added missing comma and standardized key name
    tagline2: "Expert Care",
    sub: "Combining compassionate medical professionals with advanced technology for a truly healing experience.",
  },
  {
    // image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/medical-team-iWwJpfcxuSmAydRTfC8Vnu.webp",
    image: "/images/IMG_2229.jpg",           // ← Your first image from assets    tagline: "Compassionate Care,",

    tagline: "Expert Doctors,",
    tagline2: "Dedicated to You",
    sub: "Over 50 specialist physicians and 200+ healthcare professionals ready to serve you.",
  },

  {
    image: "/images/hosi13.jpg",           // ← Your first image from assets    tagline: "Compassionate Care,",
    tagline: "Modern Facilities,",
    tagline2: "Healing Environment",
    sub: "State-of-the-art equipment in a warm, welcoming space designed for your comfort.",
  },
];

const SERVICES = [
  { 
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800", 
    title: "Maternity & Newborn", 
    desc: "Comprehensive care from prenatal to postnatal, ensuring safe deliveries.", 
    color: "text-pink-500", 
    bg: "bg-pink-50" 
  },
  { 
    image: "/images/6q1Fo.jpg", 
    title: "Emergency Care", 
    desc: "24/7 emergency services with rapid response teams always on standby.", 
    color: "text-red-500", 
    bg: "bg-red-50" 
  },
  { 
    image: "/images/hosi13.jpg", 
    title: "Outpatient Services", 
    desc: "Specialist consultations and general outpatient care without admission.", 
    color: "text-blue-500", 
    bg: "bg-blue-50" 
  },
  { 
    image: "/images/qypHS.jpg", 
    title: "Diagnostic Services", 
    desc: "Advanced laboratory, imaging, and pathology services for accurate diagnosis.", 
    color: "text-purple-500", 
    bg: "bg-purple-50" 
  },
  { 
    image: "/images/WhatsApp Image 2026-05-02 at 22.03.42.jpeg", 
    title: "Surgery", 
    desc: "Minimally invasive and open surgical procedures by expert surgeons.", 
    color: "text-orange-500", 
    bg: "bg-orange-50" 
  },
  { 
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800", 
    title: "Malaria Programs", 
    desc: "Specialized malaria prevention, diagnosis, and treatment programs.", 
    color: "text-green-600", 
    bg: "bg-green-50" 
  },
];

const STATS = [
  { value: 20, label: "Years of Service", icon: Award, suffix: "+" },
  { value: 100, label: "Patients Served", icon: Users, suffix: "K+" },
  { value: 50, label: "Specialist Doctors", icon: Stethoscope, suffix: "+" },
  { value: 24, label: "Emergency Care", icon: Heart, suffix: "/7" },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const slide = HERO_SLIDES[heroIndex];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={s.image} alt={s.tagline} className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="container px-4 mx-auto relative z-20 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3 text-hospital-amber" /> Emergency services available 24/7
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]" style={{ fontFamily: "Merriweather, serif" }}>
              {slide.tagline} <br />
              <span className="text-hospital-amber">{slide.tagline2}</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-xl leading-relaxed">{slide.sub}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <a className="bg-hospital-amber text-white font-bold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all shadow-lg">Book Appointment</a>
              </Link>
              <a href="tel:+254722255732/0759696637" className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all">Emergency: 254722255732 / 0759696637</a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => setHeroIndex(i)} className={`h-1.5 rounded-full transition-all ${i === heroIndex ? "w-8 bg-hospital-amber" : "w-2 bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-hospital-blue-dark text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <StatItem key={idx} stat={stat} visible={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
<section className="py-24 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-widest mb-2">What We Offer</h3>
      <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>Comprehensive Medical Services</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.map((service, idx) => (
        <div key={idx} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group overflow-hidden">
          {/* IMAGE HEADER */}
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="p-10">
            <h4 className="text-xl font-bold mb-4">{service.title}</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
            <Link href="/services">
              <a className="text-hospital-blue font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-hospital-amber text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>Ready for Better Health?</h2>
          <p className="text-xl mb-10 opacity-90">Book an appointment with our specialists today.</p>
          <Link href="/contact">
            <a className="bg-white text-hospital-amber font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transition-all text-lg">Book Appointment Now</a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatItem({ stat, visible }) {
  const count = useCountUp(stat.value, 2000, visible);
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-hospital-amber">
        <stat.icon className="w-6 h-6" />
      </div>
      <div className="text-5xl font-bold mb-2" style={{ fontFamily: "Merriweather, serif" }}>
        {count}{stat.suffix}
      </div>
      <div className="text-white/60 font-medium uppercase tracking-widest text-xs">{stat.label}</div>
    </div>
  );
}