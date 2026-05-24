
import emailjs from "@emailjs/browser";

import { useState } from "react";
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
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


const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: -1.0634,
  lng: 34.4731,
};


const TIMES = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
];

export default function Contact() {
  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, []);
  const [appointmentForm, setAppointmentForm] = useState({
    name: "", phone: "", email: "", department: "", date: "", time: "", notes: "",
  });
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

 const handleAppointment = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: appointmentForm.name,
        phone: appointmentForm.phone,
        email: appointmentForm.email,
        department: appointmentForm.department,
        date: appointmentForm.date,
        time: appointmentForm.time,
        notes: appointmentForm.notes,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setAppointmentSubmitted(true);
    toast.success("Appointment request submitted successfully.");

    setAppointmentForm({
      name: "",
      phone: "",
      email: "",
      department: "",
      date: "",
      time: "",
      notes: "",
    });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send appointment.");
  }
};

  const handleContact = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setContactSubmitted(true);
    toast.success("Message sent successfully.");

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    toast.error("Failed to send message.");
  }
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
              { icon: Phone, title: "Call Us", info: "+254 722255732/0759696637", color: "text-blue-500", bg: "bg-blue-50", href: "tel:+254722255732" },
              { icon: Mail, title: "Email Us", info: "akidivahospital@gmail.com", sub: "akidivahospital@gmail.com", color: "text-green-600", bg: "bg-green-50", href: "mailto:info@akidivahospital.co.ke" },
              { icon: MapPin, title: "Visit Us", info: "Akidiva Hospital", sub: "Migori Town, Kenya", color: "text-red-500", bg: "bg-red-50", href: "#map" },
              { icon: Clock, title: "Opening Hours", info: "Mon – Mon: 24/7", sub: "Emergency: 24/7", color: "text-purple-500", bg: "bg-purple-50", href: "#" },
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
        <span className="text-hospital-blue font-bold text-xs uppercase tracking-widest mb-2 block">
          Online Booking
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Book an Appointment
        </h2>

        {appointmentSubmitted ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Appointment Requested
            </h3>
            <p className="text-gray-600 mb-8">
              Thank you, {appointmentForm.name}. We have received your request
              for {appointmentForm.department} on {appointmentForm.date}.
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

            {/* Name + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Full Name *"
                value={appointmentForm.name}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, name: e.target.value })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-hospital-blue outline-none"
              />

              <input
                required
                type="tel"
                placeholder="Phone Number *"
                value={appointmentForm.phone}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, phone: e.target.value })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-hospital-blue outline-none"
              />
            </div>

            {/* Email */}
            <input
              required
              type="email"
              placeholder="Email Address *"
              value={appointmentForm.email}
              onChange={(e) =>
                setAppointmentForm({ ...appointmentForm, email: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:border-hospital-blue outline-none"
            />

            {/* Department */}
            <select
              required
              value={appointmentForm.department}
              onChange={(e) =>
                setAppointmentForm({ ...appointmentForm, department: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
            >
              <option value="">Select Department *</option>
              {DEPARTMENTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {/* Date + Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="date"
                value={appointmentForm.date}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, date: e.target.value })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3"
              />

              <select
                required
                value={appointmentForm.time}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, time: e.target.value })
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white"
              >
                <option value="">Preferred Time *</option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <textarea
              placeholder="Notes for the doctor..."
              value={appointmentForm.notes}
              onChange={(e) =>
                setAppointmentForm({ ...appointmentForm, notes: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 h-24 resize-none"
            />

            <button className="w-full bg-hospital-blue text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-hospital-blue-dark transition-all">
              <Calendar className="w-5 h-5" /> Request Appointment
            </button>
          </form>
        )}
      </div>

      {/* General Enquiries */}
      <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Send Us a Message
        </h2>

        {contactSubmitted ? (
          <div className="text-center py-10">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Message Sent</h3>
            <p className="text-gray-600">
              Thank you {contactForm.name}, we will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContact} className="space-y-4">

            <input
              required
              placeholder="Your Name *"
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({ ...contactForm, name: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />

            <input
              required
              type="email"
              placeholder="Email Address *"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm({ ...contactForm, email: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />

            <input
              required
              placeholder="Subject *"
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm({ ...contactForm, subject: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />

            <textarea
              required
              placeholder="Your Message *"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({ ...contactForm, message: e.target.value })
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 h-44 resize-none"
            />

            <button className="w-full bg-hospital-green text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-all">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
        )}
      </div>

    </div>
  </div>
</section>

      

<section id="map" className="py-30 bg-white">
  <div className="container px-0 mx-auto">
    
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900">
        Our Location
      </h2>
      <p className="text-gray-500 mt-2">
        Visit us in Migori Town
      </p>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0890732192165!2d34.4542998!3d-1.0954814999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d35396c4dfb82f%3A0x9a397e4e2f829cef!2sSt%20Akidiva%20Memorial%20Hospital!5e0!3m2!1sen!2ske!4v1779305031394!5m2!1sen!2ske"
        width="100%"
        height="650"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}