"use client";

import { motion, type Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const hours = [
  { days: "Lunes",     time: "9:30–14:30 · 15:00–20:00" },
  { days: "Martes",    time: "9:30–14:30 · 15:00–20:00" },
  { days: "Miércoles", time: "9:30–13:30 · 16:00–20:00" },
  { days: "Jueves",    time: "9:30–14:30 · 15:00–20:00" },
  { days: "Viernes",   time: "9:30–14:30 · 15:00–20:00" },
  { days: "Sábado",    time: "Cerrado" },
  { days: "Domingo",   time: "Cerrado" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-32">
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
            Contacto
          </p>
          <h2 className="mt-4 font-serif text-3xl font-normal uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Reserva tu cita
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column — staggered */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-10"
          >
            {/* Intro + CTA */}
            <motion.div variants={itemVariants}>
              <p className="text-base leading-relaxed text-zinc-500">
                La mejor forma de contactarnos es por teléfono.
                Te atendemos personalmente.
              </p>

              <motion.a
                href="tel:+34963000000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 flex w-full items-center justify-center gap-3 bg-zinc-900 px-4 py-5 text-sm font-semibold uppercase tracking-widest text-white hover:bg-zinc-800 transition-colors sm:px-8 sm:w-auto sm:inline-flex"
              >
                <Phone size={16} className="text-nude shrink-0" />
                <span className="text-center">Llamar ahora · 963 000 000</span>
              </motion.a>
              <motion.a
                href="mailto:info@clinicasonrisa.es"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-full items-center justify-center gap-3 border border-zinc-200 bg-white px-4 py-5 text-sm font-semibold uppercase tracking-widest text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition-colors sm:px-8 sm:w-auto sm:inline-flex"
              >
                <Mail size={16} className="text-nude shrink-0" />
                <span className="break-all text-center">info@clinicasonrisa.es</span>
              </motion.a>
            </motion.div>

            {/* Hours */}
            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <Clock size={16} className="text-nude shrink-0" />
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Horarios de atención
                </p>
              </div>
              <motion.div
                className="divide-y divide-zinc-100 border border-zinc-200"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {hours.map(({ days, time }) => (
                  <motion.div
                    key={days}
                    variants={rowVariants}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-[#faf9f7] transition-colors duration-200"
                  >
                    <span className="text-sm text-zinc-600">{days}</span>
                    <span
                      className={`text-sm font-medium text-right ${
                        time === "Cerrado" ? "text-zinc-400" : "text-zinc-900"
                      }`}
                    >
                      {time}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="flex items-start gap-3">
              <MapPin size={16} className="text-nude shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Dirección
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Calle Mayor, 12 · Valencia 46001, España
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border border-zinc-200 overflow-hidden"
          >
            <div className="flex h-[450px] w-full flex-col items-center justify-center gap-5 bg-zinc-50">
              <div className="flex h-14 w-14 items-center justify-center border border-nude/40 text-nude">
                <MapPin size={28} />
              </div>
              <div className="text-center px-6">
                <p className="font-serif text-base font-bold uppercase tracking-widest text-zinc-900">
                  Clínica Dental Sonrisa
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Calle Mayor, 12 · Valencia 46001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
