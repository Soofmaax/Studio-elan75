/**
 * @file HomePage.tsx
 * @version 3.0.0
 * @description La page d'accueil de l'application Studio Elan.
 * Cette version "expert" est optimisée pour la performance, la robustesse et le SEO.
 * Elle intègre :
 * - Le chargement différé (Lazy Loading) pour les sections non critiques.
 * - Des périmètres de sécurité (Error Boundaries) pour une expérience utilisateur sans interruption.
 * - Des données structurées (Schema.org) complètes pour un SEO avancé.
 * - Une architecture sémantique et accessible.
 */

// ==========================================================================
// IMPORTS
// ==========================================================================

// Imports React : lazy et Suspense sont essentiels pour le chargement différé.
import React, { lazy, Suspense } from 'react';

// Import du composant SEO pour une gestion centralisée des balises meta.
import SEO from '../components/common/SEO';

// Imports des composants UI pour les états de chargement et d'erreur.
import ErrorBoundary from '../components/ui/ErrorBoundary';
import PageLoader from '../components/ui/PageLoader'; // Un fallback de chargement pour la page entière.

// Import de la configuration globale et des types TypeScript.
import { siteConfig } from '../config/site';
import { YogaStudioSchema } from '../types/seo'; // Typage strict pour les données structurées.

// ==========================================================================
// LAZY LOADING DES COMPOSANTS DE SECTION
// ==========================================================================

/**
 * Les composants de section sont chargés de manière asynchrone (lazy loading).
 * Cela réduit la taille du bundle JavaScript initial, ce qui accélère le temps de
 * chargement perçu par l'utilisateur (First Contentful Paint) et améliore le score
 * de performance (ex: Lighthouse).
 */
const Hero = lazy(() => import('../components/home/Hero'));
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const ClassesSection = lazy(() => import('../components/home/ClassesSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const PricingSection = lazy(() => import('../components/home/PricingSection'));
const MapSection = lazy(() => import('../components/home/MapSection'));

// ==========================================================================
// COMPOSANT PRINCIPAL : HomePage
// ==========================================================================

const HomePage: React.FC = () => {
  /**
   * Définition des données structurées (Schema.org) pour la page d'accueil.
   * L'objet est typé avec l'interface `YogaStudioSchema` pour garantir la conformité
   * des données. Ces données aident les moteurs de recherche à comprendre notre activité
   * et peuvent améliorer notre affichage dans les résultats de recherche (SEO local).
   */
  const yogaStudioSchema: YogaStudioSchema = {
    '@context': 'https://schema.org',
    '@type': 'YogaStudio',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-512x512.png`,
    image: `${siteConfig.url}/og-image-yoga.jpg`,
    description: siteConfig.metaDescription,
    telephone: '+33123456789',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Rue des Abbesses',
      addressLocality: 'Paris',
      postalCode: '75018',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8864',
      longitude: '2.3381',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/studioelan',
      'https://www.instagram.com/studioelan',
    ],
  };

  /**
   * Le rendu JSX du composant.
   * L'ensemble des sections est encapsulé dans un unique `Suspense` pour une expérience
   * de chargement fluide et un seul `ErrorBoundary` pour une gestion centralisée des erreurs.
   */
  return (
    <>
      {/* Le composant SEO injecte toutes les métadonnées essentielles, y compris les données structurées. */}
      <SEO schemaData={yogaStudioSchema} />

      <ErrorBoundary fallback={<p>Une erreur inattendue est survenue sur la page d'accueil.</p>}>
        <Suspense fallback={<PageLoader />}>
          {/* La balise <main> est le conteneur principal du contenu unique de la page. */}
          <main>
            {/* 
              Chaque section est un point de repère sémantique.
              L'utilisation de la balise <section> avec un attribut aria-labelledby
              pointant vers le titre (h2) à l'intérieur de chaque composant de section
              améliore grandement l'accessibilité pour les lecteurs d'écran.
            */}
            <Hero />
            <AboutSection />
            <ClassesSection />
            <TestimonialsSection />
            <PricingSection />
            <MapSection />
          </main>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

// Exportation du composant pour son utilisation par le routeur de l'application.
export default HomePage;
