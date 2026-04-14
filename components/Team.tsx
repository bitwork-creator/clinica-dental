"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Dra. Eva Ijeilat",
    specialty: "Odontología General",
    years: 18,
    photo: "/fotos/IMG_6334 2.jpg",
  },
  {
    name: "Dra. Nombre Apellido",
    specialty: "Odontología General",
    years: 12,
    photo: "/fotos/IMG_6335 2.jpg",
  },
  {
    name: "Dra. Nombre Apellido2",
    specialty: "Odontología General",
    years: 9,
    photo: "/fotos/IMG_6339 2.jpg",
  },
  {
    name: "Dr. Nombre Apellido",
    specialty: "Odontología General",
    years: 7,
    photo: "/fotos/IMG_6360.jpg",
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
          <h2 className="mt-4 font-serif text-3xl font-normal uppercase tracking-widest text-zinc-900 sm:text-4xl">
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
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: "easeOut" }}
              className="group"
            >
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden border border-zinc-200">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-nude/0 group-hover:bg-nude/20 transition-colors duration-500" />

                {/* Years badge — aparece en hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 bg-zinc-900/80 px-4 py-3 transition-transform duration-400 ease-out"
                >
                  <p className="text-xs text-nude font-medium uppercase tracking-widest">
                    {member.years} años de experiencia
                  </p>
                </motion.div>
              </div>

              {/* Info */}
              <div className="mt-5 border-l-2 border-nude pl-5">
                <p className="font-serif text-base font-bold text-zinc-900">
                  {member.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-500">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
