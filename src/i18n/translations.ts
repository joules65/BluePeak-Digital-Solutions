import { Translation } from '../types/language';

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    home: {
      title: 'Empowering Your Digital Growth',
      subtitle: 'Professional web design, compelling content, and English language expertise',
      cta: 'Explore Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Elevate your business with our comprehensive digital solutions',
      learnMore: 'Learn More',
      featuresTitle: 'Key Features',
      benefitsTitle: 'Benefits',
      webDesign: {
        title: 'Website Design',
        description: 'Modern, responsive websites tailored to your brand and business needs',
        features: [
          'Custom responsive design',
          'User experience optimization',
          'Mobile-first approach',
          'SEO-friendly structure',
          'Fast loading speeds',
          'Secure hosting solutions',
        ],
        benefits: [
          'Increased online visibility',
          'Better user engagement',
          'Higher conversion rates',
          'Professional brand image',
          'Competitive advantage',
        ],
      },
      copywriting: {
        title: 'Copywriting',
        description: 'Engaging content that connects with your audience and drives results',
        features: [
          'SEO-optimized content',
          'Brand voice development',
          'Marketing materials',
          'Blog posts and articles',
          'Social media content',
          'Email campaigns',
        ],
        benefits: [
          'Improved brand messaging',
          'Higher engagement rates',
          'Better search rankings',
          'Increased conversions',
          'Stronger customer relationships',
        ],
      },

      GraphicDesign: {
        title: 'Graphic Design',
        description: 'Custom branding materials and visual identity for your business',
        features: [
          'Logo design',
          'Branding package',
          'Website design',
          'Print materials',
          'Brochures',
          'Flyers',
          'Posters',
          'Social media graphics',
          'Email templates',
        ],
        benefits: [
          'Professional brand image',
          'Increased visibility',
          'Competitive advantage',
          'Consistent branding',
          'Consistent customer experience',
        ],
      },

      englishLessons: {
        title: 'English Lessons',
        description: 'Personalized English language instruction for individuals and businesses',
        features: [
          'One-on-one tutoring',
          'Group classes',
          'Business English',
          'IELTS preparation',
          'Conversation practice',
          'Writing workshops',
        ],
        benefits: [
          'Improved communication skills',
          'Career advancement',
          'International opportunities',
          'Confidence building',
          'Cultural understanding',
        ],
      },

      CodingBootCamp: {
        title: 'Web Development BootCamp',
        description: 'Custom  bootcamps designed to help individuals and businesses develop their first websites in 3 months.',
        features: [
          '100% online learning',
          'Flexible schedule',
          'Personalized learning plans',
          'Workshops and projects',
          'Expert mentors',
          'Networking opportunities',
        ],
        benefits: [
          'Improved coding skills',
          'Increased job opportunities',
          'Better career growth',
          'Personalized learning experience',
          'Enhanced professional development',
        ],
      },
    },
    about: {
      title: 'About Us',
      description: 'BluePeak Digital Solutions is committed to helping businesses thrive in the digital age. We combine technical expertise with creative excellence to deliver outstanding results for our clients.',
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      services: 'Serivisi',
      about: 'Turi Ba Nde',
      contact: 'Twandikire',
    },
    home: {
      title: 'Gutera Imbere mu Ikoranabuhanga',
      subtitle: 'Gukora urubuga, kwandika ibinoze, no kwigisha icyongereza',
      cta: 'Reba Serivisi Zacu',
    },
    services: {
      title: 'Serivisi Zacu',
      subtitle: 'Teza imbere ubucuruzi bwawe n\'ibisubizo byacu by\'ikoranabuhanga',
      learnMore: 'Menya Byinshi',
      featuresTitle: 'Ibiranga Serivisi',
      benefitsTitle: 'Inyungu',
      webDesign: {
        title: 'Gukora Urubuga',
        description: 'Dukora urubuga runoze kandi rukwiye ubucuruzi bwawe',
        features: [
          'Gukora urubuga rukwiye ibikoresho byose',
          'Gutunganya uburyo bworoshye',
          'Kwibanda ku bikoresho bigendanwa',
          'Kubaka urubuga ruboneka neza kuri Google',
          'Urubuga rwihuta',
          'Umutekano w\'urubuga',
        ],
        benefits: [
          'Kugaragara cyane ku rubuga',
          'Gukorana neza n\'abakiriya',
          'Kongera umusaruro',
          'Kugira isura nziza y\'ubucuruzi',
          'Gutsinda abandi mu bucuruzi',
        ],
      },

      GraphicDesign: {
        title: 'Guteka Ibisubizo',
        description: 'Kigira isura nziza y\'ubucuruzi bwawe kandi bigera ku ntego',
        features: [
          'Guteka ibisubizo ry\'ubucuruzi',
          'Guteka ibisubizo byose',
          'Kigira isura nziza y\'ubucuruzi bwawe',
        ],
        benefits: [
          'Kugira isura nziza y\'ubucuruzi bwawe',
          'Kugaragara cyane ku ntego',
          'Kongera umusaruro',
          'Kugira isura nziza y\'ubucuruzi bwawe',
        ]
      },

      copywriting: {
        title: 'Kwandika',
        description: 'Twandika ibitekerezo bishimishije kandi bigera ku ntego',
        features: [
          'Kwandika biboneka neza kuri Google',
          'Guteza imbere ijwi ry\'ubucuruzi',
          'Inyandiko zo kwamamaza',
          'Inkuru n\'ingingo',
          'Ibitekerezo byo ku mbuga nkoranyambaga',
          'Ubutumwa bwo kwamamaza',
        ],
        benefits: [
          'Gutunganya ubutumwa bw\'ubucuruzi',
          'Kongera imikoranire',
          'Kuzamuka kuri Google',
          'Kongera umusaruro',
          'Gukomeza imikoranire n\'abakiriya',
        ],
      },
      englishLessons: {
        title: 'Kwigisha Icyongereza',
        description: 'Amasomo yihariye y\'icyongereza ku bantu n\'ibigo',
        features: [
          'Kwigisha umwe ku mwe',
          'Amasomo y\'amatsinda',
          'Icyongereza cy\'ubucuruzi',
          'Gutegura IELTS',
          'Imyitozo yo kuvuga',
          'Atelyeri yo kwandika',
        ],
        benefits: [
          'Kunoza ubushobozi bwo kuvugana',
          'Kuzamuka mu kazi',
          'Amahirwe mpuzamahanga',
          'Kwiyizera',
          'Gusobanukirwa imico',
        ],
      },

      CodingBootCamp: {
        title: 'Kubirikirika Bw\'Icyongereza',
        description: 'Kubirikirika bw\'ubucuruzi bwawe n\'ubumwe bw\'ubuhanga ku bantu neza 3 kubirikirika.',
        features: [
          '100% ukubirikirika',
          'Ibisubirikirika byo kwigisha',
          'Ubumwe bw\'ubucuruzi byo kwigisha',
          'Ubutumwa bw\'ubucuruzi byo kwigisha',
          'Ubutumwa bw\'ubumwe bw\'ubuhanga',
          'Ubutumwa bw\'ubumwe bw\'ubuhanga',
        ],
        benefits: [
          'Kunoza ubushobozi bwo kuvugana',
          'Kuzamuka mu kazi',
          'Amahirwe mpuzamahanga',
          'Kwiyizera',
          'Gusobanukirwa imico',
        ],
      }
    },
    about: {
      title: 'Turi Ba Nde',
      description: 'BluePeak Digital Solutions ifite intego yo gufasha ibigo gutera imbere mu ikoranabuhanga. Duhuza ubuhanga n\'ubumenyi bwo guhanga kugira ngo dutange ibisubizo byiza.',
    },
    contact: {
      title: 'Twandikire',
      name: 'Izina',
      email: 'Imeyili',
      message: 'Ubutumwa',
      submit: 'Ohereza',
    },
  },
};