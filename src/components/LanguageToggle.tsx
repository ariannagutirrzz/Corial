import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle(): JSX.Element {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'es'>('en');

  useEffect(() => {
    const currentLanguage = i18n.language.startsWith('es') ? 'es' : 'en';
    setSelectedLanguage(currentLanguage);
  }, [i18n.language]);

  const handleSelectLanguage = (language: 'en' | 'es'): void => {
    setSelectedLanguage(language);
    void i18n.changeLanguage(language);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 p-1 backdrop-blur-md">
      <Languages className="ml-2 mr-1 h-4 w-4 text-current opacity-80" />
      <button
        type="button"
        onClick={() => handleSelectLanguage('en')}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          selectedLanguage === 'en' ? 'bg-[#0F172A] text-white' : 'text-current hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleSelectLanguage('es')}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          selectedLanguage === 'es' ? 'bg-[#0F172A] text-white' : 'text-current hover:bg-white/20'
        }`}
      >
        ES
      </button>
    </div>
  );
}
