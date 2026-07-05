import dayjs from 'dayjs';
import type { CalendarMeta } from '../types/event.types.ts';
import { toIcsUtc } from './date.ts';

export function buildGoogleCalendarUrl(meta: CalendarMeta): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: meta.title,
    details: meta.description,
    location: meta.location,
    dates: `${toIcsUtc(meta.startIso)}/${toIcsUtc(meta.endIso)}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildOutlookCalendarUrl(meta: CalendarMeta): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: meta.title,
    body: meta.description,
    location: meta.location,
    startdt: dayjs(meta.startIso).toISOString(),
    enddt: dayjs(meta.endIso).toISOString(),
  });
  return `https://outlook.office.com/calendar/0/deeplink/compose?${params.toString()}`;
}

export function buildIcsFileContent(meta: CalendarMeta): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Invitacion Digital//XV Anos//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@invitacion-digital`,
    `DTSTAMP:${toIcsUtc(new Date().toISOString())}`,
    `DTSTART:${toIcsUtc(meta.startIso)}`,
    `DTEND:${toIcsUtc(meta.endIso)}`,
    `SUMMARY:${meta.title}`,
    `DESCRIPTION:${meta.description}`,
    `LOCATION:${meta.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}

export function downloadIcsFile(meta: CalendarMeta, filename = 'evento.ics'): void {
  const blob = new Blob([buildIcsFileContent(meta)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
