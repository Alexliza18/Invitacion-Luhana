import { mockRsvpService } from './rsvpService.mock.ts';
import { googleSheetsRsvpService } from './rsvpService.googleSheets.ts';
import type { RsvpService } from './rsvpService.types.ts';

export type { RsvpService } from './rsvpService.types.ts';

/**
 * Active RSVP backend. Uses Google Sheets automatically once
 * VITE_RSVP_WEBHOOK_URL is set (see GOOGLE_SHEETS_SETUP.md); otherwise
 * falls back to the local mock so the app keeps working out of the box.
 * Every consumer imports from this barrel, never from a specific
 * implementation file.
 */
export const rsvpService: RsvpService = import.meta.env.VITE_RSVP_WEBHOOK_URL
  ? googleSheetsRsvpService
  : mockRsvpService;
