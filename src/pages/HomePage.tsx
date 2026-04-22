import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Heart, Sparkles} from 'lucide-react';

const services = [
  {
    title: 'Acero Inoxidable',
    desc: 'Modern, durable pieces for daily wear with a polished premium finish.',
    img: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-1.jpg'
  },
  {
    title: 'Plata 925',
    desc: 'Timeless silver essentials crafted to elevate every look.',
    img: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-2.jpg'
  },
  {
    title: 'Sets & Regalos',
    desc: 'Curated gift-ready combinations for birthdays, anniversaries, and special moments.',
    img: 'https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-3.jpg'
  }
];

export default function HomePage() {
  return (
    <main id="home-page-container-v2n8m1x4">
      {/* Hero Section */}
      <section 
        id="hero-section-k8n2m4x1" 
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ 
          backgroundImage: "url('https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-0.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-[#FFFFFF] leading-tight mb-6">
              Jewelry With Identity, <br />
              <span className="text-[#C5A059]">Made for Every Day.</span>
            </h1>
            <p className="text-xl text-[#F8FAFC] font-sans mb-10 leading-relaxed max-w-2xl">
              Welcome to Corial, your jewelry brand in Maracaibo with Delivery, National, and International shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                id="hero-cta-primary-r9n2k4m1" 
                className="bg-[#C5A059] text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-center hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-all transform hover:scale-105"
              >
                SHOP NOW
              </Link>
              <Link 
                to="/services" 
                id="hero-cta-secondary-v1n8k4m2"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-[#FFFFFF] px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-all"
              >
                VIEW COLLECTIONS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section id="trust-strip-x2n8k4m1" className="bg-[#F8FAFC] py-12 overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2"><Shield className="text-[#0F172A]" /><span className="text-lg font-bold text-[#0F172A]">QUALITY MATERIALS</span></div>
            <div className="flex items-center gap-2"><Star className="text-[#0F172A]" /><span className="text-lg font-bold text-[#0F172A]">TREND-LED DESIGNS</span></div>
            <div className="flex items-center gap-2"><Heart className="text-[#0F172A]" /><span className="text-lg font-bold text-[#0F172A]">CUSTOMER FIRST</span></div>
            <div className="flex items-center gap-2"><Sparkles className="text-[#0F172A]" /><span className="text-lg font-bold text-[#0F172A]">PREMIUM FINISH</span></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="home-services-v4n8k1m2" className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">Our Core Collections</h2>
            <p className="text-lg text-gray-600 font-sans">Stylish pieces in Acero Inoxidable and Plata 925 designed for everyday confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                id={`service-card-home-${idx}-k4n1m8x2`}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-display font-bold text-[#FFFFFF] mb-3">{service.title}</h3>
                  <p className="text-[#F8FAFC]/80 text-sm mb-6">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="flex items-center gap-2 text-[#C5A059] font-bold hover:text-[#FFFFFF] transition-colors"
                  >
                    SEE MORE <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Trust Section */}
      <section id="trust-details-v9n2k4m1" className="py-24 bg-[#0F172A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FFFFFF] mb-8">
                Jewelry That Moves With You
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center shrink-0">
                    <Star className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-[#FFFFFF] mb-2">Design in Every Detail</h4>
                    <p className="text-[#F8FAFC]/70">From sketch to final polish, every Corial piece is curated to stand out.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center shrink-0">
                    <Shield className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-[#FFFFFF] mb-2">Premium Materials</h4>
                    <p className="text-[#F8FAFC]/70">We work with Acero Inoxidable and Plata 925 to ensure beauty and durability.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center shrink-0">
                    <Heart className="text-[#FFFFFF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-[#FFFFFF] mb-2">Client-Centered Service</h4>
                    <p className="text-[#F8FAFC]/70">You are not just a customer; you are part of the Corial community.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-4.jpg" 
                alt="Corial Jewelry Showcase" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-[#FFFFFF] p-6 rounded-2xl shadow-2xl max-w-xs">
                <p className="text-[#0F172A] font-display font-bold text-lg mb-1">"Every piece feels premium and unique. Totally in love with Corial."</p>
                <p className="text-[#C5A059] font-sans text-sm">— Maria Gonzalez, Customer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta-home-b4n1k8m2" className="py-24 bg-[#FDFCF7] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A059] to-transparent" />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#FFFFFF] mb-8 relative z-10">
              Ready to shine with <br /><span className="text-[#C5A059]">Corial?</span>
            </h2>
            <p className="text-xl text-[#F8FAFC]/80 mb-10 max-w-2xl mx-auto relative z-10">
              Discover jewelry pieces made to elevate your style in Maracaibo and beyond.
            </p>
            <Link
              to="/contact"
              id="cta-bottom-v8n2k1m4"
              className="inline-block bg-[#C5A059] text-[#FFFFFF] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-all relative z-10"
            >
              CONTACT TO ORDER
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}