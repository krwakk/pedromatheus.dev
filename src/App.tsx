const contactLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+5547996482391",
    label: "Atendimento rápido e direto",
    accent: "from-white via-zinc-100 to-zinc-200",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M20 12a8 8 0 0 1-11.78 7.04L4 20l.97-3.79A8 8 0 1 1 20 12Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.9 9.4c.15-.34.3-.35.52-.36h.44c.14 0 .37.05.56.46.2.4.66 1.4.72 1.5.06.1.1.24.02.38-.08.15-.12.24-.24.36-.12.12-.25.26-.36.35-.12.1-.24.22-.1.44.13.22.61.99 1.32 1.6.9.77 1.64 1 1.88 1.12.24.12.38.1.52-.06.14-.16.58-.68.74-.92.15-.23.3-.19.5-.11.2.08 1.29.61 1.51.72.22.1.36.16.41.25.05.1.05.54-.13 1.05-.18.52-1.03 1-1.42 1.05-.36.05-.82.07-2.67-.66-2.24-.87-3.7-3.02-3.82-3.18-.11-.16-.91-1.21-.91-2.3 0-1.08.57-1.62.78-1.84Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pedromatheus.dev/",
    label: "Fotos, vídeos e atualizações",
    accent: "from-zinc-100 via-white to-zinc-200",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:pedromatheus.developer@gmail.com",
    label: "Orçamentos, dúvidas e propostas",
    accent: "from-white via-zinc-50 to-zinc-200",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const profileImage =
  "https://scontent.cdninstagram.com/v/t51.82787-19/653663059_18059973179439228_1189106642362160459_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=5rxu1uc6cN0Q7kNvwH9XIGj&_nc_oc=AdpFoMmJQ6cUpQrZs6ij94xNkTruRQg-XSkjY_yWtwCdg-wwUPhnxi-gOQX2nZBaiFH_kSiFDZnyZvT2CWWZdL9C&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=6RKDFUVnEW40O2HP6l0ZgA&_nc_ss=8&oh=00_AfwpIgonPzTlxM8AMBIbbYvVxKeVAXWYAz7UzXNNU3iXMw&oe=69C10D88";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_36%),linear-gradient(135deg,_#050505_0%,_#171717_35%,_#f4f4f5_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.04),_transparent_20%,_rgba(255,255,255,0.06)_80%,_rgba(0,0,0,0.25))]" />

      <section className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="fade-in w-full max-w-xl rounded-[2rem] border border-white/15 bg-white/70 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 md:p-10">
          <div className="mx-auto flex max-w-md flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-white/60 blur-2xl" />
              <img
                src={profileImage}
                alt="Foto de perfil"
                className="relative h-28 w-28 rounded-full border border-white/70 object-cover shadow-[0_18px_45px_rgba(0,0,0,0.28)] sm:h-32 sm:w-32"
              />
            </div>

            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-black px-4 py-1.5 text-xs font-medium tracking-[0.01em] text-white shadow-sm sm:text-sm">
                Pedro Matheus - Programmer & Developer
              </span>

              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl">
                  Meus canais de contato
                </h1>
                <p className="mx-auto max-w-md text-sm leading-7 text-zinc-700 sm:text-base">
                  Fale comigo pelos links abaixo para atendimento, dúvidas, propostas e novos projetos.
                </p>
              </div>
            </div>

            <div className="mt-8 grid w-full gap-3">
              {contactLinks.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group slide-up flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-[0_16px_35px_rgba(0,0,0,0.14)]"
                  style={{ animationDelay: `${index * 110 + 180}ms` }}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-black shadow-inner shadow-black/5 transition-transform duration-300 group-hover:scale-105`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-[-0.02em] text-zinc-950 sm:text-[0.98rem]">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-zinc-600 sm:text-sm">{item.label}</p>
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-zinc-950"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M5 12h14" strokeLinecap="round" />
                    <path d="m13 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Praticidade</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Rapidez</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Eficácia</span>
            </div>

            <p className="mx-auto mt-5 max-w-md text-center text-sm leading-7 text-zinc-700 sm:text-base">
              Peça um orçamento já! Entre em contato e evolua seu projeto!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
