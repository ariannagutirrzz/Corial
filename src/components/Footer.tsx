
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="footer-section-v9n2k4m1" className="bg-[#0F172A] pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div id="footer-col-brand-k4n1m8v2" className="space-y-6">
            <div data-role="logo" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#C5A059]" />
              <span translate="no" className="notranslate text-2xl font-bold font-display text-[#FFFFFF] tracking-tight">CORIAL</span>
            </div>
            <p className="text-[#F8FAFC]/70 leading-relaxed">
              {t('footer.brand')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#FFFFFF] hover:text-[#C5A059] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[#FFFFFF] hover:text-[#C5A059] transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer-col-links-r2v8n4x1" className="space-y-6">
            <h4 className="text-[#FFFFFF] font-display font-semibold text-lg">{t('footer.explore')}</h4>
            <ul className="space-y-4">
              <li><Link to="/" translate="no" className="notranslate text-[#F8FAFC]/70 hover:text-[#C5A059] transition-colors">HOME</Link></li>
              <li><Link to="/about" className="text-[#F8FAFC]/70 hover:text-[#C5A059] transition-colors">{t('footer.story')}</Link></li>
              <li><Link to="/services" className="text-[#F8FAFC]/70 hover:text-[#C5A059] transition-colors">{t('footer.expertise')}</Link></li>
              <li><Link to="/contact" className="text-[#F8FAFC]/70 hover:text-[#C5A059] transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services Brief */}
          <div id="footer-col-services-b4v1m9x2" className="space-y-6">
            <h4 className="text-[#FFFFFF] font-display font-semibold text-lg">{t('footer.collections')}</h4>
            <ul className="space-y-4">
              <li className="text-[#F8FAFC]/70">Acero Inoxidable</li>
              <li className="text-[#F8FAFC]/70">Plata 925</li>
              <li className="text-[#F8FAFC]/70">Piezas Personalizadas</li>
              <li className="text-[#F8FAFC]/70">Gift Sets</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="footer-col-contact-v8n1k3m2" className="space-y-6">
            <h4 className="text-[#FFFFFF] font-display font-semibold text-lg">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-1" />
                <span className="text-[#F8FAFC]/70">Maracaibo, Venezuela</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-[#F8FAFC]/70">0261 4180088</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] shrink-0" />
                <span className="text-[#F8FAFC]/70">somoscorialmcbo@gmail.com</span>
              </li>
              <li className="text-[#F8FAFC]/70">{t('footer.shipping')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFFFFF]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F8FAFC]/40 text-sm">
            © {new Date().getFullYear()} Corial. {t('footer.rights')}
          </p>
          <a 
            href="https://sitejourney.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1c4b8e] text-[#ffffff] px-4 py-1 rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
          >
            Made with SiteJourney.ai
          </a>
        </div>
      </div>
    </footer>
  );
}