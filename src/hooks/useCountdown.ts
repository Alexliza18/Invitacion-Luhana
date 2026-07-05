import { useEffect, useState } from 'react';
import { getCountdownParts, type CountdownParts } from '../utils/date.ts';

/** Ticks every second toward `targetIso`, cleaning up its interval on unmount. */
export function useCountdown(targetIso: string): CountdownParts {
  const [parts, setParts] = useState<CountdownParts>(() => getCountdownParts(targetIso));

  useEffect(() => {
    const interval = setInterval(() => {
      setParts(getCountdownParts(targetIso));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetIso]);

  return parts;
}
