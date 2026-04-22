import { motion } from 'framer-motion';
import { CheckCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type AboutStatLabels = {
  yearsLabel: string;
  clientsLabel: string;
  dropsLabel: string;
  commitmentLabel: string;
};

export default function AboutPage() {
  const { t } = useTranslation();
  const checklist: string[] = t('about.checklist', { returnObjects: true }) as string[];
  const statLabels: AboutStatLabels = t('about.stats', { returnObjects: true }) as AboutStatLabels;
  return (
    <main id="about-page-container-b4v1m9n2" className="pt-20">
      {/* Header Section */}
      <section id="about-hero-v9n2k4m1" className="py-24 bg-[#F8FAFC] overflow-hidden border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-[#C5A059] font-bold tracking-widest text-sm mb-4 block">{t('about.badge')}</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-[#0F172A] mb-8 leading-tight">
              {t('about.heroTitleTop')} <br />{t('about.heroTitleBottom')}
            </h1>
            <p className="text-xl text-gray-600 font-sans leading-relaxed">
              {t('about.heroDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Story */}
      <section id="about-content-v8n1k3m2" className="py-24 md:py-32 bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://api.sitejourney.ai/storage/v1/object/public/site-assets/dbb4c246-8ecf-426e-a80f-6fa69a2f0567/pending-1776871852015/photo-5.jpg" 
                alt={t('about.imageAlt')}
                className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -z-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-8">{t('about.visionTitle')}</h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('about.visionDescription')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-[#C5A059] w-5 h-5 shrink-0" />
                    <span className="text-[#0F172A] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about-stats-b4n1k8m2" className="py-20 bg-[#0F172A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div id="stat-1-v9n2k4m1">
              <div className="text-5xl font-display font-bold text-[#C5A059] mb-2">15+</div>
              <div className="text-[#F8FAFC]/60 font-sans uppercase tracking-widest text-xs">{statLabels.yearsLabel}</div>
            </div>
            <div id="stat-2-v9n2k4m1">
              <div className="text-5xl font-display font-bold text-[#C5A059] mb-2">2k+</div>
              <div className="text-[#F8FAFC]/60 font-sans uppercase tracking-widest text-xs">{statLabels.clientsLabel}</div>
            </div>
            <div id="stat-3-v9n2k4m1">
              <div className="text-5xl font-display font-bold text-[#C5A059] mb-2">12+</div>
              <div className="text-[#F8FAFC]/60 font-sans uppercase tracking-widest text-xs">{statLabels.dropsLabel}</div>
            </div>
            <div id="stat-4-v9n2k4m1">
              <div className="text-5xl font-display font-bold text-[#C5A059] mb-2">100%</div>
              <div className="text-[#F8FAFC]/60 font-sans uppercase tracking-widest text-xs">{statLabels.commitmentLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about-philosophy-v4n1m9x2" className="py-24 md:py-32 bg-[#FDFCF7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-8">
              <Sparkles className="text-[#C5A059] w-10 h-10" />
            </div>
            <h2 className="text-4xl font-display font-bold text-[#0F172A] mb-8">{t('about.philosophyTitle')}</h2>
            <p className="text-2xl font-display text-[#0F172A]/80 leading-relaxed italic">
              {t('about.philosophyQuote')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}