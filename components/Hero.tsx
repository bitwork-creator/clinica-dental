"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Más de 15 años de experiencia",
  "Atención personalizada",
  "Tecnología de última generación",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-[#faf9f7] pt-20"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-widest text-nude mb-8"
            >
              Clínica Dental de Confianza
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl font-bold leading-tight text-zinc-900 sm:text-6xl lg:text-7xl"
            >
              Tu sonrisa,{" "}
              <em className="not-italic text-nude">nuestra</em>{" "}
              pasión
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-base leading-relaxed text-zinc-500 max-w-md"
            >
              En Clínica Dental Primero de Mayo combinamos experiencia,
              tecnología de vanguardia y un trato humano para que cada visita
              sea una experiencia positiva.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-3"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-nude shrink-0" />
                  <span className="text-sm text-zinc-500">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-zinc-900 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-zinc-800 transition-colors"
              >
                Reservar mi cita
                <ArrowRight size={14} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border border-zinc-300 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="border border-zinc-200 bg-white p-10">
              <div className="grid grid-cols-2 gap-px bg-zinc-200">
                {[
                  { num: "5.000+", label: "Pacientes atendidos" },
                  { num: "15+", label: "Años de experiencia" },
                  { num: "6", label: "Especialidades" },
                  { num: "100%", label: "Satisfacción garantizada" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-8">
                    <p className="font-serif text-4xl font-bold text-nude">
                      {stat.num}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-px bg-zinc-900 p-8 text-white">
                <p className="text-xs uppercase tracking-widest text-zinc-400">
                  Próxima disponibilidad
                </p>
                <p className="mt-2 font-serif text-2xl font-bold">
                  Esta semana
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Llamanos o escribinos para coordinar tu turno sin esperas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
