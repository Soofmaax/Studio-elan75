import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="container-custom text-center py-20">
        <h1 className="text-8xl font-serif font-bold text-sage mb-6">404</h1>
        <h2 className="text-3xl font-medium mb-4">Page non trouvée</h2>
        <p className="text-lg mb-8 max-w-lg mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Retour à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;