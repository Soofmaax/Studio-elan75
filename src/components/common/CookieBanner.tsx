/**
 * @file CookieBanner.tsx
 * @version 3.0.0
 * @description Composant React pour une bannière de consentement aux cookies, conforme au RGPD.
 * Cette version "expert" inclut :
 * - Les 3 options obligatoires : Accepter, Refuser, Personnaliser.
 * - Une validation de l'expiration du consentement (13 mois recommandés par la CNIL).
 * - Une gestion de version pour invalider les anciens consentements si les politiques changent.
 * - Des descriptions claires pour chaque type de cookie pour une transparence totale.
 * - Une architecture robuste et accessible.
 */

// ==========================================================================
// IMPORTS
// ==========================================================================

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

// ==========================================================================
// CONSTANTES ET TYPES
// ==========================================================================

const COOKIE_CONSENT_KEY = 'appCookieConsent'; // Clé générique pour la réutilisabilité.
const COOKIE_CONSENT_VERSION = '1.0'; // Version du consentement. À incrémenter si les politiques changent.
const CONSENT_EXPIRY_MONTHS = 13; // Durée de validité du consentement recommandée par la CNIL.

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

interface StoredConsent {
  preferences: CookiePreferences;
  timestamp: string;
  version: string;
}

interface CookieBannerProps {
  /** Callback optionnel pour informer le reste de l'app des préférences mises à jour. */
  onPreferencesChange?: (preferences: CookiePreferences) => void;
}

// ==========================================================================
// FONCTIONS UTILITAIRES
// ==========================================================================

/**
 * Vérifie si un consentement stocké est toujours valide (date et version).
 * @param {StoredConsent} consent - L'objet de consentement stocké.
 * @returns {boolean} - True si le consentement est valide.
 */
const isConsentValid = (consent: StoredConsent): boolean => {
  if (consent.version !== COOKIE_CONSENT_VERSION) {
    return false; // La politique a changé, le consentement est invalide.
  }
  const consentDate = new Date(consent.timestamp);
  const expiryDate = new Date(consentDate.setMonth(consentDate.getMonth() + CONSENT_EXPIRY_MONTHS));
  return new Date() < expiryDate;
};

// ==========================================================================
// COMPOSANT PRINCIPAL : CookieBanner
// ==========================================================================

const CookieBanner: React.FC<CookieBannerProps> = ({ onPreferencesChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const storedConsentJSON = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (storedConsentJSON) {
        const storedConsent: StoredConsent = JSON.parse(storedConsentJSON);
        if (isConsentValid(storedConsent)) {
          // Le consentement est valide, on informe l'application et on ne fait rien d'autre.
          onPreferencesChange?.(storedConsent.preferences);
          return;
        }
      }
      // Si aucun consentement, ou s'il est invalide/expiré, on affiche la bannière.
      setIsVisible(true);
    } catch (error) {
      console.error("Erreur d'accès au localStorage:", error);
    }
  }, [onPreferencesChange]);

  const saveConsent = useCallback((consentToSave: CookiePreferences) => {
    try {
      const consentPayload: StoredConsent = {
        preferences: consentToSave,
        timestamp: new Date().toISOString(),
        version: COOKIE_CONSENT_VERSION,
      };
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentPayload));
      setIsVisible(false);
      onPreferencesChange?.(consentToSave); // Notifie l'application des nouvelles préférences.
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du consentement:', error);
    }
  }, [onPreferencesChange]);

  const handleAcceptAll = () => saveConsent({ analytics: true, marketing: true });
  const handleRejectAll = () => saveConsent({ analytics: false, marketing: false });
  const handleSavePreferences = () => saveConsent(preferences);

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target as { name: keyof CookiePreferences; checked: boolean };
    setPreferences(prev => ({ ...prev, [name]: checked }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-live="polite"
        aria-label="Bannière de consentement aux cookies"
        aria-describedby="cookie-description"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 bg-background-light shadow-lg z-50"
      >
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Votre vie privée est notre priorité</h2>
              <p id="cookie-description" className="mt-1 text-sm text-text-secondary">
                Nous utilisons des cookies pour optimiser votre expérience. Vous pouvez accepter tous les cookies, les refuser ou personnaliser vos choix.
              </p>
              <div className="mt-4 space-y-3">
                {/* Section Nécessaires */}
                <div>
                  <label className="flex items-center cursor-not-allowed opacity-75">
                    <input type="checkbox" checked disabled className="form-checkbox" />
                    <span className="ml-2 text-sm font-medium">Nécessaires</span>
                  </label>
                  <p className="ml-6 text-xs text-text-secondary">Indispensables au fonctionnement du site.</p>
                </div>
                {/* Section Analytiques */}
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="analytics" checked={preferences.analytics} onChange={handlePreferenceChange} className="form-checkbox text-primary" />
                    <span className="ml-2 text-sm font-medium">Analytiques</span>
                  </label>
                  <p className="ml-6 text-xs text-text-secondary">Permettent de mesurer l'audience et d'améliorer le site.</p>
                </div>
                {/* Section Marketing */}
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" name="marketing" checked={preferences.marketing} onChange={handlePreferenceChange} className="form-checkbox text-primary" />
                    <span className="ml-2 text-sm font-medium">Marketing</span>
                  </label>
                  <p className="ml-6 text-xs text-text-secondary">Utilisés pour vous proposer des publicités pertinentes.</p>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-2 self-end">
              <Button variant="outline" size="sm" onClick={handleSavePreferences}>Personnaliser</Button>
              <Button variant="secondary" size="sm" onClick={handleRejectAll}>Tout refuser</Button>
              <Button variant="primary" size="sm" onClick={handleAcceptAll}>Tout accepter</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
