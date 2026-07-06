import { Box, Container, Typography } from '@mui/material';
import { FaChurch } from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import type { VenueInfo } from '../types/event.types.ts';

interface EventInfoProps {
  venue: VenueInfo;
}

export function EventInfo({ venue }: EventInfoProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xs">
        <SectionTitle eyebrow="Detalles" title="El Evento" />
        <ScrollReveal className="venue-card">
          <Box
            sx={{
              p: { xs: 3, md: 4 },
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
            }}
          >
            <Box sx={{ color: 'primary.main', fontSize: 28, mb: 1.5 }}>
              <FaChurch />
            </Box>
            <Typography variant="overline" sx={{ letterSpacing: '0.25em', color: 'primary.dark' }}>
              Ceremonia y Recepción
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 600, mt: 1 }}>
              {venue.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {venue.address}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
              {venue.date}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              Ceremonia {venue.ceremonyTime} · Recepción {venue.receptionTime}
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
