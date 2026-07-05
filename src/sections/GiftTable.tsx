import { Box, Container, Typography } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { ElegantButton } from '../components/ElegantButton.tsx';
import type { GiftTableContent } from '../types/event.types.ts';

interface GiftTableProps {
  content: GiftTableContent;
}

export function GiftTable({ content }: GiftTableProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="xs">
        <SectionTitle title={content.title} />
        <ScrollReveal>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src={content.image}
              alt={content.title}
              loading="lazy"
              sx={{ width: 160, height: 160, objectFit: 'cover', mx: 'auto', mb: 2.5 }}
            />
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              {content.description}
            </Typography>
            <ElegantButton href={content.buttonUrl} target="_blank" rel="noopener noreferrer">
              {content.buttonLabel}
            </ElegantButton>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
