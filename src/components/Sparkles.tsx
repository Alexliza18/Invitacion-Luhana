import { useMemo } from 'react';
import { Box } from '@mui/material';

interface SparklesProps {
  count?: number;
}

interface Dot {
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

/** A handful of softly floating gold dots — a subtle luxury accent, not a particle engine. */
export function Sparkles({ count = 18 }: SparklesProps) {
  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    [count],
  );

  return (
    <Box
      aria-hidden
      sx={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}
    >
      {dots.map((dot, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            opacity: 0.15,
            animation: `sparkle-float ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
          }}
        />
      ))}
    </Box>
  );
}
