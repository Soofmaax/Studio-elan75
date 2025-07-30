import React from 'react';
import { Wrench } from 'lucide-react';
import Button from '../components/ui/Button';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="container-custom text-center py-20">
        <Wrench className="w-20 h-20 text-sage mx-auto mb-6" />
        <h1 className="text-4xl font-serif font-bold text-sage mb-6">Maintenance en cours</h1>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          Notre site est actuellement en maintenance. Nous serons de retour très bientôt avec de nouvelles fonctionnalités.
        </p>
        <Button 
          variant="primary" 
          size="lg"
          onClick={() => window.location.reload()}
        >
          Rafraîchir la page
        </Button>
      </div>
    </div>
  );
};

export default MaintenancePage;