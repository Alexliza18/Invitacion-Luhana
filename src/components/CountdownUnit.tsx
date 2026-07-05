import { Box, Typography } from '@mui/material';

interface CountdownUnitProps {
  value: number;
  label: string;
}

export function CountdownUnit({ value, label }: CountdownUnitProps) {
  return (
    <Box
      sx={{
        width: { xs: 68, sm: 90 },
        py: { xs: 2, sm: 3 },
        border: '1px solid',
        borderColor: 'primary.main',
        bgcolor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: '1.6rem', sm: '2.2rem' }, color: 'primary.dark', lineHeight: 1 }}
      >
        {String(value).padStart(2, '0')}
      </Typography>
      <Typography
        variant="caption"
        sx={{ letterSpacing: '0.15em', textTransform: 'uppercase', color: 'text.secondary' }}
      >
        {label}
      </Typography>
    </Box>
  );
}
