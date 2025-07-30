import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-sage/10 dark:bg-sage-dark/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title after:content-[''] after:block after:w-16 after:h-1 after:bg-sage dark:after:bg-sage-dark after:mt-2 after:mb-6 after:mx-auto">
              Ce que disent nos clients
            </h2>
            <p className="text-lg max-w-2xl mx-auto dark:text-gray-300">
              Découvrez les témoignages de nos clients qui ont transformé leur vie grâce à la pratique du yoga au Studio Élan.
            </p>
          </motion.div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <Quote size={48} className="text-sage/20 dark:text-sage-dark/20" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover rounded-full border-4 border-sage/20 dark:border-sage-dark/20"
                  />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl italic mb-6 dark:text-gray-300">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-medium text-xl text-sage dark:text-sage-dark">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].yogaType}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft size={24} className="text-sage dark:text-sage-dark" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-sage dark:bg-sage-dark' 
                      : 'bg-sage/30 dark:bg-sage-dark/30'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-sage/10 dark:hover:bg-sage-dark/10 transition-colors"
              aria-label="Témoignage suivant"
            >
              <ChevronRight size={24} className="text-sage dark:text-sage-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;