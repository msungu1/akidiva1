/**
 * Akidiva Hospital - Patient Journey Page
 * Design: Warm Humanity — step-by-step visual guide from admission to discharge
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ClipboardList, UserCheck, Stethoscope, FlaskConical, Pill, HeartPulse, Home, Star } from "lucide-react";

const JOURNEY_STEPS = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Registration & Triage",
    desc: "Upon arrival, you are warmly welcomed by our reception team. We register your details, assess your immediate needs, and direct you to the appropriate department — all within minutes.",
    color: "bg-blue-500",
    details: ["Friendly reception & registration", "Initial health assessment", "Insurance verification", "Priority triage for urgent cases"],
  },
  {
    step: 2,
    icon: UserCheck,
    title: "Consultation",
    desc: "Meet with one of our experienced doctors or specialists. We take time to listen, understand your concerns, and conduct a thorough examination in a private, comfortable consultation room.",
    color: "bg-green-500",
    details: ["Private consultation rooms", "Thorough medical history review", "Physical examination", "Clear communication of findings"],
  },
  {
    step: 3,
    icon: FlaskConical,
    title: "Diagnosis & Testing",
    desc: "If needed, our on-site diagnostic center provides rapid laboratory tests, imaging, and other investigations. Most results are available within hours, enabling swift clinical decisions.",
    color: "bg-purple-500",
    details: ["On-site laboratory services", "Digital X-ray & ultrasound", "Rapid test results", "Specialist interpretation"],
  },
  {
    step: 4,
    icon: Stethoscope,
    title: "Treatment Plan",
    desc: "Your doctor presents a clear, personalized treatment plan. We explain every option, answer your questions, and ensure you are fully informed and comfortable with your care pathway.",
    color: "bg-orange-500",
    details: ["Personalized treatment plans", "Shared decision-making", "Clear explanation of options", "Written care instructions"],
  },
  {
    step: 5,
    icon: Pill,
    title: "Treatment & Care",
    desc: "Whether outpatient treatment, medication, or inpatient admission, our team delivers care with precision and compassion. Our nurses provide round-the-clock monitoring and support.",
    color: "bg-red-500",
    details: ["Inpatient or outpatient care", "24/7 nursing support", "Pain management", "Family communication"],
  },
  {
    step: 6,
    icon: HeartPulse,
    title: "Recovery & Monitoring",
    desc: "We closely monitor your recovery progress, adjusting treatment as needed. Our physiotherapy and rehabilitation team supports your return to full health and function.",
    color: "bg-teal-500",
    details: ["Progress monitoring", "Physiotherapy support", "Nutritional guidance", "Psychological support"],
  },
  {
    step: 7,
    icon: Home,
    title: "Discharge & Follow-Up",
    desc: "When you are ready to go home, we provide comprehensive discharge instructions, medication guidance, and schedule follow-up appointments to ensure your continued recovery.",
    color: "bg-indigo-500",
    details: ["Discharge summary provided", "Medication instructions", "Follow-up appointment scheduled", "24/7 helpline access"],
  },
];

const PATIENT_RIGHTS = [
  "Right to respectful, dignified care regardless of background",
  "Right to be fully informed about your diagnosis and treatment options",
  "Right to privacy and confidentiality of your medical information",
  "Right to refuse treatment after being fully informed",
  "Right to access your medical records",
  "Right to a second opinion",
];

export default function PatientJourney() {
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
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Your Experience</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            The Patient Journey
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From the moment you arrive to the day you return home, we guide you through every step with care, clarity, and compassion.
          </p>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Step by Step</p>
            <h2 className="section-title">Your Care Pathway</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-0.5 hidden md:block" />

            <div className="space-y-10">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;
                return (
                  <div key={step.step} className={`flex flex-col md:flex-row gap-6 items-center ${!isLeft ? "md:flex-row-reverse" : ""}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                      <div className={`bg-hospital-light rounded-2xl p-6 shadow-sm border border-gray-100 card-hover ${isLeft ? "md:ml-auto" : ""}`}>
                        <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step.step}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "Merriweather, serif" }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.desc}</p>
                        <ul className={`space-y-1 ${isLeft ? "md:items-end" : ""}`}>
                          {step.details.map((d) => (
                            <li key={d} className={`flex items-center gap-2 text-xs text-gray-600 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                              <div className="w-1.5 h-1.5 bg-hospital-green rounded-full shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Icon bubble */}
                    <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-subtitle">Your Rights</p>
              <h2 className="section-title mb-6">Patient Rights & Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Akidiva Hospital, we believe every patient deserves to be treated with dignity, respect, and transparency. These are your fundamental rights as our patient.
              </p>
              <ul className="space-y-4">
                {PATIENT_RIGHTS.map((right) => (
                  <li key={right} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-hospital-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{right}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 text-xl mb-6" style={{ fontFamily: "Merriweather, serif" }}>
                  What to Bring
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "National ID or Passport", icon: "🪪" },
                    { label: "Insurance card (if applicable)", icon: "💳" },
                    { label: "Previous medical records", icon: "📋" },
                    { label: "List of current medications", icon: "💊" },
                    { label: "Emergency contact details", icon: "📞" },
                    { label: "Referral letter (if referred)", icon: "📄" },
                  ].map(({ label, icon }) => (
                    <div key={label} className="flex items-center gap-3 p-3 bg-hospital-light rounded-xl">
                      <span className="text-2xl">{icon}</span>
                      <span className="text-gray-700 text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-hospital-blue">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
            </div>
            <blockquote className="text-white text-xl md:text-2xl leading-relaxed mb-6 italic" style={{ fontFamily: "Merriweather, serif" }}>
              "The entire process at Akidiva was seamless. From registration to discharge, I felt cared for, informed, and respected at every step. I have never experienced such attentive healthcare."
            </blockquote>
            <div className="text-white/70">
              <strong className="text-white">Mary Otieno</strong> — Patient, Outpatient Department
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Ready to Begin Your Journey to Better Health?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is ready to welcome you. Book an appointment and let us guide you toward recovery and wellness.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-hospital-blue text-white font-semibold px-8 py-4 rounded-xl hover:bg-hospital-blue-dark transition-all duration-300 shadow-lg"
          >
            Book Your Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
