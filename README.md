# Mis XV Años — Invitación Digital (Luhana)

Invitación digital premium para quinceañera, construida con React 19 + Vite +
TypeScript + Material UI + Framer Motion.

## Empezar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # sirve el build de /dist localmente
```

Listo para desplegar en **Vercel** sin configuración adicional (detecta Vite
automáticamente).

## Personalizar el evento

Toda la información del evento vive en **un solo archivo**:

```
src/config/event.ts
```

Ahí se edita: nombre, fecha, padres/padrinos, textos de la historia, galería,
ceremonia/recepción, código de vestimenta, mesa de regalos, cronograma,
etiquetas del formulario RSVP, música, metadatos de calendario y SEO. Ningún
otro componente debería tener datos del evento "quemados" en el código.

### Reemplazar imágenes y música

- **Galería**: reemplaza los SVG en `src/assets/gallery/` por tus fotos reales
  (o cambia las rutas importadas en `src/config/event.ts`).
- **Música**: coloca tu archivo en `public/audio/song.mp3` (ver
  `public/audio/README.md`). Empieza a sonar automáticamente en cuanto el
  usuario presiona "Abrir Invitación" (ese clic es la interacción que los
  navegadores exigen para permitir audio con sonido — no es posible un
  autoplay real antes de esa interacción). El botón flotante permite
  pausarla o reanudarla después.
- **Imagen para redes (Open Graph)**: `public/og-image.svg`, referenciada
  desde `seo.ogImage` en la config.

## Estructura del proyecto

```
src/
  assets/       SVGs de la galería (placeholders reemplazables)
  components/   Piezas reutilizables sin lógica de negocio (Loader, Lightbox,
                MusicPlayer, BackToTop, SectionTitle, ScrollReveal, Sparkles...)
  sections/     Una sección de la invitación por archivo (Hero, Countdown,
                Story, Gallery, EventInfo, Location, RSVP, AddToCalendar,
                DressCode, GiftTable, Schedule, Footer)
  hooks/        useCountdown, useAudioPlayer, useScrollTop, useLightbox
  services/rsvp Interfaz + implementación mock del envío de RSVP
  config/       event.ts (datos) y theme.ts (paleta/tipografía MUI)
  types/        Tipos compartidos (EventConfig, RsvpFormData, etc.)
  utils/        calendar.ts (links/.ics), validators.ts, date.ts
  layouts/      MainLayout (ThemeProvider + splash screen)
  pages/        InvitationPage (ensambla todas las secciones)
  styles/       global.css
```

## Conectar el RSVP a un backend real

`src/services/rsvp/index.ts` exporta el servicio activo. Por defecto usa
`mockRsvpService` (simula latencia y guarda en `localStorage`), pero ya
incluye `googleSheetsRsvpService`: en cuanto configures la variable de
entorno `VITE_RSVP_WEBHOOK_URL`, cada RSVP se guarda como fila nueva en un
Google Sheet — ver **[GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)**
para el paso a paso completo (código de Apps Script incluido).

Para conectar otro backend (Supabase, Firebase, una API REST propia):

1. Crea `rsvpService.<proveedor>.ts` implementando la interfaz
   `RsvpService` (`rsvpService.types.ts`).
2. Ajusta la condición en `index.ts` para que apunte a tu nueva
   implementación.

Ningún componente necesita cambiar — el formulario solo conoce la interfaz.

## Notas técnicas

- **Sin React Router**: es una invitación de una sola página con scroll;
  las "secciones" no son rutas.
- **Sin librerías externas de lightbox/partículas/formularios**: por pedido
  del alcance, todo se construyó con la stack indicada (MUI, Framer Motion,
  React Icons, Day.js) — el Lightbox es un `Dialog` de MUI + Framer Motion,
  el RSVP usa validación manual, y los "brillos" del Hero son un componente
  propio (`Sparkles`), no un motor de partículas.
- **Code splitting**: todas las secciones después del Hero se cargan con
  `React.lazy`, ya que de todas formas no se montan hasta que el usuario
  presiona "Abrir Invitación".
