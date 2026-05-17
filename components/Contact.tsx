"use client";

import { useState } from "react";
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

const serviceOptions = [
  "Revisión general",
  "Ortodoncia",
  "Implantes",
  "Estética dental",
  "Odontopediatría",
  "Urgencia dental",
  "Otro",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#2C7A74]">
            Contacto
          </p>
          <h2 className="mt-3 font-serif font-light text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.8rem)]">
            Reserva tu cita
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-[#2C7A74]" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="mb-6">
                  <circle cx="28" cy="28" r="28" fill="#EAF5F4" />
                  <path
                    d="M18 28l7 7 13-14"
                    stroke="#2C7A74"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="font-serif text-2xl font-light text-[#1a1a1a]">
                  ¡Perfecto, te contactamos en menos de 24h!
                </p>
                <p className="mt-3 text-sm text-[#6B7280]">
                  Revisa tu teléfono — te llamaremos nosotros.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-[#E5E0D8] bg-[#F8F6F1] px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#9ca3af] focus:border-[#2C7A74] focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder="Tu teléfono"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-[#E5E0D8] bg-[#F8F6F1] px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#9ca3af] focus:border-[#2C7A74] focus:outline-none transition-colors"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full appearance-none border border-[#E5E0D8] bg-[#F8F6F1] px-4 py-3 text-sm text-[#1a1a1a] focus:border-[#2C7A74] focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  rows={5}
                  placeholder="¿Alguna preferencia de horario o algo que debamos saber?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border border-[#E5E0D8] bg-[#F8F6F1] px-4 py-3 text-sm text-[#1a1a1a] placeholder-[#9ca3af] focus:border-[#2C7A74] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#1C3A38] py-4 text-sm font-medium uppercase tracking-widest text-white hover:bg-[#2C7A74] transition-colors"
                >
                  Enviar solicitud
                </button>

                <div className="mt-6 border-t border-[#E5E0D8] pt-6 flex flex-col gap-3">
                  {[
                    "Primera consulta gratuita — sin compromiso",
                    "Respondemos en menos de 24h",
                    "Financiación sin intereses disponible",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <circle cx="8" cy="8" r="8" fill="#EAF5F4" />
                        <path d="M5 8l2 2 4-4" stroke="#2C7A74" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-gray-500">{text}</span>
                    </div>
                  ))}
                </div>
              </form>
            )}
          </motion.div>

          {/* Right — contact data */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-base leading-relaxed text-[#6B7280]">
                La mejor forma de contactarnos es por teléfono.
                Te atendemos personalmente.
              </p>
              <motion.a
                href="tel:+34963000000"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-3 bg-zinc-900 px-4 py-5 text-sm font-semibold uppercase tracking-widest text-white hover:bg-[#1C3A38] transition-colors sm:inline-flex sm:w-auto sm:px-8"
              >
                <Phone size={16} className="shrink-0 text-[#2C7A74]" />
                <span>Llamar ahora · 963 000 000</span>
              </motion.a>
              <motion.a
                href="mailto:info@clinicasonrisa.es"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 flex w-full items-center justify-center gap-3 border border-[#E5E0D8] bg-white px-4 py-5 text-sm font-semibold uppercase tracking-widest text-zinc-900 hover:border-[#2C7A74] hover:bg-[#F8F6F1] transition-colors sm:inline-flex sm:w-auto sm:px-8"
              >
                <Mail size={16} className="shrink-0 text-[#2C7A74]" />
                <span>info@clinicasonrisa.es</span>
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-[#2C7A74]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Horarios de atención
                </p>
              </div>
              <div className="divide-y divide-[#E5E0D8] border border-[#E5E0D8]">
                {hours.map(({ days, time }) => (
                  <div
                    key={days}
                    className="flex items-center justify-between px-5 py-3.5 hover:bg-[#F8F6F1] transition-colors duration-200"
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
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#2C7A74]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Dirección
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Calle Mayor, 12 · Valencia 46001, España
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-[#E5E0D8]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.611!2d-0.37634!3d39.46990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4c3f3f3f3f%3A0x0!2zMznCsDI4JzExLjYiTiAwwrAyMic0Ni43Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                title="Ubicación Clínica Dental Sonrisa"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
