"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const hours = [
  { days: "Lunes",     time: "9:30–14:30 · 15:00–20:00" },
  { days: "Martes",    time: "9:30–14:30 · 15:00–20:00" },
  { days: "Miércoles", time: "9:30–13:30 · 16:00–20:00" },
  { days: "Jueves",    time: "9:30–14:30 · 15:00–20:00" },
  { days: "Viernes",   time: "9:30–14:30 · 15:00–20:00" },
  { days: "Sábado",    time: "Cerrado" },
  { days: "Domingo",   time: "Cerrado" },
];

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
          <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Reserva tu cita
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-base leading-relaxed text-zinc-500">
                La mejor forma de contactarnos es por teléfono.
                Te atendemos personalmente.
              </p>

              <a
                href="tel:+34963773633"
                className="mt-8 flex w-full items-center justify-center gap-3 bg-zinc-900 px-8 py-5 text-sm font-semibold uppercase tracking-widest text-white hover:bg-zinc-800 transition-colors sm:w-auto sm:inline-flex"
              >
                <Phone size={16} />
                Llamar ahora · 963 773 633
              </a>
            </div>

            {/* Hours */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Clock size={16} className="text-nude shrink-0" />
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Horarios de atención
                </p>
              </div>
              <div className="divide-y divide-zinc-100 border border-zinc-200">
                {hours.map(({ days, time }) => (
                  <div
                    key={days}
                    className="flex items-center justify-between px-5 py-3.5"
                  >
                    <span className="text-sm text-zinc-600">{days}</span>
                    <span
                      className={`text-sm font-medium ${
                        time === "Cerrado" ? "text-zinc-400" : "text-zinc-900"
                      }`}
                    >
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-nude shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Dirección
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Av. Primero de Mayo, 53 B · Valencia 46017, España
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column — map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="border border-zinc-200 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12323.519598640238!2d-0.4021445410601918!3d39.44944644577933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f3cd02da009%3A0xdf650717639f08ed!2sCl%C3%ADnica%20Dental%20Primero%20de%20Mayo!5e0!3m2!1sen!2ses!4v1776163301464!5m2!1sen!2ses"
              width="100%"
              height="450"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Clínica Dental Primero de Mayo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
