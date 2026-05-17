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
    <section id="servicios" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#2C7A74]">
            Nuestros servicios
          </p>
          <h2 className="mt-3 font-serif font-light text-[#1a1a1a] text-[clamp(1.8rem,3vw,2.8rem)]">
            Servicios dentales en Valencia
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-10 bg-[#2C7A74]" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#6B7280]">
            Contamos con especialistas en cada área para ofrecer tratamientos
            integrales, personalizados y de alta calidad.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#F8F6F1] text-[#2C7A74] group-hover:bg-[#2C7A74] group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl font-normal text-[#1a1a1a]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center text-sm font-medium text-[#2C7A74] hover:text-[#1C3A38] transition-colors"
                >
                  Saber más →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
