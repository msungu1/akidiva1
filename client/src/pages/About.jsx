import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, Shield, Users, Award, ArrowRight, Star, CheckCircle } from "lucide-react";

const TEAM = [
  { name: "Dr. Aggrey Akidiva", role: "Medical Director & Chief Surgeon", specialty: "General Surgery", initials: "SO", color: "bg-blue-600",    image: "/images/IMG_2229.jpg", },
  { name: "Nurse Neddy Idagiza", role: "Deputy Director & matron", specialty: "Nurse", initials: "AW", color: "bg-pink-500" ,    image: "/images/hosi21.jpg",},
  { name: "Dr. Paul ", role: "Surgeon", initials: "PO", color: "bg-green-600" ,    image: "/images/poul.png",},
  { name: "Caroline Lumasia", role: "Head of ICT", initials: "FM", color: "bg-purple-500" ,    image: "/images/caro.png",},
  { name: "Dr. Linda Kadenyeka ", role: "Lead Surgeon", initials: "HA", color: "bg-orange-500" ,    image: "/images/linda.png" ,},
  { name: "Jackline Kavetza", role: "Head of MCH Department", specialty: "Maternal & Child Health Services", initials: "EA", color: "bg-teal-500" ,    image: "/images/hosi18.jpg",},
];

const VALUES = [
  { icon: Heart, title: "Compassion", desc: "We treat every patient with empathy, dignity, and genuine care.", color: "text-red-500", bg: "bg-red-50" },
  { icon: Shield, title: "Safety", desc: "Patient safety is our highest priority in every clinical decision.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in medical practice and service.", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Users, title: "Community", desc: "We are deeply committed to the health of Migori County and beyond.", color: "text-green-600", bg: "bg-green-50" },
];

const MILESTONES = [
  { 
    year: "2000", 
    event: "Akidiva Hospital began its journey as a dedicated community clinic focused on family health." 
  },
  { 
    year: "2006", 
    event: "Expanded to include a specialized maternity wing to support safe deliveries in the region." 
  },
  { 
    year: "2010", 
    event: "Officially expanded to 20 beds with a focused vision to serve the wider Migori County." 
  },
  { 
    year: "2013", 
    event: "Grew to 80 beds and launched a fully equipped pediatric unit alongside the maternity ward." 
  },
  { 
    year: "2016", 
    event: "Opened a state-of-the-art diagnostic center with digital imaging and advanced laboratory services." 
  },
  { 
    year: "2019", 
    event: "Received ISO 9001 accreditation for excellence in healthcare quality management systems." 
  },
  { 
    year: "2022", 
    event: "Launched a specialized community malaria prevention program reaching over 10,000 residents." 
  },
  { 
    year: "2025", 
    event: "Opened the new Neonatal ICU and expanded surgical theater capacity to meet growing demand." 
  },
  { 
    year: "2026", 
    event: "Achieved full digitalization with production-ready hospital management and record systems." 
  }
];


export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-20 bg-hospital-blue-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-hospital-amber rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        
        <div className="container px-4 mx-auto relative z-10 text-center">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold tracking-widest text-hospital-amber uppercase bg-white/10 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Merriweather, serif" }}>
            About Akidiva Hospital
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            25 years of compassionate service, modern medicine, and community dedication in the heart of Migori County.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-wider mb-2">Our Foundation</h3>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission, Vision & Values</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl border-l-4 border-hospital-blue">
                    <div>
                      <h4 className="text-xl font-bold text-hospital-blue mb-2">Our Mission</h4>
                      <p className="text-gray-700 leading-relaxed">
To offer Comprehensive services where innovation and teaching are intergral to care                       </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-6 bg-green-50 rounded-2xl border-l-4 border-hospital-green">
                    <div>
                      <h4 className="text-xl font-bold text-hospital-green mb-2">Our Vision</h4>
                      <p className="text-gray-700 leading-relaxed">
              To be the regional destination provider of innovative and complex care                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-hospital-amber/10 rounded-3xl -rotate-2"></div>
              <img
                 src="/images/WhatsApp Image 2026-05-02 at 22.03.49 (1).jpeg"
                alt="Hospital lobby"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-wider">What Guides Us</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map(({ icon: Icon, title, desc, color, bg }, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-14 h-14 ${bg} ${color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-wider">Our Journey</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Hospital History</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gray-200 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`inline-block px-4 py-1 rounded-full bg-hospital-blue text-white font-bold text-sm mb-4`}>
                      {m.year}
                    </div>
                    <p className="text-gray-700 font-medium text-lg leading-relaxed">{m.event}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-hospital-amber border-4 border-white shadow-md relative z-10 hidden md:block"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-hospital-blue font-bold text-sm uppercase tracking-wider">The People Behind Our Care</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our  Team</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our dedicated team of specialists, nurses, and support staff are the heart of Akidiva Hospital. Each member brings expertise, passion, and a genuine commitment to patient wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 text-center p-8">
             <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-gray-100 group-hover:scale-110 transition-transform duration-300">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover"
  />
</div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-hospital-blue font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm italic mb-4">{member.specialty}</p>
                
                <div className="flex justify-center gap-1 text-hospital-amber">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hospital-blue-dark text-white text-center">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Akidiva Difference</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join thousands of families who trust Akidiva Hospital for their healthcare needs.
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center gap-2 bg-hospital-amber text-white font-semibold px-10 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg scale-105 hover:scale-110">
              Book an Appointment <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}