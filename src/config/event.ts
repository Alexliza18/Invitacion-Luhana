import type { EventConfig } from '../types/event.types.ts';
import photo1 from '../assets/gallery/photo-1.svg';
import photo2 from '../assets/gallery/photo-2.svg';
import photo3 from '../assets/gallery/photo-3.svg';
import photo4 from '../assets/gallery/photo-4.svg';
import photo5 from '../assets/gallery/photo-5.svg';
import photo6 from '../assets/gallery/photo-6.svg';

/**
 * Single source of truth for every piece of event data rendered on the page.
 * Replace the example values below with the real event's details — no other
 * file in the project should hardcode a name, date, address or link.
 */
export const eventConfig: EventConfig = {
  quinceaneraName: 'Luhana Saraí Reque Liza',
  eventDateIso: '2026-07-10T17:00:00-05:00',

  parents: [{ name: 'Manuel Reque Neciosup' }, { name: 'Leonor Liza Reque' }],

  godparents: [
    { name: 'Ana Lucía Ramírez' },
    { name: 'Jorge Alberto Ramírez' },
  ],

  hero: {
    eyebrow: 'Mis XV Años',
    title: 'Mis XV Años',
    quinceaneraName: 'Luhana',
    dateLabel: 'Viernes 10 de julio, 2026',
    openButtonLabel: 'Abrir Invitación',
  },

  story: {
    title: 'Mi Historia',
    paragraphs: [
      'Hoy es un día que he soñado desde niña. Con el corazón lleno de alegría y gratitud, quiero compartir este momento tan especial con las personas que más amo.',
      'Gracias por haber sido parte de mi vida hasta ahora, y gracias por acompañarme en esta noche donde celebramos el inicio de una nueva etapa.',
    ],
  },

  gallery: [
    { id: 'photo-1', src: photo1, alt: 'Recuerdo 1 de Luhana' },
    { id: 'photo-2', src: photo2, alt: 'Recuerdo 2 de Luhana' },
    { id: 'photo-3', src: photo3, alt: 'Recuerdo 3 de Luhana' },
    { id: 'photo-4', src: photo4, alt: 'Recuerdo 4 de Luhana' },
    { id: 'photo-5', src: photo5, alt: 'Recuerdo 5 de Luhana' },
    { id: 'photo-6', src: photo6, alt: 'Recuerdo 6 de Luhana' },
  ],

  ceremony: {
    name: 'Parroquia Santa María',
    address: 'Av. de las Rosas 123, Ciudad',
    date: 'Viernes 10 de julio, 2026',
    time: '5:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Parroquia+Santa+Maria',
  },

  reception: {
    name: 'Salón Jardín Dorado',
    address: 'Simón Bolívar #091',
    date: 'Viernes 10 de julio, 2026',
    time: '7:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Simon+Bolivar+091',
  },

  dressCode: {
    title: 'Código de Vestimenta',
    label: 'Formal',
    description: 'Se sugiere evitar el color rosa palo, reservado para la quinceañera.',
  },

  giftTable: {
    title: 'Mesa de Regalos',
    description:
      'Tu presencia es el regalo más importante. Si deseas tener un detalle conmigo, dejo aquí algunas sugerencias.',
    image: photo4,
    buttonLabel: 'Ver Mesa de Regalos',
    buttonUrl: 'https://www.mesaderegalos.example.com/luhana',
  },

  schedule: [
    { id: 'ceremonia', time: '5:00 PM', title: 'Ceremonia' },
    { id: 'recepcion', time: '7:00 PM', title: 'Recepción' },
    { id: 'cena', time: '8:00 PM', title: 'Cena' },
    { id: 'baile', time: '10:00 PM', title: 'Baile' },
    { id: 'fin', time: '12:00 AM', title: 'Fin del evento' },
  ],

  rsvp: {
    firstName: 'Nombre',
    lastName: 'Apellidos',
    phone: 'Teléfono',
    guestCount: 'Cantidad de invitados',
    attendance: '¿Asistirás?',
    attendanceYes: 'Sí, asistiré',
    attendanceNo: 'No podré asistir',
    comments: 'Comentarios',
    submit: 'Confirmar Asistencia',
    successTitle: '¡Gracias por confirmar!',
    successMessage: 'Hemos recibido tu respuesta. ¡Nos vemos en la celebración!',
    errorMessage: 'Ocurrió un error al enviar tu respuesta. Intenta nuevamente.',
  },

  music: {
    src: '/audio/song.mp3',
    title: 'Melodía de celebración',
  },

  calendar: {
    title: 'XV Años de Luhana',
    description: 'Celebración de los XV Años de Luhana',
    location: 'Salón Jardín Dorado, Simón Bolívar #091',
    startIso: '2026-07-10T17:00:00-05:00',
    endIso: '2026-07-10T23:59:00-05:00',
  },

  seo: {
    title: 'Mis XV Años — Luhana',
    description: 'Acompáñame a celebrar mis XV Años el 10 de julio de 2026.',
    ogImage: '/og-image.svg',
    siteUrl: 'https://xv-luhana.vercel.app',
  },

  footerMessage: 'Gracias por ser parte de este momento tan especial en mi vida.',
};
