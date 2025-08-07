/**
 * @file HomePage.tsx
 * @description La page d'accueil de l'application Studio Elan.
 * C'est la page la plus importante du site, elle sert de vitrine et doit
 * captiver l'utilisateur, présenter les offres clés et l'inciter à l'action.
 * Elle est construite en assemblant des composants de section dédiés pour une meilleure
 * lisibilité et maintenabilité.
 */

// ==========================================================================
// IMPORTS
// ==========================================================================

// Import de React pour la création de composants.
import React from 'react';

// Import du composant SEO pour gérer toutes les balises meta de la page.
// C'est la première chose à importer pour s'assurer que le SEO est pris en compte.
import SEO from '../components/common/SEO';

// Import des composants de section qui constituent la page d'accueil.
// Chaque section est un bloc autonome, ce qui rend la page facile à réorganiser.
import Hero from '../components/home/Hero';
import ClassesSection from '../components/home/ClassesSection';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import MapSection from '../components/home/MapSection';

// Import de la configuration du site pour accéder aux informations globales (nom, URL, etc.).
import { siteConfig } from '../config/site';

// ==========================================================================
// COMPOSANT PRINCIPAL : HomePage
// ==========================================================================

const HomePage: React.FC = () => {
  /**
   * Définition des données structurées (Schema.org) pour la page d'accueil.
   * C'est une étape cruciale pour le SEO avancé.
   * Nous utilisons le type 'YogaStudio' pour décrire précisément notre activité à Google.
   * Cela peut aider à obtenir des "Rich Snippets" (résultats de recherche enrichis)
   * et à améliorer notre visibilité dans les recherches locales.
   */
  const yogaStudioSchema = {
    // Le contexte indique la version du vocabulaire Schema.org utilisé.
    '@context': 'https://schema.org',
    // Le type spécifique de notre commerce local.
    '@type': 'YogaStudio',
    // Le nom officiel de notre studio.
    name: siteConfig.name,
    // L'URL canonique de notre site.
    url: siteConfig.url,
    // Le logo de l'entreprise.
    logo: `${siteConfig.url}/logo-512x512.png`,
    // Une image représentative du studio.
    image: `${siteConfig.url}/og-image-yoga.jpg`,
    // La description utilisée par les moteurs de recherche.
    description: siteConfig.metaDescription,
    // Le numéro de téléphone (fictif pour l'exemple ).
    telephone: '+33123456789',
    // Une indication de la gamme de prix.
    priceRange: '€€',
    // L'adresse physique du studio, essentielle pour le SEO local.
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Rue des Abbesses', // Adresse fictive
      addressLocality: 'Paris',
      postalCode: '75018',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    // Les coordonnées géographiques précises pour Google Maps.
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.8864',
      longitude: '2.3381',
    },
    // Les horaires d'ouverture.
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
    // Liens vers les réseaux sociaux de l'entreprise.
    sameAs: [
      'https://www.facebook.com/studioelan', // URL fictive
      'https://www.instagram.com/studioelan', // URL fictive
    ],
  };

  // Le rendu JSX du composant.
  return (
    <>
      {/*
        Le composant SEO est appelé en premier.
        Il ne rend aucun élément visible, mais injecte toutes les balises
        essentielles dans le <head> du document HTML.
        Pour la page d'accueil, nous ne passons pas de 'title' ou 'description'
        car nous voulons utiliser les valeurs par défaut définies dans siteConfig.
        Nous lui passons cependant nos données structurées.
      */}
      <SEO schemaData={yogaStudioSchema} />

      {/*
        La structure de la page est une simple succession de sections.
        Chaque composant de section gère sa propre logique et son propre balisage.
        Cette approche, appelée "Composition de composants", est au cœur de React
        et permet de créer des interfaces complexes de manière simple et déclarative.
      */}
      
      {/* Section Héros : La première impression, au-dessus de la ligne de flottaison. */}
      <Hero />

      {/* Section Cours : Présente les types de yoga proposés. */}
      <ClassesSection />

      {/* Section À Propos : Raconte l'histoire et la philosophie du studio. */}
      <AboutSection />

      {/* Section Témoignages : Affiche des avis clients pour renforcer la confiance. */}
      <TestimonialsSection />

      {/* Section Tarifs : Présente les offres et les abonnements. */}
      <PricingSection />

      {/* Section Carte : Affiche une carte interactive pour localiser le studio. */}
      <MapSection />
    </>
   );
};

// Exportation du composant pour qu'il puisse être utilisé par le routeur de l'application.
export default HomePage;
