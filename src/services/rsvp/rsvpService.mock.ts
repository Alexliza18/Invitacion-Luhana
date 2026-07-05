import type { RsvpFormData, RsvpResult } from '../../types/rsvp.types.ts';
import type { RsvpService } from './rsvpService.types.ts';

const STORAGE_KEY = 'invitacion:rsvp-responses';
const SIMULATED_LATENCY_MS = 900;

function readStoredResponses(): RsvpFormData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RsvpFormData[]) : [];
  } catch {
    return [];
  }
}

function persistResponse(data: RsvpFormData): void {
  const responses = readStoredResponses();
  responses.push(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
}

/** In-memory/localStorage stand-in for a real backend, useful for local dev and demos. */
export const mockRsvpService: RsvpService = {
  async submitRSVP(data: RsvpFormData): Promise<RsvpResult> {
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));
    persistResponse(data);
    return { success: true, message: 'RSVP registrado correctamente.' };
  },
};
