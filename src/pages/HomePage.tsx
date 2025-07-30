import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ClassesSection from '../components/home/ClassesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import MapSection from '../components/home/MapSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ClassesSection />
      <TestimonialsSection />
      <PricingSection />
      <MapSection />
    </>
  );
};

export default HomePage;