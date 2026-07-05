import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FaMusic, FaPause } from 'react-icons/fa';
import { useAudioPlayer } from '../hooks/useAudioPlayer.ts';

interface MusicPlayerProps {
  src: string;
  title: string;
}

export function MusicPlayer({ src, title }: MusicPlayerProps) {
  const { isPlaying, toggle } = useAudioPlayer(src, true);

  return (
    <IconButton
      component={motion.button}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      aria-label={isPlaying ? `Pausar ${title}` : `Reproducir ${title}`}
      aria-pressed={isPlaying}
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 28 },
        right: { xs: 20, md: 28 },
        zIndex: 1200,
        width: 52,
        height: 52,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'primary.main',
        color: 'primary.dark',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        '&:hover': { bgcolor: 'background.paper' },
      }}
    >
      {isPlaying ? <FaPause size={16} /> : <FaMusic size={16} />}
    </IconButton>
  );
}
