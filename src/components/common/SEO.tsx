/**
 * @file SEO.tsx
 * @version 2.0.0
 * @description Composant React pour gérer dynamiquement les balises meta SEO.
 * Ce composant est crucial pour la stratégie de référencement du site. Il utilise
 * `react-helmet-async` pour injecter de manière sécurisée les balises <title>, <meta>,
 * <link rel="canonical"> et les données structurées (JSON-LD) dans le <head> du document HTML.
 * Il est conçu pour être réutilisable sur toutes les pages de l'application.
 */

// ==========================================================================
// IMPORTS
// ==========================================================================

import React from 'react';
// react-helmet-async est une bibliothèque standard pour manipuler le <head> d'un document.
import { Helmet } from 'react-helmet-async';
// useLocation est utilisé pour déduire l'URL canonique si elle n'est pas fournie explicitement.
import { useLocation } from 'react-router-dom';

// Import de la configuration globale du site pour les valeurs par défaut.
import { siteConfig } from '../../config/site';

// ==========================================================================
// TYPESCRIPT INTERFACE
// ==========================================================================

/**
 * @interface SEOProps
 * @description Définit les propriétés acceptées par le composant SEO.
 * Toutes les propriétés sont optionnelles pour permettre l'utilisation de valeurs
 * par défaut définies dans `siteConfig`.
 */
interface SEOProps {
  /**
   * Le titre de la page. Sera concaténé avec le nom du site.
   * @type {string}
   * @example "Nos Cours de Yoga Vinyasa"
   */
  title?: string;

  /**
   * La méta-description de la page (environ 160 caractères).
   * @type {string}
   */
  description?: string;

  /**
   * L'URL de l'image à afficher lors du partage sur les réseaux sociaux (Open Graph).
   * Doit être une URL absolue.
   * @type {string}
   * @default L'image par défaut du site.
   */
  image?: string;

  /**
   * L'URL canonique de la page. Essentiel pour éviter le contenu dupliqué.
   * Si non fournie, elle est déduite de la route actuelle.
   * @type {string}
   * @example "https://www.studio-elan75.com/cours/vinyasa"
   */
  canonicalUrl?: string;

  /**
   * Un objet contenant les données structurées (Schema.org) au format JSON-LD.
   * @type {object}
   */
  schemaData?: object;
}

// ==========================================================================
// COMPOSANT PRINCIPAL : SEO
// ==========================================================================

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  canonicalUrl,
  schemaData,
}) => {
  // Récupère le chemin actuel de l'URL pour l'utiliser comme fallback.
  const { pathname } = useLocation();

  // Définition des valeurs SEO en utilisant les props ou les valeurs par défaut du siteConfig.
  // Cette approche garantit que les balises essentielles sont toujours présentes.
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const seoDesc = description || siteConfig.metaDescription;
  // L'URL canonique est soit celle fournie explicitement (préférable), soit reconstruite.
  const seoUrl = canonicalUrl || `${siteConfig.url}${pathname}`;
  // L'image doit être une URL absolue. On s'assure qu'elle l'est.
  const seoImage = image || `${siteConfig.url}${siteConfig.defaultOgImage}`;

  return (
    <Helmet
      // Ajoute la langue au tag <html>, une bonne pratique pour l'accessibilité et le SEO.
      htmlAttributes={{
        lang: 'fr',
      }}
      // Le titre par défaut, peut être surchargé par la balise <title> ci-dessous mais bon à avoir.
      defaultTitle={siteConfig.name}
      // Template pour le titre, ajoute le nom du site après chaque titre de page.
      titleTemplate={`%s | ${siteConfig.name}`}
    >
      {/* La balise <title> est la plus importante pour le SEO. */}
      <title>{title || siteConfig.name}</title>

      {/* Balises meta standards */}
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <link rel="canonical" href={seoUrl} />

      {/* Balises Open Graph (pour Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="fr_FR" />

      {/* Balises Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDesc} />
      <meta name="twitter:image" content={seoImage} />
      {/* Optionnel : Lier au compte Twitter du site si défini dans la config */}
      {siteConfig.twitterUsername && (
        <meta name="twitter:site" content={siteConfig.twitterUsername} />
      )}

      {/* Injection des données structurées (JSON-LD) si elles sont fournies. */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
