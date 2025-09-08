import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop({ smooth = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [pathname, smooth]);

  return null;
}