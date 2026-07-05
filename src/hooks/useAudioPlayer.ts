import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseAudioPlayerResult {
  isPlaying: boolean;
  toggle: () => void;
}

/**
 * Wraps a single background-music `<audio>` element.
 *
 * Browsers block unmuted autoplay until the user has interacted with the
 * page, so `autoPlayOnMount` only works when this hook is first mounted as
 * a result of a click (e.g. the "Abrir Invitación" button) — that click is
 * the interaction browsers require. True autoplay before any interaction
 * is not achievable and would just fail silently, so we deliberately tie
 * it to that gesture instead.
 */
export function useAudioPlayer(src: string, autoPlayOnMount = false): UseAudioPlayerResult {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'none';
    audioRef.current = audio;

    if (autoPlayOnMount) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src, autoPlayOnMount]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [isPlaying]);

  return { isPlaying, toggle };
}
