import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  ArrowRight, ClipboardList, UserCheck, Stethoscope, 
  FlaskConical, Pill, HeartPulse, Home, Star, CheckCircle 
} from "lucide-react";

const JOURNEY_STEPS = [
  {
    step: 1,
    icon: UserCheck,
    title: "Registration & Triage",
    desc: "Upon arrival, you are warmly welcomed by our reception team. We register your details, assess your immediate needs, and direct you to the appropriate department — all within minutes.",
    color: "bg-blue-500",
    details: ["Friendly reception & registration", "Initial health assessment", "Insurance verification", "Priority triage for urgent cases"],
  },
  {
    step: 2,
    icon: Stethoscope,
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
    icon: ClipboardList,
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
  {
    title: "Client/Patient Rights",
    content: [
      "Right to access health care",
      "Right to receive emergency treatment in any health facility",
      "Right to be informed about all the provision of one’s Medical Scheme / Health Insurance Policy",
      "Right to choose health care provider",
      "Right to the highest attainable quality of health care product services",
      "Right to refuse treatment",
      "Right to confidentiality",
      "Right to informed consent to treatment",
      "Right to information",
      "Right to be treated with dignity and respect",
      "Right to a second medical opinion",
      "Right to complain",
      "Right to insurance coverage without discrimination on the basis of age, pregnancy, disability, illness including mental health disorders"
    ]
  },
  {
    title: "Client Responsibilities",
    content: [
      "Takes care of his/her health by adopting a healthy lifestyle",
      "Adopts a positive attitude towards their health and life",
      "Protects the environment",
      "Respects the rights of others and not to endanger their life and health",
      "Give health care providers relevant, accurate information to facilitate diagnosis and treatment",
      "Takes care of the health records in his/her possession and produce them when required",
      "Follow instruction, adheres to and does not abuse or misuse prescribed medication",
      "Enquires about cost of treatment and makes appropriate arrangements for payments",
      "Be aware of the available health care services in his/her locality",
      "Inform the healthcare provider regarding organ donation or wishes upon ones demise",
      "Accords protection and care to the patient if the client is not competent to make decisions",
      "Seek treatment at the earliest opportunity",
      "Express any concerns through the right channels confidently"
    ]
  }
];


export default function PatientJourney() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue-dark text-white text-center">
        <div className="container px-4 mx-auto relative z-10">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            Your Experience
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            The Patient Journey
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            From the moment you arrive to the day you return home, we guide you through every step with care, clarity, and compassion.
          </p>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-widest mb-2">Step by Step</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>Your Care Pathway</h2>
          </div>

          <div className="relative">
            {/* Desktop Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative flex flex-col md:flex-row items-center md:mb-24 last:mb-0">
                    {/* Content Section */}
                    <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16 md:order-last"}`}>
                      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold text-white mb-4 ${step.color}`}>
                          Step {step.step}
                        </span>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">{step.desc}</p>
                        <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-gray-500 ${isLeft ? "md:justify-items-end" : ""}`}>
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-hospital-blue shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-12 h-12 rounded-full border-4 border-white bg-hospital-blue text-white items-center justify-center shadow-lg z-10">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Mobile Icon (visible on small screens) */}
                    <div className="md:hidden w-12 h-12 rounded-2xl bg-hospital-blue text-white flex items-center justify-center mb-6 shadow-md">
                       <Icon className="w-6 h-6" />
                    </div>

                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights & Checklist */}
      {/* <section className="py-24 bg-white border-t border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-hospital-blue font-bold text-sm uppercase mb-2">Your Rights</h3>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>Patient Rights & Responsibilities</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Akidiva Hospital, we believe every patient deserves to be treated with dignity, respect, and transparency. These are your fundamental rights as our patient.
              </p>
              <div className="space-y-4">
                {PATIENT_RIGHTS.map((right, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                    <div className="w-6 h-6 bg-hospital-blue/10 rounded-full flex items-center justify-center shrink-0">
                      <Star className="w-3 h-3 text-hospital-blue" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-hospital-blue-dark rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-hospital-amber font-bold text-sm uppercase mb-6 tracking-widest">What to Bring</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "National ID or Passport", icon: "🪪" },
                  { label: "Insurance card", icon: "💳" },
                  { label: "Medical records", icon: "📋" },
                  { label: "Current medications", icon: "💊" },
                  { label: "Emergency contacts", icon: "📞" },
                  { label: "Referral letter", icon: "📄" },
                ].map(({ label, icon }, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-sm font-semibold text-white/90">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-xs text-white/50 italic border-t border-white/10 pt-6">
                Please arrive at least 15 minutes before your scheduled appointment to complete the registration process.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-white border-t border-gray-100">
  <div className="container px-4 mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-12">
        <div>
          <h3 className="text-hospital-blue font-bold text-sm uppercase mb-2">Your Rights & Roles</h3>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>Patient Rights & Responsibilities</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At Akidiva Hospital, we believe every patient deserves to be treated with dignity, respect, and transparency. These guidelines ensure a collaborative environment for your healing.
          </p>
        </div>

        {/* This is the fixed nested mapping */}
        {PATIENT_RIGHTS.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-lg font-bold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-1 bg-hospital-amber rounded-full" />
              {section.title}
            </h4>
            <div className="space-y-3">
              {section.content.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group"
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <Star className="w-3 h-3 text-hospital-blue" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* The "What to Bring" Card remains the same, but I added 'lg:sticky' to keep it visible while scrolling the long list */}
      <div className="lg:sticky lg:top-24 bg-hospital-blue-dark rounded-3xl p-10 text-white shadow-2xl">
        <h3 className="text-hospital-amber font-bold text-sm uppercase mb-6 tracking-widest">What to Bring</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { label: "National ID or Passport", icon: "🪪" },
            { label: "Insurance card", icon: "💳" },
            { label: "Medical records", icon: "📋" },
            { label: "Current medications", icon: "💊" },
            { label: "Emergency contacts", icon: "📞" },
            { label: "Referral letter", icon: "📄" },
          ].map(({ label, icon }, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="text-2xl">{icon}</span>
              <span className="text-sm font-semibold text-white/90">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-white/50 italic border-t border-white/10 pt-6">
          Please arrive at least 15 minutes before your scheduled appointment to complete the registration process.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 text-center bg-hospital-blue-dark text-white border-t border-white/5">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>Ready to Begin Your Journey?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg">
            Our team is ready to welcome you. Book an appointment and let us guide you toward recovery and wellness.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 bg-hospital-amber text-white font-bold px-10 py-4 rounded-2xl hover:bg-yellow-500 transition-all shadow-xl">
              Book Your Appointment <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}