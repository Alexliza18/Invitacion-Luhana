import { useEffect, useState, type ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../config/theme.ts';
import { Loader } from '../components/Loader.tsx';
import { eventConfig } from '../config/event.ts';

const MIN_SPLASH_DURATION_MS = 1200;

interface MainLayoutProps {
  children: ReactNode;
}

/** Provides the MUI theme and gates first paint behind a minimum-duration splash screen. */
export function MainLayout({ children }: MainLayoutProps) {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), MIN_SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loader visible={isSplashVisible} quinceaneraName={eventConfig.quinceaneraName} />
      {children}
    </ThemeProvider>
  );
}
