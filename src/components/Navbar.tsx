import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">BluePeak</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-200 transition-colors">{t.nav.home}</a>
              <a href="#services" className="hover:text-blue-200 transition-colors">{t.nav.services}</a>
              <a href="#about" className="hover:text-blue-200 transition-colors">{t.nav.about}</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">{t.nav.contact}</a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'rw' : 'en')}
                className="flex items-center space-x-1 bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-2 rounded-md hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105"
              >
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}