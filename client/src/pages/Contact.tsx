/**
 * Akidiva Hospital - Contact & Appointment Booking Page
 * Design: Warm Humanity — contact form, map, appointment booking
 */
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

  const handleAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    toast.success("Appointment request submitted! We will confirm within 2 hours.");
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    toast.success("Message sent! Our team will respond within 24 hours.");
  };

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
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Contact & Appointments
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We are here to help. Reach out to us or book your appointment online — it only takes a minute.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Phone, title: "Call Us", info: "+254 700 123 456", sub: "+254 711 234 567", color: "text-blue-500", bg: "bg-blue-50", href: "tel:+254700123456" },
              { icon: Mail, title: "Email Us", info: "info@akidivahospital.co.ke", sub: "appointments@akidivahospital.co.ke", color: "text-green-600", bg: "bg-green-50", href: "mailto:info@akidivahospital.co.ke" },
              { icon: MapPin, title: "Visit Us", info: "Akidiva Hospital", sub: "Migori Town, Migori County, Kenya", color: "text-red-500", bg: "bg-red-50", href: "#map" },
              { icon: Clock, title: "Opening Hours", info: "Mon – Sat: 8AM – 8PM", sub: "Emergency: 24/7", color: "text-purple-500", bg: "bg-purple-50", href: "#" },
            ].map(({ icon: Icon, title, info, sub, color, bg, href }) => (
              <a
                key={title}
                href={href}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100 text-center block"
              >
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{title}</h3>
                <p className="text-gray-700 text-sm font-medium">{info}</p>
                <p className="text-gray-500 text-xs mt-1">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Booking Form */}
            <div>
              <p className="section-subtitle">Online Booking</p>
              <h2 className="section-title mb-6">Book an Appointment</h2>

              {appointmentSubmitted ? (
                <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 text-xl mb-2" style={{ fontFamily: "Merriweather, serif" }}>
                    Appointment Requested!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you, <strong>{appointmentForm.name}</strong>. We have received your appointment request for <strong>{appointmentForm.department}</strong> on <strong>{appointmentForm.date}</strong> at <strong>{appointmentForm.time}</strong>.
                  </p>
                  <p className="text-gray-600 text-sm mb-6">
                    Our team will confirm your appointment via phone or email within 2 hours during business hours.
                  </p>
                  <button
                    onClick={() => { setAppointmentSubmitted(false); setAppointmentForm({ name: "", phone: "", email: "", department: "", date: "", time: "", notes: "" }); }}
                    className="bg-hospital-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-hospital-blue-dark transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleAppointment} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        value={appointmentForm.phone}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={appointmentForm.email}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Department / Service *</label>
                    <select
                      required
                      value={appointmentForm.department}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, department: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                    >
                      <option value="">Select a department</option>
                      {DEPARTMENTS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Date *</label>
                      <input
                        required
                        type="date"
                        value={appointmentForm.date}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Preferred Time *</label>
                      <select
                        required
                        value={appointmentForm.time}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, time: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                      >
                        <option value="">Select a time</option>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Additional Notes</label>
                    <textarea
                      rows={3}
                      value={appointmentForm.notes}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, notes: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder="Briefly describe your symptoms or reason for visit..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hospital-blue text-white font-semibold py-4 rounded-xl hover:bg-hospital-blue-dark transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Request Appointment
                  </button>
                  <p className="text-gray-400 text-xs text-center">
                    We will confirm your appointment within 2 hours during business hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Form */}
            <div>
              <p className="section-subtitle">General Enquiries</p>
              <h2 className="section-title mb-6">Send Us a Message</h2>

              {contactSubmitted ? (
                <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-200">
                  <CheckCircle className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-900 text-xl mb-2" style={{ fontFamily: "Merriweather, serif" }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will respond to your enquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => { setContactSubmitted(false); setContactForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="bg-hospital-blue text-white font-semibold px-6 py-3 rounded-xl hover:bg-hospital-blue-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContact} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <input
                      required
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all"
                      placeholder="What is your enquiry about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-hospital-blue focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hospital-green text-white font-semibold py-4 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title">Our Location</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-96">
            <MapView
              onMapReady={(map) => {
                const migoriLocation = { lat: -1.0634, lng: 34.4731 };
                map.setCenter(migoriLocation);
                map.setZoom(15);
                new google.maps.Marker({
                  position: migoriLocation,
                  map,
                  title: "Akidiva Hospital",
                  icon: {
                    url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  },
                });
                new google.maps.InfoWindow({
                  content: `<div style="padding:8px;font-family:sans-serif"><strong>Akidiva Hospital</strong><br/>Migori Town, Migori County<br/>Kenya<br/><a href="tel:+254700123456" style="color:#1A5276">+254 700 123 456</a></div>`,
                }).open(map, new google.maps.Marker({ position: migoriLocation, map }));
              }}
            />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: "Address", value: "Akidiva Hospital, Migori Town, Migori County, Kenya" },
              { label: "Phone", value: "+254 700 123 456 / +254 711 234 567" },
              { label: "Email", value: "info@akidivahospital.co.ke" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-hospital-light rounded-xl p-4 text-center">
                <p className="text-xs font-semibold text-hospital-blue uppercase tracking-widest mb-1">{label}</p>
                <p className="text-gray-700 text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
