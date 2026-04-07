/**
 * Akidiva Hospital - Services Page
 * Design: Warm Humanity — detailed service cards with images and CTAs
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Baby, Activity, Stethoscope, Microscope, Zap, Pill, Eye, Bone, Brain, Heart } from "lucide-react";

const SERVICES_DETAILED = [
  {
    id: "maternity",
    icon: Baby,
    title: "Maternity & Newborn Care",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/maternity-ward-B4fL3fNuFAh3zHDshhPW3Z.webp",
    description: "Our maternity unit is designed to make your pregnancy and delivery experience as safe, comfortable, and joyful as possible. We offer comprehensive care from your first prenatal visit through postnatal recovery.",
    features: ["Prenatal consultations & monitoring", "Safe, supported delivery", "Postnatal care & breastfeeding support", "Neonatal Intensive Care Unit (NICU)", "Family-centered birthing suites", "High-risk pregnancy management"],
  },
  {
    id: "surgery",
    icon: Zap,
    title: "General & Specialized Surgery",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    description: "Our surgical team performs a wide range of procedures using the latest minimally invasive techniques. Our modern operating theaters are equipped with cutting-edge technology for optimal outcomes.",
    features: ["Laparoscopic (keyhole) surgery", "General abdominal surgery", "Orthopedic procedures", "Gynecological surgery", "Emergency surgical care", "Pre & post-operative support"],
  },
  {
    id: "outpatient",
    icon: Stethoscope,
    title: "Outpatient Services",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/doctor-patient-HhGPTE6kKssSvFowkNxqtE.webp",
    description: "Our outpatient department provides specialist consultations, routine check-ups, and follow-up care without the need for hospital admission. Fast, efficient, and thorough.",
    features: ["General practitioner consultations", "Specialist referrals", "Chronic disease management", "Vaccination & immunization", "Health screening programs", "Minor procedures & wound care"],
  },
  {
    id: "malaria",
    icon: Pill,
    title: "Malaria Programs",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    description: "As a hospital serving Migori County — one of Kenya's highest malaria-burden regions — we have developed specialized programs for malaria prevention, rapid diagnosis, and effective treatment.",
    features: ["Rapid malaria diagnostic testing", "Artemisinin-based combination therapy", "Severe malaria inpatient management", "Community prevention education", "Bed net distribution programs", "School health malaria screening"],
  },
  {
    id: "diagnostics",
    icon: Microscope,
    title: "Diagnostic Services",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    description: "Accurate diagnosis is the foundation of effective treatment. Our diagnostic center offers a comprehensive range of laboratory, imaging, and pathology services with rapid turnaround times.",
    features: ["Full blood count & biochemistry", "Digital X-ray & ultrasound", "CT scanning", "Microbiology & culture", "Histopathology", "ECG & cardiac monitoring"],
  },
  {
    id: "emergency",
    icon: Activity,
    title: "Emergency Care",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80",
    description: "Our emergency department operates 24 hours a day, 7 days a week. Our rapid response team is trained to handle all medical emergencies with speed, precision, and compassion.",
    features: ["24/7 emergency response", "Trauma & accident care", "Cardiac emergency management", "Pediatric emergency care", "Resuscitation & stabilization", "Emergency surgical intervention"],
  },
];

const ADDITIONAL_SERVICES = [
  { icon: Eye, label: "Ophthalmology" },
  { icon: Bone, label: "Orthopedics" },
  { icon: Brain, label: "Neurology" },
  { icon: Heart, label: "Cardiology" },
  { icon: Stethoscope, label: "Dermatology" },
  { icon: Baby, label: "Pediatrics" },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Our Medical Services
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Comprehensive healthcare under one roof — from routine check-ups to complex surgical procedures, we have you covered.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-20">
            {SERVICES_DETAILED.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img src={service.image} alt={service.title} className="w-full h-72 object-cover" />
                    </div>
                  </div>
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className={`inline-flex items-center gap-2 ${service.bg} ${service.border} border rounded-full px-4 py-1.5 mb-4`}>
                      <Icon className={`w-4 h-4 ${service.color}`} />
                      <span className={`text-sm font-semibold ${service.color}`}>{service.title}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Merriweather, serif" }}>
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-hospital-green rounded-full shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-hospital-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-hospital-blue-dark transition-all duration-300 shadow-md"
                    >
                      Book Appointment <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-hospital-light">
        <div className="container">
          <div className="text-center mb-10">
            <p className="section-subtitle">Also Available</p>
            <h2 className="section-title">Additional Specialties</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {ADDITIONAL_SERVICES.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm card-hover border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-hospital-blue" />
                </div>
                <p className="text-sm font-semibold text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hospital-blue">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our triage team will guide you to the right specialist. Call us or book a general consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg"
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
