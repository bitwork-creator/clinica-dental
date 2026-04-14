"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 4567-8900",
    href: "tel:+541145678900",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dentalprimerodmayo.com",
    href: "mailto:info@dentalprimerodmayo.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Primero de Mayo 1234, Buenos Aires",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lun–Vie 9:00–20:00 · Sáb 9:00–14:00",
    href: "#",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section id="contacto" className="bg-zinc-50 py-24">
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
            Contacto
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Reservá tu cita hoy
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-500">
            Completá el formulario o comunicate directamente con nosotros.
            Te respondemos a la brevedad.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-zinc-100 hover:ring-malva-light hover:shadow-sm transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-malva-xlight text-malva group-hover:bg-malva group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-zinc-700">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-10 ring-1 ring-zinc-100 text-center">
                <CheckCircle size={48} className="text-malva mb-4" />
                <h3 className="text-xl font-bold text-zinc-900">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Nos pondremos en contacto con vos a la brevedad para
                  confirmar tu turno.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white p-8 ring-1 ring-zinc-100 flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Nombre
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Tu nombre"
                      className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-malva focus:outline-none focus:ring-2 focus:ring-malva/20 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="+54 11 ..."
                      className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-malva focus:outline-none focus:ring-2 focus:ring-malva/20 transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="tu@email.com"
                    className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-malva focus:outline-none focus:ring-2 focus:ring-malva/20 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="¿En qué podemos ayudarte? Contanos sobre tu consulta..."
                    className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-malva focus:outline-none focus:ring-2 focus:ring-malva/20 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-malva px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-malva-dark transition-all hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
