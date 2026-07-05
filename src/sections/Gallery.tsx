import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { Lightbox } from '../components/Lightbox.tsx';
import { useLightbox } from '../hooks/useLightbox.ts';
import type { GalleryImage } from '../types/event.types.ts';

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const lightbox = useLightbox(images.length);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <SectionTitle eyebrow="Momentos" title="Galería" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
            gap: { xs: 1.5, sm: 2 },
          }}
        >
          {images.map((image, index) => (
            <Box
              key={image.id}
              component={motion.button}
              onClick={() => lightbox.openAt(index)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Ver ${image.alt}`}
              sx={{
                p: 0,
                border: 'none',
                cursor: 'pointer',
                aspectRatio: '4 / 5',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                loading="lazy"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      <Lightbox
        images={images}
        activeIndex={lightbox.activeIndex}
        isOpen={lightbox.isOpen}
        onClose={lightbox.close}
        onNext={lightbox.next}
        onPrevious={lightbox.previous}
      />
    </Box>
  );
}
