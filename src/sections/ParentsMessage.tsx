import { Box, Container, Typography } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import type { ParentsMessageContent } from '../types/event.types.ts';

interface ParentsMessageProps {
  content: ParentsMessageContent;
}

export function ParentsMessage({ content }: ParentsMessageProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="sm">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} />
        <ScrollReveal>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontStyle: 'italic',
              whiteSpace: 'pre-line',
              mb: 4,
            }}
          >
            {content.message}
          </Typography>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', fontSize: '1.1rem', color: 'primary.main' }}
          >
            {content.signature}
          </Typography>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
