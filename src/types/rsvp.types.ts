export type AttendanceAnswer = 'yes' | 'no';

export interface RsvpFormData {
  firstName: string;
  lastName: string;
  phone: string;
  guestCount: number;
  attendance: AttendanceAnswer;
  comments: string;
}

export interface RsvpResult {
  success: boolean;
  message: string;
}

export type RsvpFormErrors = Partial<Record<keyof RsvpFormData, string>>;
