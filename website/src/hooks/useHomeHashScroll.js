import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../lib/inPageScroll';

/**
 * After navigating to /#section from another route, scroll the target into view once DOM is ready.
 */
export function useHomeHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') return;
    const id = location.hash?.replace(/^#/, '');
    if (!id) return;

    const t = window.setTimeout(() => {
      scrollToSection(id);
    }, 80);

    return () => clearTimeout(t);
  }, [location.pathname, location.hash, location.key]);
}
