export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#07130A]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(150,234,13,0.16),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(150,234,13,0.10),transparent_28%)]" />
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
        <span className="mb-6 inline-flex w-fit rounded-full border border-[#96EA0D]/20 bg-[#96EA0D]/8 px-4 py-2 text-sm tracking-[0.22em] text-[#96EA0D] uppercase">
          VPN нового поколения
        </span>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Свяжись со всем миром.
          <span className="block text-[#96EA0D]">Без границ.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
          Nosok VPN — это спокойный, быстрый и премиальный лендинг-продукт,
          построенный вокруг идеи соединения, нити и безопасного доступа к миру.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#96EA0D] px-7 py-3 text-sm font-semibold text-[#07130A] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(150,234,13,0.25)]"
          >
            Скачать бесплатно
          </a>
          <a
            href="#story"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#96EA0D]/50 hover:bg-white/10"
          >
            Подробнее
          </a>
        </div>
      </div>
    </section>
  );
}
