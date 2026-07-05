import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}
    >
      {eyebrow && (
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', letterSpacing: '0.3em', fontWeight: 300 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h2" component="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' } }}>
        {title}
      </Typography>
      <Box
        sx={{
          width: 64,
          height: 1,
          bgcolor: 'primary.main',
          mx: 'auto',
          mt: 2,
          opacity: 0.6,
        }}
      />
    </Box>
  );
}
