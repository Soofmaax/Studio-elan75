import React from 'react';
import { motion } from 'framer-motion';
import MapSection from '../components/home/MapSection';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title after:mx-auto">Contact</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions.
          </p>
        </motion.div>
      </div>
      <MapSection />
    </div>
  );
};

export default ContactPage;