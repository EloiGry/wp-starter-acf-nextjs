// Menus

// Type pour un élément enfant
export interface MenuItem {
    url: string;
    title: string;
    childitems: MenuItem[]; // Un élément enfant peut également avoir des enfants, donc c'est récursif
  }
  
  // Type pour le menu principal (qui est un tableau d'éléments de menu)
  export type Menu = MenuItem[];

  // Pages
  // Type pour une image
interface Image {
    url: string;
    alt: string;
  }
  
  // FAQ Section
  interface FAQAccordion {
    question: string;
    answer: string;
  }
  
  export interface FAQSectionType {
    title: string;
    description: string;
    allfaqs : {
      accordion_0?: FAQAccordion;
      accordion_1?: FAQAccordion;
      accordion_2?: FAQAccordion;
    }
  }
  
  // Features Section
  interface Feature {
    title: string;
    description: string;
    image: Image;
  }
  
  export interface FeaturesSectionType {
    title: string;
    description: string;
    allfeatures : {
      features?: Feature;
      features_1?: Feature;
      features_2?: Feature;
      features_3?: Feature;
      features_4?: Feature;
      features_5?: Feature;
    }
  }
  
  // Hero Section
  export interface HeroSectionType {
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    bouton_1: {
      label: string;
      link: {
        url: string;
        alt: string;
      };
    };
    bouton_2: {
      label: string;
      link: {
        url: string;
        alt: string;
      };
    };
  }
  
  // Key Numbers Section
  interface KeyNumber {
    number: string;
    description: string;
  }
  
  export interface KeyNumbersSectionType {
    title: string;
    description: string;
    allkeynumbers : {
      key_numbers_0?: KeyNumber;
      key_numbers_1?: KeyNumber;
      key_numbers_2?: KeyNumber;
    }
  }
  
  // Testimonials Section
  interface Testimonial {
    author: string;
    review: string;
    thumbnail: Image;
  }
  
  export interface TestimonialsSectionType {
    title: string;
    description: string;
    alltestimonials : {
      testimonial_0?: Testimonial;
      testimonial_1?: Testimonial;
      testimonial_2?: Testimonial;
    }
  }
  
  // Interface globale pour ACF
  export interface ACF {
    faq?: FAQSectionType;
    features?: FeaturesSectionType;
    hero_section?: HeroSectionType;
    key_numbers?: KeyNumbersSectionType;
    testimonials?: TestimonialsSectionType;
  }

  //
  export interface Post {
    id: number,
    slug: string;
    date : string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    categories: number[];
    tags: number[];
  }

  export type Posts = Post[];

  export interface Author {
    id : number;
    name: string;
    slug: string;
  }

  export type Authors = Author[]

  export interface Category {
    id : number;
    name: string;
    slug: string;
  }

  export type Categories = Category[]

  export interface Tag {
    id : number;
    name: string;
    slug: string;
  }

  export type Tags = Tag[]
