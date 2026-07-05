import { lazy, Suspense, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { eventConfig } from '../config/event.ts';
import { Hero } from '../sections/Hero.tsx';
import { MusicPlayer } from '../components/MusicPlayer.tsx';
import { BackToTop } from '../components/BackToTop.tsx';

const Countdown = lazy(() => import('../sections/Countdown.tsx').then((m) => ({ default: m.Countdown })));
const Story = lazy(() => import('../sections/Story.tsx').then((m) => ({ default: m.Story })));
const ParentsMessage = lazy(() =>
  import('../sections/ParentsMessage.tsx').then((m) => ({ default: m.ParentsMessage })),
);
const Gallery = lazy(() => import('../sections/Gallery.tsx').then((m) => ({ default: m.Gallery })));
const EventInfo = lazy(() => import('../sections/EventInfo.tsx').then((m) => ({ default: m.EventInfo })));
const Location = lazy(() => import('../sections/Location.tsx').then((m) => ({ default: m.Location })));
const DressCode = lazy(() => import('../sections/DressCode.tsx').then((m) => ({ default: m.DressCode })));
const Schedule = lazy(() => import('../sections/Schedule.tsx').then((m) => ({ default: m.Schedule })));
const GiftTable = lazy(() => import('../sections/GiftTable.tsx').then((m) => ({ default: m.GiftTable })));
const RSVP = lazy(() => import('../sections/RSVP.tsx').then((m) => ({ default: m.RSVP })));
const AddToCalendar = lazy(() =>
  import('../sections/AddToCalendar.tsx').then((m) => ({ default: m.AddToCalendar })),
);
const Footer = lazy(() => import('../sections/Footer.tsx').then((m) => ({ default: m.Footer })));

export function InvitationPage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isInvitationOpen ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isInvitationOpen]);

  return (
    <Box>
      <Hero
        content={eventConfig.hero}
        isOpen={isInvitationOpen}
        onOpen={() => setIsInvitationOpen(true)}
      />

      {isInvitationOpen && (
        <Suspense fallback={null}>
          <Box>
            <Countdown targetIso={eventConfig.eventDateIso} />
            <Story content={eventConfig.story} />
            <ParentsMessage content={eventConfig.parentsMessage} />
            <Gallery images={eventConfig.gallery} hashtag={eventConfig.hashtag} />
            <EventInfo ceremony={eventConfig.ceremony} reception={eventConfig.reception} />
            <Location reception={eventConfig.reception} />
            <DressCode content={eventConfig.dressCode} />
            <Schedule items={eventConfig.schedule} />
            <GiftTable content={eventConfig.giftTable} />
            <RSVP labels={eventConfig.rsvp} />
            <AddToCalendar meta={eventConfig.calendar} />
            <Footer message={eventConfig.footerMessage} quinceaneraName={eventConfig.quinceaneraName} />

            <MusicPlayer src={eventConfig.music.src} title={eventConfig.music.title} />
            <BackToTop />
          </Box>
        </Suspense>
      )}
    </Box>
  );
}
