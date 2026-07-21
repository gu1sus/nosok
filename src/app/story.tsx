export function Story() {
  return (
    <section id="story" className="border-t border-white/10 bg-[#07130A] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm tracking-[0.2em] text-[#96EA0D] uppercase">О проекте</p>
          <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Интернет должен ощущаться свободным, спокойным и бесшовным.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Nosok строится вокруг идеи нити: соединение не должно ломать ритм,
            сбивать внимание или превращать безопасность в сложный процесс.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(150,234,13,0.08)] backdrop-blur-xl">
          <div className="space-y-4 text-sm leading-7 text-white/72">
            <p>• Премиальная подача без визуального шума</p>
            <p>• Мягкие анимации вместо резких переходов</p>
            <p>• Зелёный акцент только там, где он нужен</p>
            <p>• Удобный сценарий от Hero до CTA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
