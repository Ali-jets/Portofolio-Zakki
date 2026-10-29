import { useState } from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";

const content = {
  id: {
    greeting: "Halo, selamat datang di ruang digital saya",
    role: "Mahasiswa Psikologi",
    headline: "Psikologi, Sastra & Pengembangan Manusia",
    description: (
      <>
        Saya merupakan mahasiswa Psikologi di Universitas
        Nahdlatul Ulama Indonesia Jakarta. Saya memadukan
        kerangka berpikir ilmiah yang metodis dengan
        ketertarikan mendalam pada sastra, penulisan kreatif
        melalui Gema Sendu, dan kecintaan pada alam. Saat ini,
        saya juga aktif dalam manajemen <i>team building</i>{" "}
        untuk mengoptimalkan dinamika kelompok.
      </>
    ),
    explore: "Jelajahi Profil",
    download: "Unduh CV",
    focusLabel: "Fokus Pengembangan",
    focusTitle: "Psikologi, Kreativitas, dan Kolaborasi",
    focusDescription:
      "Saya tertarik mengeksplorasi perilaku manusia, mengembangkan gagasan melalui penulisan kreatif, serta membangun kolaborasi yang efektif melalui kegiatan team building. Ketiganya menjadi ruang bagi saya untuk memahami manusia, baik sebagai individu maupun bagian dari sebuah kelompok.",
    contact: "Kontak",
    footer:
      "Dibangun dengan rasa ingin tahu dan kreativitas.",
  },

  en: {
    greeting: "Hello, welcome to my digital realm",
    role: "Psychology Student",
    headline: "Psychology, Literature & Human Development",
    description: (
      <>
        I am a Psychology student at Nahdlatul Ulama
        Indonesia University in Jakarta. I combine a
        systematic scientific mindset with a deep interest
        in literature, creative writing through Gema Sendu,
        and a love for nature. I am also actively involved
        in <i>team building</i> management to strengthen
        group dynamics.
      </>
    ),
    explore: "Explore My Profile",
    download: "Download CV",
    focusLabel: "Areas of Interest",
    focusTitle: "Psychology, Creativity & Collaboration",
    focusDescription:
      "I am interested in exploring human behavior, developing ideas through creative writing, and fostering effective collaboration through team-building activities. These areas allow me to understand people both as individuals and as members of a group.",
    contact: "Contact",
    footer: "Built with curiosity and creativity.",
  },

  es: {
    greeting: "Hola, te doy la bienvenida a mi espacio digital",
    role: "Estudiante de Psicología",
    headline: "Psicología, Literatura y Desarrollo Humano",
    description: (
      <>
        Soy estudiante de Psicología en la Universidad
        Nahdlatul Ulama Indonesia, en Yakarta. Combino una
        forma de pensar científica y metódica con un profundo
        interés por la literatura, la escritura creativa a
        través de Gema Sendu y el amor por la naturaleza.
        También participo en la gestión de actividades de{" "}
        <i>team building</i> para fortalecer la dinámica
        de los grupos.
      </>
    ),
    explore: "Explorar mi perfil",
    download: "Descargar CV",
    focusLabel: "Áreas de interés",
    focusTitle: "Psicología, Creatividad y Colaboración",
    focusDescription:
      "Me interesa explorar el comportamiento humano, desarrollar ideas mediante la escritura creativa y fomentar la colaboración eficaz a través de actividades de trabajo en equipo. Estas áreas me permiten comprender a las personas tanto individualmente como dentro de un grupo.",
    contact: "Contacto",
    footer: "Creado con curiosidad y creatividad.",
  },
};

export default function App() {
  const [language, setLanguage] = useState("id");
  const text = content[language];

  return (
    <div
      id="home"
      className="animated-ocean relative min-h-screen
        overflow-x-clip bg-[#050B18] font-sans text-white
        selection:bg-cyan-400 selection:text-[#050B18]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 -left-40
          h-125 w-150 rounded-full
          bg-blue-600/20 blur-[140px]"
      />

      <div
        className="pointer-events-none absolute top-40 -right-40
          h-100 w-112.5 rounded-full
          bg-cyan-500/10 blur-[130px]"
      />

      {/* Navbar dengan language switcher */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
      />

      {/* Hero */}
      <main
        className="relative z-10 mx-auto grid min-h-screen
          max-w-6xl grid-cols-1 items-center gap-12
          px-6 pb-16 pt-28 sm:px-8
          md:grid-cols-[1.4fr_0.8fr]
          md:gap-12 lg:gap-16"
      >
        {/* Konten kiri */}
        <section className="max-w-2xl">
          <p
            className="mb-4 text-sm font-medium uppercase
              tracking-[0.25em] text-cyan-300"
          >
            {text.greeting}
          </p>

          <h1
            className="text-4xl font-bold leading-tight
              tracking-tight sm:text-5xl md:text-6xl"
          >
            Zakki Ali Hakim

            <span
              className="mt-3 block text-lg font-medium
                tracking-normal text-white/50 sm:text-xl"
            >
              {text.role}
            </span>
          </h1>

          <h2
            className="mt-6 inline-block border-b
              border-cyan-400 pb-2 text-xl font-semibold
              leading-relaxed text-white/90 sm:text-2xl"
          >
            {text.headline}
          </h2>

          <p
            className="mt-7 max-w-xl text-base
              leading-8 text-slate-300 sm:text-lg"
          >
            {text.description}
          </p>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="https://www.linkedin.com/in/zakki-ali-hakim-19a394270/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/60
                transition-colors hover:text-cyan-300"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.instagram.com/denrophile.at/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/60
                transition-colors hover:text-cyan-300"
            >
              Instagram ↗
            </a>

            <a
              href="https://wa.me/6283153349853"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-white/60
                transition-colors hover:text-cyan-300"
            >
              WhatsApp ↗
            </a>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#pengalaman"
              className="rounded-full border
                border-cyan-400/30 bg-cyan-400/10
                px-7 py-3.5 font-semibold text-cyan-200
                transition-all hover:border-cyan-400/60
                hover:bg-cyan-400/20"
            >
              {text.explore} ↗
            </a>

            <a
              href="/CV%20Zakki%20Ali%20Hakim.pdf"
              download="CV Zakki Ali Hakim.pdf"
              className="rounded-full border
                border-white/20 px-7 py-3.5
                font-semibold text-white/80
                transition-colors hover:border-cyan-400/50
                hover:text-cyan-300"
            >
              {text.download} ↓
            </a>
          </div>
        </section>

        {/* Profile card kanan */}
        <section
          id="profile"
          className="w-full scroll-mt-28"
        >
          <ProfileCard />
        </section>
      </main>

      {/* Bagian pengembangan */}
      <section
        id="pengalaman"
        className="relative z-10 mx-auto max-w-6xl
          scroll-mt-28 px-6 pb-24 sm:px-8"
      >
        <div
          className="rounded-3xl border border-white/10
            bg-white/3 p-7 backdrop-blur-sm sm:p-10"
        >
          <p
            className="text-sm font-medium uppercase
              tracking-[0.2em] text-cyan-300"
          >
            {text.focusLabel}
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            {text.focusTitle}
          </h2>

          <p
            className="mt-4 max-w-3xl leading-8
              text-slate-300"
          >
            {text.focusDescription}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="relative z-10 border-t
          border-white/10 px-6 py-8 text-center
          text-sm text-white/40"
      >
        <p>
          © {new Date().getFullYear()} Zakki Ali Hakim.
          {" "}{text.footer}
        </p>
      </footer>
    </div>
  );
}