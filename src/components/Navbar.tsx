
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.home'), path: '/', isNoTranslate: true },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColor = (isScrolled || !isHome) ? 'text-[#0F172A]' : 'text-[#FFFFFF]';
  const bgColor = isScrolled ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm' : (isHome ? 'bg-transparent' : 'bg-[#FFFFFF]');

  return (
    <nav 
      id="navbar-container-q2x8m4n9" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            to="/" 
            id="nav-logo-link-b4v9m1x2" 
            data-role="logo"
            className="flex items-center gap-2 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sparkles className={`w-8 h-8 ${isScrolled || !isHome ? 'text-[#C5A059]' : 'text-[#FFFFFF]'}`} />
            <span translate="no" className={`notranslate text-2xl font-bold font-display tracking-tight ${textColor} text-[#111111] drop-shadow-sm`}>
              CORIAL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={textColor}>
              <LanguageToggle />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`nav-link-${link.name.toLowerCase()}-v9k1m4n2`}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C5A059] ${textColor} ${
                  link.isNoTranslate ? 'notranslate' : ''
                }`}
                translate={link.isNoTranslate ? 'no' : 'yes'}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              id="nav-cta-btn-r8n2k3m1"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isScrolled || !isHome 
                  ? 'bg-[#0F172A] text-[#FFFFFF] hover:bg-[#C5A059]' 
                  : 'bg-[#FFFFFF] text-[#0F172A] hover:bg-[#C5A059] hover:text-[#FFFFFF]'
              }`}
            >
              {t('nav.shopNow')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-f4v1n8m3"
            className="lg:hidden p-2 text-[#111111] drop-shadow-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled || !isHome ? 'text-[#0F172A]' : 'text-[#FFFFFF]'} />
            ) : (
              <Menu className={isScrolled || !isHome ? 'text-[#0F172A]' : 'text-[#FFFFFF]'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-overlay-x9n2k4m1" 
          className="fixed inset-0 top-20 bg-[#FFFFFF] z-40 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col p-8 gap-6">
            <LanguageToggle />
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                id={`mobile-nav-link-${link.name.toLowerCase()}-k4n1m8x2`}
                className={`text-2xl font-display font-semibold text-[#0F172A] hover:text-[#C5A059] border-b border-gray-100 pb-4 ${
                  link.isNoTranslate ? 'notranslate' : ''
                }`}
                translate={link.isNoTranslate ? 'no' : 'yes'}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              id="mobile-nav-cta-btn-p8v3n1x2"
              className="mt-4 w-full bg-[#0F172A] text-[#FFFFFF] py-4 rounded-xl text-center font-bold tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.shopCollection')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}