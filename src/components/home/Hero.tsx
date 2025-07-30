import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Trouvez votre équilibre
            <br />
            <span className="font-light italic">au cœur de Montmartre</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Yoga prénatal, doux, tonique et enfants dans un cadre zen et apaisant
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/cours">
              <Button 
                variant="primary" 
                size="lg"
              >
                Découvrir nos cours
              </Button>
            </Link>
            <Link to="/reservation">
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              >
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-bounce"
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M12 5V19M12 19L19 12M12 19L5 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;