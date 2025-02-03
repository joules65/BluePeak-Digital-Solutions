import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Globe, Clock, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-emerald-400" />,
      title: 'Phone',
      details: '+250 975 577 731',
      link: 'tel:+250975577731',
    },
    {
      icon: <Mail size={24} className="text-purple-400" />,
      title: 'Email',
      details: 'blogs@ebukas.com',
      link: 'mailto:blogs@ebukas.com',
    },
    {
      icon: <MapPin size={24} className="text-orange-400" />,
      title: 'Location',
      details: 'The African Leadership University, Bumbogo, Kigali, Rwanda',
      link: 'https://maps.google.com/?q=Kigali+Heights',
    },
    {
      icon: <Clock size={24} className="text-blue-400" />,
      title: 'Business Hours',
      details: 'Mon - Sat: 9:00 - 18:00',
    },
    {
      icon: <Globe size={24} className="text-pink-400" />,
      title: 'Social Media',
      details: 'Follow us @bluepeak_digital_solutions',
      link: 'https://instagram.com/bluepeak_digital_solutions',
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-900/90 to-purple-900/95" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            {t.contact.title}
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Let's discuss how we can help your business grow in the digital world. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-blue-200 hover:text-white flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      {item.details}
                      <ArrowUpRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-blue-200">{item.details}</p>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-blue-200">
            <div className="w-12 h-[1px] bg-blue-200/30" />
            <p>Available for projects worldwide</p>
            <div className="w-12 h-[1px] bg-blue-200/30" />
          </div>
        </div>
      </div>
    </section>
  );
}