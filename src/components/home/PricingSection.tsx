import React from 'react';
import { motion } from 'framer-motion';
import { pricingPlans } from '../../data/pricingPlans';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const PricingSection = () => {
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
              Nos Tarifs
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Choisissez la formule qui vous convient le mieux et commencez votre voyage vers l'équilibre et le bien-être.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden border ${
                plan.popular ? 'border-sage' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-sage text-white px-4 py-1 text-sm font-medium">
                  Populaire
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-serif font-medium mb-2">{plan.title}</h3>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{plan.price}€</span>
                    {plan.pricePerClass && (
                      <span className="text-gray-500 ml-2 mb-1">
                        {plan.pricePerClass}€/cours
                      </span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-sage mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/reservation">
                  <Button 
                    variant={plan.popular ? 'primary' : 'outline'} 
                    size="md" 
                    isFullWidth
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;