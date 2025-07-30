import { Instructor } from '../types';

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Sophie Dubois',
    bio: 'Sophie enseigne le yoga depuis 15 ans. Spécialisée dans l\'accompagnement des femmes, elle mêle douceur, précision et écoute profonde.',
    image: 'https://images.pexels.com/photos/7592961/pexels-photo-7592961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    specialties: ['Vinyasa', 'Yoga Prénatal', 'Relaxation'],
    certifications: [
      'RYT 500 (Yoga Alliance)',
      'Spécialisation Prénatal (Institut Yoga Paris)',
      'Formation en Hypnobirthing'
    ],
    approach: 'Favoriser la reconnexion au corps par une pratique fluide et intuitive.',
    background: 'Ancienne danseuse contemporaine, elle s\'est formée au yoga après une blessure.',
    schedule: [
      { day: 'Lundi', time: '10:00', duration: 90 },
      { day: 'Jeudi', time: '18:30', duration: 90 }
    ],
    testimonials: [
      {
        text: 'Sophie m\'a accompagnée tout au long de ma grossesse avec bienveillance.',
        author: 'Marie L.',
        role: 'Élève en yoga prénatal'
      }
    ],
    articles: [
      { title: 'Le yoga prénatal en douceur', link: '/blog/yoga-prenatal-douceur' },
      { title: 'Respirer pour mieux vivre', link: '/blog/respiration-yoga' }
    ],
    socials: {
      instagram: 'https://instagram.com/sophie.dubois.yoga',
      linkedin: 'https://linkedin.com/in/sophiedubois'
    }
  },
  {
    id: '2',
    name: 'Jean Dupont',
    bio: 'Jean enseigne un yoga ancré et accessible, avec un sens de l\'humour fin et une grande attention au souffle.',
    image: 'https://images.pexels.com/photos/4325462/pexels-photo-4325462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    specialties: ['Hatha', 'Méditation', 'Yoga pour hommes'],
    certifications: [
      'Sivananda',
      'MBSR (Mindfulness-Based Stress Reduction)',
      'Formation avancée en méditation'
    ],
    approach: 'Simplicité, régularité, et recherche d\'équilibre intérieur.',
    background: 'Ancien consultant, il s\'est reconverti après un voyage initiatique en Inde.',
    schedule: [
      { day: 'Mardi', time: '19:00', duration: 90 },
      { day: 'Samedi', time: '11:00', duration: 90 }
    ],
    testimonials: [
      {
        text: 'Jean m\'a appris à respirer pour de vrai.',
        author: 'Pierre M.',
        role: 'Élève en Hatha Yoga'
      }
    ],
    articles: [
      { title: 'Pourquoi le yoga est fait pour les hommes aussi', link: '/blog/yoga-hommes' },
      { title: 'Méditer sans pression', link: '/blog/meditation-debutant' }
    ],
    socials: {
      linkedin: 'https://linkedin.com/in/jeandupont'
    }
  },
  {
    id: '3',
    name: 'Lisa Moreau',
    bio: 'Lisa mêle Yin Yoga, énergétique et soins du féminin sacré. Son approche est subtile, profonde et transformatrice.',
    image: 'https://images.pexels.com/photos/7592776/pexels-photo-7592776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    specialties: ['Yin Yoga', 'Yoga Énergétique', 'Féminin sacré'],
    certifications: [
      'Yin Yoga (Biff Mithoefer)',
      'Reiki niveau 2',
      'Formation en énergétique chinoise'
    ],
    approach: 'Tenir l\'espace pour accueillir l\'émotion et l\'intuition.',
    background: 'Ancienne infirmière, elle se reconvertit dans le bien-être holistique.',
    schedule: [
      { day: 'Mercredi', time: '20:00', duration: 90 },
      { day: 'Dimanche', time: '17:00', duration: 90 }
    ],
    testimonials: [
      {
        text: 'Une expérience de reconnexion intense.',
        author: 'Sophie R.',
        role: 'Élève en Yin Yoga'
      }
    ],
    articles: [
      { title: 'Yin Yoga : l\'art du lâcher-prise', link: '/blog/yin-yoga-lacher-prise' },
      { title: 'Cycles féminins et pratiques douces', link: '/blog/cycles-feminins-yoga' }
    ],
    socials: {
      instagram: 'https://instagram.com/lisa.moreau.yoga'
    }
  },
  {
    id: '4',
    name: 'Karim Benali',
    bio: 'Karim enseigne un yoga dynamique et sportif, inspiré par ses années d\'arts martiaux. Il met l\'accent sur l\'alignement et la force intérieure.',
    image: 'https://images.pexels.com/photos/4325479/pexels-photo-4325479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    specialties: ['Ashtanga', 'Power Yoga', 'Yoga & Mobilité'],
    certifications: [
      'Ashtanga Yoga (KPJAYI Mysore)',
      'Mobilité fonctionnelle (FRC)',
      'Ceinture noire 3e dan en Karaté'
    ],
    approach: 'Discipline, rigueur, dépassement de soi en conscience.',
    background: 'Ancien coach sportif et pratiquant de jiu-jitsu brésilien.',
    schedule: [
      { day: 'Lundi', time: '19:00', duration: 90 },
      { day: 'Vendredi', time: '07:30', duration: 90 }
    ],
    testimonials: [
      {
        text: 'Grâce à Karim j\'ai trouvé une vraie puissance mentale et physique.',
        author: 'Thomas B.',
        role: 'Élève en Power Yoga'
      }
    ],
    articles: [
      { title: 'Yoga et mobilité pour athlètes', link: '/blog/yoga-athletes' },
      { title: 'Construire sa pratique au quotidien', link: '/blog/pratique-quotidienne' }
    ],
    socials: {
      instagram: 'https://instagram.com/karim.benali.yoga',
      youtube: 'https://youtube.com/@karimbenaliyoga'
    }
  }
];