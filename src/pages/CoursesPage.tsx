import React from 'react';
import { yogaClasses } from '../data/yogaClasses';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const CoursesPage = () => {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title after:mx-auto">Nos Cours de Yoga</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Découvrez nos différentes pratiques de yoga adaptées à tous les niveaux et besoins spécifiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {yogaClasses.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={yogaClass.image}
                  alt={yogaClass.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-serif text-sage mb-3">{yogaClass.title}</h2>
                <p className="text-gray-600 mb-4">{yogaClass.description}</p>
                <Link to={`/cours/${yogaClass.id}`}>
                  <Button variant="primary" isFullWidth>
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;