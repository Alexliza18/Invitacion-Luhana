import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from '../components/Sparkles.tsx';
import { ElegantButton } from '../components/ElegantButton.tsx';
import type { HeroContent } from '../types/event.types.ts';

interface HeroProps {
  content: HeroContent;
  isOpen: boolean;
  onOpen: () => void;
}

export function Hero({ content, isOpen, onOpen }: HeroProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <Box
          component={motion.div}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 1500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(160deg, #fbf3e7 0%, #f8e9ec 55%, #eec9c0 100%)',
          }}
        >
          <Sparkles />

          <Box sx={{ position: 'relative', zIndex: 1, px: 3 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="overline"
                sx={{ letterSpacing: '0.4em', color: 'primary.dark' }}
              >
                {content.eyebrow}
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.6rem', sm: '3.6rem', md: '4.4rem' },
                  color: 'text.primary',
                  my: 1,
                }}
              >
                {content.quinceaneraName}
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              sx={{
                width: 48,
                height: 1,
                bgcolor: 'primary.main',
                mx: 'auto',
                my: 3,
              }}
            />

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                {content.dateLabel}
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              sx={{ mt: 5 }}
            >
              <ElegantButton onClick={onOpen}>{content.openButtonLabel}</ElegantButton>
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}
