import { Box, Container, Typography } from '@mui/material';
import { ScrollReveal } from '../components/ScrollReveal.tsx';

interface FooterProps {
  message: string;
  quinceaneraName: string;
}

export function Footer({ message, quinceaneraName }: FooterProps) {
  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Container maxWidth="xs">
        <ScrollReveal>
          <Typography variant="h4" sx={{ fontSize: '1.3rem', mb: 1.5 }}>
            {quinceaneraName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {message}
          </Typography>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
