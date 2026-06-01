import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { 
  ArrowRight, Download, BookOpen, Heart, Shield, 
  Droplets, Baby, Activity, Users, CheckCircle, 
  Search, Calendar, Clock 
} from "lucide-react";

const PROGRAMS = [
  {
    icon: Droplets,
    title: "Malaria Awareness in Migori County",
    desc: "Migori County has one of the highest malaria burdens in Kenya. Our community health workers conduct regular awareness campaigns, distribute bed nets, and provide free rapid testing.",
    color: "text-green-600",
    bg: "bg-green-50",
    stats: "10,000+ residents reached",
  },
  {
    icon: Baby,
    title: "Maternal & Child Health Program",
    desc: "We work with local communities to improve maternal and infant health outcomes through prenatal education, nutrition counseling, and postnatal support groups.",
    color: "text-pink-500",
    bg: "bg-pink-50",
    stats: "500+ mothers supported annually",
  },
  {
    icon: Activity,
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
  icon: Activity,
  title: "Nutrition & Chronic Disease Management",
  desc: "Our hospital nutritionists help patients manage Diabetes, Hypertension, Arthritis, and obesity through personalized diet plans. We emphasize locally available healthy foods and fruit-based nutrition to support long-term wellness.",
  color: "text-emerald-600",
  bg: "bg-emerald-50",
  stats: "Personalized diet plans available",
},
  {
    icon: Users,
    title: "School Health Program",
    desc: "Our medical teams visit schools across Migori County to conduct health screenings, provide deworming treatment, and educate students about hygiene.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    stats: "30+ schools visited annually",
  },
  {
    icon: Heart,
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
      "Use insect repellent when outdoors at dusk",
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
      "Take iron and folic acid supplements",
      "Eat a balanced diet rich in vegetables",
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
      "Exercise for 30 minutes, 5 days a week",
      "Wash hands frequently with soap and water",
      "Get regular health check-ups annually",
    ],
    color: "border-blue-400",
    icon: Activity,
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
    title: "Understanding Malaria and Treatment",
    excerpt: "Recognizing first symptoms and understanding the full treatment course in Migori.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
    readTime: "5 min read",
  },
  {
    date: "March 10, 2026",
    category: "Nutrition",
    title: "Eating Well on a Budget",
    excerpt: "Practical, affordable meal plans using locally available Kenyan foods.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    readTime: "4 min read",
  },
  {
    date: "February 28, 2026",
    category: "Mental Health",
    title: "Breaking the Silence",
    excerpt: "A compassionate guide to mental health support at Akidiva Hospital.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    readTime: "6 min read",
  },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="relative py-20 bg-hospital-blue-dark text-white overflow-hidden">
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            Knowledge is Health
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            Health Education & Awareness
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            Empowering our community with the knowledge and resources to live healthier, longer lives.
          </p>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-wider">Community Outreach</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Health Programs</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Akidiva Hospital is deeply committed to improving community health beyond our walls. Our outreach programs serve thousands of residents across Migori County each year.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map(({ icon: Icon, title, desc, color, bg, stats }, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-14 h-14 ${bg} ${color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="pt-4 border-t border-gray-50 flex items-center gap-2 text-hospital-blue font-bold text-xs uppercase">
                  <CheckCircle className="w-4 h-4" /> {stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Nutrition: Fruits & Kenyan Vegetables */}
<section className="py-24 bg-gradient-to-b from-emerald-50 via-white to-blue-50">
  <div className="container px-4 mx-auto">

    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h3 className="text-emerald-700 font-bold text-sm uppercase tracking-wider">
        Kenyan Nutrition & Chronic Care
      </h3>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        Eat Local. Stay Healthy. Live Longer.
      </h2>

      <p className="text-gray-600 mt-5 leading-relaxed">
        We promote locally available Kenyan fruits and vegetables to help manage 
        <span className="font-semibold text-gray-900"> Diabetes, Hypertension, Arthritis </span>
        and improve overall wellness.
      </p>
    </div>

    {/* FRUITS */}
    <h3 className="text-xl font-bold text-gray-900 mb-6">🍎 Fruits for Healing</h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

      {[
        {
          name: "Avocado",
          img: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600&q=80",
          benefit: "Heart health & good cholesterol"
        },
        {
          name: "Banana",
          img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
          benefit: "Controls blood pressure"
        },
        {
          name: "Orange",
          img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=600&q=80",
          benefit: "Boosts immunity"
        },
        {
          name: "Mango",
          img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
          benefit: "Natural antioxidants"
        },
        {
          name: "Pineapple",
          img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=80",
          benefit: "Reduces inflammation"
        },
        {
          name: "Papaya",
          img: "https://images.unsplash.com/photo-1617112848923-cc2234396a1d?w=600&q=80",
          benefit: "Improves digestion"
        },
      ].map((item, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
          <img src={item.img} className="h-36 w-full object-cover" />
          <div className="p-4">
            <h4 className="font-bold">{item.name}</h4>
            <p className="text-xs text-gray-600">{item.benefit}</p>
          </div>
        </div>
      ))}
    </div>

    {/* VEGETABLES */}
    <h3 className="text-xl font-bold text-gray-900 mb-6">🥬 Kenyan Vegetables for Chronic Disease Control</h3>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

      {[
        {
          name: "Sukuma Wiki",
          img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
          benefit: "Rich in calcium for bones & blood pressure control"
        },
        {
          name: "Spinach (Mchicha)",
          img: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=600&q=80",
          benefit: "Iron-rich for blood health"
        },
        {
          name: "Managu (African Nightshade)",
          img: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=600&q=80",
          benefit: "Boosts immunity & digestion"
        },
        {
          name: "Terere (Amaranth Leaves)",
          img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=600&q=80",
          benefit: "Supports diabetes control"
        },
        {
          name: "Cabbage",
          img: "https://images.unsplash.com/photo-1594282486552-05a2f8c2a6f1?w=600&q=80",
          benefit: "Low calorie, heart-friendly"
        },
        {
          name: "Kale (Collards)",
          img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&q=80",
          benefit: "Supports detox & weight control"
        },
      ].map((veg, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
          <img src={veg.img} className="h-36 w-full object-cover" />
          <div className="p-4">
            <h4 className="font-bold">{veg.name}</h4>
            <p className="text-xs text-gray-600">{veg.benefit}</p>
          </div>
        </div>
      ))}
    </div>

    {/* MEDICAL MESSAGE */}
    <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-3xl p-10 text-center">
      <h3 className="text-2xl font-bold mb-3">
        Chronic Disease Nutrition Support
      </h3>

      <p className="text-white/90 max-w-3xl mx-auto">
        At Akidiva Hospital, our nutritionists design meal plans using everyday Kenyan foods
        to help patients manage diabetes, hypertension, arthritis, obesity, and heart disease naturally.
      </p>

      <div className="mt-6 text-sm font-semibold">
        🥗 Food First. Medicine When Needed. Prevention Always.
      </div>
    </div>

  </div>
</section>
      {/* Health Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
           <h3 className="text-hospital-blue font-bold text-sm uppercase mb-2">Stay Informed</h3>
           <h2 className="text-3xl font-bold mb-12">Essential Health Tips</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {HEALTH_TIPS.map((group, idx) => (
                <div key={idx} className={`bg-white p-8 rounded-2xl border-t-4 ${group.color} shadow-sm`}>
                  <div className="flex items-center gap-3 mb-6">
                    <group.icon className={`w-6 h-6 ${group.iconColor}`} />
                    <h4 className="font-bold text-lg">{group.category}</h4>
                  </div>
                  <ul className="space-y-4">
                    {group.tips.map((tip, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Articles & Health Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {ARTICLES.map((article, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 relative h-56">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-hospital-blue">
                    {article.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-hospital-blue transition-colors">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                  <div className="flex items-center gap-1 text-hospital-blue">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-hospital-blue-dark text-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Downloadable Resources</h2>
            <p className="text-white/60 mt-2">Expert guides created by our medical team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((res, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all group">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{res.icon}</span>
                  <div>
                    <h4 className="font-bold text-sm">{res.title}</h4>
                    <p className="text-xs text-white/50">{res.type} · {res.size}</p>
                  </div>
                </div>
                <button className="p-3 bg-white/10 rounded-xl group-hover:bg-hospital-amber group-hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-4">Have a Health Question?</h2>
          <p className="text-gray-600 mb-8">Our doctors are available for consultations and helplines.</p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-10 py-4 rounded-xl hover:shadow-lg transition-all">
              Book a Consultation <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}