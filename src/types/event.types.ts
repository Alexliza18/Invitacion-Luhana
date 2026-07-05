/** Shape of a physical location used across ceremony, reception and the map CTA. */
export interface VenueInfo {
  name: string;
  address: string;
  date: string;
  time: string;
  mapsUrl: string;
}

export interface PersonInfo {
  name: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  quinceaneraName: string;
  dateLabel: string;
  openButtonLabel: string;
}

export interface StoryContent {
  title: string;
  paragraphs: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface DressCodeContent {
  title: string;
  label: string;
  description: string;
}

export interface GiftTableContent {
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
}

export interface RsvpFieldLabels {
  firstName: string;
  lastName: string;
  phone: string;
  guestCount: string;
  attendance: string;
  attendanceYes: string;
  attendanceNo: string;
  comments: string;
  submit: string;
  successTitle: string;
  successMessage: string;
  errorMessage: string;
}

export interface MusicConfig {
  src: string;
  title: string;
}

export interface CalendarMeta {
  title: string;
  description: string;
  location: string;
  /** ISO 8601 start/end used to build Google/Outlook/.ics links. */
  startIso: string;
  endIso: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  ogImage: string;
  siteUrl: string;
}

export interface EventConfig {
  quinceaneraName: string;
  eventDateIso: string;
  parents: PersonInfo[];
  godparents: PersonInfo[];
  hero: HeroContent;
  story: StoryContent;
  gallery: GalleryImage[];
  ceremony: VenueInfo;
  reception: VenueInfo;
  dressCode: DressCodeContent;
  giftTable: GiftTableContent;
  schedule: ScheduleItem[];
  rsvp: RsvpFieldLabels;
  music: MusicConfig;
  calendar: CalendarMeta;
  seo: SeoConfig;
  footerMessage: string;
}
