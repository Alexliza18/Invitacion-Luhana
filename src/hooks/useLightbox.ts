import { useCallback, useState } from 'react';

export interface UseLightboxResult {
  isOpen: boolean;
  activeIndex: number;
  openAt: (index: number) => void;
  close: () => void;
  next: () => void;
  previous: () => void;
}

/** Tracks which item in a fixed-length collection (e.g. a gallery) is open in a lightbox. */
export function useLightbox(itemCount: number): UseLightboxResult {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % itemCount);
  }, [itemCount]);

  const previous = useCallback(() => {
    setActiveIndex((current) => (current - 1 + itemCount) % itemCount);
  }, [itemCount]);

  return { isOpen, activeIndex, openAt, close, next, previous };
}
