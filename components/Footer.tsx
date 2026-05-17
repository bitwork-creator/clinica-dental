export default function Footer() {
  return (
    <footer className="bg-[#1C3A38] py-12 text-white/70">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-light tracking-widest uppercase text-white">
              SONRISA
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest">
              Clínica Dental · Valencia
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <p className="text-xs">Calle Mayor, 12 · Valencia 46001</p>
              <a
                href="tel:+34963000000"
                className="text-xs hover:text-white transition-colors"
              >
                963 000 000
              </a>
              <a
                href="mailto:info@clinicasonrisa.es"
                className="text-xs hover:text-white transition-colors"
              >
                info@clinicasonrisa.es
              </a>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-col items-center gap-3 sm:items-end">
            {["Inicio", "Servicios", "Equipo", "Testimonios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center text-xs sm:flex-row sm:justify-between">
          <p className="text-white/50 uppercase tracking-widest">
            Diseño web por{" "}
            <a
              href="https://www.delsur-digital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white transition-colors"
            >
              Bren
            </a>
            {" "}· https://www.delsur-digital.com/
          </p>
          <p className="uppercase tracking-widest">
            © 2025 Clínica Dental Sonrisa · Valencia
          </p>
        </div>
      </div>
    </footer>
  );
}
