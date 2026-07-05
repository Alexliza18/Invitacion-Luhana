import { IconButton } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { scrollToTop, useScrollTop } from '../hooks/useScrollTop.ts';

export function BackToTop() {
  const isVisible = useScrollTop(400);

  return (
    <AnimatePresence>
      {isVisible && (
        <IconButton
          component={motion.button}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          aria-label="Volver arriba"
          sx={{
            position: 'fixed',
            bottom: { xs: 20, md: 28 },
            left: { xs: 20, md: 28 },
            zIndex: 1200,
            width: 48,
            height: 48,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            color: 'primary.dark',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            '&:hover': { bgcolor: 'background.paper' },
          }}
        >
          <FaArrowUp size={15} />
        </IconButton>
      )}
    </AnimatePresence>
  );
}
