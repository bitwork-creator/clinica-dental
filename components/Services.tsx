"use client";

import { motion } from "framer-motion";
import { Stethoscope, Smile, Shield, Sparkles, Baby, Zap } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Odontología General",
    description:
      "Diagnóstico, prevención y tratamiento de caries, enfermedad periodontal y revisiones completas para mantener tu boca sana.",
  },
  {
    icon: Smile,
    title: "Ortodoncia",
    description:
      "Brackets metálicos, cerámicos y alineadores transparentes (Invisalign) para corregir la posición de tus dientes con discreción.",
  },
  {
    icon: Shield,
    title: "Implantología",
    description:
      "Implantes de titanio de alta calidad que reemplazan dientes perdidos con una solución fija, natural y duradera.",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description:
      "Blanqueamiento profesional, carillas de porcelana y composite para una sonrisa brillante que te dé confianza.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description:
      "Atención especializada y amigable para los más chicos, creando hábitos saludables desde la primera infancia.",
  },
  {
    icon: Zap,
    title: "Endodoncia",
    description:
      "Tratamientos de conducto con la última tecnología para eliminar el dolor y conservar tu diente natural.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-malva-xlight px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-malva-dark">
            Nuestros servicios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Todo lo que tu sonrisa necesita
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500">
            Contamos con especialistas en cada área para ofrecerte un
            tratamiento integral, personalizado y de calidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100 hover:ring-malva-light hover:shadow-md transition-all duration-300"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-malva-xlight text-malva group-hover:bg-malva group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
