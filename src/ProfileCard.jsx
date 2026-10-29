export default function ProfileCard() {
  return (
    <div className="relative w-full max-w-87.5 mx-auto
      overflow-hidden rounded-[30px]
      border border-white/10 bg-[#080D18]
      shadow-2xl shadow-blue-950/30">

      {/* Foto utama */}
      <div className="relative aspect-3/4 overflow-hidden">

        <img
          src="/profile.jpg"
          alt="Foto profil Zakki"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay agar teks lebih terbaca */}
        <div className="absolute inset-0 bg-linear-to-b
          from-black/60 via-transparent to-black/50" />

        {/* Identitas di bagian atas */}
        <div className="absolute top-9 left-4 right-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            ZAKKI ALI HAKIM
          </h2>

          <p className="text-sm font-medium text-cyan-300">
          Psychology Enthusiast & Nature Explorer
          </p>
        </div>

        {/* Cahaya biru dekoratif */}
        <div className="absolute -bottom-16 left-1/2
          h-32 w-56 -translate-x-1/2 rounded-full
          bg-blue-500/20 blur-3xl pointer-events-none" />

      </div>

      {/* Panel informasi bagian bawah */}
      <div className="absolute bottom-4 left-4 right-4
        flex items-center justify-between gap-3
        rounded-2xl border border-white/10
        bg-black/75 p-3 backdrop-blur-xl">

        <div className="flex min-w-0 items-center gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden
            rounded-full border border-white/20">
            <img
              src="/profile.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              @denrophile.at
            </p>
            <p className="text-xs text-emerald-400">
              Available for work
            </p>
          </div>
        </div>

<a
  href="mailto:zakkiali129@gmail.com?subject=Inquiry%20from%20Your%20Portfolio"
  className="shrink-0 rounded-xl
    border border-white/10 bg-white/5
    px-3 py-3 text-xs font-semibold
    text-white transition-colors
    hover:bg-cyan-400 hover:text-[#050B18]"
>
  Contact ↗
</a>

      </div>
    </div>
  );
}