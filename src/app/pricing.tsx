const plans = [
  {
    name: "Monthly",
    price: "$9",
    description: "Для старта и быстрого подключения.",
  },
  {
    name: "Yearly",
    price: "$59",
    description: "Лучшее соотношение цены и возможностей.",
    featured: true,
  },
  {
    name: "Lifetime",
    price: "$149",
    description: "Один платёж — долгосрочный доступ.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/10 bg-[#07130A] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm tracking-[0.2em] text-[#96EA0D] uppercase">Тарифы</p>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.75rem] border p-8 backdrop-blur-xl ${
                plan.featured
                  ? "border-[#96EA0D]/40 bg-[#96EA0D]/10 shadow-[0_0_70px_rgba(150,234,13,0.12)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className="text-sm tracking-[0.2em] text-white/50 uppercase">{plan.name}</p>
              <div className="mt-6 text-5xl font-semibold tracking-[-0.05em]">{plan.price}</div>
              <p className="mt-4 text-base leading-7 text-white/68">{plan.description}</p>
              <a
                href="#hero"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-[#96EA0D] text-[#07130A] hover:scale-[1.02]"
                    : "border border-white/15 bg-white/5 text-white hover:border-[#96EA0D]/50 hover:bg-white/10"
                }`}
              >
                Выбрать
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
