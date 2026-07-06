import type { EventConfig } from '../types/event.types.ts';
import luhanaPhoto from '../assets/gallery/Luhana Sarai.png';

/**
 * Single source of truth for every piece of event data rendered on the page.
 * Replace the example values below with the real event's details — no other
 * file in the project should hardcode a name, date, address or link.
 */
export const eventConfig: EventConfig = {
  quinceaneraName: 'Luhana Saraí Reque Liza',
  eventDateIso: '2026-07-10T17:00:00-05:00',
  hashtag: '#XVLuhana',

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

  parentsMessage: {
    eyebrow: 'Con todo nuestro amor',
    title: 'Mensaje de mis Papás',
    message:
      'Hija querida, verte llegar a tus XV Años es uno de los regalos más grandes que la vida nos ha dado. Hemos visto crecer a esa niña soñadora hasta convertirse en la mujer maravillosa que eres hoy, y cada paso de tu camino ha llenado nuestro hogar de orgullo y alegría.\nGracias por ser nuestra bendición, por iluminar cada día con tu sonrisa y por enseñarnos, sin saberlo, a amar cada vez más. Que este nuevo capítulo esté lleno de sueños cumplidos, de fe y de la misma luz que llevas dentro.\nTe amamos con todo el corazón, hoy y siempre.',
    signature: 'Con amor, tus papás Manuel Reque y Leonor Liza',
  },

  gallery: [{ id: 'luhana-sarai', src: luhanaPhoto, alt: 'Luhana Saraí' }],

  reception: {
    address: 'Bolívar #190, Eten',
    date: 'Viernes 10 de julio, 2026',
    time: '7:00 PM',
    mapsUrl: 'https://maps.google.com/?q=Bolivar+190+Eten',
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
    image: luhanaPhoto,
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
    location: 'Bolívar #190, Eten',
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
