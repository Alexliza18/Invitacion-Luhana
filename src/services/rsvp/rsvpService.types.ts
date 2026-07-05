import type { RsvpFormData, RsvpResult } from '../../types/rsvp.types.ts';

/**
 * Contract every RSVP backend must satisfy. To connect a real backend
 * (Supabase, Firebase, a REST API, Google Sheets via an Apps Script
 * webhook, etc.), implement this interface in a sibling file and swap the
 * export in `index.ts` — no component code needs to change.
 */
export interface RsvpService {
  submitRSVP(data: RsvpFormData): Promise<RsvpResult>;
}
