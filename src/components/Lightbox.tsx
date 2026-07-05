import { useEffect } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import type { GalleryImage } from '../types/event.types.ts';

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Lightbox({ images, activeIndex, isOpen, onClose, onNext, onPrevious }: LightboxProps) {
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrevious]);

  if (!activeImage) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="lg"
      slotProps={{
        paper: {
          sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible' },
        },
      }}
    >
      <Box sx={{ position: 'relative', outline: 'none' }}>
        <IconButton
          onClick={onClose}
          aria-label="Cerrar galería"
          sx={{
            position: 'absolute',
            top: -48,
            right: 0,
            color: 'common.white',
          }}
        >
          <FaTimes />
        </IconButton>

        <IconButton
          onClick={onPrevious}
          aria-label="Imagen anterior"
          sx={{
            position: 'absolute',
            left: { xs: -8, md: -56 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
          }}
        >
          <FaChevronLeft />
        </IconButton>

        <AnimatePresence mode="wait">
          <Box
            component={motion.img}
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.alt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            sx={{
              maxHeight: '80vh',
              maxWidth: '90vw',
              display: 'block',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          />
        </AnimatePresence>

        <IconButton
          onClick={onNext}
          aria-label="Imagen siguiente"
          sx={{
            position: 'absolute',
            right: { xs: -8, md: -56 },
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'common.white',
          }}
        >
          <FaChevronRight />
        </IconButton>
      </Box>
    </Dialog>
  );
}
