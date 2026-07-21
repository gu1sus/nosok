export function CTA() {
  return (
    <section className="border-t border-white/10 bg-[#07130A] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#96EA0D]/25 bg-[#96EA0D]/10 p-8 text-center shadow-[0_0_80px_rgba(150,234,13,0.12)] backdrop-blur-xl sm:p-12">
        <p className="text-sm tracking-[0.2em] text-[#96EA0D] uppercase">Готово к запуску</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Свяжись со всем миром вместе с Nosok.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg">
          Лендинг уже собран. Осталось только запустить продукт и дать пользователю
          понятный путь к подключению.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#hero"
            className="inline-flex items-center justify-center rounded-full bg-[#96EA0D] px-7 py-3 text-sm font-semibold text-[#07130A] transition hover:scale-[1.02]"
          >
            Скачать бесплатно
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#96EA0D]/50 hover:bg-white/10"
          >
            Выбрать тариф
          </a>
        </div>
      </div>
    </section>
  );
}
