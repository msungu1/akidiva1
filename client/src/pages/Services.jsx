import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  ArrowRight, Baby, Activity, Stethoscope, Microscope, Zap, 
  Pill, Eye, Bone, Brain, Heart, CheckCircle 
} from "lucide-react";

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
    icon: Activity,
    title: "General & Specialized Surgery",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    image: "/images/Gemini_Generated_Image_1l91sf1l91sf1l91.png", 
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
    icon: Zap,
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
  { icon: Activity, label: "Dermatology" },
  { icon: Baby, label: "Pediatrics" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative py-24 bg-hospital-blue-dark text-white overflow-hidden text-center">
        <div className="container px-4 mx-auto relative z-10">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            Our Medical Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            Comprehensive healthcare under one roof — from routine check-ups to complex surgical procedures, we have you covered.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 space-y-32">
        <div className="container px-4 mx-auto">
          {SERVICES_DETAILED.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0"
              >
                <div className={`relative ${!isEven ? "lg:order-last" : ""}`}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                    <img src={service.image} alt={service.title} className="w-full h-[450px] object-cover" />
                  </div>
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${service.bg} rounded-3xl -z-0 hidden md:block`} />
                </div>

                <div className={!isEven ? "lg:pr-12" : "lg:pl-12"}>
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-2xl ${service.bg} ${service.color} mb-6`}>
                    <Icon className="w-6 h-6" />
                    <span className="font-bold text-sm uppercase tracking-wider">{service.title}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Merriweather, serif" }}>
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-5 h-5 text-hospital-blue shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <a className="inline-flex items-center gap-2 bg-hospital-blue text-white font-bold px-8 py-4 rounded-xl hover:bg-hospital-blue-dark transition-all shadow-lg">
                      Book Appointment <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Specialties */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container px-4 mx-auto">
          <h3 className="text-hospital-blue font-bold text-sm uppercase mb-2">Also Available</h3>
          <h2 className="text-3xl font-bold mb-12">Additional Specialties</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {ADDITIONAL_SERVICES.map((spec, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                <div className="w-12 h-12 bg-blue-50 text-hospital-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <spec.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-gray-900">{spec.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hospital-amber text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Our triage team will guide you to the right specialist. Call us or book a general consultation.
          </p>
          <Link href="/contact">
            <a className="bg-white text-hospital-amber font-bold px-10 py-5 rounded-2xl hover:shadow-2xl transition-all text-lg">
              Book a Consultation
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}