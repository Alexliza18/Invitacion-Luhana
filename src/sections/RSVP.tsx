import { useState, type FormEvent } from 'react';
import {
  Alert,
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { SectionTitle } from '../components/SectionTitle.tsx';
import { ScrollReveal } from '../components/ScrollReveal.tsx';
import { ElegantButton } from '../components/ElegantButton.tsx';
import { rsvpService } from '../services/rsvp/index.ts';
import { validateRsvpForm, isRsvpFormValid } from '../utils/validators.ts';
import type { RsvpFormData, RsvpFormErrors } from '../types/rsvp.types.ts';
import type { RsvpFieldLabels } from '../types/event.types.ts';

interface RSVPProps {
  labels: RsvpFieldLabels;
}

const initialForm: RsvpFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  guestCount: 1,
  attendance: 'yes',
  comments: '',
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export function RSVP({ labels }: RSVPProps) {
  const [form, setForm] = useState<RsvpFormData>(initialForm);
  const [errors, setErrors] = useState<RsvpFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  function updateField<K extends keyof RsvpFormData>(field: K, value: RsvpFormData[K]): void {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const validationErrors = validateRsvpForm(form);
    setErrors(validationErrors);
    if (!isRsvpFormValid(validationErrors)) return;

    setStatus('submitting');
    try {
      const result = await rsvpService.submitRSVP(form);
      if (result.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xs">
        <SectionTitle eyebrow="Confirmación" title="RSVP" />
        <ScrollReveal>
          {status === 'success' ? (
            <Alert severity="success" sx={{ borderRadius: 0 }}>
              <strong>{labels.successTitle}</strong>
              <br />
              {labels.successMessage}
            </Alert>
          ) : (
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'grid', gap: 2.5 }}>
              <TextField
                label={labels.firstName}
                value={form.firstName}
                onChange={(event) => updateField('firstName', event.target.value)}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
                fullWidth
                required
              />
              <TextField
                label={labels.lastName}
                value={form.lastName}
                onChange={(event) => updateField('lastName', event.target.value)}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
                fullWidth
                required
              />
              <TextField
                label={labels.phone}
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                error={Boolean(errors.phone)}
                helperText={errors.phone}
                type="tel"
                fullWidth
                required
              />
              <TextField
                label={labels.guestCount}
                value={form.guestCount}
                onChange={(event) => updateField('guestCount', Number(event.target.value))}
                error={Boolean(errors.guestCount)}
                helperText={errors.guestCount}
                type="number"
                slotProps={{ htmlInput: { min: 1, max: 10 } }}
                fullWidth
                required
              />

              <FormControl>
                <FormLabel id="attendance-label">{labels.attendance}</FormLabel>
                <RadioGroup
                  aria-labelledby="attendance-label"
                  row
                  value={form.attendance}
                  onChange={(event) =>
                    updateField('attendance', event.target.value as RsvpFormData['attendance'])
                  }
                >
                  <FormControlLabel value="yes" control={<Radio />} label={labels.attendanceYes} />
                  <FormControlLabel value="no" control={<Radio />} label={labels.attendanceNo} />
                </RadioGroup>
              </FormControl>

              <TextField
                label={labels.comments}
                value={form.comments}
                onChange={(event) => updateField('comments', event.target.value)}
                multiline
                minRows={3}
                fullWidth
              />

              {status === 'error' && (
                <Alert severity="error" sx={{ borderRadius: 0 }}>
                  {labels.errorMessage}
                </Alert>
              )}

              <ElegantButton type="submit" disabled={status === 'submitting'} fullWidth>
                {status === 'submitting' ? 'Enviando...' : labels.submit}
              </ElegantButton>
            </Box>
          )}
        </ScrollReveal>
      </Container>
    </Box>
  );
}
