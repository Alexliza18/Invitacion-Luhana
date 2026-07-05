import { Box, Container, Stack } from '@mui/material';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { CountdownUnit } from '../components/CountdownUnit.tsx';
import { useCountdown } from '../hooks/useCountdown.ts';

interface CountdownProps {
  targetIso: string;
}

export function Countdown({ targetIso }: CountdownProps) {
  const { days, hours, minutes, seconds } = useCountdown(targetIso);

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <SectionTitle eyebrow="Falta muy poco" title="Cuenta Regresiva" />
        <ScrollReveal delay={0.15}>
          <Stack direction="row" spacing={{ xs: 1.5, sm: 3 }} sx={{ justifyContent: 'center' }}>
            <CountdownUnit value={days} label="Días" />
            <CountdownUnit value={hours} label="Horas" />
            <CountdownUnit value={minutes} label="Min" />
            <CountdownUnit value={seconds} label="Seg" />
          </Stack>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
