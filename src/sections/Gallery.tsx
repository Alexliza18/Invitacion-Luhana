import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { Sparkles } from '../components/Sparkles.tsx';
import { Lightbox } from '../components/Lightbox.tsx';
import { useLightbox } from '../hooks/useLightbox.ts';
import type { GalleryImage } from '../types/event.types.ts';

interface GalleryProps {
  images: GalleryImage[];
  hashtag: string;
}

const cornerStyles = [
  { top: -8, left: -8, borderTop: '2px solid', borderLeft: '2px solid' },
  { top: -8, right: -8, borderTop: '2px solid', borderRight: '2px solid' },
  { bottom: -8, left: -8, borderBottom: '2px solid', borderLeft: '2px solid' },
  { bottom: -8, right: -8, borderBottom: '2px solid', borderRight: '2px solid' },
];

export function Gallery({ images, hashtag }: GalleryProps) {
  const lightbox = useLightbox(images.length);
  const [image] = images;

  if (!image) return null;

  return (
    <Box
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}
    >
      <Container maxWidth="xs" sx={{ position: 'relative' }}>
        <SectionTitle eyebrow="Un Recuerdo" title="Galería" />

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          sx={{ position: 'relative', maxWidth: 320, mx: 'auto' }}
        >
          <Sparkles count={14} />

          <Box
            component={motion.button}
            onClick={() => lightbox.openAt(0)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Ver ${image.alt}`}
            sx={{
              position: 'relative',
              display: 'block',
              width: '100%',
              p: '10px',
              border: '1px solid',
              borderColor: 'primary.main',
              bgcolor: 'background.paper',
              cursor: 'pointer',
              boxShadow: '0 16px 40px rgba(0,0,0,0.14)',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 4,
                border: '1px solid',
                borderColor: 'primary.light',
                pointerEvents: 'none',
              },
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          {cornerStyles.map((corner, index) => (
            <Box
              key={index}
              aria-hidden
              sx={{ position: 'absolute', width: 20, height: 20, borderColor: 'primary.main', ...corner }}
            />
          ))}
        </Box>

        <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary', mt: 5 }}>
          Comparte tus fotos de la celebración con{' '}
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
            {hashtag}
          </Box>
        </Typography>
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
