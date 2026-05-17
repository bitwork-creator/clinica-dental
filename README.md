# Clínica Dental Sonrisa — Sitio Web Demo

Sitio web de demostración para clínica dental, desarrollado con **Next.js 16** y **Tailwind CSS v4**. Pensado como modelo de producto para agencias o freelancers que quieran mostrar a clientes del sector salud un ejemplo real, funcional y listo para personalizar.

> Todos los datos (nombre, dirección, equipo, testimonios) son ficticios. El banner de demo lo indica visualmente.

---

## Qué incluye

| Sección | Descripción |
|---|---|
| **Hero** | Carrusel automático con imágenes de fondo, copy orientado a conversión y badges de confianza |
| **Servicios** | Grid de 6 servicios con cards interactivas (hover, iconos, CTA) |
| **Instalaciones** | Galería en grid 4 columnas con imágenes y hover overlay |
| **Equipo** | 4 doctores con foto, especialidad, años de experiencia y botón de cita en hover |
| **Testimonios** | 3 reseñas de pacientes con estrellas y avatar con iniciales |
| **FAQ** | Acordeón con 5 preguntas frecuentes, sin dependencias externas |
| **Contacto** | Formulario con confirmación visual + horarios + mapa + datos de contacto |
| **Footer** | Datos de la clínica, navegación y crédito |
| **Demo banner** | Franja fija superior que identifica el sitio como demostración |
| **Cookie banner** | Consentimiento de cookies con modal de preferencias y localStorage |

---

## Stack

- **Next.js 16** — App Router, SSG
- **TypeScript**
- **Tailwind CSS v4** — configuración via `@theme` en CSS
- **Framer Motion** — animaciones de entrada y transiciones
- **Embla Carousel** — carrusel del hero con autoplay
- **Lucide React** — iconografía

Tipografías: **Cormorant Garamond** (títulos) + **DM Sans** (cuerpo) vía Google Fonts.

---

## Desarrollo local

```bash
pnpm install
pnpm dev
```

> Si pnpm v11 bloquea los build scripts de `sharp` o `unrs-resolver`, ejecutá una vez:
> ```bash
> pnpm approve-builds --all
> ```

---

## Deploy

Optimizado para **Vercel**. Sin variables de entorno requeridas — el formulario de contacto es visual (no envía datos a ningún backend).

```bash
pnpm build
```

---

## Personalización para un cliente real

1. Reemplazar datos en los componentes (`components/`) — nombre, dirección, teléfono, email, equipo
2. Sustituir imágenes de Unsplash por fotos reales en `public/fotos/`
3. Conectar el formulario a un backend, [Formspree](https://formspree.io) o similar
4. Activar el iframe de Google Maps con la dirección real
5. Actualizar metatags en `app/layout.tsx`

---

## Funcionalidades opcionales integrables

- **Reservas online** vía [Fresha](https://www.fresha.com) — widget embebible sin desarrollo adicional
- **Chat / WhatsApp** flotante para consultas rápidas
- **Google Analytics 4 + GTM** para seguimiento de conversiones
- **Blog de salud dental** para SEO local

---

## Desarrollado por

[Bren](https://www.delsur-digital.com/) · Diseño web para negocios locales · Valencia, España
