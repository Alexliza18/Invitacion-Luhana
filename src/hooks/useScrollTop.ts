import { useEffect, useState } from 'react';

/** Reports whether the page has been scrolled past `threshold` px, for a "back to top" FAB. */
export function useScrollTop(threshold = 400): boolean {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsPastThreshold(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPastThreshold;
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
