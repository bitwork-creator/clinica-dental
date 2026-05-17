"use client";

import { motion } from "framer-motion";

const clinicPhotos = [
  { src: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&q=80", alt: "Sala de espera" },
  { src: "https://images.unsplash.com/photo-1588776814546-1ffbb8e0a71f?w=800&q=80", alt: "Consultorio principal" },
  { src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80", alt: "Equipamiento" },
  { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80", alt: "Área de recepción" },
];

export default function Clinic() {
  return (
    <section id="clinica" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#2C7A74]">
            Nuestras instalaciones
          </p>
          <h2 className="mt-3 font-serif font-light text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.8rem)]">
            Instalaciones modernas en Valencia
          </h2>
          <div className="mt-4 h-0.5 w-10 bg-[#2C7A74]" />
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#6B7280]">
            Diseñamos cada rincón de la clínica para que te sientas cómodo y
            en confianza desde tu primera visita.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-px bg-[#E5E0D8] sm:grid-cols-2 lg:grid-cols-4">
          {clinicPhotos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden bg-zinc-100"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="p-5 text-xs font-medium uppercase tracking-widest text-white">
                  {photo.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
