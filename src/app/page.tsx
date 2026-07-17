export default function Home() {
  return (
    <main className="min-h-screen bg-[#07130A] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-24 lg:px-10">
        <p className="mb-6 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm tracking-[0.2em] text-[#96EA0D] uppercase">
          VPN нового поколения
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl lg:text-8xl">
          Свяжись со всем миром.
          <span className="block text-[#96EA0D]">Без границ.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
          Nosok VPN — это быстрый, спокойный и премиальный сайт-сервис, который
          связывает пользователя с сетью без лишнего шума.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#96EA0D] px-7 py-3 text-sm font-semibold text-[#07130A] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(150,234,13,0.25)]"
          >
            Скачать бесплатно
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#96EA0D]/50 hover:bg-white/10"
          >
            Подробнее
          </a>
        </div>
      </section>
    </main>
  );
}
