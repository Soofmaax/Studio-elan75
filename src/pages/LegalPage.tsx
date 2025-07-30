import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

const LegalPage = () => {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title after:mx-auto text-center mb-12">Mentions Légales</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Informations légales</h2>
              <p className="mb-4">
                Studio Élan<br />
                SARL au capital de 10 000€<br />
                15 Rue des Abbesses<br />
                75018 Paris<br />
                SIRET : 123 456 789 00042<br />
                N° TVA Intracommunautaire : FR 42 123456789<br />
                RCS Paris B 123 456 789
              </p>
              <p className="mb-4">
                Téléphone : {siteConfig.phone}<br />
                Email : {siteConfig.email}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Directeur de la publication</h2>
              <p>
                Sophie Dubois<br />
                En qualité de gérante<br />
                Email : direction@studio-elan.fr
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Hébergement du site</h2>
              <p>
                Netlify, Inc.<br />
                44 Montgomery Street, Suite 300<br />
                San Francisco, California 94104<br />
                support@netlify.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Propriété intellectuelle</h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (structure, textes, images, logos, base de données...) est protégé par le droit d'auteur. Toute reproduction, totale ou partielle, de ce site est strictement interdite sans autorisation expresse et préalable de Studio Élan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Données personnelles</h2>
              <p className="mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits ou pour toute question, contactez notre Délégué à la Protection des Données :
              </p>
              <p>
                Email : dpo@studio-elan.fr<br />
                Adresse : 15 Rue des Abbesses, 75018 Paris
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Assurance professionnelle</h2>
              <p>
                AXA France IARD<br />
                Police n° 0000000000<br />
                313, Terrasses de l'Arche<br />
                92727 Nanterre Cedex
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Médiation</h2>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du code de la consommation, notre entreprise a mis en place un dispositif de médiation de la consommation. L'entité de médiation retenue est : CNPM - MÉDIATION - CONSOMMATION. En cas de litige, vous pouvez déposer votre réclamation sur son site : www.cnpm-mediation-consommation.eu ou par voie postale en écrivant à CNPM - MÉDIATION - CONSOMMATION - 27 avenue de la Libération - 42400 Saint-Chamond.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;