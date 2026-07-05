# Recibir los RSVP en Google Sheets

Cada confirmación del formulario RSVP se puede guardar como una fila nueva
en un Google Sheet, usando un Google Apps Script como puente (sin backend
propio, sin credenciales expuestas en el navegador).

## 1. Crear el Google Sheet

1. Crea una hoja de cálculo nueva en Google Sheets (el nombre no importa).
2. No hace falta crear encabezados a mano — el script los agrega solo la
   primera vez que llega una respuesta.

## 2. Crear el Apps Script

1. En el Sheet: **Extensiones → Apps Script**.
2. Borra el contenido de `Code.gs` y pega esto:

```js
const SHEET_NAME = 'RSVP';

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Fecha', 'Nombre', 'Apellidos', 'Teléfono', 'Invitados', 'Asistencia', 'Comentarios']);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.firstName,
    data.lastName,
    data.phone,
    data.guestCount,
    data.attendance === 'yes' ? 'Sí' : 'No',
    data.comments,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (el nombre que le pongas no importa).

## 3. Publicarlo como Web App

1. Arriba a la derecha: **Implementar → Nueva implementación**.
2. Tipo: **Aplicación web**.
3. Configura:
   - **Ejecutar como**: tu cuenta (la dueña del Sheet).
   - **Quién tiene acceso**: **Cualquier usuario**.
4. Autoriza los permisos que pida Google (es tu propio script, accediendo a tu propio Sheet).
5. Copia la **URL de la aplicación web** que te entrega — termina en `/exec`.

## 4. Conectar la invitación

En local, crea un archivo `.env` en la raíz del proyecto (junto a `package.json`):

```
VITE_RSVP_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Reinicia `npm run dev`. A partir de ahora, cada RSVP enviado desde el
formulario aparece como una fila nueva en la hoja `RSVP` de tu Sheet en
tiempo real.

Si no configuras esta variable, la app sigue funcionando normalmente con
el servicio simulado (`mockRsvpService`), que guarda las respuestas solo en
el navegador — útil para probar sin llenar el Sheet real.

## 5. En producción (Vercel)

En el proyecto de Vercel: **Settings → Environment Variables**, agrega
`VITE_RSVP_WEBHOOK_URL` con la misma URL, y vuelve a desplegar (los cambios
de variables de entorno no aplican al build en curso, solo al siguiente).

## Notas

- **Cada vez que edites el código del Apps Script**, tienes que crear una
  **nueva implementación** (o editar la existente en "Gestionar
  implementaciones") para que los cambios tomen efecto en la URL `/exec`.
- Puedes abrir el Sheet en cualquier momento para ver cuántos han
  confirmado, filtrar por "Asistencia", sumar la columna "Invitados", etc.
  — es una hoja de cálculo normal.
- Si más adelante prefieres Supabase, Firebase o una API propia, la
  interfaz es la misma (`RsvpService` en `src/services/rsvp/`): se crea un
  archivo nuevo implementándola y se ajusta la condición en
  `src/services/rsvp/index.ts`.
