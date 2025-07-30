import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      navigate('/');
    }
  }, [sessionId, navigate]);

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
            <CheckCircle className="w-16 h-16 text-sage mx-auto mb-6" />
            <h1 className="text-3xl font-serif text-sage mb-4">Paiement réussi !</h1>
            <p className="text-lg mb-8">
              Merci pour votre achat. Votre réservation a été confirmée et vous recevrez un email avec tous les détails.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate('/reservation')}
            >
              Réserver un cours
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;