import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = siteConfig.metaDescription,
  image = 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg',
  type = 'website'
}) => {
  const { pathname } = useLocation();
  const siteUrl = window.location.origin;
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;

  return (
    <Helmet>
      {/* Balises standards */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />

      {/* Open Graph */}
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Mots-clés */}
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />

      {/* Langue */}
      <html lang="fr" />
    </Helmet>
  );
};

export default SEO;