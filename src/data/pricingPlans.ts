import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: '1',
    title: 'Cours Unique',
    price: 55,
    features: [
      'Accès à tous les types de cours',
      'Réservation jusqu\'à 7 jours à l\'avance',
      'Annulation gratuite jusqu\'à 24h avant'
    ],
    popular: false,
    buttonText: 'Réserver un cours'
  },
  {
    id: '2',
    title: 'Pack 20 Cours',
    price: 950,
    pricePerClass: 47.5,
    features: [
      'Économisez 150€ (13.6%)',
      'Validité 6 mois',
      'Réservation jusqu\'à 14 jours à l\'avance',
      'Annulation gratuite jusqu\'à 12h avant',
      'Accès prioritaire aux événements spéciaux'
    ],
    popular: true,
    buttonText: 'Acheter ce pack'
  },
  {
    id: '3',
    title: 'Pack 50 Cours',
    price: 2200,
    pricePerClass: 44,
    features: [
      'Économisez 550€ (20%)',
      'Validité 12 mois',
      'Réservation jusqu\'à 30 jours à l\'avance',
      'Annulation gratuite jusqu\'à 6h avant',
      'Accès prioritaire aux événements spéciaux',
      '2 cours privés offerts'
    ],
    popular: false,
    buttonText: 'Acheter ce pack'
  }
];