import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Debounce scroll actions to prevent rapid state changes
    const timeoutId = setTimeout(() => {
    // Debounce scroll actions to prevent rapid state changes
    const timeoutId = setTimeout(() => {
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, 100); // Reduced delay and debounced

    return () => clearTimeout(timeoutId);
    }, 100); // Reduced delay and debounced

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default ScrollToSection;