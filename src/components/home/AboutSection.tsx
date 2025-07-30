import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-24 bg-cream dark:bg-cream-dark" aria-labelledby="about-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Studio Élan espace yoga" 
                className="rounded-xl shadow-xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hidden md:block transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Yoga au Studio Élan" 
                  className="w-48 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 
              id="about-title"
              className="text-4xl md:text-5xl font-serif text-sage dark:text-sage-dark leading-tight"
            >
              Notre Studio
            </h2>
            
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                Bienvenue au Studio Élan, un havre de paix situé au cœur de Montmartre. Notre espace a été conçu pour vous offrir une expérience de yoga authentique dans un cadre inspirant et ressourçant.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                Nous croyons que le yoga est bien plus qu'une pratique physique : c'est un chemin vers l'équilibre et l'harmonie qui transforme la vie. Notre équipe d'instructeurs passionnés et expérimentés vous accompagne dans cette découverte, quels que soient votre âge, votre niveau ou vos besoins spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl md:text-3xl font-serif text-sage dark:text-sage-dark mb-4">
                  Notre Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Rendre le yoga accessible à tous et créer un espace de bien-être et de connexion dans le quartier.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl md:text-3xl font-serif text-sage dark:text-sage-dark mb-4">
                  Notre Approche
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Une pratique bienveillante et personnalisée qui respecte les besoins et les limites de chacun.
                </p>
              </motion.div>
            </div>
            
            <p className="text-2xl font-serif text-sage dark:text-sage-dark text-center sm:text-left">
              Venez comme vous êtes, repartez transformé.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;