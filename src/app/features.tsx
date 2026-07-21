const features = [
  {
    title: "Безопасность",
    text: "Шифрование соединения и спокойная работа без лишнего шума.",
  },
  {
    title: "Скорость",
    text: "Быстрый доступ к сети и минимальные задержки при подключении.",
  },
  {
    title: "Свобода",
    text: "Нить, которая соединяет пользователя с миром без границ.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-white/10 bg-[#07130A] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm tracking-[0.2em] text-[#96EA0D] uppercase">Возможности</p>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/68">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
