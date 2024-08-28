
import React from 'react';
import { ACF } from './types';  

// Importe tes composants
import FaqSection from '@/components/sections/faq-section';
import FeaturesSection from '@/components/sections/features-section';
import HeroSection from '@/components/sections/hero-section';
import KeyNumbersSection from '@/components/sections/key-numbers-section';
import TestimonialSection from '@/components/sections/testimonial-section';
// Map des sections et des composants
const componentsMap: Record<keyof ACF, React.ComponentType<any>> = {
  faq: FaqSection,
  features: FeaturesSection,
  hero_section: HeroSection,
  key_numbers: KeyNumbersSection,
  testimonials: TestimonialSection,
};

// Fonction exportée pour le rendu des sections
export function sectionRenderer(acf: ACF): JSX.Element[] {
  return (Object.keys(acf) as Array<keyof ACF>)
    .map((sectionName) => {
      const SectionComponent = componentsMap[sectionName];
      const sectionData = acf[sectionName];

      if (SectionComponent && sectionData) {
        return <SectionComponent key={sectionName} data={sectionData} />;
      }

      return null;
    })
    .filter((element): element is JSX.Element => element !== null);
}