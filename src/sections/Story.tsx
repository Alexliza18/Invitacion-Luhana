import { Box, Container, Typography } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import type { StoryContent } from '../types/event.types.ts';

interface StoryProps {
  content: StoryContent;
}

export function Story({ content }: StoryProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <SectionTitle title={content.title} />
        {content.paragraphs.map((paragraph, index) => (
          <ScrollReveal key={index} delay={index * 0.15}>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', color: 'text.secondary', mb: 3 }}
            >
              {paragraph}
            </Typography>
          </ScrollReveal>
        ))}
      </Container>
    </Box>
  );
}
