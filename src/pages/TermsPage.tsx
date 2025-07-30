import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

const TermsPage = () => {
  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title after:mx-auto text-center mb-12">Conditions Générales de Vente</h1>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 1 - Objet et champ d'application</h2>
              <p>
                Les présentes conditions générales de vente s'appliquent à toutes les prestations de services conclues par Studio Élan auprès des clients particuliers et professionnels, quelles que soient les clauses pouvant figurer sur les documents du Client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 2 - Prix et modalités de paiement</h2>
              <p className="mb-4">
                Les prix des services sont indiqués en euros TTC. Le paiement est exigible immédiatement à la commande, y compris pour les produits en précommande.
              </p>
              <p>
                Les paiements seront effectués par carte bancaire ou autre moyen mis à la disposition du Client. Les paiements sont sécurisés et réalisés via notre prestataire de paiement Stripe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 3 - Réservations et annulations</h2>
              <p className="mb-4">
                Toute réservation est nominative et ne peut être cédée. L'annulation est possible jusqu'à 24 heures avant le début du cours. Passé ce délai, le cours sera décompté ou facturé.
              </p>
              <p>
                En cas de force majeure dûment justifiée, le cours pourra être reporté sans frais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 4 - Forfaits et cartes</h2>
              <p>
                Les forfaits et cartes ont une durée de validité spécifique à compter de la date d'achat. Ils ne sont ni remboursables, ni échangeables, ni prolongeables, sauf cas exceptionnels à l'appréciation de la direction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 5 - Responsabilité et assurance</h2>
              <p className="mb-4">
                Le Client déclare avoir été informé des contre-indications à la pratique du yoga. Il s'engage à fournir un certificat médical de non contre-indication à la pratique du yoga datant de moins de 3 mois.
              </p>
              <p>
                Studio Élan décline toute responsabilité en cas d'accident survenu en dehors des heures de cours ou dû au non-respect des consignes de sécurité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 6 - Droit de rétractation</h2>
              <p>
                Conformément à l'article L.221-18 du Code de la consommation, le Client dispose d'un délai de 14 jours pour exercer son droit de rétractation. Ce délai court à compter du jour de la conclusion du contrat. Le droit de rétractation peut être exercé par email à {siteConfig.email} ou par courrier à l'adresse du studio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 7 - Protection des données personnelles</h2>
              <p>
                Les données personnelles collectées sont traitées conformément à notre politique de confidentialité, disponible sur notre site. Pour toute question concernant vos données personnelles, contactez notre DPO à dpo@studio-elan.fr.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 8 - Médiation et litiges</h2>
              <p className="mb-4">
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. Conformément à l'article L.612-1 du Code de la consommation, vous pouvez recourir gratuitement au service de médiation CNPM - MÉDIATION - CONSOMMATION.
              </p>
              <p>
                Pour tout litige non résolu à l'amiable, le tribunal compétent sera celui du lieu du domicile du défendeur ou du lieu d'exécution de la prestation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-sage mb-4">Article 9 - Modification des CGV</h2>
              <p>
                Studio Élan se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;