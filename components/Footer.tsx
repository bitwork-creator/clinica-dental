const INSTAGRAM_URL = "https://www.instagram.com/clinicadental_primerodemayo/";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-12 text-zinc-500">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-base font-bold uppercase tracking-widest text-white">
              Clínica Dental Primero de Mayo
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-widest">
              Av. Primero de Mayo, 53 B · Valencia 46017
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <nav className="flex flex-wrap justify-center gap-8 sm:justify-end">
              {["Inicio", "Servicios", "Equipo", "Testimonios", "Contacto"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-zinc-500 hover:text-nude transition-colors"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-10 flex flex-col items-center gap-2 text-center text-xs sm:flex-row sm:justify-between">
          <p className="uppercase tracking-widest">
            © 2025 Clínica Dental Primero de Mayo · Diseño web por{" "}
            <a
              href="https://bitwork-creator.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Bren
            </a>
          </p>
          <p className="uppercase tracking-widest">Valencia, España</p>
        </div>
      </div>
    </footer>
  );
}
