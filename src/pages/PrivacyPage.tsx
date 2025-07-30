import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

const PrivacyPage = () => {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title after:mx-auto text-center mb-12">Politique de Confidentialité</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Collecte des données personnelles</h2>
              <p className="mb-4">
                Dans le cadre de son activité, {siteConfig.name} est amenée à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". {siteConfig.name} attache une grande importance au respect de la vie privée, et n'utilise que des données de manière responsable et confidentielle et dans une finalité précise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Données collectées</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identité : nom, prénom</li>
                <li>Coordonnées : adresse email, numéro de téléphone</li>
                <li>Données de connexion : historique de réservations</li>
                <li>Données de paiement : historique des transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Utilisation des données</h2>
              <p className="mb-4">
                Les données que vous nous transmettez directement sont utilisées dans le but de :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vous permettre de réserver des cours de yoga</li>
                <li>Vous contacter en cas de modification ou annulation de cours</li>
                <li>Gérer vos abonnements et paiements</li>
                <li>Personnaliser votre expérience utilisateur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Base légale</h2>
              <p className="mb-4">
                Les données personnelles ne sont collectées qu'après consentement obligatoire de l'utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Durée de conservation</h2>
              <p className="mb-4">
                Les données personnelles sont conservées pendant une durée limitée et proportionnelle à la finalité pour laquelle elles sont collectées. Lorsque les données n'ont plus d'utilité pour la finalité prévue, elles sont supprimées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Vos droits</h2>
              <p className="mb-4">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Droit d'accès</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Contact</h2>
              <p>
                Pour toute demande concernant vos données personnelles, vous pouvez nous contacter à l'adresse suivante : {siteConfig.email}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;