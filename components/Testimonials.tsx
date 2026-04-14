"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Martínez",
    role: "Paciente de ortodoncia",
    initials: "LM",
    rating: 5,
    text: "Increíble experiencia desde el primer momento. El equipo es muy profesional y amable. Terminé mi tratamiento de ortodoncia en el tiempo previsto y el resultado superó mis expectativas.",
  },
  {
    name: "Carlos Sánchez",
    role: "Implante dental",
    initials: "CS",
    rating: 5,
    text: "Me realizaron dos implantes y quedé maravillado. El procedimiento fue indoloro y el seguimiento post-operatorio fue impecable. Ya no recuerdo cómo era vivir sin esos dientes.",
  },
  {
    name: "María González",
    role: "Mamá de paciente",
    initials: "MG",
    rating: 5,
    text: "Llevé a mi hijo de 6 años por primera vez al dentista y salió feliz. La odontopediatra es genial con los niños. Ahora él mismo pide ir a sus controles.",
  },
  {
    name: "Roberto Pérez",
    role: "Blanqueamiento",
    initials: "RP",
    rating: 5,
    text: "El blanqueamiento profesional fue rápido y el cambio fue notorio desde la primera sesión. El precio es muy accesible comparado con otros lugares y la calidad es superior.",
  },
  {
    name: "Ana Fernández",
    role: "Paciente general",
    initials: "AF",
    rating: 5,
    text: "Vengo hace 3 años y nunca tuve una mala experiencia. La atención es puntual, las instalaciones son modernas y siempre se nota que les importa el bienestar del paciente.",
  },
  {
    name: "Diego López",
    role: "Endodoncia",
    initials: "DL",
    rating: 5,
    text: "Tenía mucho miedo de hacerme una endodoncia. El doctor fue muy empático, explicó cada paso y literalmente no sentí nada. Cambié totalmente mi perspectiva del dentista.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-malva text-malva" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-24">
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
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500">
            La confianza de nuestros pacientes es nuestro mayor logro.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-100"
            >
              <Stars count={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-malva text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{t.name}</p>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
