/**
 * Akidiva Hospital - About Us Page
 * Design: Warm Humanity — history, mission, vision, team profiles
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, Shield, Users, Award, ArrowRight, Star } from "lucide-react";

const TEAM = [
  { name: "Dr. Samuel Odhiambo", role: "Medical Director & Chief Surgeon", specialty: "General Surgery", initials: "SO", color: "bg-blue-600" },
  { name: "Dr. Amina Wanjiku", role: "Head of Maternity", specialty: "Obstetrics & Gynecology", initials: "AW", color: "bg-pink-500" },
  { name: "Dr. Peter Otieno", role: "Chief Physician", specialty: "Internal Medicine", initials: "PO", color: "bg-green-600" },
  { name: "Dr. Faith Mwangi", role: "Head of Pediatrics", specialty: "Pediatrics", initials: "FM", color: "bg-purple-500" },
  { name: "Dr. Hassan Abdi", role: "Lead Diagnostician", specialty: "Radiology & Imaging", initials: "HA", color: "bg-orange-500" },
  { name: "Nurse Esther Auma", role: "Chief Nursing Officer", specialty: "Critical Care Nursing", initials: "EA", color: "bg-teal-500" },
];

const VALUES = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with empathy, dignity, and genuine care.", color: "text-red-500", bg: "bg-red-50" },
  { icon: Shield, title: "Safety", desc: "Patient safety is our highest priority in every clinical decision.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in medical practice and service.", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Users, title: "Community", desc: "We are deeply committed to the health of Migori County and beyond.", color: "text-green-600", bg: "bg-green-50" },
];

const MILESTONES = [
  { year: "2010", event: "Akidiva Hospital founded with 20 beds and a vision to serve Migori County." },
  { year: "2013", event: "Expanded to 80 beds; launched maternity ward and pediatric unit." },
  { year: "2016", event: "Opened state-of-the-art diagnostic center with digital imaging." },
  { year: "2019", event: "Received ISO 9001 accreditation for quality management systems." },
  { year: "2022", event: "Launched community malaria prevention program reaching 10,000+ residents." },
  { year: "2025", event: "Opened new Neonatal ICU and expanded surgical theater capacity." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 bg-hospital-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            About Akidiva Hospital
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Fifteen years of compassionate service, modern medicine, and community dedication in the heart of Migori County.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subtitle">Our Foundation</p>
              <h2 className="section-title mb-6">Mission, Vision & Values</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-hospital-blue">
                  <h3 className="font-bold text-hospital-blue mb-2" style={{ fontFamily: "Merriweather, serif" }}>Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide accessible, compassionate, and world-class healthcare services to every individual in Migori County and the surrounding region, regardless of their background or circumstances.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-hospital-green">
                  <h3 className="font-bold text-hospital-green mb-2" style={{ fontFamily: "Merriweather, serif" }}>Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading healthcare institution in Western Kenya, recognized for clinical excellence, innovative medical practices, and an unwavering commitment to community health.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hospital-lobby-mStJQf2kcVxu5A4aTUo6SM.webp"
                alt="Hospital lobby"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">What Guides Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover border border-gray-100">
                <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "Merriweather, serif" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Hospital History</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-8">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="flex gap-6 items-start">
                    <div className="relative z-10 w-16 h-16 bg-hospital-blue rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <span className="text-white text-xs font-bold">{m.year}</span>
                    </div>
                    <div className="bg-hospital-light rounded-xl p-5 flex-1 shadow-sm border border-gray-100 mt-2">
                      <p className="text-gray-700 leading-relaxed text-sm">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-hospital-light">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">The People Behind Our Care</p>
            <h2 className="section-title">Meet Our Medical Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Our dedicated team of specialists, nurses, and support staff are the heart of Akidiva Hospital. Each member brings expertise, passion, and a genuine commitment to patient wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100 text-center">
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-md`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Merriweather, serif" }}>{member.name}</h3>
                <p className="text-hospital-blue text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 text-xs mb-4">{member.specialty}</p>
                <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hospital-blue">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Experience the Akidiva Difference
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of families who trust Akidiva Hospital for their healthcare needs.
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
