import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cog as Yoga, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../config/site';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Cours', path: '/cours' },
    { name: 'Instructeurs', path: '/instructeurs' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Yoga 
            size={36} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-sage dark:text-sage-dark' : 'text-sage'
            }`} 
          />
          <span 
            className={`ml-2 font-serif text-2xl font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-800 dark:text-white' 
                : 'text-white'
            }`}
          >
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link text-base ${
                isScrolled 
                  ? isActive(link.path) 
                    ? 'text-sage dark:text-sage-dark after:w-full' 
                    : 'text-gray-700 dark:text-gray-300' 
                  : isActive(link.path) 
                    ? 'text-white after:bg-white after:w-full' 
                    : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/reservation">
            <Button variant="primary" size="md">
              Réserver
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-sage dark:text-sage-dark p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`py-2 px-4 rounded-md ${
                    isActive(link.path) 
                      ? 'bg-sage/10 dark:bg-sage-dark/10 text-sage dark:text-sage-dark' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/reservation" className="mt-2">
                <Button variant="primary" size="md" isFullWidth>
                  Réserver
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;