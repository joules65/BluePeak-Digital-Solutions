export type Language = 'en' | 'rw';

export interface Translation {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    featuresTitle: string;
    benefitsTitle: string;
    webDesign: {
      title: string;
      description: string;
      features: string[];
      benefits: string[];
    };
    GraphicDesign: {
      title: string;
      description: string;
      features: string[];
      benefits: string[];
    };
    copywriting:{
      title: string;
      description: string;
      features: string[];
      benefits: string[];
    };
    englishLessons: {
      title: string;
      description: string;
      features: string[];
      benefits: string[];
    };
    CodingBootCamp: {
      title: string;
      description: string;
      features: string[];
      benefits: string[];
    };
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}