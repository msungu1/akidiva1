// /**
//  * Akidiva Hospital - Home Page
//  * Design: Warm Humanity — photography-led, flowing sections, cerulean blue + sage green
//  * Typography: Merriweather (headings) + Inter (body)
//  */

// import { useState, useEffect, useRef } from "react";
// import { Link } from "wouter";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import image1 from "../../src/fronthosi.jpg"
// import {
//   ChevronRight,
//   Phone,
//   Calendar,
//   Star,
//   ChevronLeft,
//   ArrowRight,
//   Heart,
//   Shield,
//   Users,
//   Award,
//   Stethoscope,
//   Baby,
//   Microscope,
//   Pill,
//   Activity,
//   Zap,
// } from "lucide-react";

// const HERO_SLIDES = [
//   {
// image: "assets/fronthosi.jpg",           // ← Your first image from assets    tagline: "Compassionate Care,",
//     tagline2: "Modern Medicine",
//     sub: "World-class healthcare serving Migori County and beyond. Your health, our mission.",
//   },
//   {
//     image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/medical-team-iWwJpfcxuSmAydRTfC8Vnu.webp",
//     tagline: "Expert Doctors,",
//     tagline2: "Dedicated to You",
//     sub: "Over 50 specialist physicians and 200+ healthcare professionals ready to serve you.",
//   },
//   {
//     image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/hospital-lobby-mStJQf2kcVxu5A4aTUo6SM.webp",
//     tagline: "Modern Facilities,",
//     tagline2: "Healing Environment",
//     sub: "State-of-the-art equipment in a warm, welcoming space designed for your comfort.",
//   },
// ];

// const SERVICES = [
//   { icon: Baby, title: "Maternity & Newborn", desc: "Comprehensive care from prenatal to postnatal, ensuring safe deliveries.", color: "text-pink-500", bg: "bg-pink-50" },
//   { icon: Activity, title: "Emergency Care", desc: "24/7 emergency services with rapid response teams always on standby.", color: "text-red-500", bg: "bg-red-50" },
//   { icon: Stethoscope, title: "Outpatient Services", desc: "Specialist consultations and general outpatient care without admission.", color: "text-blue-500", bg: "bg-blue-50" },
//   { icon: Microscope, title: "Diagnostic Services", desc: "Advanced laboratory, imaging, and pathology services for accurate diagnosis.", color: "text-purple-500", bg: "bg-purple-50" },
//   { icon: Zap, title: "Surgery", desc: "Minimally invasive and open surgical procedures by expert surgeons.", color: "text-orange-500", bg: "bg-orange-50" },
//   { icon: Pill, title: "Malaria Programs", desc: "Specialized malaria prevention, diagnosis, and treatment programs.", color: "text-green-600", bg: "bg-green-50" },
// ];

// const STATS = [
//   { value: "15+", label: "Years of Service", icon: Award },
//   { value: "50K+", label: "Patients Served", icon: Users },
//   { value: "50+", label: "Specialist Doctors", icon: Stethoscope },
//   { value: "24/7", label: "Emergency Care", icon: Heart },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Grace Achieng",
//     role: "Mother of Two, Migori",
//     text: "Akidiva Hospital gave me the best maternity experience I could have hoped for. The nurses were incredibly caring, and my delivery was smooth and safe. I will always be grateful.",
//     rating: 5,
//     avatar: "GA",
//   },
//   {
//     name: "James Omondi",
//     role: "Patient, Surgery Department",
//     text: "I was terrified before my surgery, but the team at Akidiva made me feel completely at ease. The professionalism and warmth of every staff member was remarkable.",
//     rating: 5,
//     avatar: "JO",
//   },
//   {
//     name: "Dr. Fatuma Hassan",
//     role: "Referred Patient from Kisumu",
//     text: "As a medical professional myself, I know quality care when I see it. Akidiva Hospital's diagnostic capabilities and specialist team are truly world-class for this region.",
//     rating: 5,
//     avatar: "FH",
//   },
// ];

// const NEWS = [
//   {
//     date: "March 20, 2026",
//     category: "Health Tips",
//     title: "Malaria Prevention: What Every Family in Migori Should Know",
//     excerpt: "With the rainy season approaching, our malaria specialists share essential prevention strategies for families in Migori County.",
//     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
//   },
//   {
//     date: "March 10, 2026",
//     category: "Hospital News",
//     title: "Akidiva Launches New Neonatal Intensive Care Unit",
//     excerpt: "We are proud to announce the opening of our state-of-the-art NICU, bringing advanced newborn care closer to home.",
//     image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
//   },
//   {
//     date: "February 28, 2026",
//     category: "Community",
//     title: "Free Health Screening Camp Reaches 500 Residents",
//     excerpt: "Our community outreach team conducted free health screenings for over 500 residents in rural Migori villages.",
//     image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80",
//   },
// ];

// function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     const step = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * target));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration, start]);
//   return count;
// }

// export default function Home() {
//   const [heroIndex, setHeroIndex] = useState(0);
//   const [testimonialIndex, setTestimonialIndex] = useState(0);
//   const [statsVisible, setStatsVisible] = useState(false);
//   const statsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setHeroIndex((i) => (i + 1) % HERO_SLIDES.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
//       { threshold: 0.3 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const slide = HERO_SLIDES[heroIndex];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       {/* ── HERO ── */}
//       <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
//         {HERO_SLIDES.map((s, i) => (
//           <div
//             key={i}
//             className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
//           >
//             <img src={s.image} alt="" className="w-full h-full object-cover" />
//             <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.08_240/0.85)] via-[oklch(0.18_0.08_240/0.5)] to-transparent" />
//           </div>
//         ))}

//         <div className="relative z-10 container h-full flex items-center">
//           <div className="max-w-2xl">
//             <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-white text-sm mb-6">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Emergency services available 24/7
//             </div>
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
//               style={{ fontFamily: "Merriweather, serif" }}
//             >
//               {slide.tagline}
//               <br />
//               <span className="text-yellow-300">{slide.tagline2}</span>
//             </h1>
//             <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
//               {slide.sub}
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <Calendar className="w-4 h-4" />
//                 Book Appointment
//               </Link>
//               <a
//                 href="tel:+254700123456"
//                 className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/25 transition-all duration-300"
//               >
//                 <Phone className="w-4 h-4" />
//                 Emergency: +254 700 123 456
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Slide controls */}
//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
//           {HERO_SLIDES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setHeroIndex(i)}
//               className={`h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "w-8 bg-white" : "w-2 bg-white/50"}`}
//             />
//           ))}
//         </div>
//         <button
//           onClick={() => setHeroIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
//           className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </button>
//         <button
//           onClick={() => setHeroIndex((i) => (i + 1) % HERO_SLIDES.length)}
//           className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/35 transition-colors"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>
//       </section>

//       {/* Wave divider */}
//       <div className="relative z-10 -mt-8">
//         <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{height:"60px"}}>
//           <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white" />
//         </svg>
//       </div>

//       {/* ── QUICK LINKS ── */}
//       <section className="bg-white shadow-md relative z-10">
//         <div className="container">
//           <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
//             {[
//               { icon: Stethoscope, label: "Find a Doctor", href: "/about#team", color: "text-blue-600" },
//               { icon: Calendar, label: "Book Appointment", href: "/contact", color: "text-green-600" },
//               { icon: Phone, label: "Emergency", href: "tel:+254700123456", color: "text-red-500" },
//               { icon: Activity, label: "Our Services", href: "/services", color: "text-purple-600" },
//             ].map(({ icon: Icon, label, href, color }) => (
//               <Link
//                 key={label}
//                 href={href}
//                 className="flex flex-col items-center gap-2 py-5 px-4 hover:bg-blue-50 transition-colors group"
//               >
//                 <div className={`w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm`}>
//                   <Icon className={`w-5 h-5 ${color}`} />
//                 </div>
//                 <span className="text-xs md:text-sm font-semibold text-gray-700 group-hover:text-hospital-blue transition-colors text-center">
//                   {label}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── STATS ── */}
//       <section ref={statsRef} className="bg-hospital-blue py-14">
//         <div className="container">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {STATS.map(({ value, label, icon: Icon }) => (
//               <div key={label} className="flex flex-col items-center gap-3">
//                 <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
//                   <Icon className="w-7 h-7 text-white" />
//                 </div>
//                 <div
//                   className="text-3xl md:text-4xl font-bold text-white"
//                   style={{ fontFamily: "Merriweather, serif" }}
//                 >
//                   {value}
//                 </div>
//                 <div className="text-white/70 text-sm font-medium">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── SERVICES ── */}
//       <section className="py-20 bg-hospital-light">
//         <div className="container">
//           <div className="text-center mb-14">
//             <p className="section-subtitle">What We Offer</p>
//             <h2 className="section-title mb-4">Comprehensive Medical Services</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
//               From routine check-ups to complex surgical procedures, Akidiva Hospital provides a full spectrum of healthcare services under one roof.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SERVICES.map(({ icon: Icon, title, desc, color, bg }) => (
//               <div key={title} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
//                 <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
//                   <Icon className={`w-6 h-6 ${color}`} />
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Merriweather, serif" }}>
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
//                 <Link
//                   href="/services"
//                   className="inline-flex items-center gap-1 text-hospital-blue text-sm font-semibold hover:gap-2 transition-all"
//                 >
//                   Learn More <ArrowRight className="w-3.5 h-3.5" />
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               href="/services"
//               className="inline-flex items-center gap-2 bg-hospital-blue text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-hospital-blue-dark transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               View All Services <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── ABOUT SNIPPET ── */}
//       <section className="py-20 bg-white overflow-hidden">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div className="relative">
//               <div className="rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/doctor-patient-HhGPTE6kKssSvFowkNxqtE.webp"
//                   alt="Doctor with patient"
//                   className="w-full h-80 object-cover"
//                 />
//               </div>
//               {/* Floating card */}
//               <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl shadow-xl p-5 w-52 border border-gray-100">
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
//                     <Shield className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900 text-sm">Accredited</div>
//                     <div className="text-xs text-gray-500">ISO Certified</div>
//                   </div>
//                 </div>
//                 <p className="text-xs text-gray-600">Internationally accredited for quality healthcare standards.</p>
//               </div>
//             </div>
//             <div className="lg:pl-6">
//               <p className="section-subtitle">About Akidiva Hospital</p>
//               <h2 className="section-title mb-5">
//                 Serving Our Community<br />
//                 <span className="text-hospital-green">Since 2010</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-5">
//                 Akidiva Hospital was founded with a singular vision: to bring world-class healthcare to the heart of Migori County. For over 15 years, we have been the trusted healthcare partner for thousands of families across the region.
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-8">
//                 Our team of over 50 specialist doctors, 200 nurses, and dedicated support staff work tirelessly to deliver compassionate, evidence-based care to every patient who walks through our doors.
//               </p>
//               <div className="grid grid-cols-2 gap-4 mb-8">
//                 {[
//                   { icon: Heart, label: "Patient-Centered Care", color: "text-red-500" },
//                   { icon: Shield, label: "Safety First", color: "text-blue-500" },
//                   { icon: Award, label: "Excellence", color: "text-yellow-500" },
//                   { icon: Users, label: "Community Focus", color: "text-green-500" },
//                 ].map(({ icon: Icon, label, color }) => (
//                   <div key={label} className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
//                       <Icon className={`w-4 h-4 ${color}`} />
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">{label}</span>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 href="/about"
//                 className="inline-flex items-center gap-2 bg-hospital-blue text-white font-semibold px-7 py-3 rounded-xl hover:bg-hospital-blue-dark transition-all duration-300 shadow-md"
//               >
//                 Learn Our Story <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── DOCTOR FEATURE ── */}
//       <section className="py-20 bg-hospital-light">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
//             <div>
//               <p className="section-subtitle">Our Medical Team</p>
//               <h2 className="section-title mb-5">
//                 Expert Doctors,<br />
//                 <span className="text-hospital-blue">Compassionate Care</span>
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Our multidisciplinary team of specialists brings decades of combined experience across every major medical field. Each doctor is not just an expert in their specialty — they are committed to treating the whole person.
//               </p>
//               <div className="space-y-4 mb-8">
//                 {[
//                   "Specialists in 20+ medical disciplines",
//                   "Continuous professional development programs",
//                   "Patient-first approach in every consultation",
//                   "Multilingual staff serving all communities",
//                 ].map((point) => (
//                   <div key={point} className="flex items-center gap-3">
//                     <div className="w-5 h-5 bg-hospital-green rounded-full flex items-center justify-center shrink-0">
//                       <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
//                         <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </div>
//                     <span className="text-gray-700 text-sm">{point}</span>
//                   </div>
//                 ))}
//               </div>
//               <Link
//                 href="/about#team"
//                 className="inline-flex items-center gap-2 bg-hospital-green text-white font-semibold px-7 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md"
//               >
//                 Meet Our Team <ArrowRight className="w-4 h-4" />
//               </Link>
//             </div>
//             <div className="rounded-2xl overflow-hidden shadow-2xl">
//               <img
//                 src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/medical-team-iWwJpfcxuSmAydRTfC8Vnu.webp"
//                 alt="Medical team"
//                 className="w-full h-96 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── TESTIMONIALS ── */}
//       <section className="py-20 bg-white">
//         <div className="container">
//           <div className="text-center mb-14">
//             <p className="section-subtitle">Patient Stories</p>
//             <h2 className="section-title">What Our Patients Say</h2>
//           </div>
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div className="bg-hospital-light rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
//                 <div className="flex gap-1 mb-6">
//                   {Array.from({ length: TESTIMONIALS[testimonialIndex].rating }).map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                   ))}
//                 </div>
//                 <blockquote
//                   className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic"
//                   style={{ fontFamily: "Merriweather, serif" }}
//                 >
//                   "{TESTIMONIALS[testimonialIndex].text}"
//                 </blockquote>
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-hospital-blue rounded-full flex items-center justify-center text-white font-bold">
//                     {TESTIMONIALS[testimonialIndex].avatar}
//                   </div>
//                   <div>
//                     <div className="font-bold text-gray-900">{TESTIMONIALS[testimonialIndex].name}</div>
//                     <div className="text-sm text-gray-500">{TESTIMONIALS[testimonialIndex].role}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-center gap-3 mt-6">
//                 <button
//                   onClick={() => setTestimonialIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
//                   className="w-10 h-10 bg-hospital-blue rounded-full flex items-center justify-center text-white hover:bg-hospital-blue-dark transition-colors"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//                 <div className="flex gap-2 items-center">
//                   {TESTIMONIALS.map((_, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setTestimonialIndex(i)}
//                       className={`h-2 rounded-full transition-all duration-300 ${i === testimonialIndex ? "w-6 bg-hospital-blue" : "w-2 bg-gray-300"}`}
//                     />
//                   ))}
//                 </div>
//                 <button
//                   onClick={() => setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length)}
//                   className="w-10 h-10 bg-hospital-blue rounded-full flex items-center justify-center text-white hover:bg-hospital-blue-dark transition-colors"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── MATERNITY FEATURE ── */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493943798/UvtydikxNZ7R3P6SnXjuKR/maternity-ward-B4fL3fNuFAh3zHDshhPW3Z.webp"
//             alt="Maternity ward"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.28_0.13_240/0.9)] to-[oklch(0.28_0.13_240/0.6)]" />
//         </div>
//         <div className="relative z-10 container">
//           <div className="max-w-xl text-white">
//             <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Maternity Services</p>
//             <h2
//               className="text-3xl md:text-4xl font-bold mb-5 leading-tight"
//               style={{ fontFamily: "Merriweather, serif" }}
//             >
//               Safe Deliveries,<br />Joyful Beginnings
//             </h2>
//             <p className="text-white/85 leading-relaxed mb-8">
//               Our maternity ward combines advanced medical technology with a warm, family-centered approach. From your first prenatal visit to the moment you take your baby home, we are with you every step of the way.
//             </p>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               {["Prenatal Care", "Safe Delivery", "Postnatal Support", "Neonatal ICU"].map((item) => (
//                 <div key={item} className="flex items-center gap-2 text-white/90 text-sm">
//                   <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full" />
//                   {item}
//                 </div>
//               ))}
//             </div>
//             <Link
//               href="/services#maternity"
//               className="inline-flex items-center gap-2 bg-white text-hospital-blue font-semibold px-7 py-3 rounded-xl hover:bg-yellow-50 transition-all duration-300 shadow-lg"
//             >
//               Explore Maternity Services <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ── NEWS ── */}
//       <section className="py-20 bg-hospital-light">
//         <div className="container">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
//             <div>
//               <p className="section-subtitle">Latest Updates</p>
//               <h2 className="section-title">News & Health Tips</h2>
//             </div>
//             <Link
//               href="/education"
//               className="inline-flex items-center gap-2 text-hospital-blue font-semibold hover:gap-3 transition-all text-sm"
//             >
//               View All Articles <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {NEWS.map((item) => (
//               <article key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-gray-100">
//                 <div className="h-48 overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-3">
//                     <span className="bg-blue-50 text-hospital-blue text-xs font-semibold px-3 py-1 rounded-full">
//                       {item.category}
//                     </span>
//                     <span className="text-gray-400 text-xs">{item.date}</span>
//                   </div>
//                   <h3
//                     className="font-bold text-gray-900 mb-2 leading-snug"
//                     style={{ fontFamily: "Merriweather, serif" }}
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.excerpt}</p>
//                   <Link
//                     href="/education"
//                     className="inline-flex items-center gap-1 text-hospital-blue text-sm font-semibold hover:gap-2 transition-all"
//                   >
//                     Read More <ArrowRight className="w-3.5 h-3.5" />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA BANNER ── */}
//       <section className="py-16 bg-hospital-blue">
//         <div className="container text-center">
//           <h2
//             className="text-3xl md:text-4xl font-bold text-white mb-4"
//             style={{ fontFamily: "Merriweather, serif" }}
//           >
//             Ready to Take the First Step<br />Toward Better Health?
//           </h2>
//           <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
//             Book an appointment with our specialists today. Same-day appointments available for urgent cases.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg text-lg"
//             >
//               <Calendar className="w-5 h-5" />
//               Book Appointment Now
//             </Link>
//             <a
//               href="tel:+254700123456"
//               className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/25 transition-all duration-300 text-lg"
//             >
//               <Phone className="w-5 h-5" />
//               Call Us Now
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
