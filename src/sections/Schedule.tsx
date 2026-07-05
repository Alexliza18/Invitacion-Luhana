import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle.tsx';
import type { ScheduleItem } from '../types/event.types.ts';

interface ScheduleProps {
  items: ScheduleItem[];
}

export function Schedule({ items }: ScheduleProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xs">
        <SectionTitle eyebrow="Programa" title="Cronograma" />
        <Box sx={{ position: 'relative', pl: 4 }}>
          <Box
            sx={{
              position: 'absolute',
              left: 7,
              top: 8,
              bottom: 8,
              width: '1px',
              bgcolor: 'primary.main',
              opacity: 0.4,
            }}
          />
          {items.map((item, index) => (
            <Box
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              sx={{ position: 'relative', pb: index === items.length - 1 ? 0 : 4 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: -33,
                  top: 4,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: 'primary.dark', letterSpacing: '0.2em' }}
              >
                {item.time}
              </Typography>
              <Typography variant="h4" sx={{ fontSize: '1.2rem' }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
