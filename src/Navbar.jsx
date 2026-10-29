import { useEffect, useState } from "react";

const languages = [
  { code: "id", label: "Indonesia", flag: "ID" },
  { code: "en", label: "English", flag: "EN" },
  { code: "es", label: "Español", flag: "ES" },
];

export default function Navbar({ language, setLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("[data-language-menu]")) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const translations = {
    id: {
      home: "Beranda",
      profile: "Profil",
      experience: "Pengalaman",
      contact: "Kontak",
    },
    en: {
      home: "Home",
      profile: "Profile",
      experience: "Experience",
      contact: "Contact",
    },
    es: {
      home: "Inicio",
      profile: "Perfil",
      experience: "Experiencia",
      contact: "Contacto",
    },
  };

  const nav = translations[language];
  const currentLanguage =
    languages.find((item) => item.code === language) || languages[0];

  const linkClass =
    "transition-colors duration-200 hover:text-cyan-300";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full
        transition-all duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-[#050B18]/80 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
    >
      <nav
        className="mx-auto flex h-17 max-w-6xl
          items-center justify-between px-6 sm:px-8"
      >
        {/* Brand */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight
            text-white sm:text-xl"
        >
          Zakki<span className="text-cyan-400">.</span>
        </a>

        {/* Navigasi */}
        <div
          className="hidden items-center gap-8
            text-sm font-medium text-white/70 md:flex"
        >
          <a href="#home" className={linkClass}>
            {nav.home}
          </a>

          <a href="#profile" className={linkClass}>
            {nav.profile}
          </a>

          <a href="#pengalaman" className={linkClass}>
            {nav.experience}
          </a>

          <a href="#contact" className={linkClass}>
            {nav.contact}
          </a>
        </div>

        {/* Language switcher */}
        <div className="relative" data-language-menu>
          <button
            type="button"
            onClick={() => setLanguageOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={languageOpen}
            aria-label="Pilih bahasa"
            className="flex items-center gap-2 rounded-xl
              border border-white/10 bg-white/4
              px-3 py-2 text-sm font-medium text-white/80
              transition-all hover:border-cyan-400/40
              hover:bg-white/8 hover:text-cyan-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>

            <span>{currentLanguage.flag}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform ${
                languageOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown */}
          {languageOpen && (
            <div
              className="absolute right-0 top-full mt-3
                w-44 overflow-hidden rounded-2xl
                border border-white/10 bg-[#0A1222]/95
                p-1.5 shadow-2xl shadow-black/30
                backdrop-blur-xl"
            >
              {languages.map((item) => {
                const active = item.code === language;

                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                      setLanguageOpen(false);
                    }}
                    className={`flex w-full items-center
                      justify-between rounded-xl px-3 py-2.5
                      text-sm transition-colors
                      ${
                        active
                          ? "bg-cyan-400/10 text-cyan-300"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <span>{item.label}</span>

                    <span className="flex items-center gap-2">
                      <span className="text-xs opacity-60">
                        {item.flag}
                      </span>

                      {active && (
                        <span className="text-cyan-300">✓</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}