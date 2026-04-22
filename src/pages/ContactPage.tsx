import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import SiteJourneyForm from '../components/SiteJourneyForm';

export default function ContactPage() {
  return (
    <main id="contact-page-container-v4n8k1m2" className="pt-20">
      {/* Hero Contact */}
      <section id="contact-hero-v9n2k4m1" className="py-24 bg-[#FDFCF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-[#0F172A] mb-8 leading-tight">
              Let's Start Your <span className="text-[#C5A059]">Journey.</span>
            </h1>
            <p className="text-xl text-gray-600 font-sans leading-relaxed">
              Our team is ready to provide you with the personalized care you deserve. Reach out to schedule your initial consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="contact-main-b4n1k8m2" className="py-24 bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="bg-[#F8FAFC] p-10 rounded-3xl space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-1">Location</h4>
                    <p className="text-gray-600">M9HQ+242, C. 67, Maracaibo 4002, Zulia, Venezuela</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-1">Phone</h4>
                    <p className="text-gray-600">0261 4180088</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-1">Email</h4>
                    <p className="text-gray-600">somoscorialmcbo@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#0F172A] rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-1">Working Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM <br /> Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8">
                <p className="font-bold text-[#0F172A]">FOLLOW OUR UPDATES</p>
                <div className="h-px flex-1 bg-gray-200" />
                <a href="#" className="text-[#0F172A] hover:text-[#C5A059] transition-colors"><Instagram size={24} /></a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="bg-[#0F172A] p-8 md:p-12 rounded-[2rem] shadow-2xl relative z-10">
                <h3 className="text-3xl font-display font-bold text-[#FFFFFF] mb-8">Book Appointment</h3>
                <SiteJourneyForm 
                  formType="contact" 
                  className="space-y-6"
                  successMessage="Thank you for choosing Corial. We will contact you shortly to confirm your visit."
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[#F8FAFC]/70 text-xs font-bold tracking-widest uppercase">Full Name</label>
                      <input 
                        name="name" 
                        type="text" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:border-[#C5A059] outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[#F8FAFC]/70 text-xs font-bold tracking-widest uppercase">Phone Number</label>
                      <input 
                        name="phone" 
                        type="tel" 
                        required 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:border-[#C5A059] outline-none transition-all"
                        placeholder="+58 4XX XXX XXXX"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#F8FAFC]/70 text-xs font-bold tracking-widest uppercase">Email Address</label>
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:border-[#C5A059] outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#F8FAFC]/70 text-xs font-bold tracking-widest uppercase">Interested Service</label>
                    <select 
                      name="service" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:border-[#C5A059] outline-none transition-all"
                    >
                      <option className="text-black">Aesthetic Dentistry</option>
                      <option className="text-black">Orthodontics</option>
                      <option className="text-black">Rehabilitation</option>
                      <option className="text-black">Other Consultations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#F8FAFC]/70 text-xs font-bold tracking-widest uppercase">Message</label>
                    <textarea 
                      name="message" 
                      rows={4} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FFFFFF] focus:border-[#C5A059] outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#C5A059] py-4 rounded-xl font-bold hover:bg-[#FFFFFF] hover:text-[#0F172A] transition-all transform active:scale-95 text-[#111111]"
                  >
                    SEND REQUEST
                  </button>
                </SiteJourneyForm>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A059]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Office Photo Section */}
      <section id="contact-gallery-v8n1k3m2" className="py-24 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-display font-bold text-[#0F172A] mb-12">Experience Our Space</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-6.jpg" alt="Reception" className="rounded-2xl shadow-lg aspect-square object-cover" />
            <img src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-4.jpg" alt="Lounge" className="rounded-2xl shadow-lg aspect-square object-cover" />
            <img src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-9.jpg" alt="Clinical Suite" className="rounded-2xl shadow-lg aspect-square object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}