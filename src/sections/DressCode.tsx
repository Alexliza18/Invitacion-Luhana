import { Box, Container, Typography } from '@mui/material';
import { FaUserTie } from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import type { DressCodeContent } from '../types/event.types.ts';

interface DressCodeProps {
  content: DressCodeContent;
}

export function DressCode({ content }: DressCodeProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xs">
        <SectionTitle title={content.title} />
        <ScrollReveal>
          <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ color: 'primary.main', fontSize: 32, mb: 1.5 }}>
              <FaUserTie />
            </Box>
            <Typography variant="h4" sx={{ fontSize: '1.4rem', mb: 1 }}>
              {content.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {content.description}
            </Typography>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
