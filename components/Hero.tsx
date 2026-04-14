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
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20"
    >
      {/* Background blob */}
      <div
        className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-malva-xlight opacity-60 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-malva-xlight opacity-40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-malva-xlight px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-malva-dark mb-6"
            >
              Clínica Dental de Confianza
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
            >
              Tu sonrisa{" "}
              <span className="text-malva">merece</span>{" "}
              los mejores cuidados
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-zinc-500 max-w-lg"
            >
              En Clínica Dental Primero de Mayo combinamos experiencia,
              tecnología de vanguardia y un trato humano para que cada visita
              sea una experiencia positiva.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-malva shrink-0" />
                  <span className="text-sm text-zinc-600">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-malva px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-malva-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Reservar mi cita
                <ArrowRight size={16} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-7 py-3.5 text-sm font-semibold text-zinc-700 hover:border-malva hover:text-malva transition-colors"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl bg-malva-xlight p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "5.000+", label: "Pacientes atendidos" },
                  { num: "15+", label: "Años de experiencia" },
                  { num: "6", label: "Especialidades" },
                  { num: "100%", label: "Satisfacción garantizada" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <p className="text-3xl font-bold text-malva">{stat.num}</p>
                    <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-malva p-6 text-white">
                <p className="text-sm font-medium opacity-80">
                  Próxima disponibilidad
                </p>
                <p className="mt-1 text-lg font-bold">Esta semana</p>
                <p className="mt-2 text-sm opacity-70">
                  Llamanos o escribinos para coordinar tu turno sin esperas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
