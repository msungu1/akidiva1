import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapView } from "@/components/Map";
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const DEPARTMENTS = [
  "General Consultation",
  "Maternity & Gynecology",
  "Pediatrics",
  "Surgery",
  "Diagnostics & Lab",
  "Malaria Clinic",
  "Emergency",
  "Ophthalmology",
  "Orthopedics",
  "Cardiology",
  "Other",
];

const TIMES = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
];

export default function Contact() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "", phone: "", email: "", department: "", date: "", time: "", notes: "",
  });
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleAppointment = (e) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    toast.success("Appointment request submitted. We will confirm within 2 hours.");
  };

  const handleContact = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    toast.success("Message sent. Our team will respond within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue-dark text-white overflow-hidden">
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            Contact & Appointments
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            We are here to help. Reach out to us or book your appointment online — it only takes a minute.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: "Call Us", info: "+254 700 123 456", sub: "+254 711 234 567", color: "text-blue-500", bg: "bg-blue-50", href: "tel:+254700123456" },
              { icon: Mail, title: "Email Us", info: "info@akidivahospital.co.ke", sub: "appointments@akidivahospital.co.ke", color: "text-green-600", bg: "bg-green-50", href: "mailto:info@akidivahospital.co.ke" },
              { icon: MapPin, title: "Visit Us", info: "Akidiva Hospital", sub: "Migori Town, Kenya", color: "text-red-500", bg: "bg-red-50", href: "#map" },
              { icon: Clock, title: "Opening Hours", info: "Mon – Sat: 8AM – 8PM", sub: "Emergency: 24/7", color: "text-purple-500", bg: "bg-purple-50", href: "#" },
            ].map(({ icon: Icon, title, info, sub, color, bg, href }) => (
              <a
                key={title}
                href={href}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 text-center block group"
              >
                <div className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
                <p className="text-sm font-semibold text-gray-800">{info}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Booking Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <span className="text-hospital-blue font-bold text-xs uppercase tracking-widest mb-2 block">Online Booking</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Book an Appointment</h2>

              {appointmentSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Appointment Requested</h3>
                  <p className="text-gray-600 mb-8">
                    Thank you, {appointmentForm.name}. We have received your request for {appointmentForm.department} on {appointmentForm.date}.
                  </p>
                  <button
                    onClick={() => setAppointmentSubmitted(false)}
                    className="bg-hospital-blue text-white font-semibold px-8 py-3 rounded-xl hover:bg-hospital-blue-dark transition-colors"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAppointment} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name *"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-hospital-blue outline-none"
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-hospital-blue outline-none"
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                    />
                  </div>
                  <select
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, department: e.target.value })}
                  >
                    <option value="">Select Department *</option>
                    {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      type="date"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3"
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                    />
                    <select
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                    >
                      <option value="">Preferred Time *</option>
                      {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <textarea
                    placeholder="Notes for the doctor..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 h-24 resize-none"
                    onChange={(e) => setAppointmentForm({ ...appointmentForm, notes: e.target.value })}
                  />
                  <button className="w-full bg-hospital-blue text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-hospital-blue-dark transition-all">
                    <Calendar className="w-5 h-5" /> Request Appointment
                  </button>
                </form>
              )}
            </div>

            {/* General Enquiries */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleContact} className="space-y-4">
                <input
                  required
                  placeholder="Your Name *"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address *"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3"
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
                <textarea
                  required
                  placeholder="Your Message *"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 h-44 resize-none"
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
                <button className="w-full bg-hospital-green text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all">
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
            <p className="text-gray-500 mt-2">Visit us in Migori Town</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-[450px] border border-gray-100">
            <MapView
              initialCenter={{ lat: -1.0634, lng: 34.4731 }}
              onMapReady={(map) => {
                const pos = { lat: -1.0634, lng: 34.4731 };
                new window.google.maps.Marker({ position: pos, map, title: "Akidiva Hospital" });
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}