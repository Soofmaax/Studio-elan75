import { YogaClass } from '../types';

export const yogaClasses: YogaClass[] = [
  {
    id: 'prenatal',
    title: 'Yoga Prénatal',
    type: 'prenatal',
    description: 'Le yoga prénatal est spécialement conçu pour les femmes enceintes, offrant une pratique douce qui renforce le corps tout en préparant à l\'accouchement. Nos séances combinent des postures adaptées, des techniques de respiration et de la relaxation pour soulager les tensions, améliorer la circulation et créer une connexion profonde avec votre bébé.',
    benefits: [
      'Soulagement des douleurs lombaires et des tensions',
      'Amélioration de la posture et de l\'équilibre',
      'Préparation du corps et de l\'esprit pour l\'accouchement',
      'Connexion profonde avec votre bébé',
      'Réduction du stress et de l\'anxiété liés à la grossesse'
    ],
    schedule: [
      { day: 'Lundi', time: '10:00', duration: 75 },
      { day: 'Jeudi', time: '17:30', duration: 75 },
      { day: 'Samedi', time: '09:00', duration: 75 }
    ],
    image: 'https://images.pexels.com/photos/396133/pexels-photo-396133.jpeg',
    instructor: 'Sophie Moreau'
  },
  {
    id: 'gentle',
    title: 'Yoga Doux',
    type: 'gentle',
    description: 'Notre yoga doux est idéal pour les débutants ou ceux qui recherchent une pratique moins intense. Ces cours se concentrent sur l\'alignement correct, des étirements en douceur et des techniques de respiration pour améliorer la flexibilité et réduire le stress. Parfait pour tous les âges et niveaux de forme physique.',
    benefits: [
      'Amélioration de la flexibilité et de la mobilité',
      'Réduction du stress et de l\'anxiété',
      'Renforcement doux des muscles',
      'Amélioration de la qualité du sommeil',
      'Augmentation de la conscience corporelle'
    ],
    schedule: [
      { day: 'Mardi', time: '09:30', duration: 60 },
      { day: 'Mercredi', time: '14:00', duration: 60 },
      { day: 'Vendredi', time: '19:00', duration: 60 },
      { day: 'Dimanche', time: '10:00', duration: 60 }
    ],
    image: 'https://images.pexels.com/photos/3822674/pexels-photo-3822674.jpeg',
    instructor: 'Jean Dupont'
  },
  {
    id: 'dynamic',
    title: 'Yoga Tonique',
    type: 'dynamic',
    description: 'Notre yoga tonique est un cours dynamique combinant mouvement fluide, force et respiration. Idéal pour ceux qui cherchent à être mis au défi physiquement tout en maintenant une conscience méditative. Ces séances améliorent l\'endurance, la force, la flexibilité et favorisent un sentiment de vitalité énergétique.',
    benefits: [
      'Renforcement musculaire et amélioration de l\'endurance',
      'Augmentation de l\'énergie et de la vitalité',
      'Détoxification du corps par la transpiration',
      'Amélioration de la concentration et de la clarté mentale',
      'Développement de la force intérieure et de la résilience'
    ],
    schedule: [
      { day: 'Lundi', time: '18:30', duration: 90 },
      { day: 'Mercredi', time: '07:00', duration: 90 },
      { day: 'Jeudi', time: '19:00', duration: 90 },
      { day: 'Samedi', time: '11:00', duration: 90 }
    ],
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
    instructor: 'Marc Lefèvre'
  },
  {
    id: 'children',
    title: 'Yoga Enfants',
    type: 'children',
    description: 'Notre yoga pour enfants combine jeu, imagination et mouvements yogiques pour créer une expérience amusante et éducative. À travers des postures inspirées par les animaux, des jeux de respiration et des moments de calme, les enfants développent force, coordination, confiance et techniques de gestion du stress d\'une manière ludique et accessible.',
    benefits: [
      'Développement de la concentration et de l\'attention',
      'Amélioration de la coordination et de l\'équilibre',
      'Apprentissage de techniques de gestion du stress',
      'Renforcement de la confiance en soi',
      'Favorise la créativité et l\'imagination'
    ],
    schedule: [
      { day: 'Mercredi', time: '15:30', duration: 45 },
      { day: 'Samedi', time: '14:00', duration: 45 }
    ],
    image: 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg',
    instructor: 'Émilie Rousseau'
  }
];