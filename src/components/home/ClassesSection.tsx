import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { yogaClasses } from '../../data/yogaClasses';
import Button from '../ui/Button';

const ClassesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title after:content-[''] after:block after:w-16 after:h-1 after:bg-sage after:mt-2 after:mb-6 after:mx-auto">
              Nos Cours de Yoga
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Découvrez nos différentes pratiques de yoga adaptées à tous les niveaux et besoins spécifiques. Chaque cours est conçu pour vous apporter équilibre, force et sérénité.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {yogaClasses.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              className="card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={yogaClass.image} 
                  alt={yogaClass.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-medium">{yogaClass.title}</h3>
                    <p className="text-sm opacity-80">avec {yogaClass.instructor}</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {yogaClass.description.substring(0, 120)}...
                </p>
                <Link to={`/cours/${yogaClass.id}`}>
                  <Button variant="outline" size="sm" isFullWidth>
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/cours">
            <Button variant="primary" size="lg">
              Voir tous nos cours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;