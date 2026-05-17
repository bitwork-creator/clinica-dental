"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Dra. Carmen Molina",
    specialty: "Directora · Odontología General",
    years: 18,
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    name: "Dra. Laura Ferrer",
    specialty: "Ortodoncia e Invisalign",
    years: 12,
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
  },
  {
    name: "Dra. Ana Blasco",
    specialty: "Estética Dental e Implantología",
    years: 9,
    photo: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=80",
  },
  {
    name: "Dr. Marcos Gil",
    specialty: "Endodoncia y Odontopediatría",
    years: 7,
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="bg-[#F8F6F1] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#2C7A74]">
            Profesionales
          </p>
          <h2 className="mt-3 font-serif font-light text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.8rem)]">
            Nuestro Equipo
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-[#2C7A74]" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#6B7280]">
            Especialistas comprometidos con tu salud bucal, con formación
            continua y años de experiencia a tu servicio.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Years badge */}
                <div className="absolute bottom-4 left-4 bg-[#1C3A38] px-3 py-1.5">
                  <p className="text-xs text-white">{member.years} años de experiencia</p>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-500">
                  <a
                    href="#contacto"
                    className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#1C3A38] transition-all duration-300 hover:bg-[#F8F6F1]"
                  >
                    Pedir cita
                  </a>
                </div>
              </div>
              <div className="mt-5 border-l-2 border-[#2C7A74] pl-5">
                <p className="font-serif text-lg font-normal text-[#1a1a1a]">{member.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[#6B7280]">
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
