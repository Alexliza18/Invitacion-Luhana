import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

interface LoaderProps {
  visible: boolean;
  quinceaneraName: string;
}

/** Full-screen splash shown while fonts/assets settle, before the Hero is revealed. */
export function Loader({ visible, quinceaneraName }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <Box
          component={motion.div}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          role="status"
          aria-label="Cargando invitación"
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            bgcolor: 'background.default',
          }}
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              border: '1px solid',
              borderColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontSize: '1.4rem', color: 'primary.dark' }}>
              {quinceaneraName.charAt(0)}
            </Typography>
          </Box>
          <Typography
            variant="overline"
            sx={{ letterSpacing: '0.35em', color: 'text.secondary' }}
          >
            Preparando tu invitación
          </Typography>
        </Box>
      )}
    </AnimatePresence>
  );
}
