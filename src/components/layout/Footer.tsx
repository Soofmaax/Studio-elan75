import React from 'react';
import { Link } from 'react-router-dom';
import { Cog as Yoga, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/site';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Studio Info */}
          <div>
            <div className="flex items-center mb-4">
              <Yoga size={36} className="text-sage" />
              <span className="ml-2 font-serif text-2xl font-medium text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="mb-4 text-gray-300">
              Un espace zen et apaisant au cœur de Montmartre, où cultiver bien-être et harmonie à travers la pratique du yoga.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="text-gray-300 hover:text-sage transition-colors" />
              </a>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className="text-gray-300 hover:text-sage transition-colors" />
              </a>
              <a href={siteConfig.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube className="text-gray-300 hover:text-sage transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sage transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/cours" className="text-gray-300 hover:text-sage transition-colors">
                  Cours
                </Link>
              </li>
              <li>
                <Link to="/instructeurs" className="text-gray-300 hover:text-sage transition-colors">
                  Instructeurs
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-300 hover:text-sage transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-sage transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Horaires d'ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>7h00 - 21h00</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span>8h00 - 20h00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span>9h00 - 18h00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-sage mr-2 mt-1 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-sage mr-2 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-sage transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-sage mr-2 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sage transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link to="/mentions-legales" className="hover:text-sage transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-de-confidentialite" className="hover:text-sage transition-colors">
              Politique de confidentialité
            </Link>
            <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;