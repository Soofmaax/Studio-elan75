import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

// Interface pour les données structurées
interface SchemaData {
  [key: string]: any;
}

// Typage plus précis pour la directive robots
type RobotsDirective = 'index, follow' | 'noindex, follow' | 'index, nofollow' | 'noindex, nofollow';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  schemaData?: SchemaData;
  robots?: RobotsDirective; // Prop améliorée pour la gestion des robots
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.metaDescription,
  image = `${siteConfig.url}/og-image-yoga.jpg`,
  type = 'website',
  schemaData,
  robots = 'index, follow' // La valeur par défaut la plus courante
}) => {
  const { pathname } = useLocation();
  const siteUrl = siteConfig.url;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      {/* Balises standards */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />

      {/* Gestion avancée de l'indexation */}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mots-clés */}
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />

      {/* 
        Données structurées (JSON-LD)
        AVERTISSEMENT DE SÉCURITÉ : Assurez-vous que l'objet `schemaData` est généré
        en interne et ne provient pas d'une entrée utilisateur non filtrée
        pour prévenir les risques d'injection XSS.
      */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
