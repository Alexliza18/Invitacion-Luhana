import { Box, Container, Stack } from '@mui/material';
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { ElegantButton } from '../components/ElegantButton.tsx';
import { buildGoogleCalendarUrl, buildOutlookCalendarUrl, downloadIcsFile } from '../utils/calendar.ts';
import type { CalendarMeta } from '../types/event.types.ts';

interface AddToCalendarProps {
  meta: CalendarMeta;
}

export function AddToCalendar({ meta }: AddToCalendarProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="xs">
        <SectionTitle eyebrow="No lo olvides" title="Agregar al Calendario" />
        <ScrollReveal>
          <Stack spacing={2}>
            <ElegantButton
              startIcon={<FaGoogle />}
              href={buildGoogleCalendarUrl(meta)}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
            >
              Google Calendar
            </ElegantButton>
            <ElegantButton
              startIcon={<FaApple />}
              onClick={() => downloadIcsFile(meta, 'xv-anos.ics')}
              fullWidth
            >
              Apple Calendar
            </ElegantButton>
            <ElegantButton
              startIcon={<FaMicrosoft />}
              href={buildOutlookCalendarUrl(meta)}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
            >
              Outlook
            </ElegantButton>
          </Stack>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
