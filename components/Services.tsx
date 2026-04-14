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
    <section id="servicios" className="bg-white py-32">
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
            Nuestros servicios
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-widest text-zinc-900 sm:text-4xl">
            Todo lo que tu sonrisa necesita
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-zinc-500">
            Contamos con especialistas en cada área para ofrecerte un
            tratamiento integral, personalizado y de calidad.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid gap-px bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white p-10 hover:bg-[#faf9f7] transition-colors duration-300"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center border border-nude-light text-nude group-hover:bg-nude group-hover:text-white group-hover:border-nude transition-colors duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-base font-bold uppercase tracking-widest text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-500">
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
