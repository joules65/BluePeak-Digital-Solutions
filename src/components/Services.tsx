import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe2, PenTool, GraduationCap, ArrowRight, X, Check, Sparkles, PictureInPicture, Computer } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Globe2 size={40} className="text-purple-500" />,
      title: t.services.webDesign.title,
      description: t.services.webDesign.description,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      features: t.services.webDesign.features,
      benefits: t.services.webDesign.benefits,
    },
    {
      icon: <PenTool size={40} className="text-orange-500" />,
      title: t.services.copywriting.title,
      description: t.services.copywriting.description,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
      features: t.services.copywriting.features,
      benefits: t.services.copywriting.benefits,
    },
    {
      icon: <GraduationCap size={40} className="text-emerald-500" />,
      title: t.services.englishLessons.title,
      description: t.services.englishLessons.description,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      features: t.services.englishLessons.features,
      benefits: t.services.englishLessons.benefits,
    },
    {
      icon: <PictureInPicture size={40} className="text-emerald-500"/>,
      title: t.services.GraphicDesign.title,
      description: t.services.GraphicDesign.description,
      image: 'https://res.cloudinary.com/dhkscpkf5/image/upload/v1738578037/krisztian-tabori-4E-PjXTHwfs-unsplash_l6vxt7.jpg',
      features: t.services.GraphicDesign.features,
      benefits: t.services.GraphicDesign.benefits,
    },
    {
      icon: <Computer size={40} className="text-emerald-500"/>,
      title: t.services.CodingBootCamp.title,
      description: t.services.CodingBootCamp.description,
      image: 'https://images.unsplash.com/photo-1571772500579-92c65949082f?auto=format&fit=crop&q=8https://res.cloudinary.com/dhkscpkf5/image/upload/v1738585175/det_pulp3p.jpg',
      features: t.services.CodingBootCamp.features,
      benefits: t.services.CodingBootCamp.benefits,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {t.services.title}
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
          {t.services.subtitle}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSelectedService(selectedService === index ? null : index)}
                    className="px-6 py-3 bg-white/90 text-gray-900 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"
                  >
                    <span>{t.services.learnMore}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-2xl transition-colors" />
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{services[selectedService].title}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Sparkles className="text-purple-500 mr-2" size={20} />
                      {t.services.featuresTitle}
                    </h4>
                    <ul className="space-y-2">
                      {services[selectedService].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Sparkles className="text-orange-500 mr-2" size={20} />
                      {t.services.benefitsTitle}
                    </h4>
                    <ul className="space-y-2">
                      {services[selectedService].benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}