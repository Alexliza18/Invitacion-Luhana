import type { RsvpFormData, RsvpFormErrors } from '../types/rsvp.types.ts';

const PHONE_PATTERN = /^[+\d][\d\s-]{6,}$/;

export function validateRsvpForm(data: RsvpFormData): RsvpFormErrors {
  const errors: RsvpFormErrors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'Ingresa tu nombre.';
  }

  if (!data.lastName.trim()) {
    errors.lastName = 'Ingresa tus apellidos.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Ingresa un teléfono de contacto.';
  } else if (!PHONE_PATTERN.test(data.phone.trim())) {
    errors.phone = 'Ingresa un teléfono válido.';
  }

  return errors;
}

export function isRsvpFormValid(errors: RsvpFormErrors): boolean {
  return Object.keys(errors).length === 0;
}
