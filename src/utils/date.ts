import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function getCountdownParts(targetIso: string, fromDate: Date = new Date()): CountdownParts {
  const target = dayjs(targetIso);
  const now = dayjs(fromDate);
  const diffSeconds = target.diff(now, 'second');

  if (diffSeconds <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diffSeconds / 86400);
  const hours = Math.floor((diffSeconds % 86400) / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

/** Formats an ISO date/time as `YYYYMMDDTHHmmss` in UTC, as required by .ics and calendar deep links. */
export function toIcsUtc(iso: string): string {
  return dayjs(iso).utc().format('YYYYMMDD[T]HHmmss[Z]');
}
