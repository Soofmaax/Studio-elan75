import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Vérifie si les préférences de cookies existent déjà
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Si pas de préférences, affiche la bannière
      setIsVisible(true);
    } else {
      // Si des préférences existent, les charge
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...newPreferences,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm">
                Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies.
              </p>
              <div className="mt-4 space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="form-checkbox text-sage"
                  />
                  <span className="ml-2 text-sm">Cookies nécessaires</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      analytics: e.target.checked
                    }))}
                    className="form-checkbox text-sage"
                  />
                  <span className="ml-2 text-sm">Cookies analytiques</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences(prev => ({
                      ...prev,
                      marketing: e.target.checked
                    }))}
                    className="form-checkbox text-sage"
                  />
                  <span className="ml-2 text-sm">Cookies marketing</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSavePreferences}
              >
                Enregistrer les préférences
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
              >
                Tout accepter
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;