"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Dra. Eva Ijeilat",
    specialty: "Odontología General",
    years: 18,
    photo: "/fotos/IMG_6334.webp",
  },
  {
    name: "Dra. Lucía Almazán",
    specialty: "Odontología General",
    years: 12,
    photo: "/fotos/IMG_6336.webp",
  },
  {
    name: "Dr. Carlos Bellot",
    specialty: "Odontología General",
    years: 9,
    photo: "/fotos/IMG_6341.webp",
  },
  {
    name: "Dra. María Hernández",
    specialty: "Odontología General",
    years: 7,
    photo: "https://placehold.co/400x400",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="bg-[#faf9f7] py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-nude">
            Profesionales
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
            Especialistas comprometidos con tu salud bucal, con formación
            continua y años de experiencia a tu servicio.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden border border-zinc-200">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="mt-5 border-l-2 border-nude pl-5">
                <p className="font-serif text-base font-bold text-zinc-900">
                  {member.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                  {member.specialty}
                </p>
                <p className="mt-3 text-xs text-nude font-medium">
                  {member.years} años de experiencia
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
