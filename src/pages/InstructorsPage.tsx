import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { instructors } from '../data/instructors';
import SEO from '../components/common/SEO';
import Button from '../components/ui/Button';

const InstructorsPage = () => {
  return (
    <>
      <SEO 
        title="Nos Instructeurs"
        description="Découvrez notre équipe d'instructeurs passionnés et expérimentés qui vous accompagneront dans votre pratique du yoga au Studio Élan."
      />
      <div className="pt-24 pb-16 bg-cream dark:bg-cream-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="section-title after:mx-auto dark:text-white">Nos Instructeurs</h1>
            <p className="text-lg max-w-2xl mx-auto dark:text-gray-300">
              Découvrez notre équipe d'instructeurs passionnés et expérimentés qui vous accompagneront dans votre pratique du yoga.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="relative h-80">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h2 className="text-2xl font-serif text-white mb-2">
                        {instructor.name}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {instructor.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {instructor.bio}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link to={`/instructeurs/${instructor.id}`}>
                      <Button variant="primary">
                        En savoir plus
                      </Button>
                    </Link>
                    <Link to="/reservation">
                      <Button variant="outline">
                        Réserver un cours
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsPage;