import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { siteConfig } from '../../config/site';
import { Loader } from '@googlemaps/js-api-loader';
import { apiConfig } from '../../config/apis';

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiConfig.google.maps.apiKey,
        version: 'weekly',
      });

      const google = await loader.load();
      const position = { lat: 48.884831, lng: 2.337669 }; // Coordonnées de la rue des Abbesses

      const map = new google.maps.Map(mapRef.current!, {
        center: position,
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#6B8E76' }]
          }
        ]
      });

      new google.maps.Marker({
        position,
        map,
        title: 'Studio Élan',
      });
    };

    initMap().catch(console.error);
  }, []);

  return (
    <section className="py-24 bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title after:content-[''] after:block after:w-16 after:h-1 after:bg-sage after:mt-2 after:mb-6">
              Nous Trouver
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-start mb-4">
                <MapPin size={24} className="text-sage mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Adresse</h3>
                  <p>{siteConfig.address}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Métro: Abbesses (ligne 12) ou Blanche (ligne 2)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Clock size={24} className="text-sage mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Horaires d'ouverture</h3>
                  <div className="grid grid-cols-2 gap-x-4">
                    <p>Lundi - Vendredi</p>
                    <p>7h00 - 21h00</p>
                    <p>Samedi</p>
                    <p>8h00 - 20h00</p>
                    <p>Dimanche</p>
                    <p>9h00 - 18h00</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone size={24} className="text-sage mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                  <p>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-sage transition-colors">
                      {siteConfig.phone}
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail size={24} className="text-sage mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-sage transition-colors">
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  <a 
                    href={siteConfig.socials.instagram} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-sage/10 p-2 rounded-full hover:bg-sage/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} className="text-sage" />
                  </a>
                  <a 
                    href={siteConfig.socials.facebook} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-sage/10 p-2 rounded-full hover:bg-sage/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} className="text-sage" />
                  </a>
                  <a 
                    href={siteConfig.socials.youtube} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-sage/10 p-2 rounded-full hover:bg-sage/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} className="text-sage" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full min-h-[400px]"
          >
            <div ref={mapRef} className="w-full h-full rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;