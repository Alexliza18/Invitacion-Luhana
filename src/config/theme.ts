import { createTheme } from '@mui/material/styles';

/**
 * Palette: warm white, rosé, and a muted gold accent — kept deliberately
 * restrained so the gold never reads as "loud".
 */
const palette = {
  blush: '#f8e9ec',
  rose: '#eab8c0',
  roseDark: '#c98d97',
  gold: '#c9a24b',
  goldLight: '#e8d4a8',
  cream: '#fbf3e7',
  ink: '#3a2e2b',
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.gold, light: palette.goldLight, dark: '#a9822f' },
    secondary: { main: palette.rose, light: palette.blush, dark: palette.roseDark },
    background: { default: palette.cream, paper: '#ffffff' },
    text: { primary: palette.ink, secondary: '#7a6a63' },
  },
  shape: { borderRadius: 2 },
  typography: {
    fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 600, letterSpacing: '0.02em' },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 500 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 500 },
    body1: { fontWeight: 300, lineHeight: 1.8 },
    button: { textTransform: 'none', letterSpacing: '0.08em', fontWeight: 400 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 32px',
        },
        outlined: {
          borderWidth: 1,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const eventPalette = palette;
