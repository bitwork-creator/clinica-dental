"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── FOTOS DE CONSULTORIO ──────────────────────────────────────────────────
// Agregá tus fotos a /public/fotos/ y reemplazá las rutas vacías abajo.
// Ejemplo: "/fotos/consultorio-01.webp"
const clinicPhotos = [
  { src: "/fotos/IMG_6357.jpg", alt: "Sala de espera" },
  { src: "/fotos/IMG_6358.jpg", alt: "Consultorio principal" },
  { src: "/fotos/IMG_6359.jpg", alt: "Equipamiento" },
  { src: "/fotos/IMG_6360.jpg", alt: "Área de recepción" },
];
// ──────────────────────────────────────────────────────────────────────────

export default function Clinic() {
  return (
    <section id="clinica" className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-nude">
            Nuestras instalaciones
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Instalaciones modernas en Valencia
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
            Diseñamos cada rincón de la clínica para que te sientas cómodo y
            en confianza desde tu primera visita.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="mt-16 grid gap-px bg-zinc-100 sm:grid-cols-2 lg:grid-cols-4">
          {clinicPhotos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              className="group relative aspect-square overflow-hidden bg-zinc-100"
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                /* Placeholder — reemplazá src arriba */
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-zinc-200 p-6 text-center">
                  <div className="h-10 w-10 rounded-full border-2 border-dashed border-nude/50 flex items-center justify-center">
                    <span className="text-nude/60 text-xl leading-none">+</span>
                  </div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">
                    {photo.alt}
                  </p>
                </div>
              )}

              {/* Overlay con label */}
              {photo.src && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <p className="p-5 text-xs font-semibold uppercase tracking-widest text-white">
                    {photo.alt}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
