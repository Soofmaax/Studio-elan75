import React from 'react';
import { motion } from 'framer-motion';
import PricingSection from '../components/home/PricingSection';

const PricingPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title after:mx-auto">Nos Tarifs</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Découvrez nos différentes formules adaptées à vos besoins et à votre pratique.
          </p>
        </motion.div>
      </div>
      <PricingSection />
    </div>
  );
};

export default PricingPage;