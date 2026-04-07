/**
 * Akidiva Hospital - Health Education Page
 * Design: Warm Humanity — community health programs, health tips, downloadable resources
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Download, BookOpen, Heart, Shield, Droplets, Baby, Activity, Users } from "lucide-react";

const PROGRAMS = [
  {
    icon: Droplets,
    title: "Malaria Awareness in Migori County",
    desc: "Migori County has one of the highest malaria burdens in Kenya. Our community health workers conduct regular awareness campaigns, distribute bed nets, and provide free rapid testing at community health posts.",
    color: "text-green-600",
    bg: "bg-green-50",
    stats: "10,000+ residents reached",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health Program",
    desc: "We work with local communities to improve maternal and infant health outcomes through prenatal education, nutrition counseling, and postnatal support groups for new mothers.",
    color: "text-pink-500",
    bg: "bg-pink-50",
    stats: "500+ mothers supported annually",
  },
  {
    icon: Heart,
    title: "Non-Communicable Disease Prevention",
    desc: "Our NCD program educates communities about diabetes, hypertension, and heart disease prevention through lifestyle modification workshops and free screening camps.",
    color: "text-red-500",
    bg: "bg-red-50",
    stats: "Free screenings every quarter",
  },
  {
    icon: Shield,
    title: "Immunization & Vaccination Campaigns",
    desc: "We partner with the Ministry of Health to ensure high vaccination coverage in Migori County, conducting outreach clinics in schools and community centers.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    stats: "95% coverage in target areas",
  },
  {
    icon: Users,
    title: "School Health Program",
    desc: "Our medical teams visit schools across Migori County to conduct health screenings, provide deworming treatment, and educate students about hygiene and healthy living.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    stats: "30+ schools visited annually",
  },
  {
    icon: Activity,
    title: "Mental Health Awareness",
    desc: "Breaking the stigma around mental health in our community through awareness campaigns, support groups, and accessible counseling services at the hospital.",
    color: "text-orange-500",
    bg: "bg-orange-50",
    stats: "Monthly support groups",
  },
];

const HEALTH_TIPS = [
  {
    category: "Malaria Prevention",
    tips: [
      "Sleep under a treated mosquito net every night",
      "Eliminate standing water around your home",
      "Use insect repellent when outdoors at dusk and dawn",
      "Seek testing immediately if you develop fever",
    ],
    color: "border-green-400",
    icon: Droplets,
    iconColor: "text-green-600",
  },
  {
    category: "Maternal Health",
    tips: [
      "Attend all antenatal care appointments",
      "Take iron and folic acid supplements as prescribed",
      "Eat a balanced diet rich in fruits and vegetables",
      "Deliver at a health facility with skilled attendants",
    ],
    color: "border-pink-400",
    icon: Baby,
    iconColor: "text-pink-500",
  },
  {
    category: "General Wellness",
    tips: [
      "Drink at least 8 glasses of clean water daily",
      "Exercise for at least 30 minutes, 5 days a week",
      "Wash hands frequently with soap and water",
      "Get regular health check-ups even when feeling well",
    ],
    color: "border-blue-400",
    icon: Heart,
    iconColor: "text-blue-500",
  },
];

const RESOURCES = [
  { title: "Malaria Prevention Guide", type: "PDF", size: "1.2 MB", icon: "🦟" },
  { title: "Antenatal Care Schedule", type: "PDF", size: "0.8 MB", icon: "🤱" },
  { title: "Healthy Eating for Families", type: "PDF", size: "2.1 MB", icon: "🥗" },
  { title: "Child Immunization Schedule", type: "PDF", size: "0.5 MB", icon: "💉" },
  { title: "Diabetes Management Tips", type: "PDF", size: "1.5 MB", icon: "🩺" },
  { title: "Mental Health Self-Care Guide", type: "PDF", size: "1.8 MB", icon: "🧠" },
];

const ARTICLES = [
  {
    date: "March 20, 2026",
    category: "Malaria",
    title: "Understanding Malaria: Symptoms, Prevention, and Treatment",
    excerpt: "Everything you need to know about malaria — from recognizing the first symptoms to understanding the full treatment course.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    readTime: "5 min read",
  },
  {
    date: "March 10, 2026",
    category: "Nutrition",
    title: "Eating Well on a Budget: Nutritious Meals for Kenyan Families",
    excerpt: "Our nutritionist shares practical, affordable meal plans using locally available foods to keep your family healthy.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    readTime: "4 min read",
  },
  {
    date: "February 28, 2026",
    category: "Mental Health",
    title: "Breaking the Silence: Mental Health in Our Community",
    excerpt: "A compassionate guide to understanding mental health challenges and the support available at Akidiva Hospital.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    readTime: "6 min read",
  },
  {
    date: "February 15, 2026",
    category: "Child Health",
    title: "Your Child's First Year: A Month-by-Month Health Guide",
    excerpt: "Our pediatricians walk you through the key milestones, vaccinations, and health checks for your baby's first year.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&q=80",
    readTime: "7 min read",
  },
  {
    date: "February 5, 2026",
    category: "Diabetes",
    title: "Living Well with Diabetes: Practical Daily Management Tips",
    excerpt: "Proven strategies from our endocrinology team to help you manage diabetes effectively and live a full, active life.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    readTime: "5 min read",
  },
  {
    date: "January 25, 2026",
    category: "Heart Health",
    title: "Know Your Numbers: Blood Pressure and Heart Health",
    excerpt: "Understanding blood pressure readings and the lifestyle changes that can protect your heart for years to come.",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
    readTime: "4 min read",
  },
];

export default function Education() {
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
          <p className="text-yellow-300 font-semibold text-sm uppercase tracking-widest mb-3">Knowledge is Health</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Health Education & Awareness
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Empowering our community with the knowledge and resources to live healthier, longer lives.
          </p>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Community Outreach</p>
            <h2 className="section-title">Health Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
              Akidiva Hospital is deeply committed to improving community health beyond our walls. Our outreach programs serve thousands of residents across Migori County each year.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map(({ icon: Icon, title, desc, color, bg, stats }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base" style={{ fontFamily: "Merriweather, serif" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                <div className={`inline-flex items-center gap-2 ${bg} rounded-full px-3 py-1`}>
                  <span className={`text-xs font-semibold ${color}`}>{stats}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Stay Informed</p>
            <h2 className="section-title">Essential Health Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HEALTH_TIPS.map(({ category, tips, color, icon: Icon, iconColor }) => (
              <div key={category} className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${color} card-hover`}>
                <div className="flex items-center gap-3 mb-5">
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                  <h3 className="font-bold text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>{category}</h3>
                </div>
                <ul className="space-y-3">
                  {tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Health Library</p>
            <h2 className="section-title">Articles & Health Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <article key={article.title} className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover border border-gray-100">
                <div className="h-44 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-50 text-hospital-blue text-xs font-semibold px-2.5 py-1 rounded-full">{article.category}</span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug" style={{ fontFamily: "Merriweather, serif" }}>{article.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{article.date}</span>
                    <button className="inline-flex items-center gap-1 text-hospital-blue text-xs font-semibold hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-hospital-light">
        <div className="container">
          <div className="text-center mb-14">
            <p className="section-subtitle">Free Resources</p>
            <h2 className="section-title">Downloadable Health Guides</h2>
            <p className="text-gray-600 max-w-xl mx-auto mt-4">
              Download our free health guides, created by our medical team, to help you and your family stay informed and healthy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RESOURCES.map((resource) => (
              <div key={resource.title} className="bg-white rounded-2xl p-5 shadow-sm card-hover border border-gray-100 flex items-center gap-4">
                <div className="text-3xl">{resource.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">{resource.title}</h4>
                  <p className="text-gray-400 text-xs">{resource.type} · {resource.size}</p>
                </div>
                <button className="w-9 h-9 bg-hospital-blue rounded-xl flex items-center justify-center text-white hover:bg-hospital-blue-dark transition-colors shrink-0">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hospital-blue">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            Have a Health Question?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our doctors are available for consultations. Book an appointment or call our health helpline.
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
