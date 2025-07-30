import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { X } from 'lucide-react';

const CanceledPage = () => {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-6">
              <X className="w-16 h-16 text-error" />
            </div>
            <h1 className="text-3xl font-serif text-gray-800 mb-4">Paiement annulé</h1>
            <p className="text-lg mb-8">
              Votre paiement a été annulé. Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/tarifs">
                <Button variant="primary" size="lg">
                  Retour aux tarifs
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CanceledPage;