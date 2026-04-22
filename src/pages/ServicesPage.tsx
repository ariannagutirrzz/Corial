import { motion } from 'framer-motion';
import { ArrowRight, Globe, Plane, Gem, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const detailedServices = [
  {
    id: 'jewelry-service-national-a1b2c3d4',
    title: 'Mcbo Delivery',
    category: 'DOMESTIC MARKET',
    desc: 'Fast local delivery in Maracaibo with direct support and careful packaging for every order.',
    icon: <Globe className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeXxlbnwwfDB8fHwxNzc2ODcyMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'jewelry-service-international-e5f6g7h8',
    title: 'National & International Shipping',
    category: 'GLOBAL REACH',
    desc: 'Reliable shipments across Venezuela and worldwide with secure handling from dispatch to delivery.',
    icon: <Plane className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1636540757189-bee470af6bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwaW50ZXJuYXRpb25hbHxlbnwwfDB8fHwxNzc2ODcyMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'jewelry-service-bespoke-i9j0k1l2',
    title: 'Bespoke Jewelry Design',
    category: 'CUSTOM CREATIONS',
    desc: 'Collaborate with our master jewelers to bring your unique vision to life. From concept to creation, we craft one-of-a-kind pieces tailored to your desires.',
    icon: <Gem className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1628926379890-ad25d3b6a566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBkZXNpZ25lZCUyMHVuaXF1ZSUyMGpld2VscnklMjBwaWVjZXxlbnwwfDB8fHwxNzc2ODcyMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'jewelry-service-wholesale-m3n4o5p6',
    title: 'Wholesale & Partnerships',
    category: 'BUSINESS SOLUTIONS',
    desc: 'Form strategic alliances with us for bulk orders and exclusive collections. We offer competitive pricing and dedicated support for our wholesale partners.',
    icon: <Handshake className="w-6 h-6" />,
    img: 'https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGpld2VscnklMjB3aG9sZXNhbGV8ZW58MHwwfHx8MTc3Njg3MjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function ServicesPage() {
  return (
    <main id="services-page-container-v2n8k4m1" className="pt-20">
      {/* Header */}
      <section id="jewelry-hero-section-k4n1m8x2" className="py-24 bg-[#0F172A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-[#FFFFFF] mb-8 leading-tight">
              Exquisite Jewelry for Every <span className="text-[#C5A059]">Occasion</span>
            </h1>
            <p className="text-xl text-[#F8FAFC]/80 font-sans leading-relaxed">
              Explore our jewelry catalog in Acero Inoxidable and Plata 925, with delivery in Mcbo and shipping nationwide and internationally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section id="jewelry-services-list-v9n2k4m1" className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {detailedServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center text-[#C5A059]">
                      {service.icon}
                    </div>
                    <span className="text-[#C5A059] font-bold tracking-widest text-xs uppercase">{service.category}</span>
                  </div>
                  <h2 className="text-4xl font-display font-bold text-[#0F172A] mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    {service.desc}
                  </p>
                  <Link 
                    to="/contact"
                    id={`jewelry-cta-https://images.unsplash.com/photo-1602481222849-c8f6bb1f0f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxzZWUlMjBzZXJ2aWNlc3xlbnwwfDB8fHwxNzc2ODcyMjYzfDA&ixlib=rb-4.1.0&q=80&w=1080-b4n1k8m2`}
                    className="inline-flex items-center gap-3 text-[#0F172A] font-bold border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all"
                  >
                    ORDER NOW <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="rounded-[2rem] shadow-2xl w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#C5A059] rounded-2xl -z-10 hidden md:block" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus -> Renamed to Process Focus */}
      <section id="jewelry-process-v8n1k3m2" className="py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-8.jpg" 
                alt="Jewelry Crafting"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-[#0F172A]">Craftsmanship Meets Modern Retail</h2>
              <p className="text-lg text-gray-600">
                Corial combines trend-led design, quality materials, and reliable logistics to deliver standout jewelry pieces anywhere.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#C5A059] font-bold mb-2 uppercase tracking-tighter text-sm">Global Logistics</h4>
                  <p className="text-sm text-gray-500">Efficient, secure shipping to any destination.</p>
                </div>
                <div>
                  <h4 className="text-[#C5A059] font-bold mb-2 uppercase tracking-tighter text-sm">Secure Transactions</h4>
                  <p className="text-sm text-gray-500">Protected online payments and data privacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}