import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../stores/themeStore';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label="Changer le thème"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;