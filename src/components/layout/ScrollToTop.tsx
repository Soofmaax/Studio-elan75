import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de la page"
      className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10 pointer-events-none'
      } bg-sage dark:bg-sage-dark text-white hover:bg-sage-dark dark:hover:bg-sage`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;