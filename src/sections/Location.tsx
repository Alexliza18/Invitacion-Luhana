import { Box, Container, Typography } from '@mui/material';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { ElegantButton } from '../components/ElegantButton.tsx';
import type { VenueInfo } from '../types/event.types.ts';

interface LocationProps {
  reception: VenueInfo;
}

export function Location({ reception }: LocationProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="xs">
        <SectionTitle eyebrow="¿Cómo llegar?" title="Ubicación" />
        <ScrollReveal>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {reception.address}
            </Typography>
            <ElegantButton
              startIcon={<FaMapMarkerAlt />}
              href={reception.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ubicación
            </ElegantButton>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
