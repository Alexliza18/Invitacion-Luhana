import type { RsvpFormData, RsvpResult } from '../../types/rsvp.types.ts';
import type { RsvpService } from './rsvpService.types.ts';

/**
 * Sends each RSVP to a Google Apps Script Web App bound to a Google Sheet,
 * which appends one row per response. Set up the sheet + script following
 * GOOGLE_SHEETS_SETUP.md, then set VITE_RSVP_WEBHOOK_URL to the deployed
 * web app URL.
 *
 * Apps Script web apps don't send an `Access-Control-Allow-Origin` header,
 * so the browser blocks reading the response even though the request goes
 * through and the row gets appended. `mode: 'no-cors'` sidesteps that: the
 * request is still sent (and `text/plain` keeps it a simple, non-preflighted
 * request), we just can't inspect the response — so success here means
 * "the request was sent", not "the sheet confirmed it".
 */
export const googleSheetsRsvpService: RsvpService = {
  async submitRSVP(data: RsvpFormData): Promise<RsvpResult> {
    const webhookUrl = import.meta.env.VITE_RSVP_WEBHOOK_URL;
    if (!webhookUrl) {
      return { success: false, message: 'RSVP no configurado: falta VITE_RSVP_WEBHOOK_URL.' };
    }

    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      });
      return { success: true, message: 'RSVP registrado correctamente.' };
    } catch {
      return { success: false, message: 'No se pudo enviar la confirmación.' };
    }
  },
};
