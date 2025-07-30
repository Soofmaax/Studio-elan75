import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../stores/authStore';
import Button from '../components/ui/Button';
import { Calendar, CreditCard, User } from 'lucide-react';
import GoogleAuthButton from '../components/auth/GoogleAuthButton';

const AccountPage = () => {
  const { profile } = useAuthStore();

  if (!profile) return null;

  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title mb-12">Mon Compte</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-sage mr-3" />
                <h2 className="text-xl font-serif">Informations personnelles</h2>
              </div>
              <div className="space-y-4">
                <p>
                  <span className="font-medium">Nom :</span> {profile.name}
                </p>
                <p>
                  <span className="font-medium">Crédits disponibles :</span> {profile.credits}
                </p>
                <Button variant="outline" size="sm">
                  Modifier mes informations
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-sage mr-3" />
                <h2 className="text-xl font-serif">Calendrier</h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Connectez votre calendrier Google pour synchroniser automatiquement vos réservations.
                </p>
                <GoogleAuthButton />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                <CreditCard className="w-6 h-6 text-sage mr-3" />
                <h2 className="text-xl font-serif">Historique des paiements</h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-600">
                  Consultez l'historique de vos achats et transactions.
                </p>
                <Button variant="outline" size="sm">
                  Voir l'historique
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountPage;