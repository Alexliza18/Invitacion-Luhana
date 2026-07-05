import type { ReactNode } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { FaChurch, FaGlassCheers } from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import type { VenueInfo } from '../types/event.types.ts';

interface EventInfoProps {
  ceremony: VenueInfo;
  reception: VenueInfo;
}

interface VenueCardProps {
  icon: ReactNode;
  label: string;
  venue: VenueInfo;
  delay: number;
}

function VenueCard({ icon, label, venue, delay }: VenueCardProps) {
  return (
    <ScrollReveal delay={delay} className="venue-card">
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          bgcolor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
          height: '100%',
        }}
      >
        <Box sx={{ color: 'primary.main', fontSize: 28, mb: 1.5 }}>{icon}</Box>
        <Typography variant="overline" sx={{ letterSpacing: '0.25em', color: 'primary.dark' }}>
          {label}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: '1.3rem', my: 1 }}>
          {venue.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {venue.date} · {venue.time}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
          {venue.address}
        </Typography>
      </Box>
    </ScrollReveal>
  );
}

export function EventInfo({ ceremony, reception }: EventInfoProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <SectionTitle eyebrow="Detalles" title="El Evento" />
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          <Box sx={{ flex: 1 }}>
            <VenueCard icon={<FaChurch />} label="Ceremonia" venue={ceremony} delay={0} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <VenueCard icon={<FaGlassCheers />} label="Recepción" venue={reception} delay={0.15} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
